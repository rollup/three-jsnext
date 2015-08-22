import { Object3D } from '../../core/Object3D';

/**
 * @author alteredq / http://alteredqualia.com/
 */

function ImmediateRenderObject () {
	this.isImmediateRenderObject = true;

	Object3D.call( this );

	this.render = function ( renderCallback ) {};

};

ImmediateRenderObject.prototype = Object.create( Object3D.prototype );
ImmediateRenderObject.prototype.constructor = ImmediateRenderObject;


export { ImmediateRenderObject };