Object.defineProperty(exports, '__esModule', {
  value: true
});

var _EllipseCurve = require('./EllipseCurve');

/**************************************************************
 *	Arc curve
 **************************************************************/

function THREE$ArcCurve(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
  this.isArcCurve = true;

  _EllipseCurve.THREE$EllipseCurve.call(this, aX, aY, aRadius, aRadius, aStartAngle, aEndAngle, aClockwise);
};

THREE$ArcCurve.prototype = Object.create(_EllipseCurve.THREE$EllipseCurve.prototype);
THREE$ArcCurve.prototype.constructor = THREE$ArcCurve;

exports.THREE$ArcCurve = THREE$ArcCurve;