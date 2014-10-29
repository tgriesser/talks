var React = require('react');
var hljs = require('hljs');
var code  = require('../code/problem1.txt');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <h1>The Problem:</h1>
        <pre>
          <code dangerouslySetInnerHTML={{__html: hljs(code, 'javascript').value}} />
        </pre>
      </div>
    );
  }

});