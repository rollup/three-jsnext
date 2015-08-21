Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Texture = require('./Texture');

/**
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$DataTexture(data, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy) {
	this.isDataTexture = true;

	_Texture.THREE$Texture.call(this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);

	this.image = { data: data, width: width, height: height };
};

THREE$DataTexture.prototype = Object.create(_Texture.THREE$Texture.prototype);
THREE$DataTexture.prototype.constructor = THREE$DataTexture;

exports.THREE$DataTexture = THREE$DataTexture;