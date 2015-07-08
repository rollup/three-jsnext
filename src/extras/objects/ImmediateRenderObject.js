import { THREE } from '../../Three';
import { THREE$Object3D } from '../../core/Object3D';

var THREE$ImmediateRenderObject;

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE$ImmediateRenderObject = function () {

	THREE$Object3D.call( this );

	this.render = function ( renderCallback ) {};

};

THREE$ImmediateRenderObject.prototype = Object.create( THREE$Object3D.prototype );
THREE$ImmediateRenderObject.prototype.constructor = THREE$ImmediateRenderObject;


export { THREE$ImmediateRenderObject };