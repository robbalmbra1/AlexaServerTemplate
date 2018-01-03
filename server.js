'use strict';

var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
	httpsEnabled: false,
        verify: true,
        debug: false,
	port: process.env.PORT || 80
} );

server.start();
