Object.defineProperty(exports, '__esModule', {
	value: true
});

var _mathVector3 = require('../../math/Vector3');

var _coreObject3D = require('../../core/Object3D');

var _objectsMesh = require('../../objects/Mesh');

var _materialsMeshBasicMaterial = require('../../materials/MeshBasicMaterial');

var _geometriesCylinderGeometry = require('../geometries/CylinderGeometry');

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
*/

function THREE$SpotLightHelper(light) {
	this.isSpotLightHelper = true;

	_coreObject3D.THREE$Object3D.call(this);

	this.light = light;
	this.light.updateMatrixWorld();

	this.matrix = light.matrixWorld;
	this.matrixAutoUpdate = false;

	var geometry = new _geometriesCylinderGeometry.THREE$CylinderGeometry(0, 1, 1, 8, 1, true);

	geometry.translate(0, -0.5, 0);
	geometry.rotateX(-Math.PI / 2);

	var material = new _materialsMeshBasicMaterial.THREE$MeshBasicMaterial({ wireframe: true, fog: false });

	this.cone = new _objectsMesh.THREE$Mesh(geometry, material);
	this.add(this.cone);

	this.update();
};

THREE$SpotLightHelper.prototype = Object.create(_coreObject3D.THREE$Object3D.prototype);
THREE$SpotLightHelper.prototype.constructor = THREE$SpotLightHelper;

THREE$SpotLightHelper.prototype.dispose = function () {

	this.cone.geometry.dispose();
	this.cone.material.dispose();
};

THREE$SpotLightHelper.prototype.update = (function () {

	var vector = new _mathVector3.THREE$Vector3();
	var vector2 = new _mathVector3.THREE$Vector3();

	return function () {

		var coneLength = this.light.distance ? this.light.distance : 10000;
		var coneWidth = coneLength * Math.tan(this.light.angle);

		this.cone.scale.set(coneWidth, coneWidth, coneLength);

		vector.setFromMatrixPosition(this.light.matrixWorld);
		vector2.setFromMatrixPosition(this.light.target.matrixWorld);

		this.cone.lookAt(vector2.sub(vector));

		this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
	};
})();

exports.THREE$SpotLightHelper = THREE$SpotLightHelper;