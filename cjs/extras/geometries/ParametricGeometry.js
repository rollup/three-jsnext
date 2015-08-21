Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreGeometry = require('../../core/Geometry');

var _coreFace3 = require('../../core/Face3');

var _mathVector2 = require('../../math/Vector2');

/**
 * @author zz85 / https://github.com/zz85
 * Parametric Surfaces Geometry
 * based on the brilliant article by @prideout http://prideout.net/blog/?p=44
 *
 * new THREE.ParametricGeometry( parametricFunction, uSegments, ySegements );
 *
 */

function THREE$ParametricGeometry(func, slices, stacks) {
	this.isParametricGeometry = true;

	_coreGeometry.THREE$Geometry.call(this);

	this.type = 'ParametricGeometry';

	this.parameters = {
		func: func,
		slices: slices,
		stacks: stacks
	};

	var verts = this.vertices;
	var faces = this.faces;
	var uvs = this.faceVertexUvs[0];

	var i, j, p;
	var u, v;

	var sliceCount = slices + 1;

	for (i = 0; i <= stacks; i++) {

		v = i / stacks;

		for (j = 0; j <= slices; j++) {

			u = j / slices;

			p = func(u, v);
			verts.push(p);
		}
	}

	var a, b, c, d;
	var uva, uvb, uvc, uvd;

	for (i = 0; i < stacks; i++) {

		for (j = 0; j < slices; j++) {

			a = i * sliceCount + j;
			b = i * sliceCount + j + 1;
			c = (i + 1) * sliceCount + j + 1;
			d = (i + 1) * sliceCount + j;

			uva = new _mathVector2.THREE$Vector2(j / slices, i / stacks);
			uvb = new _mathVector2.THREE$Vector2((j + 1) / slices, i / stacks);
			uvc = new _mathVector2.THREE$Vector2((j + 1) / slices, (i + 1) / stacks);
			uvd = new _mathVector2.THREE$Vector2(j / slices, (i + 1) / stacks);

			faces.push(new _coreFace3.THREE$Face3(a, b, d));
			uvs.push([uva, uvb, uvd]);

			faces.push(new _coreFace3.THREE$Face3(b, c, d));
			uvs.push([uvb.clone(), uvc, uvd.clone()]);
		}
	}

	// console.log(this);

	// magic bullet
	// var diff = this.mergeVertices();
	// console.log('removed ', diff, ' vertices by merging');

	this.computeFaceNormals();
	this.computeVertexNormals();
};

THREE$ParametricGeometry.prototype = Object.create(_coreGeometry.THREE$Geometry.prototype);
THREE$ParametricGeometry.prototype.constructor = THREE$ParametricGeometry;

exports.THREE$ParametricGeometry = THREE$ParametricGeometry;