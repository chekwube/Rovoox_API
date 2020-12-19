#!/usr/bin/env node

var app = require('../server');
var path = require('path');
var fs = require('fs');
var http = require('http');
var https = require('https')

var dbConfiguration = require('./config/db');
var port = process.env.PORT || '5000';
var serverType = process.env.servertype;
app.set('port', port);
var server = {};

/**
 * Create Unified server based on the server type environment
 * choose between http and https server.
 */

if (serverType === 'https') {
    let certOptions = {
        key: fs.readFileSync(path.resolve('bin/certs/server.key')),
        cert: fs.readFileSync(path.resolve('bin/certs/server.crt'))
    }
    server = https.createServer(certOptions, app)
} else {
    server = http.createServer(app);
}

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port);

/**
 * Database configuration
 */
dbConfiguration();