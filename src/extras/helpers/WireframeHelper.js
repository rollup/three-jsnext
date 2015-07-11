import { THREE$LineSegments } from '../../objects/LineSegments';
import { THREE$LineBasicMaterial } from '../../materials/LineBasicMaterial';
import { THREE$WireframeGeometry } from '../geometries/WireframeGeometry';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$WireframeHelper ( object, hex ) {
	this.isWireframeHelper = true;

	var color = ( hex !== undefined ) ? hex : 0xffffff;

	THREE$LineSegments.call( this, new THREE$WireframeGeometry( object.geometry ), new THREE$LineBasicMaterial( { color: color } ) );

	this.matrix = object.matrixWorld;
	this.matrixAutoUpdate = false;

};

THREE$WireframeHelper.prototype = Object.create( THREE$LineSegments.prototype );
THREE$WireframeHelper.prototype.constructor = THREE$WireframeHelper;


export { THREE$WireframeHelper };