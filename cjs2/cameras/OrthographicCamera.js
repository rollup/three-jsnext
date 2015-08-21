'use strict';

exports.THREE$OrthographicCamera = THREE$OrthographicCamera;

var Object3D = require('../core/Object3D');
var Camera = require('./Camera');

/**
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$OrthographicCamera ( left, right, top, bottom, near, far ) {
	this.isOrthographicCamera = true;

	Camera.THREE$Camera.call( this );

	this.type = 'OrthographicCamera';

	this.zoom = 1;

	this.left = left;
	this.right = right;
	this.top = top;
	this.bottom = bottom;

	this.near = ( near !== undefined ) ? near : 0.1;
	this.far = ( far !== undefined ) ? far : 2000;

	this.updateProjectionMatrix();

};

THREE$OrthographicCamera.prototype = Object.create( Camera.THREE$Camera.prototype );
THREE$OrthographicCamera.prototype.constructor = THREE$OrthographicCamera;

THREE$OrthographicCamera.prototype.updateProjectionMatrix = function () {

	var dx = ( this.right - this.left ) / ( 2 * this.zoom );
	var dy = ( this.top - this.bottom ) / ( 2 * this.zoom );
	var cx = ( this.right + this.left ) / 2;
	var cy = ( this.top + this.bottom ) / 2;

	this.projectionMatrix.makeOrthographic( cx - dx, cx + dx, cy + dy, cy - dy, this.near, this.far );

};

THREE$OrthographicCamera.prototype.copy = function ( source ) {
	
	Camera.THREE$Camera.prototype.copy.call( this, source );
	
	this.left = source.left;
	this.right = source.right;
	this.top = source.top;
	this.bottom = source.bottom;
	this.near = source.near;
	this.far = source.far;
	
	this.zoom = source.zoom;
	
	return this;
		
};

THREE$OrthographicCamera.prototype.toJSON = function ( meta ) {

	var data = Object3D.THREE$Object3D.prototype.toJSON.call( this, meta );

	data.object.zoom = this.zoom;
	data.object.left = this.left;
	data.object.right = this.right;
	data.object.top = this.top;
	data.object.bottom = this.bottom;
	data.object.near = this.near;
	data.object.far = this.far;

	return data;

};