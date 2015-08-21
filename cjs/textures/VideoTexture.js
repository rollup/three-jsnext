Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Texture = require('./Texture');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$VideoTexture(video, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {
	this.isVideoTexture = true;

	_Texture.THREE$Texture.call(this, video, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);

	this.generateMipmaps = false;

	var scope = this;

	var update = function () {

		requestAnimationFrame(update);

		if (video.readyState === video.HAVE_ENOUGH_DATA) {

			scope.needsUpdate = true;
		}
	};

	update();
};

THREE$VideoTexture.prototype = Object.create(_Texture.THREE$Texture.prototype);
THREE$VideoTexture.prototype.constructor = THREE$VideoTexture;

exports.THREE$VideoTexture = THREE$VideoTexture;