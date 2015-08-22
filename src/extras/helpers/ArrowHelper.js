import { Vector3 } from '../../math/Vector3';
import { Object3D } from '../../core/Object3D';
import { MeshBasicMaterial } from '../../materials/MeshBasicMaterial';
import { Mesh } from '../../objects/Mesh';
import { LineBasicMaterial } from '../../materials/LineBasicMaterial';
import { Line } from '../../objects/Line';
import { Matrix4 } from '../../math/Matrix4';
import { CylinderGeometry } from '../geometries/CylinderGeometry';
import { Geometry } from '../../core/Geometry';

var ArrowHelper;

/**
 * @author WestLangley / http://github.com/WestLangley
 * @author zz85 / http://github.com/zz85
 * @author bhouston / http://exocortex.com
 *
 * Creates an arrow for visualizing directions
 *
 * Parameters:
 *  dir - Vector3
 *  origin - Vector3
 *  length - Number
 *  color - color in hex value
 *  headLength - Number
 *  headWidth - Number
 */

ArrowHelper = ( function () {

	var lineGeometry = new Geometry();
	lineGeometry.vertices.push( new Vector3( 0, 0, 0 ), new Vector3( 0, 1, 0 ) );

	var coneGeometry = new CylinderGeometry( 0, 0.5, 1, 5, 1 );
	coneGeometry.applyMatrix( new Matrix4().makeTranslation( 0, - 0.5, 0 ) );

	return function ( dir, origin, length, color, headLength, headWidth ) {

		// dir is assumed to be normalized

		Object3D.call( this );

		if ( color === undefined ) color = 0xffff00;
		if ( length === undefined ) length = 1;
		if ( headLength === undefined ) headLength = 0.2 * length;
		if ( headWidth === undefined ) headWidth = 0.2 * headLength;

		this.position.copy( origin );

		this.line = new Line( lineGeometry, new LineBasicMaterial( { color: color } ) );
		this.line.matrixAutoUpdate = false;
		this.add( this.line );

		this.cone = new Mesh( coneGeometry, new MeshBasicMaterial( { color: color } ) );
		this.cone.matrixAutoUpdate = false;
		this.add( this.cone );

		this.setDirection( dir );
		this.setLength( length, headLength, headWidth );

	}

}() );

ArrowHelper.prototype = Object.create( Object3D.prototype );
ArrowHelper.prototype.constructor = ArrowHelper;

ArrowHelper.prototype.setDirection = ( function () {

	var axis = new Vector3();
	var radians;

	return function ( dir ) {

		// dir is assumed to be normalized

		if ( dir.y > 0.99999 ) {

			this.quaternion.set( 0, 0, 0, 1 );

		} else if ( dir.y < - 0.99999 ) {

			this.quaternion.set( 1, 0, 0, 0 );

		} else {

			axis.set( dir.z, 0, - dir.x ).normalize();

			radians = Math.acos( dir.y );

			this.quaternion.setFromAxisAngle( axis, radians );

		}

	};

}() );

ArrowHelper.prototype.setLength = function ( length, headLength, headWidth ) {

	if ( headLength === undefined ) headLength = 0.2 * length;
	if ( headWidth === undefined ) headWidth = 0.2 * headLength;

	this.line.scale.set( 1, length - headLength, 1 );
	this.line.updateMatrix();

	this.cone.scale.set( headWidth, headLength, headWidth );
	this.cone.position.y = length;
	this.cone.updateMatrix();

};

ArrowHelper.prototype.setColor = function ( color ) {

	this.line.material.color.set( color );
	this.cone.material.color.set( color );

};


export { ArrowHelper };