---
title: "No-Build Client Islands"
date: 2025-05-30T19:31:03+03:00
draft: false
---

# 🏝️ No-Build Client Islands
## Long-Lasting, Framework-Free Web Apps with Preact, HTM, and Page.js

Are you tired of:

- Relearning your static site generator every 6 months?
- Chasing backwards-incompatible updates from Astro, Next.js, or Fresh?
- Deploying full Node.js stacks just to serve a couple buttons and forms?

What if you could build fast, reactive web apps that:

- Run forever without framework churn
- Need no build tools or hydration pipelines
- Use your favorite backend (Go, Rust, Java, Python...) without coupling to JS frameworks?

Welcome to **No-Build Client Islands** — a practical, zero-build architecture for interactive SPAs using native JavaScript modules, Preact + HTM for rendering, and Page.js for routing.

## 🧭 Who Is This For?

This approach is designed for developers who:

- **Don’t want to deploy Node.js** just to render routes
- **Don’t want to chase framework updates** every few months (👋 Astro 1 → 2, Next.js App Router, Fresh rewrites…)
- Prefer **stability**, **clarity**, and **no build chains**
- Are okay serving static HTML and JS and letting the client do just enough work
- Want to connect to backends built in **Go, Rust, Java**, or any language

> Build it once. Ship it. Don’t touch it again unless *you* choose to.

## ⚙️ The Stack (Tiny, Stable, and Built to Last)

| Tool            | Purpose                                  |
|------------------|-------------------------------------------|
| `page.js`        | Client-side routing (2.5 KB)              |
| `preact`         | Fast rendering engine (4 KB gzipped)      |
| `htm`            | JSX-like syntax without Babel             |
| `@preact/signals`| Fine-grained reactivity (1.3 KB gzipped)  |

Everything is served as native ES modules via CDN — **no bundler, no dev server, no tooling required**.

## 🧪 What It Looks Like

🗂 Project Structure:

```
index.html
index.js
views/
  ├─ home.js
  └─ profile.js
islands/
  └─ profileDetails.js
```

Each page renders its own shell, and "islands" of interactivity are mounted selectively.

```js
// index.js
page('/', () => render(html`<${Home} />`, root));
page('/profile/:id', ctx => render(html`<${Profile} id=${ctx.params.id} />`, root));
```

Inside `Home.js`:

```js
export default function Home() {
  return html`
    <section>
      <h1>🏠 Home</h1>
      <p>This page is static and fast.</p>
    </section>
  `;
}
```

And `Profile.js` fetches data and renders:

```js
export async function loadAndRenderProfile(id) {
  const res = await fetch(`https://api.example.com/users/${id}`);
  const profile = await res.json();

  return html`
    <section>
      <h1>👤 Profile: ${profile.name}</h1>
      <p>${profile.bio}</p>
      <${ProfileDetails} name=${profile.name} />
    </section>
  `;
}
```

📄 islands/profileDetails.js

```js
import { h } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';
import { signal } from 'https://esm.sh/@preact/signals';

const html = htm.bind(h);

export default function ProfileDetails({ name }) {
  const toggle = signal(false);

  return html`
    <div style="margin-top:1em;">
      <button @click=${() => toggle.value = !toggle.value}>
        ${toggle.value ? 'Hide' : 'Show'} details for ${name}
      </button>
      ${toggle.value && html`<p>🔍 Detailed info for ${name}</p>`}
    </div>
  `;
}
```

This lets you mount a reactive island inside a data-driven route.

## 🆚 How It Compares

| Feature                         | No-Build Client Islands     | Next.js           | Astro            | Fresh             |
|----------------------------------|-----------------------------|-------------------|------------------|-------------------|
| **Build Step Required**         | ❌ Never                    | ✅ Yes            | ✅ Yes           | ✅ Yes            |
| **Node.js Server Needed**       | ❌ Static only              | ✅ Usually        | ✅ (build-time)  | ✅ Deno runtime   |
| **Partial Hydration**           | ✅ Manual, controlled       | ⚠️ Complex        | ✅ Built-in      | ✅ Built-in       |
| **Framework Updates Break Apps**| ❌ Never                    | ✅ Often          | ✅ Frequent      | ✅ Early-stage    |
| **Bundle Size (Runtime)**       | 🟢 ~6 KB total              | 🔴 100+ KB        | 🟡 Medium        | 🟡 Medium         |
| **Backend Agnostic**            | ✅ Yes                      | ⚠️ Tight coupling | ⚠️ Content-first | ⚠️ Deno-focused   |
| **Updatable in 2030?**          | ✅ Yes                      | ❌ Probably not   | ❌ Maybe not     | ❌ Unclear        |

## 🔐 Add Your Favorite Backend

Want authentication, storage, or live APIs? Just plug in:

- 🔧 PocketBase
- 🐳 Your own Go/Fiber/Actix server
- 🐍 Flask or FastAPI
- ☕ Spring Boot

There’s zero lock-in. The frontend ships as static files — no server-side JS needed.

## 🔥 Why Use No-Build Client Islands?

- 💡 **Zero tooling required** — no npm, no vite.config.js, no webpack nightmares
- ⚡ **Fast load times** — render only what you need, when you need it
- 🧠 **No rehydration pain** — everything starts fresh on the client
- 🧩 **Modular by design** — each interactive unit is its own reactive component
- 🧘 **No churn** — once deployed, it’ll work next year and the one after that

## ✨ Real-World Use Cases

- Internal tools and dashboards
- Control panels for IoT or admin UIs
- Lightweight apps served from a CDN
- Frontends talking to Rust/Go APIs

## 🧭 Final Thoughts

Framework churn is real. Tooling fatigue is real. But you can ship interactive, modular, reactive frontends today with nothing but:

- A browser
- A text editor
- A few stable, fast libraries from CDN

> It’s time to build software that stays simple and runs forever.
