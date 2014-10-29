var App   = require('./app');
var React = require('react');
React.render(<App firstSlide={window.location.pathname.split('/')[1] || 'title'} />, document.getElementById('app'));