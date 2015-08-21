'use strict';

exports.THREE$ArcCurve = THREE$ArcCurve;

var EllipseCurve = require('./EllipseCurve');

/**************************************************************
 *	Arc curve
 **************************************************************/

function THREE$ArcCurve ( aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise ) {
	this.isArcCurve = true;

	EllipseCurve.THREE$EllipseCurve.call( this, aX, aY, aRadius, aRadius, aStartAngle, aEndAngle, aClockwise );

};

THREE$ArcCurve.prototype = Object.create( EllipseCurve.THREE$EllipseCurve.prototype );
THREE$ArcCurve.prototype.constructor = THREE$ArcCurve;