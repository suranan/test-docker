process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const http = require('http');

var mongoose = require('./server/config/mongoose');
var express = require('./server/config/express');

var db = mongoose();
var app = express();

const port = process.env.PORT || '3000';
app.set('port', port);



module.exports = app;

const server = http.createServer(app);
server.listen(port, () => console.log('Server is runing in ' + process.env.NODE_ENV + ' mode at http://localhost:' + port));