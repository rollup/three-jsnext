import { LineSegments } from '../../objects/LineSegments';
import { VertexColors } from '../../constants';
import { LineBasicMaterial } from '../../materials/LineBasicMaterial';
import { Float32Attribute } from '../../core/BufferAttribute';
import { BufferGeometry } from '../../core/BufferGeometry';
import { Color } from '../../math/Color';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function GridHelper ( size, step, color1, color2 ) {
	this.isGridHelper = this.isLineSegments = this.isLine = this.isObject3D = true;

	color1 = new Color( color1 !== undefined ? color1 : 0x444444 );
	color2 = new Color( color2 !== undefined ? color2 : 0x888888 );

	var vertices = [];
	var colors = [];

	for ( var i = - size, j = 0; i <= size; i += step ) {

		vertices.push( - size, 0, i, size, 0, i );
		vertices.push( i, 0, - size, i, 0, size );

		var color = i === 0 ? color1 : color2;

		color.toArray( colors, j ); j += 3;
		color.toArray( colors, j ); j += 3;
		color.toArray( colors, j ); j += 3;
		color.toArray( colors, j ); j += 3;

	}

	var geometry = new BufferGeometry();
	geometry.addAttribute( 'position', new Float32Attribute( vertices, 3 ) );
	geometry.addAttribute( 'color', new Float32Attribute( colors, 3 ) );

	var material = new LineBasicMaterial( { vertexColors: VertexColors } );

	LineSegments.call( this, geometry, material );

};

GridHelper.prototype = Object.create( LineSegments.prototype );
GridHelper.prototype.constructor = GridHelper;

GridHelper.prototype.setColors = function () {

	console.error( 'THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.' );

};


export { GridHelper };