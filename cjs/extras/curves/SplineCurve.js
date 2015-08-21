Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreCurve = require('../core/Curve');

var _mathVector2 = require('../../math/Vector2');

/**************************************************************
 *	Spline curve
 **************************************************************/

function THREE$SplineCurve(points /* array of Vector2 */) {
	this.isSplineCurve = true;

	this.points = points == undefined ? [] : points;
};

THREE$SplineCurve.prototype = Object.create(_coreCurve.THREE$Curve.prototype);
THREE$SplineCurve.prototype.constructor = THREE$SplineCurve;

THREE$SplineCurve.prototype.getPoint = function (t) {

	var points = this.points;
	var point = (points.length - 1) * t;

	var intPoint = Math.floor(point);
	var weight = point - intPoint;

	var point0 = points[intPoint === 0 ? intPoint : intPoint - 1];
	var point1 = points[intPoint];
	var point2 = points[intPoint > points.length - 2 ? points.length - 1 : intPoint + 1];
	var point3 = points[intPoint > points.length - 3 ? points.length - 1 : intPoint + 2];

	var vector = new _mathVector2.THREE$Vector2();

	vector.x = _coreCurve.THREE$Curve.Utils.interpolate(point0.x, point1.x, point2.x, point3.x, weight);
	vector.y = _coreCurve.THREE$Curve.Utils.interpolate(point0.y, point1.y, point2.y, point3.y, weight);

	return vector;
};

exports.THREE$SplineCurve = THREE$SplineCurve;