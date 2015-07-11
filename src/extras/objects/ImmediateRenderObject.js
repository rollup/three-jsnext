import { THREE$Object3D } from '../../core/Object3D';

/**
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$ImmediateRenderObject () {
	this.isImmediateRenderObject = true;

	THREE$Object3D.call( this );

	this.render = function ( renderCallback ) {};

};

THREE$ImmediateRenderObject.prototype = Object.create( THREE$Object3D.prototype );
THREE$ImmediateRenderObject.prototype.constructor = THREE$ImmediateRenderObject;


export { THREE$ImmediateRenderObject };