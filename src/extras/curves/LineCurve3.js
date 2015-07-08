import { THREE } from '../../Three';
import { THREE$Vector3 } from '../../math/Vector3';
import { THREE$Curve } from '../core/Curve';

var THREE$LineCurve3;

/**************************************************************
 *	Line3D
 **************************************************************/

THREE$LineCurve3 = THREE$Curve.create(

	function ( v1, v2 ) {

		this.v1 = v1;
		this.v2 = v2;

	},

	function ( t ) {

		var vector = new THREE$Vector3();

		vector.subVectors( this.v2, this.v1 ); // diff
		vector.multiplyScalar( t );
		vector.add( this.v1 );

		return vector;

	}

);


export { THREE$LineCurve3 };