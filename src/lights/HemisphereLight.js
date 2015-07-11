import { THREE$Object3D } from '../core/Object3D';
import { THREE$Light } from './Light';
import { THREE$Color } from '../math/Color';

/**
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$HemisphereLight ( skyColor, groundColor, intensity ) {
	this.isHemisphereLight = true;

	THREE$Light.call( this, skyColor );

	this.type = 'HemisphereLight';

	this.position.set( 0, 100, 0 );

	this.groundColor = new THREE$Color( groundColor );
	this.intensity = ( intensity !== undefined ) ? intensity : 1;

};

THREE$HemisphereLight.prototype = Object.create( THREE$Light.prototype );
THREE$HemisphereLight.prototype.constructor = THREE$HemisphereLight;

THREE$HemisphereLight.prototype.clone = function () {

	var light = new THREE$HemisphereLight();

	THREE$Light.prototype.clone.call( this, light );

	light.groundColor.copy( this.groundColor );
	light.intensity = this.intensity;

	return light;

};

THREE$HemisphereLight.prototype.toJSON = function ( meta ) {

	var data = THREE$Object3D.prototype.toJSON.call( this, meta );

	data.object.color = this.color.getHex();
	data.object.groundColor = this.groundColor.getHex();

	return data;

};


export { THREE$HemisphereLight };