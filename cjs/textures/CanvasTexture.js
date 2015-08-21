Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Texture = require('./Texture');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$CanvasTexture(canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {
	this.isCanvasTexture = true;

	_Texture.THREE$Texture.call(this, canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);

	this.needsUpdate = true;
};

THREE$CanvasTexture.prototype = Object.create(_Texture.THREE$Texture.prototype);
THREE$CanvasTexture.prototype.constructor = THREE$CanvasTexture;

exports.THREE$CanvasTexture = THREE$CanvasTexture;