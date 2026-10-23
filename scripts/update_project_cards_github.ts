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

type GitHubRepo = {
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

function escapeMarkdownCell(value: string) {
  return value.replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();
}

function readGitHubToken() {
  try {
    return Deno.env.get("GITHUB_TOKEN") ?? null;
  } catch {
    return null;
  }
}

const githubToken = readGitHubToken();

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

  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "mozanunal.com-project-cards",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (githubToken) headers.Authorization = `Bearer ${githubToken}`;

  const apiUrl = `https://api.github.com/repos/${repoId}`;
  const response = await fetch(apiUrl, { headers });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} fetching ${apiUrl}`);
  }

  const data = await response.json() as GitHubRepo;
  const description = data.description ?? entry.description ?? "";
  const language = data.language ?? entry.language ?? "";
  const stars = Number.isFinite(data.stargazers_count) ? data.stargazers_count : null;
  const forks = Number.isFinite(data.forks_count) ? data.forks_count : null;

  if (stars === null) {
    errors.push(`missing star count for ${repoId}`);
  }
  if (forks === null) {
    errors.push(`missing fork count for ${repoId}`);
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
    console.error("Error: failed to fetch live data. Aborting without updating.");
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
