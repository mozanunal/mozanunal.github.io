
PWD="$(shell pwd)"
SEP="\e[1;32m-------------------------------------------\e[0m"

REPO_URL := git@github.com:mozanunal/mozanunal.github.io.git
BUILD_DIR := deploy_git

.PHONY: build deploy

build:
	hugo --minify

deploy: build
	rm -rf $(BUILD_DIR)
	git clone $(REPO_URL) $(BUILD_DIR) --branch=public --depth=1
	rm -rf $(BUILD_DIR)/*
	cp -r public/* $(BUILD_DIR)
	cd $(BUILD_DIR) && \
	git add -A && \
	git commit -m "Site update" && \
	git push origin public

default: build
