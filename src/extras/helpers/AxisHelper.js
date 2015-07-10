import { THREE, THREE$VertexColors } from '../../Three';
import { THREE$Line, THREE$LinePieces } from '../../objects/Line';
import { THREE$LineBasicMaterial } from '../../materials/LineBasicMaterial';
import { THREE$BufferAttribute } from '../../core/BufferAttribute';
import { THREE$BufferGeometry } from '../../core/BufferGeometry';

/**
 * @author sroucheray / http://sroucheray.org/
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$AxisHelper ( size ) {

	size = size || 1;

	var vertices = new Float32Array( [
		0, 0, 0,  size, 0, 0,
		0, 0, 0,  0, size, 0,
		0, 0, 0,  0, 0, size
	] );

	var colors = new Float32Array( [
		1, 0, 0,  1, 0.6, 0,
		0, 1, 0,  0.6, 1, 0,
		0, 0, 1,  0, 0.6, 1
	] );

	var geometry = new THREE$BufferGeometry();
	geometry.addAttribute( 'position', new THREE$BufferAttribute( vertices, 3 ) );
	geometry.addAttribute( 'color', new THREE$BufferAttribute( colors, 3 ) );

	var material = new THREE$LineBasicMaterial( { vertexColors: THREE$VertexColors } );

	THREE$Line.call( this, geometry, material, THREE$LinePieces );

};

THREE$AxisHelper.prototype = Object.create( THREE$Line.prototype );
THREE$AxisHelper.prototype.constructor = THREE$AxisHelper;


export { THREE$AxisHelper };