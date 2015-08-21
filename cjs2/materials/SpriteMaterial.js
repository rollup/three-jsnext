'use strict';

exports.THREE$SpriteMaterial = THREE$SpriteMaterial;

var Material = require('./Material');
var Color = require('../math/Color');

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *	uvOffset: new THREE.Vector2(),
 *	uvScale: new THREE.Vector2(),
 *
 *  fog: <bool>
 * }
 */

function THREE$SpriteMaterial ( parameters ) {
	this.isSpriteMaterial = true;

	Material.THREE$Material.call( this );

	this.type = 'SpriteMaterial';

	this.color = new Color.THREE$Color( 0xffffff );
	this.map = null;

	this.rotation = 0;

	this.fog = false;

	// set parameters

	this.setValues( parameters );

};

THREE$SpriteMaterial.prototype = Object.create( Material.THREE$Material.prototype );
THREE$SpriteMaterial.prototype.constructor = THREE$SpriteMaterial;

THREE$SpriteMaterial.prototype.copy = function ( source ) {

	Material.THREE$Material.prototype.copy.call( this, source );

	this.color.copy( source.color );
	this.map = source.map;

	this.rotation = source.rotation;

	this.fog = source.fog;

	return this;

};