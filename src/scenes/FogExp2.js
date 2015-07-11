import { THREE$Color } from '../math/Color';

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$FogExp2 ( color, density ) {
	this.isFogExp2 = true;

	this.name = '';

	this.color = new THREE$Color( color );
	this.density = ( density !== undefined ) ? density : 0.00025;

};

THREE$FogExp2.prototype.clone = function () {

	return new THREE$FogExp2( this.color.getHex(), this.density );

};


export { THREE$FogExp2 };