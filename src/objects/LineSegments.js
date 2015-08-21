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


export { THREE$LineSegments };