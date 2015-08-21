'use strict';

exports.THREE$CanvasTexture = THREE$CanvasTexture;

var Texture = require('./Texture');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$CanvasTexture ( canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {
	this.isCanvasTexture = true;

	Texture.THREE$Texture.call( this, canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

	this.needsUpdate = true;

};

THREE$CanvasTexture.prototype = Object.create( Texture.THREE$Texture.prototype );
THREE$CanvasTexture.prototype.constructor = THREE$CanvasTexture;