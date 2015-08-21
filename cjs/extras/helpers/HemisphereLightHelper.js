Object.defineProperty(exports, '__esModule', {
	value: true
});

var _mathVector3 = require('../../math/Vector3');

var _coreObject3D = require('../../core/Object3D');

var _objectsMesh = require('../../objects/Mesh');

var _Three = require('../../Three');

var _materialsMeshBasicMaterial = require('../../materials/MeshBasicMaterial');

var _geometriesSphereGeometry = require('../geometries/SphereGeometry');

var _mathColor = require('../../math/Color');

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$HemisphereLightHelper(light, sphereSize) {
	this.isHemisphereLightHelper = true;

	_coreObject3D.THREE$Object3D.call(this);

	this.light = light;
	this.light.updateMatrixWorld();

	this.matrix = light.matrixWorld;
	this.matrixAutoUpdate = false;

	this.colors = [new _mathColor.THREE$Color(), new _mathColor.THREE$Color()];

	var geometry = new _geometriesSphereGeometry.THREE$SphereGeometry(sphereSize, 4, 2);
	geometry.rotateX(-Math.PI / 2);

	for (var i = 0, il = 8; i < il; i++) {

		geometry.faces[i].color = this.colors[i < 4 ? 0 : 1];
	}

	var material = new _materialsMeshBasicMaterial.THREE$MeshBasicMaterial({ vertexColors: _Three.THREE$FaceColors, wireframe: true });

	this.lightSphere = new _objectsMesh.THREE$Mesh(geometry, material);
	this.add(this.lightSphere);

	this.update();
};

THREE$HemisphereLightHelper.prototype = Object.create(_coreObject3D.THREE$Object3D.prototype);
THREE$HemisphereLightHelper.prototype.constructor = THREE$HemisphereLightHelper;

THREE$HemisphereLightHelper.prototype.dispose = function () {

	this.lightSphere.geometry.dispose();
	this.lightSphere.material.dispose();
};

THREE$HemisphereLightHelper.prototype.update = (function () {

	var vector = new _mathVector3.THREE$Vector3();

	return function () {

		this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);
		this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);

		this.lightSphere.lookAt(vector.setFromMatrixPosition(this.light.matrixWorld).negate());
		this.lightSphere.geometry.colorsNeedUpdate = true;
	};
})();

exports.THREE$HemisphereLightHelper = THREE$HemisphereLightHelper;