import { Curve } from '../core/Curve';
import { Vector2 } from '../../math/Vector2';
import { Shape } from '../core/Shape';

/**************************************************************
 *	Quadratic Bezier curve
 **************************************************************/


function QuadraticBezierCurve ( v0, v1, v2 ) {
	this.isQuadraticBezierCurve = true;

	this.v0 = v0;
	this.v1 = v1;
	this.v2 = v2;

};

QuadraticBezierCurve.prototype = Object.create( Curve.prototype );
QuadraticBezierCurve.prototype.constructor = QuadraticBezierCurve;


QuadraticBezierCurve.prototype.getPoint = function ( t ) {

	var vector = new Vector2();

	vector.x = Shape.Utils.b2( t, this.v0.x, this.v1.x, this.v2.x );
	vector.y = Shape.Utils.b2( t, this.v0.y, this.v1.y, this.v2.y );

	return vector;

};


QuadraticBezierCurve.prototype.getTangent = function( t ) {

	var vector = new Vector2();

	vector.x = Curve.Utils.tangentQuadraticBezier( t, this.v0.x, this.v1.x, this.v2.x );
	vector.y = Curve.Utils.tangentQuadraticBezier( t, this.v0.y, this.v1.y, this.v2.y );

	// returns unit vector

	return vector.normalize();

};


export { QuadraticBezierCurve };