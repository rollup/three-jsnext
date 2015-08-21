Object.defineProperty(exports, '__esModule', {
		value: true
});

var _mathSphere = require('../math/Sphere');

var _mathVector3 = require('../math/Vector3');

var _coreBufferAttribute = require('../core/BufferAttribute');

var _coreBufferGeometry = require('../core/BufferGeometry');

var _XHRLoader = require('./XHRLoader');

var _LoadingManager = require('./LoadingManager');

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$BufferGeometryLoader(manager) {
		this.isBufferGeometryLoader = true;

		this.manager = manager !== undefined ? manager : _LoadingManager.THREE$DefaultLoadingManager;
};

THREE$BufferGeometryLoader.prototype = {

		constructor: THREE$BufferGeometryLoader,

		load: function (url, onLoad, onProgress, onError) {

				var scope = this;

				var loader = new _XHRLoader.THREE$XHRLoader(scope.manager);
				loader.setCrossOrigin(this.crossOrigin);
				loader.load(url, function (text) {

						onLoad(scope.parse(JSON.parse(text)));
				}, onProgress, onError);
		},

		setCrossOrigin: function (value) {

				this.crossOrigin = value;
		},

		parse: function (json) {

				var geometry = new _coreBufferGeometry.THREE$BufferGeometry();

				var attributes = json.data.attributes;

				for (var key in attributes) {

						var attribute = attributes[key];
						var typedArray = new self[attribute.type](attribute.array);

						geometry.addAttribute(key, new _coreBufferAttribute.THREE$BufferAttribute(typedArray, attribute.itemSize));
				}

				var groups = json.data.groups || json.data.drawcalls || json.data.offsets;

				if (groups !== undefined) {

						for (var i = 0, n = groups.length; i !== n; ++i) {

								var group = groups[i];

								geometry.addGroup(group.start, group.count);
						}
				}

				var boundingSphere = json.data.boundingSphere;

				if (boundingSphere !== undefined) {

						var center = new _mathVector3.THREE$Vector3();

						if (boundingSphere.center !== undefined) {

								center.fromArray(boundingSphere.center);
						}

						geometry.boundingSphere = new _mathSphere.THREE$Sphere(center, boundingSphere.radius);
				}

				return geometry;
		}

};

exports.THREE$BufferGeometryLoader = THREE$BufferGeometryLoader;