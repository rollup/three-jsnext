Object.defineProperty(exports, '__esModule', {
	value: true
});

var _camerasOrthographicCamera = require('../cameras/OrthographicCamera');

var _camerasPerspectiveCamera = require('../cameras/PerspectiveCamera');

var _mathRay = require('../math/Ray');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author bhouston / http://exocortex.com/
 * @author stephomi / http://stephaneginier.com/
 */

(function (THREE) {

	function THREE$Raycaster(origin, direction, near, far) {
		this.isRaycaster = true;

		this.ray = new _mathRay.THREE$Ray(origin, direction);
		// direction is assumed to be normalized (for accurate distance calculations)

		this.near = near || 0;
		this.far = far || Infinity;

		this.params = {
			Sprite: {},
			Mesh: {},
			PointCloud: { threshold: 1 },
			LOD: {},
			Line: {}
		};
	};

	var descSort = function (a, b) {

		return a.distance - b.distance;
	};

	var intersectObject = function (object, raycaster, intersects, recursive) {

		if (object.visible === false) return;

		object.raycast(raycaster, intersects);

		if (recursive === true) {

			var children = object.children;

			for (var i = 0, l = children.length; i < l; i++) {

				intersectObject(children[i], raycaster, intersects, true);
			}
		}
	};

	//

	THREE$Raycaster.prototype = {

		constructor: THREE$Raycaster,

		linePrecision: 1,

		set: function (origin, direction) {

			// direction is assumed to be normalized (for accurate distance calculations)

			this.ray.set(origin, direction);
		},

		setFromCamera: function (coords, camera) {

			if (camera && camera.isPerspectiveCamera) {

				this.ray.origin.setFromMatrixPosition(camera.matrixWorld);
				this.ray.direction.set(coords.x, coords.y, 0.5).unproject(camera).sub(this.ray.origin).normalize();
			} else if (camera && camera.isOrthographicCamera) {

				this.ray.origin.set(coords.x, coords.y, -1).unproject(camera);
				this.ray.direction.set(0, 0, -1).transformDirection(camera.matrixWorld);
			} else {

				console.error('THREE.Raycaster: Unsupported camera type.');
			}
		},

		intersectObject: function (object, recursive) {

			var intersects = [];

			intersectObject(object, this, intersects, recursive);

			intersects.sort(descSort);

			return intersects;
		},

		intersectObjects: function (objects, recursive) {

			var intersects = [];

			if (Array.isArray(objects) === false) {

				console.warn('THREE.Raycaster.intersectObjects: objects is not an Array.');
				return intersects;
			}

			for (var i = 0, l = objects.length; i < l; i++) {

				intersectObject(objects[i], this, intersects, recursive);
			}

			intersects.sort(descSort);

			return intersects;
		}

	};
})(THREE);

exports.THREE$Raycaster = THREE$Raycaster;