import { Light } from './Light';
import { OrthographicCamera } from '../cameras/OrthographicCamera';
import { LightShadow } from './LightShadow';
import { Object3D } from '../core/Object3D';

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function DirectionalLight ( color, intensity ) {
	this.isDirectionalLight = true;

	Light.call( this, color, intensity );

	this.type = 'DirectionalLight';

	this.position.set( 0, 1, 0 );
	this.updateMatrix();

	this.target = new Object3D();

	this.shadow = new LightShadow( new OrthographicCamera( - 5, 5, 5, - 5, 0.5, 500 ) );

};

DirectionalLight.prototype = Object.create( Light.prototype );
DirectionalLight.prototype.constructor = DirectionalLight;

DirectionalLight.prototype.copy = function ( source ) {

	Light.prototype.copy.call( this, source );

	this.target = source.target.clone();

	this.shadow = source.shadow.clone();

	return this;

};


export { DirectionalLight };