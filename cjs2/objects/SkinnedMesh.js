'use strict';

exports.THREE$SkinnedMesh = THREE$SkinnedMesh;

var Mesh = require('./Mesh');
var Geometry = require('../core/Geometry');
var Skeleton = require('./Skeleton');
var Bone = require('./Bone');
var Matrix4 = require('../math/Matrix4');

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author ikerr / http://verold.com
 */

function THREE$SkinnedMesh ( geometry, material, useVertexTexture ) {
	this.isSkinnedMesh = true;

	Mesh.THREE$Mesh.call( this, geometry, material );

	this.type = 'SkinnedMesh';

	this.bindMode = "attached";
	this.bindMatrix = new Matrix4.THREE$Matrix4();
	this.bindMatrixInverse = new Matrix4.THREE$Matrix4();

	// init bones

	// TODO: remove bone creation as there is no reason (other than
	// convenience) for THREE.SkinnedMesh to do this.

	var bones = [];

	if ( this.geometry && this.geometry.bones !== undefined ) {

		var bone, gbone;

		for ( var b = 0, bl = this.geometry.bones.length; b < bl; ++ b ) {

			gbone = this.geometry.bones[ b ];

			bone = new Bone.THREE$Bone( this );
			bones.push( bone );

			bone.name = gbone.name;
			bone.position.fromArray( gbone.pos );
			bone.quaternion.fromArray( gbone.rotq );
			if ( gbone.scl !== undefined ) bone.scale.fromArray( gbone.scl );

		}

		for ( var b = 0, bl = this.geometry.bones.length; b < bl; ++ b ) {

			gbone = this.geometry.bones[ b ];

			if ( gbone.parent !== - 1 ) {

				bones[ gbone.parent ].add( bones[ b ] );

			} else {

				this.add( bones[ b ] );

			}

		}

	}

	this.normalizeSkinWeights();

	this.updateMatrixWorld( true );
	this.bind( new Skeleton.THREE$Skeleton( bones, undefined, useVertexTexture ), this.matrixWorld );

};


THREE$SkinnedMesh.prototype = Object.create( Mesh.THREE$Mesh.prototype );
THREE$SkinnedMesh.prototype.constructor = THREE$SkinnedMesh;

THREE$SkinnedMesh.prototype.bind = function( skeleton, bindMatrix ) {

	this.skeleton = skeleton;

	if ( bindMatrix === undefined ) {

		this.updateMatrixWorld( true );
		
		this.skeleton.calculateInverses();

		bindMatrix = this.matrixWorld;

	}

	this.bindMatrix.copy( bindMatrix );
	this.bindMatrixInverse.getInverse( bindMatrix );

};

THREE$SkinnedMesh.prototype.pose = function () {

	this.skeleton.pose();

};

THREE$SkinnedMesh.prototype.normalizeSkinWeights = function () {

	if ( (this.geometry && this.geometry.isGeometry) ) {

		for ( var i = 0; i < this.geometry.skinIndices.length; i ++ ) {

			var sw = this.geometry.skinWeights[ i ];

			var scale = 1.0 / sw.lengthManhattan();

			if ( scale !== Infinity ) {

				sw.multiplyScalar( scale );

			} else {

				sw.set( 1 ); // this will be normalized by the shader anyway

			}

		}

	} else {

		// skinning weights assumed to be normalized for THREE.BufferGeometry

	}

};

THREE$SkinnedMesh.prototype.updateMatrixWorld = function( force ) {

	Mesh.THREE$Mesh.prototype.updateMatrixWorld.call( this, true );

	if ( this.bindMode === "attached" ) {

		this.bindMatrixInverse.getInverse( this.matrixWorld );

	} else if ( this.bindMode === "detached" ) {

		this.bindMatrixInverse.getInverse( this.bindMatrix );

	} else {

		console.warn( 'THREE.SkinnedMesh unrecognized bindMode: ' + this.bindMode );

	}

};

THREE$SkinnedMesh.prototype.clone = function() {

	return new this.constructor( this.geometry, this.material, this.useVertexTexture ).copy( this );

};