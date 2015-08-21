Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Texture = require('./Texture');

var _Three = require('../Three');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$CubeTexture(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {
	this.isCubeTexture = true;

	mapping = mapping !== undefined ? mapping : _Three.THREE$CubeReflectionMapping;

	_Texture.THREE$Texture.call(this, images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);

	this.images = images;
	this.flipY = false;
};

THREE$CubeTexture.prototype = Object.create(_Texture.THREE$Texture.prototype);
THREE$CubeTexture.prototype.constructor = THREE$CubeTexture;

THREE$CubeTexture.prototype.copy = function (source) {

	_Texture.THREE$Texture.prototype.copy.call(this, source);

	this.images = source.images;

	return this;
};

exports.THREE$CubeTexture = THREE$CubeTexture;