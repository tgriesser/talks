var React = require('react');
var code  = require('../code/immutable4.txt');
var hljs = require('hljs');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <pre>
          <code dangerouslySetInnerHTML={{__html: hljs(code, 'javascript').value}} />
        </pre>
      </div>
    );
  }  

});