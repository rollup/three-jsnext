import { Vector3 } from '../../math/Vector3';
import { Object3D } from '../../core/Object3D';
import { Mesh } from '../../objects/Mesh';
import { MeshBasicMaterial } from '../../materials/MeshBasicMaterial';
import { CylinderGeometry } from '../geometries/CylinderGeometry';

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
*/

function SpotLightHelper ( light ) {
	this.isSpotLightHelper = true;

	Object3D.call( this );

	this.light = light;
	this.light.updateMatrixWorld();

	this.matrix = light.matrixWorld;
	this.matrixAutoUpdate = false;

	var geometry = new CylinderGeometry( 0, 1, 1, 8, 1, true );

	geometry.translate( 0, - 0.5, 0 );
	geometry.rotateX( - Math.PI / 2 );

	var material = new MeshBasicMaterial( { wireframe: true, fog: false } );

	this.cone = new Mesh( geometry, material );
	this.add( this.cone );

	this.update();

};

SpotLightHelper.prototype = Object.create( Object3D.prototype );
SpotLightHelper.prototype.constructor = SpotLightHelper;

SpotLightHelper.prototype.dispose = function () {

	this.cone.geometry.dispose();
	this.cone.material.dispose();

};

SpotLightHelper.prototype.update = function () {

	var vector = new Vector3();
	var vector2 = new Vector3();

	return function () {

		var coneLength = this.light.distance ? this.light.distance : 10000;
		var coneWidth = coneLength * Math.tan( this.light.angle );

		this.cone.scale.set( coneWidth, coneWidth, coneLength );

		vector.setFromMatrixPosition( this.light.matrixWorld );
		vector2.setFromMatrixPosition( this.light.target.matrixWorld );

		this.cone.lookAt( vector2.sub( vector ) );

		this.cone.material.color.copy( this.light.color ).multiplyScalar( this.light.intensity );

	};

}();


export { SpotLightHelper };