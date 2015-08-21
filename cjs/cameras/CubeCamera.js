Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreObject3D = require('../core/Object3D');

var _Three = require('../Three');

var _renderersWebGLRenderTargetCube = require('../renderers/WebGLRenderTargetCube');

var _mathVector3 = require('../math/Vector3');

var _PerspectiveCamera = require('./PerspectiveCamera');

/**
 * Camera for rendering cube maps
 *	- renders scene into axis-aligned cube
 *
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$CubeCamera(near, far, cubeResolution) {
	this.isCubeCamera = true;

	_coreObject3D.THREE$Object3D.call(this);

	this.type = 'CubeCamera';

	var fov = 90,
	    aspect = 1;

	var cameraPX = new _PerspectiveCamera.THREE$PerspectiveCamera(fov, aspect, near, far);
	cameraPX.up.set(0, -1, 0);
	cameraPX.lookAt(new _mathVector3.THREE$Vector3(1, 0, 0));
	this.add(cameraPX);

	var cameraNX = new _PerspectiveCamera.THREE$PerspectiveCamera(fov, aspect, near, far);
	cameraNX.up.set(0, -1, 0);
	cameraNX.lookAt(new _mathVector3.THREE$Vector3(-1, 0, 0));
	this.add(cameraNX);

	var cameraPY = new _PerspectiveCamera.THREE$PerspectiveCamera(fov, aspect, near, far);
	cameraPY.up.set(0, 0, 1);
	cameraPY.lookAt(new _mathVector3.THREE$Vector3(0, 1, 0));
	this.add(cameraPY);

	var cameraNY = new _PerspectiveCamera.THREE$PerspectiveCamera(fov, aspect, near, far);
	cameraNY.up.set(0, 0, -1);
	cameraNY.lookAt(new _mathVector3.THREE$Vector3(0, -1, 0));
	this.add(cameraNY);

	var cameraPZ = new _PerspectiveCamera.THREE$PerspectiveCamera(fov, aspect, near, far);
	cameraPZ.up.set(0, -1, 0);
	cameraPZ.lookAt(new _mathVector3.THREE$Vector3(0, 0, 1));
	this.add(cameraPZ);

	var cameraNZ = new _PerspectiveCamera.THREE$PerspectiveCamera(fov, aspect, near, far);
	cameraNZ.up.set(0, -1, 0);
	cameraNZ.lookAt(new _mathVector3.THREE$Vector3(0, 0, -1));
	this.add(cameraNZ);

	this.renderTarget = new _renderersWebGLRenderTargetCube.THREE$WebGLRenderTargetCube(cubeResolution, cubeResolution, { format: _Three.THREE$RGBFormat, magFilter: _Three.THREE$LinearFilter, minFilter: _Three.THREE$LinearFilter });

	this.updateCubeMap = function (renderer, scene) {

		if (this.parent === null) this.updateMatrixWorld();

		var renderTarget = this.renderTarget;
		var generateMipmaps = renderTarget.generateMipmaps;

		renderTarget.generateMipmaps = false;

		renderTarget.activeCubeFace = 0;
		renderer.render(scene, cameraPX, renderTarget);

		renderTarget.activeCubeFace = 1;
		renderer.render(scene, cameraNX, renderTarget);

		renderTarget.activeCubeFace = 2;
		renderer.render(scene, cameraPY, renderTarget);

		renderTarget.activeCubeFace = 3;
		renderer.render(scene, cameraNY, renderTarget);

		renderTarget.activeCubeFace = 4;
		renderer.render(scene, cameraPZ, renderTarget);

		renderTarget.generateMipmaps = generateMipmaps;

		renderTarget.activeCubeFace = 5;
		renderer.render(scene, cameraNZ, renderTarget);

		renderer.setRenderTarget(null);
	};
};

THREE$CubeCamera.prototype = Object.create(_coreObject3D.THREE$Object3D.prototype);
THREE$CubeCamera.prototype.constructor = THREE$CubeCamera;

exports.THREE$CubeCamera = THREE$CubeCamera;