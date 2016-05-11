module.exports = function getKeypath ( node ) {
	if ( node.type !== 'MemberExpression' || node.computed ) return null;

	let keypath = node.property.name;

	node = node.object;
	while ( node.type === 'MemberExpression' ) {
		if ( node.computed ) return null;
		keypath = `${node.property.name}.${keypath}`;

		node = node.object;
	}

	if ( node.type !== 'Identifier' ) return null;
	return `${node.name}.${keypath}`;
}
