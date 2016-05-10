module.exports = function dedupe ( arr ) {
	let i = arr.length;
	while ( i-- ) {
		const index = arr.indexOf( arr[i] );

		if ( ~index && index < i ) {
			arr.splice( i, 1 );
		}
	}

	return arr;
};
