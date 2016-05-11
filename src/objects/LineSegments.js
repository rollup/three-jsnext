import { Line } from './Line';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function LineSegments ( geometry, material ) {
	this.isLineSegments = this.isLine = this.isObject3D = true;

	Line.call( this, geometry, material );

	this.type = 'LineSegments';

};

LineSegments.prototype = Object.create( Line.prototype );
LineSegments.prototype.constructor = LineSegments;


export { LineSegments };