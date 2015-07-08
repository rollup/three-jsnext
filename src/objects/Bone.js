import { THREE } from '../Three';
import { THREE$Object3D } from '../core/Object3D';

var THREE$Bone;

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author ikerr / http://verold.com
 */

THREE$Bone = function ( skin ) {

	THREE$Object3D.call( this );

	this.type = 'Bone';

	this.skin = skin;

};

THREE$Bone.prototype = Object.create( THREE$Object3D.prototype );
THREE$Bone.prototype.constructor = THREE$Bone;


export { THREE$Bone };