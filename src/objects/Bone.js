import { Object3D } from '../core/Object3D';

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author ikerr / http://verold.com
 */

function Bone ( skin ) {
	this.isBone = true;

	Object3D.call( this );

	this.type = 'Bone';

	this.skin = skin;

};

Bone.prototype = Object.create( Object3D.prototype );
Bone.prototype.constructor = Bone;

Bone.prototype.clone = function ( object ) {

	if ( object === undefined ) object = new Bone( this.skin );

	Object3D.prototype.clone.call( this, object );
	object.skin = this.skin; 

	return object;

};

export { Bone };