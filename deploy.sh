set -e
npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git branch gh-pages
git checkout gh-pages
git push -f git@github.com:Enlightened-Star-Studio/Enlightened-Star-Studio-ctguer-learning-book.git gh-pages

cd -

