import { THREE$Material } from './Material';
import { THREE$NoColors } from '../Three';
import { THREE$Color } from '../math/Color';

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  size: <float>,
 *  sizeAttenuation: <bool>,
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  vertexColors: <bool>,
 *
 *  fog: <bool>
 * }
 */

function THREE$PointCloudMaterial ( parameters ) {
	this.isPointCloudMaterial = true;

	THREE$Material.call( this );

	this.type = 'PointCloudMaterial';

	this.color = new THREE$Color( 0xffffff );

	this.map = null;

	this.size = 1;
	this.sizeAttenuation = true;

	this.vertexColors = THREE$NoColors;

	this.fog = true;

	this.setValues( parameters );

};

THREE$PointCloudMaterial.prototype = Object.create( THREE$Material.prototype );
THREE$PointCloudMaterial.prototype.constructor = THREE$PointCloudMaterial;

THREE$PointCloudMaterial.prototype.clone = function () {

	var material = new THREE$PointCloudMaterial();

	THREE$Material.prototype.clone.call( this, material );

	material.color.copy( this.color );

	material.map = this.map;

	material.size = this.size;
	material.sizeAttenuation = this.sizeAttenuation;

	material.vertexColors = this.vertexColors;

	material.fog = this.fog;

	return material;

};

// backwards compatibility

function THREE$ParticleBasicMaterial ( parameters ) {
	this.isParticleBasicMaterial = true;

	console.warn( 'THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.' );
	return new THREE$PointCloudMaterial( parameters );

};

function THREE$ParticleSystemMaterial ( parameters ) {
	this.isParticleSystemMaterial = true;

	console.warn( 'THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.' );
	return new THREE$PointCloudMaterial( parameters );

};


export { THREE$ParticleSystemMaterial, THREE$ParticleBasicMaterial, THREE$PointCloudMaterial };