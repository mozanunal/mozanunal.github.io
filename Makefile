REPO_URL := git@github.com:mozanunal/mozanunal.github.io.git
BUILD_DIR := deploy_git
QUARTO_FILES := $(shell rg --files --glob content/**/*.qmd)
PWD="$(shell pwd)"
PAPERS_MD := content/papers.md
PAPERS_CONFIG := data/papers.json
PAPER_CITATION_GS_SCRIPT := scripts/update_papers_gs.ts
PROJECTS_CONFIG := data/projects.json
PROJECTS_MD := content/projects.md
PROJECTS_SCRIPT := scripts/update_project_cards_github.ts

.PHONY: help serve build format update_paper_citations update_project_cards deploy default

help: ## Show available make targets
	@echo "Available targets:"
	@awk 'BEGIN {FS = ":.*## "}; /^[a-zA-Z0-9_.-]+:.*##/ {printf "  %-24s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

serve: ## Run Hugo dev server with live reload
	hugo serve --openBrowser --enableGitInfo --navigateToChanged --disableFastRender

build: ## Build the site with Hugo (minified)
	hugo --minify

format: ## Format Markdown content with Deno
	deno fmt content/**/*.md

update_paper_citations: ## Update papers table in papers.md (Google Scholar HTML)
	deno run --allow-net --allow-read --allow-write $(PAPER_CITATION_GS_SCRIPT) $(PAPERS_CONFIG) $(PAPERS_MD)

update_project_cards: ## Update project cards in projects.md (GitHub scrape)
	deno run --allow-net --allow-read --allow-write $(PROJECTS_SCRIPT) $(PROJECTS_CONFIG) $(PROJECTS_MD)

deploy: build ## Build and publish to public branch
	rm -rf $(BUILD_DIR)
	git clone $(REPO_URL) $(BUILD_DIR) --branch=public --depth=1
	rm -rf $(BUILD_DIR)/*
	echo "mozanunal.com" > public/CNAME
	cp -r public/* $(BUILD_DIR)
	cd $(BUILD_DIR) && \
	git config user.name "mozanunal" && \
	git config user.email "mehmetozanunal@gmail.com" && \
	git add -A && \
	git commit -m "Site update" && \
	git push origin public

default: build ## Default alias: build
