REPO_URL := git@github.com:mozanunal/mozanunal.github.io.git
BUILD_DIR := deploy_git
QUARTO_FILES := $(shell rg --files --glob content/**/*.qmd)
PWD="$(shell pwd)"

serve:
	hugo serve --openBrowser --enableGitInfo --navigateToChanged --disableFastRender

build:
	hugo --minify

qmd_render:
	echo $(QUARTO_FILES)
	source .venv/bin/activate && quarto render $(QUARTO_FILES)

format:
	deno fmt content/**/*.md

deploy: build
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

default: build
