# mozanunal.com
My personal blog hosted at github pages and can be reached from [mozanunal.com](http://www.mozanunal.com)

It is created using Hexo.io which is blogging platform support markdown. It creates static website according to your design. Hexo is build on node.js but you need only static page host because it creates all pages and visitor only can visit this pages.
There is no interactive options but comment can be implement easliy

## Guide to use [hexo.io](hexo.io)

### Create a blog using hexo

```
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server
```

### Install beneficial plugins

Admin plugin to easily manage and create content
```
npm install hexo-admin --save
```

Manage rss feed of your blog
```
npm install hexo-generator-feed --save
```

For in blog search
```
npm install hexo-generator-json-content --save
```

Github pages deployer. There will be detailed information about deploying at next sections. 
```
npm install hexo-deployer-git --save
```
### Configure your blog settings

Blog can be easily personolize by configuring _config.yml. Blog name, language, theme, deploy options is configured using just a text editor(by chaging _config.yml file).

### Create your content

Content usually create using Markdown. However it support different types of input by installing their javascript renderer. 

### Choose your theme and configure it

TO change your theme you should clone its git repo to your blog themes folder and you should change its _config.yml

### Add comment support using disqus

I use disqus service for comments. Easy way is finding a theme support disqus. You should configure you theme's _config.yml with your disqus username. To get a username, you should create a account and configure a site. It is very easy and there is a lot of tutorials.

### Deploy your content
Go your git account and create repo named as `<username>.github.io`. Go to _config.yml and arrange deploy options as
```
deploy:
  type: git
  repo: https://github.com/username/username.github.io
```
First generate and then deploy. It will create static pages for all your pages, categories and tags etc. Then it will push it to your github pages. You can reach your site from `username.github.io`
```
hexo generate
hexo deploy
```

### Connect github pages to your own server
[godady - gihub.pages - hexo configure tutorial](https://medium.com/@kswanie21/how-to-set-up-godaddy-domain-with-github-pages-a9300366c7b)

[further info please refer here](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)

## Guide to use this repository
get files
```
git clone https://github.com/mozanunal/mozanunal.com/
npm install
```
get theme files
```
cd themes
git clone theme-git-url
```
run server
'''
hexo server
'''

if content new content is created, add them to this repo, commit and push
To publish new content 
```
hexo generate --watch
hexo deploy
```











