# hello world

Adapted from http://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene. Open index.html to view. To rebuild bundle.js:

```bash
# install rollup and uglify-js globally, if you haven't already
npm install -g rollup uglify-js

# bundle
rollup -i main.js -o bundle.js -f iife

# minify
uglifyjs -c -m -o bundle.min.js -- bundle.js
```
