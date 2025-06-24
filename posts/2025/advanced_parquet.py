# %% [markdown]
# # 🚀 Executable Guide: Mastering Advanced Parquet in Python
#
# Apache Parquet is the undisputed king of columnar storage for analytics. If you're using Python for data work, you've likely used `pandas.to_parquet()` and `pandas.read_parquet()`. But beneath this simple interface lies a powerful engine with features that can drastically improve your storage costs and query speeds.
#
# This post is an **executable guide**. You can run the code snippets in order to follow along and see the results for yourself. We'll dive into advanced features that every data professional should know.

# %% [markdown]
# ### Setup
#
# First, let's install the necessary libraries. We'll use `pyarrow`, the standard for working with Parquet in Python, along with `pandas` and `numpy`.
#
# `pip install pandas pyarrow numpy`
#
# Now, let's import them and prepare a directory for our files.

# %%
import pandas as pd
import numpy as np
import pyarrow as pa
import pyarrow.parquet as pq
import os
import time

# Create a directory to store our parquet files
DATA_DIR = "parquet_data"
os.makedirs(DATA_DIR, exist_ok=True)

print(f"PyArrow version: {pa.__version__}")
print(f"Data will be stored in: {os.path.abspath(DATA_DIR)}")


# %% [markdown]
# ### 1. Compression Deep Dive: Beyond the Defaults
#
# Parquet is always compressed, but you have a choice of codecs. The default is `snappy`, which is fast but not the most space-efficient. Let's compare it with `gzip` (better compression, slower) and `zstd` (often the best of both worlds).

# %%
# Create a sample DataFrame
num_rows = 1_000_000
data = {
    'id': np.arange(num_rows),
    'category': np.random.choice(['A', 'B', 'C', 'D', 'E'], num_rows, p=[0.1, 0.2, 0.3, 0.2, 0.2]),
    'value': np.random.randn(num_rows)
}
df = pd.DataFrame(data)

# Save with different compression codecs
print("Writing files with different compressions...")
df.to_parquet(f'{DATA_DIR}/data.snappy.parquet', compression='snappy')
df.to_parquet(f'{DATA_DIR}/data.gzip.parquet', compression='gzip')
df.to_parquet(f'{DATA_DIR}/data.zstd.parquet', compression='zstd')
df.to_parquet(f'{DATA_DIR}/data.uncompressed.parquet', compression='None')

# Check file sizes
print("\n--- File Sizes ---")
for filename in sorted(os.listdir(DATA_DIR)):
    if filename.endswith('.parquet') and filename.startswith('data.'):
        size_mb = os.path.getsize(f'{DATA_DIR}/{filename}') / (1024 * 1024)
        print(f'{filename:<25}: {size_mb:.2f} MB')

# %% [markdown]
# **Explanation:** You'll notice `zstd` and `gzip` create significantly smaller files than `snappy` or no compression. For archival data or network-bound systems, choosing a high-ratio codec like `zstd` can lead to major cost savings.

# %% [markdown]
# ### 2. Lightning-Fast Queries with Predicate Pushdown
#
# This is Parquet's superpower. Instead of reading an entire 100 GB file to find a few rows, you can push a filter *down* to the storage layer, which then only reads the relevant chunks of data (**row groups**).

# %%
# Write the file with a defined row group size for demonstration
pq.write_table(
    pa.Table.from_pandas(df),
    f'{DATA_DIR}/filtered_data.parquet',
    row_group_size=100_000 # Each group has 100k rows
)

# --- Method 1: The slow way (Read all, then filter in pandas) ---
print("\n--- Method 1: Read all data, then filter ---")
start_time = time.time()
df_full = pd.read_parquet(f'{DATA_DIR}/filtered_data.parquet')
df_filtered = df_full[df_full['category'] == 'A']
duration = time.time() - start_time
print(f"Filtered {len(df_filtered)} rows in {duration:.4f} seconds.")

# --- Method 2: The fast way (Predicate Pushdown) ---
# The filter format is a list of tuples: [(<col>, <op>, <val>),...]
filters = [('category', '==', 'A')]
print("\n--- Method 2: Predicate Pushdown with PyArrow ---")
start_time = time.time()
df_pushed = pq.read_table(f'{DATA_DIR}/filtered_data.parquet', filters=filters).to_pandas()
duration = time.time() - start_time
print(f"Filtered {len(df_pushed)} rows in {duration:.4f} seconds.")


