import { Object3D } from '../core/Object3D';
import { Light } from './Light';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function PointLight ( color, intensity, distance, decay ) {
	this.isPointLight = true;

	Light.call( this, color );

	this.type = 'PointLight';

	this.intensity = ( intensity !== undefined ) ? intensity : 1;
	this.distance = ( distance !== undefined ) ? distance : 0;
	this.decay = ( decay !== undefined ) ? decay : 1;	// for physically correct lights, should be 2.

};

PointLight.prototype = Object.create( Light.prototype );
PointLight.prototype.constructor = PointLight;

PointLight.prototype.clone = function () {

	var light = new PointLight();

	Light.prototype.clone.call( this, light );

	light.intensity = this.intensity;
	light.distance = this.distance;
	light.decay = this.decay;

	return light;

};

PointLight.prototype.toJSON = function ( meta ) {

	var data = Object3D.prototype.toJSON.call( this, meta );

	data.object.color = this.color.getHex();
	data.object.intensity = this.intensity;
	data.object.distance = this.distance;
	data.object.decay = this.decay;

	return data;

};


export { PointLight };