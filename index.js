var React = require('react');
var Hapi = require('hapi');

// Make it possible to require .jsx files
require('node-jsx').install({extension: '.jsx'});

// Allow reading .txt files
require.extensions['.txt'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};

var server = Hapi.createServer('localhost', 8000);

server.views({
  engines: { html: require('handlebars') },
  path: __dirname + '/server'
});

server.route({
  method: 'GET',
  path: '/assets/{param*}',
  handler: {
    directory: {
      path: './assets',
      listing: false,
      index: false
    }
  }
});

var tidyOpts = {
  doctype: 'html5',
  hideComments: false, //  multi word options can use a hyphen or "camel case"
  indent: true
};

server.route({method: 'GET', path: '/{page?}', handler: function(request, reply) {
  try {
    var ReactApp = React.createFactory(require('./presentation/app.jsx'));
    var html     = React.renderToString(ReactApp({firstSlide: request.params.page || 'title'}));
    require('htmltidy').tidy(html, tidyOpts, function(err, html) {
      reply.view('index', {
        renderedApp: err ? '' : html
      });
    });
  } catch (e) {
    reply.view('index', {renderedApp: ''});
  }
}});

server.start(function () {
  console.log('Server started at: ' + server.info.uri);
});