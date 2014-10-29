var React = require('react');
var hljs = require('hljs');
var code  = require('../code/problem2.txt');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Solution?</h1>
        <pre>
          <code dangerouslySetInnerHTML={{__html: hljs(code, 'javascript').value}} />
        </pre>
      </div>
    );
  }

});