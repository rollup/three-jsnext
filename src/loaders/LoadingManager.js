import { THREE } from '../Three';

var THREE$DefaultLoadingManager;

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$LoadingManager ( onLoad, onProgress, onError ) {

	var scope = this;

	var loaded = 0, total = 0;

	this.onLoad = onLoad;
	this.onProgress = onProgress;
	this.onError = onError;

	this.itemStart = function ( url ) {

		total ++;

	};

	this.itemEnd = function ( url ) {

		loaded ++;

		if ( scope.onProgress !== undefined ) {

			scope.onProgress( url, loaded, total );

		}

		if ( loaded === total && scope.onLoad !== undefined ) {

			scope.onLoad();

		}

	};

};

THREE$DefaultLoadingManager = new THREE$LoadingManager();


export { THREE$DefaultLoadingManager, THREE$LoadingManager };