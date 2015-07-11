import { THREE$Geometry } from '../../core/Geometry';
import { THREE$PolyhedronGeometry } from './PolyhedronGeometry';

/**
 * @author timothypratley / https://github.com/timothypratley
 */

function THREE$TetrahedronGeometry ( radius, detail ) {
	this.isTetrahedronGeometry = true;

	var vertices = [
		 1,  1,  1,   - 1, - 1,  1,   - 1,  1, - 1,    1, - 1, - 1
	];

	var indices = [
		 2,  1,  0,    0,  3,  2,    1,  3,  0,    2,  3,  1
	];

	THREE$PolyhedronGeometry.call( this, vertices, indices, radius, detail );

	this.type = 'TetrahedronGeometry';

	this.parameters = {
		radius: radius,
		detail: detail
	};

};

THREE$TetrahedronGeometry.prototype = Object.create( THREE$Geometry.prototype );
THREE$TetrahedronGeometry.prototype.constructor = THREE$TetrahedronGeometry;


export { THREE$TetrahedronGeometry };