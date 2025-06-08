PWD="$(shell pwd)"
SEP="-------------------------------------------"

REPO_URL := git@github.com:mozanunal/mozanunal.github.io.git
BUILD_DIR := deploy_git

serve:
	hugo serve --openBrowser --enableGitInfo --navigateToChanged --disableFastRender

build:
	hugo --minify

format:
	deno fmt --ext md content/

deploy: build
	rm -rf $(BUILD_DIR)
	git clone $(REPO_URL) $(BUILD_DIR) --branch=public --depth=1
	rm -rf $(BUILD_DIR)/*
	cp -r public/* $(BUILD_DIR)
	cd $(BUILD_DIR) && \
	git config user.name "mozanunal" && \
	git config user.email "mehmetozanunal@gmail.com" && \
	git add -A && \
	git commit -m "Site update" && \
	git push origin public

default: build
