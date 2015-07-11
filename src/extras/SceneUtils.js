import { THREE$Matrix4 } from '../math/Matrix4';
import { THREE$Mesh } from '../objects/Mesh';
import { THREE$Object3D } from '../core/Object3D';

var THREE$SceneUtils;

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE$SceneUtils = {

	createMultiMaterialObject: function ( geometry, materials ) {

		var group = new THREE$Object3D();

		for ( var i = 0, l = materials.length; i < l; i ++ ) {

			group.add( new THREE$Mesh( geometry, materials[ i ] ) );

		}

		return group;

	},

	detach: function ( child, parent, scene ) {

		child.applyMatrix( parent.matrixWorld );
		parent.remove( child );
		scene.add( child );

	},

	attach: function ( child, scene, parent ) {

		var matrixWorldInverse = new THREE$Matrix4();
		matrixWorldInverse.getInverse( parent.matrixWorld );
		child.applyMatrix( matrixWorldInverse );

		scene.remove( child );
		parent.add( child );

	}

};


export { THREE$SceneUtils };