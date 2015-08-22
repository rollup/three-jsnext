import { Color } from '../math/Color';
import { Vector3 } from '../math/Vector3';

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function Face3 ( a, b, c, normal, color ) {
	this.isFace3 = true;

	this.a = a;
	this.b = b;
	this.c = c;

	this.normal = (normal && normal.isVector3) ? normal : new Vector3();
	this.vertexNormals = Array.isArray( normal ) ? normal : [];

	this.color = (color && color.isColor) ? color : new Color();
	this.vertexColors = Array.isArray( color ) ? color : [];

	this.vertexTangents = [];

};

Face3.prototype = {

	constructor: Face3,

	clone: function () {

		var face = new Face3( this.a, this.b, this.c );

		face.normal.copy( this.normal );
		face.color.copy( this.color );

		for ( var i = 0, il = this.vertexNormals.length; i < il; i ++ ) {

			face.vertexNormals[ i ] = this.vertexNormals[ i ].clone();

		}

		for ( var i = 0, il = this.vertexColors.length; i < il; i ++ ) {

			face.vertexColors[ i ] = this.vertexColors[ i ].clone();

		}

		for ( var i = 0, il = this.vertexTangents.length; i < il; i ++ ) {

			face.vertexTangents[ i ] = this.vertexTangents[ i ].clone();

		}

		return face;

	}

};


export { Face3 };