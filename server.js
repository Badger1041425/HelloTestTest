'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 8000
});

// Add the route

server.route({
    method:'GET',
    path: '/user',
    handler: function(request,h) {

        var x = request.query;

        return x;
    }
})

// Start the server
const start = async function () {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};
start();