'use strict';

exports.THREE$CubicBezierCurve = THREE$CubicBezierCurve;

var Vector2 = require('../../math/Vector2');
var Curve = require('../core/Curve');
var Shape = require('../core/Shape');

/**************************************************************
 *	Cubic Bezier curve
 **************************************************************/

function THREE$CubicBezierCurve ( v0, v1, v2, v3 ) {
	this.isCubicBezierCurve = true;

	this.v0 = v0;
	this.v1 = v1;
	this.v2 = v2;
	this.v3 = v3;

};

THREE$CubicBezierCurve.prototype = Object.create( Curve.THREE$Curve.prototype );
THREE$CubicBezierCurve.prototype.constructor = THREE$CubicBezierCurve;

THREE$CubicBezierCurve.prototype.getPoint = function ( t ) {

	var tx, ty;

	tx = Shape.THREE$Shape.Utils.b3( t, this.v0.x, this.v1.x, this.v2.x, this.v3.x );
	ty = Shape.THREE$Shape.Utils.b3( t, this.v0.y, this.v1.y, this.v2.y, this.v3.y );

	return new Vector2.THREE$Vector2( tx, ty );

};

THREE$CubicBezierCurve.prototype.getTangent = function( t ) {

	var tx, ty;

	tx = Curve.THREE$Curve.Utils.tangentCubicBezier( t, this.v0.x, this.v1.x, this.v2.x, this.v3.x );
	ty = Curve.THREE$Curve.Utils.tangentCubicBezier( t, this.v0.y, this.v1.y, this.v2.y, this.v3.y );

	var tangent = new Vector2.THREE$Vector2( tx, ty );
	tangent.normalize();

	return tangent;

};