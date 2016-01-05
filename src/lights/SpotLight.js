import { Light } from './Light';
import { PerspectiveCamera } from '../cameras/PerspectiveCamera';
import { LightShadow } from './LightShadow';
import { Object3D } from '../core/Object3D';

/**
 * @author alteredq / http://alteredqualia.com/
 */

function SpotLight ( color, intensity, distance, angle, exponent, decay ) {
	this.isSpotLight = true;

	Light.call( this, color, intensity );

	this.type = 'SpotLight';

	this.position.set( 0, 1, 0 );
	this.updateMatrix();

	this.target = new Object3D();

	this.distance = ( distance !== undefined ) ? distance : 0;
	this.angle = ( angle !== undefined ) ? angle : Math.PI / 3;
	this.exponent = ( exponent !== undefined ) ? exponent : 10;
	this.decay = ( decay !== undefined ) ? decay : 1;	// for physically correct lights, should be 2.

	this.shadow = new LightShadow( new PerspectiveCamera( 50, 1, 0.5, 500 ) );

};

SpotLight.prototype = Object.create( Light.prototype );
SpotLight.prototype.constructor = SpotLight;

SpotLight.prototype.copy = function ( source ) {

	Light.prototype.copy.call( this, source );

	this.distance = source.distance;
	this.angle = source.angle;
	this.exponent = source.exponent;
	this.decay = source.decay;

	this.target = source.target.clone();

	this.shadow = source.shadow.clone();

	return this;

};


export { SpotLight };