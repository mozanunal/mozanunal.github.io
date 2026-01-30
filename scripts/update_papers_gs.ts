#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write

const DEFAULT_GS_URL =
  "https://scholar.google.com/citations?user=u_HbXUUAAAAJ&hl=en";
const DEFAULT_CONFIG_PATH = "data/papers.json";
const DEFAULT_OUTPUT_PATH = "content/papers.md";

const args = new Set(Deno.args);
const dryRun = args.has("--dry-run");

const positional: string[] = [];
let htmlPath: string | null = null;
for (let i = 0; i < Deno.args.length; i += 1) {
  const arg = Deno.args[i];
  if (arg === "--html") {
    htmlPath = Deno.args[i + 1] ?? null;
    i += 1;
    continue;
  }
  if (arg.startsWith("--")) continue;
  positional.push(arg);
}

const configPath = positional[0] ?? DEFAULT_CONFIG_PATH;
const outputPath = positional[1] ?? DEFAULT_OUTPUT_PATH;

async function loadGsHtml() {
  if (htmlPath) {
    return await Deno.readTextFile(htmlPath);
  }
  const response = await fetch(DEFAULT_GS_URL, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
      Accept: "text/html",
    },
  });
  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${DEFAULT_GS_URL}`);
  }
  return await response.text();
}

const gsHtml = await loadGsHtml();
const configText = await Deno.readTextFile(configPath);

type PaperConfig = {
  title: string;
  url: string;
  venue: string;
  year: number | string;
  citations?: number | null;
};

type ConfigShape = { papers: PaperConfig[] } | PaperConfig[];

const parsed = JSON.parse(configText) as ConfigShape;
const papers = Array.isArray(parsed) ? parsed : parsed.papers;

const normalize = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

function extractRows(html: string): string[] {
  const rows: string[] = [];
  const rowRegex = /<tr class="gsc_a_tr">([\s\S]*?)<\/tr>/g;
  let match: RegExpExecArray | null;
  while ((match = rowRegex.exec(html))) {
    rows.push(match[1]);
  }
  return rows;
}

function extractTitle(row: string): string | null {
  const titleMatch = row.match(/class="gsc_a_at">([^<]+)</);
  return titleMatch?.[1]?.trim() || null;
}

function extractCitationCount(row: string): number | null {
  const citeMatch = row.match(/class="gsc_a_ac[^>]*>([^<]*)</);
  if (!citeMatch) return null;
  const raw = citeMatch[1].trim();
  if (!raw) return null;
  const count = Number.parseInt(raw, 10);
  return Number.isFinite(count) ? count : null;
}

function escapeMarkdownCell(value: string) {
  return value.replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();
}

const citationMap = new Map<string, number>();
for (const row of extractRows(gsHtml)) {
  const title = extractTitle(row);
  if (!title) continue;
  const count = extractCitationCount(row);
  if (count === null) continue;
  const key = normalize(title);
  if (!key) continue;
  const existing = citationMap.get(key);
  if (existing === undefined || count > existing) {
    citationMap.set(key, count);
  }
}

if (citationMap.size === 0) {
  console.warn(
    "Warning: No citation rows parsed from Google Scholar HTML. The page may require manual refresh or a different fetch method.",
  );
}

function renderRow(paper: PaperConfig) {
  const title = `[${escapeMarkdownCell(paper.title)}](${paper.url})`;
  const venue = escapeMarkdownCell(paper.venue);
  const year = escapeMarkdownCell(String(paper.year));
  const key = normalize(paper.title);
  const cited = citationMap.get(key) ?? paper.citations ?? "";
  const citedCell = cited === "" || cited === null ? "" : String(cited);
  return `| ${title} | ${venue} | ${year} | ${citedCell} |`;
}

const frontMatterRegex = /^---\n[\s\S]*?\n---\n/;
let existing = "";
try {
  existing = await Deno.readTextFile(outputPath);
} catch {
  existing = "";
}

const frontMatterMatch = existing.match(frontMatterRegex);
const frontMatter =
  frontMatterMatch?.[0].trimEnd() ??
  `---\ntitle: "Papers"\ndate: 2025-06-12\ndraft: false\n---`;

const header = "| Paper | Venue | Year | Cited by |\n| --- | --- | --- | --- |";
const rows = papers.map(renderRow).join("\n");
const note =
  "> _Citation counts were captured from Google Scholar and may change over time._";
const body = `${header}\n${rows}\n\n${note}`;
const output = `${frontMatter}\n\n${body}\n`;

if (dryRun) {
  console.log(`Dry run complete. Would update ${outputPath}.`);
  Deno.exit(0);
}

await Deno.writeTextFile(outputPath, output);
console.log(`Updated ${outputPath}.`);
