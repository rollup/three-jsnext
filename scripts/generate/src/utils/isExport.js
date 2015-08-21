export default function isExport ( keypath ) {
	return keypath && /^THREE\.\w+$/.test( keypath );
}
