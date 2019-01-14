'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 8000
});

server.route({
    method:'GET',
    path: '/user/{user}',
    handler: function(request,h) {

        var x = request.params.user.split("&");

        var nameInput = x[0].replace("name=","");
        var ageInput = x[1].replace("age=","");
        var emailInput = x[2].replace("email=","");

        var data = {
            name: nameInput,
            age: ageInput,
            email: emailInput
        }

        return data;
    }
});

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