Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Texture = require('./Texture');

/**
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$CompressedTexture(mipmaps, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy) {
	this.isCompressedTexture = true;

	_Texture.THREE$Texture.call(this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);

	this.image = { width: width, height: height };
	this.mipmaps = mipmaps;

	// no flipping for cube textures
	// (also flipping doesn't work for compressed textures )

	this.flipY = false;

	// can't generate mipmaps for compressed textures
	// mips must be embedded in DDS files

	this.generateMipmaps = false;
};

THREE$CompressedTexture.prototype = Object.create(_Texture.THREE$Texture.prototype);
THREE$CompressedTexture.prototype.constructor = THREE$CompressedTexture;

exports.THREE$CompressedTexture = THREE$CompressedTexture;