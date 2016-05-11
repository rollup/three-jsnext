import { LightShadow } from './LightShadow';
import { OrthographicCamera } from '../cameras/OrthographicCamera';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function DirectionalLightShadow ( light ) {
	this.isDirectionalLightShadow = this.isLightShadow = true;

	LightShadow.call( this, new OrthographicCamera( - 5, 5, 5, - 5, 0.5, 500 ) );

};

DirectionalLightShadow.prototype = Object.create( LightShadow.prototype );
DirectionalLightShadow.prototype.constructor = DirectionalLightShadow;


export { DirectionalLightShadow };