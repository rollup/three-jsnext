export default function createAlias ( keypath ) {
	return keypath.replace( '.', '$' );
}
