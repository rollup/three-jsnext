import { THREE$Texture } from '../../textures/Texture';
import { THREE$Matrix4 } from '../../math/Matrix4';
import { THREE$Matrix3 } from '../../math/Matrix3';
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

				if ( (parameter_src && parameter_src.isColor) ||
					 (parameter_src && parameter_src.isVector2) ||
					 (parameter_src && parameter_src.isVector3) ||
					 (parameter_src && parameter_src.isVector4) ||
					 (parameter_src && parameter_src.isMatrix3) ||
					 (parameter_src && parameter_src.isMatrix4) ||
					 (parameter_src && parameter_src.isTexture) ) {

					uniforms_dst[ u ][ p ] = parameter_src.clone();

				} else if ( Array.isArray( parameter_src ) ) {

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