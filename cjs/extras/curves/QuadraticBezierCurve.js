Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreCurve = require('../core/Curve');

var _mathVector2 = require('../../math/Vector2');

var _coreShape = require('../core/Shape');

/**************************************************************
 *	Quadratic Bezier curve
 **************************************************************/

function THREE$QuadraticBezierCurve(v0, v1, v2) {
	this.isQuadraticBezierCurve = true;

	this.v0 = v0;
	this.v1 = v1;
	this.v2 = v2;
};

THREE$QuadraticBezierCurve.prototype = Object.create(_coreCurve.THREE$Curve.prototype);
THREE$QuadraticBezierCurve.prototype.constructor = THREE$QuadraticBezierCurve;

THREE$QuadraticBezierCurve.prototype.getPoint = function (t) {

	var vector = new _mathVector2.THREE$Vector2();

	vector.x = _coreShape.THREE$Shape.Utils.b2(t, this.v0.x, this.v1.x, this.v2.x);
	vector.y = _coreShape.THREE$Shape.Utils.b2(t, this.v0.y, this.v1.y, this.v2.y);

	return vector;
};

THREE$QuadraticBezierCurve.prototype.getTangent = function (t) {

	var vector = new _mathVector2.THREE$Vector2();

	vector.x = _coreCurve.THREE$Curve.Utils.tangentQuadraticBezier(t, this.v0.x, this.v1.x, this.v2.x);
	vector.y = _coreCurve.THREE$Curve.Utils.tangentQuadraticBezier(t, this.v0.y, this.v1.y, this.v2.y);

	// returns unit vector

	return vector.normalize();
};

exports.THREE$QuadraticBezierCurve = THREE$QuadraticBezierCurve;