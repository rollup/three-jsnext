Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Three = require('../Three');

var _XHRLoader = require('./XHRLoader');

var _texturesCompressedTexture = require('../textures/CompressedTexture');

var _LoadingManager = require('./LoadingManager');

/**
 * @author mrdoob / http://mrdoob.com/
 *
 * Abstract Base class to block based textures loader (dds, pvr, ...)
 */

function THREE$CompressedTextureLoader(manager) {
	this.isCompressedTextureLoader = true;

	this.manager = manager !== undefined ? manager : _LoadingManager.THREE$DefaultLoadingManager;

	// override in sub classes
	this._parser = null;
};

THREE$CompressedTextureLoader.prototype = {

	constructor: THREE$CompressedTextureLoader,

	load: function (url, onLoad, onProgress, onError) {

		var scope = this;

		var images = [];

		var texture = new _texturesCompressedTexture.THREE$CompressedTexture();
		texture.image = images;

		var loader = new _XHRLoader.THREE$XHRLoader(this.manager);
		loader.setCrossOrigin(this.crossOrigin);
		loader.setResponseType('arraybuffer');

		if (Array.isArray(url)) {

			var loaded = 0;

			var loadTexture = function (i) {

				loader.load(url[i], function (buffer) {

					var texDatas = scope._parser(buffer, true);

					images[i] = {
						width: texDatas.width,
						height: texDatas.height,
						format: texDatas.format,
						mipmaps: texDatas.mipmaps
					};

					loaded += 1;

					if (loaded === 6) {

						if (texDatas.mipmapCount === 1) texture.minFilter = _Three.THREE$LinearFilter;

						texture.format = texDatas.format;
						texture.needsUpdate = true;

						if (onLoad) onLoad(texture);
					}
				}, onProgress, onError);
			};

			for (var i = 0, il = url.length; i < il; ++i) {

				loadTexture(i);
			}
		} else {

			// compressed cubemap texture stored in a single DDS file

			loader.load(url, function (buffer) {

				var texDatas = scope._parser(buffer, true);

				if (texDatas.isCubemap) {

					var faces = texDatas.mipmaps.length / texDatas.mipmapCount;

					for (var f = 0; f < faces; f++) {

						images[f] = { mipmaps: [] };

						for (var i = 0; i < texDatas.mipmapCount; i++) {

							images[f].mipmaps.push(texDatas.mipmaps[f * texDatas.mipmapCount + i]);
							images[f].format = texDatas.format;
							images[f].width = texDatas.width;
							images[f].height = texDatas.height;
						}
					}
				} else {

					texture.image.width = texDatas.width;
					texture.image.height = texDatas.height;
					texture.mipmaps = texDatas.mipmaps;
				}

				if (texDatas.mipmapCount === 1) {

					texture.minFilter = _Three.THREE$LinearFilter;
				}

				texture.format = texDatas.format;
				texture.needsUpdate = true;

				if (onLoad) onLoad(texture);
			}, onProgress, onError);
		}

		return texture;
	},

	setCrossOrigin: function (value) {

		this.crossOrigin = value;
	}

};

exports.THREE$CompressedTextureLoader = THREE$CompressedTextureLoader;