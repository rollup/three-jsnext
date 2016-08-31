# [Three.js now uses ES modules, which means this project is no longer maintained](https://github.com/mrdoob/three.js/pull/9310)

# three-jsnext

[Three.js](http://threejs.org/), ported to ES6 modules

*Work in progress - more examples etc coming soon! Please excuse the dust.*


## Why?

Three.js is an incredible library, which makes it possible for us front-end mortals to tap into the power of WebGL. Without it, creating the simplest of scenes involves a vertiginous learning curve.

It's also monolithic and a *bit* on the chunky side.

You could piece together your own WebGL solution using various [small modules](https://medium.com/@Rich_Harris/small-modules-it-s-not-quite-that-simple-3ca532d65de4), but when you're learning a whole new way of thinking, being able to use a well-thought-through, philosophically coherent library (with [loads of examples](http://threejs.org/examples/) and an active community of people on Stack Overflow waiting to help you) can make the difference between shipping and failing.


## Having your cake and eating it

Or, more accurately, having the whole cake but only eating the bits you like. Let me explain: Normally, when you use a library, you use the whole library, whether as a script tag on the page...

```html
<script src='three.min.js'>
```

...or as a module...

```js
var THREE = require('three');
```

...but in the vast majority of situations you're only using a fraction of the library's capabilities.

ES6 modules change everything. Now, you can import components from a library individually. Instead of this...

```js
var THREE = require( 'three' );
var scene = new THREE.Scene();
```

...you can do this:

```js
import { Scene } from 'three-jsnext';
var scene = new Scene();
```

Here comes the fun part: using [Rollup](https://github.com/rollup/rollup), we can statically analyse the code and *only include the bits of the library that are actually used*. The result is that you don't have to ship the whole of three.min.js to your users – you can ship a much smaller bundle.


## What this repo does

I didn't manually port Three.js to ES6 modules; that would be crazy. This project takes the existing Three.js code and converts it automatically. (This is possible because the Three.js codebase is very consistent and well-structured.) You can run the conversion yourself:

```bash
git clone https://github.com/rollup/three-jsnext.git
cd three-jsnext

# install devDependencies
npm install

# fetch latest version of Three.js
npm run update-three

# convert the files in three.js/src
npm run build
```

This will create the `src` and `dist` folders. (The `dist` folder just contains a UMD build of the entire library, which you could use as a drop-in replacement for the existing three.min.js file, though see the caveat below. Good news – it's smaller than the original, thanks to ES6 magic!)


## How to use it

Have a look at the [examples](https://github.com/rollup/three-jsnext/tree/master/examples) folder to get started. (Note that you'd import from `three-jsnext`, rather than the relative path used in the examples).


## What kind of savings are we talking, really?

Early tests suggests a typical app, once minified, includes around **245kb** of Three.js code. The current official build is around **410kb**, which means a **40%** saving without having to do anything. There may be ways to reduce the size even further by reducing coupling within the Three.js codebase – coupling that makes sense within a monolith, but which in some cases defeat's Rollup's optimisations. Still, a 40% saving for free!


## Caveats

This is a new and experimental project; it may not yet reproduce all of Three.js's functionality. If you find a bug, please raise an issue.

Note that we're using the dev branch of Three.js, rather than the master branch, so it may not be 100% stable.


## License

Three.js is released under the [MIT License](https://github.com/mrdoob/three.js/blob/master/LICENSE), as is three-jsnext.
