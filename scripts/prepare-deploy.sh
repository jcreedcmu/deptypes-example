rm -rf dist
mkdir dist

# creates public/bundle.js
make build

cp -rv \
  public/index.html \
  public/bundle.js \
  public/assets \
  public/style.css \
  dist
