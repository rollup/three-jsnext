import { Object3D } from '../core/Object3D';
import { Vector3 } from '../math/Vector3';
import { Quaternion } from '../math/Quaternion';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function AudioListener () {
	this.isAudioListener = true;

	Object3D.call( this );

	this.type = 'AudioListener';

	this.context = new ( window.AudioContext || window.webkitAudioContext )();

	this.gain = this.context.createGain();
	this.gain.connect( this.context.destination );

	this.filter = null;

};

AudioListener.prototype = Object.create( Object3D.prototype );
AudioListener.prototype.constructor = AudioListener;

AudioListener.prototype.getInput = function () {

	return this.gain;

};

AudioListener.prototype.removeFilter = function ( ) {

	if ( this.filter !== null ) {

		this.gain.disconnect( this.filter );
		this.filter.disconnect( this.context.destination );
		this.gain.connect( this.context.destination );
		this.filter = null;

	}

};

AudioListener.prototype.setFilter = function ( value ) {

	if ( this.filter !== null ) {

		this.gain.disconnect( this.filter );
		this.filter.disconnect( this.context.destination );

	} else {

		this.gain.disconnect( this.context.destination );

	}

	this.filter = value;
	this.gain.connect( this.filter );
	this.filter.connect( this.context.destination );

};

AudioListener.prototype.getFilter = function () {

	return this.filter;

};

AudioListener.prototype.setMasterVolume = function ( value ) {

	this.gain.gain.value = value;

};

AudioListener.prototype.getMasterVolume = function () {

	return this.gain.gain.value;

};


AudioListener.prototype.updateMatrixWorld = ( function () {

	var position = new Vector3();
	var quaternion = new Quaternion();
	var scale = new Vector3();

	var orientation = new Vector3();

	return function updateMatrixWorld( force ) {

		Object3D.prototype.updateMatrixWorld.call( this, force );

		var listener = this.context.listener;
		var up = this.up;

		this.matrixWorld.decompose( position, quaternion, scale );

		orientation.set( 0, 0, - 1 ).applyQuaternion( quaternion );

		listener.setPosition( position.x, position.y, position.z );
		listener.setOrientation( orientation.x, orientation.y, orientation.z, up.x, up.y, up.z );

	};

} )();


export { AudioListener };