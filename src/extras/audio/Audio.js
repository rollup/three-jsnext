import { Object3D } from '../../core/Object3D';
import { Vector3 } from '../../math/Vector3';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function Audio ( listener ) {
	this.isAudio = true;

	Object3D.call( this );

	this.type = 'Audio';

	this.context = listener.context;
	this.source = this.context.createBufferSource();
	this.source.onended = this.onEnded.bind(this);

	this.gain = this.context.createGain();
	this.gain.connect( this.context.destination );

	this.panner = this.context.createPanner();
	this.panner.connect( this.gain );

	this.autoplay = false;

	this.startTime = 0;
	this.isPlaying = false;

};

Audio.prototype = Object.create( Object3D.prototype );
Audio.prototype.constructor = Audio;

Audio.prototype.load = function ( file ) {

	var scope = this;

	var request = new XMLHttpRequest();
	request.open( 'GET', file, true );
	request.responseType = 'arraybuffer';
	request.onload = function ( e ) {

		scope.context.decodeAudioData( this.response, function ( buffer ) {

			scope.source.buffer = buffer;

			if( scope.autoplay ) scope.play();

		} );

	};
	request.send();

	return this;

};

Audio.prototype.play = function () {

	if ( this.isPlaying === true ) {

		console.warn( 'THREE.Audio: Audio is already playing.' );
		return;

	}

	var source = this.context.createBufferSource();

	source.buffer = this.source.buffer;
	source.loop = this.source.loop;
	source.onended = this.source.onended;
	source.connect( this.panner );
	source.start( 0, this.startTime );

	this.isPlaying = true;

	this.source = source;

};

Audio.prototype.pause = function () {

	this.source.stop();
	this.startTime = this.context.currentTime;

};

Audio.prototype.stop = function () {

	this.source.stop();
	this.startTime = 0;

};

Audio.prototype.onEnded = function() {

	this.isPlaying = false;

};

Audio.prototype.setLoop = function ( value ) {

	this.source.loop = value;

};

Audio.prototype.setRefDistance = function ( value ) {

	this.panner.refDistance = value;

};

Audio.prototype.setRolloffFactor = function ( value ) {

	this.panner.rolloffFactor = value;

};

Audio.prototype.setVolume = function ( value ) {

	this.gain.gain.value = value;

};

Audio.prototype.updateMatrixWorld = ( function () {

	var position = new Vector3();

	return function ( force ) {

		Object3D.prototype.updateMatrixWorld.call( this, force );

		position.setFromMatrixPosition( this.matrixWorld );

		this.panner.setPosition( position.x, position.y, position.z );

	};

} )();


export { Audio };