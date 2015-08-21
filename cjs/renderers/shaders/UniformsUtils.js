Object.defineProperty(exports, '__esModule', {
	value: true
});

var _texturesTexture = require('../../textures/Texture');

var _mathMatrix4 = require('../../math/Matrix4');

var _mathMatrix3 = require('../../math/Matrix3');

var _mathVector4 = require('../../math/Vector4');

var _mathVector3 = require('../../math/Vector3');

var _mathVector2 = require('../../math/Vector2');

var _mathColor = require('../../math/Color');

var THREE$UniformsUtils;

/**
 * Uniform Utilities
 */

exports.THREE$UniformsUtils = THREE$UniformsUtils = {

	merge: function (uniforms) {

		var merged = {};

		for (var u = 0; u < uniforms.length; u++) {

			var tmp = this.clone(uniforms[u]);

			for (var p in tmp) {

				merged[p] = tmp[p];
			}
		}

		return merged;
	},

	clone: function (uniforms_src) {

		var uniforms_dst = {};

		for (var u in uniforms_src) {

			uniforms_dst[u] = {};

			for (var p in uniforms_src[u]) {

				var parameter_src = uniforms_src[u][p];

				if (parameter_src && parameter_src.isColor || parameter_src && parameter_src.isVector2 || parameter_src && parameter_src.isVector3 || parameter_src && parameter_src.isVector4 || parameter_src && parameter_src.isMatrix3 || parameter_src && parameter_src.isMatrix4 || parameter_src && parameter_src.isTexture) {

					uniforms_dst[u][p] = parameter_src.clone();
				} else if (Array.isArray(parameter_src)) {

					uniforms_dst[u][p] = parameter_src.slice();
				} else {

					uniforms_dst[u][p] = parameter_src;
				}
			}
		}

		return uniforms_dst;
	}

};

exports.THREE$UniformsUtils = THREE$UniformsUtils;