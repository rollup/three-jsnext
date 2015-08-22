import { Object3D } from '../../core/Object3D';
import { Vector3 } from '../../math/Vector3';
import { Quaternion } from '../../math/Quaternion';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function AudioListener () {
	this.isAudioListener = true;

	Object3D.call( this );

	this.type = 'AudioListener';

	this.context = new ( window.AudioContext || window.webkitAudioContext )();

};

AudioListener.prototype = Object.create( Object3D.prototype );
AudioListener.prototype.constructor = AudioListener;

AudioListener.prototype.updateMatrixWorld = ( function () {

	var position = new Vector3();
	var quaternion = new Quaternion();
	var scale = new Vector3();

	var orientation = new Vector3();

	return function ( force ) {

		Object3D.prototype.updateMatrixWorld.call( this, force );

		var listener = this.context.listener;
		var up = this.up;

		this.matrixWorld.decompose( position, quaternion, scale );

		orientation.set( 0, 0, -1 ).applyQuaternion( quaternion );

		listener.setPosition( position.x, position.y, position.z );
		listener.setOrientation( orientation.x, orientation.y, orientation.z, up.x, up.y, up.z );

	};

} )();


export { AudioListener };