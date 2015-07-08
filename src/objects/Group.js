import { THREE } from '../Three';
import { THREE$Object3D } from '../core/Object3D';

var THREE$Group;

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE$Group = function () {

	THREE$Object3D.call( this );

	this.type = 'Group';

};

THREE$Group.prototype = Object.create( THREE$Object3D.prototype );
THREE$Group.prototype.constructor = THREE$Group;


export { THREE$Group };