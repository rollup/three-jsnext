'use strict';

exports.THREE$VideoTexture = THREE$VideoTexture;

var Texture = require('./Texture');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$VideoTexture ( video, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {
	this.isVideoTexture = true;

	Texture.THREE$Texture.call( this, video, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

	this.generateMipmaps = false;

	var scope = this;

	var update = function () {

		requestAnimationFrame( update );

		if ( video.readyState === video.HAVE_ENOUGH_DATA ) {

			scope.needsUpdate = true;

		}

	};

	update();

};

THREE$VideoTexture.prototype = Object.create( Texture.THREE$Texture.prototype );
THREE$VideoTexture.prototype.constructor = THREE$VideoTexture;