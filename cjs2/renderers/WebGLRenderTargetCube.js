'use strict';

exports.THREE$WebGLRenderTargetCube = THREE$WebGLRenderTargetCube;

var WebGLRenderTarget = require('./WebGLRenderTarget');

/**
 * @author alteredq / http://alteredqualia.com
 */

function THREE$WebGLRenderTargetCube ( width, height, options ) {
	this.isWebGLRenderTargetCube = true;

	WebGLRenderTarget.THREE$WebGLRenderTarget.call( this, width, height, options );

	this.activeCubeFace = 0; // PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5

};

THREE$WebGLRenderTargetCube.prototype = Object.create( WebGLRenderTarget.THREE$WebGLRenderTarget.prototype );
THREE$WebGLRenderTargetCube.prototype.constructor = THREE$WebGLRenderTargetCube;