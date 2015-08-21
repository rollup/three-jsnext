Object.defineProperty(exports, '__esModule', {
	value: true
});

var _mathMatrix4 = require('../math/Matrix4');

var _objectsMesh = require('../objects/Mesh');

var _coreObject3D = require('../core/Object3D');

var THREE$SceneUtils;

/**
 * @author alteredq / http://alteredqualia.com/
 */

exports.THREE$SceneUtils = THREE$SceneUtils = {

	createMultiMaterialObject: function (geometry, materials) {

		var group = new _coreObject3D.THREE$Object3D();

		for (var i = 0, l = materials.length; i < l; i++) {

			group.add(new _objectsMesh.THREE$Mesh(geometry, materials[i]));
		}

		return group;
	},

	detach: function (child, parent, scene) {

		child.applyMatrix(parent.matrixWorld);
		parent.remove(child);
		scene.add(child);
	},

	attach: function (child, scene, parent) {

		var matrixWorldInverse = new _mathMatrix4.THREE$Matrix4();
		matrixWorldInverse.getInverse(parent.matrixWorld);
		child.applyMatrix(matrixWorldInverse);

		scene.remove(child);
		parent.add(child);
	}

};

exports.THREE$SceneUtils = THREE$SceneUtils;