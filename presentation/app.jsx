var React     = require('react');
var SlideDeck = require('./lib/slidedeck');
var Slide     = require('./lib/slide');

var DEV       = true;
var SLIDES = [
  'title',
  'problem',
  'problem2',
  'clojure',
  'cljs-code',
  'structural-sharing',
  'mori',
  'mori-code',
  'immutable',
  'immutable-code',
  'immutable-code2',
  'immutable-code3',
  'immutable-code4',
  'immutable-code5',
  'react',
  'react-code',
  'react-code2',
  'react-code3',
  'morearty'
];

function log(msg) {
  if (DEV) console.log(msg);
}

var App = React.createClass({

  // Pass in the "immutable" data.
  getInitialState: function() {
    return require('./lib/data')(this.props.firstSlide);
  },

  // Add a few simple globals for demonstration purposes.
  componentDidMount: function() {
    var app = this;
    var data = this.state;
    window.addEventListener("keydown", function(e) {
      var focused = data.focused;
      switch (e.keyCode) {
        case 27: {
          if (focused) updateData(data.set('focused', false));
          break;
        }
        case 39: app.nextSlide(); break;
        case 37: app.previousSlide(); break;
      }
    }, false)
    window.updateData = function(newState) {
      app.replaceState(newState);
    }
  },

  componentWillUpdate: function(nextProps, nextState) {
    if (nextState.get('currentSlide') !== this.state.get('currentSlide')) {
      window.history.pushState(null, null, "/" + nextState.get('currentSlide'));
    }
  },

  slideIndex: function() {
    return SLIDES.indexOf(this.state.get('currentSlide'));
  },

  previousSlide: function() {
    log('previousSlide');
    var slideIndex = this.slideIndex();
    
    // If we're at the start, take no action.
    if (this.slideIndex() !== 0) this.goToSlide(slideIndex - 1)
  },

  nextSlide: function() {
    log('nextSlide');
    var slideIndex = this.slideIndex();

    // If there are more slides, advance to the next.
    if (this.slideIndex() !== SLIDES.length - 1) this.goToSlide(slideIndex + 1)
  },

  goToSlide: function(index) {
    updateData(this.state.set('currentSlide', SLIDES[index]))
  },

  getSlideOr404: function(slide) {
    var Content;
    try {
      Content = React.createFactory(require('./slides/' + slide + '.jsx'))
    } catch (e) {
      Content = React.createFactory(require('./slides/404.jsx'))
    }
    return Content;  
  },

  render: function() {
    return (
      <SlideDeck>
        <Slide>
          {this.getSlideOr404(this.state.get('currentSlide'))()}
        </Slide>
      </SlideDeck>
    );
  }
});

module.exports = App;