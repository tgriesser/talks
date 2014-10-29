var React = require('react');
var hljs  = require('hljs');
var code  = require('../code/react3.txt');

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