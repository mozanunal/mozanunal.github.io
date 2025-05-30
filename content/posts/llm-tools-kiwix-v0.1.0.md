---
title: "Llm Tools Kiwix V0.1.0"
date: 2025-06-04T22:45:54+03:00
draft: false
---

I'm excited to announce the **llm-tools-kiwix** plugin: now available for [llm.datasette.io](https://llm.datasette.io/). This tool allows you to expose offline [Kiwix](https://www.kiwix.org/) ZIM archives (think Wikipedia, Stack Exchange, DevDocs, etc.) to Large Language Models (LLMs) via the `llm` command-line tool or Python API.

<!--more-->

## Why llm-tools-kiwix?

The ecosystem around LLMs is booming, but most reference tools rely on an internet connection. Enter **Kiwix**: a project distributing ZIM archives of web sites—like  Wikipedia, DevDocs, and Stack Exchange—for true offline access.

Now, you can enable your LLM to tap into these huge offline knowledge bases, _even when you're disconnected_, for search and retrieval-augmented generation (RAG) workflows.

## Features

- **Automatic ZIM file discovery**
  Finds `.zim` files in your current working directory or in any folder set by the `KIWIX_HOME` environment variable.

- **Dynamic tool descriptions for LLMs**
  The list of available ZIM files is automatically reflected in the LLM tools interface—making tool selection smarter.

- **Zero network requirement**
  The plugin works entirely offline, leveraging the power of Kiwix archives.

- **Multiple retrieval tools**
  - `kiwix_search_and_collect`: high-level search and content summarization from a ZIM file.
  - `kiwix_search`: get search results and metadata.
  - `kiwix_read`: fetch the content of a specific article.

## Quickstart

Install the plugin directly from PyPI:

```bash
llm install llm-tools-kiwix
```

### How does it work?

1. **Acquire ZIM files**
   Download from [Kiwix Downloads](https://download.kiwix.org/zim/). Examples:
   - `wikipedia_en_all_nopic_2023-10.zim`
   - `devdocs_en_docker_2025-04.zim`
   - `askubuntu.com_en_all_2024-10.zim`

2. **Place ZIM files for discovery**
   Put `.zim` files in your working directory or set a `KIWIX_HOME` for auto-discovery.

3. **List tools and ZIMs**
   See available tools with detected ZIM files:
   ```bash
   llm tools list
   ```
   You'll find descriptions like:
   ```
   Available ZIM files for 'zim_file_path' argument: ./askubuntu.com_en_all_2024-10.zim, ./devdocs_en_docker_2025-04.zim...
   ```

### Example: Search Docker DevDocs, Offline

Let's imagine you're debugging Docker (rootless) and want fast, offline help:

```bash
llm -m gpt-4o-mini --tool kiwix_search_and_collect \
  "I'm getting a permission error while trying to run Docker in rootless mode. Please search and provide relevant information from the Docker devdocs." \
  --tools-debug
```
- Swap `gpt-4o-mini` for your model of choice.
- The LLM will pick up the right ZIM (`devdocs_en_docker_2025-04.zim`) and walk through the available docs—all offline.

## Dev & Contribution

- Clone the repo and create a virtual environment:
  ```bash
  git clone https://github.com/mozanunal/llm-tools-kiwix.git
  cd llm-tools-kiwix
  python -m venv venv
  source venv/bin/activate
  pip install -e '.[test]'
  ```
- Run the tests:
  ```bash
  python -m pytest
  ```
- Place ZIM files in your project root or under `KIWIX_HOME`, or mock the Kiwix backend for test development.

---

**llm-tools-kiwix** is open-source (Apache 2.0). Read more or contribute on [GitHub](https://github.com/mozanunal/llm-tools-kiwix).

Unplug, empower your LLM, and take Wikipedia anywhere!

- [Get the code on PyPI](https://pypi.org/project/llm-tools-kiwix/)
- [View source and docs](https://github.com/mozanunal/llm-tools-kiwix)

