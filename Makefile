REPO_URL := git@github.com:mozanunal/mozanunal.github.io.git
BUILD_DIR := deploy_git
QUARTO_FILES := $(shell rg --files --glob content/**/*.qmd)
PWD="$(shell pwd)"
GH_CARD_USERNAME := mozanunal
GH_CARD_REPOS := \
    sllm.nvim \
    llm-tools-kiwix \
    SparseCT \
    SimpleDSP \
    digital-filtering-of-ecg-signal \
    PassFace
GH_CARD_IMAGE_DIR := static/images/projects

.PHONY: help serve build format download_ghcard_images deploy default

help: ## Show available make targets
	@echo "Available targets:"
	@awk 'BEGIN {FS = ":.*## "}; /^[a-zA-Z0-9_.-]+:.*##/ {printf "  %-24s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

serve: ## Run Hugo dev server with live reload
	hugo serve --openBrowser --enableGitInfo --navigateToChanged --disableFastRender

build: ## Build the site with Hugo (minified)
	hugo --minify

format: ## Format Markdown content with Deno
	deno fmt content/**/*.md

download_ghcard_images: ## Fetch GitHub repo card svgs
	@echo "==> Ensuring image directory exists: [$(GH_CARD_IMAGE_DIR)]"
	@mkdir -p $(GH_CARD_IMAGE_DIR)
	@echo "==> Downloading $(words $(GH_CARD_REPOS)) repository cards for user [$(GH_CARD_USERNAME)]..."
	@for repo in $(GH_CARD_REPOS); do \
		URL="https://gh-card.dev/repos/$(GH_CARD_USERNAME)/$$repo.svg"; \
		DEST_FILE="$(GH_CARD_IMAGE_DIR)/$$repo.svg"; \
		echo "  -> Downloading $$repo.svg..."; \
		curl -L --progress-bar -o "$$DEST_FILE" "$$URL"; \
	done
	@echo "✅ Download complete. Images are in [$(GH_CARD_IMAGE_DIR)]."

deploy: download_ghcard_images build ## Build and publish to public branch
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
