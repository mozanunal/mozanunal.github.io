#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write

const DEFAULT_CONFIG_PATH = "data/projects.json";
const DEFAULT_OUTPUT_PATH = "content/projects.md";

const args = new Set(Deno.args);
const dryRun = args.has("--dry-run");
const offline = args.has("--offline");

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
  const raw = matchMeta(html, "octolytics-dimension-repository_stars", "name");
  if (!raw) return null;
  const value = Number.parseInt(raw, 10);
  return Number.isFinite(value) ? value : null;
}

function parseForks(html: string) {
  const raw = matchMeta(html, "octolytics-dimension-repository_forks", "name");
  if (!raw) return null;
  const value = Number.parseInt(raw, 10);
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

function buildFallback(entry: RepoConfig) {
  const repo = normalizeRepo(entry);
  const repoId = `${repo.owner}/${repo.name}`;
  return {
    repoId,
    url: repo.url,
    title: entry.title ?? repo.name,
    description: entry.description ?? "",
    language: entry.language ?? "",
    stars: entry.stars ?? null,
    forks: entry.forks ?? null,
  };
}

async function fetchRepoInfo(entry: RepoConfig) {
  const repo = normalizeRepo(entry);
  const repoId = `${repo.owner}/${repo.name}`;
  if (offline) {
    return buildFallback(entry);
  }

  const response = await fetch(repo.url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
      Accept: "text/html",
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${repo.url}`);
  }

  const html = await response.text();
  const description = parseDescription(html, repoId) ?? entry.description ?? "";
  const language = parseLanguage(html) ?? entry.language ?? "";
  const stars = parseStars(html) ?? entry.stars ?? null;
  const forks = parseForks(html) ?? entry.forks ?? null;

  return {
    repoId,
    url: repo.url,
    title: entry.title ?? repo.name,
    description,
    language,
    stars,
    forks,
  };
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
  for (const entry of repos) {
    try {
      const info = await fetchRepoInfo(entry);
      rows.push(renderRow(info));
    } catch (error) {
      const repoId = `${entry.owner ?? defaultOwner}/${entry.name}`;
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`- ${repoId}: ${message}`);
      const fallback = buildFallback(entry);
      rows.push(renderRow(fallback));
    }
    if (!offline) {
      await sleep(250);
    }
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
