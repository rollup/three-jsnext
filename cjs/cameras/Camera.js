Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreObject3D = require('../core/Object3D');

var _mathMatrix4 = require('../math/Matrix4');

var _mathVector3 = require('../math/Vector3');

var _mathQuaternion = require('../math/Quaternion');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 * @author WestLangley / http://github.com/WestLangley
*/

function THREE$Camera() {
	this.isCamera = true;

	_coreObject3D.THREE$Object3D.call(this);

	this.type = 'Camera';

	this.matrixWorldInverse = new _mathMatrix4.THREE$Matrix4();
	this.projectionMatrix = new _mathMatrix4.THREE$Matrix4();
};

THREE$Camera.prototype = Object.create(_coreObject3D.THREE$Object3D.prototype);
THREE$Camera.prototype.constructor = THREE$Camera;

THREE$Camera.prototype.getWorldDirection = (function () {

	var quaternion = new _mathQuaternion.THREE$Quaternion();

	return function (optionalTarget) {

		var result = optionalTarget || new _mathVector3.THREE$Vector3();

		this.getWorldQuaternion(quaternion);

		return result.set(0, 0, -1).applyQuaternion(quaternion);
	};
})();

THREE$Camera.prototype.lookAt = (function () {

	// This routine does not support cameras with rotated and/or translated parent(s)

	var m1 = new _mathMatrix4.THREE$Matrix4();

	return function (vector) {

		m1.lookAt(this.position, vector, this.up);

		this.quaternion.setFromRotationMatrix(m1);
	};
})();

THREE$Camera.prototype.clone = function () {

	return new this.constructor().copy(this);
};

THREE$Camera.prototype.copy = function (source) {

	_coreObject3D.THREE$Object3D.prototype.copy.call(this, source);

	this.matrixWorldInverse.copy(source.matrixWorldInverse);
	this.projectionMatrix.copy(source.projectionMatrix);

	return this;
};

exports.THREE$Camera = THREE$Camera;