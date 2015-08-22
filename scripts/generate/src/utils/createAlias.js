const blacklisted = {
	Math: true
};

function sanitize ( name ) {
	while ( blacklisted[ name ] ) {
		name = `_${name}`;
	}
	return name;
}

export default function createAlias ( keypath ) {
	return keypath === 'THREE.REVISION' ? // TODO handle this better...
		'"jsnext"' :
		sanitize( keypath.replace( 'THREE.', '' ) );
}
