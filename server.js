var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname, {index: ['index-1.html']})).listen(8080);
