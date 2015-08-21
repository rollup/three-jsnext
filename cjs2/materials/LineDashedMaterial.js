'use strict';

exports.THREE$LineDashedMaterial = THREE$LineDashedMaterial;

var Material = require('./Material');
var Color = require('../math/Color');

/**
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
 *
 *  scale: <float>,
 *  dashSize: <float>,
 *  gapSize: <float>,
 *
 *  vertexColors: <bool>
 *
 *  fog: <bool>
 * }
 */

function THREE$LineDashedMaterial ( parameters ) {
	this.isLineDashedMaterial = true;

	Material.THREE$Material.call( this );

	this.type = 'LineDashedMaterial';

	this.color = new Color.THREE$Color( 0xffffff );

	this.linewidth = 1;

	this.scale = 1;
	this.dashSize = 3;
	this.gapSize = 1;

	this.vertexColors = false;

	this.fog = true;

	this.setValues( parameters );

};

THREE$LineDashedMaterial.prototype = Object.create( Material.THREE$Material.prototype );
THREE$LineDashedMaterial.prototype.constructor = THREE$LineDashedMaterial;

THREE$LineDashedMaterial.prototype.copy = function ( source ) {

	Material.THREE$Material.prototype.copy.call( this, source );

	this.color.copy( source.color );
	
	this.linewidth = source.linewidth;

	this.scale = source.scale;
	this.dashSize = source.dashSize;
	this.gapSize = source.gapSize;

	this.vertexColors = source.vertexColors;

	this.fog = source.fog;

	return this;

};