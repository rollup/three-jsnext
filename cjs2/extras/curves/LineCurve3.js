'use strict';

var Vector3 = require('../../math/Vector3');
var Curve = require('../core/Curve');

var THREE$LineCurve3;

/**************************************************************
 *	Line3D
 **************************************************************/

THREE$LineCurve3 = Curve.THREE$Curve.create(

	function ( v1, v2 ) {

		this.v1 = v1;
		this.v2 = v2;

	},

	function ( t ) {

		var vector = new Vector3.THREE$Vector3();

		vector.subVectors( this.v2, this.v1 ); // diff
		vector.multiplyScalar( t );
		vector.add( this.v1 );

		return vector;

	}

);

exports.THREE$LineCurve3 = THREE$LineCurve3;