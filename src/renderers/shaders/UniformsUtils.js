import { THREE } from '../../Three';
import { THREE$Texture } from '../../textures/Texture';
import { THREE$Matrix4 } from '../../math/Matrix4';
import { THREE$Vector4 } from '../../math/Vector4';
import { THREE$Vector3 } from '../../math/Vector3';
import { THREE$Vector2 } from '../../math/Vector2';
import { THREE$Color } from '../../math/Color';

var THREE$UniformsUtils;

/**
 * Uniform Utilities
 */

THREE$UniformsUtils = {

	merge: function ( uniforms ) {

		var merged = {};

		for ( var u = 0; u < uniforms.length; u ++ ) {

			var tmp = this.clone( uniforms[ u ] );

			for ( var p in tmp ) {

				merged[ p ] = tmp[ p ];

			}

		}

		return merged;

	},

	clone: function ( uniforms_src ) {

		var uniforms_dst = {};

		for ( var u in uniforms_src ) {

			uniforms_dst[ u ] = {};

			for ( var p in uniforms_src[ u ] ) {

				var parameter_src = uniforms_src[ u ][ p ];

				if ( parameter_src instanceof THREE$Color ||
					 parameter_src instanceof THREE$Vector2 ||
					 parameter_src instanceof THREE$Vector3 ||
					 parameter_src instanceof THREE$Vector4 ||
					 parameter_src instanceof THREE$Matrix4 ||
					 parameter_src instanceof THREE$Texture ) {

					uniforms_dst[ u ][ p ] = parameter_src.clone();

				} else if ( parameter_src instanceof Array ) {

					uniforms_dst[ u ][ p ] = parameter_src.slice();

				} else {

					uniforms_dst[ u ][ p ] = parameter_src;

				}

			}

		}

		return uniforms_dst;

	}

};


export { THREE$UniformsUtils };