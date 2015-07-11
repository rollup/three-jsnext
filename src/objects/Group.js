import { THREE$Object3D } from '../core/Object3D';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$Group () {
	this.isGroup = true;

	THREE$Object3D.call( this );

	this.type = 'Group';

};

THREE$Group.prototype = Object.create( THREE$Object3D.prototype );
THREE$Group.prototype.constructor = THREE$Group;


export { THREE$Group };