import { THREE } from '../Three';
import { THREE$Object3D } from '../core/Object3D';
import { THREE$Matrix4 } from '../math/Matrix4';
import { THREE$Vector3 } from '../math/Vector3';
import { THREE$Quaternion } from '../math/Quaternion';

/**
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 * @author WestLangley / http://github.com/WestLangley
*/

function THREE$Camera () {

	THREE$Object3D.call( this );

	this.type = 'Camera';

	this.matrixWorldInverse = new THREE$Matrix4();
	this.projectionMatrix = new THREE$Matrix4();

};

THREE$Camera.prototype = Object.create( THREE$Object3D.prototype );
THREE$Camera.prototype.constructor = THREE$Camera;

THREE$Camera.prototype.getWorldDirection = function () {

	var quaternion = new THREE$Quaternion();

	return function ( optionalTarget ) {

		var result = optionalTarget || new THREE$Vector3();

		this.getWorldQuaternion( quaternion );

		return result.set( 0, 0, - 1 ).applyQuaternion( quaternion );

	}

}();

THREE$Camera.prototype.lookAt = function () {

	// This routine does not support cameras with rotated and/or translated parent(s)

	var m1 = new THREE$Matrix4();

	return function ( vector ) {

		m1.lookAt( this.position, vector, this.up );

		this.quaternion.setFromRotationMatrix( m1 );

	};

}();

THREE$Camera.prototype.clone = function ( camera ) {

	if ( camera === undefined ) camera = new THREE$Camera();

	THREE$Object3D.prototype.clone.call( this, camera );

	camera.matrixWorldInverse.copy( this.matrixWorldInverse );
	camera.projectionMatrix.copy( this.projectionMatrix );

	return camera;
};


export { THREE$Camera };