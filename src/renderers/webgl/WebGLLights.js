import { Color } from '../../math/Color';
import { Vector3 } from '../../math/Vector3';

/**
* @author mrdoob / http://mrdoob.com/
*/

function WebGLLights () {
	this.isWebGLLights = true;

	var lights = {};

	this.get = function ( light ) {

		if ( lights[ light.id ] !== undefined ) {

			return lights[ light.id ];

		}

		var uniforms;

		switch ( light.type ) {

			case 'HemisphereLight':
				uniforms = {
					direction: new Vector3(),
					skyColor: new Color(),
					groundColor: new Color()
				};
				break;

			case 'DirectionalLight':
				uniforms = {
					direction: new Vector3(),
					color: new Color(),
					shadow: -1
				};
				break;

			case 'PointLight':
				uniforms = {
					position: new Vector3(),
					color: new Color(),
					distance: 0,
					decay: 0,
					shadow: -1
				};
				break;

			case 'SpotLight':
				uniforms = {
					position: new Vector3(),
					direction: new Vector3(),
					color: new Color(),
					distance: 0,
					angleCos: 0,
					exponent: 0,
					decay: 0,
					shadow: -1
				};
				break;

		}

		lights[ light.id ] = uniforms;

		return uniforms;

	};

};


export { WebGLLights };