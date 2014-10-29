module.exports = function(firstSlide) {

  var Immutable = require('immutable');

  var data = Immutable.fromJS({

    currentSlide: firstSlide,

    focused: false

  });

  if (typeof window !== 'undefined') {

    window.Immutable = Immutable;
    window.data = data;
  
  }

  return data;

};
