Object.defineProperty(exports, '__esModule', {
	value: true
});

var _mathMath = require('../math/Math');

var THREE$MeshFaceMaterial;

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$MultiMaterial(materials) {
	this.isMultiMaterial = true;

	this.uuid = _mathMath.THREE$Math.generateUUID();

	this.type = 'MultiMaterial';

	this.materials = materials instanceof Array ? materials : [];

	this.visible = true;
};

THREE$MultiMaterial.prototype = {

	constructor: THREE$MultiMaterial,

	toJSON: function () {

		var output = {
			metadata: {
				version: 4.2,
				type: 'material',
				generator: 'MaterialExporter'
			},
			uuid: this.uuid,
			type: this.type,
			materials: []
		};

		for (var i = 0, l = this.materials.length; i < l; i++) {

			output.materials.push(this.materials[i].toJSON());
		}

		output.visible = this.visible;

		return output;
	},

	clone: function () {

		var material = new this.constructor();

		for (var i = 0; i < this.materials.length; i++) {

			material.materials.push(this.materials[i].clone());
		}

		material.visible = this.visible;

		return material;
	}

};

// backwards compatibility

exports.THREE$MeshFaceMaterial = THREE$MeshFaceMaterial = THREE$MultiMaterial;

exports.THREE$MeshFaceMaterial = THREE$MeshFaceMaterial;
exports.THREE$MultiMaterial = THREE$MultiMaterial;