var React = require('react');

var SlideDeck = React.createClass({

  render: function() {
    return (
      <div className="slides">
        {this.props.children}
      </div>
    );
  }

});

module.exports = SlideDeck;