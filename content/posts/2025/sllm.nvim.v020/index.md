---
title: "Sllm.nvim v0.2.0: On-the-fly Tools and a CLI-First Philosophy"
date: 2025-06-08T18:44:27+03:00
draft: false
---

I'm thrilled to announce the v0.2.0 release of
[mozanunal/sllm.nvim](https://github.com/mozanunal/sllm.nvim) – a thin Neovim
wrapper around Simon Willison’s amazing `llm` CLI. This release introduces
powerful new features, most notably the ability to define LLM tools on-the-fly
from your code, and further refines the plugin's core philosophy.

The Neovim AI plugin space is indeed bustling! A fair question for any new entry
is: where does it fit? This post aims to answer that by exploring the philosophy
behind `sllm.nvim` and detailing what's new in v0.2.0.

### Why `sllm.nvim`? The Philosophy of a Focused Co-pilot

`sllm.nvim` isn't designed to be a replacement for feature-rich plugins like
`CodeCompanion.nvim` or `Copilot.nvim`, but a focused alternative built on a
distinct philosophy. It was born from the desire to eliminate the constant
context-switching to web UIs, by bringing the power of the `llm` CLI and its
rich context management directly into the editor.

The philosophy is built on four key principles:

1. **On-the-fly Function Tools: A Game-Changer** This is perhaps the most
   significant differentiator. With `<leader>sF`, you can visually select a
   Python function in your buffer and **register it instantly as a tool for the
   LLM to use** in the current conversation. No pre-configuration is needed.
   This is incredibly powerful for interactive development:
   - **Ad-hoc Data Processing:** Have the LLM use your own function to parse a
     log file or reformat a data structure.
   - **Live Codebase Interaction:** Let the LLM use a function from your project
     to query a database or check an application's state. This dynamic, ad-hoc
     workflow provides a level of integration that is unique to `sllm.nvim`.

2. **Radical Simplicity: It's a Wrapper, Not a Monolith** `sllm.nvim` is a thin
   wrapper around the `llm` CLI (~500 lines of Lua). It delegates all heavy
   lifting (API calls, model management, conversation history, and tool
   integration) to Simon Willison's robust, battle-tested, and
   community-maintained tool. This keeps `sllm.nvim` lightweight, transparent,
   and easy to maintain.

3. **Instant Access to an Entire CLI Ecosystem** By building on `llm`, this
   plugin instantly inherits its vast and growing plugin ecosystem.
   - Want to use OpenRouter's 300+ models? Just run
     `llm install llm-openrouter`.
   - Need to feed a PDF manual or a GitHub repo into context? There are `llm`
     plugins for that. This extensibility comes "for free" and is managed at the
     `llm` level, not within the Neovim plugin.

4. **Explicit Control: You Are the Co-pilot, Not the Passenger** `sllm.nvim`
   believes in a co-pilot model where you are always in control. You explicitly
   provide context: the current file (`<leader>sa`), diagnostics (`<leader>sd`),
   the output of a command like `git diff` (`<leader>sx`), a URL, or a new
   function tool (`<leader>sF`). The plugin won't guess your intentions,
   ensuring a predictable, reliable, and secure interaction every time.

### What's New in v0.2.0?

This release brings a host of improvements that double down on the core
philosophy of deep `llm` integration and user control.

#### Headlining Features

- **Register Tools (Functions) On-The-Fly (`<leader>sF`) `(PR #41)`**: As
  detailed above, you can now visually select a Python function and make it
  available to the LLM as a tool for the current session.
- **LLM Tool Context Integration (`llm -T`) `(PR #37)`**: You can now browse
  your installed `llm` tools (from the CLI plugin ecosystem) and add them to the
  context for the LLM to use, all from within Neovim.

#### UI and UX Enhancements

- **Configurable Window Type `(PR #33)`**: Choose between `"vertical"`,
  `"horizontal"`, or `"float"` for the LLM buffer to suit your workflow.
- **UI Picker & Notifier Support `(PR #35)`**: Integrates with `mini.nvim`
  (pick/notify) and `snacks.nvim` (picker/notifier) for a more native and
  configurable UI experience.
- **Better Window UI `(PR #43)`**: The LLM buffer now displays the model name
  and an indicator for running processes, providing more clarity at a glance.
- **Visual Selection for Prompts `(PR #51)`**: You can now visually select text
  and use `<leader>ss` to send it along with your main prompt, making it easier
  to focus the LLM's attention.

#### Core Improvements

- **`llm` Default Model Support `(PR #34)`**: The plugin can now use the default
  model configured in your `llm` CLI setup, simplifying configuration.
- **`vim.ui.input` Wrappers `(PR #36)`**: Better support for different input
  handlers for a more consistent experience.
- **Lua Docs `(PR #50)`**: Added documentation for better maintainability and to
  help contributors understand the codebase.
- **More Concise Preface & Agent Opinions `(PR #55)`**: The project's philosophy
  documentation has been updated and clarified.

For a complete list of changes, check out the
[Full Changelog: v0.1.0 -> v0.2.0](https://github.com/mozanunal/sllm.nvim/compare/v0.1.0...v0.2.0).

### Get a Taste

Here's a quick look at the on-the-fly function registration in action:

![sllm.nvim on-the-fly function tool demonstration](https://github.com/mozanunal/sllm.nvim/raw/main/assets/workflow.gif)

### Try It Out!

If this CLI-first, co-pilot-centric philosophy resonates with you, I'd love for
you to give `sllm.nvim` a try.

You can find the plugin, a full README, and installation instructions on GitHub:
[**mozanunal/sllm.nvim**](https://github.com/mozanunal/sllm.nvim)

Your feedback, suggestions, and bug reports are invaluable. Let me know what you
think! Thanks for reading.
