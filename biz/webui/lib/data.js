var MAX_REQ_SIZE = 128 * 1024;
var MAX_RES_SIZE = 256 * 1024;
var TIMEOUT = 10000;
var MAX_LENGTH = 256;
var ID = Date.now() + '-' + 'whistle_';
var count = 0;
var ids = [];
var data = {};
var proxy, binded, timeout;

function disable() {
	proxy.removeListener('request', handleRequest);
	binded = false;
}

function uid() {
	return ID + ++count;
}

function get() {
	!binded && proxy.on('request', handleRequest);
	binded = true;
	clearTimeout(timeout);
	timeout = setTimeout(disable, TIMEOUT);
	
	return [];
}


function handleRequest(req) {
	
}

module.exports = function init(_proxy) {
	proxy = _proxy;
	module.exports = get;
};