---
title: "Sllm.nvim v0.4.0: Modes as YAML, Radical Simplicity"
date: 2026-01-23T10:00:00+03:00
draft: false
---

I'm excited to announce
**[sllm.nvim v0.4.0](https://github.com/mozanunal/sllm.nvim)** – a significant
release that doubles down on the plugin's core philosophy: modes are just YAML,
tools are just Python functions, and you stay in control.

## The Philosophy Recap

For those new to `sllm.nvim`, it's a thin Neovim wrapper around Simon Willison's
[`llm`](https://llm.datasette.io/) CLI. The design philosophy is simple:

- **You control context** – Add files, selections, URLs, diagnostics, or shell
  output explicitly. The LLM sees exactly what you give it.
- **Radical simplicity** – The plugin delegates all heavy lifting to the
  battle-tested `llm` CLI (~500 lines of Lua).
- **CLI ecosystem access** – 100+ models via OpenRouter, local models via
  Ollama, plus plugins for PDFs, web search, and more.

## What's New in v0.4.0

### Modes Are Just YAML

The template system has been refined and expanded. Creating a custom mode is now
as simple as writing a 5-line YAML file:

```yaml
# ~/.config/io.datasette.llm/templates/my_reviewer.yaml
system: |
  You are a code reviewer. Be concise and actionable.
  Focus on bugs, not style.
```

The plugin ships with four default modes:

- **`sllm_chat`** – General-purpose conversations
- **`sllm_read`** – Explore codebases with read-only tools (list, read, grep,
  glob)
- **`sllm_agent`** – Full agentic mode with bash/read/write/edit/grep tools
- **`sllm_complete`** – Inline completion at cursor position

Switch modes with `<leader>sM` or `/template`. Edit them with
`llm templates edit sllm_agent`.

### On-the-fly Tools Refined

The on-the-fly function registration (`/add-function` or `<leader>sx` →
"add-function") continues to be a standout feature. Select any Python function
in your buffer and the LLM can use it immediately:

```python
def fetch_user_data(user_id: str) -> str:
    """Fetch user data from the database.

    Args:
        user_id: The user's ID
    """
    # Your implementation here
    return json.dumps(db.get_user(user_id))
```

Select it, run `/add-function`, and the LLM can now query your database
mid-conversation. No configuration, no restart needed.

### Slash Commands System

A new unified command system replaces scattered keymaps with discoverable
actions:

- `<leader>sx` opens a fuzzy command picker
- Type `/command` directly in the prompt (e.g., `/new`, `/model`, `/add-file`)

Commands are organized by purpose:

- **Chat**: `/new`, `/history`, `/cancel`
- **Context**: `/add-file`, `/add-url`, `/add-selection`, `/add-diagnostics`,
  `/add-output`, `/add-tool`, `/add-function`, `/clear-context`
- **Model**: `/model`, `/template`, `/online`, `/system`
- **Options**: `/options`, `/set-option`, `/reset-options`
- **Copy**: `/copy-code`, `/copy-code-first`, `/copy-response`

### Inline Completion

`<leader><Tab>` triggers inline completion at your cursor position. The
`sllm_complete` template sends buffer context and returns raw code suitable for
direct insertion – no markdown wrapping, just completions that fit.

### Token Tracking in Winbar

The LLM buffer's winbar now displays token usage stats and estimated costs,
giving you visibility into your API consumption at a glance.

### Pre/Post Hooks

Automate context gathering with hooks:

```lua
require('sllm').setup({
  pre_hooks = {
    { command = 'git diff --cached', add_to_context = true },
  },
  post_hooks = {
    { command = 'notify-send "sllm.nvim" "Response ready"' },
  },
})
```

Now every prompt automatically includes your staged changes.

## Quick Start

```bash
# Install llm and a provider
brew install llm && llm install llm-openrouter && llm keys set openrouter
```

```lua
-- lazy.nvim
{
  'mozanunal/sllm.nvim',
  config = function()
    require('sllm').setup()
  end,
}
```

Press `<leader>ss` to start chatting.

## Documentation

- [Modes & Templates](https://github.com/mozanunal/sllm.nvim/blob/main/doc/modes.md)
- [Slash Commands](https://github.com/mozanunal/sllm.nvim/blob/main/doc/slash_commands.md)
- [Configuration](https://github.com/mozanunal/sllm.nvim/blob/main/doc/configure.md)
- [Hooks](https://github.com/mozanunal/sllm.nvim/blob/main/doc/hooks.md)

## Try It Out

If this CLI-first, co-pilot-centric approach resonates with you, give
`sllm.nvim` a try:
**[mozanunal/sllm.nvim](https://github.com/mozanunal/sllm.nvim)**

Feedback, issues, and contributions are always welcome!
