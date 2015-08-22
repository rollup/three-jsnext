var DefaultLoadingManager;

/**
 * @author mrdoob / http://mrdoob.com/
 */

function LoadingManager ( onLoad, onProgress, onError ) {
	this.isLoadingManager = true;

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

DefaultLoadingManager = new LoadingManager();


export { DefaultLoadingManager, LoadingManager };