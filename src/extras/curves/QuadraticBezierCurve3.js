import { Shape } from '../core/Shape';
import { Vector3 } from '../../math/Vector3';
import { Curve } from '../core/Curve';

var QuadraticBezierCurve3;

/**************************************************************
 *	Quadratic Bezier 3D curve
 **************************************************************/

QuadraticBezierCurve3 = Curve.create(

	function ( v0, v1, v2 ) {

		this.v0 = v0;
		this.v1 = v1;
		this.v2 = v2;

	},

	function ( t ) {

		var vector = new Vector3();

		vector.x = Shape.Utils.b2( t, this.v0.x, this.v1.x, this.v2.x );
		vector.y = Shape.Utils.b2( t, this.v0.y, this.v1.y, this.v2.y );
		vector.z = Shape.Utils.b2( t, this.v0.z, this.v1.z, this.v2.z );

		return vector;

	}

);


export { QuadraticBezierCurve3 };