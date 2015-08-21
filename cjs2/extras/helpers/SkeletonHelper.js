'use strict';

exports.THREE$SkeletonHelper = THREE$SkeletonHelper;

var Bone = require('../../objects/Bone');
var Matrix4 = require('../../math/Matrix4');
var LineSegments = require('../../objects/LineSegments');
var Three = require('../../Three');
var LineBasicMaterial = require('../../materials/LineBasicMaterial');
var Color = require('../../math/Color');
var Vector3 = require('../../math/Vector3');
var Geometry = require('../../core/Geometry');

/**
 * @author Sean Griffin / http://twitter.com/sgrif
 * @author Michael Guerrero / http://realitymeltdown.com
 * @author mrdoob / http://mrdoob.com/
 * @author ikerr / http://verold.com
 */

function THREE$SkeletonHelper ( object ) {
	this.isSkeletonHelper = true;

	this.bones = this.getBoneList( object );

	var geometry = new Geometry.THREE$Geometry();

	for ( var i = 0; i < this.bones.length; i ++ ) {

		var bone = this.bones[ i ];

		if ( (bone.parent && bone.parent.isBone) ) {

			geometry.vertices.push( new Vector3.THREE$Vector3() );
			geometry.vertices.push( new Vector3.THREE$Vector3() );
			geometry.colors.push( new Color.THREE$Color( 0, 0, 1 ) );
			geometry.colors.push( new Color.THREE$Color( 0, 1, 0 ) );

		}

	}

	geometry.dynamic = true;

	var material = new LineBasicMaterial.THREE$LineBasicMaterial( { vertexColors: Three.THREE$VertexColors, depthTest: false, depthWrite: false, transparent: true } );

	LineSegments.THREE$LineSegments.call( this, geometry, material );

	this.root = object;

	this.matrix = object.matrixWorld;
	this.matrixAutoUpdate = false;

	this.update();

};


THREE$SkeletonHelper.prototype = Object.create( LineSegments.THREE$LineSegments.prototype );
THREE$SkeletonHelper.prototype.constructor = THREE$SkeletonHelper;

THREE$SkeletonHelper.prototype.getBoneList = function( object ) {

	var boneList = [];

	if ( (object && object.isBone) ) {

		boneList.push( object );

	}

	for ( var i = 0; i < object.children.length; i ++ ) {

		boneList.push.apply( boneList, this.getBoneList( object.children[ i ] ) );

	}

	return boneList;

};

THREE$SkeletonHelper.prototype.update = function () {

	var geometry = this.geometry;

	var matrixWorldInv = new Matrix4.THREE$Matrix4().getInverse( this.root.matrixWorld );

	var boneMatrix = new Matrix4.THREE$Matrix4();

	var j = 0;

	for ( var i = 0; i < this.bones.length; i ++ ) {

		var bone = this.bones[ i ];

		if ( (bone.parent && bone.parent.isBone) ) {

			boneMatrix.multiplyMatrices( matrixWorldInv, bone.matrixWorld );
			geometry.vertices[ j ].setFromMatrixPosition( boneMatrix );

			boneMatrix.multiplyMatrices( matrixWorldInv, bone.parent.matrixWorld );
			geometry.vertices[ j + 1 ].setFromMatrixPosition( boneMatrix );

			j += 2;

		}

	}

	geometry.verticesNeedUpdate = true;

	geometry.computeBoundingSphere();

};