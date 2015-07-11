import { THREE$Line } from './Line';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$LineSegments ( geometry, material ) {
	this.isLineSegments = true;

	THREE$Line.call( this, geometry, material );

	this.type = 'LineSegments';

};

THREE$LineSegments.prototype = Object.create( THREE$Line.prototype );
THREE$LineSegments.prototype.constructor = THREE$LineSegments;

THREE$LineSegments.prototype.clone = function ( object ) {

	if ( object === undefined ) object = new THREE$LineSegments( this.geometry, this.material );

	THREE$Line.prototype.clone.call( this, object );

	return object;

};

export { THREE$LineSegments };