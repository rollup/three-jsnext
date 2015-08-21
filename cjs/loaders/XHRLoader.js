Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Cache = require('./Cache');

var _LoadingManager = require('./LoadingManager');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$XHRLoader(manager) {
	this.isXHRLoader = true;

	this.manager = manager !== undefined ? manager : _LoadingManager.THREE$DefaultLoadingManager;
};

THREE$XHRLoader.prototype = {

	constructor: THREE$XHRLoader,

	load: function (url, onLoad, onProgress, onError) {

		var scope = this;

		var cached = _Cache.THREE$Cache.get(url);

		if (cached !== undefined) {

			if (onLoad) {

				setTimeout(function () {

					onLoad(cached);
				}, 0);
			}

			return cached;
		}

		var request = new XMLHttpRequest();
		request.open('GET', url, true);

		request.addEventListener('load', function (event) {

			_Cache.THREE$Cache.add(url, this.response);

			if (onLoad) onLoad(this.response);

			scope.manager.itemEnd(url);
		}, false);

		if (onProgress !== undefined) {

			request.addEventListener('progress', function (event) {

				onProgress(event);
			}, false);
		}

		if (onError !== undefined) {

			request.addEventListener('error', function (event) {

				onError(event);
			}, false);
		}

		if (this.crossOrigin !== undefined) request.crossOrigin = this.crossOrigin;
		if (this.responseType !== undefined) request.responseType = this.responseType;
		if (this.withCredentials !== undefined) request.withCredentials = this.withCredentials;

		request.send(null);

		scope.manager.itemStart(url);

		return request;
	},

	setResponseType: function (value) {

		this.responseType = value;
	},

	setCrossOrigin: function (value) {

		this.crossOrigin = value;
	},

	setWithCredentials: function (value) {

		this.withCredentials = value;
	}

};

exports.THREE$XHRLoader = THREE$XHRLoader;