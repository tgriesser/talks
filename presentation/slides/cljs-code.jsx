var React = require('react');
var code  = require('../code/cljs.txt');
var hljs = require('hljs');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <pre>
          <code dangerouslySetInnerHTML={{__html: hljs(code, 'lisp').value}} />
        </pre>
      </div>
    );
  }  

});