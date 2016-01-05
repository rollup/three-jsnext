import { Light } from './Light';
import { PerspectiveCamera } from '../cameras/PerspectiveCamera';
import { LightShadow } from './LightShadow';

/**
 * @author mrdoob / http://mrdoob.com/
 */


function PointLight ( color, intensity, distance, decay ) {
	this.isPointLight = true;

	Light.call( this, color, intensity );

	this.type = 'PointLight';

	this.distance = ( distance !== undefined ) ? distance : 0;
	this.decay = ( decay !== undefined ) ? decay : 1;	// for physically correct lights, should be 2.

	this.shadow = new LightShadow( new PerspectiveCamera( 90, 1, 0.5, 500 ) );

};

PointLight.prototype = Object.create( Light.prototype );
PointLight.prototype.constructor = PointLight;

PointLight.prototype.copy = function ( source ) {

	Light.prototype.copy.call( this, source );

	this.distance = source.distance;
	this.decay = source.decay;

	this.shadow = source.shadow.clone();

	return this;

};


export { PointLight };