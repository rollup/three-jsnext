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
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  linewidth: <float>,
 *  linecap: "round",
 *  linejoin: "round",
 *
 *  vertexColors: <bool>
 *
 *  fog: <bool>
 * }
 */

function THREE$LineBasicMaterial ( parameters ) {
	this.isLineBasicMaterial = true;

	THREE$Material.call( this );

	this.type = 'LineBasicMaterial';

	this.color = new THREE$Color( 0xffffff );

	this.linewidth = 1;
	this.linecap = 'round';
	this.linejoin = 'round';

	this.vertexColors = THREE$NoColors;

	this.fog = true;

	this.setValues( parameters );

};

THREE$LineBasicMaterial.prototype = Object.create( THREE$Material.prototype );
THREE$LineBasicMaterial.prototype.constructor = THREE$LineBasicMaterial;

THREE$LineBasicMaterial.prototype.clone = function () {

	var material = new THREE$LineBasicMaterial();

	THREE$Material.prototype.clone.call( this, material );

	material.color.copy( this.color );

	material.linewidth = this.linewidth;
	material.linecap = this.linecap;
	material.linejoin = this.linejoin;

	material.vertexColors = this.vertexColors;

	material.fog = this.fog;

	return material;

};


export { THREE$LineBasicMaterial };