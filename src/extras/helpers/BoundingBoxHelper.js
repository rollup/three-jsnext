import { THREE$Mesh } from '../../objects/Mesh';
import { THREE$MeshBasicMaterial } from '../../materials/MeshBasicMaterial';
import { THREE$BoxGeometry } from '../geometries/BoxGeometry';
import { THREE$Box3 } from '../../math/Box3';

/**
 * @author WestLangley / http://github.com/WestLangley
 */

// a helper to show the world-axis-aligned bounding box for an object

function THREE$BoundingBoxHelper ( object, hex ) {
	this.isBoundingBoxHelper = true;

	var color = ( hex !== undefined ) ? hex : 0x888888;

	this.object = object;

	this.box = new THREE$Box3();

	THREE$Mesh.call( this, new THREE$BoxGeometry( 1, 1, 1 ), new THREE$MeshBasicMaterial( { color: color, wireframe: true } ) );

};

THREE$BoundingBoxHelper.prototype = Object.create( THREE$Mesh.prototype );
THREE$BoundingBoxHelper.prototype.constructor = THREE$BoundingBoxHelper;

THREE$BoundingBoxHelper.prototype.update = function () {

	this.box.setFromObject( this.object );

	this.box.size( this.scale );

	this.box.center( this.position );

};


export { THREE$BoundingBoxHelper };