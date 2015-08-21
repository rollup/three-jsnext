'use strict';

exports.THREE$AudioListener = THREE$AudioListener;

var Object3D = require('../../core/Object3D');
var Vector3 = require('../../math/Vector3');
var Quaternion = require('../../math/Quaternion');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$AudioListener () {
	this.isAudioListener = true;

	Object3D.THREE$Object3D.call( this );

	this.type = 'AudioListener';

	this.context = new ( window.AudioContext || window.webkitAudioContext )();

};

THREE$AudioListener.prototype = Object.create( Object3D.THREE$Object3D.prototype );
THREE$AudioListener.prototype.constructor = THREE$AudioListener;

THREE$AudioListener.prototype.updateMatrixWorld = ( function () {

	var position = new Vector3.THREE$Vector3();
	var quaternion = new Quaternion.THREE$Quaternion();
	var scale = new Vector3.THREE$Vector3();

	var orientation = new Vector3.THREE$Vector3();

	return function updateMatrixWorld( force ) {

		Object3D.THREE$Object3D.prototype.updateMatrixWorld.call( this, force );

		var listener = this.context.listener;
		var up = this.up;

		this.matrixWorld.decompose( position, quaternion, scale );

		orientation.set( 0, 0, - 1 ).applyQuaternion( quaternion );

		listener.setPosition( position.x, position.y, position.z );
		listener.setOrientation( orientation.x, orientation.y, orientation.z, up.x, up.y, up.z );

	};

} )();