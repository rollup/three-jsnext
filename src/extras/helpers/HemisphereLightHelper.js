import { THREE$Vector3 } from '../../math/Vector3';
import { THREE$Object3D } from '../../core/Object3D';
import { THREE$Mesh } from '../../objects/Mesh';
import { THREE$FaceColors } from '../../Three';
import { THREE$MeshBasicMaterial } from '../../materials/MeshBasicMaterial';
import { THREE$SphereGeometry } from '../geometries/SphereGeometry';
import { THREE$Color } from '../../math/Color';

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$HemisphereLightHelper ( light, sphereSize ) {
	this.isHemisphereLightHelper = true;

	THREE$Object3D.call( this );

	this.light = light;
	this.light.updateMatrixWorld();

	this.matrix = light.matrixWorld;
	this.matrixAutoUpdate = false;

	this.colors = [ new THREE$Color(), new THREE$Color() ];

	var geometry = new THREE$SphereGeometry( sphereSize, 4, 2 );
	geometry.rotateX( - Math.PI / 2 );

	for ( var i = 0, il = 8; i < il; i ++ ) {

		geometry.faces[ i ].color = this.colors[ i < 4 ? 0 : 1 ];

	}

	var material = new THREE$MeshBasicMaterial( { vertexColors: THREE$FaceColors, wireframe: true } );

	this.lightSphere = new THREE$Mesh( geometry, material );
	this.add( this.lightSphere );

	this.update();

};

THREE$HemisphereLightHelper.prototype = Object.create( THREE$Object3D.prototype );
THREE$HemisphereLightHelper.prototype.constructor = THREE$HemisphereLightHelper;

THREE$HemisphereLightHelper.prototype.dispose = function () {

	this.lightSphere.geometry.dispose();
	this.lightSphere.material.dispose();

};

THREE$HemisphereLightHelper.prototype.update = function () {

	var vector = new THREE$Vector3();

	return function () {

		this.colors[ 0 ].copy( this.light.color ).multiplyScalar( this.light.intensity );
		this.colors[ 1 ].copy( this.light.groundColor ).multiplyScalar( this.light.intensity );

		this.lightSphere.lookAt( vector.setFromMatrixPosition( this.light.matrixWorld ).negate() );
		this.lightSphere.geometry.colorsNeedUpdate = true;

	}

}();


export { THREE$HemisphereLightHelper };