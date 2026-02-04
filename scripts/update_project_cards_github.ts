#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write

const DEFAULT_CONFIG_PATH = "data/projects.json";
const DEFAULT_OUTPUT_PATH = "content/projects.md";

const args = new Set(Deno.args);
const dryRun = args.has("--dry-run");

const positional = Deno.args.filter((arg) => !arg.startsWith("--"));
const configPath = positional[0] ?? DEFAULT_CONFIG_PATH;
const outputPath = positional[1] ?? DEFAULT_OUTPUT_PATH;

const configText = await Deno.readTextFile(configPath);

type RepoConfig = {
  name: string;
  owner?: string;
  url?: string;
  title?: string;
  description?: string;
  language?: string;
  stars?: number;
  forks?: number;
};

type ConfigShape =
  | { owner?: string; repos: RepoConfig[] }
  | RepoConfig[];

const parsed = JSON.parse(configText) as ConfigShape;
const defaultOwner = Array.isArray(parsed) ? "mozanunal" : parsed.owner ?? "mozanunal";
const repos = Array.isArray(parsed) ? parsed : parsed.repos;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const htmlEntityMap: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: "\"",
  apos: "'",
};

function decodeHtmlEntities(value: string) {
  return value.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, key) => {
    if (key in htmlEntityMap) return htmlEntityMap[key];
    if (key.startsWith("#x") || key.startsWith("#X")) {
      const code = Number.parseInt(key.slice(2), 16);
      return Number.isFinite(code) ? String.fromCharCode(code) : match;
    }
    if (key.startsWith("#")) {
      const code = Number.parseInt(key.slice(1), 10);
      return Number.isFinite(code) ? String.fromCharCode(code) : match;
    }
    return match;
  });
}

function escapeMarkdownCell(value: string) {
  return value.replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();
}

function matchMeta(html: string, key: string, attr: "name" | "property") {
  const regex = new RegExp(
    `<meta[^>]+${attr}="${key}"[^>]+content="([^"]*)"`,
    "i",
  );
  const match = html.match(regex);
  return match?.[1] ?? null;
}

function parseStars(html: string) {
  const match = html.match(/id="repo-stars-counter-star"[^>]*title="(\d+)"/);
  if (!match) return null;
  const value = Number.parseInt(match[1], 10);
  return Number.isFinite(value) ? value : null;
}

function parseForks(html: string) {
  const match = html.match(/id="repo-network-counter"[^>]*title="(\d+)"/);
  if (!match) return null;
  const value = Number.parseInt(match[1], 10);
  return Number.isFinite(value) ? value : null;
}

function parseLanguage(html: string) {
  const match = html.match(/itemprop="programmingLanguage">([^<]+)</i);
  return match?.[1]?.trim() ?? null;
}

function parseDescription(html: string, repoId: string) {
  const og = matchMeta(html, "og:description", "property");
  const desc = og ?? matchMeta(html, "description", "name");
  if (!desc) return null;
  const decoded = decodeHtmlEntities(desc.trim());
  const prefix = `GitHub - ${repoId}: `;
  if (decoded.startsWith(prefix)) {
    return decoded.slice(prefix.length).trim();
  }
  return decoded;
}

function normalizeRepo(entry: RepoConfig) {
  const owner = entry.owner ?? defaultOwner;
  const name = entry.name;
  const url = entry.url ?? `https://github.com/${owner}/${name}`;
  return { owner, name, url };
}

async function fetchRepoInfo(entry: RepoConfig) {
  const repo = normalizeRepo(entry);
  const repoId = `${repo.owner}/${repo.name}`;
  const errors: string[] = [];

  const response = await fetch(repo.url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
      Accept: "text/html",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} fetching ${repo.url}`);
  }

  const html = await response.text();
  const description = parseDescription(html, repoId) ?? "";
  const language = parseLanguage(html) ?? "";
  const stars = parseStars(html);
  const forks = parseForks(html);

  if (stars === null) {
    errors.push(`failed to parse star count from ${repo.url}`);
  }
  if (forks === null) {
    errors.push(`failed to parse fork count from ${repo.url}`);
  }

  return { repoId, url: repo.url, title: entry.title ?? repo.name, description, language, stars, forks, errors };
}

function renderRow(data: {
  repoId: string;
  url: string;
  title: string;
  description: string;
  language: string;
  stars: number | null;
  forks: number | null;
}) {
  const project = `[${escapeMarkdownCell(data.title)}](${data.url})`;
  const description = data.description
    ? escapeMarkdownCell(data.description)
    : "";
  const stars = data.stars !== null ? String(data.stars) : "";
  const forks = data.forks !== null ? String(data.forks) : "";
  return `| ${project} | ${description} | ${stars} | ${forks} |`;
}

async function main() {
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
    `---\ntitle: "Projects"\ndate: 2025-06-12\ndraft: false\n---`;

  const rows: string[] = [];
  const allErrors: string[] = [];
  for (const entry of repos) {
    const repoId = `${entry.owner ?? defaultOwner}/${entry.name}`;
    try {
      const info = await fetchRepoInfo(entry);
      allErrors.push(...info.errors);
      rows.push(renderRow(info));
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      allErrors.push(`${repoId}: ${message}`);
    }
    await sleep(250);
  }

  if (allErrors.length > 0) {
    console.error("Error: failed to scrape live data. Aborting without updating.");
    for (const err of allErrors) {
      console.error(`  - ${err}`);
    }
    Deno.exit(1);
  }

  const header =
    "| Project | Description | Stars | Forks |\n| --- | --- | --- | --- |";
  const body = `${header}\n${rows.join("\n")}`;
  const output = `${frontMatter}\n\n${body}\n`;

  if (dryRun) {
    console.log(`Dry run complete. Would update ${outputPath}.`);
    return;
  }

  await Deno.writeTextFile(outputPath, output);
  console.log(`Updated ${outputPath}.`);
}

await main();
