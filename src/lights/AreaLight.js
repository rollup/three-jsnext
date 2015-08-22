import { Object3D } from '../core/Object3D';
import { Light } from './Light';
import { Vector3 } from '../math/Vector3';

/**
 * @author MPanknin / http://www.redplant.de/
 * @author alteredq / http://alteredqualia.com/
 * @author prafullit
 */

function AreaLight ( color, intensity ) {
	this.isAreaLight = true;

	Light.call( this, color );

	this.type = 'AreaLight';

	this.normal = new Vector3( 0, - 1, 0 );
	this.right = new Vector3( 1, 0, 0 );

	this.intensity = ( intensity !== undefined ) ? intensity : 1;

	this.width = 1.0;
	this.height = 1.0;

	this.constantAttenuation = 1.5;
	this.linearAttenuation = 0.5;
	this.quadraticAttenuation = 0.1;

};

AreaLight.prototype = Object.create( Light.prototype );
AreaLight.prototype.constructor = AreaLight;

AreaLight.prototype.clone = function () {

	var light = new AreaLight();

	Light.prototype.clone.call( this, light );

	light.normal.copy(this.normal);
	light.right.copy(this.right);
	light.intensity = this.intensity;
	light.width = this.width;
	light.height = this.height;
	light.constantAttenuation = this.constantAttenuation;
	light.linearAttenuation = this.linearAttenuation;
	light.quadraticAttenuation = this.quadraticAttenuation

	return light;

};

AreaLight.prototype.toJSON = function ( meta ) {

	var data = Object3D.prototype.toJSON.call( this, meta );

	data.object.color = this.color.getHex();
	data.object.intensity = this.intensity;

	return data;
};


export { AreaLight };