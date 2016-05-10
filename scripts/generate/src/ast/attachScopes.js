const walk = require( './walk' );
const Scope = require( './Scope' );

function getName ( x ) {
	return x.name;
}

module.exports = function attachScopes ( ast ) {
	let scope = new Scope();

	function addToScope ( declarator ) {
		var name = declarator.id.name;
		scope.add( name );
	}

	walk( ast, {
		enter ( node ) {
			let newScope;

			switch ( node.type ) {
				case 'FunctionExpression':
				case 'FunctionDeclaration':
				case 'ArrowFunctionExpression':
					let names = node.params.map( getName );

					if ( node.type === 'FunctionDeclaration' ) {
						addToScope( node );
					} else if ( node.type === 'FunctionExpression' && node.id ) {
						names.push( node.id.name );
					}

					newScope = new Scope({
						parent: scope,
						params: names // TODO rest params?
					});

					break;

				case 'CatchClause':
					newScope = new Scope({
						parent: scope,
						params: [ node.param.name ],
						block: true
					});

					break;

				case 'VariableDeclaration':
					node.declarations.forEach( addToScope );
					break;

				case 'ClassDeclaration':
					addToScope( node );
					break;
			}

			if ( newScope ) {
				Object.defineProperty( node, '_scope', { value: newScope });
				scope = newScope;
			}
		},
		leave ( node ) {
			if ( node._scope ) {
				scope = scope.parent;
			}
		}
	});

	Object.defineProperty( ast, '_scope', { value: scope });
	return scope;
};
