---
title: "Style Guide"
date: 2026-10-23
noindex: true
toc: false
sitemap:
  disable: true
build:
  list: never
---

Every element this site renders, styled by the
[mozanunal design system](https://github.com/mozanunal/mozanunal-docs/blob/main/wiki/design_system/README.md).
Use the theme toggle to check both themes.

## Color roles

<div class="swatches">
  <div><span style="background: var(--color-bg)"></span><code>--color-bg</code></div>
  <div><span style="background: var(--color-surface)"></span><code>--color-surface</code></div>
  <div><span style="background: var(--color-code)"></span><code>--color-code</code></div>
  <div><span style="background: var(--color-text)"></span><code>--color-text</code></div>
  <div><span style="background: var(--color-text-muted)"></span><code>--color-text-muted</code></div>
  <div><span style="background: var(--color-heading)"></span><code>--color-heading</code></div>
  <div><span style="background: var(--color-accent)"></span><code>--color-accent</code></div>
  <div><span style="background: var(--color-accent-hover)"></span><code>--color-accent-hover</code></div>
  <div><span style="background: var(--color-border)"></span><code>--color-border</code></div>
  <div><span style="background: var(--color-danger)"></span><code>--color-danger</code></div>
  <div><span style="background: var(--color-success)"></span><code>--color-success</code></div>
  <div><span style="background: var(--color-warning)"></span><code>--color-warning</code></div>
</div>

## Typography

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

A paragraph of body text with a [link to a post](/posts/), some **bold**,
some _emphasis_, and `inline code`. Prose is limited to about seventy
characters per line so long articles stay comfortable to read, while code
blocks and tables can use the full width of the page.

<p><em><small>January 23, 2026 · 3 min read</small></em></p>

## Lists

- An unordered item
- Another item with a [link](/papers/)
  - A nested item

1. First step
2. Second step

## Quote and callout

> Build it once. Ship it. Don't touch it again unless _you_ choose to.

{{< callout type="note" >}}
A callout renders as an aside with an accent rule.
{{< /callout >}}

{{< details summary="Expandable details" >}}
Hidden content revealed on click.
{{< /details >}}

## Code

```go
// Greet returns a friendly message.
func Greet(name string) string {
	if name == "" {
		return "Hello, world"
	}
	return fmt.Sprintf("Hello, %s", name)
}
```

## Table

| Token            | Dark      | Light     |
| ---------------- | --------- | --------- |
| `--color-bg`     | `#0f172a` | `#f8fafc` |
| `--color-accent` | `#61aeff` | `#0969da` |
| `--color-text`   | `#e2e8f0` | `#334155` |

---

The rule above is a thematic break.
