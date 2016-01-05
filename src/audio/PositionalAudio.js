import { Object3D } from '../core/Object3D';
import { Vector3 } from '../math/Vector3';
import { Audio } from './Audio';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function PositionalAudio ( listener ) {
	this.isPositionalAudio = true;

	Audio.call( this, listener );

	this.panner = this.context.createPanner();
	this.panner.connect( this.gain );

};

PositionalAudio.prototype = Object.create( Audio.prototype );
PositionalAudio.prototype.constructor = PositionalAudio;

PositionalAudio.prototype.getOutput = function () {

	return this.panner;

};

PositionalAudio.prototype.setRefDistance = function ( value ) {

	this.panner.refDistance = value;

};

PositionalAudio.prototype.getRefDistance = function () {

	return this.panner.refDistance;

};

PositionalAudio.prototype.setRolloffFactor = function ( value ) {

	this.panner.rolloffFactor = value;

};

PositionalAudio.prototype.getRolloffFactor = function () {

	return this.panner.rolloffFactor;

};

PositionalAudio.prototype.setDistanceModel = function ( value ) {

	this.panner.distanceModel = value;

};

PositionalAudio.prototype.getDistanceModel = function () {

	return this.panner.distanceModel;

};

PositionalAudio.prototype.setMaxDistance = function ( value ) {

	this.panner.maxDistance = value;

};

PositionalAudio.prototype.getMaxDistance = function () {

	return this.panner.maxDistance;

};

PositionalAudio.prototype.updateMatrixWorld = ( function () {

	var position = new Vector3();

	return function updateMatrixWorld( force ) {

		Object3D.prototype.updateMatrixWorld.call( this, force );

		position.setFromMatrixPosition( this.matrixWorld );

		this.panner.setPosition( position.x, position.y, position.z );

	};

} )();


export { PositionalAudio };