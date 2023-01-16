#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd ./.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:Xusssyyy/blogs.git master:gh-pages 我自己的格式

git push -f git@github.com:AY-Front/blogs.git master:gh-pages

cd -
