import { THREE$Object3D } from '../core/Object3D';
import { THREE$Light } from './Light';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$AmbientLight ( color ) {
	this.isAmbientLight = true;

	THREE$Light.call( this, color );

	this.type = 'AmbientLight';

};

THREE$AmbientLight.prototype = Object.create( THREE$Light.prototype );
THREE$AmbientLight.prototype.constructor = THREE$AmbientLight;

THREE$AmbientLight.prototype.clone = function () {

	var light = new THREE$AmbientLight();

	THREE$Light.prototype.clone.call( this, light );

	return light;

};

THREE$AmbientLight.prototype.toJSON = function ( meta ) {

	var data = THREE$Object3D.prototype.toJSON.call( this, meta );

	data.object.color = this.color.getHex();

	return data;

};


export { THREE$AmbientLight };