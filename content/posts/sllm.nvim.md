---
title: "Introducing sllm.nvim: A Neovim Plugin for Seamless LLM Integration"
date: 2025-05-21T23:07:48+03:00
draft: false
---

As developers, we all know the pain of context-switching between our code editor and separate AI interfaces just to ask a question, get code completion, or analyze an error message. What if you could bring the power of Large Language Models—powered by the incredibly flexible [`llm` CLI by Simon Willison](https://llm.datasette.io/en/stable/)—**directly inside Neovim**, with streaming replies, model/tool selection, and one-key context management?

Today, I’m excited to announce [`sllm.nvim`](https://github.com/mozanunal/sllm.nvim): a (roughly 500-line) Lua plugin that brings deep `llm` CLI integration to Neovim in an asynchronous, focused, and highly hackable way.

---

### Why sllm.nvim?

[`llm`](https://github.com/simonw/llm) is a CLI Swiss Army knife for working with LLMs, built by Simon Willison (creator of Django, Datasette, and sqlite-utils). It supports *hundreds* of models (via plugins like [llm-openrouter](https://github.com/simonw/llm-openrouter)), files, tools, and arbitrary context tricks.

But until now, integrating `llm` CLI into your real coding environment required a lot of copy-paste—and breaking flow by toggling terminals, browsers, and buffers.

I built `sllm.nvim` so you can:

- **Chat with models in a streaming popup buffer** (no annoying freezes or waiting)
- **Add files, URLs, shell output, code selections, diagnostics—and even tools!—to the LLM context… in one keystroke**
- **Switch models and tools on the fly**
- **Get token usage/cost feedback and never overrun your limits**

…all **without leaving Neovim**. No more copy-paste error traces. No more browser tab juggling. Just ask, code, and iterate, staying in the flow.

---

### Key Features

- **Interactive Chat:** Ask questions and see responses stream directly into a live, markdown-formatted Neovim buffer.
- **Context Management:** In one keystroke, you can add the current file, an arbitrary URL, visual selections, diagnostics, shell command outputs, or LLM tools to be considered in your next prompt.
- **Model & Tool Selection:** Instantly pick from any installed `llm` model/plugins/tools and add them to context.
- **Async, Non-blocking:** Let LLM jobs run in the background—you keep editing or exploring.
- **Usage Feedback:** Optionally show tokens/cost for every request.
- **UI via mini.nvim:** Uses proven modules from [mini.nvim](https://github.com/echasnovski/mini.nvim) for notifications and pickers—smooth and minimal.

### Example Workflow

- Open a file, highlight some lines, hit `<leader>sv` to add that code as context.
- Press `<leader>ss` and enter your question.
- Try `<leader>sm` to switch models, e.g. between GPT-4 and local models.
- Add a shell command’s output to context with `<leader>sx`.
- Add info on a bug by pressing `<leader>sd` (diagnostics).
- Need a third-party API or tool integration for your prompt? `<leader>se` lets you add LLM tools directly.
- Review token/cost estimates with every response.

All responses stream into a markdown buffer—ready to reference, copy, or save.

---

### Want to Try It?

**Check it out here:**
[https://github.com/mozanunal/sllm.nvim](https://github.com/mozanunal/sllm.nvim)

I’d love to hear feedback, issues, and wishes. PRs and suggestions are very welcome!

---

### Credits

- LLM engine: [llm CLI by Simon Willison](https://github.com/simonw/llm)
- UI/pickers: [mini.nvim by echanovski](https://github.com/echasnovski/mini.nvim)
- Plugin: [mozanunal/sllm.nvim](https://github.com/mozanunal/sllm.nvim) (MIT/Apache-2.0)

Enjoy chatting and coding—without ever leaving Neovim!

