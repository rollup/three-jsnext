import { Line } from './Line';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function LineSegments ( geometry, material ) {
	this.isLineSegments = true;

	Line.call( this, geometry, material );

	this.type = 'LineSegments';

};

LineSegments.prototype = Object.create( Line.prototype );
LineSegments.prototype.constructor = LineSegments;

LineSegments.prototype.clone = function ( object ) {

	if ( object === undefined ) object = new LineSegments( this.geometry, this.material );

	Line.prototype.clone.call( this, object );

	return object;

};

export { LineSegments };