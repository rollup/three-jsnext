'use strict';

exports.THREE$QuadraticBezierCurve = THREE$QuadraticBezierCurve;

var Curve = require('../core/Curve');
var Vector2 = require('../../math/Vector2');
var Shape = require('../core/Shape');

/**************************************************************
 *	Quadratic Bezier curve
 **************************************************************/


function THREE$QuadraticBezierCurve ( v0, v1, v2 ) {
	this.isQuadraticBezierCurve = true;

	this.v0 = v0;
	this.v1 = v1;
	this.v2 = v2;

};

THREE$QuadraticBezierCurve.prototype = Object.create( Curve.THREE$Curve.prototype );
THREE$QuadraticBezierCurve.prototype.constructor = THREE$QuadraticBezierCurve;


THREE$QuadraticBezierCurve.prototype.getPoint = function ( t ) {

	var vector = new Vector2.THREE$Vector2();

	vector.x = Shape.THREE$Shape.Utils.b2( t, this.v0.x, this.v1.x, this.v2.x );
	vector.y = Shape.THREE$Shape.Utils.b2( t, this.v0.y, this.v1.y, this.v2.y );

	return vector;

};


THREE$QuadraticBezierCurve.prototype.getTangent = function( t ) {

	var vector = new Vector2.THREE$Vector2();

	vector.x = Curve.THREE$Curve.Utils.tangentQuadraticBezier( t, this.v0.x, this.v1.x, this.v2.x );
	vector.y = Curve.THREE$Curve.Utils.tangentQuadraticBezier( t, this.v0.y, this.v1.y, this.v2.y );

	// returns unit vector

	return vector.normalize();

};