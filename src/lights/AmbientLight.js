import { THREE } from '../Three';
import { THREE$Light } from './Light';

var THREE$AmbientLight;

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE$AmbientLight = function ( color ) {

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


export { THREE$AmbientLight };