const blacklisted = {
	Math: true
};

function sanitize ( name ) {
	while ( blacklisted[ name ] ) {
		name = `_${name}`;
	}
	return name;
}

module.exports = function createAlias ( keypath ) {
	return keypath === 'THREE.REVISION' ? // TODO handle this better...
		'"jsnext"' :
		sanitize( keypath.replace( 'THREE.', '' ) );
};
