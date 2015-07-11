import { THREE$WebGLRenderTarget } from './WebGLRenderTarget';

/**
 * @author alteredq / http://alteredqualia.com
 */

function THREE$WebGLRenderTargetCube ( width, height, options ) {
	this.isWebGLRenderTargetCube = true;

	THREE$WebGLRenderTarget.call( this, width, height, options );

	this.activeCubeFace = 0; // PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5

};

THREE$WebGLRenderTargetCube.prototype = Object.create( THREE$WebGLRenderTarget.prototype );
THREE$WebGLRenderTargetCube.prototype.constructor = THREE$WebGLRenderTargetCube;


export { THREE$WebGLRenderTargetCube };