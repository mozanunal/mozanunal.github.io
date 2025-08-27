---
title: "Introducing Hugo Classless: A Theme for Any Style"
date: 2025-08-26T22:45:54+03:00
tags:
  - hugo
  - theme
  - css
  - webdev
  - classless
  - project
summary: "Announcing a new Hugo theme built on the 'classless' philosophy. Learn how it uses pure semantic HTML to let you plug and play any classless CSS framework like Pico.css, Water.css, and more, and see it in action with an interactive demo."
---

I'm incredibly excited to announce a new project I've been working on: the **[Hugo Classless Theme](https://github.com/mozanunal/hugo-classless)**!

If you've ever felt locked in by a theme's specific design or wished you could change your site's entire look with a single line of code, this theme is for you. Hugo Classless isn't just another theme; it's a flexible foundation designed to work with **any classless CSS framework**.

<video controls src="hugo-classless.mov" style="width: 100%; max-width: 100%; border-radius: 16px; margin-top: 1.5em; margin-bottom: 1.5em;">
  Your browser does not support the video tag.
</video>

### The "Classless" Philosophy: What Is It?

Most web pages are styled using CSS classes. A developer writes HTML like `<div class="card-container">` and then styles `.card-container` in a CSS file. This is powerful, but it tightly couples the HTML structure to a specific design.

**Classless CSS** takes a different approach. A classless framework styles the raw HTML elements directly. Instead of styling `.button-primary`, it styles the `<button>` tag itself. It styles `<h1>`, `<table>`, `<p>`, `<nav>`, and so on.

The Hugo Classless theme embraces this philosophy. It generates pure, well-structured, semantic HTML without any preset classes. This means you can point it to a classless CSS framework, and the site will instantly adopt its appearance. It's like having a well-built house (your content and HTML structure) and being able to instantly re-paint the entire thing just by choosing a different can of paint (the stylesheet).

### See It Live: The Interactive Theme-Switcher

As you saw in the video above, the best way to grasp this concept is to see it in action. I've set up a live demo site that includes an interactive theme-switcher.

**[View the Live Demo on Netlify](https://hugo-classless.netlify.app/)**

With a single dropdown menu, you can switch between popular classless frameworks like Pico.css, Water.css, Simple.css, and many others. Watch as the entire website—typography, colors, forms, and spacing—transforms instantly, all while the underlying HTML content remains exactly the same. It's a powerful demonstration of how flexible this approach can be.

### How to Add Your Own Classless Stylesheet

Getting started with the Hugo Classless theme is simple. After [installing the theme](https://github.com/mozanunal/hugo-classless#installation), you can configure it entirely from your `hugo.yml` file.

To choose a stylesheet, you just need to update the `params.themes` section. The theme is pre-configured with a long list, but adding your own is easy.

Let's say you found a cool new framework called `awesome.css`. Here’s how you would add it:

```yaml
# hugo.yml

params:
  # ... other params

  # Define your list of classless frameworks here.
  # The first one is the default. Two or more enables the switcher.
  themes:
    - name: "Pico"
      url: "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.classless.min.css"
    - name: "Water.css"
      url: "https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
    # --- ADD YOUR NEW THEME HERE ---
    - name: "Awesome CSS" # This name appears in the dropdown
      url: "https://example.com/path/to/awesome.css" # The URL to the stylesheet
    # ---
    - name: "HTML only" # An empty URL gives you unstyled HTML
      url: ""
```

That's it! By adding that entry, "Awesome CSS" will now appear in your live theme-switcher. The first theme in the list serves as the default style for your site.

### Key Features

Beyond its core philosophy, the theme comes packed with a few nice features:

- **Plug & Play Styling:** Compatible with any classless CSS framework out of the box.
- **Live Theme-Switcher:** A great tool for testing and demonstrating different looks.
- **Minimal & Fast:** No bloated JavaScript or complex dependencies.
- **Math Typesetting:** Built-in support for beautiful mathematical formulas using KaTeX.
- **SEO Friendly:** Uses proper semantic tags (`<header>`, `<main>`, `<article>`, `<nav>`) for better search engine indexing.

### Get Started Today!

I built the Hugo Classless Theme to offer freedom and simplicity. Whether you're building a personal blog, a project portfolio, or a documentation site, it provides a clean and solid foundation that gets out of your way, letting you focus on your content while making styling a breeze.

- **[Check out the Live Demo](https://hugo-classless.netlify.app/)**
- **[View the Source on GitHub](https://github.com/mozanunal/hugo-classless)**

Give it a try for your next Hugo project! Contributions, bug reports, and suggestions are always welcome. Please feel free to [open an issue](https://github.com/mozanunal/hugo-classless/issues) or submit a pull request.

I can't wait to see what you build with it!
