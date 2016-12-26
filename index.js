'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    }
});

server.connection({ port: 1400 });

server.register(Inert, () => {});

server.route([{
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }
},
{
  method: 'GET',
  path: '/.well-known/acme-challenge/{param}',
  handler:function(request, reply) {
     reply('test');
  }
}]);


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
