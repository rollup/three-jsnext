import { Material } from './Material';
import { NoColors } from '../Three';
import { Color } from '../math/Color';

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

function PointCloudMaterial ( parameters ) {
	this.isPointCloudMaterial = true;

	Material.call( this );

	this.type = 'PointCloudMaterial';

	this.color = new Color( 0xffffff );

	this.map = null;

	this.size = 1;
	this.sizeAttenuation = true;

	this.vertexColors = NoColors;

	this.fog = true;

	this.setValues( parameters );

};

PointCloudMaterial.prototype = Object.create( Material.prototype );
PointCloudMaterial.prototype.constructor = PointCloudMaterial;

PointCloudMaterial.prototype.clone = function () {

	var material = new PointCloudMaterial();

	Material.prototype.clone.call( this, material );

	material.color.copy( this.color );

	material.map = this.map;

	material.size = this.size;
	material.sizeAttenuation = this.sizeAttenuation;

	material.vertexColors = this.vertexColors;

	material.fog = this.fog;

	return material;

};

// backwards compatibility

function ParticleBasicMaterial ( parameters ) {
	this.isParticleBasicMaterial = true;

	console.warn( 'THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.' );
	return new PointCloudMaterial( parameters );

};

function ParticleSystemMaterial ( parameters ) {
	this.isParticleSystemMaterial = true;

	console.warn( 'THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.' );
	return new PointCloudMaterial( parameters );

};


export { ParticleSystemMaterial, ParticleBasicMaterial, PointCloudMaterial };