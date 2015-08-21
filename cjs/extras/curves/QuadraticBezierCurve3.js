Object.defineProperty(exports, '__esModule', {
	value: true
});

var _coreShape = require('../core/Shape');

var _mathVector3 = require('../../math/Vector3');

var _coreCurve = require('../core/Curve');

var THREE$QuadraticBezierCurve3;

/**************************************************************
 *	Quadratic Bezier 3D curve
 **************************************************************/

exports.THREE$QuadraticBezierCurve3 = THREE$QuadraticBezierCurve3 = _coreCurve.THREE$Curve.create(function (v0, v1, v2) {

	this.v0 = v0;
	this.v1 = v1;
	this.v2 = v2;
}, function (t) {

	var vector = new _mathVector3.THREE$Vector3();

	vector.x = _coreShape.THREE$Shape.Utils.b2(t, this.v0.x, this.v1.x, this.v2.x);
	vector.y = _coreShape.THREE$Shape.Utils.b2(t, this.v0.y, this.v1.y, this.v2.y);
	vector.z = _coreShape.THREE$Shape.Utils.b2(t, this.v0.z, this.v1.z, this.v2.z);

	return vector;
});

exports.THREE$QuadraticBezierCurve3 = THREE$QuadraticBezierCurve3;