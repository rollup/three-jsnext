module.exports = function isExportPrototype ( keypath ) {
	return keypath && /^THREE\.\w+\.prototype$/.test( keypath );
};
