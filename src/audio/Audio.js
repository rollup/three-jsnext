import { AudioBuffer } from './AudioBuffer';
import { Object3D } from '../core/Object3D';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function Audio ( listener ) {
	this.isAudio = true;

	Object3D.call( this );

	this.type = 'Audio';

	this.context = listener.context;
	this.source = this.context.createBufferSource();
	this.source.onended = this.onEnded.bind( this );

	this.gain = this.context.createGain();
	this.gain.connect( listener.getInput() );

	this.autoplay = false;

	this.startTime = 0;
	this.playbackRate = 1;
	this.isPlaying = false;
	this.hasPlaybackControl = true;
	this.sourceType = 'empty';

	this.filter = null;

};

Audio.prototype = Object.create( Object3D.prototype );
Audio.prototype.constructor = Audio;

Audio.prototype.getOutput = function () {

	return this.gain;

};

Audio.prototype.load = function ( file ) {

	var buffer = new AudioBuffer( this.context );
	buffer.load( file );

	this.setBuffer( buffer );

	return this;

};

Audio.prototype.setNodeSource = function ( audioNode ) {

	this.hasPlaybackControl = false;
	this.sourceType = 'audioNode';
	this.source = audioNode;
	this.connect();

	return this;

};

Audio.prototype.setBuffer = function ( audioBuffer ) {

	var scope = this;

	audioBuffer.onReady( function( buffer ) {

		scope.source.buffer = buffer;
		scope.sourceType = 'buffer';
		if ( scope.autoplay ) scope.play();

	} );

	return this;

};

Audio.prototype.play = function () {

	if ( this.isPlaying === true ) {

		console.warn( 'THREE.Audio: Audio is already playing.' );
		return;

	}

	if ( this.hasPlaybackControl === false ) {

		console.warn( 'THREE.Audio: this Audio has no playback control.' );
		return;

	}

	var source = this.context.createBufferSource();

	source.buffer = this.source.buffer;
	source.loop = this.source.loop;
	source.onended = this.source.onended;
	source.start( 0, this.startTime );
	source.playbackRate.value = this.playbackRate;

	this.isPlaying = true;

	this.source = source;

	this.connect();

};

Audio.prototype.pause = function () {

	if ( this.hasPlaybackControl === false ) {

		console.warn( 'THREE.Audio: this Audio has no playback control.' );
		return;

	}

	this.source.stop();
	this.startTime = this.context.currentTime;

};

Audio.prototype.stop = function () {

	if ( this.hasPlaybackControl === false ) {

		console.warn( 'THREE.Audio: this Audio has no playback control.' );
		return;

	}

	this.source.stop();
	this.startTime = 0;

};

Audio.prototype.connect = function () {

	if ( this.filter !== null ) {

		this.source.connect( this.filter );
		this.filter.connect( this.getOutput() );

	} else {

		this.source.connect( this.getOutput() );

	}

};

Audio.prototype.disconnect = function () {

	if ( this.filter !== null ) {

		this.source.disconnect( this.filter );
		this.filter.disconnect( this.getOutput() );

	} else {

		this.source.disconnect( this.getOutput() );

	}

};

Audio.prototype.getFilter = function () {

	return this.filter;

};

Audio.prototype.setFilter = function ( value ) {

	if ( value === undefined ) value = null;

	if ( this.isPlaying === true ) {

		this.disconnect();
		this.filter = value;
		this.connect();

	} else {

		this.filter = value;

	}

};

Audio.prototype.setPlaybackRate = function ( value ) {

	if ( this.hasPlaybackControl === false ) {

		console.warn( 'THREE.Audio: this Audio has no playback control.' );
		return;

	}

	this.playbackRate = value;

	if ( this.isPlaying === true ) {

		this.source.playbackRate.value = this.playbackRate;

	}

};

Audio.prototype.getPlaybackRate = function () {

	return this.playbackRate;

};

Audio.prototype.onEnded = function() {

	this.isPlaying = false;

};

Audio.prototype.setLoop = function ( value ) {

	if ( this.hasPlaybackControl === false ) {

		console.warn( 'THREE.Audio: this Audio has no playback control.' );
		return;

	}

	this.source.loop = value;

};

Audio.prototype.getLoop = function () {

	if ( this.hasPlaybackControl === false ) {

		console.warn( 'THREE.Audio: this Audio has no playback control.' );
		return false;

	}

	return this.source.loop;

};


Audio.prototype.setVolume = function ( value ) {

	this.gain.gain.value = value;

};

Audio.prototype.getVolume = function () {

	return this.gain.gain.value;

};


export { Audio };