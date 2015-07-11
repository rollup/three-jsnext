# three.js webgl - custom attributes [particles][billboards]

Adapted from http://threejs.org/examples/#webgl_custom_attributes_particles2. Open index.html to view. To rebuild bundle.js:

```bash
# install rollup and uglify-js globally, if you haven't already
npm install -g rollup uglify-js

# bundle
rollup -i main.js -o bundle.js -f iife

# minify
uglifyjs -c -m -o bundle.min.js -- bundle.js
```
