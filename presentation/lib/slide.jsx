var React = require('react');

var Slide = React.createClass({

  render: function() {
    return (
      <section className="slide">
        {this.props.children}
      </section>
    );
  }

});

module.exports = Slide;