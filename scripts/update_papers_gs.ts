#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write

const SCHOLAR_USER_ID = "u_HbXUUAAAAJ";
const DEFAULT_GS_URL =
  `https://scholar.google.com/citations?hl=en&user=${SCHOLAR_USER_ID}&view_op=list_works&sortby=pubdate&cstart=0&pagesize=100`;
const FALLBACK_GS_URL =
  `https://scholar.google.com/citations?hl=en&user=${SCHOLAR_USER_ID}`;
const DEFAULT_CONFIG_PATH = "data/papers.json";
const DEFAULT_OUTPUT_PATH = "content/papers.md";
const CONSENT_COOKIE =
  "CONSENT=YES+cb.20240214-17-p0.en+FX+123; SOCS=CAESHAgBEhIaAB";
const BASE_REQUEST_HEADERS: Record<string, string> = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Referer: "https://scholar.google.com/",
};

const args = new Set(Deno.args);
const dryRun = args.has("--dry-run");

const positional: string[] = [];
let htmlPath: string | null = null;
let debugHtmlPath: string | null = null;
let customCookie: string | null = null;
for (let i = 0; i < Deno.args.length; i += 1) {
  const arg = Deno.args[i];
  if (arg === "--html") {
    htmlPath = Deno.args[i + 1] ?? null;
    i += 1;
    continue;
  }
  if (arg === "--debug-html") {
    debugHtmlPath = Deno.args[i + 1] ?? null;
    i += 1;
    continue;
  }
  if (arg === "--cookie") {
    customCookie = Deno.args[i + 1] ?? null;
    i += 1;
    continue;
  }
  if (arg.startsWith("--")) continue;
  positional.push(arg);
}

const configPath = positional[0] ?? DEFAULT_CONFIG_PATH;
const outputPath = positional[1] ?? DEFAULT_OUTPUT_PATH;
let fetchFailed = false;
let fetchBlocked = false;

type FetchAttempt = {
  label: string;
  url: string;
  cookie: string | null;
};

function makeHeaders(cookie: string | null): HeadersInit {
  if (!cookie) return BASE_REQUEST_HEADERS;
  return { ...BASE_REQUEST_HEADERS, Cookie: cookie };
}

function looksLikeBlockedHtml(html: string): boolean {
  return /unusual traffic|not a robot|captcha|recaptcha|sorry\/index|consent\.google\.com/i
    .test(html);
}

function hasCitationRows(html: string): boolean {
  return /<tr[^>]*class=(["'])[^"'<>]*\bgsc_a_tr\b/i.test(html);
}

async function loadGsHtml() {
  if (htmlPath) {
    const html = await Deno.readTextFile(htmlPath);
    if (debugHtmlPath) {
      await Deno.writeTextFile(debugHtmlPath, html);
    }
    return html;
  }

  const attempts: FetchAttempt[] = [];
  const cookieValues: string[] = [];
  if (customCookie && customCookie.trim()) {
    cookieValues.push(customCookie.trim());
  }
  cookieValues.push("");
  cookieValues.push(CONSENT_COOKIE);
  const seenCookies = new Set<string>();
  const normalizedCookies = cookieValues
    .map((value) => value.trim())
    .filter((value) => {
      if (seenCookies.has(value)) return false;
      seenCookies.add(value);
      return true;
    });

  for (const url of [DEFAULT_GS_URL, FALLBACK_GS_URL]) {
    for (const cookieValue of normalizedCookies) {
      const label = cookieValue
        ? cookieValue === CONSENT_COOKIE ? "consent-cookie" : "custom-cookie"
        : "plain";
      attempts.push({ label, url, cookie: cookieValue || null });
    }
  }

  let bestHtml = "";
  let lastErrorMessage = "";
  for (const attempt of attempts) {
    try {
      const response = await fetch(attempt.url, {
        headers: makeHeaders(attempt.cookie),
      });
      if (!response.ok) {
        throw new Error(
          `Request failed (${response.status}) for ${attempt.url} [${attempt.label}]`,
        );
      }
      const html = await response.text();
      if (!html) continue;
      if (!bestHtml || html.length > bestHtml.length) {
        bestHtml = html;
      }
      if (hasCitationRows(html)) {
        if (debugHtmlPath) {
          await Deno.writeTextFile(debugHtmlPath, html);
        }
        return html;
      }
      if (looksLikeBlockedHtml(html)) {
        fetchBlocked = true;
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      lastErrorMessage = message;
    }
  }

  if (debugHtmlPath && bestHtml) {
    await Deno.writeTextFile(debugHtmlPath, bestHtml);
  }

  if (bestHtml) {
    return bestHtml;
  }

  fetchFailed = true;
  if (lastErrorMessage) {
    console.warn(
      `Warning: unable to fetch Google Scholar (${lastErrorMessage}). Falling back to configured citation counts where available.`,
    );
  } else {
    console.warn(
      "Warning: unable to fetch Google Scholar. Falling back to configured citation counts where available.",
    );
  }
  return "";
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
  const rowRegex =
    /<tr[^>]*class=(["'])[^"'<>]*\bgsc_a_tr\b[^"'<>]*\1[^>]*>([\s\S]*?)<\/tr>/gi;
  let match: RegExpExecArray | null;
  while ((match = rowRegex.exec(html))) {
    rows.push(match[2]);
  }
  return rows;
}

function stripTags(value: string): string {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function extractTitle(row: string): string | null {
  const titleMatch = row.match(
    /<a[^>]*class=(["'])[^"'<>]*\bgsc_a_at\b[^"'<>]*\1[^>]*>([\s\S]*?)<\/a>/i,
  );
  if (!titleMatch) return null;
  const title = stripTags(titleMatch[2]);
  return title || null;
}

function extractCitationCount(row: string): number | null {
  const citeMatch = row.match(
    /<a[^>]*class=(["'])[^"'<>]*\bgsc_a_ac\b[^"'<>]*\1[^>]*>([\s\S]*?)<\/a>/i,
  );
  if (!citeMatch) return null;
  const raw = stripTags(citeMatch[2]);
  if (!raw) return null;
  const count = Number.parseInt(raw.replace(/,/g, ""), 10);
  return Number.isFinite(count) ? count : null;
}

function escapeMarkdownCell(value: string) {
  return value.replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();
}

function parseCitationValue(value: unknown): number | null {
  if (value === null || value === undefined) return null;
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const parsed = Number.parseInt(trimmed.replace(/,/g, ""), 10);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
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
  if (!fetchFailed) {
    const looksBlocked = fetchBlocked ||
      /unusual traffic|not a robot|captcha|recaptcha|sorry\/index|consent\.google\.com/i
        .test(gsHtml);
    const warning = looksBlocked
      ? "Warning: Google Scholar appears to have returned a bot-check page. Using configured citation counts."
      : "Warning: no citation rows parsed from Google Scholar HTML. The page structure may have changed. Using configured citation counts.";
    console.warn(
      warning,
    );
  }
}

function renderRow(paper: PaperConfig) {
  const title = `[${escapeMarkdownCell(paper.title)}](${paper.url})`;
  const venue = escapeMarkdownCell(paper.venue);
  const year = escapeMarkdownCell(String(paper.year));
  const key = normalize(paper.title);
  const cited = citationMap.get(key) ?? parseCitationValue(paper.citations);
  const citedCell = cited === null ? "" : String(cited);
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
const frontMatter = frontMatterMatch?.[0].trimEnd() ??
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
