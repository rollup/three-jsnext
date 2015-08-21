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

THREE$PointCloudMaterial.prototype.copy = function ( source ) {

	THREE$Material.prototype.copy.call( this, source );

	this.color.copy( source.color );

	this.map = source.map;

	this.size = source.size;
	this.sizeAttenuation = source.sizeAttenuation;

	this.vertexColors = source.vertexColors;

	this.fog = source.fog;
	
	return this;

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