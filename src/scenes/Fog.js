import { THREE } from '../Three';
import { THREE$Color } from '../math/Color';

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$Fog ( color, near, far ) {

	this.name = '';

	this.color = new THREE$Color( color );

	this.near = ( near !== undefined ) ? near : 1;
	this.far = ( far !== undefined ) ? far : 1000;

};

THREE$Fog.prototype.clone = function () {

	return new THREE$Fog( this.color.getHex(), this.near, this.far );

};


export { THREE$Fog };