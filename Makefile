.DEFAULT_GOAL := help

REPO_URL := git@github.com:mozanunal/mozanunal.github.io.git
BUILD_DIR := deploy_git

.PHONY: help
help: ## Show this help
	@echo "Available targets:"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_.-]+:.*##/ {printf "  %-22s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.PHONY: dev
dev: ## Run Hugo dev server with live reload
	hugo serve --openBrowser --enableGitInfo --navigateToChanged --disableFastRender

.PHONY: build
build: ## Build site with live paper citations and project stats
	hugo --minify

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
