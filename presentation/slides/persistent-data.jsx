var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <h3>Persistent Data Structures</h3>
        <ul>
          <li>Persistence: Not like database persistence</li>
          <li>Structural sharing between nodes</li>
        </ul>
      </div>
    );
  }

});