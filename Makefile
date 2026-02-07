.DEFAULT_GOAL := help

REPO_URL := git@github.com:mozanunal/mozanunal.github.io.git
BUILD_DIR := deploy_git
PAPERS_MD := content/papers.md
PAPERS_CONFIG := data/papers.json
PAPER_CITATION_GS_SCRIPT := scripts/update_papers_gs.ts
PROJECTS_CONFIG := data/projects.json
PROJECTS_MD := content/projects.md
PROJECTS_SCRIPT := scripts/update_project_cards_github.ts

.PHONY: help
help: ## Show this help
	@echo "Available targets:"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_.-]+:.*##/ {printf "  %-22s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.PHONY: dev
dev: ## Run Hugo dev server with live reload
	hugo serve --openBrowser --enableGitInfo --navigateToChanged --disableFastRender

.PHONY: build
build: update_paper_citations update_project_cards ## Build site with minification
	hugo --minify

.PHONY: format
format: ## Format markdown content
	deno fmt content/**/*.md

.PHONY: update_paper_citations
update_paper_citations: ## Update papers table from Google Scholar
	deno run --allow-net --allow-read --allow-write $(PAPER_CITATION_GS_SCRIPT) $(PAPERS_CONFIG) $(PAPERS_MD)

.PHONY: update_project_cards
update_project_cards: ## Update project cards from GitHub
	deno run --allow-net --allow-read --allow-write $(PROJECTS_SCRIPT) $(PROJECTS_CONFIG) $(PROJECTS_MD)

.PHONY: deploy
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

.PHONY: clean
clean: ## Remove build artifacts
	rm -rf public/ $(BUILD_DIR)
