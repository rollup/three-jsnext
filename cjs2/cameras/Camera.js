'use strict';

exports.THREE$Camera = THREE$Camera;

var Object3D = require('../core/Object3D');
var Matrix4 = require('../math/Matrix4');
var Vector3 = require('../math/Vector3');
var Quaternion = require('../math/Quaternion');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 * @author WestLangley / http://github.com/WestLangley
*/

function THREE$Camera () {
	this.isCamera = true;

	Object3D.THREE$Object3D.call( this );

	this.type = 'Camera';

	this.matrixWorldInverse = new Matrix4.THREE$Matrix4();
	this.projectionMatrix = new Matrix4.THREE$Matrix4();

};

THREE$Camera.prototype = Object.create( Object3D.THREE$Object3D.prototype );
THREE$Camera.prototype.constructor = THREE$Camera;

THREE$Camera.prototype.getWorldDirection = function () {

	var quaternion = new Quaternion.THREE$Quaternion();

	return function ( optionalTarget ) {

		var result = optionalTarget || new Vector3.THREE$Vector3();

		this.getWorldQuaternion( quaternion );

		return result.set( 0, 0, - 1 ).applyQuaternion( quaternion );

	};

}();

THREE$Camera.prototype.lookAt = function () {

	// This routine does not support cameras with rotated and/or translated parent(s)

	var m1 = new Matrix4.THREE$Matrix4();

	return function ( vector ) {

		m1.lookAt( this.position, vector, this.up );

		this.quaternion.setFromRotationMatrix( m1 );

	};

}();

THREE$Camera.prototype.clone = function () {

	return new this.constructor().copy( this );

};

THREE$Camera.prototype.copy = function ( source ) {

	Object3D.THREE$Object3D.prototype.copy.call( this, source );

	this.matrixWorldInverse.copy( source.matrixWorldInverse );
	this.projectionMatrix.copy( source.projectionMatrix );

	return this;

};