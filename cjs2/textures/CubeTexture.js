'use strict';

exports.THREE$CubeTexture = THREE$CubeTexture;

var Texture = require('./Texture');
var Three = require('../Three');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$CubeTexture ( images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {
	this.isCubeTexture = true;

	mapping = mapping !== undefined ? mapping : Three.THREE$CubeReflectionMapping;

	Texture.THREE$Texture.call( this, images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

	this.images = images;
	this.flipY = false;

};

THREE$CubeTexture.prototype = Object.create( Texture.THREE$Texture.prototype );
THREE$CubeTexture.prototype.constructor = THREE$CubeTexture;

THREE$CubeTexture.prototype.copy = function ( source ) {

	Texture.THREE$Texture.prototype.copy.call( this, source );
	
	this.images = source.images;
	
	return this;

};