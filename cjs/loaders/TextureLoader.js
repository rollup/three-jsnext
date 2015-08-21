Object.defineProperty(exports, '__esModule', {
	value: true
});

var _texturesTexture = require('../textures/Texture');

var _ImageLoader = require('./ImageLoader');

var _LoadingManager = require('./LoadingManager');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$TextureLoader(manager) {
	this.isTextureLoader = true;

	this.manager = manager !== undefined ? manager : _LoadingManager.THREE$DefaultLoadingManager;
};

THREE$TextureLoader.prototype = {

	constructor: THREE$TextureLoader,

	load: function (url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new _ImageLoader.THREE$ImageLoader(scope.manager);
		loader.setCrossOrigin(this.crossOrigin);
		loader.load(url, function (image) {

			var texture = new _texturesTexture.THREE$Texture(image);
			texture.needsUpdate = true;

			if (onLoad !== undefined) {

				onLoad(texture);
			}
		}, onProgress, onError);
	},

	setCrossOrigin: function (value) {

		this.crossOrigin = value;
	}

};

exports.THREE$TextureLoader = THREE$TextureLoader;