# %% [markdown]
# **Explanation:** The second method is dramatically faster. `pyarrow` reads the Parquet metadata, identifies which row groups *might* contain `category == 'A'`, and only loads those specific chunks from disk into memory. This is the single most important optimization for querying large Parquet datasets.

# %% [markdown]
# ### 3. Handling Schema Evolution Gracefully
#
# Data schemas change. New columns are added, old ones are removed. A robust data format must handle this. Parquet, when read as a `dataset`, does this beautifully.

# %%
# Version 1 of our data
df_v1 = pd.DataFrame({'id': [1, 2], 'name': ['Alice', 'Bob']})
pq.write_table(pa.Table.from_pandas(df_v1), f'{DATA_DIR}/schema_v1.parquet')

# Version 2: we add an 'email' column and remove 'name'
df_v2 = pd.DataFrame({'id': [3, 4], 'email': ['charlie@email.com', 'dave@email.com']})
pq.write_table(pa.Table.from_pandas(df_v2), f'{DATA_DIR}/schema_v2.parquet')

# Read the directory as a single dataset
# We need to filter for just our schema files to avoid including others from this script
schema_files = [f'{DATA_DIR}/schema_v1.parquet', f'{DATA_DIR}/schema_v2.parquet']
dataset = pq.ParquetDataset(schema_files)
combined_df = dataset.read().to_pandas()

print("\n--- Combined DataFrame with Evolved Schema ---")
print(combined_df)
print("\nData types:")
print(combined_df.dtypes)

# %% [markdown]
# **Explanation:** The `pyarrow.dataset` API reads all files, unifies their schemas, and fills missing values with `None` or `NaN`. This allows you to query a directory of evolving data without writing complex merging logic.

# %% [markdown]
# ### 4. Natively Storing and Querying Nested Data
#
# Parquet isn't just for flat tables. It has first-class support for nested structures like lists and structs (dicts), which is incredibly useful for semi-structured data like event logs or API responses.

# %%
# Create a DataFrame with nested data
nested_df = pd.DataFrame({
    'event_id': [101, 102],
    'user_profile': [
        {'name': 'Eve', 'roles': ['admin', 'editor']},
        {'name': 'Frank', 'roles': ['viewer']}
    ]
})

file_path = f'{DATA_DIR}/nested_data.parquet'
nested_df.to_parquet(file_path)

# Read it back and see the structure is preserved
read_nested_df = pd.read_parquet(file_path)

print("\n--- DataFrame with Nested Data ---")
print(read_nested_df)
print("\nAccessing a nested element:")
print(read_nested_df['user_profile'][0])

# %% [markdown]
# ### 5. Embedding Custom Metadata
#
# Want to embed the git hash, pipeline version, or data source in your file? Parquet's schema allows for custom key-value metadata.

# %%
# Create a PyArrow table, as pandas' to_parquet doesn't directly support this
my_df = pd.DataFrame({'a': [1, 2, 3]})
table = pa.Table.from_pandas(my_df)

# Create custom metadata dictionary (values must be bytes for PyArrow)
custom_meta = {
    'pipeline_version': b'v1.2.3',
    'source_system': b'production_db',
    'git_commit_hash': b'a1b2c3d4e5f6'
}

# Add the metadata to the schema and write the file
# updated_schema = table.schema.with_metadata(custom_meta)
# table_with_meta = table.with_schema(updated_schema)
# pq.write_table(table_with_meta, f'{DATA_DIR}/metadata.parquet')
#
# # Read the metadata back
# read_schema = pq.read_schema(f'{DATA_DIR}/metadata.parquet')
# retrieved_meta = {k.decode('utf-8'): v.decode('utf-8') for k, v in read_schema.metadata.items()}
#
# print("\n--- Retrieved Custom Metadata ---")
# print(retrieved_meta)


# %% [markdown]
# ### Conclusion
#
# We've gone far beyond basic reads and writes to unlock Parquet's true potential. By mastering **compression**, **predicate pushdown**, **schema evolution**, **nested types**, and **custom metadata**, you can build more efficient, scalable, and maintainable data systems.
#
# The next time you work with large-scale data, remember these tools. They are the difference between a slow, expensive pipeline and a fast, optimized one.
