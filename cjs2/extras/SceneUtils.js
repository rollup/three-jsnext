'use strict';

var Matrix4 = require('../math/Matrix4');
var Mesh = require('../objects/Mesh');
var Object3D = require('../core/Object3D');

var THREE$SceneUtils;

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE$SceneUtils = {

	createMultiMaterialObject: function ( geometry, materials ) {

		var group = new Object3D.THREE$Object3D();

		for ( var i = 0, l = materials.length; i < l; i ++ ) {

			group.add( new Mesh.THREE$Mesh( geometry, materials[ i ] ) );

		}

		return group;

	},

	detach: function ( child, parent, scene ) {

		child.applyMatrix( parent.matrixWorld );
		parent.remove( child );
		scene.add( child );

	},

	attach: function ( child, scene, parent ) {

		var matrixWorldInverse = new Matrix4.THREE$Matrix4();
		matrixWorldInverse.getInverse( parent.matrixWorld );
		child.applyMatrix( matrixWorldInverse );

		scene.remove( child );
		parent.add( child );

	}

};

exports.THREE$SceneUtils = THREE$SceneUtils;