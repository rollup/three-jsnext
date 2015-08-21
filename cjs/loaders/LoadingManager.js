Object.defineProperty(exports, "__esModule", {
	value: true
});
var THREE$DefaultLoadingManager;

/**
 * @author mrdoob / http://mrdoob.com/
 */

function THREE$LoadingManager(onLoad, onProgress, onError) {
	this.isLoadingManager = true;

	var scope = this;

	var isLoading = false,
	    itemsLoaded = 0,
	    itemsTotal = 0;

	this.onLoad = onLoad;
	this.onProgress = onProgress;
	this.onError = onError;

	this.itemStart = function (url) {

		itemsTotal++;

		if (isLoading === false) {

			if (scope.onStart !== undefined) {

				scope.onStart(url, itemsLoaded, itemsTotal);
			}
		}

		isLoading = true;
	};

	this.itemEnd = function (url) {

		itemsLoaded++;

		if (scope.onProgress !== undefined) {

			scope.onProgress(url, itemsLoaded, itemsTotal);
		}

		if (itemsLoaded === itemsTotal) {

			isLoading = false;

			if (scope.onLoad !== undefined) {

				scope.onLoad();
			}
		}
	};
};

exports.THREE$DefaultLoadingManager = THREE$DefaultLoadingManager = new THREE$LoadingManager();

exports.THREE$DefaultLoadingManager = THREE$DefaultLoadingManager;
exports.THREE$LoadingManager = THREE$LoadingManager;