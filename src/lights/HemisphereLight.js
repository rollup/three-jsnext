import { Object3D } from '../core/Object3D';
import { Light } from './Light';
import { Color } from '../math/Color';

/**
 * @author alteredq / http://alteredqualia.com/
 */

function HemisphereLight ( skyColor, groundColor, intensity ) {
	this.isHemisphereLight = true;

	Light.call( this, skyColor );

	this.type = 'HemisphereLight';

	this.position.set( 0, 100, 0 );

	this.groundColor = new Color( groundColor );
	this.intensity = ( intensity !== undefined ) ? intensity : 1;

};

HemisphereLight.prototype = Object.create( Light.prototype );
HemisphereLight.prototype.constructor = HemisphereLight;

HemisphereLight.prototype.clone = function () {

	var light = new HemisphereLight();

	Light.prototype.clone.call( this, light );

	light.groundColor.copy( this.groundColor );
	light.intensity = this.intensity;

	return light;

};

HemisphereLight.prototype.toJSON = function ( meta ) {

	var data = Object3D.prototype.toJSON.call( this, meta );

	data.object.color = this.color.getHex();
	data.object.groundColor = this.groundColor.getHex();

	return data;

};


export { HemisphereLight };