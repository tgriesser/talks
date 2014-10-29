/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./assets";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** ./presentation/index.jsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var App   = __webpack_require__(/*! ./app */ 1);
	var React = __webpack_require__(/*! react */ 7);
	React.render(React.createElement(App, {firstSlide: window.location.pathname.split('/')[1] || 'title'}), document.getElementById('app'));

/***/ },
/* 1 */
/*!******************************!*\
  !*** ./presentation/app.jsx ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var React     = __webpack_require__(/*! react */ 7);
	var SlideDeck = __webpack_require__(/*! ./lib/slidedeck */ 3);
	var Slide     = __webpack_require__(/*! ./lib/slide */ 4);
	
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
	
	var App = React.createClass({displayName: 'App',
	
	  // Pass in the "immutable" data.
	  getInitialState: function() {
	    return __webpack_require__(/*! ./lib/data */ 5)(this.props.firstSlide);
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
	      Content = React.createFactory(__webpack_require__(/*! ./slides */ 2)("./" + slide + '.jsx'))
	    } catch (e) {
	      Content = React.createFactory(__webpack_require__(/*! ./slides/404.jsx */ 6))
	    }
	    return Content;  
	  },
	
	  render: function() {
	    return (
	      React.createElement(SlideDeck, null, 
	        React.createElement(Slide, null, 
	          this.getSlideOr404(this.state.get('currentSlide'))()
	        )
	      )
	    );
	  }
	});
	
	module.exports = App;

/***/ },
/* 2 */
/*!*******************************************!*\
  !*** ./presentation/slides ^\.\/.*\.jsx$ ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./404.jsx": 6,
		"./cljs-code.jsx": 8,
		"./clojure.jsx": 9,
		"./immutable-code.jsx": 10,
		"./immutable-code2.jsx": 11,
		"./immutable-code3.jsx": 12,
		"./immutable-code4.jsx": 13,
		"./immutable-code5.jsx": 186,
		"./immutable.jsx": 14,
		"./morearty.jsx": 15,
		"./mori-code.jsx": 16,
		"./mori.jsx": 17,
		"./persistent-data.jsx": 18,
		"./problem.jsx": 19,
		"./problem2.jsx": 20,
		"./react-code.jsx": 21,
		"./react-code2.jsx": 22,
		"./react-code3.jsx": 23,
		"./react.jsx": 24,
		"./structural-sharing.jsx": 25,
		"./title.jsx": 26
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/*!****************************************!*\
  !*** ./presentation/lib/slidedeck.jsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	
	var SlideDeck = React.createClass({displayName: 'SlideDeck',
	
	  render: function() {
	    return (
	      React.createElement("div", {className: "slides"}, 
	        this.props.children
	      )
	    );
	  }
	
	});
	
	module.exports = SlideDeck;

/***/ },
/* 4 */
/*!************************************!*\
  !*** ./presentation/lib/slide.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	
	var Slide = React.createClass({displayName: 'Slide',
	
	  render: function() {
	    return (
	      React.createElement("section", {className: "slide"}, 
	        this.props.children
	      )
	    );
	  }
	
	});
	
	module.exports = Slide;

/***/ },
/* 5 */
/*!**********************************!*\
  !*** ./presentation/lib/data.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(firstSlide) {
	
	  var Immutable = __webpack_require__(/*! immutable */ 28);
	
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


/***/ },
/* 6 */
/*!*************************************!*\
  !*** ./presentation/slides/404.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("h3", null, "404 Page not found")
	    );
	  }
	
	});

/***/ },
/* 7 */
/*!**************************!*\
  !*** ./~/react/react.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/React */ 27);


/***/ },
/* 8 */
/*!*******************************************!*\
  !*** ./presentation/slides/cljs-code.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	var code  = __webpack_require__(/*! ../code/cljs.txt */ 55);
	var hljs = __webpack_require__(/*! hljs */ 29);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("pre", null, 
	          React.createElement("code", {dangerouslySetInnerHTML: {__html: hljs(code, 'lisp').value}})
	        )
	      )
	    );
	  }  
	
	});

/***/ },
/* 9 */
/*!*****************************************!*\
  !*** ./presentation/slides/clojure.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return React.createElement("img", {src: "/assets/img/clojure.png"})
	  }
	
	});

/***/ },
/* 10 */
/*!************************************************!*\
  !*** ./presentation/slides/immutable-code.jsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	var code  = __webpack_require__(/*! ../code/immutable.txt */ 54);
	var hljs = __webpack_require__(/*! hljs */ 29);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("pre", null, 
	          React.createElement("code", {dangerouslySetInnerHTML: {__html: hljs(code, 'javascript').value}})
	        )
	      )
	    );
	  }  
	
	});

/***/ },
/* 11 */
/*!*************************************************!*\
  !*** ./presentation/slides/immutable-code2.jsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	var code  = __webpack_require__(/*! ../code/immutable2.txt */ 56);
	var hljs = __webpack_require__(/*! hljs */ 29);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("pre", null, 
	          React.createElement("code", {dangerouslySetInnerHTML: {__html: hljs(code, 'javascript').value}})
	        )
	      )
	    );
	  }  
	
	});

/***/ },
/* 12 */
/*!*************************************************!*\
  !*** ./presentation/slides/immutable-code3.jsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	var code  = __webpack_require__(/*! ../code/immutable3.txt */ 57);
	var hljs = __webpack_require__(/*! hljs */ 29);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("pre", null, 
	          React.createElement("code", {dangerouslySetInnerHTML: {__html: hljs(code, 'javascript').value}})
	        )
	      )
	    );
	  }  
	
	});

/***/ },
/* 13 */
/*!*************************************************!*\
  !*** ./presentation/slides/immutable-code4.jsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	var code  = __webpack_require__(/*! ../code/immutable4.txt */ 58);
	var hljs = __webpack_require__(/*! hljs */ 29);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("pre", null, 
	          React.createElement("code", {dangerouslySetInnerHTML: {__html: hljs(code, 'javascript').value}})
	        )
	      )
	    );
	  }  
	
	});

/***/ },
/* 14 */
/*!*******************************************!*\
  !*** ./presentation/slides/immutable.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("h1", null, "Immutable.js"), 
	        React.createElement("div", null, 
	          React.createElement("img", {src: "/assets/img/immutable.png"})
	        )
	      )
	    );
	  }  
	
	});

/***/ },
/* 15 */
/*!******************************************!*\
  !*** ./presentation/slides/morearty.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("h1", null, "moreartyjs"), 
	        React.createElement("div", null, 
	          React.createElement("img", {src: "/assets/img/morearty.png"})
	        )
	      )
	    );
	  }  
	
	});

/***/ },
/* 16 */
/*!*******************************************!*\
  !*** ./presentation/slides/mori-code.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	var code  = __webpack_require__(/*! ../code/mori.txt */ 59);
	var hljs  = __webpack_require__(/*! hljs */ 29);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("pre", null, 
	          React.createElement("code", {dangerouslySetInnerHTML: {__html: hljs(code, 'javascript').value}})
	        )
	      )
	    );
	  }  
	
	});

/***/ },
/* 17 */
/*!**************************************!*\
  !*** ./presentation/slides/mori.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("h1", null, "Mori.js"), 
	        React.createElement("div", null, 
	          React.createElement("img", {src: "/assets/img/mori.png"})
	        )
	      )
	    );
	  }  
	
	});

/***/ },
/* 18 */
/*!*************************************************!*\
  !*** ./presentation/slides/persistent-data.jsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("h3", null, "Persistent Data Structures"), 
	        React.createElement("ul", null, 
	          React.createElement("li", null, "Persistence: Not like database persistence"), 
	          React.createElement("li", null, "Structural sharing between nodes")
	        )
	      )
	    );
	  }
	
	});

/***/ },
/* 19 */
/*!*****************************************!*\
  !*** ./presentation/slides/problem.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	var hljs = __webpack_require__(/*! hljs */ 29);
	var code  = __webpack_require__(/*! ../code/problem1.txt */ 60);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("h1", null, "The Problem:"), 
	        React.createElement("pre", null, 
	          React.createElement("code", {dangerouslySetInnerHTML: {__html: hljs(code, 'javascript').value}})
	        )
	      )
	    );
	  }
	
	});

/***/ },
/* 20 */
/*!******************************************!*\
  !*** ./presentation/slides/problem2.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	var hljs = __webpack_require__(/*! hljs */ 29);
	var code  = __webpack_require__(/*! ../code/problem2.txt */ 61);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("h1", null, "Solution?"), 
	        React.createElement("pre", null, 
	          React.createElement("code", {dangerouslySetInnerHTML: {__html: hljs(code, 'javascript').value}})
	        )
	      )
	    );
	  }
	
	});

/***/ },
/* 21 */
/*!********************************************!*\
  !*** ./presentation/slides/react-code.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	var hljs  = __webpack_require__(/*! hljs */ 29);
	var code  = __webpack_require__(/*! ../code/react.txt */ 64);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("pre", null, 
	          React.createElement("code", {dangerouslySetInnerHTML: {__html: hljs(code, 'javascript').value}})
	        )
	      )
	    );
	  }
	
	});

/***/ },
/* 22 */
/*!*********************************************!*\
  !*** ./presentation/slides/react-code2.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	var hljs  = __webpack_require__(/*! hljs */ 29);
	var code  = __webpack_require__(/*! ../code/react2.txt */ 63);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("pre", null, 
	          React.createElement("code", {dangerouslySetInnerHTML: {__html: hljs(code, 'javascript').value}})
	        )
	      )
	    );
	  }
	
	});

/***/ },
/* 23 */
/*!*********************************************!*\
  !*** ./presentation/slides/react-code3.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	var hljs  = __webpack_require__(/*! hljs */ 29);
	var code  = __webpack_require__(/*! ../code/react3.txt */ 62);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("pre", null, 
	          React.createElement("code", {dangerouslySetInnerHTML: {__html: hljs(code, 'javascript').value}})
	        )
	      )
	    );
	  }
	
	});

/***/ },
/* 24 */
/*!***************************************!*\
  !*** ./presentation/slides/react.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("h1", null, "React.js"), 
	        React.createElement("div", null, 
	          React.createElement("img", {src: "/assets/img/react.png"})
	        )
	      )
	    );
	  }  
	
	});

/***/ },
/* 25 */
/*!****************************************************!*\
  !*** ./presentation/slides/structural-sharing.jsx ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return React.createElement("img", {src: "/assets/img/structural-sharing.png"})
	  }
	
	});

/***/ },
/* 26 */
/*!***************************************!*\
  !*** ./presentation/slides/title.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	var Slide = __webpack_require__(/*! ../lib/slide */ 4);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", {style: {position: 'relative', top: "200px"}}, 
	        React.createElement("h1", null, "Immutablity in JavaScript")
	      )
	    );
	  }
	
	})

/***/ },
/* 27 */
/*!******************************!*\
  !*** ./~/react/lib/React.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */
	
	"use strict";
	
	var DOMPropertyOperations = __webpack_require__(/*! ./DOMPropertyOperations */ 30);
	var EventPluginUtils = __webpack_require__(/*! ./EventPluginUtils */ 31);
	var ReactChildren = __webpack_require__(/*! ./ReactChildren */ 32);
	var ReactComponent = __webpack_require__(/*! ./ReactComponent */ 33);
	var ReactCompositeComponent = __webpack_require__(/*! ./ReactCompositeComponent */ 34);
	var ReactContext = __webpack_require__(/*! ./ReactContext */ 35);
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 36);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactElementValidator = __webpack_require__(/*! ./ReactElementValidator */ 38);
	var ReactDOM = __webpack_require__(/*! ./ReactDOM */ 39);
	var ReactDOMComponent = __webpack_require__(/*! ./ReactDOMComponent */ 40);
	var ReactDefaultInjection = __webpack_require__(/*! ./ReactDefaultInjection */ 41);
	var ReactInstanceHandles = __webpack_require__(/*! ./ReactInstanceHandles */ 42);
	var ReactLegacyElement = __webpack_require__(/*! ./ReactLegacyElement */ 43);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 44);
	var ReactMultiChild = __webpack_require__(/*! ./ReactMultiChild */ 45);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 46);
	var ReactPropTypes = __webpack_require__(/*! ./ReactPropTypes */ 47);
	var ReactServerRendering = __webpack_require__(/*! ./ReactServerRendering */ 48);
	var ReactTextComponent = __webpack_require__(/*! ./ReactTextComponent */ 49);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var deprecated = __webpack_require__(/*! ./deprecated */ 51);
	var onlyChild = __webpack_require__(/*! ./onlyChild */ 52);
	
	ReactDefaultInjection.inject();
	
	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	
	if ("production" !== process.env.NODE_ENV) {
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	}
	
	// TODO: Drop legacy elements once classes no longer export these factories
	createElement = ReactLegacyElement.wrapCreateElement(
	  createElement
	);
	createFactory = ReactLegacyElement.wrapCreateFactory(
	  createFactory
	);
	
	var render = ReactPerf.measure('React', 'render', ReactMount.render);
	
	var React = {
	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    only: onlyChild
	  },
	  DOM: ReactDOM,
	  PropTypes: ReactPropTypes,
	  initializeTouchEvents: function(shouldUseTouch) {
	    EventPluginUtils.useTouchEvents = shouldUseTouch;
	  },
	  createClass: ReactCompositeComponent.createClass,
	  createElement: createElement,
	  createFactory: createFactory,
	  constructAndRenderComponent: ReactMount.constructAndRenderComponent,
	  constructAndRenderComponentByID: ReactMount.constructAndRenderComponentByID,
	  render: render,
	  renderToString: ReactServerRendering.renderToString,
	  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
	  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
	  isValidClass: ReactLegacyElement.isValidClass,
	  isValidElement: ReactElement.isValidElement,
	  withContext: ReactContext.withContext,
	
	  // Hook for JSX spread, don't use this for anything else.
	  __spread: assign,
	
	  // Deprecations (remove for 0.13)
	  renderComponent: deprecated(
	    'React',
	    'renderComponent',
	    'render',
	    this,
	    render
	  ),
	  renderComponentToString: deprecated(
	    'React',
	    'renderComponentToString',
	    'renderToString',
	    this,
	    ReactServerRendering.renderToString
	  ),
	  renderComponentToStaticMarkup: deprecated(
	    'React',
	    'renderComponentToStaticMarkup',
	    'renderToStaticMarkup',
	    this,
	    ReactServerRendering.renderToStaticMarkup
	  ),
	  isValidComponent: deprecated(
	    'React',
	    'isValidComponent',
	    'isValidElement',
	    this,
	    ReactElement.isValidElement
	  )
	};
	
	// Inject the runtime into a devtools global hook regardless of browser.
	// Allows for debugging when the hook is injected on the page.
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
	    Component: ReactComponent,
	    CurrentOwner: ReactCurrentOwner,
	    DOMComponent: ReactDOMComponent,
	    DOMPropertyOperations: DOMPropertyOperations,
	    InstanceHandles: ReactInstanceHandles,
	    Mount: ReactMount,
	    MultiChild: ReactMultiChild,
	    TextComponent: ReactTextComponent
	  });
	}
	
	if ("production" !== process.env.NODE_ENV) {
	  var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	  if (ExecutionEnvironment.canUseDOM && window.top === window.self) {
	
	    // If we're in Chrome, look for the devtools marker and provide a download
	    // link if not installed.
	    if (navigator.userAgent.indexOf('Chrome') > -1) {
	      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
	        console.debug(
	          'Download the React DevTools for a better development experience: ' +
	          'http://fb.me/react-devtools'
	        );
	      }
	    }
	
	    var expectedFeatures = [
	      // shims
	      Array.isArray,
	      Array.prototype.every,
	      Array.prototype.forEach,
	      Array.prototype.indexOf,
	      Array.prototype.map,
	      Date.now,
	      Function.prototype.bind,
	      Object.keys,
	      String.prototype.split,
	      String.prototype.trim,
	
	      // shams
	      Object.create,
	      Object.freeze
	    ];
	
	    for (var i = 0; i < expectedFeatures.length; i++) {
	      if (!expectedFeatures[i]) {
	        console.error(
	          'One or more ES5 shim/shams expected by React are not available: ' +
	          'http://fb.me/react-warning-polyfills'
	        );
	        break;
	      }
	    }
	  }
	}
	
	// Version exists only in the open-source version of React, not in Facebook's
	// internal version.
	React.version = '0.12.0';
	
	module.exports = React;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 28 */
/*!***************************************!*\
  !*** ./~/immutable/dist/immutable.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */
	function universalModule() {
	  var $Object = Object;
	
	function createClass(ctor, methods, staticMethods, superClass) {
	  var proto;
	  if (superClass) {
	    var superProto = superClass.prototype;
	    proto = $Object.create(superProto);
	  } else {
	    proto = ctor.prototype;
	  }
	  $Object.keys(methods).forEach(function (key) {
	    proto[key] = methods[key];
	  });
	  $Object.keys(staticMethods).forEach(function (key) {
	    ctor[key] = staticMethods[key];
	  });
	  proto.constructor = ctor;
	  ctor.prototype = proto;
	  return ctor;
	}
	
	function superCall(self, proto, name, args) {
	  return $Object.getPrototypeOf(proto)[name].apply(self, args);
	}
	
	function defaultSuperCall(self, proto, args) {
	  superCall(self, proto, 'constructor', args);
	}
	
	var $traceurRuntime = {};
	$traceurRuntime.createClass = createClass;
	$traceurRuntime.superCall = superCall;
	$traceurRuntime.defaultSuperCall = defaultSuperCall;
	"use strict";
	function is(first, second) {
	  if (first === second) {
	    return first !== 0 || second !== 0 || 1 / first === 1 / second;
	  }
	  if (first !== first) {
	    return second !== second;
	  }
	  if (first && typeof first.equals === 'function') {
	    return first.equals(second);
	  }
	  return false;
	}
	function invariant(condition, error) {
	  if (!condition)
	    throw new Error(error);
	}
	var DELETE = 'delete';
	var SHIFT = 5;
	var SIZE = 1 << SHIFT;
	var MASK = SIZE - 1;
	var NOT_SET = {};
	var CHANGE_LENGTH = {value: false};
	var DID_ALTER = {value: false};
	function MakeRef(ref) {
	  ref.value = false;
	  return ref;
	}
	function SetRef(ref) {
	  ref && (ref.value = true);
	}
	function OwnerID() {}
	function arrCopy(arr, offset) {
	  offset = offset || 0;
	  var len = Math.max(0, arr.length - offset);
	  var newArr = new Array(len);
	  for (var ii = 0; ii < len; ii++) {
	    newArr[ii] = arr[ii + offset];
	  }
	  return newArr;
	}
	function assertNotInfinite(size) {
	  invariant(size !== Infinity, 'Cannot perform this action with an infinite size.');
	}
	function ensureSize(iter) {
	  if (iter.size === undefined) {
	    iter.size = iter.__iterate(returnTrue);
	  }
	  return iter.size;
	}
	function wrapIndex(iter, index) {
	  return index >= 0 ? index : ensureSize(iter) + index;
	}
	function returnTrue() {
	  return true;
	}
	function isPlainObj(value) {
	  return value && value.constructor === Object;
	}
	function wholeSlice(begin, end, size) {
	  return (begin === 0 || (size !== undefined && begin <= -size)) && (end === undefined || (size !== undefined && end >= size));
	}
	function resolveBegin(begin, size) {
	  return resolveIndex(begin, size, 0);
	}
	function resolveEnd(end, size) {
	  return resolveIndex(end, size, size);
	}
	function resolveIndex(index, size, defaultIndex) {
	  return index === undefined ? defaultIndex : index < 0 ? Math.max(0, size + index) : size === undefined ? index : Math.min(size, index);
	}
	function hash(o) {
	  if (!o) {
	    return 0;
	  }
	  if (o === true) {
	    return 1;
	  }
	  var type = typeof o;
	  if (type === 'number') {
	    if ((o | 0) === o) {
	      return o & HASH_MAX_VAL;
	    }
	    o = '' + o;
	    type = 'string';
	  }
	  if (type === 'string') {
	    return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	  }
	  if (o.hashCode) {
	    return hash(typeof o.hashCode === 'function' ? o.hashCode() : o.hashCode);
	  }
	  return hashJSObj(o);
	}
	function cachedHashString(string) {
	  var hash = stringHashCache[string];
	  if (hash === undefined) {
	    hash = hashString(string);
	    if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	      STRING_HASH_CACHE_SIZE = 0;
	      stringHashCache = {};
	    }
	    STRING_HASH_CACHE_SIZE++;
	    stringHashCache[string] = hash;
	  }
	  return hash;
	}
	function hashString(string) {
	  var hash = 0;
	  for (var ii = 0; ii < string.length; ii++) {
	    hash = (31 * hash + string.charCodeAt(ii)) & HASH_MAX_VAL;
	  }
	  return hash;
	}
	function hashJSObj(obj) {
	  var hash = weakMap && weakMap.get(obj);
	  if (hash)
	    return hash;
	  hash = obj[UID_HASH_KEY];
	  if (hash)
	    return hash;
	  if (!canDefineProperty) {
	    hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	    if (hash)
	      return hash;
	    hash = getIENodeHash(obj);
	    if (hash)
	      return hash;
	  }
	  if (Object.isExtensible && !Object.isExtensible(obj)) {
	    throw new Error('Non-extensible objects are not allowed as keys.');
	  }
	  hash = ++objHashUID & HASH_MAX_VAL;
	  if (weakMap) {
	    weakMap.set(obj, hash);
	  } else if (canDefineProperty) {
	    Object.defineProperty(obj, UID_HASH_KEY, {
	      'enumerable': false,
	      'configurable': false,
	      'writable': false,
	      'value': hash
	    });
	  } else if (obj.propertyIsEnumerable && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	    obj.propertyIsEnumerable = function() {
	      return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	    };
	    obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	  } else if (obj.nodeType) {
	    obj[UID_HASH_KEY] = hash;
	  } else {
	    throw new Error('Unable to set a non-enumerable property on object.');
	  }
	  return hash;
	}
	var canDefineProperty = (function() {
	  try {
	    Object.defineProperty({}, 'x', {});
	    return true;
	  } catch (e) {
	    return false;
	  }
	}());
	function getIENodeHash(node) {
	  if (node && node.nodeType > 0) {
	    switch (node.nodeType) {
	      case 1:
	        return node.uniqueID;
	      case 9:
	        return node.documentElement && node.documentElement.uniqueID;
	    }
	  }
	}
	var weakMap = typeof WeakMap === 'function' && new WeakMap();
	var HASH_MAX_VAL = 0x7FFFFFFF;
	var objHashUID = 0;
	var UID_HASH_KEY = '__immutablehash__';
	if (typeof Symbol === 'function') {
	  UID_HASH_KEY = Symbol(UID_HASH_KEY);
	}
	var STRING_HASH_CACHE_MIN_STRLEN = 16;
	var STRING_HASH_CACHE_MAX_SIZE = 255;
	var STRING_HASH_CACHE_SIZE = 0;
	var stringHashCache = {};
	var ITERATE_KEYS = 0;
	var ITERATE_VALUES = 1;
	var ITERATE_ENTRIES = 2;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
	var Iterator = function Iterator(next) {
	  this.next = next;
	};
	($traceurRuntime.createClass)(Iterator, {toString: function() {
	    return '[Iterator]';
	  }}, {});
	Iterator.KEYS = ITERATE_KEYS;
	Iterator.VALUES = ITERATE_VALUES;
	Iterator.ENTRIES = ITERATE_ENTRIES;
	var IteratorPrototype = Iterator.prototype;
	IteratorPrototype.inspect = IteratorPrototype.toSource = function() {
	  return this.toString();
	};
	IteratorPrototype[ITERATOR_SYMBOL] = function() {
	  return this;
	};
	function iteratorValue(type, k, v, iteratorResult) {
	  var value = type === 0 ? k : type === 1 ? v : [k, v];
	  iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	    value: value,
	    done: false
	  });
	  return iteratorResult;
	}
	function iteratorDone() {
	  return {
	    value: undefined,
	    done: true
	  };
	}
	function hasIterator(maybeIterable) {
	  return !!_iteratorFn(maybeIterable);
	}
	function isIterator(maybeIterator) {
	  return maybeIterator && typeof maybeIterator.next === 'function';
	}
	function getIterator(iterable) {
	  var iteratorFn = _iteratorFn(iterable);
	  return iteratorFn && iteratorFn.call(iterable);
	}
	function _iteratorFn(iterable) {
	  var iteratorFn = iterable && ((REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) || iterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}
	var Iterable = function Iterable(value) {
	  return isIterable(value) ? value : Seq.apply(undefined, arguments);
	};
	var $Iterable = Iterable;
	($traceurRuntime.createClass)(Iterable, {
	  toArray: function() {
	    assertNotInfinite(this.size);
	    var array = new Array(this.size || 0);
	    this.valueSeq().__iterate((function(v, i) {
	      array[i] = v;
	    }));
	    return array;
	  },
	  toIndexedSeq: function() {
	    return new ToIndexedSequence(this);
	  },
	  toJS: function() {
	    return this.toSeq().map((function(value) {
	      return value && typeof value.toJS === 'function' ? value.toJS() : value;
	    })).__toJS();
	  },
	  toKeyedSeq: function() {
	    return new ToKeyedSequence(this, true);
	  },
	  toMap: function() {
	    assertNotInfinite(this.size);
	    return Map(this.toKeyedSeq());
	  },
	  toObject: function() {
	    assertNotInfinite(this.size);
	    var object = {};
	    this.__iterate((function(v, k) {
	      object[k] = v;
	    }));
	    return object;
	  },
	  toOrderedMap: function() {
	    assertNotInfinite(this.size);
	    return OrderedMap(this.toKeyedSeq());
	  },
	  toSet: function() {
	    assertNotInfinite(this.size);
	    return Set(this);
	  },
	  toSetSeq: function() {
	    return new ToSetSequence(this, true);
	  },
	  toSeq: function() {
	    return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
	  },
	  toStack: function() {
	    assertNotInfinite(this.size);
	    return Stack(this);
	  },
	  toList: function() {
	    assertNotInfinite(this.size);
	    return List(this);
	  },
	  toString: function() {
	    return '[Iterable]';
	  },
	  __toString: function(head, tail) {
	    if (this.size === 0) {
	      return head + tail;
	    }
	    return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	  },
	  concat: function() {
	    for (var values = [],
	        $__2 = 0; $__2 < arguments.length; $__2++)
	      values[$__2] = arguments[$__2];
	    return reify(this, concatFactory(this, values, true));
	  },
	  contains: function(searchValue) {
	    return this.some((function(value) {
	      return is(value, searchValue);
	    }));
	  },
	  entries: function() {
	    return this.__iterator(ITERATE_ENTRIES);
	  },
	  every: function(predicate, context) {
	    var returnValue = true;
	    this.__iterate((function(v, k, c) {
	      if (!predicate.call(context, v, k, c)) {
	        returnValue = false;
	        return false;
	      }
	    }));
	    return returnValue;
	  },
	  filter: function(predicate, context) {
	    return reify(this, filterFactory(this, predicate, context, true));
	  },
	  find: function(predicate, context, notSetValue) {
	    var foundValue = notSetValue;
	    this.__iterate((function(v, k, c) {
	      if (predicate.call(context, v, k, c)) {
	        foundValue = v;
	        return false;
	      }
	    }));
	    return foundValue;
	  },
	  forEach: function(sideEffect, context) {
	    return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	  },
	  join: function(separator) {
	    separator = separator !== undefined ? '' + separator : ',';
	    var joined = '';
	    var isFirst = true;
	    this.__iterate((function(v) {
	      isFirst ? (isFirst = false) : (joined += separator);
	      joined += v !== null && v !== undefined ? v : '';
	    }));
	    return joined;
	  },
	  keys: function() {
	    return this.__iterator(ITERATE_KEYS);
	  },
	  map: function(mapper, context) {
	    return reify(this, mapFactory(this, mapper, context));
	  },
	  reduce: function(reducer, initialReduction, context) {
	    var reduction;
	    var useFirst;
	    if (arguments.length < 2) {
	      useFirst = true;
	    } else {
	      reduction = initialReduction;
	    }
	    this.__iterate((function(v, k, c) {
	      if (useFirst) {
	        useFirst = false;
	        reduction = v;
	      } else {
	        reduction = reducer.call(context, reduction, v, k, c);
	      }
	    }));
	    return reduction;
	  },
	  reduceRight: function(reducer, initialReduction, context) {
	    var reversed = this.toKeyedSeq().reverse();
	    return reversed.reduce.apply(reversed, arguments);
	  },
	  reverse: function() {
	    return reify(this, reverseFactory(this, true));
	  },
	  slice: function(begin, end) {
	    if (wholeSlice(begin, end, this.size)) {
	      return this;
	    }
	    var resolvedBegin = resolveBegin(begin, this.size);
	    var resolvedEnd = resolveEnd(end, this.size);
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return this.toSeq().cacheResult().slice(begin, end);
	    }
	    var skipped = resolvedBegin === 0 ? this : this.skip(resolvedBegin);
	    return reify(this, resolvedEnd === undefined || resolvedEnd === this.size ? skipped : skipped.take(resolvedEnd - resolvedBegin));
	  },
	  some: function(predicate, context) {
	    return !this.every(not(predicate), context);
	  },
	  sort: function(comparator) {
	    return this.sortBy(valueMapper, comparator);
	  },
	  values: function() {
	    return this.__iterator(ITERATE_VALUES);
	  },
	  butLast: function() {
	    return this.slice(0, -1);
	  },
	  count: function(predicate, context) {
	    return ensureSize(predicate ? this.toSeq().filter(predicate, context) : this);
	  },
	  countBy: function(grouper, context) {
	    return countByFactory(this, grouper, context);
	  },
	  equals: function(other) {
	    if (this === other) {
	      return true;
	    }
	    if (!other || typeof other.equals !== 'function') {
	      return false;
	    }
	    if (this.size !== undefined && other.size !== undefined) {
	      if (this.size !== other.size) {
	        return false;
	      }
	      if (this.size === 0 && other.size === 0) {
	        return true;
	      }
	    }
	    if (this.__hash !== undefined && other.__hash !== undefined && this.__hash !== other.__hash) {
	      return false;
	    }
	    return this.__deepEquals(other);
	  },
	  __deepEquals: function(other) {
	    var entries = this.entries();
	    return typeof other.every === 'function' && other.every((function(v, k) {
	      var entry = entries.next().value;
	      return entry && is(entry[0], k) && is(entry[1], v);
	    })) && entries.next().done;
	  },
	  entrySeq: function() {
	    var iterable = this;
	    if (iterable._cache) {
	      return new ArraySeq(iterable._cache);
	    }
	    var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	    entriesSequence.fromEntrySeq = (function() {
	      return iterable.toSeq();
	    });
	    return entriesSequence;
	  },
	  filterNot: function(predicate, context) {
	    return this.filter(not(predicate), context);
	  },
	  findLast: function(predicate, context, notSetValue) {
	    return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	  },
	  first: function() {
	    return this.find(returnTrue);
	  },
	  flatMap: function(mapper, context) {
	    return reify(this, flatMapFactory(this, mapper, context));
	  },
	  flatten: function(depth) {
	    return reify(this, flattenFactory(this, depth, true));
	  },
	  fromEntrySeq: function() {
	    return new FromEntriesSequence(this);
	  },
	  get: function(searchKey, notSetValue) {
	    return this.find((function(_, key) {
	      return is(key, searchKey);
	    }), undefined, notSetValue);
	  },
	  getIn: function(searchKeyPath, notSetValue) {
	    var nested = this;
	    if (searchKeyPath) {
	      for (var ii = 0; ii < searchKeyPath.length; ii++) {
	        nested = nested && nested.get ? nested.get(searchKeyPath[ii], NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	    }
	    return nested;
	  },
	  groupBy: function(grouper, context) {
	    return groupByFactory(this, grouper, context);
	  },
	  has: function(searchKey) {
	    return this.get(searchKey, NOT_SET) !== NOT_SET;
	  },
	  isSubset: function(iter) {
	    iter = typeof iter.contains === 'function' ? iter : $Iterable(iter);
	    return this.every((function(value) {
	      return iter.contains(value);
	    }));
	  },
	  isSuperset: function(iter) {
	    return iter.isSubset(this);
	  },
	  keySeq: function() {
	    return this.toSeq().map(keyMapper).toIndexedSeq();
	  },
	  last: function() {
	    return this.toSeq().reverse().first();
	  },
	  max: function(comparator) {
	    return this.maxBy(valueMapper, comparator);
	  },
	  maxBy: function(mapper, comparator) {
	    var $__0 = this;
	    comparator = comparator || defaultComparator;
	    var maxEntry = this.entrySeq().reduce((function(max, next) {
	      return comparator(mapper(next[1], next[0], $__0), mapper(max[1], max[0], $__0)) > 0 ? next : max;
	    }));
	    return maxEntry && maxEntry[1];
	  },
	  min: function(comparator) {
	    return this.minBy(valueMapper, comparator);
	  },
	  minBy: function(mapper, comparator) {
	    var $__0 = this;
	    comparator = comparator || defaultComparator;
	    var minEntry = this.entrySeq().reduce((function(min, next) {
	      return comparator(mapper(next[1], next[0], $__0), mapper(min[1], min[0], $__0)) < 0 ? next : min;
	    }));
	    return minEntry && minEntry[1];
	  },
	  rest: function() {
	    return this.slice(1);
	  },
	  skip: function(amount) {
	    return reify(this, skipFactory(this, amount, true));
	  },
	  skipLast: function(amount) {
	    return reify(this, this.toSeq().reverse().skip(amount).reverse());
	  },
	  skipWhile: function(predicate, context) {
	    return reify(this, skipWhileFactory(this, predicate, context, true));
	  },
	  skipUntil: function(predicate, context) {
	    return this.skipWhile(not(predicate), context);
	  },
	  sortBy: function(mapper, comparator) {
	    var $__0 = this;
	    comparator = comparator || defaultComparator;
	    return reify(this, new ArraySeq(this.entrySeq().entrySeq().toArray().sort((function(a, b) {
	      return comparator(mapper(a[1][1], a[1][0], $__0), mapper(b[1][1], b[1][0], $__0)) || a[0] - b[0];
	    }))).fromEntrySeq().valueSeq().fromEntrySeq());
	  },
	  take: function(amount) {
	    return reify(this, takeFactory(this, amount));
	  },
	  takeLast: function(amount) {
	    return reify(this, this.toSeq().reverse().take(amount).reverse());
	  },
	  takeWhile: function(predicate, context) {
	    return reify(this, takeWhileFactory(this, predicate, context));
	  },
	  takeUntil: function(predicate, context) {
	    return this.takeWhile(not(predicate), context);
	  },
	  valueSeq: function() {
	    return this.toIndexedSeq();
	  },
	  hashCode: function() {
	    return this.__hash || (this.__hash = this.size === Infinity ? 0 : this.reduce((function(h, v, k) {
	      return (h + (hash(v) ^ (v === k ? 0 : hash(k)))) & HASH_MAX_VAL;
	    }), 0));
	  }
	}, {});
	var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	var IterablePrototype = Iterable.prototype;
	IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	IterablePrototype.toJSON = IterablePrototype.toJS;
	IterablePrototype.__toJS = IterablePrototype.toArray;
	IterablePrototype.__toStringMapper = quoteString;
	IterablePrototype.inspect = IterablePrototype.toSource = function() {
	  return this.toString();
	};
	IterablePrototype.chain = IterablePrototype.flatMap;
	(function() {
	  try {
	    Object.defineProperty(IterablePrototype, 'length', {get: function() {
	        if (!Iterable.noLengthWarning) {
	          var stack;
	          try {
	            throw new Error();
	          } catch (error) {
	            stack = error.stack;
	          }
	          if (stack.indexOf('_wrapObject') === -1) {
	            console && console.warn && console.warn('iterable.length has been deprecated, ' + 'use iterable.size or iterable.count(). ' + 'This warning will become a silent error in a future version. ' + stack);
	            return this.size;
	          }
	        }
	      }});
	  } catch (e) {}
	})();
	var KeyedIterable = function KeyedIterable(value) {
	  return isKeyed(value) ? value : KeyedSeq.apply(undefined, arguments);
	};
	($traceurRuntime.createClass)(KeyedIterable, {
	  flip: function() {
	    return reify(this, flipFactory(this));
	  },
	  findKey: function(predicate, context) {
	    var foundKey;
	    this.__iterate((function(v, k, c) {
	      if (predicate.call(context, v, k, c)) {
	        foundKey = k;
	        return false;
	      }
	    }));
	    return foundKey;
	  },
	  findLastKey: function(predicate, context) {
	    return this.toSeq().reverse().findKey(predicate, context);
	  },
	  keyOf: function(searchValue) {
	    return this.findKey((function(value) {
	      return is(value, searchValue);
	    }));
	  },
	  lastKeyOf: function(searchValue) {
	    return this.toSeq().reverse().keyOf(searchValue);
	  },
	  mapEntries: function(mapper, context) {
	    var $__0 = this;
	    var iterations = 0;
	    return reify(this, this.toSeq().map((function(v, k) {
	      return mapper.call(context, [k, v], iterations++, $__0);
	    })).fromEntrySeq());
	  },
	  mapKeys: function(mapper, context) {
	    var $__0 = this;
	    return reify(this, this.toSeq().flip().map((function(k, v) {
	      return mapper.call(context, k, v, $__0);
	    })).flip());
	  }
	}, {}, Iterable);
	var KeyedIterablePrototype = KeyedIterable.prototype;
	KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	KeyedIterablePrototype.__toStringMapper = (function(v, k) {
	  return k + ': ' + quoteString(v);
	});
	var IndexedIterable = function IndexedIterable(value) {
	  return isIndexed(value) ? value : IndexedSeq.apply(undefined, arguments);
	};
	($traceurRuntime.createClass)(IndexedIterable, {
	  toKeyedSeq: function() {
	    return new ToKeyedSequence(this, false);
	  },
	  concat: function() {
	    for (var values = [],
	        $__3 = 0; $__3 < arguments.length; $__3++)
	      values[$__3] = arguments[$__3];
	    return reify(this, concatFactory(this, values, false));
	  },
	  filter: function(predicate, context) {
	    return reify(this, filterFactory(this, predicate, context, false));
	  },
	  findIndex: function(predicate, context) {
	    var key = this.toKeyedSeq().findKey(predicate, context);
	    return key === undefined ? -1 : key;
	  },
	  indexOf: function(searchValue) {
	    var key = this.toKeyedSeq().keyOf(searchValue);
	    return key === undefined ? -1 : key;
	  },
	  lastIndexOf: function(searchValue) {
	    var key = this.toKeyedSeq().lastKeyOf(searchValue);
	    return key === undefined ? -1 : key;
	  },
	  reverse: function() {
	    return reify(this, reverseFactory(this, false));
	  },
	  splice: function(index, removeNum) {
	    var numArgs = arguments.length;
	    removeNum = Math.max(removeNum | 0, 0);
	    if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	      return this;
	    }
	    index = resolveBegin(index, this.size);
	    var spliced = this.slice(0, index);
	    return reify(this, numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum)));
	  },
	  findLastIndex: function(predicate, context) {
	    var key = this.toKeyedSeq().findLastKey(predicate, context);
	    return key === undefined ? -1 : key;
	  },
	  first: function() {
	    return this.get(0);
	  },
	  flatten: function(depth) {
	    return reify(this, flattenFactory(this, depth, false));
	  },
	  get: function(index, notSetValue) {
	    index = wrapIndex(this, index);
	    return (index < 0 || (this.size === Infinity || (this.size !== undefined && index > this.size))) ? notSetValue : this.find((function(_, key) {
	      return key === index;
	    }), undefined, notSetValue);
	  },
	  has: function(index) {
	    index = wrapIndex(this, index);
	    return index >= 0 && (this.size !== undefined ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
	  },
	  interpose: function(separator) {
	    return reify(this, interposeFactory(this, separator));
	  },
	  last: function() {
	    return this.get(-1);
	  },
	  skip: function(amount) {
	    var iter = this;
	    var skipSeq = skipFactory(iter, amount, false);
	    if (isSeq(iter) && skipSeq !== iter) {
	      skipSeq.get = function(index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 ? iter.get(index + amount, notSetValue) : notSetValue;
	      };
	    }
	    return reify(this, skipSeq);
	  },
	  skipWhile: function(predicate, context) {
	    return reify(this, skipWhileFactory(this, predicate, context, false));
	  },
	  sortBy: function(mapper, comparator) {
	    var $__0 = this;
	    comparator = comparator || defaultComparator;
	    return reify(this, new ArraySeq(this.entrySeq().toArray().sort((function(a, b) {
	      return comparator(mapper(a[1], a[0], $__0), mapper(b[1], b[0], $__0)) || a[0] - b[0];
	    }))).fromEntrySeq().valueSeq());
	  },
	  take: function(amount) {
	    var iter = this;
	    var takeSeq = takeFactory(iter, amount);
	    if (isSeq(iter) && takeSeq !== iter) {
	      takeSeq.get = function(index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < amount ? iter.get(index, notSetValue) : notSetValue;
	      };
	    }
	    return reify(this, takeSeq);
	  }
	}, {}, Iterable);
	IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	var SetIterable = function SetIterable(value) {
	  return isIterable(value) && !isAssociative(value) ? value : SetSeq.apply(undefined, arguments);
	};
	($traceurRuntime.createClass)(SetIterable, {
	  get: function(value, notSetValue) {
	    return this.has(value) ? value : notSetValue;
	  },
	  contains: function(value) {
	    return this.has(value);
	  },
	  keySeq: function() {
	    return this.valueSeq();
	  }
	}, {}, Iterable);
	SetIterable.prototype.has = IterablePrototype.contains;
	function isIterable(maybeIterable) {
	  return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	}
	function isKeyed(maybeKeyed) {
	  return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	}
	function isIndexed(maybeIndexed) {
	  return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	}
	function isAssociative(maybeAssociative) {
	  return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	}
	Iterable.isIterable = isIterable;
	Iterable.isKeyed = isKeyed;
	Iterable.isIndexed = isIndexed;
	Iterable.isAssociative = isAssociative;
	Iterable.Keyed = KeyedIterable;
	Iterable.Indexed = IndexedIterable;
	Iterable.Set = SetIterable;
	Iterable.Iterator = Iterator;
	function valueMapper(v) {
	  return v;
	}
	function keyMapper(v, k) {
	  return k;
	}
	function entryMapper(v, k) {
	  return [k, v];
	}
	function not(predicate) {
	  return function() {
	    return !predicate.apply(this, arguments);
	  };
	}
	function quoteString(value) {
	  return typeof value === 'string' ? JSON.stringify(value) : value;
	}
	function defaultComparator(a, b) {
	  return a > b ? 1 : a < b ? -1 : 0;
	}
	function mixin(ctor, methods) {
	  var proto = ctor.prototype;
	  Object.keys(methods).forEach(function(key) {
	    proto[key] = methods[key];
	  });
	  return ctor;
	}
	var Seq = function Seq(value) {
	  return arguments.length === 0 ? emptySequence() : (isIterable(value) ? value : seqFromValue(value, false)).toSeq();
	};
	var $Seq = Seq;
	($traceurRuntime.createClass)(Seq, {
	  toSeq: function() {
	    return this;
	  },
	  toString: function() {
	    return this.__toString('Seq {', '}');
	  },
	  cacheResult: function() {
	    if (!this._cache && this.__iterateUncached) {
	      this._cache = this.entrySeq().toArray();
	      this.size = this._cache.length;
	    }
	    return this;
	  },
	  __iterate: function(fn, reverse) {
	    return seqIterate(this, fn, reverse, true);
	  },
	  __iterator: function(type, reverse) {
	    return seqIterator(this, type, reverse, true);
	  }
	}, {of: function() {
	    return $Seq(arguments);
	  }}, Iterable);
	var KeyedSeq = function KeyedSeq(value) {
	  if (arguments.length === 0) {
	    return emptySequence().toKeyedSeq();
	  }
	  if (!isIterable(value)) {
	    value = seqFromValue(value, false);
	  }
	  return isKeyed(value) ? value.toSeq() : value.fromEntrySeq();
	};
	var $KeyedSeq = KeyedSeq;
	($traceurRuntime.createClass)(KeyedSeq, {
	  toKeyedSeq: function() {
	    return this;
	  },
	  toSeq: function() {
	    return this;
	  }
	}, {of: function() {
	    return $KeyedSeq(arguments);
	  }}, Seq);
	mixin(KeyedSeq, KeyedIterable.prototype);
	var IndexedSeq = function IndexedSeq(value) {
	  return arguments.length === 0 ? emptySequence() : (isIterable(value) ? value : seqFromValue(value, false)).toIndexedSeq();
	};
	var $IndexedSeq = IndexedSeq;
	($traceurRuntime.createClass)(IndexedSeq, {
	  toIndexedSeq: function() {
	    return this;
	  },
	  toString: function() {
	    return this.__toString('Seq [', ']');
	  },
	  __iterate: function(fn, reverse) {
	    return seqIterate(this, fn, reverse, false);
	  },
	  __iterator: function(type, reverse) {
	    return seqIterator(this, type, reverse, false);
	  }
	}, {of: function() {
	    return $IndexedSeq(arguments);
	  }}, Seq);
	mixin(IndexedSeq, IndexedIterable.prototype);
	var SetSeq = function SetSeq(value) {
	  return arguments.length === 0 ? emptySequence().toSetSeq() : (isIterable(value) ? value : seqFromValue(value, false)).toSetSeq();
	};
	var $SetSeq = SetSeq;
	($traceurRuntime.createClass)(SetSeq, {toSetSeq: function() {
	    return this;
	  }}, {of: function() {
	    return $SetSeq(arguments);
	  }}, Seq);
	mixin(SetSeq, SetIterable.prototype);
	Seq.isSeq = isSeq;
	Seq.Keyed = KeyedSeq;
	Seq.Set = SetSeq;
	Seq.Indexed = IndexedSeq;
	var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
	Seq.prototype[IS_SEQ_SENTINEL] = true;
	var ArraySeq = function ArraySeq(array) {
	  this._array = array;
	  this.size = array.length;
	};
	($traceurRuntime.createClass)(ArraySeq, {
	  get: function(index, notSetValue) {
	    return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	  },
	  __iterate: function(fn, reverse) {
	    var array = this._array;
	    var maxIndex = array.length - 1;
	    for (var ii = 0; ii <= maxIndex; ii++) {
	      if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	        return ii + 1;
	      }
	    }
	    return ii;
	  },
	  __iterator: function(type, reverse) {
	    var array = this._array;
	    var maxIndex = array.length - 1;
	    var ii = 0;
	    return new Iterator((function() {
	      return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++]);
	    }));
	  }
	}, {}, IndexedSeq);
	var ObjectSeq = function ObjectSeq(object) {
	  var keys = Object.keys(object);
	  this._object = object;
	  this._keys = keys;
	  this.size = keys.length;
	};
	($traceurRuntime.createClass)(ObjectSeq, {
	  get: function(key, notSetValue) {
	    if (notSetValue !== undefined && !this.has(key)) {
	      return notSetValue;
	    }
	    return this._object[key];
	  },
	  has: function(key) {
	    return this._object.hasOwnProperty(key);
	  },
	  __iterate: function(fn, reverse) {
	    var object = this._object;
	    var keys = this._keys;
	    var maxIndex = keys.length - 1;
	    for (var ii = 0; ii <= maxIndex; ii++) {
	      var key = keys[reverse ? maxIndex - ii : ii];
	      if (fn(object[key], key, this) === false) {
	        return ii + 1;
	      }
	    }
	    return ii;
	  },
	  __iterator: function(type, reverse) {
	    var object = this._object;
	    var keys = this._keys;
	    var maxIndex = keys.length - 1;
	    var ii = 0;
	    return new Iterator((function() {
	      var key = keys[reverse ? maxIndex - ii : ii];
	      return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, key, object[key]);
	    }));
	  }
	}, {}, KeyedSeq);
	var IterableSeq = function IterableSeq(iterable) {
	  this._iterable = iterable;
	  this.size = iterable.length || iterable.size;
	};
	($traceurRuntime.createClass)(IterableSeq, {
	  __iterateUncached: function(fn, reverse) {
	    if (reverse) {
	      return this.cacheResult().__iterate(fn, reverse);
	    }
	    var iterable = this._iterable;
	    var iterator = getIterator(iterable);
	    var iterations = 0;
	    if (isIterator(iterator)) {
	      var step;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	    }
	    return iterations;
	  },
	  __iteratorUncached: function(type, reverse) {
	    if (reverse) {
	      return this.cacheResult().__iterator(type, reverse);
	    }
	    var iterable = this._iterable;
	    var iterator = getIterator(iterable);
	    if (!isIterator(iterator)) {
	      return new Iterator(iteratorDone);
	    }
	    var iterations = 0;
	    return new Iterator((function() {
	      var step = iterator.next();
	      return step.done ? step : iteratorValue(type, iterations++, step.value);
	    }));
	  }
	}, {}, IndexedSeq);
	var IteratorSeq = function IteratorSeq(iterator) {
	  this._iterator = iterator;
	  this._iteratorCache = [];
	};
	($traceurRuntime.createClass)(IteratorSeq, {
	  __iterateUncached: function(fn, reverse) {
	    if (reverse) {
	      return this.cacheResult().__iterate(fn, reverse);
	    }
	    var iterator = this._iterator;
	    var cache = this._iteratorCache;
	    var iterations = 0;
	    while (iterations < cache.length) {
	      if (fn(cache[iterations], iterations++, this) === false) {
	        return iterations;
	      }
	    }
	    var step;
	    while (!(step = iterator.next()).done) {
	      var val = step.value;
	      cache[iterations] = val;
	      if (fn(val, iterations++, this) === false) {
	        break;
	      }
	    }
	    return iterations;
	  },
	  __iteratorUncached: function(type, reverse) {
	    if (reverse) {
	      return this.cacheResult().__iterator(type, reverse);
	    }
	    var iterator = this._iterator;
	    var cache = this._iteratorCache;
	    var iterations = 0;
	    return new Iterator((function() {
	      if (iterations >= cache.length) {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        cache[iterations] = step.value;
	      }
	      return iteratorValue(type, iterations, cache[iterations++]);
	    }));
	  }
	}, {}, IndexedSeq);
	function isSeq(maybeSeq) {
	  return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	}
	var EMPTY_SEQ;
	function emptySequence() {
	  return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	}
	function seqFromValue(value, maybeSingleton) {
	  var seq = maybeSingleton && typeof value === 'string' ? new ArraySeq([value]) : isArrayLike(value) ? new ArraySeq(value) : isIterator(value) ? new IteratorSeq(value) : hasIterator(value) ? new IterableSeq(value) : (maybeSingleton ? isPlainObj(value) : typeof value === 'object') ? new ObjectSeq(value) : maybeSingleton ? new ArraySeq([value]) : undefined;
	  if (!seq) {
	    throw new TypeError('Expected iterable: ' + value);
	  }
	  return seq;
	}
	function isArrayLike(value) {
	  return value && typeof value.length === 'number';
	}
	function seqIterate(seq, fn, reverse, useKeys) {
	  assertNotInfinite(seq.size);
	  var cache = seq._cache;
	  if (cache) {
	    var maxIndex = cache.length - 1;
	    for (var ii = 0; ii <= maxIndex; ii++) {
	      var entry = cache[reverse ? maxIndex - ii : ii];
	      if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	        return ii + 1;
	      }
	    }
	    return ii;
	  }
	  return seq.__iterateUncached(fn, reverse);
	}
	function seqIterator(seq, type, reverse, useKeys) {
	  var cache = seq._cache;
	  if (cache) {
	    var maxIndex = cache.length - 1;
	    var ii = 0;
	    return new Iterator((function() {
	      var entry = cache[reverse ? maxIndex - ii : ii];
	      return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	    }));
	  }
	  return seq.__iteratorUncached(type, reverse);
	}
	var Collection = function Collection() {
	  throw TypeError('Abstract');
	};
	($traceurRuntime.createClass)(Collection, {}, {}, Iterable);
	var KeyedCollection = function KeyedCollection() {
	  $traceurRuntime.defaultSuperCall(this, $KeyedCollection.prototype, arguments);
	};
	var $KeyedCollection = KeyedCollection;
	($traceurRuntime.createClass)(KeyedCollection, {}, {}, Collection);
	mixin(KeyedCollection, KeyedIterable.prototype);
	var IndexedCollection = function IndexedCollection() {
	  $traceurRuntime.defaultSuperCall(this, $IndexedCollection.prototype, arguments);
	};
	var $IndexedCollection = IndexedCollection;
	($traceurRuntime.createClass)(IndexedCollection, {}, {}, Collection);
	mixin(IndexedCollection, IndexedIterable.prototype);
	var SetCollection = function SetCollection() {
	  $traceurRuntime.defaultSuperCall(this, $SetCollection.prototype, arguments);
	};
	var $SetCollection = SetCollection;
	($traceurRuntime.createClass)(SetCollection, {}, {}, Collection);
	mixin(SetCollection, SetIterable.prototype);
	Collection.Keyed = KeyedCollection;
	Collection.Indexed = IndexedCollection;
	Collection.Set = SetCollection;
	var Map = function Map(value) {
	  return arguments.length === 0 ? emptyMap() : value && value.constructor === $Map ? value : emptyMap().merge(value);
	};
	var $Map = Map;
	($traceurRuntime.createClass)(Map, {
	  toString: function() {
	    return this.__toString('Map {', '}');
	  },
	  get: function(k, notSetValue) {
	    return this._root ? this._root.get(0, hash(k), k, notSetValue) : notSetValue;
	  },
	  set: function(k, v) {
	    return updateMap(this, k, v);
	  },
	  setIn: function(keyPath, v) {
	    invariant(keyPath.length > 0, 'Requires non-empty key path.');
	    return this.updateIn(keyPath, (function() {
	      return v;
	    }));
	  },
	  remove: function(k) {
	    return updateMap(this, k, NOT_SET);
	  },
	  removeIn: function(keyPath) {
	    invariant(keyPath.length > 0, 'Requires non-empty key path.');
	    return this.updateIn(keyPath, (function() {
	      return NOT_SET;
	    }));
	  },
	  update: function(k, notSetValue, updater) {
	    return arguments.length === 1 ? k(this) : this.updateIn([k], notSetValue, updater);
	  },
	  updateIn: function(keyPath, notSetValue, updater) {
	    if (!updater) {
	      updater = notSetValue;
	      notSetValue = undefined;
	    }
	    return keyPath.length === 0 ? updater(this) : updateInDeepMap(this, keyPath, notSetValue, updater, 0);
	  },
	  clear: function() {
	    if (this.size === 0) {
	      return this;
	    }
	    if (this.__ownerID) {
	      this.size = 0;
	      this._root = null;
	      this.__hash = undefined;
	      this.__altered = true;
	      return this;
	    }
	    return emptyMap();
	  },
	  merge: function() {
	    return mergeIntoMapWith(this, undefined, arguments);
	  },
	  mergeWith: function(merger) {
	    for (var iters = [],
	        $__4 = 1; $__4 < arguments.length; $__4++)
	      iters[$__4 - 1] = arguments[$__4];
	    return mergeIntoMapWith(this, merger, iters);
	  },
	  mergeDeep: function() {
	    return mergeIntoMapWith(this, deepMerger(undefined), arguments);
	  },
	  mergeDeepWith: function(merger) {
	    for (var iters = [],
	        $__5 = 1; $__5 < arguments.length; $__5++)
	      iters[$__5 - 1] = arguments[$__5];
	    return mergeIntoMapWith(this, deepMerger(merger), iters);
	  },
	  withMutations: function(fn) {
	    var mutable = this.asMutable();
	    fn(mutable);
	    return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	  },
	  asMutable: function() {
	    return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	  },
	  asImmutable: function() {
	    return this.__ensureOwner();
	  },
	  wasAltered: function() {
	    return this.__altered;
	  },
	  __iterator: function(type, reverse) {
	    return new MapIterator(this, type, reverse);
	  },
	  __iterate: function(fn, reverse) {
	    var $__0 = this;
	    var iterations = 0;
	    this._root && this._root.iterate((function(entry) {
	      iterations++;
	      return fn(entry[1], entry[0], $__0);
	    }), reverse);
	    return iterations;
	  },
	  __ensureOwner: function(ownerID) {
	    if (ownerID === this.__ownerID) {
	      return this;
	    }
	    if (!ownerID) {
	      this.__ownerID = ownerID;
	      this.__altered = false;
	      return this;
	    }
	    return makeMap(this.size, this._root, ownerID, this.__hash);
	  }
	}, {}, KeyedCollection);
	function isMap(maybeMap) {
	  return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	}
	Map.isMap = isMap;
	var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
	var MapPrototype = Map.prototype;
	MapPrototype[IS_MAP_SENTINEL] = true;
	MapPrototype[DELETE] = MapPrototype.remove;
	var BitmapIndexedNode = function BitmapIndexedNode(ownerID, bitmap, nodes) {
	  this.ownerID = ownerID;
	  this.bitmap = bitmap;
	  this.nodes = nodes;
	};
	var $BitmapIndexedNode = BitmapIndexedNode;
	($traceurRuntime.createClass)(BitmapIndexedNode, {
	  get: function(shift, hash, key, notSetValue) {
	    var bit = (1 << ((shift === 0 ? hash : hash >>> shift) & MASK));
	    var bitmap = this.bitmap;
	    return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, hash, key, notSetValue);
	  },
	  update: function(ownerID, shift, hash, key, value, didChangeSize, didAlter) {
	    var hashFrag = (shift === 0 ? hash : hash >>> shift) & MASK;
	    var bit = 1 << hashFrag;
	    var bitmap = this.bitmap;
	    var exists = (bitmap & bit) !== 0;
	    if (!exists && value === NOT_SET) {
	      return this;
	    }
	    var idx = popCount(bitmap & (bit - 1));
	    var nodes = this.nodes;
	    var node = exists ? nodes[idx] : undefined;
	    var newNode = updateNode(node, ownerID, shift + SHIFT, hash, key, value, didChangeSize, didAlter);
	    if (newNode === node) {
	      return this;
	    }
	    if (!exists && newNode && nodes.length >= MAX_BITMAP_SIZE) {
	      return expandNodes(ownerID, nodes, bitmap, hashFrag, newNode);
	    }
	    if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	      return nodes[idx ^ 1];
	    }
	    if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	      return newNode;
	    }
	    var isEditable = ownerID && ownerID === this.ownerID;
	    var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	    var newNodes = exists ? newNode ? setIn(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
	    if (isEditable) {
	      this.bitmap = newBitmap;
	      this.nodes = newNodes;
	      return this;
	    }
	    return new $BitmapIndexedNode(ownerID, newBitmap, newNodes);
	  },
	  iterate: function(fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0,
	        maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      if (nodes[reverse ? maxIndex - ii : ii].iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }
	}, {});
	var ArrayNode = function ArrayNode(ownerID, count, nodes) {
	  this.ownerID = ownerID;
	  this.count = count;
	  this.nodes = nodes;
	};
	var $ArrayNode = ArrayNode;
	($traceurRuntime.createClass)(ArrayNode, {
	  get: function(shift, hash, key, notSetValue) {
	    var idx = (shift === 0 ? hash : hash >>> shift) & MASK;
	    var node = this.nodes[idx];
	    return node ? node.get(shift + SHIFT, hash, key, notSetValue) : notSetValue;
	  },
	  update: function(ownerID, shift, hash, key, value, didChangeSize, didAlter) {
	    var idx = (shift === 0 ? hash : hash >>> shift) & MASK;
	    var removed = value === NOT_SET;
	    var nodes = this.nodes;
	    var node = nodes[idx];
	    if (removed && !node) {
	      return this;
	    }
	    var newNode = updateNode(node, ownerID, shift + SHIFT, hash, key, value, didChangeSize, didAlter);
	    if (newNode === node) {
	      return this;
	    }
	    var newCount = this.count;
	    if (!node) {
	      newCount++;
	    } else if (!newNode) {
	      newCount--;
	      if (newCount < MIN_ARRAY_SIZE) {
	        return packNodes(ownerID, nodes, newCount, idx);
	      }
	    }
	    var isEditable = ownerID && ownerID === this.ownerID;
	    var newNodes = setIn(nodes, idx, newNode, isEditable);
	    if (isEditable) {
	      this.count = newCount;
	      this.nodes = newNodes;
	      return this;
	    }
	    return new $ArrayNode(ownerID, newCount, newNodes);
	  },
	  iterate: function(fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0,
	        maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }
	}, {});
	var HashCollisionNode = function HashCollisionNode(ownerID, hash, entries) {
	  this.ownerID = ownerID;
	  this.hash = hash;
	  this.entries = entries;
	};
	var $HashCollisionNode = HashCollisionNode;
	($traceurRuntime.createClass)(HashCollisionNode, {
	  get: function(shift, hash, key, notSetValue) {
	    var entries = this.entries;
	    for (var ii = 0,
	        len = entries.length; ii < len; ii++) {
	      if (is(key, entries[ii][0])) {
	        return entries[ii][1];
	      }
	    }
	    return notSetValue;
	  },
	  update: function(ownerID, shift, hash, key, value, didChangeSize, didAlter) {
	    var removed = value === NOT_SET;
	    if (hash !== this.hash) {
	      if (removed) {
	        return this;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash, [key, value]);
	    }
	    var entries = this.entries;
	    var idx = 0;
	    for (var len = entries.length; idx < len; idx++) {
	      if (is(key, entries[idx][0])) {
	        break;
	      }
	    }
	    var exists = idx < len;
	    if (removed && !exists) {
	      return this;
	    }
	    SetRef(didAlter);
	    (removed || !exists) && SetRef(didChangeSize);
	    if (removed && len === 2) {
	      return new ValueNode(ownerID, this.hash, entries[idx ^ 1]);
	    }
	    var isEditable = ownerID && ownerID === this.ownerID;
	    var newEntries = isEditable ? entries : arrCopy(entries);
	    if (exists) {
	      if (removed) {
	        idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	      } else {
	        newEntries[idx] = [key, value];
	      }
	    } else {
	      newEntries.push([key, value]);
	    }
	    if (isEditable) {
	      this.entries = newEntries;
	      return this;
	    }
	    return new $HashCollisionNode(ownerID, this.hash, newEntries);
	  },
	  iterate: function(fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0,
	        maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }
	}, {});
	var ValueNode = function ValueNode(ownerID, hash, entry) {
	  this.ownerID = ownerID;
	  this.hash = hash;
	  this.entry = entry;
	};
	var $ValueNode = ValueNode;
	($traceurRuntime.createClass)(ValueNode, {
	  get: function(shift, hash, key, notSetValue) {
	    return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	  },
	  update: function(ownerID, shift, hash, key, value, didChangeSize, didAlter) {
	    var removed = value === NOT_SET;
	    var keyMatch = is(key, this.entry[0]);
	    if (keyMatch ? value === this.entry[1] : removed) {
	      return this;
	    }
	    SetRef(didAlter);
	    if (removed) {
	      SetRef(didChangeSize);
	      return;
	    }
	    if (keyMatch) {
	      if (ownerID && ownerID === this.ownerID) {
	        this.entry[1] = value;
	        return this;
	      }
	      return new $ValueNode(ownerID, hash, [key, value]);
	    }
	    SetRef(didChangeSize);
	    return mergeIntoNode(this, ownerID, shift, hash, [key, value]);
	  },
	  iterate: function(fn) {
	    return fn(this.entry);
	  }
	}, {});
	var MapIterator = function MapIterator(map, type, reverse) {
	  this._type = type;
	  this._reverse = reverse;
	  this._stack = map._root && mapIteratorFrame(map._root);
	};
	($traceurRuntime.createClass)(MapIterator, {next: function() {
	    var type = this._type;
	    var stack = this._stack;
	    while (stack) {
	      var node = stack.node;
	      var index = stack.index++;
	      var maxIndex;
	      if (node.entry) {
	        if (index === 0) {
	          return mapIteratorValue(type, node.entry);
	        }
	      } else if (node.entries) {
	        maxIndex = node.entries.length - 1;
	        if (index <= maxIndex) {
	          return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	        }
	      } else {
	        maxIndex = node.nodes.length - 1;
	        if (index <= maxIndex) {
	          var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	          if (subNode) {
	            if (subNode.entry) {
	              return mapIteratorValue(type, subNode.entry);
	            }
	            stack = this._stack = mapIteratorFrame(subNode, stack);
	          }
	          continue;
	        }
	      }
	      stack = this._stack = this._stack.__prev;
	    }
	    return iteratorDone();
	  }}, {}, Iterator);
	function mapIteratorValue(type, entry) {
	  return iteratorValue(type, entry[0], entry[1]);
	}
	function mapIteratorFrame(node, prev) {
	  return {
	    node: node,
	    index: 0,
	    __prev: prev
	  };
	}
	function makeMap(size, root, ownerID, hash) {
	  var map = Object.create(MapPrototype);
	  map.size = size;
	  map._root = root;
	  map.__ownerID = ownerID;
	  map.__hash = hash;
	  map.__altered = false;
	  return map;
	}
	var EMPTY_MAP;
	function emptyMap() {
	  return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	}
	function updateMap(map, k, v) {
	  var didChangeSize = MakeRef(CHANGE_LENGTH);
	  var didAlter = MakeRef(DID_ALTER);
	  var newRoot = updateNode(map._root, map.__ownerID, 0, hash(k), k, v, didChangeSize, didAlter);
	  if (!didAlter.value) {
	    return map;
	  }
	  var newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	  if (map.__ownerID) {
	    map.size = newSize;
	    map._root = newRoot;
	    map.__hash = undefined;
	    map.__altered = true;
	    return map;
	  }
	  return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	}
	function updateNode(node, ownerID, shift, hash, key, value, didChangeSize, didAlter) {
	  if (!node) {
	    if (value === NOT_SET) {
	      return node;
	    }
	    SetRef(didAlter);
	    SetRef(didChangeSize);
	    return new ValueNode(ownerID, hash, [key, value]);
	  }
	  return node.update(ownerID, shift, hash, key, value, didChangeSize, didAlter);
	}
	function isLeafNode(node) {
	  return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	}
	function mergeIntoNode(node, ownerID, shift, hash, entry) {
	  if (node.hash === hash) {
	    return new HashCollisionNode(ownerID, hash, [node.entry, entry]);
	  }
	  var idx1 = (shift === 0 ? node.hash : node.hash >>> shift) & MASK;
	  var idx2 = (shift === 0 ? hash : hash >>> shift) & MASK;
	  var newNode;
	  var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, hash, entry)] : ((newNode = new ValueNode(ownerID, hash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);
	  return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	}
	function packNodes(ownerID, nodes, count, excluding) {
	  var bitmap = 0;
	  var packedII = 0;
	  var packedNodes = new Array(count);
	  for (var ii = 0,
	      bit = 1,
	      len = nodes.length; ii < len; ii++, bit <<= 1) {
	    var node = nodes[ii];
	    if (node !== undefined && ii !== excluding) {
	      bitmap |= bit;
	      packedNodes[packedII++] = node;
	    }
	  }
	  return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	}
	function expandNodes(ownerID, nodes, bitmap, including, node) {
	  var count = 0;
	  var expandedNodes = new Array(SIZE);
	  for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	    expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	  }
	  expandedNodes[including] = node;
	  return new ArrayNode(ownerID, count + 1, expandedNodes);
	}
	function mergeIntoMapWith(map, merger, iterables) {
	  var iters = [];
	  for (var ii = 0; ii < iterables.length; ii++) {
	    iterables[ii] && iters.push(KeyedIterable(iterables[ii]));
	  }
	  return mergeIntoCollectionWith(map, merger, iters);
	}
	function deepMerger(merger) {
	  return (function(existing, value) {
	    return existing && existing.mergeDeepWith ? existing.mergeDeepWith(merger, value) : merger ? merger(existing, value) : value;
	  });
	}
	function mergeIntoCollectionWith(collection, merger, iters) {
	  if (iters.length === 0) {
	    return collection;
	  }
	  return collection.withMutations((function(collection) {
	    var mergeIntoMap = merger ? (function(value, key) {
	      var existing = collection.get(key, NOT_SET);
	      collection.set(key, existing === NOT_SET ? value : merger(existing, value));
	    }) : (function(value, key) {
	      collection.set(key, value);
	    });
	    for (var ii = 0; ii < iters.length; ii++) {
	      iters[ii].forEach(mergeIntoMap);
	    }
	  }));
	}
	function updateInDeepMap(collection, keyPath, notSetValue, updater, offset) {
	  invariant(!collection || collection.set, 'updateIn with invalid keyPath');
	  var key = keyPath[offset];
	  var existing = collection ? collection.get(key, NOT_SET) : NOT_SET;
	  var existingValue = existing === NOT_SET ? undefined : existing;
	  var value = offset === keyPath.length - 1 ? updater(existing === NOT_SET ? notSetValue : existing) : updateInDeepMap(existingValue, keyPath, notSetValue, updater, offset + 1);
	  return value === existingValue ? collection : value === NOT_SET ? collection && collection.remove(key) : (collection || emptyMap()).set(key, value);
	}
	function popCount(x) {
	  x = x - ((x >> 1) & 0x55555555);
	  x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	  x = (x + (x >> 4)) & 0x0f0f0f0f;
	  x = x + (x >> 8);
	  x = x + (x >> 16);
	  return x & 0x7f;
	}
	function setIn(array, idx, val, canEdit) {
	  var newArray = canEdit ? array : arrCopy(array);
	  newArray[idx] = val;
	  return newArray;
	}
	function spliceIn(array, idx, val, canEdit) {
	  var newLen = array.length + 1;
	  if (canEdit && idx + 1 === newLen) {
	    array[idx] = val;
	    return array;
	  }
	  var newArray = new Array(newLen);
	  var after = 0;
	  for (var ii = 0; ii < newLen; ii++) {
	    if (ii === idx) {
	      newArray[ii] = val;
	      after = -1;
	    } else {
	      newArray[ii] = array[ii + after];
	    }
	  }
	  return newArray;
	}
	function spliceOut(array, idx, canEdit) {
	  var newLen = array.length - 1;
	  if (canEdit && idx === newLen) {
	    array.pop();
	    return array;
	  }
	  var newArray = new Array(newLen);
	  var after = 0;
	  for (var ii = 0; ii < newLen; ii++) {
	    if (ii === idx) {
	      after = 1;
	    }
	    newArray[ii] = array[ii + after];
	  }
	  return newArray;
	}
	var MAX_BITMAP_SIZE = SIZE / 2;
	var MIN_ARRAY_SIZE = SIZE / 4;
	var ToKeyedSequence = function ToKeyedSequence(indexed, useKeys) {
	  this._iter = indexed;
	  this._useKeys = useKeys;
	  this.size = indexed.size;
	};
	($traceurRuntime.createClass)(ToKeyedSequence, {
	  get: function(key, notSetValue) {
	    return this._iter.get(key, notSetValue);
	  },
	  has: function(key) {
	    return this._iter.has(key);
	  },
	  valueSeq: function() {
	    return this._iter.valueSeq();
	  },
	  reverse: function() {
	    var $__0 = this;
	    var reversedSequence = reverseFactory(this, true);
	    if (!this._useKeys) {
	      reversedSequence.valueSeq = (function() {
	        return $__0._iter.toSeq().reverse();
	      });
	    }
	    return reversedSequence;
	  },
	  map: function(mapper, context) {
	    var $__0 = this;
	    var mappedSequence = mapFactory(this, mapper, context);
	    if (!this._useKeys) {
	      mappedSequence.valueSeq = (function() {
	        return $__0._iter.toSeq().map(mapper, context);
	      });
	    }
	    return mappedSequence;
	  },
	  __iterate: function(fn, reverse) {
	    var $__0 = this;
	    var ii;
	    return this._iter.__iterate(this._useKeys ? (function(v, k) {
	      return fn(v, k, $__0);
	    }) : ((ii = reverse ? resolveSize(this) : 0), (function(v) {
	      return fn(v, reverse ? --ii : ii++, $__0);
	    })), reverse);
	  },
	  __iterator: function(type, reverse) {
	    if (this._useKeys) {
	      return this._iter.__iterator(type, reverse);
	    }
	    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	    var ii = reverse ? resolveSize(this) : 0;
	    return new Iterator((function() {
	      var step = iterator.next();
	      return step.done ? step : iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	    }));
	  }
	}, {}, KeyedSeq);
	var ToIndexedSequence = function ToIndexedSequence(iter) {
	  this._iter = iter;
	  this.size = iter.size;
	};
	($traceurRuntime.createClass)(ToIndexedSequence, {
	  contains: function(value) {
	    return this._iter.contains(value);
	  },
	  __iterate: function(fn, reverse) {
	    var $__0 = this;
	    var iterations = 0;
	    return this._iter.__iterate((function(v) {
	      return fn(v, iterations++, $__0);
	    }), reverse);
	  },
	  __iterator: function(type, reverse) {
	    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	    var iterations = 0;
	    return new Iterator((function() {
	      var step = iterator.next();
	      return step.done ? step : iteratorValue(type, iterations++, step.value, step);
	    }));
	  }
	}, {}, IndexedSeq);
	var ToSetSequence = function ToSetSequence(iter) {
	  this._iter = iter;
	  this.size = iter.size;
	};
	($traceurRuntime.createClass)(ToSetSequence, {
	  has: function(key) {
	    return this._iter.contains(key);
	  },
	  __iterate: function(fn, reverse) {
	    var $__0 = this;
	    return this._iter.__iterate((function(v) {
	      return fn(v, v, $__0);
	    }), reverse);
	  },
	  __iterator: function(type, reverse) {
	    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	    return new Iterator((function() {
	      var step = iterator.next();
	      return step.done ? step : iteratorValue(type, step.value, step.value, step);
	    }));
	  }
	}, {}, SetSeq);
	var FromEntriesSequence = function FromEntriesSequence(entries) {
	  this._iter = entries;
	  this.size = entries.size;
	};
	($traceurRuntime.createClass)(FromEntriesSequence, {
	  entrySeq: function() {
	    return this._iter.toSeq();
	  },
	  __iterate: function(fn, reverse) {
	    var $__0 = this;
	    return this._iter.__iterate((function(entry) {
	      if (entry) {
	        validateEntry(entry);
	        return fn(entry[1], entry[0], $__0);
	      }
	    }), reverse);
	  },
	  __iterator: function(type, reverse) {
	    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	    return new Iterator((function() {
	      while (true) {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        if (entry) {
	          validateEntry(entry);
	          return type === ITERATE_ENTRIES ? step : iteratorValue(type, entry[0], entry[1], step);
	        }
	      }
	    }));
	  }
	}, {}, KeyedSeq);
	ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;
	function flipFactory(iterable) {
	  var flipSequence = makeSequence(iterable);
	  flipSequence._iter = iterable;
	  flipSequence.size = iterable.size;
	  flipSequence.flip = (function() {
	    return iterable;
	  });
	  flipSequence.reverse = function() {
	    var reversedSequence = iterable.reverse.apply(this);
	    reversedSequence.flip = (function() {
	      return iterable.reverse();
	    });
	    return reversedSequence;
	  };
	  flipSequence.has = (function(key) {
	    return iterable.contains(key);
	  });
	  flipSequence.contains = (function(key) {
	    return iterable.has(key);
	  });
	  flipSequence.cacheResult = cacheResultThrough;
	  flipSequence.__iterateUncached = function(fn, reverse) {
	    var $__0 = this;
	    return iterable.__iterate((function(v, k) {
	      return fn(k, v, $__0) !== false;
	    }), reverse);
	  };
	  flipSequence.__iteratorUncached = function(type, reverse) {
	    if (type === ITERATE_ENTRIES) {
	      var iterator = iterable.__iterator(type, reverse);
	      return new Iterator((function() {
	        var step = iterator.next();
	        if (!step.done) {
	          var k = step.value[0];
	          step.value[0] = step.value[1];
	          step.value[1] = k;
	        }
	        return step;
	      }));
	    }
	    return iterable.__iterator(type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES, reverse);
	  };
	  return flipSequence;
	}
	function mapFactory(iterable, mapper, context) {
	  var mappedSequence = makeSequence(iterable);
	  mappedSequence.size = iterable.size;
	  mappedSequence.has = (function(key) {
	    return iterable.has(key);
	  });
	  mappedSequence.get = (function(key, notSetValue) {
	    var v = iterable.get(key, NOT_SET);
	    return v === NOT_SET ? notSetValue : mapper.call(context, v, key, iterable);
	  });
	  mappedSequence.__iterateUncached = function(fn, reverse) {
	    var $__0 = this;
	    return iterable.__iterate((function(v, k, c) {
	      return fn(mapper.call(context, v, k, c), k, $__0) !== false;
	    }), reverse);
	  };
	  mappedSequence.__iteratorUncached = function(type, reverse) {
	    var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	    return new Iterator((function() {
	      var step = iterator.next();
	      if (step.done) {
	        return step;
	      }
	      var entry = step.value;
	      var key = entry[0];
	      return iteratorValue(type, key, mapper.call(context, entry[1], key, iterable), step);
	    }));
	  };
	  return mappedSequence;
	}
	function reverseFactory(iterable, useKeys) {
	  var reversedSequence = makeSequence(iterable);
	  reversedSequence._iter = iterable;
	  reversedSequence.size = iterable.size;
	  reversedSequence.reverse = (function() {
	    return iterable;
	  });
	  if (iterable.flip) {
	    reversedSequence.flip = function() {
	      var flipSequence = flipFactory(iterable);
	      flipSequence.reverse = (function() {
	        return iterable.flip();
	      });
	      return flipSequence;
	    };
	  }
	  reversedSequence.get = (function(key, notSetValue) {
	    return iterable.get(useKeys ? key : -1 - key, notSetValue);
	  });
	  reversedSequence.has = (function(key) {
	    return iterable.has(useKeys ? key : -1 - key);
	  });
	  reversedSequence.contains = (function(value) {
	    return iterable.contains(value);
	  });
	  reversedSequence.cacheResult = cacheResultThrough;
	  reversedSequence.__iterate = function(fn, reverse) {
	    var $__0 = this;
	    return iterable.__iterate((function(v, k) {
	      return fn(v, k, $__0);
	    }), !reverse);
	  };
	  reversedSequence.__iterator = (function(type, reverse) {
	    return iterable.__iterator(type, !reverse);
	  });
	  return reversedSequence;
	}
	function filterFactory(iterable, predicate, context, useKeys) {
	  var filterSequence = makeSequence(iterable);
	  if (useKeys) {
	    filterSequence.has = (function(key) {
	      var v = iterable.get(key, NOT_SET);
	      return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	    });
	    filterSequence.get = (function(key, notSetValue) {
	      var v = iterable.get(key, NOT_SET);
	      return v !== NOT_SET && predicate.call(context, v, key, iterable) ? v : notSetValue;
	    });
	  }
	  filterSequence.__iterateUncached = function(fn, reverse) {
	    var $__0 = this;
	    var iterations = 0;
	    iterable.__iterate((function(v, k, c) {
	      if (predicate.call(context, v, k, c)) {
	        iterations++;
	        return fn(v, useKeys ? k : iterations - 1, $__0);
	      }
	    }), reverse);
	    return iterations;
	  };
	  filterSequence.__iteratorUncached = function(type, reverse) {
	    var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	    var iterations = 0;
	    return new Iterator((function() {
	      while (true) {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        var value = entry[1];
	        if (predicate.call(context, value, key, iterable)) {
	          return iteratorValue(type, useKeys ? key : iterations++, value, step);
	        }
	      }
	    }));
	  };
	  return filterSequence;
	}
	function countByFactory(iterable, grouper, context) {
	  var groups = Map().asMutable();
	  iterable.__iterate((function(v, k) {
	    groups.update(grouper.call(context, v, k, iterable), 0, (function(a) {
	      return a + 1;
	    }));
	  }));
	  return groups.asImmutable();
	}
	function groupByFactory(iterable, grouper, context) {
	  var isKeyedIter = isKeyed(iterable);
	  var groups = Map().asMutable();
	  iterable.__iterate((function(v, k) {
	    groups.update(grouper.call(context, v, k, iterable), [], (function(a) {
	      return (a.push(isKeyedIter ? [k, v] : v), a);
	    }));
	  }));
	  var coerce = iterableClass(iterable);
	  return groups.map((function(arr) {
	    return reify(iterable, coerce(arr));
	  }));
	}
	function takeFactory(iterable, amount) {
	  if (amount > iterable.size) {
	    return iterable;
	  }
	  if (amount < 0) {
	    amount = 0;
	  }
	  var takeSequence = makeSequence(iterable);
	  takeSequence.size = iterable.size && Math.min(iterable.size, amount);
	  takeSequence.__iterateUncached = function(fn, reverse) {
	    var $__0 = this;
	    if (amount === 0) {
	      return 0;
	    }
	    if (reverse) {
	      return this.cacheResult().__iterate(fn, reverse);
	    }
	    var iterations = 0;
	    iterable.__iterate((function(v, k) {
	      return ++iterations && fn(v, k, $__0) !== false && iterations < amount;
	    }));
	    return iterations;
	  };
	  takeSequence.__iteratorUncached = function(type, reverse) {
	    if (reverse) {
	      return this.cacheResult().__iterator(type, reverse);
	    }
	    var iterator = amount && iterable.__iterator(type, reverse);
	    var iterations = 0;
	    return new Iterator((function() {
	      if (iterations++ > amount) {
	        return iteratorDone();
	      }
	      return iterator.next();
	    }));
	  };
	  return takeSequence;
	}
	function takeWhileFactory(iterable, predicate, context) {
	  var takeSequence = makeSequence(iterable);
	  takeSequence.__iterateUncached = function(fn, reverse) {
	    var $__0 = this;
	    if (reverse) {
	      return this.cacheResult().__iterate(fn, reverse);
	    }
	    var iterations = 0;
	    iterable.__iterate((function(v, k, c) {
	      return predicate.call(context, v, k, c) && ++iterations && fn(v, k, $__0);
	    }));
	    return iterations;
	  };
	  takeSequence.__iteratorUncached = function(type, reverse) {
	    var $__0 = this;
	    if (reverse) {
	      return this.cacheResult().__iterator(type, reverse);
	    }
	    var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	    var iterating = true;
	    return new Iterator((function() {
	      if (!iterating) {
	        return iteratorDone();
	      }
	      var step = iterator.next();
	      if (step.done) {
	        return step;
	      }
	      var entry = step.value;
	      var k = entry[0];
	      var v = entry[1];
	      if (!predicate.call(context, v, k, $__0)) {
	        iterating = false;
	        return iteratorDone();
	      }
	      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
	    }));
	  };
	  return takeSequence;
	}
	function skipFactory(iterable, amount, useKeys) {
	  if (amount <= 0) {
	    return iterable;
	  }
	  var skipSequence = makeSequence(iterable);
	  skipSequence.size = iterable.size && Math.max(0, iterable.size - amount);
	  skipSequence.__iterateUncached = function(fn, reverse) {
	    var $__0 = this;
	    if (reverse) {
	      return this.cacheResult().__iterate(fn, reverse);
	    }
	    var skipped = 0;
	    var isSkipping = true;
	    var iterations = 0;
	    iterable.__iterate((function(v, k) {
	      if (!(isSkipping && (isSkipping = skipped++ < amount))) {
	        iterations++;
	        return fn(v, useKeys ? k : iterations - 1, $__0);
	      }
	    }));
	    return iterations;
	  };
	  skipSequence.__iteratorUncached = function(type, reverse) {
	    if (reverse) {
	      return this.cacheResult().__iterator(type, reverse);
	    }
	    var iterator = amount && iterable.__iterator(type, reverse);
	    var skipped = 0;
	    var iterations = 0;
	    return new Iterator((function() {
	      while (skipped < amount) {
	        skipped++;
	        iterator.next();
	      }
	      var step = iterator.next();
	      if (useKeys || type === ITERATE_VALUES) {
	        return step;
	      } else if (type === ITERATE_KEYS) {
	        return iteratorValue(type, iterations++, undefined, step);
	      } else {
	        return iteratorValue(type, iterations++, step.value[1], step);
	      }
	    }));
	  };
	  return skipSequence;
	}
	function skipWhileFactory(iterable, predicate, context, useKeys) {
	  var skipSequence = makeSequence(iterable);
	  skipSequence.__iterateUncached = function(fn, reverse) {
	    var $__0 = this;
	    if (reverse) {
	      return this.cacheResult().__iterate(fn, reverse);
	    }
	    var isSkipping = true;
	    var iterations = 0;
	    iterable.__iterate((function(v, k, c) {
	      if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	        iterations++;
	        return fn(v, useKeys ? k : iterations - 1, $__0);
	      }
	    }));
	    return iterations;
	  };
	  skipSequence.__iteratorUncached = function(type, reverse) {
	    var $__0 = this;
	    if (reverse) {
	      return this.cacheResult().__iterator(type, reverse);
	    }
	    var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	    var skipping = true;
	    var iterations = 0;
	    return new Iterator((function() {
	      var step,
	          k,
	          v;
	      do {
	        step = iterator.next();
	        if (step.done) {
	          if (useKeys || type === ITERATE_VALUES) {
	            return step;
	          } else if (type === ITERATE_KEYS) {
	            return iteratorValue(type, iterations++, undefined, step);
	          } else {
	            return iteratorValue(type, iterations++, step.value[1], step);
	          }
	        }
	        var entry = step.value;
	        k = entry[0];
	        v = entry[1];
	        skipping && (skipping = predicate.call(context, v, k, $__0));
	      } while (skipping);
	      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
	    }));
	  };
	  return skipSequence;
	}
	function concatFactory(iterable, values, useKeys) {
	  var isKeyedIter = isKeyed(iterable);
	  var iters = new ArraySeq([iterable].concat(values)).map((function(v) {
	    if (!isIterable(v)) {
	      v = seqFromValue(v, true);
	    }
	    if (isKeyedIter) {
	      v = KeyedIterable(v);
	    }
	    return v;
	  }));
	  if (isKeyedIter) {
	    iters = iters.toKeyedSeq();
	  } else if (!isIndexed(iterable)) {
	    iters = iters.toSetSeq();
	  }
	  var flat = iters.flatten(true);
	  flat.size = iters.reduce((function(sum, seq) {
	    if (sum !== undefined) {
	      var size = seq.size;
	      if (size !== undefined) {
	        return sum + size;
	      }
	    }
	  }), 0);
	  return flat;
	}
	function flattenFactory(iterable, depth, useKeys) {
	  var flatSequence = makeSequence(iterable);
	  flatSequence.__iterateUncached = function(fn, reverse) {
	    var iterations = 0;
	    var stopped = false;
	    function flatDeep(iter, currentDepth) {
	      var $__0 = this;
	      iter.__iterate((function(v, k) {
	        if ((!depth || currentDepth < depth) && isIterable(v)) {
	          flatDeep(v, currentDepth + 1);
	        } else if (fn(v, useKeys ? k : iterations++, $__0) === false) {
	          stopped = true;
	        }
	        return !stopped;
	      }), reverse);
	    }
	    flatDeep(iterable, 0);
	    return iterations;
	  };
	  flatSequence.__iteratorUncached = function(type, reverse) {
	    var iterator = iterable.__iterator(type, reverse);
	    var stack = [];
	    var iterations = 0;
	    return new Iterator((function() {
	      while (iterator) {
	        var step = iterator.next();
	        if (step.done !== false) {
	          iterator = stack.pop();
	          continue;
	        }
	        var v = step.value;
	        if (type === ITERATE_ENTRIES) {
	          v = v[1];
	        }
	        if ((!depth || stack.length < depth) && isIterable(v)) {
	          stack.push(iterator);
	          iterator = v.__iterator(type, reverse);
	        } else {
	          return useKeys ? step : iteratorValue(type, iterations++, v, step);
	        }
	      }
	      return iteratorDone();
	    }));
	  };
	  return flatSequence;
	}
	function flatMapFactory(iterable, mapper, context) {
	  var coerce = iterableClass(iterable);
	  return iterable.toSeq().map((function(v, k) {
	    return coerce(mapper.call(context, v, k, iterable));
	  })).flatten(true);
	}
	function interposeFactory(iterable, separator) {
	  var interposedSequence = makeSequence(iterable);
	  interposedSequence.size = iterable.size && iterable.size * 2 - 1;
	  interposedSequence.__iterateUncached = function(fn, reverse) {
	    var $__0 = this;
	    var iterations = 0;
	    iterable.__iterate((function(v, k) {
	      return (!iterations || fn(separator, iterations++, $__0) !== false) && fn(v, iterations++, $__0) !== false;
	    }), reverse);
	    return iterations;
	  };
	  interposedSequence.__iteratorUncached = function(type, reverse) {
	    var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	    var iterations = 0;
	    var step;
	    return new Iterator((function() {
	      if (!step || iterations % 2) {
	        step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	      }
	      return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
	    }));
	  };
	  return interposedSequence;
	}
	function reify(iter, seq) {
	  return isSeq(iter) ? seq : iter.constructor(seq);
	}
	function validateEntry(entry) {
	  if (entry !== Object(entry)) {
	    throw new TypeError('Expected [K, V] tuple: ' + entry);
	  }
	}
	function resolveSize(iter) {
	  assertNotInfinite(iter.size);
	  return ensureSize(iter);
	}
	function iterableClass(iterable) {
	  return isKeyed(iterable) ? KeyedIterable : isIndexed(iterable) ? IndexedIterable : SetIterable;
	}
	function makeSequence(iterable) {
	  return Object.create((isKeyed(iterable) ? KeyedSeq : isIndexed(iterable) ? IndexedSeq : SetSeq).prototype);
	}
	function cacheResultThrough() {
	  if (this._iter.cacheResult) {
	    this._iter.cacheResult();
	    this.size = this._iter.size;
	    return this;
	  } else {
	    return Seq.prototype.cacheResult.call(this);
	  }
	}
	var List = function List(value) {
	  var empty = emptyList();
	  if (arguments.length === 0) {
	    return empty;
	  }
	  if (value && value.constructor === $List) {
	    return value;
	  }
	  var isArray = Array.isArray(value);
	  if (!isArray) {
	    value = Iterable(value);
	  }
	  var size = isArray ? value.length : value.size;
	  if (size === 0) {
	    return empty;
	  }
	  if (size > 0 && size < SIZE) {
	    return makeList(0, size, SHIFT, null, new VNode(isArray ? arrCopy(value) : value.toArray()));
	  }
	  return empty.merge(value);
	};
	var $List = List;
	($traceurRuntime.createClass)(List, {
	  toString: function() {
	    return this.__toString('List [', ']');
	  },
	  get: function(index, notSetValue) {
	    index = wrapIndex(this, index);
	    if (index < 0 || index >= this.size) {
	      return notSetValue;
	    }
	    index += this._origin;
	    var node = listNodeFor(this, index);
	    return node && node.array[index & MASK];
	  },
	  set: function(index, value) {
	    return updateList(this, index, value);
	  },
	  remove: function(index) {
	    return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
	  },
	  clear: function() {
	    if (this.size === 0) {
	      return this;
	    }
	    if (this.__ownerID) {
	      this.size = this._origin = this._capacity = 0;
	      this._level = SHIFT;
	      this._root = this._tail = null;
	      this.__hash = undefined;
	      this.__altered = true;
	      return this;
	    }
	    return emptyList();
	  },
	  push: function() {
	    var values = arguments;
	    var oldSize = this.size;
	    return this.withMutations((function(list) {
	      setListBounds(list, 0, oldSize + values.length);
	      for (var ii = 0; ii < values.length; ii++) {
	        list.set(oldSize + ii, values[ii]);
	      }
	    }));
	  },
	  pop: function() {
	    return setListBounds(this, 0, -1);
	  },
	  unshift: function() {
	    var values = arguments;
	    return this.withMutations((function(list) {
	      setListBounds(list, -values.length);
	      for (var ii = 0; ii < values.length; ii++) {
	        list.set(ii, values[ii]);
	      }
	    }));
	  },
	  shift: function() {
	    return setListBounds(this, 1);
	  },
	  merge: function() {
	    return mergeIntoListWith(this, undefined, arguments);
	  },
	  mergeWith: function(merger) {
	    for (var iters = [],
	        $__6 = 1; $__6 < arguments.length; $__6++)
	      iters[$__6 - 1] = arguments[$__6];
	    return mergeIntoListWith(this, merger, iters);
	  },
	  mergeDeep: function() {
	    return mergeIntoListWith(this, deepMerger(undefined), arguments);
	  },
	  mergeDeepWith: function(merger) {
	    for (var iters = [],
	        $__7 = 1; $__7 < arguments.length; $__7++)
	      iters[$__7 - 1] = arguments[$__7];
	    return mergeIntoListWith(this, deepMerger(merger), iters);
	  },
	  setSize: function(size) {
	    return setListBounds(this, 0, size);
	  },
	  slice: function(begin, end) {
	    var size = this.size;
	    if (wholeSlice(begin, end, size)) {
	      return this;
	    }
	    return setListBounds(this, resolveBegin(begin, size), resolveEnd(end, size));
	  },
	  __iterator: function(type, reverse) {
	    return new ListIterator(this, type, reverse);
	  },
	  __iterate: function(fn, reverse) {
	    var $__0 = this;
	    var iterations = 0;
	    var eachFn = (function(v) {
	      return fn(v, iterations++, $__0);
	    });
	    var tailOffset = getTailOffset(this._capacity);
	    if (reverse) {
	      iterateVNode(this._tail, 0, tailOffset - this._origin, this._capacity - this._origin, eachFn, reverse) && iterateVNode(this._root, this._level, -this._origin, tailOffset - this._origin, eachFn, reverse);
	    } else {
	      iterateVNode(this._root, this._level, -this._origin, tailOffset - this._origin, eachFn, reverse) && iterateVNode(this._tail, 0, tailOffset - this._origin, this._capacity - this._origin, eachFn, reverse);
	    }
	    return iterations;
	  },
	  __ensureOwner: function(ownerID) {
	    if (ownerID === this.__ownerID) {
	      return this;
	    }
	    if (!ownerID) {
	      this.__ownerID = ownerID;
	      return this;
	    }
	    return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	  }
	}, {of: function() {
	    return this(arguments);
	  }}, IndexedCollection);
	function isList(maybeList) {
	  return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	}
	List.isList = isList;
	var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
	var ListPrototype = List.prototype;
	ListPrototype[IS_LIST_SENTINEL] = true;
	ListPrototype[DELETE] = ListPrototype.remove;
	ListPrototype.setIn = MapPrototype.setIn;
	ListPrototype.removeIn = MapPrototype.removeIn;
	ListPrototype.update = MapPrototype.update;
	ListPrototype.updateIn = MapPrototype.updateIn;
	ListPrototype.withMutations = MapPrototype.withMutations;
	ListPrototype.asMutable = MapPrototype.asMutable;
	ListPrototype.asImmutable = MapPrototype.asImmutable;
	ListPrototype.wasAltered = MapPrototype.wasAltered;
	var VNode = function VNode(array, ownerID) {
	  this.array = array;
	  this.ownerID = ownerID;
	};
	var $VNode = VNode;
	($traceurRuntime.createClass)(VNode, {
	  removeBefore: function(ownerID, level, index) {
	    if (index === level ? 1 << level : 0 || this.array.length === 0) {
	      return this;
	    }
	    var originIndex = (index >>> level) & MASK;
	    if (originIndex >= this.array.length) {
	      return new $VNode([], ownerID);
	    }
	    var removingFirst = originIndex === 0;
	    var newChild;
	    if (level > 0) {
	      var oldChild = this.array[originIndex];
	      newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	      if (newChild === oldChild && removingFirst) {
	        return this;
	      }
	    }
	    if (removingFirst && !newChild) {
	      return this;
	    }
	    var editable = editableVNode(this, ownerID);
	    if (!removingFirst) {
	      for (var ii = 0; ii < originIndex; ii++) {
	        editable.array[ii] = undefined;
	      }
	    }
	    if (newChild) {
	      editable.array[originIndex] = newChild;
	    }
	    return editable;
	  },
	  removeAfter: function(ownerID, level, index) {
	    if (index === level ? 1 << level : 0 || this.array.length === 0) {
	      return this;
	    }
	    var sizeIndex = ((index - 1) >>> level) & MASK;
	    if (sizeIndex >= this.array.length) {
	      return this;
	    }
	    var removingLast = sizeIndex === this.array.length - 1;
	    var newChild;
	    if (level > 0) {
	      var oldChild = this.array[sizeIndex];
	      newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	      if (newChild === oldChild && removingLast) {
	        return this;
	      }
	    }
	    if (removingLast && !newChild) {
	      return this;
	    }
	    var editable = editableVNode(this, ownerID);
	    if (!removingLast) {
	      editable.array.pop();
	    }
	    if (newChild) {
	      editable.array[sizeIndex] = newChild;
	    }
	    return editable;
	  }
	}, {});
	function iterateVNode(node, level, offset, max, fn, reverse) {
	  var ii;
	  var array = node && node.array;
	  if (level === 0) {
	    var from = offset < 0 ? -offset : 0;
	    var to = max - offset;
	    if (to > SIZE) {
	      to = SIZE;
	    }
	    for (ii = from; ii < to; ii++) {
	      if (fn(array && array[reverse ? from + to - 1 - ii : ii]) === false) {
	        return false;
	      }
	    }
	  } else {
	    var step = 1 << level;
	    var newLevel = level - SHIFT;
	    for (ii = 0; ii <= MASK; ii++) {
	      var levelIndex = reverse ? MASK - ii : ii;
	      var newOffset = offset + (levelIndex << level);
	      if (newOffset < max && newOffset + step > 0) {
	        var nextNode = array && array[levelIndex];
	        if (!iterateVNode(nextNode, newLevel, newOffset, max, fn, reverse)) {
	          return false;
	        }
	      }
	    }
	  }
	  return true;
	}
	var ListIterator = function ListIterator(list, type, reverse) {
	  this._type = type;
	  this._reverse = !!reverse;
	  this._maxIndex = list.size - 1;
	  var tailOffset = getTailOffset(list._capacity);
	  var rootStack = listIteratorFrame(list._root && list._root.array, list._level, -list._origin, tailOffset - list._origin - 1);
	  var tailStack = listIteratorFrame(list._tail && list._tail.array, 0, tailOffset - list._origin, list._capacity - list._origin - 1);
	  this._stack = reverse ? tailStack : rootStack;
	  this._stack.__prev = reverse ? rootStack : tailStack;
	};
	($traceurRuntime.createClass)(ListIterator, {next: function() {
	    var stack = this._stack;
	    while (stack) {
	      var array = stack.array;
	      var rawIndex = stack.index++;
	      if (this._reverse) {
	        rawIndex = MASK - rawIndex;
	        if (rawIndex > stack.rawMax) {
	          rawIndex = stack.rawMax;
	          stack.index = SIZE - rawIndex;
	        }
	      }
	      if (rawIndex >= 0 && rawIndex < SIZE && rawIndex <= stack.rawMax) {
	        var value = array && array[rawIndex];
	        if (stack.level === 0) {
	          var type = this._type;
	          var index;
	          if (type !== 1) {
	            index = stack.offset + (rawIndex << stack.level);
	            if (this._reverse) {
	              index = this._maxIndex - index;
	            }
	          }
	          return iteratorValue(type, index, value);
	        } else {
	          this._stack = stack = listIteratorFrame(value && value.array, stack.level - SHIFT, stack.offset + (rawIndex << stack.level), stack.max, stack);
	        }
	        continue;
	      }
	      stack = this._stack = this._stack.__prev;
	    }
	    return iteratorDone();
	  }}, {}, Iterator);
	function listIteratorFrame(array, level, offset, max, prevFrame) {
	  return {
	    array: array,
	    level: level,
	    offset: offset,
	    max: max,
	    rawMax: ((max - offset) >> level),
	    index: 0,
	    __prev: prevFrame
	  };
	}
	function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	  var list = Object.create(ListPrototype);
	  list.size = capacity - origin;
	  list._origin = origin;
	  list._capacity = capacity;
	  list._level = level;
	  list._root = root;
	  list._tail = tail;
	  list.__ownerID = ownerID;
	  list.__hash = hash;
	  list.__altered = false;
	  return list;
	}
	var EMPTY_LIST;
	function emptyList() {
	  return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	}
	function updateList(list, index, value) {
	  index = wrapIndex(list, index);
	  if (index >= list.size || index < 0) {
	    return list.withMutations((function(list) {
	      index < 0 ? setListBounds(list, index).set(0, value) : setListBounds(list, 0, index + 1).set(index, value);
	    }));
	  }
	  index += list._origin;
	  var newTail = list._tail;
	  var newRoot = list._root;
	  var didAlter = MakeRef(DID_ALTER);
	  if (index >= getTailOffset(list._capacity)) {
	    newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	  } else {
	    newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	  }
	  if (!didAlter.value) {
	    return list;
	  }
	  if (list.__ownerID) {
	    list._root = newRoot;
	    list._tail = newTail;
	    list.__hash = undefined;
	    list.__altered = true;
	    return list;
	  }
	  return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	}
	function updateVNode(node, ownerID, level, index, value, didAlter) {
	  var idx = (index >>> level) & MASK;
	  var nodeHas = node && idx < node.array.length;
	  if (!nodeHas && value === undefined) {
	    return node;
	  }
	  var newNode;
	  if (level > 0) {
	    var lowerNode = node && node.array[idx];
	    var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	    if (newLowerNode === lowerNode) {
	      return node;
	    }
	    newNode = editableVNode(node, ownerID);
	    newNode.array[idx] = newLowerNode;
	    return newNode;
	  }
	  if (nodeHas && node.array[idx] === value) {
	    return node;
	  }
	  SetRef(didAlter);
	  newNode = editableVNode(node, ownerID);
	  if (value === undefined && idx === newNode.array.length - 1) {
	    newNode.array.pop();
	  } else {
	    newNode.array[idx] = value;
	  }
	  return newNode;
	}
	function editableVNode(node, ownerID) {
	  if (ownerID && node && ownerID === node.ownerID) {
	    return node;
	  }
	  return new VNode(node ? node.array.slice() : [], ownerID);
	}
	function listNodeFor(list, rawIndex) {
	  if (rawIndex >= getTailOffset(list._capacity)) {
	    return list._tail;
	  }
	  if (rawIndex < 1 << (list._level + SHIFT)) {
	    var node = list._root;
	    var level = list._level;
	    while (node && level > 0) {
	      node = node.array[(rawIndex >>> level) & MASK];
	      level -= SHIFT;
	    }
	    return node;
	  }
	}
	function setListBounds(list, begin, end) {
	  var owner = list.__ownerID || new OwnerID();
	  var oldOrigin = list._origin;
	  var oldCapacity = list._capacity;
	  var newOrigin = oldOrigin + begin;
	  var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	  if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	    return list;
	  }
	  if (newOrigin >= newCapacity) {
	    return list.clear();
	  }
	  var newLevel = list._level;
	  var newRoot = list._root;
	  var offsetShift = 0;
	  while (newOrigin + offsetShift < 0) {
	    newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	    newLevel += SHIFT;
	    offsetShift += 1 << newLevel;
	  }
	  if (offsetShift) {
	    newOrigin += offsetShift;
	    oldOrigin += offsetShift;
	    newCapacity += offsetShift;
	    oldCapacity += offsetShift;
	  }
	  var oldTailOffset = getTailOffset(oldCapacity);
	  var newTailOffset = getTailOffset(newCapacity);
	  while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	    newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	    newLevel += SHIFT;
	  }
	  var oldTail = list._tail;
	  var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
	  if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	    newRoot = editableVNode(newRoot, owner);
	    var node = newRoot;
	    for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	      var idx = (oldTailOffset >>> level) & MASK;
	      node = node.array[idx] = editableVNode(node.array[idx], owner);
	    }
	    node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	  }
	  if (newCapacity < oldCapacity) {
	    newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	  }
	  if (newOrigin >= newTailOffset) {
	    newOrigin -= newTailOffset;
	    newCapacity -= newTailOffset;
	    newLevel = SHIFT;
	    newRoot = null;
	    newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
	  } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	    offsetShift = 0;
	    while (newRoot) {
	      var beginIndex = (newOrigin >>> newLevel) & MASK;
	      if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	        break;
	      }
	      if (beginIndex) {
	        offsetShift += (1 << newLevel) * beginIndex;
	      }
	      newLevel -= SHIFT;
	      newRoot = newRoot.array[beginIndex];
	    }
	    if (newRoot && newOrigin > oldOrigin) {
	      newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	    }
	    if (newRoot && newTailOffset < oldTailOffset) {
	      newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	    }
	    if (offsetShift) {
	      newOrigin -= offsetShift;
	      newCapacity -= offsetShift;
	    }
	  }
	  if (list.__ownerID) {
	    list.size = newCapacity - newOrigin;
	    list._origin = newOrigin;
	    list._capacity = newCapacity;
	    list._level = newLevel;
	    list._root = newRoot;
	    list._tail = newTail;
	    list.__hash = undefined;
	    list.__altered = true;
	    return list;
	  }
	  return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	}
	function mergeIntoListWith(list, merger, iterables) {
	  var iters = [];
	  for (var ii = 0; ii < iterables.length; ii++) {
	    var iter = iterables[ii];
	    iter && iters.push(Iterable(iter));
	  }
	  var maxSize = Math.max.apply(Math, iters.map((function(s) {
	    return s.size || 0;
	  })));
	  if (maxSize > list.size) {
	    list = list.setSize(maxSize);
	  }
	  return mergeIntoCollectionWith(list, merger, iters);
	}
	function getTailOffset(size) {
	  return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	}
	var Stack = function Stack(value) {
	  return arguments.length === 0 ? emptyStack() : value && value.constructor === $Stack ? value : emptyStack().unshiftAll(value);
	};
	var $Stack = Stack;
	($traceurRuntime.createClass)(Stack, {
	  toString: function() {
	    return this.__toString('Stack [', ']');
	  },
	  get: function(index, notSetValue) {
	    var head = this._head;
	    while (head && index--) {
	      head = head.next;
	    }
	    return head ? head.value : notSetValue;
	  },
	  peek: function() {
	    return this._head && this._head.value;
	  },
	  push: function() {
	    if (arguments.length === 0) {
	      return this;
	    }
	    var newSize = this.size + arguments.length;
	    var head = this._head;
	    for (var ii = arguments.length - 1; ii >= 0; ii--) {
	      head = {
	        value: arguments[ii],
	        next: head
	      };
	    }
	    if (this.__ownerID) {
	      this.size = newSize;
	      this._head = head;
	      this.__hash = undefined;
	      this.__altered = true;
	      return this;
	    }
	    return makeStack(newSize, head);
	  },
	  pushAll: function(iter) {
	    iter = Iterable(iter);
	    if (iter.size === 0) {
	      return this;
	    }
	    var newSize = this.size;
	    var head = this._head;
	    iter.reverse().forEach((function(value) {
	      newSize++;
	      head = {
	        value: value,
	        next: head
	      };
	    }));
	    if (this.__ownerID) {
	      this.size = newSize;
	      this._head = head;
	      this.__hash = undefined;
	      this.__altered = true;
	      return this;
	    }
	    return makeStack(newSize, head);
	  },
	  pop: function() {
	    return this.slice(1);
	  },
	  unshift: function() {
	    return this.push.apply(this, arguments);
	  },
	  unshiftAll: function(iter) {
	    return this.pushAll(iter);
	  },
	  shift: function() {
	    return this.pop.apply(this, arguments);
	  },
	  clear: function() {
	    if (this.size === 0) {
	      return this;
	    }
	    if (this.__ownerID) {
	      this.size = 0;
	      this._head = undefined;
	      this.__hash = undefined;
	      this.__altered = true;
	      return this;
	    }
	    return emptyStack();
	  },
	  slice: function(begin, end) {
	    if (wholeSlice(begin, end, this.size)) {
	      return this;
	    }
	    var resolvedBegin = resolveBegin(begin, this.size);
	    var resolvedEnd = resolveEnd(end, this.size);
	    if (resolvedEnd !== this.size) {
	      return $traceurRuntime.superCall(this, $Stack.prototype, "slice", [begin, end]);
	    }
	    var newSize = this.size - resolvedBegin;
	    var head = this._head;
	    while (resolvedBegin--) {
	      head = head.next;
	    }
	    if (this.__ownerID) {
	      this.size = newSize;
	      this._head = head;
	      this.__hash = undefined;
	      this.__altered = true;
	      return this;
	    }
	    return makeStack(newSize, head);
	  },
	  __ensureOwner: function(ownerID) {
	    if (ownerID === this.__ownerID) {
	      return this;
	    }
	    if (!ownerID) {
	      this.__ownerID = ownerID;
	      this.__altered = false;
	      return this;
	    }
	    return makeStack(this.size, this._head, ownerID, this.__hash);
	  },
	  __iterate: function(fn, reverse) {
	    if (reverse) {
	      return this.toSeq().cacheResult.__iterate(fn, reverse);
	    }
	    var iterations = 0;
	    var node = this._head;
	    while (node) {
	      if (fn(node.value, iterations++, this) === false) {
	        break;
	      }
	      node = node.next;
	    }
	    return iterations;
	  },
	  __iterator: function(type, reverse) {
	    if (reverse) {
	      return this.toSeq().cacheResult().__iterator(type, reverse);
	    }
	    var iterations = 0;
	    var node = this._head;
	    return new Iterator((function() {
	      if (node) {
	        var value = node.value;
	        node = node.next;
	        return iteratorValue(type, iterations++, value);
	      }
	      return iteratorDone();
	    }));
	  }
	}, {of: function() {
	    return this(arguments);
	  }}, IndexedCollection);
	function isStack(maybeStack) {
	  return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	}
	Stack.isStack = isStack;
	var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';
	var StackPrototype = Stack.prototype;
	StackPrototype[IS_STACK_SENTINEL] = true;
	StackPrototype.withMutations = MapPrototype.withMutations;
	StackPrototype.asMutable = MapPrototype.asMutable;
	StackPrototype.asImmutable = MapPrototype.asImmutable;
	StackPrototype.wasAltered = MapPrototype.wasAltered;
	function makeStack(size, head, ownerID, hash) {
	  var map = Object.create(StackPrototype);
	  map.size = size;
	  map._head = head;
	  map.__ownerID = ownerID;
	  map.__hash = hash;
	  map.__altered = false;
	  return map;
	}
	var EMPTY_STACK;
	function emptyStack() {
	  return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	}
	var Set = function Set(value) {
	  return arguments.length === 0 ? emptySet() : value && value.constructor === $Set ? value : emptySet().union(value);
	};
	var $Set = Set;
	($traceurRuntime.createClass)(Set, {
	  toString: function() {
	    return this.__toString('Set {', '}');
	  },
	  has: function(value) {
	    return this._map.has(value);
	  },
	  add: function(value) {
	    var newMap = this._map.set(value, true);
	    if (this.__ownerID) {
	      this.size = newMap.size;
	      this._map = newMap;
	      return this;
	    }
	    return newMap === this._map ? this : makeSet(newMap);
	  },
	  remove: function(value) {
	    var newMap = this._map.remove(value);
	    if (this.__ownerID) {
	      this.size = newMap.size;
	      this._map = newMap;
	      return this;
	    }
	    return newMap === this._map ? this : newMap.size === 0 ? emptySet() : makeSet(newMap);
	  },
	  clear: function() {
	    if (this.size === 0) {
	      return this;
	    }
	    if (this.__ownerID) {
	      this.size = 0;
	      this._map.clear();
	      return this;
	    }
	    return emptySet();
	  },
	  union: function() {
	    var iters = arguments;
	    if (iters.length === 0) {
	      return this;
	    }
	    return this.withMutations((function(set) {
	      for (var ii = 0; ii < iters.length; ii++) {
	        Iterable(iters[ii]).forEach((function(value) {
	          return set.add(value);
	        }));
	      }
	    }));
	  },
	  intersect: function() {
	    for (var iters = [],
	        $__8 = 0; $__8 < arguments.length; $__8++)
	      iters[$__8] = arguments[$__8];
	    if (iters.length === 0) {
	      return this;
	    }
	    iters = iters.map((function(iter) {
	      return Iterable(iter);
	    }));
	    var originalSet = this;
	    return this.withMutations((function(set) {
	      originalSet.forEach((function(value) {
	        if (!iters.every((function(iter) {
	          return iter.contains(value);
	        }))) {
	          set.remove(value);
	        }
	      }));
	    }));
	  },
	  subtract: function() {
	    for (var iters = [],
	        $__9 = 0; $__9 < arguments.length; $__9++)
	      iters[$__9] = arguments[$__9];
	    if (iters.length === 0) {
	      return this;
	    }
	    iters = iters.map((function(iter) {
	      return Iterable(iter);
	    }));
	    var originalSet = this;
	    return this.withMutations((function(set) {
	      originalSet.forEach((function(value) {
	        if (iters.some((function(iter) {
	          return iter.contains(value);
	        }))) {
	          set.remove(value);
	        }
	      }));
	    }));
	  },
	  merge: function() {
	    return this.union.apply(this, arguments);
	  },
	  mergeWith: function(merger) {
	    for (var iters = [],
	        $__10 = 1; $__10 < arguments.length; $__10++)
	      iters[$__10 - 1] = arguments[$__10];
	    return this.union.apply(this, iters);
	  },
	  wasAltered: function() {
	    return this._map.wasAltered();
	  },
	  __iterate: function(fn, reverse) {
	    var $__0 = this;
	    return this._map.__iterate((function(_, k) {
	      return fn(k, k, $__0);
	    }), reverse);
	  },
	  __iterator: function(type, reverse) {
	    return this._map.map((function(_, k) {
	      return k;
	    })).__iterator(type, reverse);
	  },
	  __ensureOwner: function(ownerID) {
	    if (ownerID === this.__ownerID) {
	      return this;
	    }
	    var newMap = this._map.__ensureOwner(ownerID);
	    if (!ownerID) {
	      this.__ownerID = ownerID;
	      this._map = newMap;
	      return this;
	    }
	    return makeSet(newMap, ownerID);
	  }
	}, {
	  of: function() {
	    return this(arguments);
	  },
	  fromKeys: function(value) {
	    return this(KeyedSeq(value).flip());
	  }
	}, SetCollection);
	function isSet(maybeSet) {
	  return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	}
	Set.isSet = isSet;
	var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
	var SetPrototype = Set.prototype;
	SetPrototype[IS_SET_SENTINEL] = true;
	SetPrototype[DELETE] = SetPrototype.remove;
	SetPrototype.mergeDeep = SetPrototype.merge;
	SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	SetPrototype.withMutations = MapPrototype.withMutations;
	SetPrototype.asMutable = MapPrototype.asMutable;
	SetPrototype.asImmutable = MapPrototype.asImmutable;
	function makeSet(map, ownerID) {
	  var set = Object.create(SetPrototype);
	  set.size = map ? map.size : 0;
	  set._map = map;
	  set.__ownerID = ownerID;
	  return set;
	}
	var EMPTY_SET;
	function emptySet() {
	  return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	}
	var OrderedMap = function OrderedMap(value) {
	  return arguments.length === 0 ? emptyOrderedMap() : value && value.constructor === $OrderedMap ? value : emptyOrderedMap().merge(value);
	};
	var $OrderedMap = OrderedMap;
	($traceurRuntime.createClass)(OrderedMap, {
	  toString: function() {
	    return this.__toString('OrderedMap {', '}');
	  },
	  get: function(k, notSetValue) {
	    var index = this._map.get(k);
	    return index !== undefined ? this._list.get(index)[1] : notSetValue;
	  },
	  clear: function() {
	    if (this.size === 0) {
	      return this;
	    }
	    if (this.__ownerID) {
	      this.size = 0;
	      this._map.clear();
	      this._list.clear();
	      return this;
	    }
	    return emptyOrderedMap();
	  },
	  set: function(k, v) {
	    return updateOrderedMap(this, k, v);
	  },
	  remove: function(k) {
	    return updateOrderedMap(this, k, NOT_SET);
	  },
	  wasAltered: function() {
	    return this._map.wasAltered() || this._list.wasAltered();
	  },
	  __iterate: function(fn, reverse) {
	    var $__0 = this;
	    return this._list.__iterate((function(entry) {
	      return fn(entry[1], entry[0], $__0);
	    }), reverse);
	  },
	  __iterator: function(type, reverse) {
	    return this._list.fromEntrySeq().__iterator(type, reverse);
	  },
	  __ensureOwner: function(ownerID) {
	    if (ownerID === this.__ownerID) {
	      return this;
	    }
	    var newMap = this._map.__ensureOwner(ownerID);
	    var newList = this._list.__ensureOwner(ownerID);
	    if (!ownerID) {
	      this.__ownerID = ownerID;
	      this._map = newMap;
	      this._list = newList;
	      return this;
	    }
	    return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	  }
	}, {of: function() {
	    return this(arguments);
	  }}, Map);
	function isOrderedMap(maybeOrderedMap) {
	  return !!(maybeOrderedMap && maybeOrderedMap[IS_ORDERED_MAP_SENTINEL]);
	}
	OrderedMap.isOrderedMap = isOrderedMap;
	var IS_ORDERED_MAP_SENTINEL = '@@__IMMUTABLE_ORDERED_MAP__@@';
	OrderedMap.prototype[IS_ORDERED_MAP_SENTINEL] = true;
	OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
	function makeOrderedMap(map, list, ownerID, hash) {
	  var omap = Object.create(OrderedMap.prototype);
	  omap.size = map ? map.size : 0;
	  omap._map = map;
	  omap._list = list;
	  omap.__ownerID = ownerID;
	  omap.__hash = hash;
	  return omap;
	}
	var EMPTY_ORDERED_MAP;
	function emptyOrderedMap() {
	  return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	}
	function updateOrderedMap(omap, k, v) {
	  var map = omap._map;
	  var list = omap._list;
	  var i = map.get(k);
	  var has = i !== undefined;
	  var removed = v === NOT_SET;
	  if ((!has && removed) || (has && v === list.get(i)[1])) {
	    return omap;
	  }
	  if (!has) {
	    i = list.size;
	  }
	  var newMap = removed ? map.remove(k) : has ? map : map.set(k, i);
	  var newList = removed ? list.remove(i) : list.set(i, [k, v]);
	  if (omap.__ownerID) {
	    omap.size = newMap.size;
	    omap._map = newMap;
	    omap._list = newList;
	    omap.__hash = undefined;
	    return omap;
	  }
	  return makeOrderedMap(newMap, newList);
	}
	var Record = function Record(defaultValues, name) {
	  var RecordType = function(values) {
	    if (!(this instanceof RecordType)) {
	      return new RecordType(values);
	    }
	    this._map = Map(values);
	  };
	  var keys = Object.keys(defaultValues);
	  var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	  RecordTypePrototype.constructor = RecordType;
	  name && (RecordTypePrototype._name = name);
	  RecordTypePrototype._defaultValues = defaultValues;
	  RecordTypePrototype._keys = keys;
	  RecordTypePrototype.size = keys.length;
	  try {
	    Iterable(defaultValues).forEach((function(_, key) {
	      Object.defineProperty(RecordType.prototype, key, {
	        get: function() {
	          return this.get(key);
	        },
	        set: function(value) {
	          invariant(this.__ownerID, 'Cannot set on an immutable record.');
	          this.set(key, value);
	        }
	      });
	    }));
	  } catch (error) {}
	  return RecordType;
	};
	($traceurRuntime.createClass)(Record, {
	  toString: function() {
	    return this.__toString(this._name + ' {', '}');
	  },
	  has: function(k) {
	    return this._defaultValues.hasOwnProperty(k);
	  },
	  get: function(k, notSetValue) {
	    if (notSetValue !== undefined && !this.has(k)) {
	      return notSetValue;
	    }
	    return this._map.get(k, this._defaultValues[k]);
	  },
	  clear: function() {
	    if (this.__ownerID) {
	      this._map.clear();
	      return this;
	    }
	    var SuperRecord = Object.getPrototypeOf(this).constructor;
	    return SuperRecord._empty || (SuperRecord._empty = makeRecord(this, emptyMap()));
	  },
	  set: function(k, v) {
	    if (!this.has(k)) {
	      throw new Error('Cannot set unknown key "' + k + '" on ' + this._name);
	    }
	    var newMap = this._map.set(k, v);
	    if (this.__ownerID || newMap === this._map) {
	      return this;
	    }
	    return makeRecord(this, newMap);
	  },
	  remove: function(k) {
	    if (!this.has(k)) {
	      return this;
	    }
	    var newMap = this._map.remove(k);
	    if (this.__ownerID || newMap === this._map) {
	      return this;
	    }
	    return makeRecord(this, newMap);
	  },
	  keys: function() {
	    return this._map.keys();
	  },
	  values: function() {
	    return this._map.values();
	  },
	  entries: function() {
	    return this._map.entries();
	  },
	  wasAltered: function() {
	    return this._map.wasAltered();
	  },
	  __iterator: function(type, reverse) {
	    return this._map.__iterator(type, reverse);
	  },
	  __iterate: function(fn, reverse) {
	    var $__0 = this;
	    return Iterable(this._defaultValues).map((function(_, k) {
	      return $__0.get(k);
	    })).__iterate(fn, reverse);
	  },
	  __ensureOwner: function(ownerID) {
	    if (ownerID === this.__ownerID) {
	      return this;
	    }
	    var newMap = this._map && this._map.__ensureOwner(ownerID);
	    if (!ownerID) {
	      this.__ownerID = ownerID;
	      this._map = newMap;
	      return this;
	    }
	    return makeRecord(this, newMap, ownerID);
	  }
	}, {}, KeyedCollection);
	var RecordPrototype = Record.prototype;
	RecordPrototype._name = 'Record';
	RecordPrototype[DELETE] = RecordPrototype.remove;
	RecordPrototype.merge = MapPrototype.merge;
	RecordPrototype.mergeWith = MapPrototype.mergeWith;
	RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	RecordPrototype.update = MapPrototype.update;
	RecordPrototype.updateIn = MapPrototype.updateIn;
	RecordPrototype.withMutations = MapPrototype.withMutations;
	RecordPrototype.asMutable = MapPrototype.asMutable;
	RecordPrototype.asImmutable = MapPrototype.asImmutable;
	function makeRecord(likeRecord, map, ownerID) {
	  var record = Object.create(Object.getPrototypeOf(likeRecord));
	  record._map = map;
	  record.__ownerID = ownerID;
	  return record;
	}
	var Range = function Range(start, end, step) {
	  if (!(this instanceof $Range)) {
	    return new $Range(start, end, step);
	  }
	  invariant(step !== 0, 'Cannot step a Range by 0');
	  start = start || 0;
	  if (end === undefined) {
	    end = Infinity;
	  }
	  if (start === end && __EMPTY_RANGE) {
	    return __EMPTY_RANGE;
	  }
	  step = step === undefined ? 1 : Math.abs(step);
	  if (end < start) {
	    step = -step;
	  }
	  this._start = start;
	  this._end = end;
	  this._step = step;
	  this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	};
	var $Range = Range;
	($traceurRuntime.createClass)(Range, {
	  toString: function() {
	    if (this.size === 0) {
	      return 'Range []';
	    }
	    return 'Range [ ' + this._start + '...' + this._end + (this._step > 1 ? ' by ' + this._step : '') + ' ]';
	  },
	  get: function(index, notSetValue) {
	    return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
	  },
	  contains: function(searchValue) {
	    var possibleIndex = (searchValue - this._start) / this._step;
	    return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
	  },
	  slice: function(begin, end) {
	    if (wholeSlice(begin, end, this.size)) {
	      return this;
	    }
	    begin = resolveBegin(begin, this.size);
	    end = resolveEnd(end, this.size);
	    if (end <= begin) {
	      return __EMPTY_RANGE;
	    }
	    return new $Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	  },
	  indexOf: function(searchValue) {
	    var offsetValue = searchValue - this._start;
	    if (offsetValue % this._step === 0) {
	      var index = offsetValue / this._step;
	      if (index >= 0 && index < this.size) {
	        return index;
	      }
	    }
	    return -1;
	  },
	  lastIndexOf: function(searchValue) {
	    return this.indexOf(searchValue);
	  },
	  take: function(amount) {
	    return this.slice(0, Math.max(0, amount));
	  },
	  skip: function(amount) {
	    return this.slice(Math.max(0, amount));
	  },
	  __iterate: function(fn, reverse) {
	    var maxIndex = this.size - 1;
	    var step = this._step;
	    var value = reverse ? this._start + maxIndex * step : this._start;
	    for (var ii = 0; ii <= maxIndex; ii++) {
	      if (fn(value, ii, this) === false) {
	        return ii + 1;
	      }
	      value += reverse ? -step : step;
	    }
	    return ii;
	  },
	  __iterator: function(type, reverse) {
	    var maxIndex = this.size - 1;
	    var step = this._step;
	    var value = reverse ? this._start + maxIndex * step : this._start;
	    var ii = 0;
	    return new Iterator((function() {
	      var v = value;
	      value += reverse ? -step : step;
	      return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	    }));
	  },
	  __deepEquals: function(other) {
	    return other instanceof $Range ? this._start === other._start && this._end === other._end && this._step === other._step : $traceurRuntime.superCall(this, $Range.prototype, "__deepEquals", [other]);
	  }
	}, {}, IndexedSeq);
	var RangePrototype = Range.prototype;
	RangePrototype.__toJS = RangePrototype.toArray;
	RangePrototype.first = ListPrototype.first;
	RangePrototype.last = ListPrototype.last;
	var __EMPTY_RANGE = Range(0, 0);
	var Repeat = function Repeat(value, times) {
	  if (times <= 0 && EMPTY_REPEAT) {
	    return EMPTY_REPEAT;
	  }
	  if (!(this instanceof $Repeat)) {
	    return new $Repeat(value, times);
	  }
	  this._value = value;
	  this.size = times === undefined ? Infinity : Math.max(0, times);
	  if (this.size === 0) {
	    EMPTY_REPEAT = this;
	  }
	};
	var $Repeat = Repeat;
	($traceurRuntime.createClass)(Repeat, {
	  toString: function() {
	    if (this.size === 0) {
	      return 'Repeat []';
	    }
	    return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	  },
	  get: function(index, notSetValue) {
	    return this.has(index) ? this._value : notSetValue;
	  },
	  contains: function(searchValue) {
	    return is(this._value, searchValue);
	  },
	  slice: function(begin, end) {
	    var size = this.size;
	    return wholeSlice(begin, end, size) ? this : new $Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	  },
	  reverse: function() {
	    return this;
	  },
	  indexOf: function(searchValue) {
	    if (is(this._value, searchValue)) {
	      return 0;
	    }
	    return -1;
	  },
	  lastIndexOf: function(searchValue) {
	    if (is(this._value, searchValue)) {
	      return this.size;
	    }
	    return -1;
	  },
	  __iterate: function(fn, reverse) {
	    for (var ii = 0; ii < this.size; ii++) {
	      if (fn(this._value, ii, this) === false) {
	        return ii + 1;
	      }
	    }
	    return ii;
	  },
	  __iterator: function(type, reverse) {
	    var $__0 = this;
	    var ii = 0;
	    return new Iterator((function() {
	      return ii < $__0.size ? iteratorValue(type, ii++, $__0._value) : iteratorDone();
	    }));
	  },
	  __deepEquals: function(other) {
	    return other instanceof $Repeat ? is(this._value, other._value) : $traceurRuntime.superCall(this, $Repeat.prototype, "__deepEquals", [other]);
	  }
	}, {}, IndexedSeq);
	var RepeatPrototype = Repeat.prototype;
	RepeatPrototype.last = RepeatPrototype.first;
	RepeatPrototype.has = RangePrototype.has;
	RepeatPrototype.take = RangePrototype.take;
	RepeatPrototype.skip = RangePrototype.skip;
	RepeatPrototype.__toJS = RangePrototype.__toJS;
	var EMPTY_REPEAT;
	function fromJS(json, converter) {
	  if (converter) {
	    return _fromJSWith(converter, json, '', {'': json});
	  }
	  return _fromJSDefault(json);
	}
	function _fromJSWith(converter, json, key, parentJSON) {
	  if (Array.isArray(json) || isPlainObj(json)) {
	    return converter.call(parentJSON, key, Iterable(json).map((function(v, k) {
	      return _fromJSWith(converter, v, k, json);
	    })));
	  }
	  return json;
	}
	function _fromJSDefault(json) {
	  if (json && typeof json === 'object') {
	    if (Array.isArray(json)) {
	      return Iterable(json).map(_fromJSDefault).toList();
	    }
	    if (json.constructor === Object) {
	      return Iterable(json).map(_fromJSDefault).toMap();
	    }
	  }
	  return json;
	}
	var Immutable = {
	  Iterable: Iterable,
	  Seq: Seq,
	  Collection: Collection,
	  Map: Map,
	  List: List,
	  Stack: Stack,
	  Set: Set,
	  OrderedMap: OrderedMap,
	  Record: Record,
	  Range: Range,
	  Repeat: Repeat,
	  is: is,
	  fromJS: fromJS
	};
	
	  return Immutable;
	}
	true ? module.exports = universalModule() :
	  typeof define === 'function' && define.amd ? define(universalModule) :
	    Immutable = universalModule();


/***/ },
/* 29 */
/*!************************!*\
  !*** ./~/hljs/hljs.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	
	/*
	Core highlighting function. Accepts a string with the code to highlight and 
	optionaly a language name. Returns an object with the following properties:
	
	- language (detected language)
	- relevance (int)
	- keyword_count (int)
	- value (an HTML string with highlighting markup)
	- second (object with the same structure for second-best heuristically
	  detected language, may be absent)
	
	*/
	
	var hljs = function(value, language_name) {
	  if(!language_name){
	    var result = {
	      keyword_count: 0,
	      relevance: 0,
	      value: hljs.escape(value)
	    };
	    var second = result;
	    for (var key in hljs.LANGUAGES) {
	      if (!hljs.LANGUAGES.hasOwnProperty(key))
	        continue;
	      var current = hljs(value, key);
	      current.language = key;
	      if (current.keyword_count + current.relevance > second.keyword_count + second.relevance) {
	        second = current;
	      }
	      if (current.keyword_count + current.relevance > result.keyword_count + result.relevance) {
	        second = result;
	        result = current;
	      }
	    }
	    if (second.language) {
	      result.second = second;
	    }
	    return result;
	  }
	
	  function subMode(lexem, mode) {
	    for (var i = 0; i < mode.contains.length; i++) {
	      var match = mode.contains[i].beginRe.exec(lexem);
	      if (match && match.index == 0) {
	        return mode.contains[i];
	      }
	    }
	  }
	
	  function endOfMode(mode_index, lexem) {
	    if (modes[mode_index].end && modes[mode_index].endRe.test(lexem))
	      return 1;
	    if (modes[mode_index].endsWithParent) {
	      var level = endOfMode(mode_index - 1, lexem);
	      return level ? level + 1 : 0;
	    }
	    return 0;
	  }
	
	  function isIllegal(lexem, mode) {
	    return mode.illegal && mode.illegalRe.test(lexem);
	  }
	
	  function compileTerminators(mode, language) {
	    var terminators = [];
	
	    for (var i = 0; i < mode.contains.length; i++) {
	      terminators.push(mode.contains[i].begin);
	    }
	
	    var index = modes.length - 1;
	    do {
	      if (modes[index].end) {
	        terminators.push(modes[index].end);
	      }
	      index--;
	    } while (modes[index + 1].endsWithParent);
	
	    if (mode.illegal) {
	      terminators.push(mode.illegal);
	    }
	
	    return terminators.length ? langRe(language, terminators.join('|'), true) : null;
	  }
	
	  function eatModeChunk(value, index) {
	    var mode = modes[modes.length - 1];
	    if (mode.terminators === undefined) {
	      mode.terminators = compileTerminators(mode, language);
	    }
	    var match;
	    if (mode.terminators) {
	      mode.terminators.lastIndex = index;
	      match = mode.terminators.exec(value);
	    }
	    return match ? [value.substr(index, match.index - index), match[0], false] : [value.substr(index), '', true];
	  }
	
	  function keywordMatch(mode, match) {
	    var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
	    var value = mode.keywords[match_str];
	    if (value && value instanceof Array)
	      return value;
	    return false;
	  }
	
	  function processKeywords(buffer, mode) {
	    buffer = hljs.escape(buffer);
	    if (!mode.keywords)
	      return buffer;
	    var result = '';
	    var last_index = 0;
	    mode.lexemsRe.lastIndex = 0;
	    var match = mode.lexemsRe.exec(buffer);
	    while (match) {
	      result += buffer.substr(last_index, match.index - last_index);
	      var keyword_match = keywordMatch(mode, match);
	      if (keyword_match) {
	        keyword_count += keyword_match[1];
	        result += '<span class="'+ keyword_match[0] +'">' + match[0] + '</span>';
	      } else {
	        result += match[0];
	      }
	      last_index = mode.lexemsRe.lastIndex;
	      match = mode.lexemsRe.exec(buffer);
	    }
	    return result + buffer.substr(last_index, buffer.length - last_index);
	  }
	
	  function processSubLanguage(buffer, mode) {
	    var result;
	    if (mode.subLanguage == '') {
	      result = hljs(buffer);
	    } else {
	      result = hljs(buffer, mode.subLanguage);
	    }
	    // Counting embedded language score towards the host language may be disabled
	    // with zeroing the containing mode relevance. Usecase in point is Markdown that
	    // allows XML everywhere and makes every XML snippet to have a much larger Markdown
	    // score.
	    if (mode.relevance > 0) {
	      keyword_count += result.keyword_count;
	      relevance += result.relevance;
	    }
	    return '<span class="' + result.language  + '">' + result.value + '</span>';
	  }
	
	  function processBuffer(buffer, mode) {
	    if (mode.subLanguage && hljs.LANGUAGES[mode.subLanguage] || mode.subLanguage == '') {
	      return processSubLanguage(buffer, mode);
	    } else {
	      return processKeywords(buffer, mode);
	    }
	  }
	
	  function startNewMode(mode, lexem) {
	    var markup = mode.className?'<span class="' + mode.className + '">':'';
	    if (mode.returnBegin) {
	      result += markup;
	      mode.buffer = '';
	    } else if (mode.excludeBegin) {
	      result += hljs.escape(lexem) + markup;
	      mode.buffer = '';
	    } else {
	      result += markup;
	      mode.buffer = lexem;
	    }
	    modes.push(mode);
	    relevance += mode.relevance;
	  }
	
	  function processModeInfo(buffer, lexem, end) {
	    var current_mode = modes[modes.length - 1];
	    if (end) {
	      result += processBuffer(current_mode.buffer + buffer, current_mode);
	      return false;
	    }
	
	    var new_mode = subMode(lexem, current_mode);
	    if (new_mode) {
	      result += processBuffer(current_mode.buffer + buffer, current_mode);
	      startNewMode(new_mode, lexem);
	      return new_mode.returnBegin;
	    }
	
	    var end_level = endOfMode(modes.length - 1, lexem);
	    if (end_level) {
	      var markup = current_mode.className?'</span>':'';
	      if (current_mode.returnEnd) {
	        result += processBuffer(current_mode.buffer + buffer, current_mode) + markup;
	      } else if (current_mode.excludeEnd) {
	        result += processBuffer(current_mode.buffer + buffer, current_mode) + markup + hljs.escape(lexem);
	      } else {
	        result += processBuffer(current_mode.buffer + buffer + lexem, current_mode) + markup;
	      }
	      while (end_level > 1) {
	        markup = modes[modes.length - 2].className?'</span>':'';
	        result += markup;
	        end_level--;
	        modes.length--;
	      }
	      var last_ended_mode = modes[modes.length - 1];
	      modes.length--;
	      modes[modes.length - 1].buffer = '';
	      if (last_ended_mode.starts) {
	        startNewMode(last_ended_mode.starts, '');
	      }
	      return current_mode.returnEnd;
	    }
	
	    if (isIllegal(lexem, current_mode))
	      throw 'Illegal';
	  }
	    
	  function langRe(language, value, global) {
	    return RegExp(
	      value,
	      'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
	    );
	  }
	
	  function compileMode(mode, language, is_default) {
	    if (mode.compiled)
	      return;
	
	    var keywords = []; // used later with beginWithKeyword but filled as a side-effect of keywords compilation
	    if (mode.keywords) {
	      var compiled_keywords = {};
	
	      function flatten(className, str) {
	        var group = str.split(' ');
	        for (var i = 0; i < group.length; i++) {
	          var pair = group[i].split('|');
	          compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
	          keywords.push(pair[0]);
	        }
	      }
	
	      mode.lexemsRe = langRe(language, mode.lexems || hljs.IDENT_RE, true);
	      if (typeof mode.keywords == 'string') { // string
	        flatten('keyword', mode.keywords)
	      } else {
	        for (var className in mode.keywords) {
	          if (!mode.keywords.hasOwnProperty(className))
	            continue;
	          flatten(className, mode.keywords[className]);
	        }
	      }
	      mode.keywords = compiled_keywords;
	    }
	    if (!is_default) {
	      if (mode.beginWithKeyword) {
	        mode.begin = '\\b(' + keywords.join('|') + ')\\s';
	      }
	      mode.beginRe = langRe(language, mode.begin ? mode.begin : '\\B|\\b');
	      if (!mode.end && !mode.endsWithParent)
	        mode.end = '\\B|\\b';
	      if (mode.end)
	        mode.endRe = langRe(language, mode.end);
	    }
	    if (mode.illegal)
	      mode.illegalRe = langRe(language, mode.illegal);
	    if (mode.relevance === undefined)
	      mode.relevance = 1;
	    if (!mode.contains) {
	      mode.contains = [];
	    }
	    // compiled flag is set before compiling submodes to avoid self-recursion
	    // (see lisp where quoted_list contains quoted_list)
	    mode.compiled = true;
	    for (var i = 0; i < mode.contains.length; i++) {
	      if (mode.contains[i] == 'self') {
	        mode.contains[i] = mode;
	      }
	      compileMode(mode.contains[i], language, false);
	    }
	    if (mode.starts) {
	      compileMode(mode.starts, language, false);
	    }
	  }
	
	  var language = hljs.LANGUAGES[language_name];
	  var modes = [language.defaultMode];
	  var relevance = 0;
	  var keyword_count = 0;
	  var result = '';
	  compileMode(language.defaultMode, language, true);    
	  try {
	    var mode_info, index = 0;
	    language.defaultMode.buffer = '';
	    do {
	      mode_info = eatModeChunk(value, index);
	      var return_lexem = processModeInfo(mode_info[0], mode_info[1], mode_info[2]);
	      index += mode_info[0].length;
	      if (!return_lexem) {
	        index += mode_info[1].length;
	      }
	    } while (!mode_info[2]);
	    if(modes.length > 2 || (modes.length == 2 && !modes[1].endsWithParent))
	      throw 'Illegal';
	    return {
	      language: language_name,
	      relevance: relevance,
	      keyword_count: keyword_count,
	      value: result
	    };
	  } catch (e) {
	    if (e == 'Illegal') {
	      return {
	        language: language_name,
	        relevance: 0,
	        keyword_count: 0,
	        value: hljs.escape(value)
	      };
	    } else {
	      throw e;
	    }
	  }
	}
	
	hljs.LANGUAGES = {};
	
	
	// Common regexps
	hljs.IDENT_RE = '[a-zA-Z][a-zA-Z0-9_]*';
	hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_]*';
	hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
	hljs.C_NUMBER_RE = '\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
	hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
	hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';
	hljs.EOF_RE = '(?![\\s\\S])';
	
	// Common modes
	hljs.BACKSLASH_ESCAPE = {
	  begin: '\\\\.', relevance: 0
	};
	hljs.APOS_STRING_MODE = {
	  className: 'string',
	  begin: '\'', end: '\'',
	  illegal: '\\n',
	  contains: [hljs.BACKSLASH_ESCAPE],
	  relevance: 0
	};
	hljs.QUOTE_STRING_MODE = {
	  className: 'string',
	  begin: '"', end: '"',
	  illegal: '\\n',
	  contains: [hljs.BACKSLASH_ESCAPE],
	  relevance: 0
	};
	hljs.C_LINE_COMMENT_MODE = {
	  className: 'comment',
	  begin: '//', end: '$'
	};
	hljs.C_BLOCK_COMMENT_MODE = {
	  className: 'comment',
	  begin: '/\\*', end: '\\*/'
	};
	hljs.HASH_COMMENT_MODE = {
	  className: 'comment',
	  begin: '#', end: '$'
	};
	hljs.NUMBER_MODE = {
	  className: 'number',
	  begin: hljs.NUMBER_RE,
	  relevance: 0
	};
	hljs.C_NUMBER_MODE = {
	  className: 'number',
	  begin: hljs.C_NUMBER_RE,
	  relevance: 0
	};
	hljs.BINARY_NUMBER_MODE = {
	  className: 'number',
	  begin: hljs.BINARY_NUMBER_RE,
	  relevance: 0
	};
	
	// Utility functions
	hljs.escape = function(value) {
	  return value.replace(/&/gm, '&amp;').replace(/</gm, '&lt;');
	}
	
	hljs.inherit = function(parent, obj) {
	  var result = {}
	  for (var key in parent)
	    result[key] = parent[key];
	  if (obj)
	    for (var key in obj)
	       result[key] = obj[key];
	  return result;
	}
	module.exports = hljs;
	/*
	Language: Python
	*/
	
	hljs.LANGUAGES.python = function() {
	  var STRINGS = [
	    {
	      className: 'string',
	      begin: '(u|b)?r?\'\'\'', end: '\'\'\'',
	      relevance: 10
	    },
	    {
	      className: 'string',
	      begin: '(u|b)?r?"""', end: '"""',
	      relevance: 10
	    },
	    {
	      className: 'string',
	      begin: '(u|r|ur)\'', end: '\'',
	      contains: [hljs.BACKSLASH_ESCAPE],
	      relevance: 10
	    },
	    {
	      className: 'string',
	      begin: '(u|r|ur)"', end: '"',
	      contains: [hljs.BACKSLASH_ESCAPE],
	      relevance: 10
	    },
	    {
	      className: 'string',
	      begin: '(b|br)\'', end: '\'',
	      contains: [hljs.BACKSLASH_ESCAPE]
	    },
	    {
	      className: 'string',
	      begin: '(b|br)"', end: '"',
	      contains: [hljs.BACKSLASH_ESCAPE]
	    }
	  ].concat([
	    hljs.APOS_STRING_MODE,
	    hljs.QUOTE_STRING_MODE
	  ]);
	  var TITLE = {
	    className: 'title', begin: hljs.UNDERSCORE_IDENT_RE
	  };
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)',
	    contains: ['self', hljs.C_NUMBER_MODE].concat(STRINGS)
	  };
	  var FUNC_CLASS_PROTO = {
	    beginWithKeyword: true, end: ':',
	    illegal: '[${]',
	    contains: [TITLE, PARAMS],
	    relevance: 10
	  };
	
	  return {
	    defaultMode: {
	      keywords: {
	        keyword:
	          'and elif is global as in if from raise for except finally print import pass return ' +
	          'exec else break not with class assert yield try while continue del or def lambda ' +
	          'nonlocal|10',
	        built_in:
	          'None True False Ellipsis NotImplemented'
	      },
	      illegal: '(</|->|\\?)',
	      contains: STRINGS.concat([
	        hljs.HASH_COMMENT_MODE,
	        hljs.inherit(FUNC_CLASS_PROTO, {className: 'function', keywords: 'def'}),
	        hljs.inherit(FUNC_CLASS_PROTO, {className: 'class', keywords: 'class'}),
	        hljs.C_NUMBER_MODE,
	        {
	          className: 'decorator',
	          begin: '@', end: '$'
	        }
	      ])
	    }
	  };
	}();
	/*
	Language: Python profile
	Description: Python profiler results
	Author: Brian Beck <exogen@gmail.com>
	*/
	
	hljs.LANGUAGES.profile = {
	  defaultMode: {
	    contains: [
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'builtin',
	        begin: '{', end: '}$',
	        excludeBegin: true, excludeEnd: true,
	        contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE],
	        relevance: 0
	      },
	      {
	        className: 'filename',
	        begin: '[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}', end: ':',
	        excludeEnd: true
	      },
	      {
	        className: 'header',
	        begin: '(ncalls|tottime|cumtime)', end: '$',
	        keywords: 'ncalls tottime|10 cumtime|10 filename',
	        relevance: 10
	      },
	      {
	        className: 'summary',
	        begin: 'function calls', end: '$',
	        contains: [hljs.C_NUMBER_MODE],
	        relevance: 10
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'function',
	        begin: '\\(', end: '\\)$',
	        contains: [{
	          className: 'title',
	          begin: hljs.UNDERSCORE_IDENT_RE,
	          relevance: 0
	        }],
	        relevance: 0
	      }
	    ]
	  }
	};
	/*
	Language: Ruby
	Author: Anton Kovalyov <anton@kovalyov.net>
	Contributors: Peter Leonov <gojpeg@yandex.ru>, Vasily Polovnyov <vast@whiteants.net>, Loren Segal <lsegal@soen.ca>
	*/
	
	hljs.LANGUAGES.ruby = function(){
	  var RUBY_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?';
	  var RUBY_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
	  var RUBY_KEYWORDS =
	    'and false then defined module in return redo if BEGIN retry end for true self when ' +
	    'next until do begin unless END rescue nil else break undef not super class case ' +
	    'require yield alias while ensure elsif or def';
	  var YARDOCTAG = {
	    className: 'yardoctag',
	    begin: '@[A-Za-z]+'
	  };
	  var COMMENTS = [
	    {
	      className: 'comment',
	      begin: '#', end: '$',
	      contains: [YARDOCTAG]
	    },
	    {
	      className: 'comment',
	      begin: '^\\=begin', end: '^\\=end',
	      contains: [YARDOCTAG],
	      relevance: 10
	    },
	    {
	      className: 'comment',
	      begin: '^__END__', end: '\\n$'
	    }
	  ];
	  var SUBST = {
	    className: 'subst',
	    begin: '#\\{', end: '}',
	    lexems: RUBY_IDENT_RE,
	    keywords: RUBY_KEYWORDS
	  };
	  var STR_CONTAINS = [hljs.BACKSLASH_ESCAPE, SUBST];
	  var STRINGS = [
	    {
	      className: 'string',
	      begin: '\'', end: '\'',
	      contains: STR_CONTAINS,
	      relevance: 0
	    },
	    {
	      className: 'string',
	      begin: '"', end: '"',
	      contains: STR_CONTAINS,
	      relevance: 0
	    },
	    {
	      className: 'string',
	      begin: '%[qw]?\\(', end: '\\)',
	      contains: STR_CONTAINS,
	      relevance: 10
	    },
	    {
	      className: 'string',
	      begin: '%[qw]?\\[', end: '\\]',
	      contains: STR_CONTAINS,
	      relevance: 10
	    },
	    {
	      className: 'string',
	      begin: '%[qw]?{', end: '}',
	      contains: STR_CONTAINS,
	      relevance: 10
	    },
	    {
	      className: 'string',
	      begin: '%[qw]?<', end: '>',
	      contains: STR_CONTAINS,
	      relevance: 10
	    },
	    {
	      className: 'string',
	      begin: '%[qw]?/', end: '/',
	      contains: STR_CONTAINS,
	      relevance: 10
	    },
	    {
	      className: 'string',
	      begin: '%[qw]?%', end: '%',
	      contains: STR_CONTAINS,
	      relevance: 10
	    },
	    {
	      className: 'string',
	      begin: '%[qw]?-', end: '-',
	      contains: STR_CONTAINS,
	      relevance: 10
	    },
	    {
	      className: 'string',
	      begin: '%[qw]?\\|', end: '\\|',
	      contains: STR_CONTAINS,
	      relevance: 10
	    }
	  ];
	  var FUNCTION = {
	    className: 'function',
	    begin: '\\bdef\\s+', end: ' |$|;',
	    lexems: RUBY_IDENT_RE,
	    keywords: RUBY_KEYWORDS,
	    contains: [
	      {
	        className: 'title',
	        begin: RUBY_METHOD_RE,
	        lexems: RUBY_IDENT_RE,
	        keywords: RUBY_KEYWORDS
	      },
	      {
	        className: 'params',
	        begin: '\\(', end: '\\)',
	        lexems: RUBY_IDENT_RE,
	        keywords: RUBY_KEYWORDS
	      }
	    ].concat(COMMENTS)
	  };
	  var IDENTIFIER = {
	    className: 'identifier',
	    begin: RUBY_IDENT_RE,
	    lexems: RUBY_IDENT_RE,
	    keywords: RUBY_KEYWORDS,
	    relevance: 0
	  };
	
	  var RUBY_DEFAULT_CONTAINS = COMMENTS.concat(STRINGS.concat([
	    {
	      className: 'class',
	      beginWithKeyword: true, end: '$|;',
	      keywords: 'class module',
	      contains: [
	        {
	          className: 'title',
	          begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?',
	          relevance: 0
	        },
	        {
	          className: 'inheritance',
	          begin: '<\\s*',
	          contains: [{
	            className: 'parent',
	            begin: '(' + hljs.IDENT_RE + '::)?' + hljs.IDENT_RE
	          }]
	        }
	      ].concat(COMMENTS)
	    },
	    FUNCTION,
	    {
	      className: 'constant',
	      begin: '(::)?([A-Z]\\w*(::)?)+',
	      relevance: 0
	    },
	    {
	      className: 'symbol',
	      begin: ':',
	      contains: STRINGS.concat([IDENTIFIER]),
	      relevance: 0
	    },
	    {
	      className: 'number',
	      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	      relevance: 0
	    },
	    {
	      className: 'number',
	      begin: '\\?\\w'
	    },
	    {
	      className: 'variable',
	      begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))'
	    },
	    IDENTIFIER,
	    { // regexp container
	      begin: '(' + hljs.RE_STARTERS_RE + ')\\s*',
	      contains: COMMENTS.concat([
	        {
	          className: 'regexp',
	          begin: '/', end: '/[a-z]*',
	          illegal: '\\n',
	          contains: [hljs.BACKSLASH_ESCAPE]
	        }
	      ]),
	      relevance: 0
	    }
	  ]));
	  SUBST.contains = RUBY_DEFAULT_CONTAINS;
	  FUNCTION.contains[1].contains = RUBY_DEFAULT_CONTAINS;
	
	  return {
	    defaultMode: {
	      lexems: RUBY_IDENT_RE,
	      keywords: RUBY_KEYWORDS,
	      contains: RUBY_DEFAULT_CONTAINS
	    }
	  };
	}();
	/*
	Language: Perl
	Author: Peter Leonov <gojpeg@yandex.ru>
	*/
	
	hljs.LANGUAGES.perl = function(){
	  var PERL_KEYWORDS = 'getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ' +
	    'ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime ' +
	    'readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qq' +
	    'fileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent ' +
	    'shutdown dump chomp connect getsockname die socketpair close flock exists index shmget' +
	    'sub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr ' +
	    'unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 ' +
	    'getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline ' +
	    'endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand ' +
	    'mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink ' +
	    'getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr ' +
	    'untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link ' +
	    'getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller ' +
	    'lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and ' +
	    'sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 ' +
	    'chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach ' +
	    'tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedir' +
	    'ioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe ' +
	    'atan2 getgrent exp time push setgrent gt lt or ne m|0';
	  var SUBST = {
	    className: 'subst',
	    begin: '[$@]\\{', end: '\\}',
	    keywords: PERL_KEYWORDS,
	    relevance: 10
	  };
	  var VAR1 = {
	    className: 'variable',
	    begin: '\\$\\d'
	  };
	  var VAR2 = {
	    className: 'variable',
	    begin: '[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)'
	  };
	  var STRING_CONTAINS = [hljs.BACKSLASH_ESCAPE, SUBST, VAR1, VAR2];
	  var METHOD = {
	    begin: '->',
	    contains: [
	      {begin: hljs.IDENT_RE},
	      {begin: '{', end: '}'}
	    ]
	  };
	  var COMMENT = {
	    className: 'comment',
	    begin: '^(__END__|__DATA__)', end: '\\n$',
	    relevance: 5
	  }
	  var PERL_DEFAULT_CONTAINS = [
	    VAR1, VAR2,
	    hljs.HASH_COMMENT_MODE,
	    COMMENT,
	    {
	      className: 'comment',
	      begin: '^\\=\\w', end: '\\=cut', endsWithParent: true
	    },
	    METHOD,
	    {
	      className: 'string',
	      begin: 'q[qwxr]?\\s*\\(', end: '\\)',
	      contains: STRING_CONTAINS,
	      relevance: 5
	    },
	    {
	      className: 'string',
	      begin: 'q[qwxr]?\\s*\\[', end: '\\]',
	      contains: STRING_CONTAINS,
	      relevance: 5
	    },
	    {
	      className: 'string',
	      begin: 'q[qwxr]?\\s*\\{', end: '\\}',
	      contains: STRING_CONTAINS,
	      relevance: 5
	    },
	    {
	      className: 'string',
	      begin: 'q[qwxr]?\\s*\\|', end: '\\|',
	      contains: STRING_CONTAINS,
	      relevance: 5
	    },
	    {
	      className: 'string',
	      begin: 'q[qwxr]?\\s*\\<', end: '\\>',
	      contains: STRING_CONTAINS,
	      relevance: 5
	    },
	    {
	      className: 'string',
	      begin: 'qw\\s+q', end: 'q',
	      contains: STRING_CONTAINS,
	      relevance: 5
	    },
	    {
	      className: 'string',
	      begin: '\'', end: '\'',
	      contains: [hljs.BACKSLASH_ESCAPE],
	      relevance: 0
	    },
	    {
	      className: 'string',
	      begin: '"', end: '"',
	      contains: STRING_CONTAINS,
	      relevance: 0
	    },
	    {
	      className: 'string',
	      begin: '`', end: '`',
	      contains: [hljs.BACKSLASH_ESCAPE]
	    },
	    {
	      className: 'string',
	      begin: '{\\w+}',
	      relevance: 0
	    },
	    {
	      className: 'string',
	      begin: '\-?\\w+\\s*\\=\\>',
	      relevance: 0
	    },
	    {
	      className: 'number',
	      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	      relevance: 0
	    },
	    { // regexp container
	      begin: '(' + hljs.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
	      keywords: 'split return print reverse grep',
	      relevance: 0,
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        COMMENT,
	        {
	          className: 'regexp',
	          begin: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*',
	          relevance: 10
	        },
	        {
	          className: 'regexp',
	          begin: '(m|qr)?/', end: '/[a-z]*',
	          contains: [hljs.BACKSLASH_ESCAPE],
	          relevance: 0 // allows empty "//" which is a common comment delimiter in other languages
	        }
	      ]
	    },
	    {
	      className: 'sub',
	      beginWithKeyword: true, end: '(\\s*\\(.*?\\))?[;{]',
	      keywords: 'sub',
	      relevance: 5
	    },
	    {
	      className: 'operator',
	      begin: '-\\w\\b',
	      relevance: 0
	    }
	  ];
	  SUBST.contains = PERL_DEFAULT_CONTAINS;
	  METHOD.contains[1].contains = PERL_DEFAULT_CONTAINS;
	
	  return {
	    defaultMode: {
	      keywords: PERL_KEYWORDS,
	      contains: PERL_DEFAULT_CONTAINS
	    }
	  };
	}();
	/*
	Language: PHP
	Author: Victor Karamzin <Victor.Karamzin@enterra-inc.com>
	Contributors: Evgeny Stepanischev <imbolk@gmail.com>, Ivan Sagalaev <maniac@softwaremaniacs.org>
	*/
	
	hljs.LANGUAGES.php = function() {
	  var VARIABLE = {
	    className: 'variable', begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
	  };
	  var STRINGS = [
	    hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	    hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	    {
	      className: 'string',
	      begin: 'b"', end: '"',
	      contains: [hljs.BACKSLASH_ESCAPE]
	    },
	    {
	      className: 'string',
	      begin: 'b\'', end: '\'',
	      contains: [hljs.BACKSLASH_ESCAPE]
	    }
	  ];
	  var NUMBERS = [
	    hljs.C_NUMBER_MODE, // 0x..., 0..., decimal, float
	    hljs.BINARY_NUMBER_MODE // 0b...
	  ];
	  var TITLE = {
	    className: 'title', begin: hljs.UNDERSCORE_IDENT_RE
	  };
	  return {
	    case_insensitive: true,
	    defaultMode: {
	      keywords:
	        'and include_once list abstract global private echo interface as static endswitch ' +
	        'array null if endwhile or const for endforeach self var while isset public ' +
	        'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' +
	        'return implements parent clone use __CLASS__ __LINE__ else break print eval new ' +
	        'catch __METHOD__ case exception php_user_filter default die require __FUNCTION__ ' +
	        'enddeclare final try this switch continue endfor endif declare unset true false ' +
	        'namespace trait goto instanceof insteadof __DIR__ __NAMESPACE__ __halt_compiler',
	      contains: [
	        hljs.C_LINE_COMMENT_MODE,
	        hljs.HASH_COMMENT_MODE,
	        {
	          className: 'comment',
	          begin: '/\\*', end: '\\*/',
	          contains: [{
	              className: 'phpdoc',
	              begin: '\\s@[A-Za-z]+'
	          }]
	        },
	        {
	            className: 'comment',
	            excludeBegin: true,
	            begin: '__halt_compiler.+?;', endsWithParent: true
	        },
	        {
	          className: 'string',
	          begin: '<<<[\'"]?\\w+[\'"]?$', end: '^\\w+;',
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          className: 'preprocessor',
	          begin: '<\\?php',
	          relevance: 10
	        },
	        {
	          className: 'preprocessor',
	          begin: '\\?>'
	        },
	        VARIABLE,
	        {
	          className: 'function',
	          beginWithKeyword: true, end: '{',
	          keywords: 'function',
	          illegal: '\\$',
	          contains: [
	            TITLE,
	            {
	              className: 'params',
	              begin: '\\(', end: '\\)',
	              contains: [
	                'self',
	                VARIABLE,
	                hljs.C_BLOCK_COMMENT_MODE
	              ].concat(STRINGS).concat(NUMBERS)
	            }
	          ]
	        },
	        {
	          className: 'class',
	          beginWithKeyword: true, end: '{',
	          keywords: 'class',
	          illegal: '[:\\(\\$]',
	          contains: [
	            {
	              beginWithKeyword: true, endsWithParent: true,
	              keywords: 'extends',
	              contains: [TITLE]
	            },
	            TITLE
	          ]
	        },
	        {
	          begin: '=>' // No markup, just a relevance booster
	        }
	      ].concat(STRINGS).concat(NUMBERS)
	    }
	  };
	}();
	/*
	Language: Scala
	Author: Jan Berkel <jan.berkel@gmail.com>
	*/
	
	hljs.LANGUAGES.scala = function() {
	  var ANNOTATION = {
	    className: 'annotation', begin: '@[A-Za-z]+'
	  };
	  var STRING = {
	    className: 'string',
	    begin: 'u?r?"""', end: '"""',
	    relevance: 10
	  };
	  return {
	    defaultMode: {
	      keywords:
	        'type yield lazy override def with val var false true sealed abstract private trait ' +
	        'object null if for while throw finally protected extends import final return else ' +
	        'break new catch super class case package default try this match continue throws',
	      contains: [
	        {
	          className: 'javadoc',
	          begin: '/\\*\\*', end: '\\*/',
	          contains: [{
	            className: 'javadoctag',
	            begin: '@[A-Za-z]+'
	          }],
	          relevance: 10
	        },
	        hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE,
	        hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, STRING,
	        {
	          className: 'class',
	          begin: '((case )?class |object |trait )', end: '({|$)', // beginWithKeyword won't work because a single "case" shouldn't start this mode
	          illegal: ':',
	          keywords: 'case class trait object',
	          contains: [
	            {
	              beginWithKeyword: true,
	              keywords: 'extends with',
	              relevance: 10
	            },
	            {
	              className: 'title',
	              begin: hljs.UNDERSCORE_IDENT_RE
	            },
	            {
	              className: 'params',
	              begin: '\\(', end: '\\)',
	              contains: [
	                hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, STRING,
	                ANNOTATION
	              ]
	            }
	          ]
	        },
	        hljs.C_NUMBER_MODE,
	        ANNOTATION
	      ]
	    }
	  };
	}();
	/*
	Language: Go
	Author: Stephan Kountso aka StepLg <steplg@gmail.com>
	Contributors: Evgeny Stepanischev <imbolk@gmail.com>
	Description: Google go language (golang). For info about language see http://golang.org/
	*/
	
	hljs.LANGUAGES.go = function(){
	  var GO_KEYWORDS = {
	    keyword:
	      'break default func interface select case map struct chan else goto package switch ' +
	      'const fallthrough if range type continue for import return var go defer',
	    constant:
	       'true false iota nil',
	    typename:
	      'bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 ' +
	      'uint16 uint32 uint64 int uint uintptr rune',
	    built_in:
	      'append cap close complex copy imag len make new panic print println real recover delete'
	  };
	  return {
	    defaultMode: {
	      keywords: GO_KEYWORDS,
	      illegal: '</',
	      contains: [
	        hljs.C_LINE_COMMENT_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        hljs.QUOTE_STRING_MODE,
	        {
	          className: 'string',
	          begin: '\'', end: '[^\\\\]\'',
	          relevance: 0
	        },
	        {
	          className: 'string',
	          begin: '`', end: '`'
	        },
	        {
	          className: 'number',
	          begin: '[^a-zA-Z_0-9](\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?',
	          relevance: 0
	        },
	        hljs.C_NUMBER_MODE
	      ]
	    }
	  };
	}();
	
	/*
	Language: HTML, XML
	*/
	
	hljs.LANGUAGES.xml = function(){
	  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
	  var TAG_INTERNALS = {
	    endsWithParent: true,
	    contains: [
	      {
	        className: 'attribute',
	        begin: XML_IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: '="', returnBegin: true, end: '"',
	        contains: [{
	            className: 'value',
	            begin: '"', endsWithParent: true
	        }]
	      },
	      {
	        begin: '=\'', returnBegin: true, end: '\'',
	        contains: [{
	          className: 'value',
	          begin: '\'', endsWithParent: true
	        }]
	      },
	      {
	        begin: '=',
	        contains: [{
	          className: 'value',
	          begin: '[^\\s/>]+'
	        }]
	      }
	    ]
	  };
	  return {
	    case_insensitive: true,
	    defaultMode: {
	      contains: [
	        {
	          className: 'pi',
	          begin: '<\\?', end: '\\?>',
	          relevance: 10
	        },
	        {
	          className: 'doctype',
	          begin: '<!DOCTYPE', end: '>',
	          relevance: 10,
	          contains: [{begin: '\\[', end: '\\]'}]
	        },
	        {
	          className: 'comment',
	          begin: '<!--', end: '-->',
	          relevance: 10
	        },
	        {
	          className: 'cdata',
	          begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
	          relevance: 10
	        },
	        {
	          className: 'tag',
	          /*
	          The lookahead pattern (?=...) ensures that 'begin' only matches
	          '<style' as a single word, followed by a whitespace or an
	          ending braket. The '$' is needed for the lexem to be recognized
	          by hljs.subMode() that tests lexems outside the stream.
	          */
	          begin: '<style(?=\\s|>|$)', end: '>',
	          keywords: {title: 'style'},
	          contains: [TAG_INTERNALS],
	          starts: {
	            end: '</style>', returnEnd: true,
	            subLanguage: 'css'
	          }
	        },
	        {
	          className: 'tag',
	          // See the comment in the <style tag about the lookahead pattern
	          begin: '<script(?=\\s|>|$)', end: '>',
	          keywords: {title: 'script'},
	          contains: [TAG_INTERNALS],
	          starts: {
	            end: '</script>', returnEnd: true,
	            subLanguage: 'javascript'
	          }
	        },
	        {
	          begin: '<%', end: '%>',
	          subLanguage: 'vbscript'
	        },
	        {
	          className: 'tag',
	          begin: '</?', end: '/?>',
	          contains: [
	            {
	              className: 'title', begin: '[^ />]+'
	            },
	            TAG_INTERNALS
	          ]
	        }
	      ]
	    }
	  };
	}();
	/*
	Language: Markdown
	Requires: xml.js
	Author: John Crepezzi <john.crepezzi@gmail.com>
	Website: http://seejohncode.com/
	*/
	
	hljs.LANGUAGES.markdown = {
	  case_insensitive: true,
	  defaultMode: {
	    contains: [
	      // highlight headers
	      {
	        className: 'header',
	        begin: '^#{1,3}', end: '$'
	      },
	      {
	        className: 'header',
	        begin: '^.+?\\n[=-]{2,}$'
	      },
	      // inline html
	      {
	        begin: '<', end: '>',
	        subLanguage: 'xml',
	        relevance: 0
	      },
	      // lists (indicators only)
	      {
	        className: 'bullet',
	        begin: '^([*+-]|(\\d+\\.))\\s+'
	      },
	      // strong segments
	      {
	        className: 'strong',
	        begin: '[*_]{2}.+?[*_]{2}'
	      },
	      // emphasis segments
	      {
	        className: 'emphasis',
	        begin: '\\*.+?\\*'
	      },
	      {
	        className: 'emphasis',
	        begin: '_.+?_',
	        relevance: 0
	      },
	      // blockquotes
	      {
	        className: 'blockquote',
	        begin: '^>\\s+', end: '$'
	      },
	      // code snippets
	      {
	        className: 'code',
	        begin: '`.+?`'
	      },
	      {
	        className: 'code',
	        begin: '^    ', end: '$',
	        relevance: 0
	      },
	      // horizontal rules
	      {
	        className: 'horizontal_rule',
	        begin: '^-{3,}', end: '$'
	      },
	      // using links - title and link
	      {
	        begin: '\\[.+?\\]\\(.+?\\)',
	        returnBegin: true,
	        contains: [
	          {
	            className: 'link_label',
	            begin: '\\[.+\\]'
	          },
	          {
	            className: 'link_url',
	            begin: '\\(', end: '\\)',
	            excludeBegin: true, excludeEnd: true
	          }
	        ]
	      }
	    ]
	  }
	};
	/*
	Language: Django
	Requires: xml.js
	Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
	Contributors: Ilya Baryshev <baryshev@gmail.com>
	*/
	
	hljs.LANGUAGES.django = function() {
	
	  function allowsDjangoSyntax(mode, parent) {
	    return (
	      parent == undefined || // defaultMode
	      (!mode.className && parent.className == 'tag') || // tag_internal
	      mode.className == 'value' // value
	    );
	  }
	
	  function copy(mode, parent) {
	    var result = {};
	    for (var key in mode) {
	      if (key != 'contains') {
	        result[key] = mode[key];
	      }
	      var contains = [];
	      for (var i = 0; mode.contains && i < mode.contains.length; i++) {
	        contains.push(copy(mode.contains[i], mode));
	      }
	      if (allowsDjangoSyntax(mode, parent)) {
	        contains = DJANGO_CONTAINS.concat(contains);
	      }
	      if (contains.length) {
	        result.contains = contains;
	      }
	    }
	    return result;
	  }
	
	  var FILTER = {
	    className: 'filter',
	    begin: '\\|[A-Za-z]+\\:?', excludeEnd: true,
	    keywords:
	      'truncatewords removetags linebreaksbr yesno get_digit timesince random striptags ' +
	      'filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands ' +
	      'title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode ' +
	      'timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort ' +
	      'dictsortreversed default_if_none pluralize lower join center default ' +
	      'truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first ' +
	      'escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize ' +
	      'localtime utc timezone',
	    contains: [
	      {className: 'argument', begin: '"', end: '"'}
	    ]
	  };
	
	  var DJANGO_CONTAINS = [
	    {
	      className: 'template_comment',
	      begin: '{%\\s*comment\\s*%}', end: '{%\\s*endcomment\\s*%}'
	    },
	    {
	      className: 'template_comment',
	      begin: '{#', end: '#}'
	    },
	    {
	      className: 'template_tag',
	      begin: '{%', end: '%}',
	      keywords:
	        'comment endcomment load templatetag ifchanged endifchanged if endif firstof for ' +
	        'endfor in ifnotequal endifnotequal widthratio extends include spaceless ' +
	        'endspaceless regroup by as ifequal endifequal ssi now with cycle url filter ' +
	        'endfilter debug block endblock else autoescape endautoescape csrf_token empty elif ' +
	        'endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix ' +
	        'plural get_current_language language get_available_languages ' +
	        'get_current_language_bidi get_language_info get_language_info_list localize ' +
	        'endlocalize localtime endlocaltime timezone endtimezone get_current_timezone',
	      contains: [FILTER]
	    },
	    {
	      className: 'variable',
	      begin: '{{', end: '}}',
	      contains: [FILTER]
	    }
	  ];
	
	  return {
	    case_insensitive: true,
	    defaultMode: copy(hljs.LANGUAGES.xml.defaultMode)
	  };
	
	}();
	/*
	Language: CSS
	*/
	
	hljs.LANGUAGES.css = function() {
	  var FUNCTION = {
	    className: 'function',
	    begin: hljs.IDENT_RE + '\\(', end: '\\)',
	    contains: [{
	        endsWithParent: true, excludeEnd: true,
	        contains: [hljs.NUMBER_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
	    }]
	  };
	  return {
	    case_insensitive: true,
	    defaultMode: {
	      illegal: '[=/|\']',
	      contains: [
	        hljs.C_BLOCK_COMMENT_MODE,
	        {
	          className: 'id', begin: '\\#[A-Za-z0-9_-]+'
	        },
	        {
	          className: 'class', begin: '\\.[A-Za-z0-9_-]+',
	          relevance: 0
	        },
	        {
	          className: 'attr_selector',
	          begin: '\\[', end: '\\]',
	          illegal: '$'
	        },
	        {
	          className: 'pseudo',
	          begin: ':(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\"\\\']+'
	        },
	        {
	          className: 'at_rule',
	          begin: '@(font-face|page)',
	          lexems: '[a-z-]+',
	          keywords: 'font-face page'
	        },
	        {
	          className: 'at_rule',
	          begin: '@', end: '[{;]', // at_rule eating first "{" is a good thing
	                                   // because it doesn’t let it to be parsed as
	                                   // a rule set but instead drops parser into
	                                   // the defaultMode which is how it should be.
	          excludeEnd: true,
	          keywords: 'import page media charset',
	          contains: [
	            FUNCTION,
	            hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE,
	            hljs.NUMBER_MODE
	          ]
	        },
	        {
	          className: 'tag', begin: hljs.IDENT_RE,
	          relevance: 0
	        },
	        {
	          className: 'rules',
	          begin: '{', end: '}',
	          illegal: '[^\\s]',
	          relevance: 0,
	          contains: [
	            hljs.C_BLOCK_COMMENT_MODE,
	            {
	              className: 'rule',
	              begin: '[^\\s]', returnBegin: true, end: ';', endsWithParent: true,
	              contains: [
	                {
	                  className: 'attribute',
	                  begin: '[A-Z\\_\\.\\-]+', end: ':',
	                  excludeEnd: true,
	                  illegal: '[^\\s]',
	                  starts: {
	                    className: 'value',
	                    endsWithParent: true, excludeEnd: true,
	                    contains: [
	                      FUNCTION,
	                      hljs.NUMBER_MODE,
	                      hljs.QUOTE_STRING_MODE,
	                      hljs.APOS_STRING_MODE,
	                      hljs.C_BLOCK_COMMENT_MODE,
	                      {
	                        className: 'hexcolor', begin: '\\#[0-9A-F]+'
	                      },
	                      {
	                        className: 'important', begin: '!important'
	                      }
	                    ]
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  };
	}();
	/*
	Language: JSON
	Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
	*/
	
	hljs.LANGUAGES.json = function(){
	  var LITERALS = {literal: 'true false null'};
	  var TYPES = [
	    hljs.QUOTE_STRING_MODE,
	    hljs.C_NUMBER_MODE
	  ];
	  var VALUE_CONTAINER = {
	    className: 'value',
	    end: ',', endsWithParent: true, excludeEnd: true,
	    contains: TYPES,
	    keywords: LITERALS
	  };
	  var OBJECT = {
	    begin: '{', end: '}',
	    contains: [
	      {
	        className: 'attribute',
	        begin: '\\s*"', end: '"\\s*:\\s*', excludeBegin: true, excludeEnd: true,
	        contains: [hljs.BACKSLASH_ESCAPE],
	        illegal: '\\n',
	        starts: VALUE_CONTAINER
	      }
	    ],
	    illegal: '\\S'
	  };
	  var ARRAY = {
	    begin: '\\[', end: '\\]',
	    contains: [hljs.inherit(VALUE_CONTAINER, {className: null})], // inherit is also a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
	    illegal: '\\S'
	  };
	  TYPES.splice(TYPES.length, 0, OBJECT, ARRAY);
	  return {
	    defaultMode: {
	      contains: TYPES,
	      keywords: LITERALS,
	      illegal: '\\S'
	    }
	  };
	}();
	/*
	Language: JavaScript
	*/
	
	hljs.LANGUAGES.javascript = {
	  defaultMode: {
	    keywords: {
	      keyword:
	        'in if for while finally var new function do return void else break catch ' +
	        'instanceof with throw case default try this switch continue typeof delete',
	      literal:
	        'true false null undefined NaN Infinity'
	    },
	    contains: [
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      { // regexp container
	        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	        keywords: 'return throw case',
	        contains: [
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          {
	            className: 'regexp',
	            begin: '/', end: '/[gim]*',
	            contains: [{begin: '\\\\/'}]
	          }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        beginWithKeyword: true, end: '{',
	        keywords: 'function',
	        contains: [
	          {
	            className: 'title', begin: '[A-Za-z$_][0-9A-Za-z$_]*'
	          },
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ],
	            illegal: '["\'\\(]'
	          }
	        ]
	      }
	    ]
	  }
	};
	/*
	Language: CoffeeScript
	Author: Dmytrii Nagirniak <dnagir@gmail.com>
	Contributors: Oleg Efimov <efimovov@gmail.com>
	Description: CoffeeScript is a programming language that transcompiles to JavaScript. For info about language see http://coffeescript.org/
	*/
	
	hljs.LANGUAGES.coffeescript = function() {
	  var keywords = {
	    keyword:
	      // JS keywords
	      'in if for while finally new do return else break catch instanceof throw try this ' +
	      'switch continue typeof delete debugger class extends super' +
	      // Coffee keywords
	      'then unless until loop of by when and or is isnt not',
	    literal:
	      // JS literals
	      'true false null undefined ' +
	      // Coffee literals
	      'yes no on off ',
	    reserved: 'case default function var void with const let enum export import native ' +
	      '__hasProp __extends __slice __bind __indexOf'
	  };
	
	  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
	
	  var COFFEE_QUOTE_STRING_SUBST_MODE = {
	    className: 'subst',
	    begin: '#\\{', end: '}',
	    keywords: keywords,
	    contains: [hljs.C_NUMBER_MODE, hljs.BINARY_NUMBER_MODE]
	  };
	
	  var COFFEE_QUOTE_STRING_MODE = {
	    className: 'string',
	    begin: '"', end: '"',
	    relevance: 0,
	    contains: [hljs.BACKSLASH_ESCAPE, COFFEE_QUOTE_STRING_SUBST_MODE]
	  };
	
	  var COFFEE_HEREDOC_MODE = {
	    className: 'string',
	    begin: '"""', end: '"""',
	    contains: [hljs.BACKSLASH_ESCAPE, COFFEE_QUOTE_STRING_SUBST_MODE]
	  };
	
	  var COFFEE_HERECOMMENT_MODE = {
	    className: 'comment',
	    begin: '###', end: '###'
	  };
	
	  var COFFEE_HEREGEX_MODE = {
	    className: 'regexp',
	    begin: '///', end: '///',
	    contains: [hljs.HASH_COMMENT_MODE]
	  };
	
	  var COFFEE_FUNCTION_DECLARATION_MODE = {
	    className: 'function',
	    begin: JS_IDENT_RE + '\\s*=\\s*(\\(.+\\))?\\s*[-=]>',
	    returnBegin: true,
	    contains: [
	      {
	        className: 'title',
	        begin: JS_IDENT_RE
	      },
	      {
	        className: 'params',
	        begin: '\\(', end: '\\)'
	      }
	    ]
	  };
	
	  var COFFEE_EMBEDDED_JAVASCRIPT = {
	    begin: '`', end: '`',
	    excludeBegin: true, excludeEnd: true,
	    subLanguage: 'javascript'
	  };
	
	  return {
	    defaultMode: {
	      keywords: keywords,
	      contains: [
	        // Numbers
	        hljs.C_NUMBER_MODE,
	        hljs.BINARY_NUMBER_MODE,
	        // Strings
	        hljs.APOS_STRING_MODE,
	        COFFEE_HEREDOC_MODE, // Should be before COFFEE_QUOTE_STRING_MODE for greater priority
	        COFFEE_QUOTE_STRING_MODE,
	        // Comments
	        COFFEE_HERECOMMENT_MODE, // Should be before hljs.HASH_COMMENT_MODE for greater priority
	        hljs.HASH_COMMENT_MODE,
	        // CoffeeScript specific modes
	        COFFEE_HEREGEX_MODE,
	        COFFEE_EMBEDDED_JAVASCRIPT,
	        COFFEE_FUNCTION_DECLARATION_MODE
	      ]
	    }
	  };
	}();
	/*
	Language: ActionScript
	Author: Alexander Myadzel <myadzel@gmail.com>
	*/
	
	hljs.LANGUAGES.actionscript = function() {
	  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';
	  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';
	
	  var AS3_REST_ARG_MODE = {
	    className: 'rest_arg',
	    begin: '[.]{3}', end: IDENT_RE,
	    relevance: 10
	  };
	  var TITLE_MODE = {className: 'title', begin: IDENT_RE};
	
	  return {
	    defaultMode: {
	      keywords: {
	        keyword: 'as break case catch class const continue default delete do dynamic each ' +
	          'else extends final finally for function get if implements import in include ' +
	          'instanceof interface internal is namespace native new override package private ' +
	          'protected public return set static super switch this throw try typeof use var void ' +
	          'while with',
	        literal: 'true false null undefined'
	      },
	      contains: [
	        hljs.APOS_STRING_MODE,
	        hljs.QUOTE_STRING_MODE,
	        hljs.C_LINE_COMMENT_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        hljs.C_NUMBER_MODE,
	        {
	          className: 'package',
	          beginWithKeyword: true, end: '{',
	          keywords: 'package',
	          contains: [TITLE_MODE]
	        },
	        {
	          className: 'class',
	          beginWithKeyword: true, end: '{',
	          keywords: 'class interface',
	          contains: [
	            {
	              beginWithKeyword: true,
	              keywords: 'extends implements'
	            },
	            TITLE_MODE
	          ]
	        },
	        {
	          className: 'preprocessor',
	          beginWithKeyword: true, end: ';',
	          keywords: 'import include'
	        },
	        {
	          className: 'function',
	          beginWithKeyword: true, end: '[{;]',
	          keywords: 'function',
	          illegal: '\\S',
	          contains: [
	            TITLE_MODE,
	            {
	              className: 'params',
	              begin: '\\(', end: '\\)',
	              contains: [
	                hljs.APOS_STRING_MODE,
	                hljs.QUOTE_STRING_MODE,
	                hljs.C_LINE_COMMENT_MODE,
	                hljs.C_BLOCK_COMMENT_MODE,
	                AS3_REST_ARG_MODE
	              ]
	            },
	            {
	              className: 'type',
	              begin: ':',
	              end: IDENT_FUNC_RETURN_TYPE_RE,
	              relevance: 10
	            }
	          ]
	        }
	      ]
	    }
	  }
	}();
	/*
	Language: VBScript
	Author: Nikita Ledyaev <lenikita@yandex.ru>
	Contributors: Michal Gabrukiewicz <mgabru@gmail.com>
	*/
	
	hljs.LANGUAGES.vbscript = {
	  case_insensitive: true,
	  defaultMode: {
	    keywords: {
	      keyword:
	        'call class const dim do loop erase execute executeglobal exit for each next function ' +
	        'if then else on error option explicit new private property let get public randomize ' +
	        'redim rem select case set stop sub while wend with end to elseif is or xor and not ' +
	        'class_initialize class_terminate default preserve in me byval byref step resume goto',
	      built_in:
	        'lcase month vartype instrrev ubound setlocale getobject rgb getref string ' +
	        'weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency ' +
	        'conversions csng timevalue second year space abs clng timeserial fixs len asc ' +
	        'isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate ' +
	        'instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex ' +
	        'chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim ' +
	        'strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion ' +
	        'scriptengine split scriptengineminorversion cint sin datepart ltrim sqr ' +
	        'scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw ' +
	        'chrw regexp server response request cstr err',
	      literal:
	        'true false null nothing empty'
	    },
	    illegal: '//',
	    contains: [
	      { // can’t use standard QUOTE_STRING_MODE since it’s compiled with its own escape and doesn’t use the local one
	        className: 'string',
	        begin: '"', end: '"',
	        illegal: '\\n',
	        contains: [{begin: '""'}],
	        relevance: 0
	      },
	      {
	        className: 'comment',
	        begin: '\'', end: '$'
	      },
	      hljs.C_NUMBER_MODE
	    ]
	  }
	};
	/*
	  Language: HTTP
	  Description: HTTP request and response headers with automatic body highlighting
	  Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
	*/
	
	hljs.LANGUAGES.http = {
	  defaultMode: {
	    illegal: '\\S',
	    contains: [
	      {
	        className: 'status',
	        begin: '^HTTP/[0-9\\.]+', end: '$',
	        contains: [{className: 'number', begin: '\\b\\d{3}\\b'}]
	      },
	      {
	        className: 'request',
	        begin: '^[A-Z]+ (.*?) HTTP/[0-9\\.]+$', returnBegin: true, end: '$',
	        contains: [
	          {
	            className: 'string',
	            begin: ' ', end: ' ',
	            excludeBegin: true, excludeEnd: true
	          }
	        ]
	      },
	      {
	        className: 'attribute',
	        begin: '^\\w', end: ': ', excludeEnd: true,
	        illegal: '\\n',
	        starts: {className: 'string', end: '$'}
	      },
	      {
	        begin: '\\n\\n',
	        starts: {subLanguage: '', endsWithParent: true}
	      }
	    ]
	  }
	}
	/*
	Language: Lua
	Author: Andrew Fedorov <dmmdrs@mail.ru>
	*/
	
	hljs.LANGUAGES.lua = function() {
	  var OPENING_LONG_BRACKET = '\\[=*\\[';
	  var CLOSING_LONG_BRACKET = '\\]=*\\]';
	  var LONG_BRACKETS = {
	    begin: OPENING_LONG_BRACKET, end: CLOSING_LONG_BRACKET,
	    contains: ['self']
	  };
	  var COMMENTS = [
	    {
	      className: 'comment',
	      begin: '--(?!' + OPENING_LONG_BRACKET + ')', end: '$'
	    },
	    {
	      className: 'comment',
	      begin: '--' + OPENING_LONG_BRACKET, end: CLOSING_LONG_BRACKET,
	      contains: [LONG_BRACKETS],
	      relevance: 10
	    }
	  ]
	  return {
	    defaultMode: {
	      lexems: hljs.UNDERSCORE_IDENT_RE,
	      keywords: {
	        keyword:
	          'and break do else elseif end false for if in local nil not or repeat return then ' +
	          'true until while',
	        built_in:
	          '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load ' +
	          'loadfile loadstring module next pairs pcall print rawequal rawget rawset require ' +
	          'select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug ' +
	          'io math os package string table'
	      },
	      contains: COMMENTS.concat([
	        {
	          className: 'function',
	          beginWithKeyword: true, end: '\\)',
	          keywords: 'function',
	          contains: [
	            {
	              className: 'title',
	              begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'
	            },
	            {
	              className: 'params',
	              begin: '\\(', endsWithParent: true,
	              contains: COMMENTS
	            }
	          ].concat(COMMENTS)
	        },
	        hljs.C_NUMBER_MODE,
	        hljs.APOS_STRING_MODE,
	        hljs.QUOTE_STRING_MODE,
	        {
	          className: 'string',
	          begin: OPENING_LONG_BRACKET, end: CLOSING_LONG_BRACKET,
	          contains: [LONG_BRACKETS],
	          relevance: 10
	        }
	      ])
	    }
	  };
	}();
	/*
	Language: Delphi
	*/
	
	hljs.LANGUAGES.delphi = function(){
	  var DELPHI_KEYWORDS = 'and safecall cdecl then string exports library not pascal set ' +
	    'virtual file in array label packed end. index while const raise for to implementation ' +
	    'with except overload destructor downto finally program exit unit inherited override if ' +
	    'type until function do begin repeat goto nil far initialization object else var uses ' +
	    'external resourcestring interface end finalization class asm mod case on shr shl of ' +
	    'register xorwrite threadvar try record near stored constructor stdcall inline div out or ' +
	    'procedure';
	  var DELPHI_CLASS_KEYWORDS = 'safecall stdcall pascal stored const implementation ' +
	    'finalization except to finally program inherited override then exports string read not ' +
	    'mod shr try div shl set library message packed index for near overload label downto exit ' +
	    'public goto interface asm on of constructor or private array unit raise destructor var ' +
	    'type until function else external with case default record while protected property ' +
	    'procedure published and cdecl do threadvar file in if end virtual write far out begin ' +
	    'repeat nil initialization object uses resourcestring class register xorwrite inline static';
	  var CURLY_COMMENT =  {
	    className: 'comment',
	    begin: '{', end: '}',
	    relevance: 0
	  };
	  var PAREN_COMMENT = {
	    className: 'comment',
	    begin: '\\(\\*', end: '\\*\\)',
	    relevance: 10
	  };
	  var STRING = {
	    className: 'string',
	    begin: '\'', end: '\'',
	    contains: [{begin: '\'\''}],
	    relevance: 0
	  };
	  var CHAR_STRING = {
	    className: 'string', begin: '(#\\d+)+'
	  };
	  var FUNCTION = {
	    className: 'function',
	    beginWithKeyword: true, end: '[:;]',
	    keywords: 'function constructor|10 destructor|10 procedure|10',
	    contains: [
	      {
	        className: 'title', begin: hljs.IDENT_RE
	      },
	      {
	        className: 'params',
	        begin: '\\(', end: '\\)',
	        keywords: DELPHI_KEYWORDS,
	        contains: [STRING, CHAR_STRING]
	      },
	      CURLY_COMMENT, PAREN_COMMENT
	    ]
	  };
	  return {
	    case_insensitive: true,
	    defaultMode: {
	      keywords: DELPHI_KEYWORDS,
	      illegal: '("|\\$[G-Zg-z]|\\/\\*|</)',
	      contains: [
	        CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,
	        STRING, CHAR_STRING,
	        hljs.NUMBER_MODE,
	        FUNCTION,
	        {
	          className: 'class',
	          begin: '=\\bclass\\b', end: 'end;',
	          keywords: DELPHI_CLASS_KEYWORDS,
	          contains: [
	            STRING, CHAR_STRING,
	            CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,
	            FUNCTION
	          ]
	        }
	      ]
	    }
	  };
	}();
	/*
	Language: Java
	Author: Vsevolod Solovyov <vsevolod.solovyov@gmail.com>
	*/
	
	hljs.LANGUAGES.java  = {
	  defaultMode: {
	    keywords:
	      'false synchronized int abstract float private char boolean static null if const ' +
	      'for true while long throw strictfp finally protected import native final return void ' +
	      'enum else break transient new catch instanceof byte super volatile case assert short ' +
	      'package default double public try this switch continue throws',
	    contains: [
	      {
	        className: 'javadoc',
	        begin: '/\\*\\*', end: '\\*/',
	        contains: [{
	          className: 'javadoctag', begin: '@[A-Za-z]+'
	        }],
	        relevance: 10
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'class',
	        beginWithKeyword: true, end: '{',
	        keywords: 'class interface',
	        illegal: ':',
	        contains: [
	          {
	            beginWithKeyword: true,
	            keywords: 'extends implements',
	            relevance: 10
	          },
	          {
	            className: 'title',
	            begin: hljs.UNDERSCORE_IDENT_RE
	          }
	        ]
	      },
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'annotation', begin: '@[A-Za-z]+'
	      }
	    ]
	  }
	};
	/*
	Language: C++
	Contributors: Evgeny Stepanischev <imbolk@gmail.com>
	*/
	
	hljs.LANGUAGES.cpp = function(){
	  var CPP_KEYWORDS = {
	    keyword: 'false int float while private char catch export virtual operator sizeof ' +
	      'dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace ' +
	      'unsigned long throw volatile static protected bool template mutable if public friend ' +
	      'do return goto auto void enum else break new extern using true class asm case typeid ' +
	      'short reinterpret_cast|10 default double register explicit signed typename try this ' +
	      'switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype ' +
	      'noexcept nullptr static_assert thread_local restrict _Bool complex',
	    built_in: 'std string cin cout cerr clog stringstream istringstream ostringstream ' +
	      'auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set ' +
	      'unordered_map unordered_multiset unordered_multimap array shared_ptr'
	  };
	  return {
	    defaultMode: {
	      keywords: CPP_KEYWORDS,
	      illegal: '</',
	      contains: [
	        hljs.C_LINE_COMMENT_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        hljs.QUOTE_STRING_MODE,
	        {
	          className: 'string',
	          begin: '\'\\\\?.', end: '\'',
	          illegal: '.'
	        },
	        {
	          className: 'number',
	          begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)'
	        },
	        hljs.C_NUMBER_MODE,
	        {
	          className: 'preprocessor',
	          begin: '#', end: '$'
	        },
	        {
	          className: 'stl_container',
	          begin: '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<', end: '>',
	          keywords: CPP_KEYWORDS,
	          relevance: 10,
	          contains: ['self']
	        }
	      ]
	    }
	  };
	}();
	/*
	Language: Objective C
	Author: Valerii Hiora <valerii.hiora@gmail.com>
	Contributors: Angel G. Olloqui <angelgarcia.mail@gmail.com>
	*/
	
	hljs.LANGUAGES.objectivec = function(){
	  var OBJC_KEYWORDS = {
	    keyword:
	      'int float while private char catch export sizeof typedef const struct for union ' +
	      'unsigned long volatile static protected bool mutable if public do return goto void ' +
	      'enum else break extern class asm case short default double throw register explicit ' +
	      'signed typename try this switch continue wchar_t inline readonly assign property ' +
	      'protocol self synchronized end synthesize id optional required implementation ' +
	      'nonatomic interface super unichar finally dynamic IBOutlet IBAction selector strong ' +
	      'weak readonly',
	    literal:
	    	'false true FALSE TRUE nil YES NO NULL',
	    built_in:
	      'NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView ' +
	      'UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread ' +
	      'UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool ' +
	      'UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray ' +
	      'NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController ' +
	      'UINavigationBar UINavigationController UITabBarController UIPopoverController ' +
	      'UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController ' +
	      'NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor ' +
	      'UIFont UIApplication NSNotFound NSNotificationCenter NSNotification ' +
	      'UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar ' +
	      'NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection class ' +
	      'UIInterfaceOrientation MPMoviePlayerController dispatch_once_t ' +
	      'dispatch_queue_t dispatch_sync dispatch_async dispatch_once'
	  };
	  return {
	    defaultMode: {
	      keywords: OBJC_KEYWORDS,
	      illegal: '</',
	      contains: [
	        hljs.C_LINE_COMMENT_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        hljs.C_NUMBER_MODE,
	        hljs.QUOTE_STRING_MODE,
	        {
	          className: 'string',
	          begin: '\'',
	          end: '[^\\\\]\'',
	          illegal: '[^\\\\][^\']'
	        },
	
	        {
	          className: 'preprocessor',
	          begin: '#import',
	          end: '$',
	          contains: [
	          {
	            className: 'title',
	            begin: '\"',
	            end: '\"'
	          },
	          {
	            className: 'title',
	            begin: '<',
	            end: '>'
	          }
	          ]
	        },
	        {
	          className: 'preprocessor',
	          begin: '#',
	          end: '$'
	        },
	        {
	          className: 'class',
	          beginWithKeyword: true,
	          end: '({|$)',
	          keywords: 'interface class protocol implementation',
	          contains: [{
	            className: 'id',
	            begin: hljs.UNDERSCORE_IDENT_RE
	          }
	          ]
	        },
	        {
	          className: 'variable',
	          begin: '\\.'+hljs.UNDERSCORE_IDENT_RE
	        }
	      ]
	    }
	  };
	}();
	/*
	Language: Vala
	Author: Antono Vasiljev <antono.vasiljev@gmail.com>
	Description: Vala is a new programming language that aims to bring modern programming language features to GNOME developers without imposing any additional runtime requirements and without using a different ABI compared to applications and libraries written in C.
	*/
	
	hljs.LANGUAGES.vala = {
	  defaultMode: {
	    keywords: {
	      keyword:
	        // Value types
	        'char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 ' +
	        'uint16 uint32 uint64 float double bool struct enum string void ' +
	        // Reference types
	        'weak unowned owned ' +
	        // Modifiers
	        'async signal static abstract interface override ' +
	        // Control Structures
	        'while do for foreach else switch case break default return try catch ' +
	        // Visibility
	        'public private protected internal ' +
	        // Other
	        'using new this get set const stdout stdin stderr var',
	      built_in:
	        'DBus GLib CCode Gee Object',
	      literal:
	        'false true null'
	    },
	    contains: [
	      {
	        className: 'class',
	        beginWithKeyword: true, end: '{',
	        keywords: 'class interface delegate namespace',
	        contains: [
	          {
	            beginWithKeyword: true,
	            keywords: 'extends implements'
	          },
	          {
	            className: 'title',
	            begin: hljs.UNDERSCORE_IDENT_RE
	          }
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'string',
	        begin: '"""', end: '"""',
	        relevance: 5
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'preprocessor',
	        begin: '^#', end: '$',
	        relevance: 2
	      },
	      {
	        className: 'constant',
	        begin: ' [A-Z_]+ ',
	        relevance: 0
	      }
	    ]
	  }
	};
	/*
	Language: C#
	Author: Jason Diamond <jason@diamond.name>
	*/
	
	hljs.LANGUAGES.cs  = {
	  defaultMode: {
	    keywords:
	      // Normal keywords.
	      'abstract as base bool break byte case catch char checked class const continue decimal ' +
	      'default delegate do double else enum event explicit extern false finally fixed float ' +
	      'for foreach goto if implicit in int interface internal is lock long namespace new null ' +
	      'object operator out override params private protected public readonly ref return sbyte ' +
	      'sealed short sizeof stackalloc static string struct switch this throw true try typeof ' +
	      'uint ulong unchecked unsafe ushort using virtual volatile void while ' +
	      // Contextual keywords.
	      'ascending descending from get group into join let orderby partial select set value var '+
	      'where yield',
	    contains: [
	      {
	        className: 'comment',
	        begin: '///', end: '$', returnBegin: true,
	        contains: [
	          {
	            className: 'xmlDocTag',
	            begin: '///|<!--|-->'
	          },
	          {
	            className: 'xmlDocTag',
	            begin: '</?', end: '>'
	          }
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'preprocessor',
	        begin: '#', end: '$',
	        keywords: 'if else elif endif define undef warning error line region endregion pragma checksum'
	      },
	      {
	        className: 'string',
	        begin: '@"', end: '"',
	        contains: [{begin: '""'}]
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE
	    ]
	  }
	};
	/*
	Language: D
	Author: Aleksandar Ruzicic <aleksandar@ruzicic.info>
	Description: D is a language with C-like syntax and static typing. It pragmatically combines efficiency, control, and modeling power, with safety and programmer productivity.
	Version: 1.0a
	Date: 2012-04-08
	*/
	
	/**
	 * Known issues:
	 *
	 * - invalid hex string literals will be recognized as a double quoted strings
	 *   but 'x' at the beginning of string will not be matched
	 *
	 * - delimited string literals are not checked for matching end delimiter
	 *   (not possible to do with js regexp)
	 *
	 * - content of token string is colored as a string (i.e. no keyword coloring inside a token string)
	 *   also, content of token string is not validated to contain only valid D tokens
	 *
	 * - special token sequence rule is not strictly following D grammar (anything following #line
	 *   up to the end of line is matched as special token sequence)
	 */
	
	hljs.LANGUAGES.d = function() {
	
		/**
		 * Language keywords
		 *
		 * @type {Object}
		 */
		var D_KEYWORDS = {
			keyword:
				'abstract alias align asm assert auto body break byte case cast catch class ' +
				'const continue debug default delete deprecated do else enum export extern final ' +
				'finally for foreach foreach_reverse|10 goto if immutable import in inout int ' +
				'interface invariant is lazy macro mixin module new nothrow out override package ' +
				'pragma private protected public pure ref return scope shared static struct ' +
				'super switch synchronized template this throw try typedef typeid typeof union ' +
				'unittest version void volatile while with __FILE__ __LINE__ __gshared|10 ' +
				'__thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__',
			built_in:
				'bool cdouble cent cfloat char creal dchar delegate double dstring float function ' +
				'idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar ' +
				'wstring',
			literal:
				'false null true'
		};
	
		/**
		 * Number literal regexps
		 *
		 * @type {String}
		 */
		var decimal_integer_re = '(0|[1-9][\\d_]*)',
			decimal_integer_nosus_re = '(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)',
			binary_integer_re = '0[bB][01_]+',
			hexadecimal_digits_re = '([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)',
			hexadecimal_integer_re = '0[xX]' + hexadecimal_digits_re,
	
			decimal_exponent_re = '([eE][+-]?' + decimal_integer_nosus_re + ')',
			decimal_float_re = '(' + decimal_integer_nosus_re + '(\\.\\d*|' + decimal_exponent_re + ')|' +
									'\\d+\\.' + decimal_integer_nosus_re + decimal_integer_nosus_re + '|' +
									'\\.' + decimal_integer_re + decimal_exponent_re + '?' +
								')',
			hexadecimal_float_re = '(0[xX](' +
										hexadecimal_digits_re + '\\.' + hexadecimal_digits_re + '|'+
										'\\.?' + hexadecimal_digits_re +
								   ')[pP][+-]?' + decimal_integer_nosus_re + ')';
	
			integer_re = '(' +
				decimal_integer_re + '|' +
				binary_integer_re  + '|' +
			 	hexadecimal_integer_re   +
			')',
	
			float_re = '(' +
				hexadecimal_float_re + '|' +
				decimal_float_re  +
			')';
	
		/**
		 * Escape sequence supported in D string and character literals
		 *
		 * @type {String}
		 */
		var escape_sequence_re = '\\\\(' +
								'[\'"\\?\\\\abfnrtv]|' +	// common escapes
								'u[\\dA-Fa-f]{4}|' + 		// four hex digit unicode codepoint
								'[0-7]{1,3}|' + 			// one to three octal digit ascii char code
								'x[\\dA-Fa-f]{2}|' +		// two hex digit ascii char code
								'U[\\dA-Fa-f]{8}' +			// eight hex digit unicode codepoint
							  ')|' +
							  '&[a-zA-Z\\d]{2,};';			// named character entity
	
	
		/**
		 * D integer number literals
		 *
		 * @type {Object}
		 */
		var D_INTEGER_MODE = {
			className: 'number',
	    	begin: '\\b' + integer_re + '(L|u|U|Lu|LU|uL|UL)?',
	    	relevance: 0
		};
	
		/**
		 * [D_FLOAT_MODE description]
		 * @type {Object}
		 */
		var D_FLOAT_MODE = {
			className: 'number',
			begin: '\\b(' +
					float_re + '([fF]|L|i|[fF]i|Li)?|' +
					integer_re + '(i|[fF]i|Li)' +
				')',
			relevance: 0
		};
	
		/**
		 * D character literal
		 *
		 * @type {Object}
		 */
		var D_CHARACTER_MODE = {
			className: 'string',
			begin: '\'(' + escape_sequence_re + '|.)', end: '\'',
			illegal: '.'
		};
	
		/**
		 * D string escape sequence
		 *
		 * @type {Object}
		 */
		var D_ESCAPE_SEQUENCE = {
			begin: escape_sequence_re,
			relevance: 0
		}
	
		/**
		 * D double quoted string literal
		 *
		 * @type {Object}
		 */
		var D_STRING_MODE = {
			className: 'string',
			begin: '"',
			contains: [D_ESCAPE_SEQUENCE],
			end: '"[cwd]?',
			relevance: 0
		};
	
		/**
		 * D wysiwyg and delimited string literals
		 *
		 * @type {Object}
		 */
		var D_WYSIWYG_DELIMITED_STRING_MODE = {
			className: 'string',
			begin: '[rq]"',
			end: '"[cwd]?',
			relevance: 5
		};
	
		/**
		 * D alternate wysiwyg string literal
		 *
		 * @type {Object}
		 */
		var D_ALTERNATE_WYSIWYG_STRING_MODE = {
			className: 'string',
			begin: '`',
			end: '`[cwd]?'
		};
	
		/**
		 * D hexadecimal string literal
		 *
		 * @type {Object}
		 */
		var D_HEX_STRING_MODE = {
			className: 'string',
			begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
			relevance: 10
		};
	
		/**
		 * D delimited string literal
		 *
		 * @type {Object}
		 */
		var D_TOKEN_STRING_MODE = {
			className: 'string',
			begin: 'q"\\{',
			end: '\\}"'
		};
	
		/**
		 * Hashbang support
		 *
		 * @type {Object}
		 */
		var D_HASHBANG_MODE = {
			className: 'shebang',
			begin: '^#!',
			end: '$',
			relevance: 5
		};
	
		/**
		 * D special token sequence
		 *
		 * @type {Object}
		 */
		var D_SPECIAL_TOKEN_SEQUENCE_MODE = {
			className: 'preprocessor',
			begin: '#(line)',
			end: '$',
			relevance: 5
		};
	
		/**
		 * D attributes
		 *
		 * @type {Object}
		 */
		var D_ATTRIBUTE_MODE = {
			className: 'keyword',
			begin: '@[a-zA-Z_][a-zA-Z_\\d]*'
		};
	
		/**
		 * D nesting comment
		 *
		 * @type {Object}
		 */
		var D_NESTING_COMMENT_MODE = {
			className: 'comment',
			begin: '\\/\\+',
			contains: ['self'],
			end: '\\+\\/',
			relevance: 10
		}
	
		return {
			defaultMode: {
				lexems: hljs.UNDERSCORE_IDENT_RE,
				keywords: D_KEYWORDS,
				contains: [
					hljs.C_LINE_COMMENT_MODE,
	      			hljs.C_BLOCK_COMMENT_MODE,
	      			D_NESTING_COMMENT_MODE,
	      			D_HEX_STRING_MODE,
	      			D_STRING_MODE,
	      			D_WYSIWYG_DELIMITED_STRING_MODE,
	      			D_ALTERNATE_WYSIWYG_STRING_MODE,
	      			D_TOKEN_STRING_MODE,
	      			D_FLOAT_MODE,
	      			D_INTEGER_MODE,
	      			D_CHARACTER_MODE,
	      			D_HASHBANG_MODE,
	      			D_SPECIAL_TOKEN_SEQUENCE_MODE,
	      			D_ATTRIBUTE_MODE
				]
			}
		};
	}();
	/*
	Language: RenderMan RSL
	Description: RenderMan RSL Language
	Author: Konstantin Evdokimenko <qewerty@gmail.com>
	Contributors: Shuen-Huei Guan <drake.guan@gmail.com>
	*/
	
	hljs.LANGUAGES.rsl  = {
	  defaultMode: {
	    keywords: {
	      'keyword':
	        'float color point normal vector matrix while for if do return else break extern continue',
	      'built_in':
	        'abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise ' +
	        'clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp ' +
	        'faceforward filterstep floor format fresnel incident length lightsource log match ' +
	        'max min mod noise normalize ntransform opposite option phong pnoise pow printf ' +
	        'ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp ' +
	        'setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan ' +
	        'texture textureinfo trace transform vtransform xcomp ycomp zcomp'
	    },
	    illegal: '</',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'preprocessor',
	        begin: '#', end: '$'
	      },
	      {
	        className: 'shader',
	        beginWithKeyword: true, end: '\\(',
	        keywords: 'surface displacement light volume imager'
	      },
	      {
	        className: 'shading',
	        beginWithKeyword: true, end: '\\(',
	        keywords: 'illuminate illuminance gather'
	      }
	    ]
	  }
	};
	/*
	Language: RenderMan RIB
	Description: RenderMan RIB Language
	Author: Konstantin Evdokimenko <qewerty@gmail.com>
	Contributors: Shuen-Huei Guan <drake.guan@gmail.com>
	*/
	
	hljs.LANGUAGES.rib  = {
	  defaultMode: {
	    keywords:
	      'ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis ' +
	      'Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone ' +
	      'CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail ' +
	      'DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format ' +
	      'FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry ' +
	      'Hider Hyperboloid Identity Illuminate Imager Interior LightSource ' +
	      'MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte ' +
	      'MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option ' +
	      'Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples ' +
	      'PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection ' +
	      'Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ' +
	      'ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere ' +
	      'SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd ' +
	      'TransformPoints Translate TrimCurve WorldBegin WorldEnd',
	    illegal: '</',
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE
	    ]
	  }
	};
	
	/*
	Language: MEL
	Description: Maya Embedded Language
	Author: Shuen-Huei Guan <drake.guan@gmail.com>
	*/
	
	hljs.LANGUAGES.mel = {
	  defaultMode: {
	    keywords:
	      'int float string vector matrix if else switch case default while do for in break ' +
	      'continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic ' +
	      'addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey ' +
	      'affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve ' +
	      'alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor ' +
	      'animDisplay animView annotate appendStringArray applicationName applyAttrPreset ' +
	      'applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx ' +
	      'artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu ' +
	      'artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand ' +
	      'assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface ' +
	      'attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu ' +
	      'attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp ' +
	      'attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery ' +
	      'autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults ' +
	      'bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership ' +
	      'bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType ' +
	      'boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu ' +
	      'buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge ' +
	      'cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch ' +
	      'catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox ' +
	      'character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp ' +
	      'checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip ' +
	      'clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore ' +
	      'closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter ' +
	      'cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color ' +
	      'colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp ' +
	      'colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem ' +
	      'componentEditor compositingInterop computePolysetVolume condition cone confirmDialog ' +
	      'connectAttr connectControl connectDynamic connectJoint connectionInfo constrain ' +
	      'constrainValue constructionHistory container containsMultibyte contextInfo control ' +
	      'convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation ' +
	      'convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache ' +
	      'cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel ' +
	      'cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver ' +
	      'cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor ' +
	      'createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer ' +
	      'createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse ' +
	      'currentCtx currentTime currentTimeCtx currentUnit currentUnit curve curveAddPtCtx ' +
	      'curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface ' +
	      'curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox ' +
	      'defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete ' +
	      'deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes ' +
	      'delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo ' +
	      'dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable ' +
	      'disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected ' +
	      'displayColor displayCull displayLevelOfDetail displayPref displayRGBColor ' +
	      'displaySmoothness displayStats displayString displaySurface distanceDimContext ' +
	      'distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct ' +
	      'doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator ' +
	      'duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression ' +
	      'dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor ' +
	      'dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers ' +
	      'editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor ' +
	      'editorTemplate effector emit emitter enableDevice encodeString endString endsWith env ' +
	      'equivalent equivalentTol erf error eval eval evalDeferred evalEcho event ' +
	      'exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp ' +
	      'expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof ' +
	      'fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo ' +
	      'filetest filletCurve filter filterCurve filterExpand filterStudioImport ' +
	      'findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster ' +
	      'finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar ' +
	      'floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo ' +
	      'fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint ' +
	      'frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss ' +
	      'geometryConstraint getApplicationVersionAsFloat getAttr getClassification ' +
	      'getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes ' +
	      'getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender ' +
	      'glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl ' +
	      'gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid ' +
	      'gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap ' +
	      'HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor ' +
	      'HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached ' +
	      'HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel ' +
	      'headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey ' +
	      'hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender ' +
	      'hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox ' +
	      'iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ' +
	      'ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ' +
	      'ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform ' +
	      'insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance ' +
	      'instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp ' +
	      'interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf ' +
	      'isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect ' +
	      'itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx ' +
	      'jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner ' +
	      'keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx ' +
	      'keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx ' +
	      'keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx ' +
	      'keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor ' +
	      'layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList ' +
	      'lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep ' +
	      'listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory ' +
	      'listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation ' +
	      'listNodeTypes listPanelCategories listRelatives listSets listTransforms ' +
	      'listUnselected listerEditor loadFluid loadNewShelf loadPlugin ' +
	      'loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log ' +
	      'longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive ' +
	      'makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext ' +
	      'manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx ' +
	      'manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout ' +
	      'menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp ' +
	      'mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move ' +
	      'moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute ' +
	      'nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast ' +
	      'nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint ' +
	      'normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect ' +
	      'nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref ' +
	      'nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType ' +
	      'objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface ' +
	      'offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit ' +
	      'orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier ' +
	      'paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration ' +
	      'panelHistory paramDimContext paramDimension paramLocator parent parentConstraint ' +
	      'particle particleExists particleInstancer particleRenderInfo partition pasteKey ' +
	      'pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture ' +
	      'pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo ' +
	      'pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult ' +
	      'pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend ' +
	      'polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal ' +
	      'polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge ' +
	      'polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge ' +
	      'polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet ' +
	      'polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet ' +
	      'polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection ' +
	      'polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge ' +
	      'polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet ' +
	      'polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix ' +
	      'polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut ' +
	      'polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet ' +
	      'polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge ' +
	      'polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex ' +
	      'polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection ' +
	      'polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection ' +
	      'polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint ' +
	      'polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate ' +
	      'polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge ' +
	      'polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing ' +
	      'polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet ' +
	      'polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace ' +
	      'popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer ' +
	      'projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx ' +
	      'propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd ' +
	      'python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection ' +
	      'radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl ' +
	      'readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference ' +
	      'referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE ' +
	      'registerPluginResource rehash reloadImage removeJoint removeMultiInstance ' +
	      'removePanelCategory rename renameAttr renameSelectionList renameUI render ' +
	      'renderGlobalsNode renderInfo renderLayerButton renderLayerParent ' +
	      'renderLayerPostProcess renderLayerUnparent renderManip renderPartition ' +
	      'renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor ' +
	      'renderWindowSelectContext renderer reorder reorderDeformers requires reroot ' +
	      'resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget ' +
	      'reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx ' +
	      'rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout ' +
	      'runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage ' +
	      'saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale ' +
	      'scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor ' +
	      'sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable ' +
	      'scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt ' +
	      'searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey ' +
	      'selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType ' +
	      'selectedNodes selectionConnection separator setAttr setAttrEnumResource ' +
	      'setAttrMapping setAttrNiceNameResource setConstraintRestPosition ' +
	      'setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr ' +
	      'setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe ' +
	      'setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag ' +
	      'setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject ' +
	      'setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets ' +
	      'shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare ' +
	      'shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField ' +
	      'shortNameOf showHelp showHidden showManipCtx showSelectionInTitle ' +
	      'showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface ' +
	      'size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep ' +
	      'snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound ' +
	      'soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort ' +
	      'spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString ' +
	      'startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp ' +
	      'stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex ' +
	      'stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex ' +
	      'stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString ' +
	      'stringToStringArray strip stripPrefixFromName stroke subdAutoProjection ' +
	      'subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV ' +
	      'subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror ' +
	      'subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease ' +
	      'subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring ' +
	      'surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton ' +
	      'symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext ' +
	      'texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext ' +
	      'texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text ' +
	      'textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList ' +
	      'textToShelf textureDisplacePlane textureHairColor texturePlacementContext ' +
	      'textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath ' +
	      'toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower ' +
	      'toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper ' +
	      'trace track trackCtx transferAttributes transformCompare transformLimits translator ' +
	      'trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence ' +
	      'twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit ' +
	      'unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink ' +
	      'uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane ' +
	      'viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex ' +
	      'waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire ' +
	      'wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform',
	    illegal: '</',
	    contains: [
	      hljs.C_NUMBER_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '`', end: '`',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        className: 'variable',
	        begin: '\\$\\d',
	        relevance: 5
	      },
	      {
	        className: 'variable',
	        begin: '[\\$\\%\\@\\*](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)'
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  }
	};
	/*
	Language: SQL
	*/
	
	hljs.LANGUAGES.sql = {
	  case_insensitive: true,
	  defaultMode: {
	    illegal: '[^\\s]',
	    contains: [
	      {
	        className: 'operator',
	        begin: '(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b', end: ';', endsWithParent: true,
	        keywords: {
	          keyword: 'all partial global month current_timestamp using go revoke smallint ' +
	            'indicator end-exec disconnect zone with character assertion to add current_user ' +
	            'usage input local alter match collate real then rollback get read timestamp ' +
	            'session_user not integer bit unique day minute desc insert execute like ilike|2 ' +
	            'level decimal drop continue isolation found where constraints domain right ' +
	            'national some module transaction relative second connect escape close system_user ' +
	            'for deferred section cast current sqlstate allocate intersect deallocate numeric ' +
	            'public preserve full goto initially asc no key output collation group by union ' +
	            'session both last language constraint column of space foreign deferrable prior ' +
	            'connection unknown action commit view or first into float year primary cascaded ' +
	            'except restrict set references names table outer open select size are rows from ' +
	            'prepare distinct leading create only next inner authorization schema ' +
	            'corresponding option declare precision immediate else timezone_minute external ' +
	            'varying translation true case exception join hour default double scroll value ' +
	            'cursor descriptor values dec fetch procedure delete and false int is describe ' +
	            'char as at in varchar null trailing any absolute current_time end grant ' +
	            'privileges when cross check write current_date pad begin temporary exec time ' +
	            'update catalog user sql date on identity timezone_hour natural whenever interval ' +
	            'work order cascade diagnostics nchar having left call do handler load replace ' +
	            'truncate start lock show pragma',
	          aggregate: 'count sum min max avg'
	        },
	        contains: [
	          {
	            className: 'string',
	            begin: '\'', end: '\'',
	            contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}],
	            relevance: 0
	          },
	          {
	            className: 'string',
	            begin: '"', end: '"',
	            contains: [hljs.BACKSLASH_ESCAPE, {begin: '""'}],
	            relevance: 0
	          },
	          {
	            className: 'string',
	            begin: '`', end: '`',
	            contains: [hljs.BACKSLASH_ESCAPE]
	          },
	          hljs.C_NUMBER_MODE
	        ]
	      },
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'comment',
	        begin: '--', end: '$'
	      }
	    ]
	  }
	};
	/*
	Language: Smalltalk
	Author: Vladimir Gubarkov <xonixx@gmail.com>
	*/
	
	hljs.LANGUAGES.smalltalk = function() {
	  var VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';
	  var CHAR = {
	    className: 'char',
	    begin: '\\$.{1}'
	  };
	  var SYMBOL = {
	    className: 'symbol',
	    begin: '#' + hljs.UNDERSCORE_IDENT_RE
	  };
	  return {
	    defaultMode: {
	      keywords: 'self super nil true false thisContext', // only 6
	      contains: [
	        {
	          className: 'comment',
	          begin: '"', end: '"',
	          relevance: 0
	        },
	        hljs.APOS_STRING_MODE,
	        {
	          className: 'class',
	          begin: '\\b[A-Z][A-Za-z0-9_]*',
	          relevance: 0
	        },
	        {
	          className: 'method',
	          begin: VAR_IDENT_RE + ':'
	        },
	        hljs.C_NUMBER_MODE,
	        SYMBOL,
	        CHAR,
	        {
	          className: 'localvars',
	          begin: '\\|\\s*((' + VAR_IDENT_RE + ')\\s*)+\\|'
	        },
	        {
	          className: 'array',
	          begin: '\\#\\(', end: '\\)',
	          contains: [
	            hljs.APOS_STRING_MODE,
	            CHAR,
	            hljs.C_NUMBER_MODE,
	            SYMBOL
	          ]
	        }
	      ]
	    }
	  };
	}();
	/*
	Language: Lisp
	Description: Generic lisp syntax
	Author: Vasily Polovnyov <vast@whiteants.net>
	*/
	
	hljs.LANGUAGES.lisp = function(){
	  var LISP_IDENT_RE = '[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#]*';
	  var LISP_SIMPLE_NUMBER_RE = '(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?';
	  var LITERAL = {
	    className: 'literal',
	    begin: '\\b(t{1}|nil)\\b'
	  };
	  var NUMBERS = [
	    {
	      className: 'number', begin: LISP_SIMPLE_NUMBER_RE
	    },
	    {
	      className: 'number', begin: '#b[0-1]+(/[0-1]+)?'
	    },
	    {
	      className: 'number', begin: '#o[0-7]+(/[0-7]+)?'
	    },
	    {
	      className: 'number', begin: '#x[0-9a-f]+(/[0-9a-f]+)?'
	    },
	    {
	      className: 'number', begin: '#c\\(' + LISP_SIMPLE_NUMBER_RE + ' +' + LISP_SIMPLE_NUMBER_RE, end: '\\)'
	    }
	  ]
	  var STRING = {
	    className: 'string',
	    begin: '"', end: '"',
	    contains: [hljs.BACKSLASH_ESCAPE],
	    relevance: 0
	  };
	  var COMMENT = {
	    className: 'comment',
	    begin: ';', end: '$'
	  };
	  var VARIABLE = {
	    className: 'variable',
	    begin: '\\*', end: '\\*'
	  };
	  var KEYWORD = {
	    className: 'keyword',
	    begin: '[:&]' + LISP_IDENT_RE
	  };
	  var QUOTED_LIST = {
	    begin: '\\(', end: '\\)',
	    contains: ['self', LITERAL, STRING].concat(NUMBERS)
	  };
	  var QUOTED1 = {
	    className: 'quoted',
	    begin: '[\'`]\\(', end: '\\)',
	    contains: NUMBERS.concat([STRING, VARIABLE, KEYWORD, QUOTED_LIST])
	  };
	  var QUOTED2 = {
	    className: 'quoted',
	    begin: '\\(quote ', end: '\\)',
	    keywords: {title: 'quote'},
	    contains: NUMBERS.concat([STRING, VARIABLE, KEYWORD, QUOTED_LIST])
	  };
	  var LIST = {
	    className: 'list',
	    begin: '\\(', end: '\\)'
	  };
	  var BODY = {
	    className: 'body',
	    endsWithParent: true, excludeEnd: true
	  };
	  LIST.contains = [{className: 'title', begin: LISP_IDENT_RE}, BODY];
	  BODY.contains = [QUOTED1, QUOTED2, LIST, LITERAL].concat(NUMBERS).concat([STRING, COMMENT, VARIABLE, KEYWORD]);
	
	  return {
	    case_insensitive: true,
	    defaultMode: {
	      illegal: '[^\\s]',
	      contains: NUMBERS.concat([
	        LITERAL,
	        STRING,
	        COMMENT,
	        QUOTED1, QUOTED2,
	        LIST
	      ])
	    }
	  };
	}();
	/*
	Language: Ini
	*/
	
	hljs.LANGUAGES.ini = {
	  case_insensitive: true,
	  defaultMode: {
	    illegal: '[^\\s]',
	    contains: [
	      {
	        className: 'comment',
	        begin: ';', end: '$'
	      },
	      {
	        className: 'title',
	        begin: '^\\[', end: '\\]'
	      },
	      {
	        className: 'setting',
	        begin: '^[a-z0-9_\\[\\]]+[ \\t]*=[ \\t]*', end: '$',
	        contains: [
	          {
	            className: 'value',
	            endsWithParent: true,
	            keywords: 'on off true false yes no',
	            contains: [hljs.QUOTE_STRING_MODE, hljs.NUMBER_MODE]
	          }
	        ]
	      }
	    ]
	  }
	};
	/*
	Language: Apache
	Author: Ruslan Keba <rukeba@gmail.com>
	Website: http://rukeba.com/
	Description: language definition for Apache configuration files (httpd.conf & .htaccess)
	Version: 1.1
	Date: 2008-12-27
	*/
	
	hljs.LANGUAGES.apache = function(){
	  var NUMBER = {className: 'number', begin: '[\\$%]\\d+'};
	  return {
	    case_insensitive: true,
	    defaultMode: {
	      keywords: {
	        keyword: 'acceptfilter acceptmutex acceptpathinfo accessfilename action addalt ' +
	          'addaltbyencoding addaltbytype addcharset adddefaultcharset adddescription ' +
	          'addencoding addhandler addicon addiconbyencoding addiconbytype addinputfilter ' +
	          'addlanguage addmoduleinfo addoutputfilter addoutputfilterbytype addtype alias ' +
	          'aliasmatch allow allowconnect allowencodedslashes allowoverride anonymous ' +
	          'anonymous_logemail anonymous_mustgiveemail anonymous_nouserid anonymous_verifyemail ' +
	          'authbasicauthoritative authbasicprovider authdbduserpwquery authdbduserrealmquery ' +
	          'authdbmgroupfile authdbmtype authdbmuserfile authdefaultauthoritative ' +
	          'authdigestalgorithm authdigestdomain authdigestnccheck authdigestnonceformat ' +
	          'authdigestnoncelifetime authdigestprovider authdigestqop authdigestshmemsize ' +
	          'authgroupfile authldapbinddn authldapbindpassword authldapcharsetconfig ' +
	          'authldapcomparednonserver authldapdereferencealiases authldapgroupattribute ' +
	          'authldapgroupattributeisdn authldapremoteuserattribute authldapremoteuserisdn ' +
	          'authldapurl authname authnprovideralias authtype authuserfile authzdbmauthoritative ' +
	          'authzdbmtype authzdefaultauthoritative authzgroupfileauthoritative ' +
	          'authzldapauthoritative authzownerauthoritative authzuserauthoritative ' +
	          'balancermember browsermatch browsermatchnocase bufferedlogs cachedefaultexpire ' +
	          'cachedirlength cachedirlevels cachedisable cacheenable cachefile ' +
	          'cacheignorecachecontrol cacheignoreheaders cacheignorenolastmod ' +
	          'cacheignorequerystring cachelastmodifiedfactor cachemaxexpire cachemaxfilesize ' +
	          'cacheminfilesize cachenegotiateddocs cacheroot cachestorenostore cachestoreprivate ' +
	          'cgimapextension charsetdefault charsetoptions charsetsourceenc checkcaseonly ' +
	          'checkspelling chrootdir contentdigest cookiedomain cookieexpires cookielog ' +
	          'cookiename cookiestyle cookietracking coredumpdirectory customlog dav ' +
	          'davdepthinfinity davgenericlockdb davlockdb davmintimeout dbdexptime dbdkeep ' +
	          'dbdmax dbdmin dbdparams dbdpersist dbdpreparesql dbdriver defaulticon ' +
	          'defaultlanguage defaulttype deflatebuffersize deflatecompressionlevel ' +
	          'deflatefilternote deflatememlevel deflatewindowsize deny directoryindex ' +
	          'directorymatch directoryslash documentroot dumpioinput dumpiologlevel dumpiooutput ' +
	          'enableexceptionhook enablemmap enablesendfile errordocument errorlog example ' +
	          'expiresactive expiresbytype expiresdefault extendedstatus extfilterdefine ' +
	          'extfilteroptions fileetag filterchain filterdeclare filterprotocol filterprovider ' +
	          'filtertrace forcelanguagepriority forcetype forensiclog gracefulshutdowntimeout ' +
	          'group header headername hostnamelookups identitycheck identitychecktimeout ' +
	          'imapbase imapdefault imapmenu include indexheadinsert indexignore indexoptions ' +
	          'indexorderdefault indexstylesheet isapiappendlogtoerrors isapiappendlogtoquery ' +
	          'isapicachefile isapifakeasync isapilognotsupported isapireadaheadbuffer keepalive ' +
	          'keepalivetimeout languagepriority ldapcacheentries ldapcachettl ' +
	          'ldapconnectiontimeout ldapopcacheentries ldapopcachettl ldapsharedcachefile ' +
	          'ldapsharedcachesize ldaptrustedclientcert ldaptrustedglobalcert ldaptrustedmode ' +
	          'ldapverifyservercert limitinternalrecursion limitrequestbody limitrequestfields ' +
	          'limitrequestfieldsize limitrequestline limitxmlrequestbody listen listenbacklog ' +
	          'loadfile loadmodule lockfile logformat loglevel maxclients maxkeepaliverequests ' +
	          'maxmemfree maxrequestsperchild maxrequestsperthread maxspareservers maxsparethreads ' +
	          'maxthreads mcachemaxobjectcount mcachemaxobjectsize mcachemaxstreamingbuffer ' +
	          'mcacheminobjectsize mcacheremovalalgorithm mcachesize metadir metafiles metasuffix ' +
	          'mimemagicfile minspareservers minsparethreads mmapfile mod_gzip_on ' +
	          'mod_gzip_add_header_count mod_gzip_keep_workfiles mod_gzip_dechunk ' +
	          'mod_gzip_min_http mod_gzip_minimum_file_size mod_gzip_maximum_file_size ' +
	          'mod_gzip_maximum_inmem_size mod_gzip_temp_dir mod_gzip_item_include ' +
	          'mod_gzip_item_exclude mod_gzip_command_version mod_gzip_can_negotiate ' +
	          'mod_gzip_handle_methods mod_gzip_static_suffix mod_gzip_send_vary ' +
	          'mod_gzip_update_static modmimeusepathinfo multiviewsmatch namevirtualhost noproxy ' +
	          'nwssltrustedcerts nwsslupgradeable options order passenv pidfile protocolecho ' +
	          'proxybadheader proxyblock proxydomain proxyerroroverride proxyftpdircharset ' +
	          'proxyiobuffersize proxymaxforwards proxypass proxypassinterpolateenv ' +
	          'proxypassmatch proxypassreverse proxypassreversecookiedomain ' +
	          'proxypassreversecookiepath proxypreservehost proxyreceivebuffersize proxyremote ' +
	          'proxyremotematch proxyrequests proxyset proxystatus proxytimeout proxyvia ' +
	          'readmename receivebuffersize redirect redirectmatch redirectpermanent ' +
	          'redirecttemp removecharset removeencoding removehandler removeinputfilter ' +
	          'removelanguage removeoutputfilter removetype requestheader require rewritebase ' +
	          'rewritecond rewriteengine rewritelock rewritelog rewriteloglevel rewritemap ' +
	          'rewriteoptions rewriterule rlimitcpu rlimitmem rlimitnproc satisfy scoreboardfile ' +
	          'script scriptalias scriptaliasmatch scriptinterpretersource scriptlog ' +
	          'scriptlogbuffer scriptloglength scriptsock securelisten seerequesttail ' +
	          'sendbuffersize serveradmin serveralias serverlimit servername serverpath ' +
	          'serverroot serversignature servertokens setenv setenvif setenvifnocase sethandler ' +
	          'setinputfilter setoutputfilter ssienableaccess ssiendtag ssierrormsg ssistarttag ' +
	          'ssitimeformat ssiundefinedecho sslcacertificatefile sslcacertificatepath ' +
	          'sslcadnrequestfile sslcadnrequestpath sslcarevocationfile sslcarevocationpath ' +
	          'sslcertificatechainfile sslcertificatefile sslcertificatekeyfile sslciphersuite ' +
	          'sslcryptodevice sslengine sslhonorciperorder sslmutex ssloptions ' +
	          'sslpassphrasedialog sslprotocol sslproxycacertificatefile ' +
	          'sslproxycacertificatepath sslproxycarevocationfile sslproxycarevocationpath ' +
	          'sslproxyciphersuite sslproxyengine sslproxymachinecertificatefile ' +
	          'sslproxymachinecertificatepath sslproxyprotocol sslproxyverify ' +
	          'sslproxyverifydepth sslrandomseed sslrequire sslrequiressl sslsessioncache ' +
	          'sslsessioncachetimeout sslusername sslverifyclient sslverifydepth startservers ' +
	          'startthreads substitute suexecusergroup threadlimit threadsperchild ' +
	          'threadstacksize timeout traceenable transferlog typesconfig unsetenv ' +
	          'usecanonicalname usecanonicalphysicalport user userdir virtualdocumentroot ' +
	          'virtualdocumentrootip virtualscriptalias virtualscriptaliasip ' +
	          'win32disableacceptex xbithack',
	        literal: 'on off'
	      },
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        {
	          className: 'sqbracket',
	          begin: '\\s\\[', end: '\\]$'
	        },
	        {
	          className: 'cbracket',
	          begin: '[\\$%]\\{', end: '\\}',
	          contains: ['self', NUMBER]
	        },
	        NUMBER,
	        {className: 'tag', begin: '</?', end: '>'},
	        hljs.QUOTE_STRING_MODE
	      ]
	    }
	  };
	}();
	/*
	Language: Nginx
	Author: Peter Leonov <gojpeg@yandex.ru>
	*/
	
	hljs.LANGUAGES.nginx = function() {
	  var VAR1 = {
	    className: 'variable',
	    begin: '\\$\\d+'
	  };
	  var VAR2 = {
	    className: 'variable',
	    begin: '\\${', end: '}'
	  };
	  var VAR3 = {
	    className: 'variable',
	    begin: '[\\$\\@]' + hljs.UNDERSCORE_IDENT_RE
	  };
	
	  return {
	    defaultMode: {
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        { // directive
	          begin: hljs.UNDERSCORE_IDENT_RE, end: ';|{', returnEnd: true,
	          keywords:
	            'accept_mutex accept_mutex_delay access_log add_after_body add_before_body ' +
	            'add_header addition_types alias allow ancient_browser ancient_browser_value ' +
	            'auth_basic auth_basic_user_file autoindex autoindex_exact_size ' +
	            'autoindex_localtime break charset charset_map charset_types ' +
	            'client_body_buffer_size client_body_in_file_only client_body_in_single_buffer ' +
	            'client_body_temp_path client_body_timeout client_header_buffer_size ' +
	            'client_header_timeout client_max_body_size connection_pool_size connections ' +
	            'create_full_put_path daemon dav_access dav_methods debug_connection ' +
	            'debug_points default_type deny directio directio_alignment echo echo_after_body ' +
	            'echo_before_body echo_blocking_sleep echo_duplicate echo_end echo_exec ' +
	            'echo_flush echo_foreach_split echo_location echo_location_async ' +
	            'echo_read_request_body echo_request_body echo_reset_timer echo_sleep ' +
	            'echo_subrequest echo_subrequest_async empty_gif env error_log error_page events ' +
	            'expires fastcgi_bind fastcgi_buffer_size fastcgi_buffers ' +
	            'fastcgi_busy_buffers_size fastcgi_cache fastcgi_cache_key fastcgi_cache_methods ' +
	            'fastcgi_cache_min_uses fastcgi_cache_path fastcgi_cache_use_stale ' +
	            'fastcgi_cache_valid fastcgi_catch_stderr fastcgi_connect_timeout ' +
	            'fastcgi_hide_header fastcgi_ignore_client_abort fastcgi_ignore_headers ' +
	            'fastcgi_index fastcgi_intercept_errors fastcgi_max_temp_file_size ' +
	            'fastcgi_next_upstream fastcgi_param fastcgi_pass fastcgi_pass_header ' +
	            'fastcgi_pass_request_body fastcgi_pass_request_headers fastcgi_read_timeout ' +
	            'fastcgi_send_lowat fastcgi_send_timeout fastcgi_split_path_info fastcgi_store ' +
	            'fastcgi_store_access fastcgi_temp_file_write_size fastcgi_temp_path ' +
	            'fastcgi_upstream_fail_timeout fastcgi_upstream_max_fails flv geo geoip_city ' +
	            'geoip_country gzip gzip_buffers gzip_comp_level gzip_disable gzip_hash ' +
	            'gzip_http_version gzip_min_length gzip_no_buffer gzip_proxied gzip_static ' +
	            'gzip_types gzip_vary gzip_window http if if_modified_since ' +
	            'ignore_invalid_headers image_filter image_filter_buffer ' +
	            'image_filter_jpeg_quality image_filter_transparency include index internal ' +
	            'ip_hash js js_load js_require js_utf8 keepalive_requests keepalive_timeout ' +
	            'kqueue_changes kqueue_events large_client_header_buffers limit_conn ' +
	            'limit_conn_log_level limit_except limit_rate limit_rate_after limit_req ' +
	            'limit_req_log_level limit_req_zone limit_zone lingering_time lingering_timeout ' +
	            'listen location lock_file log_format log_not_found log_subrequest map ' +
	            'map_hash_bucket_size map_hash_max_size master_process memcached_bind ' +
	            'memcached_buffer_size memcached_connect_timeout memcached_next_upstream ' +
	            'memcached_pass memcached_read_timeout memcached_send_timeout ' +
	            'memcached_upstream_fail_timeout memcached_upstream_max_fails merge_slashes ' +
	            'min_delete_depth modern_browser modern_browser_value more_clear_headers ' +
	            'more_clear_input_headers more_set_headers more_set_input_headers msie_padding ' +
	            'msie_refresh multi_accept open_file_cache open_file_cache_errors ' +
	            'open_file_cache_events open_file_cache_min_uses open_file_cache_retest ' +
	            'open_file_cache_valid open_log_file_cache optimize_server_names output_buffers ' +
	            'override_charset perl perl_modules perl_require perl_set pid port_in_redirect ' +
	            'post_action postpone_gzipping postpone_output proxy_bind proxy_buffer_size ' +
	            'proxy_buffering proxy_buffers proxy_busy_buffers_size proxy_cache ' +
	            'proxy_cache_key proxy_cache_methods proxy_cache_min_uses proxy_cache_path ' +
	            'proxy_cache_use_stale proxy_cache_valid proxy_connect_timeout ' +
	            'proxy_headers_hash_bucket_size proxy_headers_hash_max_size proxy_hide_header ' +
	            'proxy_ignore_client_abort proxy_ignore_headers proxy_intercept_errors ' +
	            'proxy_max_temp_file_size proxy_method proxy_next_upstream proxy_pass ' +
	            'proxy_pass_header proxy_pass_request_body proxy_pass_request_headers ' +
	            'proxy_read_timeout proxy_redirect proxy_send_lowat proxy_send_timeout ' +
	            'proxy_set_body proxy_set_header proxy_store proxy_store_access ' +
	            'proxy_temp_file_write_size proxy_temp_path proxy_upstream_fail_timeout ' +
	            'proxy_upstream_max_fails push_authorized_channels_only push_channel_group ' +
	            'push_max_channel_id_length push_max_channel_subscribers ' +
	            'push_max_message_buffer_length push_max_reserved_memory ' +
	            'push_message_buffer_length push_message_timeout push_min_message_buffer_length ' +
	            'push_min_message_recipients push_publisher push_store_messages push_subscriber ' +
	            'push_subscriber_concurrency random_index read_ahead real_ip_header ' +
	            'recursive_error_pages request_pool_size reset_timedout_connection resolver ' +
	            'resolver_timeout return rewrite rewrite_log root satisfy satisfy_any ' +
	            'send_lowat send_timeout sendfile sendfile_max_chunk server server_name ' +
	            'server_name_in_redirect server_names_hash_bucket_size server_names_hash_max_size ' +
	            'server_tokens set set_real_ip_from source_charset ssi ' +
	            'ssi_ignore_recycled_buffers ssi_min_file_chunk ssi_silent_errors ssi_types ' +
	            'ssi_value_length ssl ssl_certificate ssl_certificate_key ssl_ciphers ' +
	            'ssl_client_certificate ssl_crl ssl_dhparam ssl_prefer_server_ciphers ' +
	            'ssl_protocols ssl_session_cache ssl_session_timeout ssl_verify_client ' +
	            'ssl_verify_depth sub_filter sub_filter_once sub_filter_types tcp_nodelay ' +
	            'tcp_nopush timer_resolution try_files types types_hash_bucket_size ' +
	            'types_hash_max_size underscores_in_headers uninitialized_variable_warn upstream ' +
	            'use user userid userid_domain userid_expires userid_mark userid_name userid_p3p ' +
	            'userid_path userid_service valid_referers variables_hash_bucket_size ' +
	            'variables_hash_max_size worker_connections worker_cpu_affinity worker_priority ' +
	            'worker_processes worker_rlimit_core worker_rlimit_nofile ' +
	            'worker_rlimit_sigpending working_directory xml_entities xslt_stylesheet xslt_types',
	          relevance: 0,
	          contains: [
	            hljs.HASH_COMMENT_MODE,
	            {
	              begin: '\\s', end: '[;{]', returnBegin: true, returnEnd: true,
	              lexems: '[a-z/]+',
	              keywords: {
	                built_in:
	                  'on off yes no true false none blocked debug info notice warn error crit ' +
	                  'select permanent redirect kqueue rtsig epoll poll /dev/poll'
	              },
	              relevance: 0,
	              contains: [
	                hljs.HASH_COMMENT_MODE,
	                {
	                  className: 'string',
	                  begin: '"', end: '"',
	                  contains: [hljs.BACKSLASH_ESCAPE, VAR1, VAR2, VAR3],
	                  relevance: 0
	                },
	                {
	                  className: 'string',
	                  begin: "'", end: "'",
	                  contains: [hljs.BACKSLASH_ESCAPE, VAR1, VAR2, VAR3],
	                  relevance: 0
	                },
	                {
	                  className: 'string',
	                  begin: '([a-z]+):/', end: '[;\\s]', returnEnd: true
	                },
	                {
	                  className: 'regexp',
	                  begin: "\\s\\^", end: "\\s|{|;", returnEnd: true,
	                  contains: [hljs.BACKSLASH_ESCAPE, VAR1, VAR2, VAR3]
	                },
	                // regexp locations (~, ~*)
	                {
	                  className: 'regexp',
	                  begin: "~\\*?\\s+", end: "\\s|{|;", returnEnd: true,
	                  contains: [hljs.BACKSLASH_ESCAPE, VAR1, VAR2, VAR3]
	                },
	                // *.example.com
	                {
	                  className: 'regexp',
	                  begin: "\\*(\\.[a-z\\-]+)+",
	                  contains: [hljs.BACKSLASH_ESCAPE, VAR1, VAR2, VAR3]
	                },
	                // sub.example.*
	                {
	                  className: 'regexp',
	                  begin: "([a-z\\-]+\\.)+\\*",
	                  contains: [hljs.BACKSLASH_ESCAPE, VAR1, VAR2, VAR3]
	                },
	                // IP
	                {
	                  className: 'number',
	                  begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b'
	                },
	                // units
	                {
	                  className: 'number',
	                  begin: '\\s\\d+[kKmMgGdshdwy]*\\b',
	                  relevance: 0
	                },
	                VAR1, VAR2, VAR3
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  }
	}();
	/*
	Language: Diff
	Description: Unified and context diff
	Author: Vasily Polovnyov <vast@whiteants.net>
	*/
	
	hljs.LANGUAGES.diff = {
	  case_insensitive: true,
	  defaultMode: {
	    contains: [
	      {
	        className: 'chunk',
	        begin: '^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$',
	        relevance: 10
	      },
	      {
	        className: 'chunk',
	        begin: '^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$',
	        relevance: 10
	      },
	      {
	        className: 'chunk',
	        begin: '^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$',
	        relevance: 10
	      },
	      {
	        className: 'header',
	        begin: 'Index: ', end: '$'
	      },
	      {
	        className: 'header',
	        begin: '=====', end: '=====$'
	      },
	      {
	        className: 'header',
	        begin: '^\\-\\-\\-', end: '$'
	      },
	      {
	        className: 'header',
	        begin: '^\\*{3} ', end: '$'
	      },
	      {
	        className: 'header',
	        begin: '^\\+\\+\\+', end: '$'
	      },
	      {
	        className: 'header',
	        begin: '\\*{5}', end: '\\*{5}$'
	      },
	      {
	        className: 'addition',
	        begin: '^\\+', end: '$'
	      },
	      {
	        className: 'deletion',
	        begin: '^\\-', end: '$'
	      },
	      {
	        className: 'change',
	        begin: '^\\!', end: '$'
	      }
	    ]
	  }
	};
	/*
	Language: DOS .bat
	Author: Alexander Makarov (http://rmcreative.ru/)
	*/
	
	hljs.LANGUAGES.dos = {
	  case_insensitive: true,
	  defaultMode: {
	    keywords: {
	      flow: 'if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq',
	      keyword: 'shift cd dir echo setlocal endlocal set pause copy',
	      stream: 'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux',
	      winutils: 'ping net ipconfig taskkill xcopy ren del'
	    },
	    contains: [
	      {
	        className: 'envvar', begin: '%%[^ ]'
	      },
	      {
	        className: 'envvar', begin: '%[^ ]+?%'
	      },
	      {
	        className: 'envvar', begin: '![^ ]+?!'
	      },
	      {
	        className: 'number', begin: '\\b\\d+',
	        relevance: 0
	      },
	      {
	        className: 'comment',
	        begin: '@?rem', end: '$'
	      }
	    ]
	  }
	};
	/*
	Language: Bash
	Author: vah <vahtenberg@gmail.com>
	*/
	
	hljs.LANGUAGES.bash = function(){
	  var BASH_LITERAL = 'true false';
	  var VAR1 = {
	    className: 'variable',
	    begin: '\\$([a-zA-Z0-9_]+)\\b'
	  };
	  var VAR2 = {
	    className: 'variable',
	    begin: '\\$\\{(([^}])|(\\\\}))+\\}',
	    contains: [hljs.C_NUMBER_MODE]
	  };
	  var QUOTE_STRING = {
	    className: 'string',
	    begin: '"', end: '"',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE, VAR1, VAR2],
	    relevance: 0
	  };
	  var APOS_STRING = {
	    className: 'string',
	    begin: '\'', end: '\'',
	    contains: [{begin: '\'\''}],
	    relevance: 0
	  };
	  var TEST_CONDITION = {
	    className: 'test_condition',
	    begin: '', end: '',
	    contains: [QUOTE_STRING, APOS_STRING, VAR1, VAR2, hljs.C_NUMBER_MODE],
	    keywords: {
	      literal: BASH_LITERAL
	    },
	    relevance: 0
	  };
	
	  return {
	    defaultMode: {
	      keywords: {
	        keyword: 'if then else fi for break continue while in do done echo exit return set declare',
	        literal: BASH_LITERAL
	      },
	      contains: [
	        {
	          className: 'shebang',
	          begin: '(#!\\/bin\\/bash)|(#!\\/bin\\/sh)',
	          relevance: 10
	        },
	        VAR1,
	        VAR2,
	        hljs.HASH_COMMENT_MODE,
	        hljs.C_NUMBER_MODE,
	        QUOTE_STRING,
	        APOS_STRING,
	        hljs.inherit(TEST_CONDITION, {begin: '\\[ ', end: ' \\]', relevance: 0}),
	        hljs.inherit(TEST_CONDITION, {begin: '\\[\\[ ', end: ' \\]\\]'})
	      ]
	    }
	  };
	}();
	/*
	Language: CMake
	Description: CMake is an open-source cross-platform system for build automation.
	Author: Igor Kalnitsky <igor.kalnitsky@gmail.com>
	Website: http://kalnitsky.org.ua/
	*/
	
	hljs.LANGUAGES.cmake = {
	  case_insensitive: true,
	  defaultMode: {
	    keywords: 'add_custom_command add_custom_target add_definitions add_dependencies ' +
	      'add_executable add_library add_subdirectory add_test aux_source_directory ' +
	      'break build_command cmake_minimum_required cmake_policy configure_file ' +
	      'create_test_sourcelist define_property else elseif enable_language enable_testing ' +
	      'endforeach endfunction endif endmacro endwhile execute_process export find_file ' +
	      'find_library find_package find_path find_program fltk_wrap_ui foreach function ' +
	      'get_cmake_property get_directory_property get_filename_component get_property ' +
	      'get_source_file_property get_target_property get_test_property if include ' +
	      'include_directories include_external_msproject include_regular_expression install ' +
	      'link_directories load_cache load_command macro mark_as_advanced message option ' +
	      'output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return ' +
	      'separate_arguments set set_directory_properties set_property ' +
	      'set_source_files_properties set_target_properties set_tests_properties site_name ' +
	      'source_group string target_link_libraries try_compile try_run unset variable_watch ' +
	      'while build_name exec_program export_library_dependencies install_files ' +
	      'install_programs install_targets link_libraries make_directory remove subdir_depends ' +
	      'subdirs use_mangled_mesa utility_source variable_requires write_file',
	    contains: [
	      {
	        className: 'envvar',
	        begin: '\\${', end: '}'
	      },
	      hljs.HASH_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE
	    ]
	  }
	};
	/*
	Language: Axapta
	Author: Dmitri Roudakov <dmitri@roudakov.ru>
	*/
	
	hljs.LANGUAGES.axapta  = {
	  defaultMode: {
	    keywords: 'false int abstract private char interface boolean static null if for true ' +
	      'while long throw finally protected extends final implements return void enum else ' +
	      'break new catch byte super class case short default double public try this switch ' +
	      'continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count ' +
	      'order group by asc desc index hint like dispaly edit client server ttsbegin ' +
	      'ttscommit str real date container anytype common div mod',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'preprocessor',
	        begin: '#', end: '$'
	      },
	      {
	        className: 'class',
	        beginWithKeyword: true, end: '{',
	        illegal: ':',
	        keywords: 'class interface',
	        contains: [
	          {
	            className: 'inheritance',
	            beginWithKeyword: true,
	            keywords: 'extends implements',
	            relevance: 10
	          },
	          {
	            className: 'title',
	            begin: hljs.UNDERSCORE_IDENT_RE
	          }
	        ]
	      }
	    ]
	  }
	};
	/*
	Language: 1C
	Author: Yuri Ivanov <ivanov@supersoft.ru>
	Contributors: Sergey Baranov <segyrn@yandex.ru>
	*/
	
	hljs.LANGUAGES['1c'] = function(){
	  var IDENT_RE_RU = '[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*';
	  var OneS_KEYWORDS = 'возврат дата для если и или иначе иначеесли исключение конецесли ' +
	    'конецпопытки конецпроцедуры конецфункции конеццикла константа не перейти перем ' +
	    'перечисление по пока попытка прервать продолжить процедура строка тогда фс функция цикл ' +
	    'число экспорт';
	  var OneS_BUILT_IN = 'ansitooem oemtoansi ввестивидсубконто ввестидату ввестизначение ' +
	    'ввестиперечисление ввестипериод ввестиплансчетов ввестистроку ввестичисло вопрос ' +
	    'восстановитьзначение врег выбранныйплансчетов вызватьисключение датагод датамесяц ' +
	    'датачисло добавитьмесяц завершитьработусистемы заголовоксистемы записьжурналарегистрации ' +
	    'запуститьприложение зафиксироватьтранзакцию значениевстроку значениевстрокувнутр ' +
	    'значениевфайл значениеизстроки значениеизстрокивнутр значениеизфайла имякомпьютера ' +
	    'имяпользователя каталогвременныхфайлов каталогиб каталогпользователя каталогпрограммы ' +
	    'кодсимв командасистемы конгода конецпериодаби конецрассчитанногопериодаби ' +
	    'конецстандартногоинтервала конквартала конмесяца коннедели лев лог лог10 макс ' +
	    'максимальноеколичествосубконто мин монопольныйрежим названиеинтерфейса названиенабораправ ' +
	    'назначитьвид назначитьсчет найти найтипомеченныенаудаление найтиссылки началопериодаби ' +
	    'началостандартногоинтервала начатьтранзакцию начгода начквартала начмесяца начнедели ' +
	    'номерднягода номерднянедели номернеделигода нрег обработкаожидания окр описаниеошибки ' +
	    'основнойжурналрасчетов основнойплансчетов основнойязык открытьформу открытьформумодально ' +
	    'отменитьтранзакцию очиститьокносообщений периодстр полноеимяпользователя получитьвремята ' +
	    'получитьдатута получитьдокументта получитьзначенияотбора получитьпозициюта ' +
	    'получитьпустоезначение получитьта прав праводоступа предупреждение префиксавтонумерации ' +
	    'пустаястрока пустоезначение рабочаядаттьпустоезначение рабочаядата разделительстраниц ' +
	    'разделительстрок разм разобратьпозициюдокумента рассчитатьрегистрына ' +
	    'рассчитатьрегистрыпо сигнал симв символтабуляции создатьобъект сокрл сокрлп сокрп ' +
	    'сообщить состояние сохранитьзначение сред статусвозврата стрдлина стрзаменить ' +
	    'стрколичествострок стрполучитьстроку  стрчисловхождений сформироватьпозициюдокумента ' +
	    'счетпокоду текущаядата текущеевремя типзначения типзначениястр удалитьобъекты ' +
	    'установитьтана установитьтапо фиксшаблон формат цел шаблон';
	  var DQUOTE =  {className: 'dquote',  begin: '""'};
	  var STR_START = {
	      className: 'string',
	      begin: '"', end: '"|$',
	      contains: [DQUOTE],
	      relevance: 0
	    };
	  var STR_CONT = {
	    className: 'string',
	    begin: '\\|', end: '"|$',
	    contains: [DQUOTE]
	  };
	
	  return {
	    case_insensitive: true,
	    defaultMode: {
	      lexems: IDENT_RE_RU,
	      keywords: {keyword: OneS_KEYWORDS, built_in: OneS_BUILT_IN},
	      contains: [
	        hljs.C_LINE_COMMENT_MODE,
	        hljs.NUMBER_MODE,
	        STR_START, STR_CONT,
	        {
	          className: 'function',
	          begin: '(процедура|функция)', end: '$',
	          lexems: IDENT_RE_RU,
	          keywords: 'процедура функция',
	          contains: [
	            {className: 'title', begin: IDENT_RE_RU},
	            {
	              className: 'tail',
	              endsWithParent: true,
	              contains: [
	                {
	                  className: 'params',
	                  begin: '\\(', end: '\\)',
	                  lexems: IDENT_RE_RU,
	                  keywords: 'знач',
	                  contains: [STR_START, STR_CONT]
	                },
	                {
	                  className: 'export',
	                  begin: 'экспорт', endsWithParent: true,
	                  lexems: IDENT_RE_RU,
	                  keywords: 'экспорт',
	                  contains: [hljs.C_LINE_COMMENT_MODE]
	                }
	              ]
	            },
	            hljs.C_LINE_COMMENT_MODE
	          ]
	        },
	        {className: 'preprocessor', begin: '#', end: '$'},
	        {className: 'date', begin: '\'\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})\''}
	      ]
	    }
	  };
	}();
	/*
	Language: AVR Assembler
	Author: Vladimir Ermakov <vooon341@gmail.com>
	*/
	
	hljs.LANGUAGES.avrasm =
	{
	  case_insensitive: true,
	  defaultMode: {
	    keywords: {
	      keyword:
	        /* mnemonic */
	        'adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs ' +
	        'brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr ' +
	        'clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor ' +
	        'fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul ' +
	        'muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs ' +
	        'sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub ' +
	        'subi swap tst wdr',
	      built_in:
	        /* general purpose registers */
	        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 ' +
	        'r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ' +
	        /* IO Registers (ATMega128) */
	        'ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h ' +
	        'tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ' +
	        'ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ' +
	        'ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk ' +
	        'tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ' +
	        'ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr ' +
	        'porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ' +
	        'ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf'
	    },
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,
	      {className: 'comment', begin: ';',  end: '$'},
	      hljs.C_NUMBER_MODE, // 0x..., decimal, float
	      hljs.BINARY_NUMBER_MODE, // 0b...
	      {
	        className: 'number',
	        begin: '\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)' // $..., 0o...
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'', end: '[^\\\\]\'',
	        illegal: '[^\\\\][^\']'
	      },
	      {className: 'label',  begin: '^[A-Za-z0-9_.$]+:'},
	      {className: 'preprocessor', begin: '#', end: '$'},
	      {  // директивы «.include» «.macro» и т.д.
	        className: 'preprocessor',
	        begin: '\\.[a-zA-Z]+'
	      },
	      {  // подстановка в «.macro»
	        className: 'localvars',
	        begin: '@[0-9]+'
	      }
	    ]
	  }
	};
	
	/*
	Language: VHDL
	Author: Igor Kalnitsky <igor@kalnitsky.org>
	Contributors: Daniel C.K. Kho <daniel.kho@gmail.com>
	Description: VHDL is a hardware description language used in electronic design automation to describe digital and mixed-signal systems.
	*/
	
	hljs.LANGUAGES.vhdl = function() {
	  return {
	    case_insensitive: true,
	    defaultMode: {
	      keywords: {
	        keyword:
	          'abs access after alias all and architecture array assert attribute begin block ' +
	          'body buffer bus case component configuration constant context cover disconnect ' +
	          'downto default else elsif end entity exit fairness file for force function generate ' +
	          'generic group guarded if impure in inertial inout is label library linkage literal ' +
	          'loop map mod nand new next nor not null of on open or others out package port ' +
	          'postponed procedure process property protected pure range record register reject ' +
	          'release rem report restrict restrict_guarantee return rol ror select sequence ' +
	          'severity shared signal sla sll sra srl strong subtype then to transport type ' +
	          'unaffected units until use variable vmode vprop vunit wait when while with xnor xor',
	        typename:
	          'boolean bit character severity_level integer time delay_length natural positive ' +
	          'string bit_vector file_open_kind file_open_status std_ulogic std_ulogic_vector ' +
	          'std_logic std_logic_vector unsigned signed boolean_vector integer_vector ' +
	          'real_vector time_vector'
	      },
	      illegal: '{',
	      contains: [
	        hljs.C_BLOCK_COMMENT_MODE,        // VHDL-2008 block commenting.
	        {
	          className: 'comment',
	          begin: '--', end: '$'
	        },
	        hljs.QUOTE_STRING_MODE,
	        hljs.C_NUMBER_MODE,
	        {
	          className: 'literal',
	          begin: '\'(U|X|0|1|Z|W|L|H|-)\'',
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          className: 'attribute',
	          begin: '\'[A-Za-z](_?[A-Za-z0-9])*',
	          contains: [hljs.BACKSLASH_ESCAPE]
	        }
	      ]
	    } // defaultMode
	  } // return;
	}();
	/*
	Language: Parser3
	Requires: xml.js
	Author: Oleg Volchkov <oleg@volchkov.net>
	*/
	
	hljs.LANGUAGES.parser3 = {
	  defaultMode: {
	    subLanguage: 'xml',
	    contains: [
	      {
	        className: 'comment',
	        begin: '^#', end: '$'
	      },
	      {
	        className: 'comment',
	        begin: '\\^rem{', end: '}',
	        relevance: 10,
	        contains: [
	          {
	            begin: '{', end: '}',
	            contains: ['self']
	          }
	        ]
	      },
	      {
	        className: 'preprocessor',
	        begin: '^@(?:BASE|USE|CLASS|OPTIONS)$',
	        relevance: 10
	      },
	      {
	        className: 'title',
	        begin: '@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$'
	      },
	      {
	        className: 'variable',
	        begin: '\\$\\{?[\\w\\-\\.\\:]+\\}?'
	      },
	      {
	        className: 'keyword',
	        begin: '\\^[\\w\\-\\.\\:]+'
	      },
	      {
	        className: 'number',
	        begin: '\\^#[0-9a-fA-F]+'
	      },
	      hljs.C_NUMBER_MODE
	    ]
	  }
	};
	/*
	Language: TeX
	Author: Vladimir Moskva <vladmos@gmail.com>
	Website: http://fulc.ru/
	*/
	
	hljs.LANGUAGES.tex = function() {
	  var COMMAND1 = {
	    className: 'command',
	    begin: '\\\\[a-zA-Zа-яА-я]+[\\*]?',
	    relevance: 10
	  };
	  var COMMAND2 = {
	    className: 'command',
	    begin: '\\\\[^a-zA-Zа-яА-я0-9]',
	    relevance: 0
	  };
	  var SPECIAL = {
	    className: 'special',
	    begin: '[{}\\[\\]\\&#~]',
	    relevance: 0
	  };
	
	  return {
	    defaultMode: {
	      contains: [
	        { // parameter
	          begin: '\\\\[a-zA-Zа-яА-я]+[\\*]? *= *-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?',
	          returnBegin: true,
	          contains: [
	            COMMAND1, COMMAND2,
	            {
	              className: 'number',
	              begin: ' *=', end: '-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?',
	              excludeBegin: true
	            }
	          ],
	          relevance: 10
	        },
	        COMMAND1, COMMAND2,
	        SPECIAL,
	        {
	          className: 'formula',
	          begin: '\\$\\$', end: '\\$\\$',
	          contains: [COMMAND1, COMMAND2, SPECIAL],
	          relevance: 0
	        },
	        {
	          className: 'formula',
	          begin: '\\$', end: '\\$',
	          contains: [COMMAND1, COMMAND2, SPECIAL],
	          relevance: 0
	        },
	        {
	          className: 'comment',
	          begin: '%', end: '$',
	          relevance: 0
	        }
	      ]
	    }
	  };
	}();
	/*
	Language: Haskell
	Author: Jeremy Hull <sourdrums@gmail.com>
	*/
	
	hljs.LANGUAGES.haskell = function(){
	  var LABEL = {
	    className: 'label',
	    begin: '\\b[A-Z][\\w\']*',
	    relevance: 0
	  };
	  var CONTAINER = {
	    className: 'container',
	    begin: '\\(', end: '\\)',
	    contains: [
	      {className: 'label', begin: '\\b[A-Z][\\w\\(\\)\\.\']*'},
	      {className: 'title', begin: '[_a-z][\\w\']*'}
	    ]
	  };
	
	  return {
	    defaultMode: {
	      keywords:
	        'let in if then else case of where do module import hiding qualified type data ' +
	        'newtype deriving class instance null not as',
	      contains: [
	        {
	          className: 'comment',
	          begin: '--', end: '$'
	        },
	        {
	          className: 'comment',
	          begin: '{-', end: '-}'
	        },
	        {
	          className: 'string',
	          begin: '\\s+\'', end: '\'',
	          contains: [hljs.BACKSLASH_ESCAPE],
	          relevance: 0
	        },
	        hljs.QUOTE_STRING_MODE,
	        {
	          className: 'import',
	          begin: '\\bimport', end: '$',
	          keywords: 'import qualified as hiding',
	          contains: [CONTAINER]
	        },
	        {
	          className: 'module',
	          begin: '\\bmodule', end: 'where',
	          keywords: 'module where',
	          contains: [CONTAINER]
	        },
	        {
	          className: 'class',
	          begin: '\\b(class|instance|data|(new)?type)', end: '(where|$)',
	          keywords: 'class where instance data type newtype deriving',
	          contains: [LABEL]
	        },
	        hljs.C_NUMBER_MODE,
	        {
	          className: 'shebang',
	          begin: '#!\\/usr\\/bin\\/env\ runhaskell', end: '$'
	        },
	        LABEL,
	        {
	          className: 'title', begin: '^[_a-z][\\w\']*'
	        }
	      ]
	    }
	  };
	}();
	/*
	Language: Erlang
	Description: Erlang is a general-purpose functional language, with strict evaluation, single assignment, and dynamic typing.
	Author: Nikolay Zakharov <nikolay.desh@gmail.com>, Dmitry Kovega <arhibot@gmail.com>
	*/
	
	hljs.LANGUAGES.erlang = function(){
	  var BASIC_ATOM_RE = '[a-z\'][a-zA-Z0-9_\']*';
	  var FUNCTION_NAME_RE = '(' + BASIC_ATOM_RE + ':' + BASIC_ATOM_RE + '|' + BASIC_ATOM_RE + ')';
	  var ERLANG_RESERVED = {
	    keyword:
	      'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun let ' +
	      'not of orelse|10 query receive rem try when xor',
	    literal:
	      'false true'
	  };
	
	  var COMMENT = {
	    className: 'comment',
	    begin: '%', end: '$',
	    relevance: 0
	  };
	  var NUMBER = {
	    className: 'number',
	    begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
	    relevance: 0
	  };
	  var NAMED_FUN = {
	    begin: 'fun\\s+' + BASIC_ATOM_RE + '/\\d+'
	  };
	  var FUNCTION_CALL = {
	    begin: FUNCTION_NAME_RE + '\\(', end: '\\)',
	    returnBegin: true,
	    relevance: 0,
	    contains: [
	      {
	        className: 'function_name', begin: FUNCTION_NAME_RE,
	        relevance: 0
	      },
	      {
	        begin: '\\(', end: '\\)', endsWithParent: true,
	        returnEnd: true,
	        relevance: 0
	        // "contains" defined later
	      }
	    ]
	  };
	  var TUPLE = {
	    className: 'tuple',
	    begin: '{', end: '}',
	    relevance: 0
	    // "contains" defined later
	  };
	  var VAR1 = {
	    className: 'variable',
	    begin: '\\b_([A-Z][A-Za-z0-9_]*)?',
	    relevance: 0
	  };
	  var VAR2 = {
	    className: 'variable',
	    begin: '[A-Z][a-zA-Z0-9_]*',
	    relevance: 0
	  };
	  var RECORD_ACCESS = {
	    begin: '#', end: '}',
	    illegal: '.',
	    relevance: 0,
	    returnBegin: true,
	    contains: [
	      {
	        className: 'record_name',
	        begin: '#' + hljs.UNDERSCORE_IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: '{', endsWithParent: true,
	        relevance: 0
	        // "contains" defined later
	      }
	    ]
	  };
	
	  var BLOCK_STATEMENTS = {
	    keywords: ERLANG_RESERVED,
	    begin: '(fun|receive|if|try|case)', end: 'end'
	  };
	  BLOCK_STATEMENTS.contains = [
	    COMMENT,
	    NAMED_FUN,
	    hljs.inherit(hljs.APOS_STRING_MODE, {className: ''}),
	    BLOCK_STATEMENTS,
	    FUNCTION_CALL,
	    hljs.QUOTE_STRING_MODE,
	    NUMBER,
	    TUPLE,
	    VAR1, VAR2,
	    RECORD_ACCESS
	  ];
	
	  var BASIC_MODES = [
	    COMMENT,
	    NAMED_FUN,
	    BLOCK_STATEMENTS,
	    FUNCTION_CALL,
	    hljs.QUOTE_STRING_MODE,
	    NUMBER,
	    TUPLE,
	    VAR1, VAR2,
	    RECORD_ACCESS
	  ];
	  FUNCTION_CALL.contains[1].contains = BASIC_MODES;
	  TUPLE.contains = BASIC_MODES;
	  RECORD_ACCESS.contains[1].contains = BASIC_MODES;
	
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)',
	    endsWithParent: true,
	    contains: BASIC_MODES
	  };
	  return {
	    defaultMode: {
	      keywords: ERLANG_RESERVED,
	      illegal: '(</|\\*=|\\+=|-=|/=|/\\*|\\*/|\\(\\*|\\*\\))',
	      contains: [
	        {
	          className: 'function',
	          begin: '^' + BASIC_ATOM_RE + '\\(', end: ';|\\.',
	          returnBegin: true,
	          contains: [
	            PARAMS,
	            {
	              className: 'title', begin: BASIC_ATOM_RE
	            },
	            {
	              keywords: ERLANG_RESERVED,
	              begin: '->', endsWithParent: true,
	              contains: BASIC_MODES
	            }
	          ]
	        },
	        COMMENT,
	        {
	          className: 'pp',
	          begin: '^-', end: '\\.',
	          relevance: 0,
	          excludeEnd: true,
	          returnBegin: true,
	          lexems: '-' + hljs.IDENT_RE,
	          keywords:
	            '-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn ' +
	            '-import -include -include_lib -compile -define -else -endif -file -behaviour ' +
	            '-behavior',
	          contains: [PARAMS]
	        },
	        NUMBER,
	        hljs.QUOTE_STRING_MODE,
	        RECORD_ACCESS,
	        VAR1, VAR2,
	        TUPLE
	      ]
	    }
	  };
	}();
	/*
	 Language: Erlang REPL
	 Author: Sergey Ignatov <sergey@ignatov.spb.su>
	 */
	
	hljs.LANGUAGES.erlang_repl = {
	  defaultMode: {
	    keywords: {
	      special_functions:
	        'spawn spawn_link self',
	      reserved:
	        'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if ' +
	        'let not of or orelse|10 query receive rem try when xor'
	    },
	    contains: [
	      {
	        className: 'input_number', begin: '^[0-9]+> ',
	        relevance: 10
	      },
	      {
	        className: 'comment',
	        begin: '%', end: '$'
	      },
	      {
	        className: 'number',
	        begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
	        relevance: 0
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'constant', begin: '\\?(::)?([A-Z]\\w*(::)?)+'
	      },
	      {
	        className: 'arrow', begin: '->'
	      },
	      {
	        className: 'ok', begin: 'ok'
	      },
	      {
	        className: 'exclamation_mark', begin: '!'
	      },
	      {
	        className: 'function_or_atom',
	        begin: '(\\b[a-z\'][a-zA-Z0-9_\']*:[a-z\'][a-zA-Z0-9_\']*)|(\\b[a-z\'][a-zA-Z0-9_\']*)',
	        relevance: 0
	      },
	      {
	        className: 'variable',
	        begin: '[A-Z][a-zA-Z0-9_\']*',
	        relevance: 0
	      }
	    ]
	  }
	};
	/*
	Language: Rust
	Author: Andrey Vlasovskikh <andrey.vlasovskikh@gmail.com>
	*/
	
	hljs.LANGUAGES.rust = function() {
	  var TITLE = {
	    className: 'title',
	    begin: hljs.UNDERSCORE_IDENT_RE
	  };
	  var QUOTE_STRING = {
	    className: 'string',
	    begin: '"', end: '"',
	    contains: [hljs.BACKSLASH_ESCAPE],
	    relevance: 0
	  };
	  var NUMBER = {
	    className: 'number',
	    begin: '\\b(0[xb][A-Za-z0-9_]+|[0-9_]+(\\.[0-9_]+)?([uif](8|16|32|64)?)?)',
	    relevance: 0
	  };
	  var KEYWORDS =
	    'alt any as assert be bind block bool break char check claim const cont dir do else enum ' +
	    'export f32 f64 fail false float fn for i16 i32 i64 i8 if iface impl import in int let ' +
	    'log mod mutable native note of prove pure resource ret self str syntax true type u16 u32 ' +
	    'u64 u8 uint unchecked unsafe use vec while';
	  return {
	    defaultMode: {
	      keywords: KEYWORDS,
	      illegal: '</',
	      contains: [
	        hljs.C_LINE_COMMENT_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        QUOTE_STRING,
	        hljs.APOS_STRING_MODE,
	        NUMBER,
	        {
	          className: 'function',
	          beginWithKeyword: true, end: '(\\(|<)',
	          keywords: 'fn',
	          contains: [TITLE]
	        },
	        {
	          className: 'preprocessor',
	          begin: '#\\[', end: '\\]'
	        },
	        {
	          beginWithKeyword: true, end: '(=|<)',
	          keywords: 'type',
	          contains: [TITLE],
	          illegal: '\\S'
	        },
	        {
	          beginWithKeyword: true, end: '({|<)',
	          keywords: 'iface enum',
	          contains: [TITLE],
	          illegal: '\\S'
	        }
	      ]
	    }
	  };
	}();
	/*
	Language: Matlab
	Author: Denis Bardadym <bardadymchik@gmail.com>
	*/
	
	hljs.LANGUAGES.matlab = {
	  defaultMode: {
	    keywords: {
	      keyword:
	        'break case catch classdef continue else elseif end enumerated events for function ' +
	        'global if methods otherwise parfor persistent properties return spmd switch try while',
	      built_in:
	        'sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan ' +
	        'atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot ' +
	        'cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog ' +
	        'realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal ' +
	        'cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli ' +
	        'besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma ' +
	        'gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms ' +
	        'nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones ' +
	        'eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ' +
	        'ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril ' +
	        'triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute ' +
	        'shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan ' +
	        'isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal ' +
	        'rosser toeplitz vander wilkinson'
	    },
	    illegal: '(//|"|#|/\\*|\\s+/\\w+)',
	    contains: [
	      {
	        className: 'function',
	        beginWithKeyword: true, end: '$',
	        keywords: 'function',
	        contains: [
	          {
	              className: 'title',
	              begin: hljs.UNDERSCORE_IDENT_RE
	          },
	          {
	              className: 'params',
	              begin: '\\(', end: '\\)'
	          },
	          {
	              className: 'params',
	              begin: '\\[', end: '\\]'
	          }
	        ]
	      },
	      {
	        className: 'string',
	        begin: '\'', end: '\'',
	        contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}],
	        relevance: 0
	      },
	      {
	        className: 'comment',
	        begin: '\\%', end: '$'
	      },
	      hljs.C_NUMBER_MODE
	    ]
	  }
	};
	/*
	Language: R
	Author: Joe Cheng <joe@rstudio.org>
	*/
	
	hljs.LANGUAGES.r = (function() {
	  var IDENT_RE = '([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*';
	
	  return {
	    defaultMode: {
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        {
	          begin: IDENT_RE,
	          lexems: IDENT_RE,
	          keywords: {
	            keyword:
	              'function if in break next repeat else for return switch while try tryCatch|10 ' +
	              'stop warning require library attach detach source setMethod setGeneric ' +
	              'setGroupGeneric setClass ...|10',
	            literal:
	              'NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 ' +
	              'NA_complex_|10'
	          },
	          relevance: 0
	        },
	        {
	          // hex value
	          className: 'number',
	          begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
	          relevance: 0
	        },
	        {
	          // explicit integer
	          className: 'number',
	          begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
	          relevance: 0
	        },
	        {
	          // number with trailing decimal
	          className: 'number',
	          begin: "\\d+\\.(?!\\d)(?:i\\b)?",
	          relevance: 0
	        },
	        {
	          // number
	          className: 'number',
	          begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
	          relevance: 0
	        },
	        {
	          // number with leading decimal
	          className: 'number',
	          begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
	          relevance: 0
	        },
	
	        {
	          // escaped identifier
	          begin: '`',
	          end: '`',
	          relevance: 0
	        },
	
	        {
	          className: 'string',
	          begin: '"',
	          end: '"',
	          contains: [hljs.BACKSLASH_ESCAPE],
	          relevance: 0
	        },
	        {
	          className: 'string',
	          begin: "'",
	          end: "'",
	          contains: [hljs.BACKSLASH_ESCAPE],
	          relevance: 0
	        },
	      ]
	    }
	  };
	})();
	


/***/ },
/* 30 */
/*!**********************************************!*\
  !*** ./~/react/lib/DOMPropertyOperations.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMPropertyOperations
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 68);
	
	var escapeTextForBrowser = __webpack_require__(/*! ./escapeTextForBrowser */ 69);
	var memoizeStringOnly = __webpack_require__(/*! ./memoizeStringOnly */ 70);
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	function shouldIgnoreValue(name, value) {
	  return value == null ||
	    (DOMProperty.hasBooleanValue[name] && !value) ||
	    (DOMProperty.hasNumericValue[name] && isNaN(value)) ||
	    (DOMProperty.hasPositiveNumericValue[name] && (value < 1)) ||
	    (DOMProperty.hasOverloadedBooleanValue[name] && value === false);
	}
	
	var processAttributeNameAndPrefix = memoizeStringOnly(function(name) {
	  return escapeTextForBrowser(name) + '="';
	});
	
	if ("production" !== process.env.NODE_ENV) {
	  var reactProps = {
	    children: true,
	    dangerouslySetInnerHTML: true,
	    key: true,
	    ref: true
	  };
	  var warnedProperties = {};
	
	  var warnUnknownProperty = function(name) {
	    if (reactProps.hasOwnProperty(name) && reactProps[name] ||
	        warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
	      return;
	    }
	
	    warnedProperties[name] = true;
	    var lowerCasedName = name.toLowerCase();
	
	    // data-* attributes should be lowercase; suggest the lowercase version
	    var standardName = (
	      DOMProperty.isCustomAttribute(lowerCasedName) ?
	        lowerCasedName :
	      DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ?
	        DOMProperty.getPossibleStandardName[lowerCasedName] :
	        null
	    );
	
	    // For now, only warn when we have a suggested correction. This prevents
	    // logging too much when using transferPropsTo.
	    ("production" !== process.env.NODE_ENV ? warning(
	      standardName == null,
	      'Unknown DOM property ' + name + '. Did you mean ' + standardName + '?'
	    ) : null);
	
	  };
	}
	
	/**
	 * Operations for dealing with DOM properties.
	 */
	var DOMPropertyOperations = {
	
	  /**
	   * Creates markup for the ID property.
	   *
	   * @param {string} id Unescaped ID.
	   * @return {string} Markup string.
	   */
	  createMarkupForID: function(id) {
	    return processAttributeNameAndPrefix(DOMProperty.ID_ATTRIBUTE_NAME) +
	      escapeTextForBrowser(id) + '"';
	  },
	
	  /**
	   * Creates markup for a property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {?string} Markup string, or null if the property was invalid.
	   */
	  createMarkupForProperty: function(name, value) {
	    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
	        DOMProperty.isStandardName[name]) {
	      if (shouldIgnoreValue(name, value)) {
	        return '';
	      }
	      var attributeName = DOMProperty.getAttributeName[name];
	      if (DOMProperty.hasBooleanValue[name] ||
	          (DOMProperty.hasOverloadedBooleanValue[name] && value === true)) {
	        return escapeTextForBrowser(attributeName);
	      }
	      return processAttributeNameAndPrefix(attributeName) +
	        escapeTextForBrowser(value) + '"';
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      if (value == null) {
	        return '';
	      }
	      return processAttributeNameAndPrefix(name) +
	        escapeTextForBrowser(value) + '"';
	    } else if ("production" !== process.env.NODE_ENV) {
	      warnUnknownProperty(name);
	    }
	    return null;
	  },
	
	  /**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */
	  setValueForProperty: function(node, name, value) {
	    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
	        DOMProperty.isStandardName[name]) {
	      var mutationMethod = DOMProperty.getMutationMethod[name];
	      if (mutationMethod) {
	        mutationMethod(node, value);
	      } else if (shouldIgnoreValue(name, value)) {
	        this.deleteValueForProperty(node, name);
	      } else if (DOMProperty.mustUseAttribute[name]) {
	        // `setAttribute` with objects becomes only `[object]` in IE8/9,
	        // ('' + value) makes it output the correct toString()-value.
	        node.setAttribute(DOMProperty.getAttributeName[name], '' + value);
	      } else {
	        var propName = DOMProperty.getPropertyName[name];
	        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
	        // property type before comparing; only `value` does and is string.
	        if (!DOMProperty.hasSideEffects[name] ||
	            ('' + node[propName]) !== ('' + value)) {
	          // Contrary to `setAttribute`, object properties are properly
	          // `toString`ed by IE8/9.
	          node[propName] = value;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      if (value == null) {
	        node.removeAttribute(name);
	      } else {
	        node.setAttribute(name, '' + value);
	      }
	    } else if ("production" !== process.env.NODE_ENV) {
	      warnUnknownProperty(name);
	    }
	  },
	
	  /**
	   * Deletes the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
	  deleteValueForProperty: function(node, name) {
	    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
	        DOMProperty.isStandardName[name]) {
	      var mutationMethod = DOMProperty.getMutationMethod[name];
	      if (mutationMethod) {
	        mutationMethod(node, undefined);
	      } else if (DOMProperty.mustUseAttribute[name]) {
	        node.removeAttribute(DOMProperty.getAttributeName[name]);
	      } else {
	        var propName = DOMProperty.getPropertyName[name];
	        var defaultValue = DOMProperty.getDefaultValueForProperty(
	          node.nodeName,
	          propName
	        );
	        if (!DOMProperty.hasSideEffects[name] ||
	            ('' + node[propName]) !== defaultValue) {
	          node[propName] = defaultValue;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      node.removeAttribute(name);
	    } else if ("production" !== process.env.NODE_ENV) {
	      warnUnknownProperty(name);
	    }
	  }
	
	};
	
	module.exports = DOMPropertyOperations;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 31 */
/*!*****************************************!*\
  !*** ./~/react/lib/EventPluginUtils.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginUtils
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 66);
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * Injected dependencies:
	 */
	
	/**
	 * - `Mount`: [required] Module that can convert between React dom IDs and
	 *   actual node references.
	 */
	var injection = {
	  Mount: null,
	  injectMount: function(InjectedMount) {
	    injection.Mount = InjectedMount;
	    if ("production" !== process.env.NODE_ENV) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        InjectedMount && InjectedMount.getNode,
	        'EventPluginUtils.injection.injectMount(...): Injected Mount module ' +
	        'is missing getNode.'
	      ) : invariant(InjectedMount && InjectedMount.getNode));
	    }
	  }
	};
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	function isEndish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseUp ||
	         topLevelType === topLevelTypes.topTouchEnd ||
	         topLevelType === topLevelTypes.topTouchCancel;
	}
	
	function isMoveish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseMove ||
	         topLevelType === topLevelTypes.topTouchMove;
	}
	function isStartish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseDown ||
	         topLevelType === topLevelTypes.topTouchStart;
	}
	
	
	var validateEventDispatches;
	if ("production" !== process.env.NODE_ENV) {
	  validateEventDispatches = function(event) {
	    var dispatchListeners = event._dispatchListeners;
	    var dispatchIDs = event._dispatchIDs;
	
	    var listenersIsArr = Array.isArray(dispatchListeners);
	    var idsIsArr = Array.isArray(dispatchIDs);
	    var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
	    var listenersLen = listenersIsArr ?
	      dispatchListeners.length :
	      dispatchListeners ? 1 : 0;
	
	    ("production" !== process.env.NODE_ENV ? invariant(
	      idsIsArr === listenersIsArr && IDsLen === listenersLen,
	      'EventPluginUtils: Invalid `event`.'
	    ) : invariant(idsIsArr === listenersIsArr && IDsLen === listenersLen));
	  };
	}
	
	/**
	 * Invokes `cb(event, listener, id)`. Avoids using call if no scope is
	 * provided. The `(listener,id)` pair effectively forms the "dispatch" but are
	 * kept separate to conserve memory.
	 */
	function forEachEventDispatch(event, cb) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if ("production" !== process.env.NODE_ENV) {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      cb(event, dispatchListeners[i], dispatchIDs[i]);
	    }
	  } else if (dispatchListeners) {
	    cb(event, dispatchListeners, dispatchIDs);
	  }
	}
	
	/**
	 * Default implementation of PluginModule.executeDispatch().
	 * @param {SyntheticEvent} SyntheticEvent to handle
	 * @param {function} Application-level callback
	 * @param {string} domID DOM id to pass to the callback.
	 */
	function executeDispatch(event, listener, domID) {
	  event.currentTarget = injection.Mount.getNode(domID);
	  var returnValue = listener(event, domID);
	  event.currentTarget = null;
	  return returnValue;
	}
	
	/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */
	function executeDispatchesInOrder(event, executeDispatch) {
	  forEachEventDispatch(event, executeDispatch);
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	}
	
	/**
	 * Standard/simple iteration through an event's collected dispatches, but stops
	 * at the first dispatch execution returning true, and returns that id.
	 *
	 * @return id of the first dispatch execution who's listener returns true, or
	 * null if no listener returned true.
	 */
	function executeDispatchesInOrderStopAtTrueImpl(event) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if ("production" !== process.env.NODE_ENV) {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      if (dispatchListeners[i](event, dispatchIDs[i])) {
	        return dispatchIDs[i];
	      }
	    }
	  } else if (dispatchListeners) {
	    if (dispatchListeners(event, dispatchIDs)) {
	      return dispatchIDs;
	    }
	  }
	  return null;
	}
	
	/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */
	function executeDispatchesInOrderStopAtTrue(event) {
	  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
	  event._dispatchIDs = null;
	  event._dispatchListeners = null;
	  return ret;
	}
	
	/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return The return value of executing the single dispatch.
	 */
	function executeDirectDispatch(event) {
	  if ("production" !== process.env.NODE_ENV) {
	    validateEventDispatches(event);
	  }
	  var dispatchListener = event._dispatchListeners;
	  var dispatchID = event._dispatchIDs;
	  ("production" !== process.env.NODE_ENV ? invariant(
	    !Array.isArray(dispatchListener),
	    'executeDirectDispatch(...): Invalid `event`.'
	  ) : invariant(!Array.isArray(dispatchListener)));
	  var res = dispatchListener ?
	    dispatchListener(event, dispatchID) :
	    null;
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	  return res;
	}
	
	/**
	 * @param {SyntheticEvent} event
	 * @return {bool} True iff number of dispatches accumulated is greater than 0.
	 */
	function hasDispatches(event) {
	  return !!event._dispatchListeners;
	}
	
	/**
	 * General utilities that are useful in creating custom Event Plugins.
	 */
	var EventPluginUtils = {
	  isEndish: isEndish,
	  isMoveish: isMoveish,
	  isStartish: isStartish,
	
	  executeDirectDispatch: executeDirectDispatch,
	  executeDispatch: executeDispatch,
	  executeDispatchesInOrder: executeDispatchesInOrder,
	  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
	  hasDispatches: hasDispatches,
	  injection: injection,
	  useTouchEvents: false
	};
	
	module.exports = EventPluginUtils;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 32 */
/*!**************************************!*\
  !*** ./~/react/lib/ReactChildren.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */
	
	"use strict";
	
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 72);
	
	var traverseAllChildren = __webpack_require__(/*! ./traverseAllChildren */ 73);
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var threeArgumentPooler = PooledClass.threeArgumentPooler;
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.forEachFunction = forEachFunction;
	  this.forEachContext = forEachContext;
	}
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
	
	function forEachSingleChild(traverseContext, child, name, i) {
	  var forEachBookKeeping = traverseContext;
	  forEachBookKeeping.forEachFunction.call(
	    forEachBookKeeping.forEachContext, child, i);
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc.
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	
	  var traverseContext =
	    ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, mapFunction, mapContext) {
	  this.mapResult = mapResult;
	  this.mapFunction = mapFunction;
	  this.mapContext = mapContext;
	}
	PooledClass.addPoolingTo(MapBookKeeping, threeArgumentPooler);
	
	function mapSingleChildIntoContext(traverseContext, child, name, i) {
	  var mapBookKeeping = traverseContext;
	  var mapResult = mapBookKeeping.mapResult;
	
	  var keyUnique = !mapResult.hasOwnProperty(name);
	  ("production" !== process.env.NODE_ENV ? warning(
	    keyUnique,
	    'ReactChildren.map(...): Encountered two children with the same key, ' +
	    '`%s`. Child keys must be unique; when two children share a key, only ' +
	    'the first child will be used.',
	    name
	  ) : null);
	
	  if (keyUnique) {
	    var mappedChild =
	      mapBookKeeping.mapFunction.call(mapBookKeeping.mapContext, child, i);
	    mapResult[name] = mappedChild;
	  }
	}
	
	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * TODO: This may likely break any calls to `ReactChildren.map` that were
	 * previously relying on the fact that we guarded against null children.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} mapFunction.
	 * @param {*} mapContext Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	
	  var mapResult = {};
	  var traverseContext = MapBookKeeping.getPooled(mapResult, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	  return mapResult;
	}
	
	function forEachSingleChildDummy(traverseContext, child, name, i) {
	  return null;
	}
	
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}
	
	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  count: countChildren
	};
	
	module.exports = ReactChildren;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 33 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactComponent.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */
	
	"use strict";
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactOwner = __webpack_require__(/*! ./ReactOwner */ 74);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 75);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	var keyMirror = __webpack_require__(/*! ./keyMirror */ 76);
	
	/**
	 * Every React component is in one of these life cycles.
	 */
	var ComponentLifeCycle = keyMirror({
	  /**
	   * Mounted components have a DOM node representation and are capable of
	   * receiving new props.
	   */
	  MOUNTED: null,
	  /**
	   * Unmounted components are inactive and cannot receive new props.
	   */
	  UNMOUNTED: null
	});
	
	var injected = false;
	
	/**
	 * Optionally injectable environment dependent cleanup hook. (server vs.
	 * browser etc). Example: A browser system caches DOM nodes based on component
	 * ID and must remove that cache entry when this instance is unmounted.
	 *
	 * @private
	 */
	var unmountIDFromEnvironment = null;
	
	/**
	 * The "image" of a component tree, is the platform specific (typically
	 * serialized) data that represents a tree of lower level UI building blocks.
	 * On the web, this "image" is HTML markup which describes a construction of
	 * low level `div` and `span` nodes. Other platforms may have different
	 * encoding of this "image". This must be injected.
	 *
	 * @private
	 */
	var mountImageIntoNode = null;
	
	/**
	 * Components are the basic units of composition in React.
	 *
	 * Every component accepts a set of keyed input parameters known as "props" that
	 * are initialized by the constructor. Once a component is mounted, the props
	 * can be mutated using `setProps` or `replaceProps`.
	 *
	 * Every component is capable of the following operations:
	 *
	 *   `mountComponent`
	 *     Initializes the component, renders markup, and registers event listeners.
	 *
	 *   `receiveComponent`
	 *     Updates the rendered DOM nodes to match the given component.
	 *
	 *   `unmountComponent`
	 *     Releases any resources allocated by this component.
	 *
	 * Components can also be "owned" by other components. Being owned by another
	 * component means being constructed by that component. This is different from
	 * being the child of a component, which means having a DOM representation that
	 * is a child of the DOM representation of that component.
	 *
	 * @class ReactComponent
	 */
	var ReactComponent = {
	
	  injection: {
	    injectEnvironment: function(ReactComponentEnvironment) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        !injected,
	        'ReactComponent: injectEnvironment() can only be called once.'
	      ) : invariant(!injected));
	      mountImageIntoNode = ReactComponentEnvironment.mountImageIntoNode;
	      unmountIDFromEnvironment =
	        ReactComponentEnvironment.unmountIDFromEnvironment;
	      ReactComponent.BackendIDOperations =
	        ReactComponentEnvironment.BackendIDOperations;
	      injected = true;
	    }
	  },
	
	  /**
	   * @internal
	   */
	  LifeCycle: ComponentLifeCycle,
	
	  /**
	   * Injected module that provides ability to mutate individual properties.
	   * Injected into the base class because many different subclasses need access
	   * to this.
	   *
	   * @internal
	   */
	  BackendIDOperations: null,
	
	  /**
	   * Base functionality for every ReactComponent constructor. Mixed into the
	   * `ReactComponent` prototype, but exposed statically for easy access.
	   *
	   * @lends {ReactComponent.prototype}
	   */
	  Mixin: {
	
	    /**
	     * Checks whether or not this component is mounted.
	     *
	     * @return {boolean} True if mounted, false otherwise.
	     * @final
	     * @protected
	     */
	    isMounted: function() {
	      return this._lifeCycleState === ComponentLifeCycle.MOUNTED;
	    },
	
	    /**
	     * Sets a subset of the props.
	     *
	     * @param {object} partialProps Subset of the next props.
	     * @param {?function} callback Called after props are updated.
	     * @final
	     * @public
	     */
	    setProps: function(partialProps, callback) {
	      // Merge with the pending element if it exists, otherwise with existing
	      // element props.
	      var element = this._pendingElement || this._currentElement;
	      this.replaceProps(
	        assign({}, element.props, partialProps),
	        callback
	      );
	    },
	
	    /**
	     * Replaces all of the props.
	     *
	     * @param {object} props New props.
	     * @param {?function} callback Called after props are updated.
	     * @final
	     * @public
	     */
	    replaceProps: function(props, callback) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        this.isMounted(),
	        'replaceProps(...): Can only update a mounted component.'
	      ) : invariant(this.isMounted()));
	      ("production" !== process.env.NODE_ENV ? invariant(
	        this._mountDepth === 0,
	        'replaceProps(...): You called `setProps` or `replaceProps` on a ' +
	        'component with a parent. This is an anti-pattern since props will ' +
	        'get reactively updated when rendered. Instead, change the owner\'s ' +
	        '`render` method to pass the correct value as props to the component ' +
	        'where it is created.'
	      ) : invariant(this._mountDepth === 0));
	      // This is a deoptimized path. We optimize for always having a element.
	      // This creates an extra internal element.
	      this._pendingElement = ReactElement.cloneAndReplaceProps(
	        this._pendingElement || this._currentElement,
	        props
	      );
	      ReactUpdates.enqueueUpdate(this, callback);
	    },
	
	    /**
	     * Schedule a partial update to the props. Only used for internal testing.
	     *
	     * @param {object} partialProps Subset of the next props.
	     * @param {?function} callback Called after props are updated.
	     * @final
	     * @internal
	     */
	    _setPropsInternal: function(partialProps, callback) {
	      // This is a deoptimized path. We optimize for always having a element.
	      // This creates an extra internal element.
	      var element = this._pendingElement || this._currentElement;
	      this._pendingElement = ReactElement.cloneAndReplaceProps(
	        element,
	        assign({}, element.props, partialProps)
	      );
	      ReactUpdates.enqueueUpdate(this, callback);
	    },
	
	    /**
	     * Base constructor for all React components.
	     *
	     * Subclasses that override this method should make sure to invoke
	     * `ReactComponent.Mixin.construct.call(this, ...)`.
	     *
	     * @param {ReactElement} element
	     * @internal
	     */
	    construct: function(element) {
	      // This is the public exposed props object after it has been processed
	      // with default props. The element's props represents the true internal
	      // state of the props.
	      this.props = element.props;
	      // Record the component responsible for creating this component.
	      // This is accessible through the element but we maintain an extra
	      // field for compatibility with devtools and as a way to make an
	      // incremental update. TODO: Consider deprecating this field.
	      this._owner = element._owner;
	
	      // All components start unmounted.
	      this._lifeCycleState = ComponentLifeCycle.UNMOUNTED;
	
	      // See ReactUpdates.
	      this._pendingCallbacks = null;
	
	      // We keep the old element and a reference to the pending element
	      // to track updates.
	      this._currentElement = element;
	      this._pendingElement = null;
	    },
	
	    /**
	     * Initializes the component, renders markup, and registers event listeners.
	     *
	     * NOTE: This does not insert any nodes into the DOM.
	     *
	     * Subclasses that override this method should make sure to invoke
	     * `ReactComponent.Mixin.mountComponent.call(this, ...)`.
	     *
	     * @param {string} rootID DOM ID of the root node.
	     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	     * @param {number} mountDepth number of components in the owner hierarchy.
	     * @return {?string} Rendered markup to be inserted into the DOM.
	     * @internal
	     */
	    mountComponent: function(rootID, transaction, mountDepth) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        !this.isMounted(),
	        'mountComponent(%s, ...): Can only mount an unmounted component. ' +
	        'Make sure to avoid storing components between renders or reusing a ' +
	        'single component instance in multiple places.',
	        rootID
	      ) : invariant(!this.isMounted()));
	      var ref = this._currentElement.ref;
	      if (ref != null) {
	        var owner = this._currentElement._owner;
	        ReactOwner.addComponentAsRefTo(this, ref, owner);
	      }
	      this._rootNodeID = rootID;
	      this._lifeCycleState = ComponentLifeCycle.MOUNTED;
	      this._mountDepth = mountDepth;
	      // Effectively: return '';
	    },
	
	    /**
	     * Releases any resources allocated by `mountComponent`.
	     *
	     * NOTE: This does not remove any nodes from the DOM.
	     *
	     * Subclasses that override this method should make sure to invoke
	     * `ReactComponent.Mixin.unmountComponent.call(this)`.
	     *
	     * @internal
	     */
	    unmountComponent: function() {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        this.isMounted(),
	        'unmountComponent(): Can only unmount a mounted component.'
	      ) : invariant(this.isMounted()));
	      var ref = this._currentElement.ref;
	      if (ref != null) {
	        ReactOwner.removeComponentAsRefFrom(this, ref, this._owner);
	      }
	      unmountIDFromEnvironment(this._rootNodeID);
	      this._rootNodeID = null;
	      this._lifeCycleState = ComponentLifeCycle.UNMOUNTED;
	    },
	
	    /**
	     * Given a new instance of this component, updates the rendered DOM nodes
	     * as if that instance was rendered instead.
	     *
	     * Subclasses that override this method should make sure to invoke
	     * `ReactComponent.Mixin.receiveComponent.call(this, ...)`.
	     *
	     * @param {object} nextComponent Next set of properties.
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
	    receiveComponent: function(nextElement, transaction) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        this.isMounted(),
	        'receiveComponent(...): Can only update a mounted component.'
	      ) : invariant(this.isMounted()));
	      this._pendingElement = nextElement;
	      this.performUpdateIfNecessary(transaction);
	    },
	
	    /**
	     * If `_pendingElement` is set, update the component.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
	    performUpdateIfNecessary: function(transaction) {
	      if (this._pendingElement == null) {
	        return;
	      }
	      var prevElement = this._currentElement;
	      var nextElement = this._pendingElement;
	      this._currentElement = nextElement;
	      this.props = nextElement.props;
	      this._owner = nextElement._owner;
	      this._pendingElement = null;
	      this.updateComponent(transaction, prevElement);
	    },
	
	    /**
	     * Updates the component's currently mounted representation.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @param {object} prevElement
	     * @internal
	     */
	    updateComponent: function(transaction, prevElement) {
	      var nextElement = this._currentElement;
	
	      // If either the owner or a `ref` has changed, make sure the newest owner
	      // has stored a reference to `this`, and the previous owner (if different)
	      // has forgotten the reference to `this`. We use the element instead
	      // of the public this.props because the post processing cannot determine
	      // a ref. The ref conceptually lives on the element.
	
	      // TODO: Should this even be possible? The owner cannot change because
	      // it's forbidden by shouldUpdateReactComponent. The ref can change
	      // if you swap the keys of but not the refs. Reconsider where this check
	      // is made. It probably belongs where the key checking and
	      // instantiateReactComponent is done.
	
	      if (nextElement._owner !== prevElement._owner ||
	          nextElement.ref !== prevElement.ref) {
	        if (prevElement.ref != null) {
	          ReactOwner.removeComponentAsRefFrom(
	            this, prevElement.ref, prevElement._owner
	          );
	        }
	        // Correct, even if the owner is the same, and only the ref has changed.
	        if (nextElement.ref != null) {
	          ReactOwner.addComponentAsRefTo(
	            this,
	            nextElement.ref,
	            nextElement._owner
	          );
	        }
	      }
	    },
	
	    /**
	     * Mounts this component and inserts it into the DOM.
	     *
	     * @param {string} rootID DOM ID of the root node.
	     * @param {DOMElement} container DOM element to mount into.
	     * @param {boolean} shouldReuseMarkup If true, do not insert markup
	     * @final
	     * @internal
	     * @see {ReactMount.render}
	     */
	    mountComponentIntoNode: function(rootID, container, shouldReuseMarkup) {
	      var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
	      transaction.perform(
	        this._mountComponentIntoNode,
	        this,
	        rootID,
	        container,
	        transaction,
	        shouldReuseMarkup
	      );
	      ReactUpdates.ReactReconcileTransaction.release(transaction);
	    },
	
	    /**
	     * @param {string} rootID DOM ID of the root node.
	     * @param {DOMElement} container DOM element to mount into.
	     * @param {ReactReconcileTransaction} transaction
	     * @param {boolean} shouldReuseMarkup If true, do not insert markup
	     * @final
	     * @private
	     */
	    _mountComponentIntoNode: function(
	        rootID,
	        container,
	        transaction,
	        shouldReuseMarkup) {
	      var markup = this.mountComponent(rootID, transaction, 0);
	      mountImageIntoNode(markup, container, shouldReuseMarkup);
	    },
	
	    /**
	     * Checks if this component is owned by the supplied `owner` component.
	     *
	     * @param {ReactComponent} owner Component to check.
	     * @return {boolean} True if `owners` owns this component.
	     * @final
	     * @internal
	     */
	    isOwnedBy: function(owner) {
	      return this._owner === owner;
	    },
	
	    /**
	     * Gets another component, that shares the same owner as this one, by ref.
	     *
	     * @param {string} ref of a sibling Component.
	     * @return {?ReactComponent} the actual sibling Component.
	     * @final
	     * @internal
	     */
	    getSiblingByRef: function(ref) {
	      var owner = this._owner;
	      if (!owner || !owner.refs) {
	        return null;
	      }
	      return owner.refs[ref];
	    }
	  }
	};
	
	module.exports = ReactComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 34 */
/*!************************************************!*\
  !*** ./~/react/lib/ReactCompositeComponent.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCompositeComponent
	 */
	
	"use strict";
	
	var ReactComponent = __webpack_require__(/*! ./ReactComponent */ 33);
	var ReactContext = __webpack_require__(/*! ./ReactContext */ 35);
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 36);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactElementValidator = __webpack_require__(/*! ./ReactElementValidator */ 38);
	var ReactEmptyComponent = __webpack_require__(/*! ./ReactEmptyComponent */ 77);
	var ReactErrorUtils = __webpack_require__(/*! ./ReactErrorUtils */ 78);
	var ReactLegacyElement = __webpack_require__(/*! ./ReactLegacyElement */ 43);
	var ReactOwner = __webpack_require__(/*! ./ReactOwner */ 74);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 46);
	var ReactPropTransferer = __webpack_require__(/*! ./ReactPropTransferer */ 79);
	var ReactPropTypeLocations = __webpack_require__(/*! ./ReactPropTypeLocations */ 80);
	var ReactPropTypeLocationNames = __webpack_require__(/*! ./ReactPropTypeLocationNames */ 81);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 75);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var instantiateReactComponent = __webpack_require__(/*! ./instantiateReactComponent */ 82);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	var keyMirror = __webpack_require__(/*! ./keyMirror */ 76);
	var keyOf = __webpack_require__(/*! ./keyOf */ 83);
	var monitorCodeUse = __webpack_require__(/*! ./monitorCodeUse */ 84);
	var mapObject = __webpack_require__(/*! ./mapObject */ 85);
	var shouldUpdateReactComponent = __webpack_require__(/*! ./shouldUpdateReactComponent */ 86);
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	var MIXINS_KEY = keyOf({mixins: null});
	
	/**
	 * Policies that describe methods in `ReactCompositeComponentInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base ReactCompositeComponent class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});
	
	
	var injectedMixins = [];
	
	/**
	 * Composite components are higher-level components that compose other composite
	 * or native components.
	 *
	 * To create a new type of `ReactCompositeComponent`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactCompositeComponentInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will available on the prototype.
	 *
	 * @interface ReactCompositeComponentInterface
	 * @internal
	 */
	var ReactCompositeComponentInterface = {
	
	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,
	
	  // ==== Definition methods ====
	
	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,
	
	
	
	  // ==== Delegate methods ====
	
	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,
	
	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,
	
	
	
	  // ==== Advanced methods ====
	
	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE
	
	};
	
	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function(Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function(Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function(Constructor, childContextTypes) {
	    validateTypeDef(
	      Constructor,
	      childContextTypes,
	      ReactPropTypeLocations.childContext
	    );
	    Constructor.childContextTypes = assign(
	      {},
	      Constructor.childContextTypes,
	      childContextTypes
	    );
	  },
	  contextTypes: function(Constructor, contextTypes) {
	    validateTypeDef(
	      Constructor,
	      contextTypes,
	      ReactPropTypeLocations.context
	    );
	    Constructor.contextTypes = assign(
	      {},
	      Constructor.contextTypes,
	      contextTypes
	    );
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function(Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(
	        Constructor.getDefaultProps,
	        getDefaultProps
	      );
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function(Constructor, propTypes) {
	    validateTypeDef(
	      Constructor,
	      propTypes,
	      ReactPropTypeLocations.prop
	    );
	    Constructor.propTypes = assign(
	      {},
	      Constructor.propTypes,
	      propTypes
	    );
	  },
	  statics: function(Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  }
	};
	
	function getDeclarationErrorAddendum(component) {
	  var owner = component._owner || null;
	  if (owner && owner.constructor && owner.constructor.displayName) {
	    return ' Check the render method of `' + owner.constructor.displayName +
	      '`.';
	  }
	  return '';
	}
	
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        typeof typeDef[propName] == 'function',
	        '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	        'React.PropTypes.',
	        Constructor.displayName || 'ReactCompositeComponent',
	        ReactPropTypeLocationNames[location],
	        propName
	      ) : invariant(typeof typeDef[propName] == 'function'));
	    }
	  }
	}
	
	function validateMethodOverride(proto, name) {
	  var specPolicy = ReactCompositeComponentInterface.hasOwnProperty(name) ?
	    ReactCompositeComponentInterface[name] :
	    null;
	
	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactCompositeComponentMixin.hasOwnProperty(name)) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      specPolicy === SpecPolicy.OVERRIDE_BASE,
	      'ReactCompositeComponentInterface: You are attempting to override ' +
	      '`%s` from your class specification. Ensure that your method names ' +
	      'do not overlap with React methods.',
	      name
	    ) : invariant(specPolicy === SpecPolicy.OVERRIDE_BASE));
	  }
	
	  // Disallow defining methods more than once unless explicitly allowed.
	  if (proto.hasOwnProperty(name)) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      specPolicy === SpecPolicy.DEFINE_MANY ||
	      specPolicy === SpecPolicy.DEFINE_MANY_MERGED,
	      'ReactCompositeComponentInterface: You are attempting to define ' +
	      '`%s` on your component more than once. This conflict may be due ' +
	      'to a mixin.',
	      name
	    ) : invariant(specPolicy === SpecPolicy.DEFINE_MANY ||
	    specPolicy === SpecPolicy.DEFINE_MANY_MERGED));
	  }
	}
	
	function validateLifeCycleOnReplaceState(instance) {
	  var compositeLifeCycleState = instance._compositeLifeCycleState;
	  ("production" !== process.env.NODE_ENV ? invariant(
	    instance.isMounted() ||
	      compositeLifeCycleState === CompositeLifeCycle.MOUNTING,
	    'replaceState(...): Can only update a mounted or mounting component.'
	  ) : invariant(instance.isMounted() ||
	    compositeLifeCycleState === CompositeLifeCycle.MOUNTING));
	  ("production" !== process.env.NODE_ENV ? invariant(
	    ReactCurrentOwner.current == null,
	    'replaceState(...): Cannot update during an existing state transition ' +
	    '(such as within `render`). Render methods should be a pure function ' +
	    'of props and state.'
	  ) : invariant(ReactCurrentOwner.current == null));
	  ("production" !== process.env.NODE_ENV ? invariant(compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING,
	    'replaceState(...): Cannot update while unmounting component. This ' +
	    'usually means you called setState() on an unmounted component.'
	  ) : invariant(compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING));
	}
	
	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building `ReactCompositeComponent` classses.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    return;
	  }
	
	  ("production" !== process.env.NODE_ENV ? invariant(
	    !ReactLegacyElement.isValidFactory(spec),
	    'ReactCompositeComponent: You\'re attempting to ' +
	    'use a component class as a mixin. Instead, just use a regular object.'
	  ) : invariant(!ReactLegacyElement.isValidFactory(spec)));
	  ("production" !== process.env.NODE_ENV ? invariant(
	    !ReactElement.isValidElement(spec),
	    'ReactCompositeComponent: You\'re attempting to ' +
	    'use a component as a mixin. Instead, just use a regular object.'
	  ) : invariant(!ReactElement.isValidElement(spec)));
	
	  var proto = Constructor.prototype;
	
	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }
	
	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }
	
	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above
	      continue;
	    }
	
	    var property = spec[name];
	    validateMethodOverride(proto, name);
	
	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactCompositeComponent methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isCompositeComponentMethod =
	        ReactCompositeComponentInterface.hasOwnProperty(name);
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      var markedDontBind = property && property.__reactDontBind;
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind =
	        isFunction &&
	        !isCompositeComponentMethod &&
	        !isAlreadyDefined &&
	        !markedDontBind;
	
	      if (shouldAutoBind) {
	        if (!proto.__reactAutoBindMap) {
	          proto.__reactAutoBindMap = {};
	        }
	        proto.__reactAutoBindMap[name] = property;
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactCompositeComponentInterface[name];
	
	          // These cases should already be caught by validateMethodOverride
	          ("production" !== process.env.NODE_ENV ? invariant(
	            isCompositeComponentMethod && (
	              specPolicy === SpecPolicy.DEFINE_MANY_MERGED ||
	              specPolicy === SpecPolicy.DEFINE_MANY
	            ),
	            'ReactCompositeComponent: Unexpected spec policy %s for key %s ' +
	            'when mixing in component specs.',
	            specPolicy,
	            name
	          ) : invariant(isCompositeComponentMethod && (
	            specPolicy === SpecPolicy.DEFINE_MANY_MERGED ||
	            specPolicy === SpecPolicy.DEFINE_MANY
	          )));
	
	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if ("production" !== process.env.NODE_ENV) {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}
	
	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }
	
	    var isReserved = name in RESERVED_SPEC_KEYS;
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !isReserved,
	      'ReactCompositeComponent: You are attempting to define a reserved ' +
	      'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	      'as an instance property instead; it will still be accessible on the ' +
	      'constructor.',
	      name
	    ) : invariant(!isReserved));
	
	    var isInherited = name in Constructor;
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !isInherited,
	      'ReactCompositeComponent: You are attempting to define ' +
	      '`%s` on your component more than once. This conflict may be ' +
	      'due to a mixin.',
	      name
	    ) : invariant(!isInherited));
	    Constructor[name] = property;
	  }
	}
	
	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeObjectsWithNoDuplicateKeys(one, two) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    one && two && typeof one === 'object' && typeof two === 'object',
	    'mergeObjectsWithNoDuplicateKeys(): Cannot merge non-objects'
	  ) : invariant(one && two && typeof one === 'object' && typeof two === 'object'));
	
	  mapObject(two, function(value, key) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      one[key] === undefined,
	      'mergeObjectsWithNoDuplicateKeys(): ' +
	      'Tried to merge two objects with the same key: `%s`. This conflict ' +
	      'may be due to a mixin; in particular, this may be caused by two ' +
	      'getInitialState() or getDefaultProps() methods returning objects ' +
	      'with clashing keys.',
	      key
	    ) : invariant(one[key] === undefined));
	    one[key] = value;
	  });
	  return one;
	}
	
	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    return mergeObjectsWithNoDuplicateKeys(a, b);
	  };
	}
	
	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}
	
	/**
	 * `ReactCompositeComponent` maintains an auxiliary life cycle state in
	 * `this._compositeLifeCycleState` (which can be null).
	 *
	 * This is different from the life cycle state maintained by `ReactComponent` in
	 * `this._lifeCycleState`. The following diagram shows how the states overlap in
	 * time. There are times when the CompositeLifeCycle is null - at those times it
	 * is only meaningful to look at ComponentLifeCycle alone.
	 *
	 * Top Row: ReactComponent.ComponentLifeCycle
	 * Low Row: ReactComponent.CompositeLifeCycle
	 *
	 * +-------+---------------------------------+--------+
	 * |  UN   |             MOUNTED             |   UN   |
	 * |MOUNTED|                                 | MOUNTED|
	 * +-------+---------------------------------+--------+
	 * |       ^--------+   +-------+   +--------^        |
	 * |       |        |   |       |   |        |        |
	 * |    0--|MOUNTING|-0-|RECEIVE|-0-|   UN   |--->0   |
	 * |       |        |   |PROPS  |   |MOUNTING|        |
	 * |       |        |   |       |   |        |        |
	 * |       |        |   |       |   |        |        |
	 * |       +--------+   +-------+   +--------+        |
	 * |       |                                 |        |
	 * +-------+---------------------------------+--------+
	 */
	var CompositeLifeCycle = keyMirror({
	  /**
	   * Components in the process of being mounted respond to state changes
	   * differently.
	   */
	  MOUNTING: null,
	  /**
	   * Components in the process of being unmounted are guarded against state
	   * changes.
	   */
	  UNMOUNTING: null,
	  /**
	   * Components that are mounted and receiving new props respond to state
	   * changes differently.
	   */
	  RECEIVING_PROPS: null
	});
	
	/**
	 * @lends {ReactCompositeComponent.prototype}
	 */
	var ReactCompositeComponentMixin = {
	
	  /**
	   * Base constructor for all composite component.
	   *
	   * @param {ReactElement} element
	   * @final
	   * @internal
	   */
	  construct: function(element) {
	    // Children can be either an array or more than one argument
	    ReactComponent.Mixin.construct.apply(this, arguments);
	    ReactOwner.Mixin.construct.apply(this, arguments);
	
	    this.state = null;
	    this._pendingState = null;
	
	    // This is the public post-processed context. The real context and pending
	    // context lives on the element.
	    this.context = null;
	
	    this._compositeLifeCycleState = null;
	  },
	
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function() {
	    return ReactComponent.Mixin.isMounted.call(this) &&
	      this._compositeLifeCycleState !== CompositeLifeCycle.MOUNTING;
	  },
	
	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {number} mountDepth number of components in the owner hierarchy
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: ReactPerf.measure(
	    'ReactCompositeComponent',
	    'mountComponent',
	    function(rootID, transaction, mountDepth) {
	      ReactComponent.Mixin.mountComponent.call(
	        this,
	        rootID,
	        transaction,
	        mountDepth
	      );
	      this._compositeLifeCycleState = CompositeLifeCycle.MOUNTING;
	
	      if (this.__reactAutoBindMap) {
	        this._bindAutoBindMethods();
	      }
	
	      this.context = this._processContext(this._currentElement._context);
	      this.props = this._processProps(this.props);
	
	      this.state = this.getInitialState ? this.getInitialState() : null;
	      ("production" !== process.env.NODE_ENV ? invariant(
	        typeof this.state === 'object' && !Array.isArray(this.state),
	        '%s.getInitialState(): must return an object or null',
	        this.constructor.displayName || 'ReactCompositeComponent'
	      ) : invariant(typeof this.state === 'object' && !Array.isArray(this.state)));
	
	      this._pendingState = null;
	      this._pendingForceUpdate = false;
	
	      if (this.componentWillMount) {
	        this.componentWillMount();
	        // When mounting, calls to `setState` by `componentWillMount` will set
	        // `this._pendingState` without triggering a re-render.
	        if (this._pendingState) {
	          this.state = this._pendingState;
	          this._pendingState = null;
	        }
	      }
	
	      this._renderedComponent = instantiateReactComponent(
	        this._renderValidatedComponent(),
	        this._currentElement.type // The wrapping type
	      );
	
	      // Done with mounting, `setState` will now trigger UI changes.
	      this._compositeLifeCycleState = null;
	      var markup = this._renderedComponent.mountComponent(
	        rootID,
	        transaction,
	        mountDepth + 1
	      );
	      if (this.componentDidMount) {
	        transaction.getReactMountReady().enqueue(this.componentDidMount, this);
	      }
	      return markup;
	    }
	  ),
	
	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function() {
	    this._compositeLifeCycleState = CompositeLifeCycle.UNMOUNTING;
	    if (this.componentWillUnmount) {
	      this.componentWillUnmount();
	    }
	    this._compositeLifeCycleState = null;
	
	    this._renderedComponent.unmountComponent();
	    this._renderedComponent = null;
	
	    ReactComponent.Mixin.unmountComponent.call(this);
	
	    // Some existing components rely on this.props even after they've been
	    // destroyed (in event handlers).
	    // TODO: this.props = null;
	    // TODO: this.state = null;
	  },
	
	  /**
	   * Sets a subset of the state. Always use this or `replaceState` to mutate
	   * state. You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * There is no guarantee that calls to `setState` will run synchronously,
	   * as they may eventually be batched together.  You can provide an optional
	   * callback that will be executed when the call to setState is actually
	   * completed.
	   *
	   * @param {object} partialState Next partial state to be merged with state.
	   * @param {?function} callback Called after state is updated.
	   * @final
	   * @protected
	   */
	  setState: function(partialState, callback) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      typeof partialState === 'object' || partialState == null,
	      'setState(...): takes an object of state variables to update.'
	    ) : invariant(typeof partialState === 'object' || partialState == null));
	    if ("production" !== process.env.NODE_ENV){
	      ("production" !== process.env.NODE_ENV ? warning(
	        partialState != null,
	        'setState(...): You passed an undefined or null state object; ' +
	        'instead, use forceUpdate().'
	      ) : null);
	    }
	    // Merge with `_pendingState` if it exists, otherwise with existing state.
	    this.replaceState(
	      assign({}, this._pendingState || this.state, partialState),
	      callback
	    );
	  },
	
	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {object} completeState Next state.
	   * @param {?function} callback Called after state is updated.
	   * @final
	   * @protected
	   */
	  replaceState: function(completeState, callback) {
	    validateLifeCycleOnReplaceState(this);
	    this._pendingState = completeState;
	    if (this._compositeLifeCycleState !== CompositeLifeCycle.MOUNTING) {
	      // If we're in a componentWillMount handler, don't enqueue a rerender
	      // because ReactUpdates assumes we're in a browser context (which is wrong
	      // for server rendering) and we're about to do a render anyway.
	      // TODO: The callback here is ignored when setState is called from
	      // componentWillMount. Either fix it or disallow doing so completely in
	      // favor of getInitialState.
	      ReactUpdates.enqueueUpdate(this, callback);
	    }
	  },
	
	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`, and asserts that they are valid.
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _processContext: function(context) {
	    var maskedContext = null;
	    var contextTypes = this.constructor.contextTypes;
	    if (contextTypes) {
	      maskedContext = {};
	      for (var contextName in contextTypes) {
	        maskedContext[contextName] = context[contextName];
	      }
	      if ("production" !== process.env.NODE_ENV) {
	        this._checkPropTypes(
	          contextTypes,
	          maskedContext,
	          ReactPropTypeLocations.context
	        );
	      }
	    }
	    return maskedContext;
	  },
	
	  /**
	   * @param {object} currentContext
	   * @return {object}
	   * @private
	   */
	  _processChildContext: function(currentContext) {
	    var childContext = this.getChildContext && this.getChildContext();
	    var displayName = this.constructor.displayName || 'ReactCompositeComponent';
	    if (childContext) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        typeof this.constructor.childContextTypes === 'object',
	        '%s.getChildContext(): childContextTypes must be defined in order to ' +
	        'use getChildContext().',
	        displayName
	      ) : invariant(typeof this.constructor.childContextTypes === 'object'));
	      if ("production" !== process.env.NODE_ENV) {
	        this._checkPropTypes(
	          this.constructor.childContextTypes,
	          childContext,
	          ReactPropTypeLocations.childContext
	        );
	      }
	      for (var name in childContext) {
	        ("production" !== process.env.NODE_ENV ? invariant(
	          name in this.constructor.childContextTypes,
	          '%s.getChildContext(): key "%s" is not defined in childContextTypes.',
	          displayName,
	          name
	        ) : invariant(name in this.constructor.childContextTypes));
	      }
	      return assign({}, currentContext, childContext);
	    }
	    return currentContext;
	  },
	
	  /**
	   * Processes props by setting default values for unspecified props and
	   * asserting that the props are valid. Does not mutate its argument; returns
	   * a new props object with defaults merged in.
	   *
	   * @param {object} newProps
	   * @return {object}
	   * @private
	   */
	  _processProps: function(newProps) {
	    if ("production" !== process.env.NODE_ENV) {
	      var propTypes = this.constructor.propTypes;
	      if (propTypes) {
	        this._checkPropTypes(propTypes, newProps, ReactPropTypeLocations.prop);
	      }
	    }
	    return newProps;
	  },
	
	  /**
	   * Assert that the props are valid
	   *
	   * @param {object} propTypes Map of prop name to a ReactPropType
	   * @param {object} props
	   * @param {string} location e.g. "prop", "context", "child context"
	   * @private
	   */
	  _checkPropTypes: function(propTypes, props, location) {
	    // TODO: Stop validating prop types here and only use the element
	    // validation.
	    var componentName = this.constructor.displayName;
	    for (var propName in propTypes) {
	      if (propTypes.hasOwnProperty(propName)) {
	        var error =
	          propTypes[propName](props, propName, componentName, location);
	        if (error instanceof Error) {
	          // We may want to extend this logic for similar errors in
	          // renderComponent calls, so I'm abstracting it away into
	          // a function to minimize refactoring in the future
	          var addendum = getDeclarationErrorAddendum(this);
	          ("production" !== process.env.NODE_ENV ? warning(false, error.message + addendum) : null);
	        }
	      }
	    }
	  },
	
	  /**
	   * If any of `_pendingElement`, `_pendingState`, or `_pendingForceUpdate`
	   * is set, update the component.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function(transaction) {
	    var compositeLifeCycleState = this._compositeLifeCycleState;
	    // Do not trigger a state transition if we are in the middle of mounting or
	    // receiving props because both of those will already be doing this.
	    if (compositeLifeCycleState === CompositeLifeCycle.MOUNTING ||
	        compositeLifeCycleState === CompositeLifeCycle.RECEIVING_PROPS) {
	      return;
	    }
	
	    if (this._pendingElement == null &&
	        this._pendingState == null &&
	        !this._pendingForceUpdate) {
	      return;
	    }
	
	    var nextContext = this.context;
	    var nextProps = this.props;
	    var nextElement = this._currentElement;
	    if (this._pendingElement != null) {
	      nextElement = this._pendingElement;
	      nextContext = this._processContext(nextElement._context);
	      nextProps = this._processProps(nextElement.props);
	      this._pendingElement = null;
	
	      this._compositeLifeCycleState = CompositeLifeCycle.RECEIVING_PROPS;
	      if (this.componentWillReceiveProps) {
	        this.componentWillReceiveProps(nextProps, nextContext);
	      }
	    }
	
	    this._compositeLifeCycleState = null;
	
	    var nextState = this._pendingState || this.state;
	    this._pendingState = null;
	
	    var shouldUpdate =
	      this._pendingForceUpdate ||
	      !this.shouldComponentUpdate ||
	      this.shouldComponentUpdate(nextProps, nextState, nextContext);
	
	    if ("production" !== process.env.NODE_ENV) {
	      if (typeof shouldUpdate === "undefined") {
	        console.warn(
	          (this.constructor.displayName || 'ReactCompositeComponent') +
	          '.shouldComponentUpdate(): Returned undefined instead of a ' +
	          'boolean value. Make sure to return true or false.'
	        );
	      }
	    }
	
	    if (shouldUpdate) {
	      this._pendingForceUpdate = false;
	      // Will set `this.props`, `this.state` and `this.context`.
	      this._performComponentUpdate(
	        nextElement,
	        nextProps,
	        nextState,
	        nextContext,
	        transaction
	      );
	    } else {
	      // If it's determined that a component should not update, we still want
	      // to set props and state.
	      this._currentElement = nextElement;
	      this.props = nextProps;
	      this.state = nextState;
	      this.context = nextContext;
	
	      // Owner cannot change because shouldUpdateReactComponent doesn't allow
	      // it. TODO: Remove this._owner completely.
	      this._owner = nextElement._owner;
	    }
	  },
	
	  /**
	   * Merges new props and state, notifies delegate methods of update and
	   * performs update.
	   *
	   * @param {ReactElement} nextElement Next element
	   * @param {object} nextProps Next public object to set as properties.
	   * @param {?object} nextState Next object to set as state.
	   * @param {?object} nextContext Next public object to set as context.
	   * @param {ReactReconcileTransaction} transaction
	   * @private
	   */
	  _performComponentUpdate: function(
	    nextElement,
	    nextProps,
	    nextState,
	    nextContext,
	    transaction
	  ) {
	    var prevElement = this._currentElement;
	    var prevProps = this.props;
	    var prevState = this.state;
	    var prevContext = this.context;
	
	    if (this.componentWillUpdate) {
	      this.componentWillUpdate(nextProps, nextState, nextContext);
	    }
	
	    this._currentElement = nextElement;
	    this.props = nextProps;
	    this.state = nextState;
	    this.context = nextContext;
	
	    // Owner cannot change because shouldUpdateReactComponent doesn't allow
	    // it. TODO: Remove this._owner completely.
	    this._owner = nextElement._owner;
	
	    this.updateComponent(
	      transaction,
	      prevElement
	    );
	
	    if (this.componentDidUpdate) {
	      transaction.getReactMountReady().enqueue(
	        this.componentDidUpdate.bind(this, prevProps, prevState, prevContext),
	        this
	      );
	    }
	  },
	
	  receiveComponent: function(nextElement, transaction) {
	    if (nextElement === this._currentElement &&
	        nextElement._owner != null) {
	      // Since elements are immutable after the owner is rendered,
	      // we can do a cheap identity compare here to determine if this is a
	      // superfluous reconcile. It's possible for state to be mutable but such
	      // change should trigger an update of the owner which would recreate
	      // the element. We explicitly check for the existence of an owner since
	      // it's possible for a element created outside a composite to be
	      // deeply mutated and reused.
	      return;
	    }
	
	    ReactComponent.Mixin.receiveComponent.call(
	      this,
	      nextElement,
	      transaction
	    );
	  },
	
	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: ReactPerf.measure(
	    'ReactCompositeComponent',
	    'updateComponent',
	    function(transaction, prevParentElement) {
	      ReactComponent.Mixin.updateComponent.call(
	        this,
	        transaction,
	        prevParentElement
	      );
	
	      var prevComponentInstance = this._renderedComponent;
	      var prevElement = prevComponentInstance._currentElement;
	      var nextElement = this._renderValidatedComponent();
	      if (shouldUpdateReactComponent(prevElement, nextElement)) {
	        prevComponentInstance.receiveComponent(nextElement, transaction);
	      } else {
	        // These two IDs are actually the same! But nothing should rely on that.
	        var thisID = this._rootNodeID;
	        var prevComponentID = prevComponentInstance._rootNodeID;
	        prevComponentInstance.unmountComponent();
	        this._renderedComponent = instantiateReactComponent(
	          nextElement,
	          this._currentElement.type
	        );
	        var nextMarkup = this._renderedComponent.mountComponent(
	          thisID,
	          transaction,
	          this._mountDepth + 1
	        );
	        ReactComponent.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(
	          prevComponentID,
	          nextMarkup
	        );
	      }
	    }
	  ),
	
	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldUpdateComponent`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {?function} callback Called after update is complete.
	   * @final
	   * @protected
	   */
	  forceUpdate: function(callback) {
	    var compositeLifeCycleState = this._compositeLifeCycleState;
	    ("production" !== process.env.NODE_ENV ? invariant(
	      this.isMounted() ||
	        compositeLifeCycleState === CompositeLifeCycle.MOUNTING,
	      'forceUpdate(...): Can only force an update on mounted or mounting ' +
	        'components.'
	    ) : invariant(this.isMounted() ||
	      compositeLifeCycleState === CompositeLifeCycle.MOUNTING));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING &&
	      ReactCurrentOwner.current == null,
	      'forceUpdate(...): Cannot force an update while unmounting component ' +
	      'or within a `render` function.'
	    ) : invariant(compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING &&
	    ReactCurrentOwner.current == null));
	    this._pendingForceUpdate = true;
	    ReactUpdates.enqueueUpdate(this, callback);
	  },
	
	  /**
	   * @private
	   */
	  _renderValidatedComponent: ReactPerf.measure(
	    'ReactCompositeComponent',
	    '_renderValidatedComponent',
	    function() {
	      var renderedComponent;
	      var previousContext = ReactContext.current;
	      ReactContext.current = this._processChildContext(
	        this._currentElement._context
	      );
	      ReactCurrentOwner.current = this;
	      try {
	        renderedComponent = this.render();
	        if (renderedComponent === null || renderedComponent === false) {
	          renderedComponent = ReactEmptyComponent.getEmptyComponent();
	          ReactEmptyComponent.registerNullComponentID(this._rootNodeID);
	        } else {
	          ReactEmptyComponent.deregisterNullComponentID(this._rootNodeID);
	        }
	      } finally {
	        ReactContext.current = previousContext;
	        ReactCurrentOwner.current = null;
	      }
	      ("production" !== process.env.NODE_ENV ? invariant(
	        ReactElement.isValidElement(renderedComponent),
	        '%s.render(): A valid ReactComponent must be returned. You may have ' +
	          'returned undefined, an array or some other invalid object.',
	        this.constructor.displayName || 'ReactCompositeComponent'
	      ) : invariant(ReactElement.isValidElement(renderedComponent)));
	      return renderedComponent;
	    }
	  ),
	
	  /**
	   * @private
	   */
	  _bindAutoBindMethods: function() {
	    for (var autoBindKey in this.__reactAutoBindMap) {
	      if (!this.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	        continue;
	      }
	      var method = this.__reactAutoBindMap[autoBindKey];
	      this[autoBindKey] = this._bindAutoBindMethod(ReactErrorUtils.guard(
	        method,
	        this.constructor.displayName + '.' + autoBindKey
	      ));
	    }
	  },
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {function} method Method to be bound.
	   * @private
	   */
	  _bindAutoBindMethod: function(method) {
	    var component = this;
	    var boundMethod = method.bind(component);
	    if ("production" !== process.env.NODE_ENV) {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis ) {var args=Array.prototype.slice.call(arguments,1);
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          monitorCodeUse('react_bind_warning', { component: componentName });
	          console.warn(
	            'bind(): React component methods may only be bound to the ' +
	            'component instance. See ' + componentName
	          );
	        } else if (!args.length) {
	          monitorCodeUse('react_bind_warning', { component: componentName });
	          console.warn(
	            'bind(): You are binding a component method to the component. ' +
	            'React does this for you automatically in a high-performance ' +
	            'way, so you can safely remove this call. See ' + componentName
	          );
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	};
	
	var ReactCompositeComponentBase = function() {};
	assign(
	  ReactCompositeComponentBase.prototype,
	  ReactComponent.Mixin,
	  ReactOwner.Mixin,
	  ReactPropTransferer.Mixin,
	  ReactCompositeComponentMixin
	);
	
	/**
	 * Module for creating composite components.
	 *
	 * @class ReactCompositeComponent
	 * @extends ReactComponent
	 * @extends ReactOwner
	 * @extends ReactPropTransferer
	 */
	var ReactCompositeComponent = {
	
	  LifeCycle: CompositeLifeCycle,
	
	  Base: ReactCompositeComponentBase,
	
	  /**
	   * Creates a composite component class given a class specification.
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function(spec) {
	    var Constructor = function(props) {
	      // This constructor is overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted. This will later be used
	      // by the stand-alone class implementation.
	    };
	    Constructor.prototype = new ReactCompositeComponentBase();
	    Constructor.prototype.constructor = Constructor;
	
	    injectedMixins.forEach(
	      mixSpecIntoComponent.bind(null, Constructor)
	    );
	
	    mixSpecIntoComponent(Constructor, spec);
	
	    // Initialize the defaultProps property after all mixins have been merged
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    ("production" !== process.env.NODE_ENV ? invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    ) : invariant(Constructor.prototype.render));
	
	    if ("production" !== process.env.NODE_ENV) {
	      if (Constructor.prototype.componentShouldUpdate) {
	        monitorCodeUse(
	          'react_component_should_update_warning',
	          { component: spec.displayName }
	        );
	        console.warn(
	          (spec.displayName || 'A component') + ' has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.'
	         );
	      }
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactCompositeComponentInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    if ("production" !== process.env.NODE_ENV) {
	      return ReactLegacyElement.wrapFactory(
	        ReactElementValidator.createFactory(Constructor)
	      );
	    }
	    return ReactLegacyElement.wrapFactory(
	      ReactElement.createFactory(Constructor)
	    );
	  },
	
	  injection: {
	    injectMixin: function(mixin) {
	      injectedMixins.push(mixin);
	    }
	  }
	};
	
	module.exports = ReactCompositeComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 35 */
/*!*************************************!*\
  !*** ./~/react/lib/ReactContext.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactContext
	 */
	
	"use strict";
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	
	/**
	 * Keeps track of the current context.
	 *
	 * The context is automatically passed down the component ownership hierarchy
	 * and is accessible via `this.context` on ReactCompositeComponents.
	 */
	var ReactContext = {
	
	  /**
	   * @internal
	   * @type {object}
	   */
	  current: {},
	
	  /**
	   * Temporarily extends the current context while executing scopedCallback.
	   *
	   * A typical use case might look like
	   *
	   *  render: function() {
	   *    var children = ReactContext.withContext({foo: 'foo'}, () => (
	   *
	   *    ));
	   *    return <div>{children}</div>;
	   *  }
	   *
	   * @param {object} newContext New context to merge into the existing context
	   * @param {function} scopedCallback Callback to run with the new context
	   * @return {ReactComponent|array<ReactComponent>}
	   */
	  withContext: function(newContext, scopedCallback) {
	    var result;
	    var previousContext = ReactContext.current;
	    ReactContext.current = assign({}, previousContext, newContext);
	    try {
	      result = scopedCallback();
	    } finally {
	      ReactContext.current = previousContext;
	    }
	    return result;
	  }
	
	};
	
	module.exports = ReactContext;


/***/ },
/* 36 */
/*!******************************************!*\
  !*** ./~/react/lib/ReactCurrentOwner.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */
	
	"use strict";
	
	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 *
	 * The depth indicate how many composite components are above this render level.
	 */
	var ReactCurrentOwner = {
	
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	
	};
	
	module.exports = ReactCurrentOwner;


/***/ },
/* 37 */
/*!*************************************!*\
  !*** ./~/react/lib/ReactElement.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */
	
	"use strict";
	
	var ReactContext = __webpack_require__(/*! ./ReactContext */ 35);
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 36);
	
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	var RESERVED_PROPS = {
	  key: true,
	  ref: true
	};
	
	/**
	 * Warn for mutations.
	 *
	 * @internal
	 * @param {object} object
	 * @param {string} key
	 */
	function defineWarningProperty(object, key) {
	  Object.defineProperty(object, key, {
	
	    configurable: false,
	    enumerable: true,
	
	    get: function() {
	      if (!this._store) {
	        return null;
	      }
	      return this._store[key];
	    },
	
	    set: function(value) {
	      ("production" !== process.env.NODE_ENV ? warning(
	        false,
	        'Don\'t set the ' + key + ' property of the component. ' +
	        'Mutate the existing props object instead.'
	      ) : null);
	      this._store[key] = value;
	    }
	
	  });
	}
	
	/**
	 * This is updated to true if the membrane is successfully created.
	 */
	var useMutationMembrane = false;
	
	/**
	 * Warn for mutations.
	 *
	 * @internal
	 * @param {object} element
	 */
	function defineMutationMembrane(prototype) {
	  try {
	    var pseudoFrozenProperties = {
	      props: true
	    };
	    for (var key in pseudoFrozenProperties) {
	      defineWarningProperty(prototype, key);
	    }
	    useMutationMembrane = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}
	
	/**
	 * Base constructor for all React elements. This is only used to make this
	 * work with a dynamic instanceof check. Nothing should live on this prototype.
	 *
	 * @param {*} type
	 * @param {string|object} ref
	 * @param {*} key
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function(type, key, ref, owner, context, props) {
	  // Built-in properties that belong on the element
	  this.type = type;
	  this.key = key;
	  this.ref = ref;
	
	  // Record the component responsible for creating this element.
	  this._owner = owner;
	
	  // TODO: Deprecate withContext, and then the context becomes accessible
	  // through the owner.
	  this._context = context;
	
	  if ("production" !== process.env.NODE_ENV) {
	    // The validation flag and props are currently mutative. We put them on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    this._store = { validated: false, props: props };
	
	    // We're not allowed to set props directly on the object so we early
	    // return and rely on the prototype membrane to forward to the backing
	    // store.
	    if (useMutationMembrane) {
	      Object.freeze(this);
	      return;
	    }
	  }
	
	  this.props = props;
	};
	
	// We intentionally don't expose the function on the constructor property.
	// ReactElement should be indistinguishable from a plain object.
	ReactElement.prototype = {
	  _isReactElement: true
	};
	
	if ("production" !== process.env.NODE_ENV) {
	  defineMutationMembrane(ReactElement.prototype);
	}
	
	ReactElement.createElement = function(type, config, children) {
	  var propName;
	
	  // Reserved names are extracted
	  var props = {};
	
	  var key = null;
	  var ref = null;
	
	  if (config != null) {
	    ref = config.ref === undefined ? null : config.ref;
	    if ("production" !== process.env.NODE_ENV) {
	      ("production" !== process.env.NODE_ENV ? warning(
	        config.key !== null,
	        'createElement(...): Encountered component with a `key` of null. In ' +
	        'a future version, this will be treated as equivalent to the string ' +
	        '\'null\'; instead, provide an explicit key or use undefined.'
	      ) : null);
	    }
	    // TODO: Change this back to `config.key === undefined`
	    key = config.key == null ? null : '' + config.key;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) &&
	          !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  // Resolve default props
	  if (type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (typeof props[propName] === 'undefined') {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	
	  return new ReactElement(
	    type,
	    key,
	    ref,
	    ReactCurrentOwner.current,
	    ReactContext.current,
	    props
	  );
	};
	
	ReactElement.createFactory = function(type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. <Foo />.type === Foo.type.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  factory.type = type;
	  return factory;
	};
	
	ReactElement.cloneAndReplaceProps = function(oldElement, newProps) {
	  var newElement = new ReactElement(
	    oldElement.type,
	    oldElement.key,
	    oldElement.ref,
	    oldElement._owner,
	    oldElement._context,
	    newProps
	  );
	
	  if ("production" !== process.env.NODE_ENV) {
	    // If the key on the original is valid, then the clone is valid
	    newElement._store.validated = oldElement._store.validated;
	  }
	  return newElement;
	};
	
	/**
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function(object) {
	  // ReactTestUtils is often used outside of beforeEach where as React is
	  // within it. This leads to two different instances of React on the same
	  // page. To identify a element from a different React instance we use
	  // a flag instead of an instanceof check.
	  var isElement = !!(object && object._isReactElement);
	  // if (isElement && !(object instanceof ReactElement)) {
	  // This is an indicator that you're using multiple versions of React at the
	  // same time. This will screw with ownership and stuff. Fix it, please.
	  // TODO: We could possibly warn here.
	  // }
	  return isElement;
	};
	
	module.exports = ReactElement;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 38 */
/*!**********************************************!*\
  !*** ./~/react/lib/ReactElementValidator.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */
	
	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */
	
	"use strict";
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactPropTypeLocations = __webpack_require__(/*! ./ReactPropTypeLocations */ 80);
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 36);
	
	var monitorCodeUse = __webpack_require__(/*! ./monitorCodeUse */ 84);
	
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {
	  'react_key_warning': {},
	  'react_numeric_key_warning': {}
	};
	var ownerHasMonitoredObjectMap = {};
	
	var loggedTypeFailures = {};
	
	var NUMERIC_PROPERTY_REGEX = /^\d+$/;
	
	/**
	 * Gets the current owner's displayName for use in warnings.
	 *
	 * @internal
	 * @return {?string} Display name or undefined
	 */
	function getCurrentOwnerDisplayName() {
	  var current = ReactCurrentOwner.current;
	  return current && current.constructor.displayName || undefined;
	}
	
	/**
	 * Warn if the component doesn't have an explicit key assigned to it.
	 * This component is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it.
	 *
	 * @internal
	 * @param {ReactComponent} component Component that requires a key.
	 * @param {*} parentType component's parent's type.
	 */
	function validateExplicitKey(component, parentType) {
	  if (component._store.validated || component.key != null) {
	    return;
	  }
	  component._store.validated = true;
	
	  warnAndMonitorForKeyUse(
	    'react_key_warning',
	    'Each child in an array should have a unique "key" prop.',
	    component,
	    parentType
	  );
	}
	
	/**
	 * Warn if the key is being defined as an object property but has an incorrect
	 * value.
	 *
	 * @internal
	 * @param {string} name Property name of the key.
	 * @param {ReactComponent} component Component that requires a key.
	 * @param {*} parentType component's parent's type.
	 */
	function validatePropertyKey(name, component, parentType) {
	  if (!NUMERIC_PROPERTY_REGEX.test(name)) {
	    return;
	  }
	  warnAndMonitorForKeyUse(
	    'react_numeric_key_warning',
	    'Child objects should have non-numeric keys so ordering is preserved.',
	    component,
	    parentType
	  );
	}
	
	/**
	 * Shared warning and monitoring code for the key warnings.
	 *
	 * @internal
	 * @param {string} warningID The id used when logging.
	 * @param {string} message The base warning that gets output.
	 * @param {ReactComponent} component Component that requires a key.
	 * @param {*} parentType component's parent's type.
	 */
	function warnAndMonitorForKeyUse(warningID, message, component, parentType) {
	  var ownerName = getCurrentOwnerDisplayName();
	  var parentName = parentType.displayName;
	
	  var useName = ownerName || parentName;
	  var memoizer = ownerHasKeyUseWarning[warningID];
	  if (memoizer.hasOwnProperty(useName)) {
	    return;
	  }
	  memoizer[useName] = true;
	
	  message += ownerName ?
	    (" Check the render method of " + ownerName + ".") :
	    (" Check the renderComponent call using <" + parentName + ">.");
	
	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwnerName = null;
	  if (component._owner && component._owner !== ReactCurrentOwner.current) {
	    // Name of the component that originally created this child.
	    childOwnerName = component._owner.constructor.displayName;
	
	    message += (" It was passed a child from " + childOwnerName + ".");
	  }
	
	  message += ' See http://fb.me/react-warning-keys for more information.';
	  monitorCodeUse(warningID, {
	    component: useName,
	    componentOwner: childOwnerName
	  });
	  console.warn(message);
	}
	
	/**
	 * Log that we're using an object map. We're considering deprecating this
	 * feature and replace it with proper Map and ImmutableMap data structures.
	 *
	 * @internal
	 */
	function monitorUseOfObjectMap() {
	  var currentName = getCurrentOwnerDisplayName() || '';
	  if (ownerHasMonitoredObjectMap.hasOwnProperty(currentName)) {
	    return;
	  }
	  ownerHasMonitoredObjectMap[currentName] = true;
	  monitorCodeUse('react_object_map_children');
	}
	
	/**
	 * Ensure that every component either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {*} component Statically passed child of any type.
	 * @param {*} parentType component's parent's type.
	 * @return {boolean}
	 */
	function validateChildKeys(component, parentType) {
	  if (Array.isArray(component)) {
	    for (var i = 0; i < component.length; i++) {
	      var child = component[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(component)) {
	    // This component was passed in a valid location.
	    component._store.validated = true;
	  } else if (component && typeof component === 'object') {
	    monitorUseOfObjectMap();
	    for (var name in component) {
	      validatePropertyKey(name, component[name], parentType);
	    }
	  }
	}
	
	/**
	 * Assert that the props are valid
	 *
	 * @param {string} componentName Name of the component for error messages.
	 * @param {object} propTypes Map of prop name to a ReactPropType
	 * @param {object} props
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @private
	 */
	function checkPropTypes(componentName, propTypes, props, location) {
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        error = propTypes[propName](props, propName, componentName, location);
	      } catch (ex) {
	        error = ex;
	      }
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;
	        // This will soon use the warning module
	        monitorCodeUse(
	          'react_failed_descriptor_type_check',
	          { message: error.message }
	        );
	      }
	    }
	  }
	}
	
	var ReactElementValidator = {
	
	  createElement: function(type, props, children) {
	    var element = ReactElement.createElement.apply(this, arguments);
	
	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }
	
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], type);
	    }
	
	    var name = type.displayName;
	    if (type.propTypes) {
	      checkPropTypes(
	        name,
	        type.propTypes,
	        element.props,
	        ReactPropTypeLocations.prop
	      );
	    }
	    if (type.contextTypes) {
	      checkPropTypes(
	        name,
	        type.contextTypes,
	        element._context,
	        ReactPropTypeLocations.context
	      );
	    }
	    return element;
	  },
	
	  createFactory: function(type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(
	      null,
	      type
	    );
	    validatedFactory.type = type;
	    return validatedFactory;
	  }
	
	};
	
	module.exports = ReactElementValidator;


/***/ },
/* 39 */
/*!*********************************!*\
  !*** ./~/react/lib/ReactDOM.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOM
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactElementValidator = __webpack_require__(/*! ./ReactElementValidator */ 38);
	var ReactLegacyElement = __webpack_require__(/*! ./ReactLegacyElement */ 43);
	
	var mapObject = __webpack_require__(/*! ./mapObject */ 85);
	
	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @param {string} tag Tag name (e.g. `div`).
	 * @private
	 */
	function createDOMFactory(tag) {
	  if ("production" !== process.env.NODE_ENV) {
	    return ReactLegacyElement.markNonLegacyFactory(
	      ReactElementValidator.createFactory(tag)
	    );
	  }
	  return ReactLegacyElement.markNonLegacyFactory(
	    ReactElement.createFactory(tag)
	  );
	}
	
	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOM = mapObject({
	  a: 'a',
	  abbr: 'abbr',
	  address: 'address',
	  area: 'area',
	  article: 'article',
	  aside: 'aside',
	  audio: 'audio',
	  b: 'b',
	  base: 'base',
	  bdi: 'bdi',
	  bdo: 'bdo',
	  big: 'big',
	  blockquote: 'blockquote',
	  body: 'body',
	  br: 'br',
	  button: 'button',
	  canvas: 'canvas',
	  caption: 'caption',
	  cite: 'cite',
	  code: 'code',
	  col: 'col',
	  colgroup: 'colgroup',
	  data: 'data',
	  datalist: 'datalist',
	  dd: 'dd',
	  del: 'del',
	  details: 'details',
	  dfn: 'dfn',
	  dialog: 'dialog',
	  div: 'div',
	  dl: 'dl',
	  dt: 'dt',
	  em: 'em',
	  embed: 'embed',
	  fieldset: 'fieldset',
	  figcaption: 'figcaption',
	  figure: 'figure',
	  footer: 'footer',
	  form: 'form',
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  head: 'head',
	  header: 'header',
	  hr: 'hr',
	  html: 'html',
	  i: 'i',
	  iframe: 'iframe',
	  img: 'img',
	  input: 'input',
	  ins: 'ins',
	  kbd: 'kbd',
	  keygen: 'keygen',
	  label: 'label',
	  legend: 'legend',
	  li: 'li',
	  link: 'link',
	  main: 'main',
	  map: 'map',
	  mark: 'mark',
	  menu: 'menu',
	  menuitem: 'menuitem',
	  meta: 'meta',
	  meter: 'meter',
	  nav: 'nav',
	  noscript: 'noscript',
	  object: 'object',
	  ol: 'ol',
	  optgroup: 'optgroup',
	  option: 'option',
	  output: 'output',
	  p: 'p',
	  param: 'param',
	  picture: 'picture',
	  pre: 'pre',
	  progress: 'progress',
	  q: 'q',
	  rp: 'rp',
	  rt: 'rt',
	  ruby: 'ruby',
	  s: 's',
	  samp: 'samp',
	  script: 'script',
	  section: 'section',
	  select: 'select',
	  small: 'small',
	  source: 'source',
	  span: 'span',
	  strong: 'strong',
	  style: 'style',
	  sub: 'sub',
	  summary: 'summary',
	  sup: 'sup',
	  table: 'table',
	  tbody: 'tbody',
	  td: 'td',
	  textarea: 'textarea',
	  tfoot: 'tfoot',
	  th: 'th',
	  thead: 'thead',
	  time: 'time',
	  title: 'title',
	  tr: 'tr',
	  track: 'track',
	  u: 'u',
	  ul: 'ul',
	  'var': 'var',
	  video: 'video',
	  wbr: 'wbr',
	
	  // SVG
	  circle: 'circle',
	  defs: 'defs',
	  ellipse: 'ellipse',
	  g: 'g',
	  line: 'line',
	  linearGradient: 'linearGradient',
	  mask: 'mask',
	  path: 'path',
	  pattern: 'pattern',
	  polygon: 'polygon',
	  polyline: 'polyline',
	  radialGradient: 'radialGradient',
	  rect: 'rect',
	  stop: 'stop',
	  svg: 'svg',
	  text: 'text',
	  tspan: 'tspan'
	
	}, createDOMFactory);
	
	module.exports = ReactDOM;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 40 */
/*!******************************************!*\
  !*** ./~/react/lib/ReactDOMComponent.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMComponent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var CSSPropertyOperations = __webpack_require__(/*! ./CSSPropertyOperations */ 87);
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 68);
	var DOMPropertyOperations = __webpack_require__(/*! ./DOMPropertyOperations */ 30);
	var ReactBrowserComponentMixin = __webpack_require__(/*! ./ReactBrowserComponentMixin */ 88);
	var ReactComponent = __webpack_require__(/*! ./ReactComponent */ 33);
	var ReactBrowserEventEmitter = __webpack_require__(/*! ./ReactBrowserEventEmitter */ 89);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 44);
	var ReactMultiChild = __webpack_require__(/*! ./ReactMultiChild */ 45);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 46);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var escapeTextForBrowser = __webpack_require__(/*! ./escapeTextForBrowser */ 69);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	var isEventSupported = __webpack_require__(/*! ./isEventSupported */ 90);
	var keyOf = __webpack_require__(/*! ./keyOf */ 83);
	var monitorCodeUse = __webpack_require__(/*! ./monitorCodeUse */ 84);
	
	var deleteListener = ReactBrowserEventEmitter.deleteListener;
	var listenTo = ReactBrowserEventEmitter.listenTo;
	var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;
	
	// For quickly matching children type, to test if can be treated as content.
	var CONTENT_TYPES = {'string': true, 'number': true};
	
	var STYLE = keyOf({style: null});
	
	var ELEMENT_NODE_TYPE = 1;
	
	/**
	 * @param {?object} props
	 */
	function assertValidProps(props) {
	  if (!props) {
	    return;
	  }
	  // Note the use of `==` which checks for null or undefined.
	  ("production" !== process.env.NODE_ENV ? invariant(
	    props.children == null || props.dangerouslySetInnerHTML == null,
	    'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'
	  ) : invariant(props.children == null || props.dangerouslySetInnerHTML == null));
	  if ("production" !== process.env.NODE_ENV) {
	    if (props.contentEditable && props.children != null) {
	      console.warn(
	        'A component is `contentEditable` and contains `children` managed by ' +
	        'React. It is now your responsibility to guarantee that none of those '+
	        'nodes are unexpectedly modified or duplicated. This is probably not ' +
	        'intentional.'
	      );
	    }
	  }
	  ("production" !== process.env.NODE_ENV ? invariant(
	    props.style == null || typeof props.style === 'object',
	    'The `style` prop expects a mapping from style properties to values, ' +
	    'not a string.'
	  ) : invariant(props.style == null || typeof props.style === 'object'));
	}
	
	function putListener(id, registrationName, listener, transaction) {
	  if ("production" !== process.env.NODE_ENV) {
	    // IE8 has no API for event capturing and the `onScroll` event doesn't
	    // bubble.
	    if (registrationName === 'onScroll' &&
	        !isEventSupported('scroll', true)) {
	      monitorCodeUse('react_no_scroll_event');
	      console.warn('This browser doesn\'t support the `onScroll` event');
	    }
	  }
	  var container = ReactMount.findReactContainerForID(id);
	  if (container) {
	    var doc = container.nodeType === ELEMENT_NODE_TYPE ?
	      container.ownerDocument :
	      container;
	    listenTo(registrationName, doc);
	  }
	  transaction.getPutListenerQueue().enqueuePutListener(
	    id,
	    registrationName,
	    listener
	  );
	}
	
	// For HTML, certain tags should omit their close tag. We keep a whitelist for
	// those special cased tags.
	
	var omittedCloseTags = {
	  'area': true,
	  'base': true,
	  'br': true,
	  'col': true,
	  'embed': true,
	  'hr': true,
	  'img': true,
	  'input': true,
	  'keygen': true,
	  'link': true,
	  'meta': true,
	  'param': true,
	  'source': true,
	  'track': true,
	  'wbr': true
	  // NOTE: menuitem's close tag should be omitted, but that causes problems.
	};
	
	// We accept any tag to be rendered but since this gets injected into abitrary
	// HTML, we want to make sure that it's a safe tag.
	// http://www.w3.org/TR/REC-xml/#NT-Name
	
	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
	var validatedTagCache = {};
	var hasOwnProperty = {}.hasOwnProperty;
	
	function validateDangerousTag(tag) {
	  if (!hasOwnProperty.call(validatedTagCache, tag)) {
	    ("production" !== process.env.NODE_ENV ? invariant(VALID_TAG_REGEX.test(tag), 'Invalid tag: %s', tag) : invariant(VALID_TAG_REGEX.test(tag)));
	    validatedTagCache[tag] = true;
	  }
	}
	
	/**
	 * Creates a new React class that is idempotent and capable of containing other
	 * React components. It accepts event listeners and DOM properties that are
	 * valid according to `DOMProperty`.
	 *
	 *  - Event listeners: `onClick`, `onMouseDown`, etc.
	 *  - DOM properties: `className`, `name`, `title`, etc.
	 *
	 * The `style` property functions differently from the DOM API. It accepts an
	 * object mapping of style properties to values.
	 *
	 * @constructor ReactDOMComponent
	 * @extends ReactComponent
	 * @extends ReactMultiChild
	 */
	function ReactDOMComponent(tag) {
	  validateDangerousTag(tag);
	  this._tag = tag;
	  this.tagName = tag.toUpperCase();
	}
	
	ReactDOMComponent.displayName = 'ReactDOMComponent';
	
	ReactDOMComponent.Mixin = {
	
	  /**
	   * Generates root tag markup then recurses. This method has side effects and
	   * is not idempotent.
	   *
	   * @internal
	   * @param {string} rootID The root DOM ID for this node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {number} mountDepth number of components in the owner hierarchy
	   * @return {string} The computed markup.
	   */
	  mountComponent: ReactPerf.measure(
	    'ReactDOMComponent',
	    'mountComponent',
	    function(rootID, transaction, mountDepth) {
	      ReactComponent.Mixin.mountComponent.call(
	        this,
	        rootID,
	        transaction,
	        mountDepth
	      );
	      assertValidProps(this.props);
	      var closeTag = omittedCloseTags[this._tag] ? '' : '</' + this._tag + '>';
	      return (
	        this._createOpenTagMarkupAndPutListeners(transaction) +
	        this._createContentMarkup(transaction) +
	        closeTag
	      );
	    }
	  ),
	
	  /**
	   * Creates markup for the open tag and all attributes.
	   *
	   * This method has side effects because events get registered.
	   *
	   * Iterating over object properties is faster than iterating over arrays.
	   * @see http://jsperf.com/obj-vs-arr-iteration
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Markup of opening tag.
	   */
	  _createOpenTagMarkupAndPutListeners: function(transaction) {
	    var props = this.props;
	    var ret = '<' + this._tag;
	
	    for (var propKey in props) {
	      if (!props.hasOwnProperty(propKey)) {
	        continue;
	      }
	      var propValue = props[propKey];
	      if (propValue == null) {
	        continue;
	      }
	      if (registrationNameModules.hasOwnProperty(propKey)) {
	        putListener(this._rootNodeID, propKey, propValue, transaction);
	      } else {
	        if (propKey === STYLE) {
	          if (propValue) {
	            propValue = props.style = assign({}, props.style);
	          }
	          propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
	        }
	        var markup =
	          DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
	        if (markup) {
	          ret += ' ' + markup;
	        }
	      }
	    }
	
	    // For static pages, no need to put React ID and checksum. Saves lots of
	    // bytes.
	    if (transaction.renderToStaticMarkup) {
	      return ret + '>';
	    }
	
	    var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
	    return ret + ' ' + markupForID + '>';
	  },
	
	  /**
	   * Creates markup for the content between the tags.
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Content markup.
	   */
	  _createContentMarkup: function(transaction) {
	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = this.props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        return innerHTML.__html;
	      }
	    } else {
	      var contentToUse =
	        CONTENT_TYPES[typeof this.props.children] ? this.props.children : null;
	      var childrenToUse = contentToUse != null ? null : this.props.children;
	      if (contentToUse != null) {
	        return escapeTextForBrowser(contentToUse);
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(
	          childrenToUse,
	          transaction
	        );
	        return mountImages.join('');
	      }
	    }
	    return '';
	  },
	
	  receiveComponent: function(nextElement, transaction) {
	    if (nextElement === this._currentElement &&
	        nextElement._owner != null) {
	      // Since elements are immutable after the owner is rendered,
	      // we can do a cheap identity compare here to determine if this is a
	      // superfluous reconcile. It's possible for state to be mutable but such
	      // change should trigger an update of the owner which would recreate
	      // the element. We explicitly check for the existence of an owner since
	      // it's possible for a element created outside a composite to be
	      // deeply mutated and reused.
	      return;
	    }
	
	    ReactComponent.Mixin.receiveComponent.call(
	      this,
	      nextElement,
	      transaction
	    );
	  },
	
	  /**
	   * Updates a native DOM component after it has already been allocated and
	   * attached to the DOM. Reconciles the root DOM node, then recurses.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: ReactPerf.measure(
	    'ReactDOMComponent',
	    'updateComponent',
	    function(transaction, prevElement) {
	      assertValidProps(this._currentElement.props);
	      ReactComponent.Mixin.updateComponent.call(
	        this,
	        transaction,
	        prevElement
	      );
	      this._updateDOMProperties(prevElement.props, transaction);
	      this._updateDOMChildren(prevElement.props, transaction);
	    }
	  ),
	
	  /**
	   * Reconciles the properties by detecting differences in property values and
	   * updating the DOM as necessary. This function is probably the single most
	   * critical path for performance optimization.
	   *
	   * TODO: Benchmark whether checking for changed values in memory actually
	   *       improves performance (especially statically positioned elements).
	   * TODO: Benchmark the effects of putting this at the top since 99% of props
	   *       do not change for a given reconciliation.
	   * TODO: Benchmark areas that can be improved with caching.
	   *
	   * @private
	   * @param {object} lastProps
	   * @param {ReactReconcileTransaction} transaction
	   */
	  _updateDOMProperties: function(lastProps, transaction) {
	    var nextProps = this.props;
	    var propKey;
	    var styleName;
	    var styleUpdates;
	    for (propKey in lastProps) {
	      if (nextProps.hasOwnProperty(propKey) ||
	         !lastProps.hasOwnProperty(propKey)) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        var lastStyle = lastProps[propKey];
	        for (styleName in lastStyle) {
	          if (lastStyle.hasOwnProperty(styleName)) {
	            styleUpdates = styleUpdates || {};
	            styleUpdates[styleName] = '';
	          }
	        }
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        deleteListener(this._rootNodeID, propKey);
	      } else if (
	          DOMProperty.isStandardName[propKey] ||
	          DOMProperty.isCustomAttribute(propKey)) {
	        ReactComponent.BackendIDOperations.deletePropertyByID(
	          this._rootNodeID,
	          propKey
	        );
	      }
	    }
	    for (propKey in nextProps) {
	      var nextProp = nextProps[propKey];
	      var lastProp = lastProps[propKey];
	      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        if (nextProp) {
	          nextProp = nextProps.style = assign({}, nextProp);
	        }
	        if (lastProp) {
	          // Unset styles on `lastProp` but not on `nextProp`.
	          for (styleName in lastProp) {
	            if (lastProp.hasOwnProperty(styleName) &&
	                (!nextProp || !nextProp.hasOwnProperty(styleName))) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = '';
	            }
	          }
	          // Update styles that changed since `lastProp`.
	          for (styleName in nextProp) {
	            if (nextProp.hasOwnProperty(styleName) &&
	                lastProp[styleName] !== nextProp[styleName]) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = nextProp[styleName];
	            }
	          }
	        } else {
	          // Relies on `updateStylesByID` not mutating `styleUpdates`.
	          styleUpdates = nextProp;
	        }
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        putListener(this._rootNodeID, propKey, nextProp, transaction);
	      } else if (
	          DOMProperty.isStandardName[propKey] ||
	          DOMProperty.isCustomAttribute(propKey)) {
	        ReactComponent.BackendIDOperations.updatePropertyByID(
	          this._rootNodeID,
	          propKey,
	          nextProp
	        );
	      }
	    }
	    if (styleUpdates) {
	      ReactComponent.BackendIDOperations.updateStylesByID(
	        this._rootNodeID,
	        styleUpdates
	      );
	    }
	  },
	
	  /**
	   * Reconciles the children with the various properties that affect the
	   * children content.
	   *
	   * @param {object} lastProps
	   * @param {ReactReconcileTransaction} transaction
	   */
	  _updateDOMChildren: function(lastProps, transaction) {
	    var nextProps = this.props;
	
	    var lastContent =
	      CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
	    var nextContent =
	      CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;
	
	    var lastHtml =
	      lastProps.dangerouslySetInnerHTML &&
	      lastProps.dangerouslySetInnerHTML.__html;
	    var nextHtml =
	      nextProps.dangerouslySetInnerHTML &&
	      nextProps.dangerouslySetInnerHTML.__html;
	
	    // Note the use of `!=` which checks for null or undefined.
	    var lastChildren = lastContent != null ? null : lastProps.children;
	    var nextChildren = nextContent != null ? null : nextProps.children;
	
	    // If we're switching from children to content/html or vice versa, remove
	    // the old content
	    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
	    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
	    if (lastChildren != null && nextChildren == null) {
	      this.updateChildren(null, transaction);
	    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
	      this.updateTextContent('');
	    }
	
	    if (nextContent != null) {
	      if (lastContent !== nextContent) {
	        this.updateTextContent('' + nextContent);
	      }
	    } else if (nextHtml != null) {
	      if (lastHtml !== nextHtml) {
	        ReactComponent.BackendIDOperations.updateInnerHTMLByID(
	          this._rootNodeID,
	          nextHtml
	        );
	      }
	    } else if (nextChildren != null) {
	      this.updateChildren(nextChildren, transaction);
	    }
	  },
	
	  /**
	   * Destroys all event registrations for this instance. Does not remove from
	   * the DOM. That must be done by the parent.
	   *
	   * @internal
	   */
	  unmountComponent: function() {
	    this.unmountChildren();
	    ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
	    ReactComponent.Mixin.unmountComponent.call(this);
	  }
	
	};
	
	assign(
	  ReactDOMComponent.prototype,
	  ReactComponent.Mixin,
	  ReactDOMComponent.Mixin,
	  ReactMultiChild.Mixin,
	  ReactBrowserComponentMixin
	);
	
	module.exports = ReactDOMComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 41 */
/*!**********************************************!*\
  !*** ./~/react/lib/ReactDefaultInjection.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultInjection
	 */
	
	"use strict";
	
	var BeforeInputEventPlugin = __webpack_require__(/*! ./BeforeInputEventPlugin */ 91);
	var ChangeEventPlugin = __webpack_require__(/*! ./ChangeEventPlugin */ 92);
	var ClientReactRootIndex = __webpack_require__(/*! ./ClientReactRootIndex */ 93);
	var CompositionEventPlugin = __webpack_require__(/*! ./CompositionEventPlugin */ 94);
	var DefaultEventPluginOrder = __webpack_require__(/*! ./DefaultEventPluginOrder */ 95);
	var EnterLeaveEventPlugin = __webpack_require__(/*! ./EnterLeaveEventPlugin */ 96);
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	var HTMLDOMPropertyConfig = __webpack_require__(/*! ./HTMLDOMPropertyConfig */ 97);
	var MobileSafariClickEventPlugin = __webpack_require__(/*! ./MobileSafariClickEventPlugin */ 98);
	var ReactBrowserComponentMixin = __webpack_require__(/*! ./ReactBrowserComponentMixin */ 88);
	var ReactComponentBrowserEnvironment =
	  __webpack_require__(/*! ./ReactComponentBrowserEnvironment */ 99);
	var ReactDefaultBatchingStrategy = __webpack_require__(/*! ./ReactDefaultBatchingStrategy */ 100);
	var ReactDOMComponent = __webpack_require__(/*! ./ReactDOMComponent */ 40);
	var ReactDOMButton = __webpack_require__(/*! ./ReactDOMButton */ 101);
	var ReactDOMForm = __webpack_require__(/*! ./ReactDOMForm */ 102);
	var ReactDOMImg = __webpack_require__(/*! ./ReactDOMImg */ 103);
	var ReactDOMInput = __webpack_require__(/*! ./ReactDOMInput */ 104);
	var ReactDOMOption = __webpack_require__(/*! ./ReactDOMOption */ 105);
	var ReactDOMSelect = __webpack_require__(/*! ./ReactDOMSelect */ 106);
	var ReactDOMTextarea = __webpack_require__(/*! ./ReactDOMTextarea */ 107);
	var ReactEventListener = __webpack_require__(/*! ./ReactEventListener */ 108);
	var ReactInjection = __webpack_require__(/*! ./ReactInjection */ 109);
	var ReactInstanceHandles = __webpack_require__(/*! ./ReactInstanceHandles */ 42);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 44);
	var SelectEventPlugin = __webpack_require__(/*! ./SelectEventPlugin */ 110);
	var ServerReactRootIndex = __webpack_require__(/*! ./ServerReactRootIndex */ 111);
	var SimpleEventPlugin = __webpack_require__(/*! ./SimpleEventPlugin */ 112);
	var SVGDOMPropertyConfig = __webpack_require__(/*! ./SVGDOMPropertyConfig */ 113);
	
	var createFullPageComponent = __webpack_require__(/*! ./createFullPageComponent */ 114);
	
	function inject() {
	  ReactInjection.EventEmitter.injectReactEventListener(
	    ReactEventListener
	  );
	
	  /**
	   * Inject modules for resolving DOM hierarchy and plugin ordering.
	   */
	  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
	  ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
	  ReactInjection.EventPluginHub.injectMount(ReactMount);
	
	  /**
	   * Some important event plugins included by default (without having to require
	   * them).
	   */
	  ReactInjection.EventPluginHub.injectEventPluginsByName({
	    SimpleEventPlugin: SimpleEventPlugin,
	    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
	    ChangeEventPlugin: ChangeEventPlugin,
	    CompositionEventPlugin: CompositionEventPlugin,
	    MobileSafariClickEventPlugin: MobileSafariClickEventPlugin,
	    SelectEventPlugin: SelectEventPlugin,
	    BeforeInputEventPlugin: BeforeInputEventPlugin
	  });
	
	  ReactInjection.NativeComponent.injectGenericComponentClass(
	    ReactDOMComponent
	  );
	
	  ReactInjection.NativeComponent.injectComponentClasses({
	    'button': ReactDOMButton,
	    'form': ReactDOMForm,
	    'img': ReactDOMImg,
	    'input': ReactDOMInput,
	    'option': ReactDOMOption,
	    'select': ReactDOMSelect,
	    'textarea': ReactDOMTextarea,
	
	    'html': createFullPageComponent('html'),
	    'head': createFullPageComponent('head'),
	    'body': createFullPageComponent('body')
	  });
	
	  // This needs to happen after createFullPageComponent() otherwise the mixin
	  // gets double injected.
	  ReactInjection.CompositeComponent.injectMixin(ReactBrowserComponentMixin);
	
	  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
	  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);
	
	  ReactInjection.EmptyComponent.injectEmptyComponent('noscript');
	
	  ReactInjection.Updates.injectReconcileTransaction(
	    ReactComponentBrowserEnvironment.ReactReconcileTransaction
	  );
	  ReactInjection.Updates.injectBatchingStrategy(
	    ReactDefaultBatchingStrategy
	  );
	
	  ReactInjection.RootIndex.injectCreateReactRootIndex(
	    ExecutionEnvironment.canUseDOM ?
	      ClientReactRootIndex.createReactRootIndex :
	      ServerReactRootIndex.createReactRootIndex
	  );
	
	  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
	
	  if ("production" !== process.env.NODE_ENV) {
	    var url = (ExecutionEnvironment.canUseDOM && window.location.href) || '';
	    if ((/[?&]react_perf\b/).test(url)) {
	      var ReactDefaultPerf = __webpack_require__(/*! ./ReactDefaultPerf */ 115);
	      ReactDefaultPerf.start();
	    }
	  }
	}
	
	module.exports = {
	  inject: inject
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 42 */
/*!*********************************************!*\
  !*** ./~/react/lib/ReactInstanceHandles.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceHandles
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var ReactRootIndex = __webpack_require__(/*! ./ReactRootIndex */ 116);
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	var SEPARATOR = '.';
	var SEPARATOR_LENGTH = SEPARATOR.length;
	
	/**
	 * Maximum depth of traversals before we consider the possibility of a bad ID.
	 */
	var MAX_TREE_DEPTH = 100;
	
	/**
	 * Creates a DOM ID prefix to use when mounting React components.
	 *
	 * @param {number} index A unique integer
	 * @return {string} React root ID.
	 * @internal
	 */
	function getReactRootIDString(index) {
	  return SEPARATOR + index.toString(36);
	}
	
	/**
	 * Checks if a character in the supplied ID is a separator or the end.
	 *
	 * @param {string} id A React DOM ID.
	 * @param {number} index Index of the character to check.
	 * @return {boolean} True if the character is a separator or end of the ID.
	 * @private
	 */
	function isBoundary(id, index) {
	  return id.charAt(index) === SEPARATOR || index === id.length;
	}
	
	/**
	 * Checks if the supplied string is a valid React DOM ID.
	 *
	 * @param {string} id A React DOM ID, maybe.
	 * @return {boolean} True if the string is a valid React DOM ID.
	 * @private
	 */
	function isValidID(id) {
	  return id === '' || (
	    id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR
	  );
	}
	
	/**
	 * Checks if the first ID is an ancestor of or equal to the second ID.
	 *
	 * @param {string} ancestorID
	 * @param {string} descendantID
	 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
	 * @internal
	 */
	function isAncestorIDOf(ancestorID, descendantID) {
	  return (
	    descendantID.indexOf(ancestorID) === 0 &&
	    isBoundary(descendantID, ancestorID.length)
	  );
	}
	
	/**
	 * Gets the parent ID of the supplied React DOM ID, `id`.
	 *
	 * @param {string} id ID of a component.
	 * @return {string} ID of the parent, or an empty string.
	 * @private
	 */
	function getParentID(id) {
	  return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
	}
	
	/**
	 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
	 * supplied `destinationID`. If they are equal, the ID is returned.
	 *
	 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
	 * @param {string} destinationID ID of the destination node.
	 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
	 * @private
	 */
	function getNextDescendantID(ancestorID, destinationID) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    isValidID(ancestorID) && isValidID(destinationID),
	    'getNextDescendantID(%s, %s): Received an invalid React DOM ID.',
	    ancestorID,
	    destinationID
	  ) : invariant(isValidID(ancestorID) && isValidID(destinationID)));
	  ("production" !== process.env.NODE_ENV ? invariant(
	    isAncestorIDOf(ancestorID, destinationID),
	    'getNextDescendantID(...): React has made an invalid assumption about ' +
	    'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.',
	    ancestorID,
	    destinationID
	  ) : invariant(isAncestorIDOf(ancestorID, destinationID)));
	  if (ancestorID === destinationID) {
	    return ancestorID;
	  }
	  // Skip over the ancestor and the immediate separator. Traverse until we hit
	  // another separator or we reach the end of `destinationID`.
	  var start = ancestorID.length + SEPARATOR_LENGTH;
	  for (var i = start; i < destinationID.length; i++) {
	    if (isBoundary(destinationID, i)) {
	      break;
	    }
	  }
	  return destinationID.substr(0, i);
	}
	
	/**
	 * Gets the nearest common ancestor ID of two IDs.
	 *
	 * Using this ID scheme, the nearest common ancestor ID is the longest common
	 * prefix of the two IDs that immediately preceded a "marker" in both strings.
	 *
	 * @param {string} oneID
	 * @param {string} twoID
	 * @return {string} Nearest common ancestor ID, or the empty string if none.
	 * @private
	 */
	function getFirstCommonAncestorID(oneID, twoID) {
	  var minLength = Math.min(oneID.length, twoID.length);
	  if (minLength === 0) {
	    return '';
	  }
	  var lastCommonMarkerIndex = 0;
	  // Use `<=` to traverse until the "EOL" of the shorter string.
	  for (var i = 0; i <= minLength; i++) {
	    if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
	      lastCommonMarkerIndex = i;
	    } else if (oneID.charAt(i) !== twoID.charAt(i)) {
	      break;
	    }
	  }
	  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
	  ("production" !== process.env.NODE_ENV ? invariant(
	    isValidID(longestCommonID),
	    'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s',
	    oneID,
	    twoID,
	    longestCommonID
	  ) : invariant(isValidID(longestCommonID)));
	  return longestCommonID;
	}
	
	/**
	 * Traverses the parent path between two IDs (either up or down). The IDs must
	 * not be the same, and there must exist a parent path between them. If the
	 * callback returns `false`, traversal is stopped.
	 *
	 * @param {?string} start ID at which to start traversal.
	 * @param {?string} stop ID at which to end traversal.
	 * @param {function} cb Callback to invoke each ID with.
	 * @param {?boolean} skipFirst Whether or not to skip the first node.
	 * @param {?boolean} skipLast Whether or not to skip the last node.
	 * @private
	 */
	function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
	  start = start || '';
	  stop = stop || '';
	  ("production" !== process.env.NODE_ENV ? invariant(
	    start !== stop,
	    'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.',
	    start
	  ) : invariant(start !== stop));
	  var traverseUp = isAncestorIDOf(stop, start);
	  ("production" !== process.env.NODE_ENV ? invariant(
	    traverseUp || isAncestorIDOf(start, stop),
	    'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' +
	    'not have a parent path.',
	    start,
	    stop
	  ) : invariant(traverseUp || isAncestorIDOf(start, stop)));
	  // Traverse from `start` to `stop` one depth at a time.
	  var depth = 0;
	  var traverse = traverseUp ? getParentID : getNextDescendantID;
	  for (var id = start; /* until break */; id = traverse(id, stop)) {
	    var ret;
	    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
	      ret = cb(id, traverseUp, arg);
	    }
	    if (ret === false || id === stop) {
	      // Only break //after// visiting `stop`.
	      break;
	    }
	    ("production" !== process.env.NODE_ENV ? invariant(
	      depth++ < MAX_TREE_DEPTH,
	      'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' +
	      'traversing the React DOM ID tree. This may be due to malformed IDs: %s',
	      start, stop
	    ) : invariant(depth++ < MAX_TREE_DEPTH));
	  }
	}
	
	/**
	 * Manages the IDs assigned to DOM representations of React components. This
	 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
	 * order to simulate events).
	 *
	 * @internal
	 */
	var ReactInstanceHandles = {
	
	  /**
	   * Constructs a React root ID
	   * @return {string} A React root ID.
	   */
	  createReactRootID: function() {
	    return getReactRootIDString(ReactRootIndex.createReactRootIndex());
	  },
	
	  /**
	   * Constructs a React ID by joining a root ID with a name.
	   *
	   * @param {string} rootID Root ID of a parent component.
	   * @param {string} name A component's name (as flattened children).
	   * @return {string} A React ID.
	   * @internal
	   */
	  createReactID: function(rootID, name) {
	    return rootID + name;
	  },
	
	  /**
	   * Gets the DOM ID of the React component that is the root of the tree that
	   * contains the React component with the supplied DOM ID.
	   *
	   * @param {string} id DOM ID of a React component.
	   * @return {?string} DOM ID of the React component that is the root.
	   * @internal
	   */
	  getReactRootIDFromNodeID: function(id) {
	    if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
	      var index = id.indexOf(SEPARATOR, 1);
	      return index > -1 ? id.substr(0, index) : id;
	    }
	    return null;
	  },
	
	  /**
	   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	   * should would receive a `mouseEnter` or `mouseLeave` event.
	   *
	   * NOTE: Does not invoke the callback on the nearest common ancestor because
	   * nothing "entered" or "left" that element.
	   *
	   * @param {string} leaveID ID being left.
	   * @param {string} enterID ID being entered.
	   * @param {function} cb Callback to invoke on each entered/left ID.
	   * @param {*} upArg Argument to invoke the callback with on left IDs.
	   * @param {*} downArg Argument to invoke the callback with on entered IDs.
	   * @internal
	   */
	  traverseEnterLeave: function(leaveID, enterID, cb, upArg, downArg) {
	    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
	    if (ancestorID !== leaveID) {
	      traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
	    }
	    if (ancestorID !== enterID) {
	      traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
	    }
	  },
	
	  /**
	   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseTwoPhase: function(targetID, cb, arg) {
	    if (targetID) {
	      traverseParentPath('', targetID, cb, arg, true, false);
	      traverseParentPath(targetID, '', cb, arg, false, true);
	    }
	  },
	
	  /**
	   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
	   * example, passing `.0.$row-0.1` would result in `cb` getting called
	   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseAncestors: function(targetID, cb, arg) {
	    traverseParentPath('', targetID, cb, arg, true, false);
	  },
	
	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _getFirstCommonAncestorID: getFirstCommonAncestorID,
	
	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _getNextDescendantID: getNextDescendantID,
	
	  isAncestorIDOf: isAncestorIDOf,
	
	  SEPARATOR: SEPARATOR
	
	};
	
	module.exports = ReactInstanceHandles;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 43 */
/*!*******************************************!*\
  !*** ./~/react/lib/ReactLegacyElement.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactLegacyElement
	 */
	
	"use strict";
	
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 36);
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	var monitorCodeUse = __webpack_require__(/*! ./monitorCodeUse */ 84);
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	var legacyFactoryLogs = {};
	function warnForLegacyFactoryCall() {
	  if (!ReactLegacyElementFactory._isLegacyCallWarningEnabled) {
	    return;
	  }
	  var owner = ReactCurrentOwner.current;
	  var name = owner && owner.constructor ? owner.constructor.displayName : '';
	  if (!name) {
	    name = 'Something';
	  }
	  if (legacyFactoryLogs.hasOwnProperty(name)) {
	    return;
	  }
	  legacyFactoryLogs[name] = true;
	  ("production" !== process.env.NODE_ENV ? warning(
	    false,
	    name + ' is calling a React component directly. ' +
	    'Use a factory or JSX instead. See: http://fb.me/react-legacyfactory'
	  ) : null);
	  monitorCodeUse('react_legacy_factory_call', { version: 3, name: name });
	}
	
	function warnForPlainFunctionType(type) {
	  var isReactClass =
	    type.prototype &&
	    typeof type.prototype.mountComponent === 'function' &&
	    typeof type.prototype.receiveComponent === 'function';
	  if (isReactClass) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      false,
	      'Did not expect to get a React class here. Use `Component` instead ' +
	      'of `Component.type` or `this.constructor`.'
	    ) : null);
	  } else {
	    if (!type._reactWarnedForThisType) {
	      try {
	        type._reactWarnedForThisType = true;
	      } catch (x) {
	        // just incase this is a frozen object or some special object
	      }
	      monitorCodeUse(
	        'react_non_component_in_jsx',
	        { version: 3, name: type.name }
	      );
	    }
	    ("production" !== process.env.NODE_ENV ? warning(
	      false,
	      'This JSX uses a plain function. Only React components are ' +
	      'valid in React\'s JSX transform.'
	    ) : null);
	  }
	}
	
	function warnForNonLegacyFactory(type) {
	  ("production" !== process.env.NODE_ENV ? warning(
	    false,
	    'Do not pass React.DOM.' + type.type + ' to JSX or createFactory. ' +
	    'Use the string "' + type.type + '" instead.'
	  ) : null);
	}
	
	/**
	 * Transfer static properties from the source to the target. Functions are
	 * rebound to have this reflect the original source.
	 */
	function proxyStaticMethods(target, source) {
	  if (typeof source !== 'function') {
	    return;
	  }
	  for (var key in source) {
	    if (source.hasOwnProperty(key)) {
	      var value = source[key];
	      if (typeof value === 'function') {
	        var bound = value.bind(source);
	        // Copy any properties defined on the function, such as `isRequired` on
	        // a PropTypes validator.
	        for (var k in value) {
	          if (value.hasOwnProperty(k)) {
	            bound[k] = value[k];
	          }
	        }
	        target[key] = bound;
	      } else {
	        target[key] = value;
	      }
	    }
	  }
	}
	
	// We use an object instead of a boolean because booleans are ignored by our
	// mocking libraries when these factories gets mocked.
	var LEGACY_MARKER = {};
	var NON_LEGACY_MARKER = {};
	
	var ReactLegacyElementFactory = {};
	
	ReactLegacyElementFactory.wrapCreateFactory = function(createFactory) {
	  var legacyCreateFactory = function(type) {
	    if (typeof type !== 'function') {
	      // Non-function types cannot be legacy factories
	      return createFactory(type);
	    }
	
	    if (type.isReactNonLegacyFactory) {
	      // This is probably a factory created by ReactDOM we unwrap it to get to
	      // the underlying string type. It shouldn't have been passed here so we
	      // warn.
	      if ("production" !== process.env.NODE_ENV) {
	        warnForNonLegacyFactory(type);
	      }
	      return createFactory(type.type);
	    }
	
	    if (type.isReactLegacyFactory) {
	      // This is probably a legacy factory created by ReactCompositeComponent.
	      // We unwrap it to get to the underlying class.
	      return createFactory(type.type);
	    }
	
	    if ("production" !== process.env.NODE_ENV) {
	      warnForPlainFunctionType(type);
	    }
	
	    // Unless it's a legacy factory, then this is probably a plain function,
	    // that is expecting to be invoked by JSX. We can just return it as is.
	    return type;
	  };
	  return legacyCreateFactory;
	};
	
	ReactLegacyElementFactory.wrapCreateElement = function(createElement) {
	  var legacyCreateElement = function(type, props, children) {
	    if (typeof type !== 'function') {
	      // Non-function types cannot be legacy factories
	      return createElement.apply(this, arguments);
	    }
	
	    var args;
	
	    if (type.isReactNonLegacyFactory) {
	      // This is probably a factory created by ReactDOM we unwrap it to get to
	      // the underlying string type. It shouldn't have been passed here so we
	      // warn.
	      if ("production" !== process.env.NODE_ENV) {
	        warnForNonLegacyFactory(type);
	      }
	      args = Array.prototype.slice.call(arguments, 0);
	      args[0] = type.type;
	      return createElement.apply(this, args);
	    }
	
	    if (type.isReactLegacyFactory) {
	      // This is probably a legacy factory created by ReactCompositeComponent.
	      // We unwrap it to get to the underlying class.
	      if (type._isMockFunction) {
	        // If this is a mock function, people will expect it to be called. We
	        // will actually call the original mock factory function instead. This
	        // future proofs unit testing that assume that these are classes.
	        type.type._mockedReactClassConstructor = type;
	      }
	      args = Array.prototype.slice.call(arguments, 0);
	      args[0] = type.type;
	      return createElement.apply(this, args);
	    }
	
	    if ("production" !== process.env.NODE_ENV) {
	      warnForPlainFunctionType(type);
	    }
	
	    // This is being called with a plain function we should invoke it
	    // immediately as if this was used with legacy JSX.
	    return type.apply(null, Array.prototype.slice.call(arguments, 1));
	  };
	  return legacyCreateElement;
	};
	
	ReactLegacyElementFactory.wrapFactory = function(factory) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    typeof factory === 'function',
	    'This is suppose to accept a element factory'
	  ) : invariant(typeof factory === 'function'));
	  var legacyElementFactory = function(config, children) {
	    // This factory should not be called when JSX is used. Use JSX instead.
	    if ("production" !== process.env.NODE_ENV) {
	      warnForLegacyFactoryCall();
	    }
	    return factory.apply(this, arguments);
	  };
	  proxyStaticMethods(legacyElementFactory, factory.type);
	  legacyElementFactory.isReactLegacyFactory = LEGACY_MARKER;
	  legacyElementFactory.type = factory.type;
	  return legacyElementFactory;
	};
	
	// This is used to mark a factory that will remain. E.g. we're allowed to call
	// it as a function. However, you're not suppose to pass it to createElement
	// or createFactory, so it will warn you if you do.
	ReactLegacyElementFactory.markNonLegacyFactory = function(factory) {
	  factory.isReactNonLegacyFactory = NON_LEGACY_MARKER;
	  return factory;
	};
	
	// Checks if a factory function is actually a legacy factory pretending to
	// be a class.
	ReactLegacyElementFactory.isValidFactory = function(factory) {
	  // TODO: This will be removed and moved into a class validator or something.
	  return typeof factory === 'function' &&
	    factory.isReactLegacyFactory === LEGACY_MARKER;
	};
	
	ReactLegacyElementFactory.isValidClass = function(factory) {
	  if ("production" !== process.env.NODE_ENV) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      false,
	      'isValidClass is deprecated and will be removed in a future release. ' +
	      'Use a more specific validator instead.'
	    ) : null);
	  }
	  return ReactLegacyElementFactory.isValidFactory(factory);
	};
	
	ReactLegacyElementFactory._isLegacyCallWarningEnabled = true;
	
	module.exports = ReactLegacyElementFactory;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 44 */
/*!***********************************!*\
  !*** ./~/react/lib/ReactMount.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMount
	 */
	
	"use strict";
	
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 68);
	var ReactBrowserEventEmitter = __webpack_require__(/*! ./ReactBrowserEventEmitter */ 89);
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 36);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactLegacyElement = __webpack_require__(/*! ./ReactLegacyElement */ 43);
	var ReactInstanceHandles = __webpack_require__(/*! ./ReactInstanceHandles */ 42);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 46);
	
	var containsNode = __webpack_require__(/*! ./containsNode */ 119);
	var deprecated = __webpack_require__(/*! ./deprecated */ 51);
	var getReactRootElementInContainer = __webpack_require__(/*! ./getReactRootElementInContainer */ 120);
	var instantiateReactComponent = __webpack_require__(/*! ./instantiateReactComponent */ 82);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	var shouldUpdateReactComponent = __webpack_require__(/*! ./shouldUpdateReactComponent */ 86);
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	var createElement = ReactLegacyElement.wrapCreateElement(
	  ReactElement.createElement
	);
	
	var SEPARATOR = ReactInstanceHandles.SEPARATOR;
	
	var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
	var nodeCache = {};
	
	var ELEMENT_NODE_TYPE = 1;
	var DOC_NODE_TYPE = 9;
	
	/** Mapping from reactRootID to React component instance. */
	var instancesByReactRootID = {};
	
	/** Mapping from reactRootID to `container` nodes. */
	var containersByReactRootID = {};
	
	if ("production" !== process.env.NODE_ENV) {
	  /** __DEV__-only mapping from reactRootID to root elements. */
	  var rootElementsByReactRootID = {};
	}
	
	// Used to store breadth-first search state in findComponentRoot.
	var findComponentRootReusableArray = [];
	
	/**
	 * @param {DOMElement} container DOM element that may contain a React component.
	 * @return {?string} A "reactRoot" ID, if a React component is rendered.
	 */
	function getReactRootID(container) {
	  var rootElement = getReactRootElementInContainer(container);
	  return rootElement && ReactMount.getID(rootElement);
	}
	
	/**
	 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
	 * element can return its control whose name or ID equals ATTR_NAME. All
	 * DOM nodes support `getAttributeNode` but this can also get called on
	 * other objects so just return '' if we're given something other than a
	 * DOM node (such as window).
	 *
	 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
	 * @return {string} ID of the supplied `domNode`.
	 */
	function getID(node) {
	  var id = internalGetID(node);
	  if (id) {
	    if (nodeCache.hasOwnProperty(id)) {
	      var cached = nodeCache[id];
	      if (cached !== node) {
	        ("production" !== process.env.NODE_ENV ? invariant(
	          !isValid(cached, id),
	          'ReactMount: Two valid but unequal nodes with the same `%s`: %s',
	          ATTR_NAME, id
	        ) : invariant(!isValid(cached, id)));
	
	        nodeCache[id] = node;
	      }
	    } else {
	      nodeCache[id] = node;
	    }
	  }
	
	  return id;
	}
	
	function internalGetID(node) {
	  // If node is something like a window, document, or text node, none of
	  // which support attributes or a .getAttribute method, gracefully return
	  // the empty string, as if the attribute were missing.
	  return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
	}
	
	/**
	 * Sets the React-specific ID of the given node.
	 *
	 * @param {DOMElement} node The DOM node whose ID will be set.
	 * @param {string} id The value of the ID attribute.
	 */
	function setID(node, id) {
	  var oldID = internalGetID(node);
	  if (oldID !== id) {
	    delete nodeCache[oldID];
	  }
	  node.setAttribute(ATTR_NAME, id);
	  nodeCache[id] = node;
	}
	
	/**
	 * Finds the node with the supplied React-generated DOM ID.
	 *
	 * @param {string} id A React-generated DOM ID.
	 * @return {DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNode(id) {
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}
	
	/**
	 * A node is "valid" if it is contained by a currently mounted container.
	 *
	 * This means that the node does not have to be contained by a document in
	 * order to be considered valid.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @param {string} id The expected ID of the node.
	 * @return {boolean} Whether the node is contained by a mounted container.
	 */
	function isValid(node, id) {
	  if (node) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      internalGetID(node) === id,
	      'ReactMount: Unexpected modification of `%s`',
	      ATTR_NAME
	    ) : invariant(internalGetID(node) === id));
	
	    var container = ReactMount.findReactContainerForID(id);
	    if (container && containsNode(container, node)) {
	      return true;
	    }
	  }
	
	  return false;
	}
	
	/**
	 * Causes the cache to forget about one React-specific ID.
	 *
	 * @param {string} id The ID to forget.
	 */
	function purgeID(id) {
	  delete nodeCache[id];
	}
	
	var deepestNodeSoFar = null;
	function findDeepestCachedAncestorImpl(ancestorID) {
	  var ancestor = nodeCache[ancestorID];
	  if (ancestor && isValid(ancestor, ancestorID)) {
	    deepestNodeSoFar = ancestor;
	  } else {
	    // This node isn't populated in the cache, so presumably none of its
	    // descendants are. Break out of the loop.
	    return false;
	  }
	}
	
	/**
	 * Return the deepest cached node whose ID is a prefix of `targetID`.
	 */
	function findDeepestCachedAncestor(targetID) {
	  deepestNodeSoFar = null;
	  ReactInstanceHandles.traverseAncestors(
	    targetID,
	    findDeepestCachedAncestorImpl
	  );
	
	  var foundNode = deepestNodeSoFar;
	  deepestNodeSoFar = null;
	  return foundNode;
	}
	
	/**
	 * Mounting is the process of initializing a React component by creatings its
	 * representative DOM elements and inserting them into a supplied `container`.
	 * Any prior content inside `container` is destroyed in the process.
	 *
	 *   ReactMount.render(
	 *     component,
	 *     document.getElementById('container')
	 *   );
	 *
	 *   <div id="container">                   <-- Supplied `container`.
	 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
	 *       // ...                                 component.
	 *     </div>
	 *   </div>
	 *
	 * Inside of `container`, the first element rendered is the "reactRoot".
	 */
	var ReactMount = {
	  /** Exposed for debugging purposes **/
	  _instancesByReactRootID: instancesByReactRootID,
	
	  /**
	   * This is a hook provided to support rendering React components while
	   * ensuring that the apparent scroll position of its `container` does not
	   * change.
	   *
	   * @param {DOMElement} container The `container` being rendered into.
	   * @param {function} renderCallback This must be called once to do the render.
	   */
	  scrollMonitor: function(container, renderCallback) {
	    renderCallback();
	  },
	
	  /**
	   * Take a component that's already mounted into the DOM and replace its props
	   * @param {ReactComponent} prevComponent component instance already in the DOM
	   * @param {ReactComponent} nextComponent component instance to render
	   * @param {DOMElement} container container to render into
	   * @param {?function} callback function triggered on completion
	   */
	  _updateRootComponent: function(
	      prevComponent,
	      nextComponent,
	      container,
	      callback) {
	    var nextProps = nextComponent.props;
	    ReactMount.scrollMonitor(container, function() {
	      prevComponent.replaceProps(nextProps, callback);
	    });
	
	    if ("production" !== process.env.NODE_ENV) {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[getReactRootID(container)] =
	        getReactRootElementInContainer(container);
	    }
	
	    return prevComponent;
	  },
	
	  /**
	   * Register a component into the instance map and starts scroll value
	   * monitoring
	   * @param {ReactComponent} nextComponent component instance to render
	   * @param {DOMElement} container container to render into
	   * @return {string} reactRoot ID prefix
	   */
	  _registerComponent: function(nextComponent, container) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      container && (
	        container.nodeType === ELEMENT_NODE_TYPE ||
	        container.nodeType === DOC_NODE_TYPE
	      ),
	      '_registerComponent(...): Target container is not a DOM element.'
	    ) : invariant(container && (
	      container.nodeType === ELEMENT_NODE_TYPE ||
	      container.nodeType === DOC_NODE_TYPE
	    )));
	
	    ReactBrowserEventEmitter.ensureScrollValueMonitoring();
	
	    var reactRootID = ReactMount.registerContainer(container);
	    instancesByReactRootID[reactRootID] = nextComponent;
	    return reactRootID;
	  },
	
	  /**
	   * Render a new component into the DOM.
	   * @param {ReactComponent} nextComponent component instance to render
	   * @param {DOMElement} container container to render into
	   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
	   * @return {ReactComponent} nextComponent
	   */
	  _renderNewRootComponent: ReactPerf.measure(
	    'ReactMount',
	    '_renderNewRootComponent',
	    function(
	        nextComponent,
	        container,
	        shouldReuseMarkup) {
	      // Various parts of our code (such as ReactCompositeComponent's
	      // _renderValidatedComponent) assume that calls to render aren't nested;
	      // verify that that's the case.
	      ("production" !== process.env.NODE_ENV ? warning(
	        ReactCurrentOwner.current == null,
	        '_renderNewRootComponent(): Render methods should be a pure function ' +
	        'of props and state; triggering nested component updates from ' +
	        'render is not allowed. If necessary, trigger nested updates in ' +
	        'componentDidUpdate.'
	      ) : null);
	
	      var componentInstance = instantiateReactComponent(nextComponent, null);
	      var reactRootID = ReactMount._registerComponent(
	        componentInstance,
	        container
	      );
	      componentInstance.mountComponentIntoNode(
	        reactRootID,
	        container,
	        shouldReuseMarkup
	      );
	
	      if ("production" !== process.env.NODE_ENV) {
	        // Record the root element in case it later gets transplanted.
	        rootElementsByReactRootID[reactRootID] =
	          getReactRootElementInContainer(container);
	      }
	
	      return componentInstance;
	    }
	  ),
	
	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  render: function(nextElement, container, callback) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      ReactElement.isValidElement(nextElement),
	      'renderComponent(): Invalid component element.%s',
	      (
	        typeof nextElement === 'string' ?
	          ' Instead of passing an element string, make sure to instantiate ' +
	          'it by passing it to React.createElement.' :
	        ReactLegacyElement.isValidFactory(nextElement) ?
	          ' Instead of passing a component class, make sure to instantiate ' +
	          'it by passing it to React.createElement.' :
	        // Check if it quacks like a element
	        typeof nextElement.props !== "undefined" ?
	          ' This may be caused by unintentionally loading two independent ' +
	          'copies of React.' :
	          ''
	      )
	    ) : invariant(ReactElement.isValidElement(nextElement)));
	
	    var prevComponent = instancesByReactRootID[getReactRootID(container)];
	
	    if (prevComponent) {
	      var prevElement = prevComponent._currentElement;
	      if (shouldUpdateReactComponent(prevElement, nextElement)) {
	        return ReactMount._updateRootComponent(
	          prevComponent,
	          nextElement,
	          container,
	          callback
	        );
	      } else {
	        ReactMount.unmountComponentAtNode(container);
	      }
	    }
	
	    var reactRootElement = getReactRootElementInContainer(container);
	    var containerHasReactMarkup =
	      reactRootElement && ReactMount.isRenderedByReact(reactRootElement);
	
	    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent;
	
	    var component = ReactMount._renderNewRootComponent(
	      nextElement,
	      container,
	      shouldReuseMarkup
	    );
	    callback && callback.call(component);
	    return component;
	  },
	
	  /**
	   * Constructs a component instance of `constructor` with `initialProps` and
	   * renders it into the supplied `container`.
	   *
	   * @param {function} constructor React component constructor.
	   * @param {?object} props Initial props of the component instance.
	   * @param {DOMElement} container DOM element to render into.
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  constructAndRenderComponent: function(constructor, props, container) {
	    var element = createElement(constructor, props);
	    return ReactMount.render(element, container);
	  },
	
	  /**
	   * Constructs a component instance of `constructor` with `initialProps` and
	   * renders it into a container node identified by supplied `id`.
	   *
	   * @param {function} componentConstructor React component constructor
	   * @param {?object} props Initial props of the component instance.
	   * @param {string} id ID of the DOM element to render into.
	   * @return {ReactComponent} Component instance rendered in the container node.
	   */
	  constructAndRenderComponentByID: function(constructor, props, id) {
	    var domNode = document.getElementById(id);
	    ("production" !== process.env.NODE_ENV ? invariant(
	      domNode,
	      'Tried to get element with id of "%s" but it is not present on the page.',
	      id
	    ) : invariant(domNode));
	    return ReactMount.constructAndRenderComponent(constructor, props, domNode);
	  },
	
	  /**
	   * Registers a container node into which React components will be rendered.
	   * This also creates the "reactRoot" ID that will be assigned to the element
	   * rendered within.
	   *
	   * @param {DOMElement} container DOM element to register as a container.
	   * @return {string} The "reactRoot" ID of elements rendered within.
	   */
	  registerContainer: function(container) {
	    var reactRootID = getReactRootID(container);
	    if (reactRootID) {
	      // If one exists, make sure it is a valid "reactRoot" ID.
	      reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
	    }
	    if (!reactRootID) {
	      // No valid "reactRoot" ID found, create one.
	      reactRootID = ReactInstanceHandles.createReactRootID();
	    }
	    containersByReactRootID[reactRootID] = container;
	    return reactRootID;
	  },
	
	  /**
	   * Unmounts and destroys the React component rendered in the `container`.
	   *
	   * @param {DOMElement} container DOM element containing a React component.
	   * @return {boolean} True if a component was found in and unmounted from
	   *                   `container`
	   */
	  unmountComponentAtNode: function(container) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case. (Strictly speaking, unmounting won't cause a
	    // render but we still don't expect to be in a render call here.)
	    ("production" !== process.env.NODE_ENV ? warning(
	      ReactCurrentOwner.current == null,
	      'unmountComponentAtNode(): Render methods should be a pure function of ' +
	      'props and state; triggering nested component updates from render is ' +
	      'not allowed. If necessary, trigger nested updates in ' +
	      'componentDidUpdate.'
	    ) : null);
	
	    var reactRootID = getReactRootID(container);
	    var component = instancesByReactRootID[reactRootID];
	    if (!component) {
	      return false;
	    }
	    ReactMount.unmountComponentFromNode(component, container);
	    delete instancesByReactRootID[reactRootID];
	    delete containersByReactRootID[reactRootID];
	    if ("production" !== process.env.NODE_ENV) {
	      delete rootElementsByReactRootID[reactRootID];
	    }
	    return true;
	  },
	
	  /**
	   * Unmounts a component and removes it from the DOM.
	   *
	   * @param {ReactComponent} instance React component instance.
	   * @param {DOMElement} container DOM element to unmount from.
	   * @final
	   * @internal
	   * @see {ReactMount.unmountComponentAtNode}
	   */
	  unmountComponentFromNode: function(instance, container) {
	    instance.unmountComponent();
	
	    if (container.nodeType === DOC_NODE_TYPE) {
	      container = container.documentElement;
	    }
	
	    // http://jsperf.com/emptying-a-node
	    while (container.lastChild) {
	      container.removeChild(container.lastChild);
	    }
	  },
	
	  /**
	   * Finds the container DOM element that contains React component to which the
	   * supplied DOM `id` belongs.
	   *
	   * @param {string} id The ID of an element rendered by a React component.
	   * @return {?DOMElement} DOM element that contains the `id`.
	   */
	  findReactContainerForID: function(id) {
	    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
	    var container = containersByReactRootID[reactRootID];
	
	    if ("production" !== process.env.NODE_ENV) {
	      var rootElement = rootElementsByReactRootID[reactRootID];
	      if (rootElement && rootElement.parentNode !== container) {
	        ("production" !== process.env.NODE_ENV ? invariant(
	          // Call internalGetID here because getID calls isValid which calls
	          // findReactContainerForID (this function).
	          internalGetID(rootElement) === reactRootID,
	          'ReactMount: Root element ID differed from reactRootID.'
	        ) : invariant(// Call internalGetID here because getID calls isValid which calls
	        // findReactContainerForID (this function).
	        internalGetID(rootElement) === reactRootID));
	
	        var containerChild = container.firstChild;
	        if (containerChild &&
	            reactRootID === internalGetID(containerChild)) {
	          // If the container has a new child with the same ID as the old
	          // root element, then rootElementsByReactRootID[reactRootID] is
	          // just stale and needs to be updated. The case that deserves a
	          // warning is when the container is empty.
	          rootElementsByReactRootID[reactRootID] = containerChild;
	        } else {
	          console.warn(
	            'ReactMount: Root element has been removed from its original ' +
	            'container. New container:', rootElement.parentNode
	          );
	        }
	      }
	    }
	
	    return container;
	  },
	
	  /**
	   * Finds an element rendered by React with the supplied ID.
	   *
	   * @param {string} id ID of a DOM node in the React component.
	   * @return {DOMElement} Root DOM node of the React component.
	   */
	  findReactNodeByID: function(id) {
	    var reactRoot = ReactMount.findReactContainerForID(id);
	    return ReactMount.findComponentRoot(reactRoot, id);
	  },
	
	  /**
	   * True if the supplied `node` is rendered by React.
	   *
	   * @param {*} node DOM Element to check.
	   * @return {boolean} True if the DOM Element appears to be rendered by React.
	   * @internal
	   */
	  isRenderedByReact: function(node) {
	    if (node.nodeType !== 1) {
	      // Not a DOMElement, therefore not a React component
	      return false;
	    }
	    var id = ReactMount.getID(node);
	    return id ? id.charAt(0) === SEPARATOR : false;
	  },
	
	  /**
	   * Traverses up the ancestors of the supplied node to find a node that is a
	   * DOM representation of a React component.
	   *
	   * @param {*} node
	   * @return {?DOMEventTarget}
	   * @internal
	   */
	  getFirstReactDOM: function(node) {
	    var current = node;
	    while (current && current.parentNode !== current) {
	      if (ReactMount.isRenderedByReact(current)) {
	        return current;
	      }
	      current = current.parentNode;
	    }
	    return null;
	  },
	
	  /**
	   * Finds a node with the supplied `targetID` inside of the supplied
	   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
	   * quickly.
	   *
	   * @param {DOMEventTarget} ancestorNode Search from this root.
	   * @pararm {string} targetID ID of the DOM representation of the component.
	   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
	   * @internal
	   */
	  findComponentRoot: function(ancestorNode, targetID) {
	    var firstChildren = findComponentRootReusableArray;
	    var childIndex = 0;
	
	    var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;
	
	    firstChildren[0] = deepestAncestor.firstChild;
	    firstChildren.length = 1;
	
	    while (childIndex < firstChildren.length) {
	      var child = firstChildren[childIndex++];
	      var targetChild;
	
	      while (child) {
	        var childID = ReactMount.getID(child);
	        if (childID) {
	          // Even if we find the node we're looking for, we finish looping
	          // through its siblings to ensure they're cached so that we don't have
	          // to revisit this node again. Otherwise, we make n^2 calls to getID
	          // when visiting the many children of a single node in order.
	
	          if (targetID === childID) {
	            targetChild = child;
	          } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
	            // If we find a child whose ID is an ancestor of the given ID,
	            // then we can be sure that we only want to search the subtree
	            // rooted at this child, so we can throw out the rest of the
	            // search state.
	            firstChildren.length = childIndex = 0;
	            firstChildren.push(child.firstChild);
	          }
	
	        } else {
	          // If this child had no ID, then there's a chance that it was
	          // injected automatically by the browser, as when a `<table>`
	          // element sprouts an extra `<tbody>` child as a side effect of
	          // `.innerHTML` parsing. Optimistically continue down this
	          // branch, but not before examining the other siblings.
	          firstChildren.push(child.firstChild);
	        }
	
	        child = child.nextSibling;
	      }
	
	      if (targetChild) {
	        // Emptying firstChildren/findComponentRootReusableArray is
	        // not necessary for correctness, but it helps the GC reclaim
	        // any nodes that were left at the end of the search.
	        firstChildren.length = 0;
	
	        return targetChild;
	      }
	    }
	
	    firstChildren.length = 0;
	
	    ("production" !== process.env.NODE_ENV ? invariant(
	      false,
	      'findComponentRoot(..., %s): Unable to find element. This probably ' +
	      'means the DOM was unexpectedly mutated (e.g., by the browser), ' +
	      'usually due to forgetting a <tbody> when using tables, nesting tags ' +
	      'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' +
	      'parent. ' +
	      'Try inspecting the child nodes of the element with React ID `%s`.',
	      targetID,
	      ReactMount.getID(ancestorNode)
	    ) : invariant(false));
	  },
	
	
	  /**
	   * React ID utilities.
	   */
	
	  getReactRootID: getReactRootID,
	
	  getID: getID,
	
	  setID: setID,
	
	  getNode: getNode,
	
	  purgeID: purgeID
	};
	
	// Deprecations (remove for 0.13)
	ReactMount.renderComponent = deprecated(
	  'ReactMount',
	  'renderComponent',
	  'render',
	  this,
	  ReactMount.render
	);
	
	module.exports = ReactMount;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 45 */
/*!****************************************!*\
  !*** ./~/react/lib/ReactMultiChild.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChild
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var ReactComponent = __webpack_require__(/*! ./ReactComponent */ 33);
	var ReactMultiChildUpdateTypes = __webpack_require__(/*! ./ReactMultiChildUpdateTypes */ 117);
	
	var flattenChildren = __webpack_require__(/*! ./flattenChildren */ 118);
	var instantiateReactComponent = __webpack_require__(/*! ./instantiateReactComponent */ 82);
	var shouldUpdateReactComponent = __webpack_require__(/*! ./shouldUpdateReactComponent */ 86);
	
	/**
	 * Updating children of a component may trigger recursive updates. The depth is
	 * used to batch recursive updates to render markup more efficiently.
	 *
	 * @type {number}
	 * @private
	 */
	var updateDepth = 0;
	
	/**
	 * Queue of update configuration objects.
	 *
	 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
	 *
	 * @type {array<object>}
	 * @private
	 */
	var updateQueue = [];
	
	/**
	 * Queue of markup to be rendered.
	 *
	 * @type {array<string>}
	 * @private
	 */
	var markupQueue = [];
	
	/**
	 * Enqueues markup to be rendered and inserted at a supplied index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} markup Markup that renders into an element.
	 * @param {number} toIndex Destination index.
	 * @private
	 */
	function enqueueMarkup(parentID, markup, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
	    markupIndex: markupQueue.push(markup) - 1,
	    textContent: null,
	    fromIndex: null,
	    toIndex: toIndex
	  });
	}
	
	/**
	 * Enqueues moving an existing element to another index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Source index of the existing element.
	 * @param {number} toIndex Destination index of the element.
	 * @private
	 */
	function enqueueMove(parentID, fromIndex, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
	    markupIndex: null,
	    textContent: null,
	    fromIndex: fromIndex,
	    toIndex: toIndex
	  });
	}
	
	/**
	 * Enqueues removing an element at an index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Index of the element to remove.
	 * @private
	 */
	function enqueueRemove(parentID, fromIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
	    markupIndex: null,
	    textContent: null,
	    fromIndex: fromIndex,
	    toIndex: null
	  });
	}
	
	/**
	 * Enqueues setting the text content.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} textContent Text content to set.
	 * @private
	 */
	function enqueueTextContent(parentID, textContent) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
	    markupIndex: null,
	    textContent: textContent,
	    fromIndex: null,
	    toIndex: null
	  });
	}
	
	/**
	 * Processes any enqueued updates.
	 *
	 * @private
	 */
	function processQueue() {
	  if (updateQueue.length) {
	    ReactComponent.BackendIDOperations.dangerouslyProcessChildrenUpdates(
	      updateQueue,
	      markupQueue
	    );
	    clearQueue();
	  }
	}
	
	/**
	 * Clears any enqueued updates.
	 *
	 * @private
	 */
	function clearQueue() {
	  updateQueue.length = 0;
	  markupQueue.length = 0;
	}
	
	/**
	 * ReactMultiChild are capable of reconciling multiple children.
	 *
	 * @class ReactMultiChild
	 * @internal
	 */
	var ReactMultiChild = {
	
	  /**
	   * Provides common functionality for components that must reconcile multiple
	   * children. This is used by `ReactDOMComponent` to mount, update, and
	   * unmount child components.
	   *
	   * @lends {ReactMultiChild.prototype}
	   */
	  Mixin: {
	
	    /**
	     * Generates a "mount image" for each of the supplied children. In the case
	     * of `ReactDOMComponent`, a mount image is a string of markup.
	     *
	     * @param {?object} nestedChildren Nested child maps.
	     * @return {array} An array of mounted representations.
	     * @internal
	     */
	    mountChildren: function(nestedChildren, transaction) {
	      var children = flattenChildren(nestedChildren);
	      var mountImages = [];
	      var index = 0;
	      this._renderedChildren = children;
	      for (var name in children) {
	        var child = children[name];
	        if (children.hasOwnProperty(name)) {
	          // The rendered children must be turned into instances as they're
	          // mounted.
	          var childInstance = instantiateReactComponent(child, null);
	          children[name] = childInstance;
	          // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	          var rootID = this._rootNodeID + name;
	          var mountImage = childInstance.mountComponent(
	            rootID,
	            transaction,
	            this._mountDepth + 1
	          );
	          childInstance._mountIndex = index;
	          mountImages.push(mountImage);
	          index++;
	        }
	      }
	      return mountImages;
	    },
	
	    /**
	     * Replaces any rendered children with a text content string.
	     *
	     * @param {string} nextContent String of content.
	     * @internal
	     */
	    updateTextContent: function(nextContent) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        var prevChildren = this._renderedChildren;
	        // Remove any rendered children.
	        for (var name in prevChildren) {
	          if (prevChildren.hasOwnProperty(name)) {
	            this._unmountChildByName(prevChildren[name], name);
	          }
	        }
	        // Set new text content.
	        this.setTextContent(nextContent);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          errorThrown ? clearQueue() : processQueue();
	        }
	      }
	    },
	
	    /**
	     * Updates the rendered children with new children.
	     *
	     * @param {?object} nextNestedChildren Nested child maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
	    updateChildren: function(nextNestedChildren, transaction) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        this._updateChildren(nextNestedChildren, transaction);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          errorThrown ? clearQueue() : processQueue();
	        }
	      }
	    },
	
	    /**
	     * Improve performance by isolating this hot code path from the try/catch
	     * block in `updateChildren`.
	     *
	     * @param {?object} nextNestedChildren Nested child maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @final
	     * @protected
	     */
	    _updateChildren: function(nextNestedChildren, transaction) {
	      var nextChildren = flattenChildren(nextNestedChildren);
	      var prevChildren = this._renderedChildren;
	      if (!nextChildren && !prevChildren) {
	        return;
	      }
	      var name;
	      // `nextIndex` will increment for each child in `nextChildren`, but
	      // `lastIndex` will be the last index visited in `prevChildren`.
	      var lastIndex = 0;
	      var nextIndex = 0;
	      for (name in nextChildren) {
	        if (!nextChildren.hasOwnProperty(name)) {
	          continue;
	        }
	        var prevChild = prevChildren && prevChildren[name];
	        var prevElement = prevChild && prevChild._currentElement;
	        var nextElement = nextChildren[name];
	        if (shouldUpdateReactComponent(prevElement, nextElement)) {
	          this.moveChild(prevChild, nextIndex, lastIndex);
	          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	          prevChild.receiveComponent(nextElement, transaction);
	          prevChild._mountIndex = nextIndex;
	        } else {
	          if (prevChild) {
	            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
	            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	            this._unmountChildByName(prevChild, name);
	          }
	          // The child must be instantiated before it's mounted.
	          var nextChildInstance = instantiateReactComponent(
	            nextElement,
	            null
	          );
	          this._mountChildByNameAtIndex(
	            nextChildInstance, name, nextIndex, transaction
	          );
	        }
	        nextIndex++;
	      }
	      // Remove children that are no longer present.
	      for (name in prevChildren) {
	        if (prevChildren.hasOwnProperty(name) &&
	            !(nextChildren && nextChildren[name])) {
	          this._unmountChildByName(prevChildren[name], name);
	        }
	      }
	    },
	
	    /**
	     * Unmounts all rendered children. This should be used to clean up children
	     * when this component is unmounted.
	     *
	     * @internal
	     */
	    unmountChildren: function() {
	      var renderedChildren = this._renderedChildren;
	      for (var name in renderedChildren) {
	        var renderedChild = renderedChildren[name];
	        // TODO: When is this not true?
	        if (renderedChild.unmountComponent) {
	          renderedChild.unmountComponent();
	        }
	      }
	      this._renderedChildren = null;
	    },
	
	    /**
	     * Moves a child component to the supplied index.
	     *
	     * @param {ReactComponent} child Component to move.
	     * @param {number} toIndex Destination index of the element.
	     * @param {number} lastIndex Last index visited of the siblings of `child`.
	     * @protected
	     */
	    moveChild: function(child, toIndex, lastIndex) {
	      // If the index of `child` is less than `lastIndex`, then it needs to
	      // be moved. Otherwise, we do not need to move it because a child will be
	      // inserted or moved before `child`.
	      if (child._mountIndex < lastIndex) {
	        enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
	      }
	    },
	
	    /**
	     * Creates a child component.
	     *
	     * @param {ReactComponent} child Component to create.
	     * @param {string} mountImage Markup to insert.
	     * @protected
	     */
	    createChild: function(child, mountImage) {
	      enqueueMarkup(this._rootNodeID, mountImage, child._mountIndex);
	    },
	
	    /**
	     * Removes a child component.
	     *
	     * @param {ReactComponent} child Child to remove.
	     * @protected
	     */
	    removeChild: function(child) {
	      enqueueRemove(this._rootNodeID, child._mountIndex);
	    },
	
	    /**
	     * Sets this text content string.
	     *
	     * @param {string} textContent Text content to set.
	     * @protected
	     */
	    setTextContent: function(textContent) {
	      enqueueTextContent(this._rootNodeID, textContent);
	    },
	
	    /**
	     * Mounts a child with the supplied name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to mount.
	     * @param {string} name Name of the child.
	     * @param {number} index Index at which to insert the child.
	     * @param {ReactReconcileTransaction} transaction
	     * @private
	     */
	    _mountChildByNameAtIndex: function(child, name, index, transaction) {
	      // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	      var rootID = this._rootNodeID + name;
	      var mountImage = child.mountComponent(
	        rootID,
	        transaction,
	        this._mountDepth + 1
	      );
	      child._mountIndex = index;
	      this.createChild(child, mountImage);
	      this._renderedChildren = this._renderedChildren || {};
	      this._renderedChildren[name] = child;
	    },
	
	    /**
	     * Unmounts a rendered child by name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to unmount.
	     * @param {string} name Name of the child in `this._renderedChildren`.
	     * @private
	     */
	    _unmountChildByName: function(child, name) {
	      this.removeChild(child);
	      child._mountIndex = null;
	      child.unmountComponent();
	      delete this._renderedChildren[name];
	    }
	
	  }
	
	};
	
	module.exports = ReactMultiChild;


/***/ },
/* 46 */
/*!**********************************!*\
  !*** ./~/react/lib/ReactPerf.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPerf
	 * @typechecks static-only
	 */
	
	"use strict";
	
	/**
	 * ReactPerf is a general AOP system designed to measure performance. This
	 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
	 */
	var ReactPerf = {
	  /**
	   * Boolean to enable/disable measurement. Set to false by default to prevent
	   * accidental logging and perf loss.
	   */
	  enableMeasure: false,
	
	  /**
	   * Holds onto the measure function in use. By default, don't measure
	   * anything, but we'll override this if we inject a measure function.
	   */
	  storedMeasure: _noMeasure,
	
	  /**
	   * Use this to wrap methods you want to measure. Zero overhead in production.
	   *
	   * @param {string} objName
	   * @param {string} fnName
	   * @param {function} func
	   * @return {function}
	   */
	  measure: function(objName, fnName, func) {
	    if ("production" !== process.env.NODE_ENV) {
	      var measuredFunc = null;
	      var wrapper = function() {
	        if (ReactPerf.enableMeasure) {
	          if (!measuredFunc) {
	            measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
	          }
	          return measuredFunc.apply(this, arguments);
	        }
	        return func.apply(this, arguments);
	      };
	      wrapper.displayName = objName + '_' + fnName;
	      return wrapper;
	    }
	    return func;
	  },
	
	  injection: {
	    /**
	     * @param {function} measure
	     */
	    injectMeasure: function(measure) {
	      ReactPerf.storedMeasure = measure;
	    }
	  }
	};
	
	/**
	 * Simply passes through the measured function, without measuring it.
	 *
	 * @param {string} objName
	 * @param {string} fnName
	 * @param {function} func
	 * @return {function}
	 */
	function _noMeasure(objName, fnName, func) {
	  return func;
	}
	
	module.exports = ReactPerf;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 47 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactPropTypes.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */
	
	"use strict";
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactPropTypeLocationNames = __webpack_require__(/*! ./ReactPropTypeLocationNames */ 81);
	
	var deprecated = __webpack_require__(/*! ./deprecated */ 51);
	var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 121);
	
	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */
	
	var ANONYMOUS = '<<anonymous>>';
	
	var elementTypeChecker = createElementTypeChecker();
	var nodeTypeChecker = createNodeChecker();
	
	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	
	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: elementTypeChecker,
	  instanceOf: createInstanceTypeChecker,
	  node: nodeTypeChecker,
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker,
	
	  component: deprecated(
	    'React.PropTypes',
	    'component',
	    'element',
	    this,
	    elementTypeChecker
	  ),
	  renderable: deprecated(
	    'React.PropTypes',
	    'renderable',
	    'node',
	    this,
	    nodeTypeChecker
	  )
	};
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location) {
	    componentName = componentName || ANONYMOUS;
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new Error(
	          ("Required " + locationName + " `" + propName + "` was not specified in ")+
	          ("`" + componentName + "`.")
	        );
	      }
	    } else {
	      return validate(props, propName, componentName, location);
	    }
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}
	
	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);
	
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type `" + preciseType + "` ") +
	        ("supplied to `" + componentName + "`, expected `" + expectedType + "`.")
	      );
	    }
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns());
	}
	
	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type ") +
	        ("`" + propType + "` supplied to `" + componentName + "`, expected an array.")
	      );
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location) {
	    if (!ReactElement.isValidElement(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	        ("`" + componentName + "`, expected a ReactElement.")
	      );
	    }
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	        ("`" + componentName + "`, expected instance of `" + expectedClassName + "`.")
	      );
	    }
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createEnumTypeChecker(expectedValues) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (propValue === expectedValues[i]) {
	        return;
	      }
	    }
	
	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new Error(
	      ("Invalid " + locationName + " `" + propName + "` of value `" + propValue + "` ") +
	      ("supplied to `" + componentName + "`, expected one of " + valuesString + ".")
	    );
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type ") +
	        ("`" + propType + "` supplied to `" + componentName + "`, expected an object.")
	      );
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  function validate(props, propName, componentName, location) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location) == null) {
	        return;
	      }
	    }
	
	    var locationName = ReactPropTypeLocationNames[location];
	    return new Error(
	      ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	      ("`" + componentName + "`.")
	    );
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createNodeChecker() {
	  function validate(props, propName, componentName, location) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	        ("`" + componentName + "`, expected a ReactNode.")
	      );
	    }
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type `" + propType + "` ") +
	        ("supplied to `" + componentName + "`, expected `object`.")
	      );
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location);
	      if (error) {
	        return error;
	      }
	    }
	  }
	  return createChainableTypeChecker(validate, 'expected `object`');
	}
	
	function isNode(propValue) {
	  switch(typeof propValue) {
	    case 'number':
	    case 'string':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (ReactElement.isValidElement(propValue)) {
	        return true;
	      }
	      for (var k in propValue) {
	        if (!isNode(propValue[k])) {
	          return false;
	        }
	      }
	      return true;
	    default:
	      return false;
	  }
	}
	
	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  return propType;
	}
	
	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}
	
	module.exports = ReactPropTypes;


/***/ },
/* 48 */
/*!*********************************************!*\
  !*** ./~/react/lib/ReactServerRendering.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactServerRendering
	 */
	"use strict";
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactInstanceHandles = __webpack_require__(/*! ./ReactInstanceHandles */ 42);
	var ReactMarkupChecksum = __webpack_require__(/*! ./ReactMarkupChecksum */ 122);
	var ReactServerRenderingTransaction =
	  __webpack_require__(/*! ./ReactServerRenderingTransaction */ 123);
	
	var instantiateReactComponent = __webpack_require__(/*! ./instantiateReactComponent */ 82);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup
	 */
	function renderToString(element) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    ReactElement.isValidElement(element),
	    'renderToString(): You must pass a valid ReactElement.'
	  ) : invariant(ReactElement.isValidElement(element)));
	
	  var transaction;
	  try {
	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(false);
	
	    return transaction.perform(function() {
	      var componentInstance = instantiateReactComponent(element, null);
	      var markup = componentInstance.mountComponent(id, transaction, 0);
	      return ReactMarkupChecksum.addChecksumToMarkup(markup);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	  }
	}
	
	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup, without the extra React ID and checksum
	 * (for generating static pages)
	 */
	function renderToStaticMarkup(element) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    ReactElement.isValidElement(element),
	    'renderToStaticMarkup(): You must pass a valid ReactElement.'
	  ) : invariant(ReactElement.isValidElement(element)));
	
	  var transaction;
	  try {
	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(true);
	
	    return transaction.perform(function() {
	      var componentInstance = instantiateReactComponent(element, null);
	      return componentInstance.mountComponent(id, transaction, 0);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	  }
	}
	
	module.exports = {
	  renderToString: renderToString,
	  renderToStaticMarkup: renderToStaticMarkup
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 49 */
/*!*******************************************!*\
  !*** ./~/react/lib/ReactTextComponent.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTextComponent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var DOMPropertyOperations = __webpack_require__(/*! ./DOMPropertyOperations */ 30);
	var ReactComponent = __webpack_require__(/*! ./ReactComponent */ 33);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var escapeTextForBrowser = __webpack_require__(/*! ./escapeTextForBrowser */ 69);
	
	/**
	 * Text nodes violate a couple assumptions that React makes about components:
	 *
	 *  - When mounting text into the DOM, adjacent text nodes are merged.
	 *  - Text nodes cannot be assigned a React root ID.
	 *
	 * This component is used to wrap strings in elements so that they can undergo
	 * the same reconciliation that is applied to elements.
	 *
	 * TODO: Investigate representing React components in the DOM with text nodes.
	 *
	 * @class ReactTextComponent
	 * @extends ReactComponent
	 * @internal
	 */
	var ReactTextComponent = function(props) {
	  // This constructor and it's argument is currently used by mocks.
	};
	
	assign(ReactTextComponent.prototype, ReactComponent.Mixin, {
	
	  /**
	   * Creates the markup for this text node. This node is not intended to have
	   * any features besides containing text content.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {number} mountDepth number of components in the owner hierarchy
	   * @return {string} Markup for this text node.
	   * @internal
	   */
	  mountComponent: function(rootID, transaction, mountDepth) {
	    ReactComponent.Mixin.mountComponent.call(
	      this,
	      rootID,
	      transaction,
	      mountDepth
	    );
	
	    var escapedText = escapeTextForBrowser(this.props);
	
	    if (transaction.renderToStaticMarkup) {
	      // Normally we'd wrap this in a `span` for the reasons stated above, but
	      // since this is a situation where React won't take over (static pages),
	      // we can simply return the text as it is.
	      return escapedText;
	    }
	
	    return (
	      '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' +
	        escapedText +
	      '</span>'
	    );
	  },
	
	  /**
	   * Updates this component by updating the text content.
	   *
	   * @param {object} nextComponent Contains the next text content.
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  receiveComponent: function(nextComponent, transaction) {
	    var nextProps = nextComponent.props;
	    if (nextProps !== this.props) {
	      this.props = nextProps;
	      ReactComponent.BackendIDOperations.updateTextContentByID(
	        this._rootNodeID,
	        nextProps
	      );
	    }
	  }
	
	});
	
	var ReactTextComponentFactory = function(text) {
	  // Bypass validation and configuration
	  return new ReactElement(ReactTextComponent, null, null, null, null, text);
	};
	
	ReactTextComponentFactory.type = ReactTextComponent;
	
	module.exports = ReactTextComponentFactory;


/***/ },
/* 50 */
/*!**************************************!*\
  !*** ./~/react/lib/Object.assign.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */
	
	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
	
	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }
	
	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }
	
	    var from = Object(nextSource);
	
	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.
	
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }
	
	  return to;
	};
	
	module.exports = assign;


/***/ },
/* 51 */
/*!***********************************!*\
  !*** ./~/react/lib/deprecated.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule deprecated
	 */
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	/**
	 * This will log a single deprecation notice per function and forward the call
	 * on to the new API.
	 *
	 * @param {string} namespace The namespace of the call, eg 'React'
	 * @param {string} oldName The old function name, eg 'renderComponent'
	 * @param {string} newName The new function name, eg 'render'
	 * @param {*} ctx The context this forwarded call should run in
	 * @param {function} fn The function to forward on to
	 * @return {*} Will be the value as returned from `fn`
	 */
	function deprecated(namespace, oldName, newName, ctx, fn) {
	  var warned = false;
	  if ("production" !== process.env.NODE_ENV) {
	    var newFn = function() {
	      ("production" !== process.env.NODE_ENV ? warning(
	        warned,
	        (namespace + "." + oldName + " will be deprecated in a future version. ") +
	        ("Use " + namespace + "." + newName + " instead.")
	      ) : null);
	      warned = true;
	      return fn.apply(ctx, arguments);
	    };
	    newFn.displayName = (namespace + "_" + oldName);
	    // We need to make sure all properties of the original fn are copied over.
	    // In particular, this is needed to support PropTypes
	    return assign(newFn, fn);
	  }
	
	  return fn;
	}
	
	module.exports = deprecated;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 52 */
/*!**********************************!*\
  !*** ./~/react/lib/onlyChild.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	"use strict";
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection. The current implementation of this
	 * function assumes that a single child gets passed without a wrapper, but the
	 * purpose of this helper function is to abstract away the particular structure
	 * of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactComponent} The first and only `ReactComponent` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    ReactElement.isValidElement(children),
	    'onlyChild must be passed a children with exactly one child.'
	  ) : invariant(ReactElement.isValidElement(children)));
	  return children;
	}
	
	module.exports = onlyChild;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 53 */
/*!*********************************************!*\
  !*** ./~/react/lib/ExecutionEnvironment.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */
	
	/*jslint evil: true */
	
	"use strict";
	
	var canUseDOM = !!(
	  typeof window !== 'undefined' &&
	  window.document &&
	  window.document.createElement
	);
	
	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {
	
	  canUseDOM: canUseDOM,
	
	  canUseWorkers: typeof Worker !== 'undefined',
	
	  canUseEventListeners:
	    canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	  canUseViewport: canUseDOM && !!window.screen,
	
	  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
	};
	
	module.exports = ExecutionEnvironment;


/***/ },
/* 54 */
/*!*****************************************!*\
  !*** ./presentation/code/immutable.txt ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var Immutable = require('immutable');\n\nvar map1 = Immutable.Map({a:1, b:2, c:3});\nvar map2 = map1.set('b', 2);\nassert(map1 === map2);\n\nvar map1 = Immutable.Map({a:1, b:2, c:3});\n\n// Efficient to keep history, undo / redo, (think failed ajax requests)\n// web audio apps\nvar clone = map1;\n\nvar map2 = map1.setIn(['d', 'e', 'f'], 'g');\n\n// Map { a: 1, b: 2, c: 3, d: Map { e: Map { f: \"g\" } } }"

/***/ },
/* 55 */
/*!************************************!*\
  !*** ./presentation/code/cljs.txt ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "(def users [{:name \"James\" :age 26}  {:name \"John\" :age 43}])\n \n(assoc-in users [1 :age] 44)\n;; [{:name \"James\", :age 26} {:name \"John\", :age 44}]\n\n(assoc-in users [1 :password] \"nhoJ\")\n;; [{:name \"James\", :age 26} {:password \"nhoJ\", :name \"John\", :age 43}]\n\n(assoc-in users [2] {:name \"Jack\" :age 19})  \n;; [{:name \"James\", :age 26} {:name \"John\", :age 43} {:name \"Jack\", :age 19}]\n\n(users)\n;; [{:name \"James\" :age 26}  {:name \"John\" :age 43}]"

/***/ },
/* 56 */
/*!******************************************!*\
  !*** ./presentation/code/immutable2.txt ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var Immutable = require('immutable');\n\nImmutable.fromJS({\n  person: {\n    name: {\n      first: \"Tim\",\n      last:  \"G\"\n    }\n  },\n  someArray: [\n    {nested: 'object', value: [1, 2, 3]},\n    {nested: 'object', value: [1, 2, 3, 4]}\n  ]\n});"

/***/ },
/* 57 */
/*!******************************************!*\
  !*** ./presentation/code/immutable3.txt ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "// Guarding against unset values\nfunction setDeepProperty(x) {\n  if (typeof x.property !== 'undefined') {\n    x.property = {};\n  }\n  if (typeof x.property.item !== 'undefined') {\n    x.property.item = {};\n  }\n  x.property.item.value = 'set';\n}\n\n// vs.\nx.setIn(['property', 'item'], 'set')"

/***/ },
/* 58 */
/*!******************************************!*\
  !*** ./presentation/code/immutable4.txt ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "// Guarding against unset values\nfunction getDeepItem(x, notSetValue) {\n  if (typeof x.property !== 'undefined' &&\n    return x.property.item;\n  }\n  return notSetValue;\n}\n\n// vs.\nx.getIn(['property', 'item'], 'set')"

/***/ },
/* 59 */
/*!************************************!*\
  !*** ./presentation/code/mori.txt ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var users = mori.js_to_clj([{name: \"James\", age: 26}, {name: \"John\", age: 43}])\n// users.toString()  [{\"name\" \"James\", \"age\" 26} {\"name\" \"John\", \"age\" 43}]\n\nmori.assoc_in(users, [1, 'age'], 44);\n// [{\"name\" \"James\", \"age\" 26} {\"name\" \"John\", \"age\" 44}]\n\nmori.get_in(users, [1, 'age']);\n// 43\n\nmori.update_in(users, [2], function(user) {\n  return mori.hash_map('name', 'jack', 'age', 19);\n})\n// [{\"name\" \"James\", \"age\" 26} {\"name\" \"John\", \"age\" 43} {\"age\" 19, \"name\" \"jack\"}]\n"

/***/ },
/* 60 */
/*!****************************************!*\
  !*** ./presentation/code/problem1.txt ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "function someFunction(arg1, arg2) {\n  var x = arg1;\n\n  if (!x.something.deep) {\n    \n    // we've just mutated arg1\n    x.something.deep = 'some value';\n  }\n\n  return x;\n}"

/***/ },
/* 61 */
/*!****************************************!*\
  !*** ./presentation/code/problem2.txt ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var _ = require('lodash');\n\nfunction someFunction(arg1, arg2) {\n  var x = _.cloneDeep(arg1);\n\n  if (!x.something.deep) {\n    \n    // no longer mutated, but very inefficient\n    x.something.deep = 'some value';\n  }\n\n  return x;\n}"

/***/ },
/* 62 */
/*!**************************************!*\
  !*** ./presentation/code/react3.txt ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var SomeComponent1 = require('./some/component1');\nvar SomeComponent2 = require('./some/component2');\n\nvar Parent = React.createClass({\n    \n  render: function() {\n    <div className=\"someClass\">\n      <SomeComponent1 data={this.props.get('component1')} />\n      <SomeComponent2 data={this.props.get('component2')} />\n    </div>\n  }\n\n});\n\nmodule.exports = Parent;"

/***/ },
/* 63 */
/*!**************************************!*\
  !*** ./presentation/code/react2.txt ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React = require('react');\n\nvar SomeComponent1 = React.createClass({\n  \n  // Efficient \"should component update\"\n  shouldComponentUpdate: function(nextProps, nextState) {\n    return !Immutable.is(nextProps, this.props) || \n      !Immutable.is(nextState, this.state);\n  },\n\n  render: function() {\n    // ... JSX\n  }\n\n});\n\nmodule.exports = SomeComponent1"

/***/ },
/* 64 */
/*!*************************************!*\
  !*** ./presentation/code/react.txt ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var SomeComponent1 = require('./some/component1');\nvar SomeComponent2 = require('./some/component2');\n\nvar Parent = React.createClass({\n    \n  render: function() {\n    <div className=\"someClass\">\n      <SomeComponent1 data={this.props.get('component1')} />\n      <SomeComponent2 data={this.props.get('component2')} />\n    </div>\n  }\n\n});\n\nmodule.exports = Parent;"

/***/ },
/* 65 */
/*!**********************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/process/browser.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	process.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	    && window.setImmediate;
	    var canPost = typeof window !== 'undefined'
	    && window.postMessage && window.addEventListener
	    ;
	
	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f) };
	    }
	
	    if (canPost) {
	        var queue = [];
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);
	
	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }
	
	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();
	
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	}
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};


/***/ },
/* 66 */
/*!***************************************!*\
  !*** ./~/react/lib/EventConstants.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventConstants
	 */
	
	"use strict";
	
	var keyMirror = __webpack_require__(/*! ./keyMirror */ 76);
	
	var PropagationPhases = keyMirror({bubbled: null, captured: null});
	
	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = keyMirror({
	  topBlur: null,
	  topChange: null,
	  topClick: null,
	  topCompositionEnd: null,
	  topCompositionStart: null,
	  topCompositionUpdate: null,
	  topContextMenu: null,
	  topCopy: null,
	  topCut: null,
	  topDoubleClick: null,
	  topDrag: null,
	  topDragEnd: null,
	  topDragEnter: null,
	  topDragExit: null,
	  topDragLeave: null,
	  topDragOver: null,
	  topDragStart: null,
	  topDrop: null,
	  topError: null,
	  topFocus: null,
	  topInput: null,
	  topKeyDown: null,
	  topKeyPress: null,
	  topKeyUp: null,
	  topLoad: null,
	  topMouseDown: null,
	  topMouseMove: null,
	  topMouseOut: null,
	  topMouseOver: null,
	  topMouseUp: null,
	  topPaste: null,
	  topReset: null,
	  topScroll: null,
	  topSelectionChange: null,
	  topSubmit: null,
	  topTextInput: null,
	  topTouchCancel: null,
	  topTouchEnd: null,
	  topTouchMove: null,
	  topTouchStart: null,
	  topWheel: null
	});
	
	var EventConstants = {
	  topLevelTypes: topLevelTypes,
	  PropagationPhases: PropagationPhases
	};
	
	module.exports = EventConstants;


/***/ },
/* 67 */
/*!**********************************!*\
  !*** ./~/react/lib/invariant.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if ("production" !== process.env.NODE_ENV) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 68 */
/*!************************************!*\
  !*** ./~/react/lib/DOMProperty.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMProperty
	 * @typechecks static-only
	 */
	
	/*jslint bitwise: true */
	
	"use strict";
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	function checkMask(value, bitmask) {
	  return (value & bitmask) === bitmask;
	}
	
	var DOMPropertyInjection = {
	  /**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */
	  MUST_USE_ATTRIBUTE: 0x1,
	  MUST_USE_PROPERTY: 0x2,
	  HAS_SIDE_EFFECTS: 0x4,
	  HAS_BOOLEAN_VALUE: 0x8,
	  HAS_NUMERIC_VALUE: 0x10,
	  HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
	  HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,
	
	  /**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * isCustomAttribute: function that given an attribute name will return true
	   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
	   * attributes where it's impossible to enumerate all of the possible
	   * attribute names,
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */
	  injectDOMPropertyConfig: function(domPropertyConfig) {
	    var Properties = domPropertyConfig.Properties || {};
	    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
	    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
	    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
	
	    if (domPropertyConfig.isCustomAttribute) {
	      DOMProperty._isCustomAttributeFunctions.push(
	        domPropertyConfig.isCustomAttribute
	      );
	    }
	
	    for (var propName in Properties) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        !DOMProperty.isStandardName.hasOwnProperty(propName),
	        'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' +
	        '\'%s\' which has already been injected. You may be accidentally ' +
	        'injecting the same DOM property config twice, or you may be ' +
	        'injecting two configs that have conflicting property names.',
	        propName
	      ) : invariant(!DOMProperty.isStandardName.hasOwnProperty(propName)));
	
	      DOMProperty.isStandardName[propName] = true;
	
	      var lowerCased = propName.toLowerCase();
	      DOMProperty.getPossibleStandardName[lowerCased] = propName;
	
	      if (DOMAttributeNames.hasOwnProperty(propName)) {
	        var attributeName = DOMAttributeNames[propName];
	        DOMProperty.getPossibleStandardName[attributeName] = propName;
	        DOMProperty.getAttributeName[propName] = attributeName;
	      } else {
	        DOMProperty.getAttributeName[propName] = lowerCased;
	      }
	
	      DOMProperty.getPropertyName[propName] =
	        DOMPropertyNames.hasOwnProperty(propName) ?
	          DOMPropertyNames[propName] :
	          propName;
	
	      if (DOMMutationMethods.hasOwnProperty(propName)) {
	        DOMProperty.getMutationMethod[propName] = DOMMutationMethods[propName];
	      } else {
	        DOMProperty.getMutationMethod[propName] = null;
	      }
	
	      var propConfig = Properties[propName];
	      DOMProperty.mustUseAttribute[propName] =
	        checkMask(propConfig, DOMPropertyInjection.MUST_USE_ATTRIBUTE);
	      DOMProperty.mustUseProperty[propName] =
	        checkMask(propConfig, DOMPropertyInjection.MUST_USE_PROPERTY);
	      DOMProperty.hasSideEffects[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_SIDE_EFFECTS);
	      DOMProperty.hasBooleanValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_BOOLEAN_VALUE);
	      DOMProperty.hasNumericValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_NUMERIC_VALUE);
	      DOMProperty.hasPositiveNumericValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_POSITIVE_NUMERIC_VALUE);
	      DOMProperty.hasOverloadedBooleanValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_OVERLOADED_BOOLEAN_VALUE);
	
	      ("production" !== process.env.NODE_ENV ? invariant(
	        !DOMProperty.mustUseAttribute[propName] ||
	          !DOMProperty.mustUseProperty[propName],
	        'DOMProperty: Cannot require using both attribute and property: %s',
	        propName
	      ) : invariant(!DOMProperty.mustUseAttribute[propName] ||
	        !DOMProperty.mustUseProperty[propName]));
	      ("production" !== process.env.NODE_ENV ? invariant(
	        DOMProperty.mustUseProperty[propName] ||
	          !DOMProperty.hasSideEffects[propName],
	        'DOMProperty: Properties that have side effects must use property: %s',
	        propName
	      ) : invariant(DOMProperty.mustUseProperty[propName] ||
	        !DOMProperty.hasSideEffects[propName]));
	      ("production" !== process.env.NODE_ENV ? invariant(
	        !!DOMProperty.hasBooleanValue[propName] +
	          !!DOMProperty.hasNumericValue[propName] +
	          !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1,
	        'DOMProperty: Value can be one of boolean, overloaded boolean, or ' +
	        'numeric value, but not a combination: %s',
	        propName
	      ) : invariant(!!DOMProperty.hasBooleanValue[propName] +
	        !!DOMProperty.hasNumericValue[propName] +
	        !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1));
	    }
	  }
	};
	var defaultValueCache = {};
	
	/**
	 * DOMProperty exports lookup objects that can be used like functions:
	 *
	 *   > DOMProperty.isValid['id']
	 *   true
	 *   > DOMProperty.isValid['foobar']
	 *   undefined
	 *
	 * Although this may be confusing, it performs better in general.
	 *
	 * @see http://jsperf.com/key-exists
	 * @see http://jsperf.com/key-missing
	 */
	var DOMProperty = {
	
	  ID_ATTRIBUTE_NAME: 'data-reactid',
	
	  /**
	   * Checks whether a property name is a standard property.
	   * @type {Object}
	   */
	  isStandardName: {},
	
	  /**
	   * Mapping from lowercase property names to the properly cased version, used
	   * to warn in the case of missing properties.
	   * @type {Object}
	   */
	  getPossibleStandardName: {},
	
	  /**
	   * Mapping from normalized names to attribute names that differ. Attribute
	   * names are used when rendering markup or with `*Attribute()`.
	   * @type {Object}
	   */
	  getAttributeName: {},
	
	  /**
	   * Mapping from normalized names to properties on DOM node instances.
	   * (This includes properties that mutate due to external factors.)
	   * @type {Object}
	   */
	  getPropertyName: {},
	
	  /**
	   * Mapping from normalized names to mutation methods. This will only exist if
	   * mutation cannot be set simply by the property or `setAttribute()`.
	   * @type {Object}
	   */
	  getMutationMethod: {},
	
	  /**
	   * Whether the property must be accessed and mutated as an object property.
	   * @type {Object}
	   */
	  mustUseAttribute: {},
	
	  /**
	   * Whether the property must be accessed and mutated using `*Attribute()`.
	   * (This includes anything that fails `<propName> in <element>`.)
	   * @type {Object}
	   */
	  mustUseProperty: {},
	
	  /**
	   * Whether or not setting a value causes side effects such as triggering
	   * resources to be loaded or text selection changes. We must ensure that
	   * the value is only set if it has changed.
	   * @type {Object}
	   */
	  hasSideEffects: {},
	
	  /**
	   * Whether the property should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasBooleanValue: {},
	
	  /**
	   * Whether the property must be numeric or parse as a
	   * numeric and should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasNumericValue: {},
	
	  /**
	   * Whether the property must be positive numeric or parse as a positive
	   * numeric and should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasPositiveNumericValue: {},
	
	  /**
	   * Whether the property can be used as a flag as well as with a value. Removed
	   * when strictly equal to false; present without a value when strictly equal
	   * to true; present with a value otherwise.
	   * @type {Object}
	   */
	  hasOverloadedBooleanValue: {},
	
	  /**
	   * All of the isCustomAttribute() functions that have been injected.
	   */
	  _isCustomAttributeFunctions: [],
	
	  /**
	   * Checks whether a property name is a custom attribute.
	   * @method
	   */
	  isCustomAttribute: function(attributeName) {
	    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
	      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
	      if (isCustomAttributeFn(attributeName)) {
	        return true;
	      }
	    }
	    return false;
	  },
	
	  /**
	   * Returns the default property value for a DOM property (i.e., not an
	   * attribute). Most default values are '' or false, but not all. Worse yet,
	   * some (in particular, `type`) vary depending on the type of element.
	   *
	   * TODO: Is it better to grab all the possible properties when creating an
	   * element to avoid having to create the same element twice?
	   */
	  getDefaultValueForProperty: function(nodeName, prop) {
	    var nodeDefaults = defaultValueCache[nodeName];
	    var testElement;
	    if (!nodeDefaults) {
	      defaultValueCache[nodeName] = nodeDefaults = {};
	    }
	    if (!(prop in nodeDefaults)) {
	      testElement = document.createElement(nodeName);
	      nodeDefaults[prop] = testElement[prop];
	    }
	    return nodeDefaults[prop];
	  },
	
	  injection: DOMPropertyInjection
	};
	
	module.exports = DOMProperty;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 69 */
/*!*********************************************!*\
  !*** ./~/react/lib/escapeTextForBrowser.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule escapeTextForBrowser
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var ESCAPE_LOOKUP = {
	  "&": "&amp;",
	  ">": "&gt;",
	  "<": "&lt;",
	  "\"": "&quot;",
	  "'": "&#x27;"
	};
	
	var ESCAPE_REGEX = /[&><"']/g;
	
	function escaper(match) {
	  return ESCAPE_LOOKUP[match];
	}
	
	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */
	function escapeTextForBrowser(text) {
	  return ('' + text).replace(ESCAPE_REGEX, escaper);
	}
	
	module.exports = escapeTextForBrowser;


/***/ },
/* 70 */
/*!******************************************!*\
  !*** ./~/react/lib/memoizeStringOnly.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule memoizeStringOnly
	 * @typechecks static-only
	 */
	
	"use strict";
	
	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 *
	 * @param {function} callback
	 * @return {function}
	 */
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function(string) {
	    if (cache.hasOwnProperty(string)) {
	      return cache[string];
	    } else {
	      return cache[string] = callback.call(this, string);
	    }
	  };
	}
	
	module.exports = memoizeStringOnly;


/***/ },
/* 71 */
/*!********************************!*\
  !*** ./~/react/lib/warning.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */
	
	"use strict";
	
	var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 121);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if ("production" !== process.env.NODE_ENV) {
	  warning = function(condition, format ) {var args=Array.prototype.slice.call(arguments,2);
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      console.warn('Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];}));
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 72 */
/*!************************************!*\
  !*** ./~/react/lib/PooledClass.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */
	
	"use strict";
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function(copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};
	
	var twoArgumentPooler = function(a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};
	
	var threeArgumentPooler = function(a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};
	
	var fiveArgumentPooler = function(a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};
	
	var standardReleaser = function(instance) {
	  var Klass = this;
	  ("production" !== process.env.NODE_ENV ? invariant(
	    instance instanceof Klass,
	    'Trying to release an instance into a pool of a different type.'
	  ) : invariant(instance instanceof Klass));
	  if (instance.destructor) {
	    instance.destructor();
	  }
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};
	
	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;
	
	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances (optional).
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function(CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};
	
	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};
	
	module.exports = PooledClass;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 73 */
/*!********************************************!*\
  !*** ./~/react/lib/traverseAllChildren.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */
	
	"use strict";
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactInstanceHandles = __webpack_require__(/*! ./ReactInstanceHandles */ 42);
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	var SEPARATOR = ReactInstanceHandles.SEPARATOR;
	var SUBSEPARATOR = ':';
	
	/**
	 * TODO: Test that:
	 * 1. `mapChildren` transforms strings and numbers into `ReactTextComponent`.
	 * 2. it('should fail when supplied duplicate key', function() {
	 * 3. That a single child and an array with one item have the same key pattern.
	 * });
	 */
	
	var userProvidedKeyEscaperLookup = {
	  '=': '=0',
	  '.': '=1',
	  ':': '=2'
	};
	
	var userProvidedKeyEscapeRegex = /[=.:]/g;
	
	function userProvidedKeyEscaper(match) {
	  return userProvidedKeyEscaperLookup[match];
	}
	
	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  if (component && component.key != null) {
	    // Explicit key
	    return wrapUserProvidedKey(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}
	
	/**
	 * Escape a component key so that it is safe to use in a reactid.
	 *
	 * @param {*} key Component key to be escaped.
	 * @return {string} An escaped string.
	 */
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(
	    userProvidedKeyEscapeRegex,
	    userProvidedKeyEscaper
	  );
	}
	
	/**
	 * Wrap a `key` value explicitly provided by the user to distinguish it from
	 * implicitly-generated keys generated by a component's index in its parent.
	 *
	 * @param {string} key Value of a user-provided `key` attribute
	 * @return {string}
	 */
	function wrapUserProvidedKey(key) {
	  return '$' + escapeUserProvidedKey(key);
	}
	
	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!number} indexSoFar Number of children encountered until this point.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	var traverseAllChildrenImpl =
	  function(children, nameSoFar, indexSoFar, callback, traverseContext) {
	    var nextName, nextIndex;
	    var subtreeCount = 0;  // Count of children found in the current subtree.
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; i++) {
	        var child = children[i];
	        nextName = (
	          nameSoFar +
	          (nameSoFar ? SUBSEPARATOR : SEPARATOR) +
	          getComponentKey(child, i)
	        );
	        nextIndex = indexSoFar + subtreeCount;
	        subtreeCount += traverseAllChildrenImpl(
	          child,
	          nextName,
	          nextIndex,
	          callback,
	          traverseContext
	        );
	      }
	    } else {
	      var type = typeof children;
	      var isOnlyChild = nameSoFar === '';
	      // If it's the only child, treat the name as if it was wrapped in an array
	      // so that it's consistent if the number of children grows
	      var storageName =
	        isOnlyChild ? SEPARATOR + getComponentKey(children, 0) : nameSoFar;
	      if (children == null || type === 'boolean') {
	        // All of the above are perceived as null.
	        callback(traverseContext, null, storageName, indexSoFar);
	        subtreeCount = 1;
	      } else if (type === 'string' || type === 'number' ||
	                 ReactElement.isValidElement(children)) {
	        callback(traverseContext, children, storageName, indexSoFar);
	        subtreeCount = 1;
	      } else if (type === 'object') {
	        ("production" !== process.env.NODE_ENV ? invariant(
	          !children || children.nodeType !== 1,
	          'traverseAllChildren(...): Encountered an invalid child; DOM ' +
	          'elements are not valid children of React components.'
	        ) : invariant(!children || children.nodeType !== 1));
	        for (var key in children) {
	          if (children.hasOwnProperty(key)) {
	            nextName = (
	              nameSoFar + (nameSoFar ? SUBSEPARATOR : SEPARATOR) +
	              wrapUserProvidedKey(key) + SUBSEPARATOR +
	              getComponentKey(children[key], 0)
	            );
	            nextIndex = indexSoFar + subtreeCount;
	            subtreeCount += traverseAllChildrenImpl(
	              children[key],
	              nextName,
	              nextIndex,
	              callback,
	              traverseContext
	            );
	          }
	        }
	      }
	    }
	    return subtreeCount;
	  };
	
	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }
	
	  return traverseAllChildrenImpl(children, '', 0, callback, traverseContext);
	}
	
	module.exports = traverseAllChildren;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 74 */
/*!***********************************!*\
  !*** ./~/react/lib/ReactOwner.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactOwner
	 */
	
	"use strict";
	
	var emptyObject = __webpack_require__(/*! ./emptyObject */ 126);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * ReactOwners are capable of storing references to owned components.
	 *
	 * All components are capable of //being// referenced by owner components, but
	 * only ReactOwner components are capable of //referencing// owned components.
	 * The named reference is known as a "ref".
	 *
	 * Refs are available when mounted and updated during reconciliation.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return (
	 *         <div onClick={this.handleClick}>
	 *           <CustomComponent ref="custom" />
	 *         </div>
	 *       );
	 *     },
	 *     handleClick: function() {
	 *       this.refs.custom.handleClick();
	 *     },
	 *     componentDidMount: function() {
	 *       this.refs.custom.initialize();
	 *     }
	 *   });
	 *
	 * Refs should rarely be used. When refs are used, they should only be done to
	 * control data that is not handled by React's data flow.
	 *
	 * @class ReactOwner
	 */
	var ReactOwner = {
	
	  /**
	   * @param {?object} object
	   * @return {boolean} True if `object` is a valid owner.
	   * @final
	   */
	  isValidOwner: function(object) {
	    return !!(
	      object &&
	      typeof object.attachRef === 'function' &&
	      typeof object.detachRef === 'function'
	    );
	  },
	
	  /**
	   * Adds a component by ref to an owner component.
	   *
	   * @param {ReactComponent} component Component to reference.
	   * @param {string} ref Name by which to refer to the component.
	   * @param {ReactOwner} owner Component on which to record the ref.
	   * @final
	   * @internal
	   */
	  addComponentAsRefTo: function(component, ref, owner) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      ReactOwner.isValidOwner(owner),
	      'addComponentAsRefTo(...): Only a ReactOwner can have refs. This ' +
	      'usually means that you\'re trying to add a ref to a component that ' +
	      'doesn\'t have an owner (that is, was not created inside of another ' +
	      'component\'s `render` method). Try rendering this component inside of ' +
	      'a new top-level component which will hold the ref.'
	    ) : invariant(ReactOwner.isValidOwner(owner)));
	    owner.attachRef(ref, component);
	  },
	
	  /**
	   * Removes a component by ref from an owner component.
	   *
	   * @param {ReactComponent} component Component to dereference.
	   * @param {string} ref Name of the ref to remove.
	   * @param {ReactOwner} owner Component on which the ref is recorded.
	   * @final
	   * @internal
	   */
	  removeComponentAsRefFrom: function(component, ref, owner) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      ReactOwner.isValidOwner(owner),
	      'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This ' +
	      'usually means that you\'re trying to remove a ref to a component that ' +
	      'doesn\'t have an owner (that is, was not created inside of another ' +
	      'component\'s `render` method). Try rendering this component inside of ' +
	      'a new top-level component which will hold the ref.'
	    ) : invariant(ReactOwner.isValidOwner(owner)));
	    // Check that `component` is still the current ref because we do not want to
	    // detach the ref if another component stole it.
	    if (owner.refs[ref] === component) {
	      owner.detachRef(ref);
	    }
	  },
	
	  /**
	   * A ReactComponent must mix this in to have refs.
	   *
	   * @lends {ReactOwner.prototype}
	   */
	  Mixin: {
	
	    construct: function() {
	      this.refs = emptyObject;
	    },
	
	    /**
	     * Lazily allocates the refs object and stores `component` as `ref`.
	     *
	     * @param {string} ref Reference name.
	     * @param {component} component Component to store as `ref`.
	     * @final
	     * @private
	     */
	    attachRef: function(ref, component) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        component.isOwnedBy(this),
	        'attachRef(%s, ...): Only a component\'s owner can store a ref to it.',
	        ref
	      ) : invariant(component.isOwnedBy(this)));
	      var refs = this.refs === emptyObject ? (this.refs = {}) : this.refs;
	      refs[ref] = component;
	    },
	
	    /**
	     * Detaches a reference name.
	     *
	     * @param {string} ref Name to dereference.
	     * @final
	     * @private
	     */
	    detachRef: function(ref) {
	      delete this.refs[ref];
	    }
	
	  }
	
	};
	
	module.exports = ReactOwner;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 75 */
/*!*************************************!*\
  !*** ./~/react/lib/ReactUpdates.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdates
	 */
	
	"use strict";
	
	var CallbackQueue = __webpack_require__(/*! ./CallbackQueue */ 124);
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 72);
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 36);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 46);
	var Transaction = __webpack_require__(/*! ./Transaction */ 125);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	var dirtyComponents = [];
	var asapCallbackQueue = CallbackQueue.getPooled();
	var asapEnqueued = false;
	
	var batchingStrategy = null;
	
	function ensureInjected() {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    ReactUpdates.ReactReconcileTransaction && batchingStrategy,
	    'ReactUpdates: must inject a reconcile transaction class and batching ' +
	    'strategy'
	  ) : invariant(ReactUpdates.ReactReconcileTransaction && batchingStrategy));
	}
	
	var NESTED_UPDATES = {
	  initialize: function() {
	    this.dirtyComponentsLength = dirtyComponents.length;
	  },
	  close: function() {
	    if (this.dirtyComponentsLength !== dirtyComponents.length) {
	      // Additional updates were enqueued by componentDidUpdate handlers or
	      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
	      // these new updates so that if A's componentDidUpdate calls setState on
	      // B, B will update before the callback A's updater provided when calling
	      // setState.
	      dirtyComponents.splice(0, this.dirtyComponentsLength);
	      flushBatchedUpdates();
	    } else {
	      dirtyComponents.length = 0;
	    }
	  }
	};
	
	var UPDATE_QUEUEING = {
	  initialize: function() {
	    this.callbackQueue.reset();
	  },
	  close: function() {
	    this.callbackQueue.notifyAll();
	  }
	};
	
	var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];
	
	function ReactUpdatesFlushTransaction() {
	  this.reinitializeTransaction();
	  this.dirtyComponentsLength = null;
	  this.callbackQueue = CallbackQueue.getPooled();
	  this.reconcileTransaction =
	    ReactUpdates.ReactReconcileTransaction.getPooled();
	}
	
	assign(
	  ReactUpdatesFlushTransaction.prototype,
	  Transaction.Mixin, {
	  getTransactionWrappers: function() {
	    return TRANSACTION_WRAPPERS;
	  },
	
	  destructor: function() {
	    this.dirtyComponentsLength = null;
	    CallbackQueue.release(this.callbackQueue);
	    this.callbackQueue = null;
	    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
	    this.reconcileTransaction = null;
	  },
	
	  perform: function(method, scope, a) {
	    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
	    // with this transaction's wrappers around it.
	    return Transaction.Mixin.perform.call(
	      this,
	      this.reconcileTransaction.perform,
	      this.reconcileTransaction,
	      method,
	      scope,
	      a
	    );
	  }
	});
	
	PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);
	
	function batchedUpdates(callback, a, b) {
	  ensureInjected();
	  batchingStrategy.batchedUpdates(callback, a, b);
	}
	
	/**
	 * Array comparator for ReactComponents by owner depth
	 *
	 * @param {ReactComponent} c1 first component you're comparing
	 * @param {ReactComponent} c2 second component you're comparing
	 * @return {number} Return value usable by Array.prototype.sort().
	 */
	function mountDepthComparator(c1, c2) {
	  return c1._mountDepth - c2._mountDepth;
	}
	
	function runBatchedUpdates(transaction) {
	  var len = transaction.dirtyComponentsLength;
	  ("production" !== process.env.NODE_ENV ? invariant(
	    len === dirtyComponents.length,
	    'Expected flush transaction\'s stored dirty-components length (%s) to ' +
	    'match dirty-components array length (%s).',
	    len,
	    dirtyComponents.length
	  ) : invariant(len === dirtyComponents.length));
	
	  // Since reconciling a component higher in the owner hierarchy usually (not
	  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
	  // them before their children by sorting the array.
	  dirtyComponents.sort(mountDepthComparator);
	
	  for (var i = 0; i < len; i++) {
	    // If a component is unmounted before pending changes apply, ignore them
	    // TODO: Queue unmounts in the same list to avoid this happening at all
	    var component = dirtyComponents[i];
	    if (component.isMounted()) {
	      // If performUpdateIfNecessary happens to enqueue any new updates, we
	      // shouldn't execute the callbacks until the next render happens, so
	      // stash the callbacks first
	      var callbacks = component._pendingCallbacks;
	      component._pendingCallbacks = null;
	      component.performUpdateIfNecessary(transaction.reconcileTransaction);
	
	      if (callbacks) {
	        for (var j = 0; j < callbacks.length; j++) {
	          transaction.callbackQueue.enqueue(
	            callbacks[j],
	            component
	          );
	        }
	      }
	    }
	  }
	}
	
	var flushBatchedUpdates = ReactPerf.measure(
	  'ReactUpdates',
	  'flushBatchedUpdates',
	  function() {
	    // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
	    // array and perform any updates enqueued by mount-ready handlers (i.e.,
	    // componentDidUpdate) but we need to check here too in order to catch
	    // updates enqueued by setState callbacks and asap calls.
	    while (dirtyComponents.length || asapEnqueued) {
	      if (dirtyComponents.length) {
	        var transaction = ReactUpdatesFlushTransaction.getPooled();
	        transaction.perform(runBatchedUpdates, null, transaction);
	        ReactUpdatesFlushTransaction.release(transaction);
	      }
	
	      if (asapEnqueued) {
	        asapEnqueued = false;
	        var queue = asapCallbackQueue;
	        asapCallbackQueue = CallbackQueue.getPooled();
	        queue.notifyAll();
	        CallbackQueue.release(queue);
	      }
	    }
	  }
	);
	
	/**
	 * Mark a component as needing a rerender, adding an optional callback to a
	 * list of functions which will be executed once the rerender occurs.
	 */
	function enqueueUpdate(component, callback) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    !callback || typeof callback === "function",
	    'enqueueUpdate(...): You called `setProps`, `replaceProps`, ' +
	    '`setState`, `replaceState`, or `forceUpdate` with a callback that ' +
	    'isn\'t callable.'
	  ) : invariant(!callback || typeof callback === "function"));
	  ensureInjected();
	
	  // Various parts of our code (such as ReactCompositeComponent's
	  // _renderValidatedComponent) assume that calls to render aren't nested;
	  // verify that that's the case. (This is called by each top-level update
	  // function, like setProps, setState, forceUpdate, etc.; creation and
	  // destruction of top-level components is guarded in ReactMount.)
	  ("production" !== process.env.NODE_ENV ? warning(
	    ReactCurrentOwner.current == null,
	    'enqueueUpdate(): Render methods should be a pure function of props ' +
	    'and state; triggering nested component updates from render is not ' +
	    'allowed. If necessary, trigger nested updates in ' +
	    'componentDidUpdate.'
	  ) : null);
	
	  if (!batchingStrategy.isBatchingUpdates) {
	    batchingStrategy.batchedUpdates(enqueueUpdate, component, callback);
	    return;
	  }
	
	  dirtyComponents.push(component);
	
	  if (callback) {
	    if (component._pendingCallbacks) {
	      component._pendingCallbacks.push(callback);
	    } else {
	      component._pendingCallbacks = [callback];
	    }
	  }
	}
	
	/**
	 * Enqueue a callback to be run at the end of the current batching cycle. Throws
	 * if no updates are currently being performed.
	 */
	function asap(callback, context) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    batchingStrategy.isBatchingUpdates,
	    'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' +
	    'updates are not being batched.'
	  ) : invariant(batchingStrategy.isBatchingUpdates));
	  asapCallbackQueue.enqueue(callback, context);
	  asapEnqueued = true;
	}
	
	var ReactUpdatesInjection = {
	  injectReconcileTransaction: function(ReconcileTransaction) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      ReconcileTransaction,
	      'ReactUpdates: must provide a reconcile transaction class'
	    ) : invariant(ReconcileTransaction));
	    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
	  },
	
	  injectBatchingStrategy: function(_batchingStrategy) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      _batchingStrategy,
	      'ReactUpdates: must provide a batching strategy'
	    ) : invariant(_batchingStrategy));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      typeof _batchingStrategy.batchedUpdates === 'function',
	      'ReactUpdates: must provide a batchedUpdates() function'
	    ) : invariant(typeof _batchingStrategy.batchedUpdates === 'function'));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      typeof _batchingStrategy.isBatchingUpdates === 'boolean',
	      'ReactUpdates: must provide an isBatchingUpdates boolean attribute'
	    ) : invariant(typeof _batchingStrategy.isBatchingUpdates === 'boolean'));
	    batchingStrategy = _batchingStrategy;
	  }
	};
	
	var ReactUpdates = {
	  /**
	   * React references `ReactReconcileTransaction` using this property in order
	   * to allow dependency injection.
	   *
	   * @internal
	   */
	  ReactReconcileTransaction: null,
	
	  batchedUpdates: batchedUpdates,
	  enqueueUpdate: enqueueUpdate,
	  flushBatchedUpdates: flushBatchedUpdates,
	  injection: ReactUpdatesInjection,
	  asap: asap
	};
	
	module.exports = ReactUpdates;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 76 */
/*!**********************************!*\
  !*** ./~/react/lib/keyMirror.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyMirror
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  ("production" !== process.env.NODE_ENV ? invariant(
	    obj instanceof Object && !Array.isArray(obj),
	    'keyMirror(...): Argument must be an object.'
	  ) : invariant(obj instanceof Object && !Array.isArray(obj)));
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};
	
	module.exports = keyMirror;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 77 */
/*!********************************************!*\
  !*** ./~/react/lib/ReactEmptyComponent.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEmptyComponent
	 */
	
	"use strict";
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	var component;
	// This registry keeps track of the React IDs of the components that rendered to
	// `null` (in reality a placeholder such as `noscript`)
	var nullComponentIdsRegistry = {};
	
	var ReactEmptyComponentInjection = {
	  injectEmptyComponent: function(emptyComponent) {
	    component = ReactElement.createFactory(emptyComponent);
	  }
	};
	
	/**
	 * @return {ReactComponent} component The injected empty component.
	 */
	function getEmptyComponent() {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    component,
	    'Trying to return null from a render, but no null placeholder component ' +
	    'was injected.'
	  ) : invariant(component));
	  return component();
	}
	
	/**
	 * Mark the component as having rendered to null.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function registerNullComponentID(id) {
	  nullComponentIdsRegistry[id] = true;
	}
	
	/**
	 * Unmark the component as having rendered to null: it renders to something now.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function deregisterNullComponentID(id) {
	  delete nullComponentIdsRegistry[id];
	}
	
	/**
	 * @param {string} id Component's `_rootNodeID`.
	 * @return {boolean} True if the component is rendered to null.
	 */
	function isNullComponentID(id) {
	  return nullComponentIdsRegistry[id];
	}
	
	var ReactEmptyComponent = {
	  deregisterNullComponentID: deregisterNullComponentID,
	  getEmptyComponent: getEmptyComponent,
	  injection: ReactEmptyComponentInjection,
	  isNullComponentID: isNullComponentID,
	  registerNullComponentID: registerNullComponentID
	};
	
	module.exports = ReactEmptyComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 78 */
/*!****************************************!*\
  !*** ./~/react/lib/ReactErrorUtils.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactErrorUtils
	 * @typechecks
	 */
	
	"use strict";
	
	var ReactErrorUtils = {
	  /**
	   * Creates a guarded version of a function. This is supposed to make debugging
	   * of event handlers easier. To aid debugging with the browser's debugger,
	   * this currently simply returns the original function.
	   *
	   * @param {function} func Function to be executed
	   * @param {string} name The name of the guard
	   * @return {function}
	   */
	  guard: function(func, name) {
	    return func;
	  }
	};
	
	module.exports = ReactErrorUtils;


/***/ },
/* 79 */
/*!********************************************!*\
  !*** ./~/react/lib/ReactPropTransferer.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTransferer
	 */
	
	"use strict";
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 121);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	var joinClasses = __webpack_require__(/*! ./joinClasses */ 127);
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	var didWarn = false;
	
	/**
	 * Creates a transfer strategy that will merge prop values using the supplied
	 * `mergeStrategy`. If a prop was previously unset, this just sets it.
	 *
	 * @param {function} mergeStrategy
	 * @return {function}
	 */
	function createTransferStrategy(mergeStrategy) {
	  return function(props, key, value) {
	    if (!props.hasOwnProperty(key)) {
	      props[key] = value;
	    } else {
	      props[key] = mergeStrategy(props[key], value);
	    }
	  };
	}
	
	var transferStrategyMerge = createTransferStrategy(function(a, b) {
	  // `merge` overrides the first object's (`props[key]` above) keys using the
	  // second object's (`value`) keys. An object's style's existing `propA` would
	  // get overridden. Flip the order here.
	  return assign({}, b, a);
	});
	
	/**
	 * Transfer strategies dictate how props are transferred by `transferPropsTo`.
	 * NOTE: if you add any more exceptions to this list you should be sure to
	 * update `cloneWithProps()` accordingly.
	 */
	var TransferStrategies = {
	  /**
	   * Never transfer `children`.
	   */
	  children: emptyFunction,
	  /**
	   * Transfer the `className` prop by merging them.
	   */
	  className: createTransferStrategy(joinClasses),
	  /**
	   * Transfer the `style` prop (which is an object) by merging them.
	   */
	  style: transferStrategyMerge
	};
	
	/**
	 * Mutates the first argument by transferring the properties from the second
	 * argument.
	 *
	 * @param {object} props
	 * @param {object} newProps
	 * @return {object}
	 */
	function transferInto(props, newProps) {
	  for (var thisKey in newProps) {
	    if (!newProps.hasOwnProperty(thisKey)) {
	      continue;
	    }
	
	    var transferStrategy = TransferStrategies[thisKey];
	
	    if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
	      transferStrategy(props, thisKey, newProps[thisKey]);
	    } else if (!props.hasOwnProperty(thisKey)) {
	      props[thisKey] = newProps[thisKey];
	    }
	  }
	  return props;
	}
	
	/**
	 * ReactPropTransferer are capable of transferring props to another component
	 * using a `transferPropsTo` method.
	 *
	 * @class ReactPropTransferer
	 */
	var ReactPropTransferer = {
	
	  TransferStrategies: TransferStrategies,
	
	  /**
	   * Merge two props objects using TransferStrategies.
	   *
	   * @param {object} oldProps original props (they take precedence)
	   * @param {object} newProps new props to merge in
	   * @return {object} a new object containing both sets of props merged.
	   */
	  mergeProps: function(oldProps, newProps) {
	    return transferInto(assign({}, oldProps), newProps);
	  },
	
	  /**
	   * @lends {ReactPropTransferer.prototype}
	   */
	  Mixin: {
	
	    /**
	     * Transfer props from this component to a target component.
	     *
	     * Props that do not have an explicit transfer strategy will be transferred
	     * only if the target component does not already have the prop set.
	     *
	     * This is usually used to pass down props to a returned root component.
	     *
	     * @param {ReactElement} element Component receiving the properties.
	     * @return {ReactElement} The supplied `component`.
	     * @final
	     * @protected
	     */
	    transferPropsTo: function(element) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        element._owner === this,
	        '%s: You can\'t call transferPropsTo() on a component that you ' +
	        'don\'t own, %s. This usually means you are calling ' +
	        'transferPropsTo() on a component passed in as props or children.',
	        this.constructor.displayName,
	        typeof element.type === 'string' ?
	        element.type :
	        element.type.displayName
	      ) : invariant(element._owner === this));
	
	      if ("production" !== process.env.NODE_ENV) {
	        if (!didWarn) {
	          didWarn = true;
	          ("production" !== process.env.NODE_ENV ? warning(
	            false,
	            'transferPropsTo is deprecated. ' +
	            'See http://fb.me/react-transferpropsto for more information.'
	          ) : null);
	        }
	      }
	
	      // Because elements are immutable we have to merge into the existing
	      // props object rather than clone it.
	      transferInto(element.props, this.props);
	
	      return element;
	    }
	
	  }
	};
	
	module.exports = ReactPropTransferer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 80 */
/*!***********************************************!*\
  !*** ./~/react/lib/ReactPropTypeLocations.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */
	
	"use strict";
	
	var keyMirror = __webpack_require__(/*! ./keyMirror */ 76);
	
	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});
	
	module.exports = ReactPropTypeLocations;


/***/ },
/* 81 */
/*!***************************************************!*\
  !*** ./~/react/lib/ReactPropTypeLocationNames.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */
	
	"use strict";
	
	var ReactPropTypeLocationNames = {};
	
	if ("production" !== process.env.NODE_ENV) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}
	
	module.exports = ReactPropTypeLocationNames;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 82 */
/*!**************************************************!*\
  !*** ./~/react/lib/instantiateReactComponent.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule instantiateReactComponent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactLegacyElement = __webpack_require__(/*! ./ReactLegacyElement */ 43);
	var ReactNativeComponent = __webpack_require__(/*! ./ReactNativeComponent */ 128);
	var ReactEmptyComponent = __webpack_require__(/*! ./ReactEmptyComponent */ 77);
	
	/**
	 * Given an `element` create an instance that will actually be mounted.
	 *
	 * @param {object} element
	 * @param {*} parentCompositeType The composite type that resolved this.
	 * @return {object} A new instance of the element's constructor.
	 * @protected
	 */
	function instantiateReactComponent(element, parentCompositeType) {
	  var instance;
	
	  if ("production" !== process.env.NODE_ENV) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      element && (typeof element.type === 'function' ||
	                     typeof element.type === 'string'),
	      'Only functions or strings can be mounted as React components.'
	    ) : null);
	
	    // Resolve mock instances
	    if (element.type._mockedReactClassConstructor) {
	      // If this is a mocked class, we treat the legacy factory as if it was the
	      // class constructor for future proofing unit tests. Because this might
	      // be mocked as a legacy factory, we ignore any warnings triggerd by
	      // this temporary hack.
	      ReactLegacyElement._isLegacyCallWarningEnabled = false;
	      try {
	        instance = new element.type._mockedReactClassConstructor(
	          element.props
	        );
	      } finally {
	        ReactLegacyElement._isLegacyCallWarningEnabled = true;
	      }
	
	      // If the mock implementation was a legacy factory, then it returns a
	      // element. We need to turn this into a real component instance.
	      if (ReactElement.isValidElement(instance)) {
	        instance = new instance.type(instance.props);
	      }
	
	      var render = instance.render;
	      if (!render) {
	        // For auto-mocked factories, the prototype isn't shimmed and therefore
	        // there is no render function on the instance. We replace the whole
	        // component with an empty component instance instead.
	        element = ReactEmptyComponent.getEmptyComponent();
	      } else {
	        if (render._isMockFunction && !render._getMockImplementation()) {
	          // Auto-mocked components may have a prototype with a mocked render
	          // function. For those, we'll need to mock the result of the render
	          // since we consider undefined to be invalid results from render.
	          render.mockImplementation(
	            ReactEmptyComponent.getEmptyComponent
	          );
	        }
	        instance.construct(element);
	        return instance;
	      }
	    }
	  }
	
	  // Special case string values
	  if (typeof element.type === 'string') {
	    instance = ReactNativeComponent.createInstanceForTag(
	      element.type,
	      element.props,
	      parentCompositeType
	    );
	  } else {
	    // Normal case for non-mocks and non-strings
	    instance = new element.type(element.props);
	  }
	
	  if ("production" !== process.env.NODE_ENV) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      typeof instance.construct === 'function' &&
	      typeof instance.mountComponent === 'function' &&
	      typeof instance.receiveComponent === 'function',
	      'Only React Components can be mounted.'
	    ) : null);
	  }
	
	  // This actually sets up the internal instance. This will become decoupled
	  // from the public instance in a future diff.
	  instance.construct(element);
	
	  return instance;
	}
	
	module.exports = instantiateReactComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 83 */
/*!******************************!*\
  !*** ./~/react/lib/keyOf.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without loosing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	
	module.exports = keyOf;


/***/ },
/* 84 */
/*!***************************************!*\
  !*** ./~/react/lib/monitorCodeUse.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule monitorCodeUse
	 */
	
	"use strict";
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * Provides open-source compatible instrumentation for monitoring certain API
	 * uses before we're ready to issue a warning or refactor. It accepts an event
	 * name which may only contain the characters [a-z0-9_] and an optional data
	 * object with further information.
	 */
	
	function monitorCodeUse(eventName, data) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    eventName && !/[^a-z0-9_]/.test(eventName),
	    'You must provide an eventName using only the characters [a-z0-9_]'
	  ) : invariant(eventName && !/[^a-z0-9_]/.test(eventName)));
	}
	
	module.exports = monitorCodeUse;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 85 */
/*!**********************************!*\
  !*** ./~/react/lib/mapObject.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule mapObject
	 */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}
	
	module.exports = mapObject;


/***/ },
/* 86 */
/*!***************************************************!*\
  !*** ./~/react/lib/shouldUpdateReactComponent.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shouldUpdateReactComponent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	/**
	 * Given a `prevElement` and `nextElement`, determines if the existing
	 * instance should be updated as opposed to being destroyed or replaced by a new
	 * instance. Both arguments are elements. This ensures that this logic can
	 * operate on stateless trees without any backing instance.
	 *
	 * @param {?object} prevElement
	 * @param {?object} nextElement
	 * @return {boolean} True if the existing instance should be updated.
	 * @protected
	 */
	function shouldUpdateReactComponent(prevElement, nextElement) {
	  if (prevElement && nextElement &&
	      prevElement.type === nextElement.type &&
	      prevElement.key === nextElement.key &&
	      prevElement._owner === nextElement._owner) {
	    return true;
	  }
	  return false;
	}
	
	module.exports = shouldUpdateReactComponent;


/***/ },
/* 87 */
/*!**********************************************!*\
  !*** ./~/react/lib/CSSPropertyOperations.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSPropertyOperations
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var CSSProperty = __webpack_require__(/*! ./CSSProperty */ 129);
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	
	var camelizeStyleName = __webpack_require__(/*! ./camelizeStyleName */ 130);
	var dangerousStyleValue = __webpack_require__(/*! ./dangerousStyleValue */ 131);
	var hyphenateStyleName = __webpack_require__(/*! ./hyphenateStyleName */ 132);
	var memoizeStringOnly = __webpack_require__(/*! ./memoizeStringOnly */ 70);
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	var processStyleName = memoizeStringOnly(function(styleName) {
	  return hyphenateStyleName(styleName);
	});
	
	var styleFloatAccessor = 'cssFloat';
	if (ExecutionEnvironment.canUseDOM) {
	  // IE8 only supports accessing cssFloat (standard) as styleFloat
	  if (document.documentElement.style.cssFloat === undefined) {
	    styleFloatAccessor = 'styleFloat';
	  }
	}
	
	if ("production" !== process.env.NODE_ENV) {
	  var warnedStyleNames = {};
	
	  var warnHyphenatedStyleName = function(name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }
	
	    warnedStyleNames[name] = true;
	    ("production" !== process.env.NODE_ENV ? warning(
	      false,
	      'Unsupported style property ' + name + '. Did you mean ' +
	      camelizeStyleName(name) + '?'
	    ) : null);
	  };
	}
	
	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {
	
	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @return {?string}
	   */
	  createMarkupForStyles: function(styles) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if ("production" !== process.env.NODE_ENV) {
	        if (styleName.indexOf('-') > -1) {
	          warnHyphenatedStyleName(styleName);
	        }
	      }
	      var styleValue = styles[styleName];
	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue) + ';';
	      }
	    }
	    return serialized || null;
	  },
	
	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   */
	  setValueForStyles: function(node, styles) {
	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if ("production" !== process.env.NODE_ENV) {
	        if (styleName.indexOf('-') > -1) {
	          warnHyphenatedStyleName(styleName);
	        }
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName]);
	      if (styleName === 'float') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }
	
	};
	
	module.exports = CSSPropertyOperations;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 88 */
/*!***************************************************!*\
  !*** ./~/react/lib/ReactBrowserComponentMixin.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserComponentMixin
	 */
	
	"use strict";
	
	var ReactEmptyComponent = __webpack_require__(/*! ./ReactEmptyComponent */ 77);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 44);
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	var ReactBrowserComponentMixin = {
	  /**
	   * Returns the DOM node rendered by this component.
	   *
	   * @return {DOMElement} The root node of this component.
	   * @final
	   * @protected
	   */
	  getDOMNode: function() {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      this.isMounted(),
	      'getDOMNode(): A component must be mounted to have a DOM node.'
	    ) : invariant(this.isMounted()));
	    if (ReactEmptyComponent.isNullComponentID(this._rootNodeID)) {
	      return null;
	    }
	    return ReactMount.getNode(this._rootNodeID);
	  }
	};
	
	module.exports = ReactBrowserComponentMixin;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 89 */
/*!*************************************************!*\
  !*** ./~/react/lib/ReactBrowserEventEmitter.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserEventEmitter
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 66);
	var EventPluginHub = __webpack_require__(/*! ./EventPluginHub */ 135);
	var EventPluginRegistry = __webpack_require__(/*! ./EventPluginRegistry */ 138);
	var ReactEventEmitterMixin = __webpack_require__(/*! ./ReactEventEmitterMixin */ 139);
	var ViewportMetrics = __webpack_require__(/*! ./ViewportMetrics */ 140);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var isEventSupported = __webpack_require__(/*! ./isEventSupported */ 90);
	
	/**
	 * Summary of `ReactBrowserEventEmitter` event handling:
	 *
	 *  - Top-level delegation is used to trap most native browser events. This
	 *    may only occur in the main thread and is the responsibility of
	 *    ReactEventListener, which is injected and can therefore support pluggable
	 *    event sources. This is the only work that occurs in the main thread.
	 *
	 *  - We normalize and de-duplicate events to account for browser quirks. This
	 *    may be done in the worker thread.
	 *
	 *  - Forward these native events (with the associated top-level type used to
	 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
	 *    to extract any synthetic events.
	 *
	 *  - The `EventPluginHub` will then process each event by annotating them with
	 *    "dispatches", a sequence of listeners and IDs that care about that event.
	 *
	 *  - The `EventPluginHub` then dispatches the events.
	 *
	 * Overview of React and the event system:
	 *
	 * +------------+    .
	 * |    DOM     |    .
	 * +------------+    .
	 *       |           .
	 *       v           .
	 * +------------+    .
	 * | ReactEvent |    .
	 * |  Listener  |    .
	 * +------------+    .                         +-----------+
	 *       |           .               +--------+|SimpleEvent|
	 *       |           .               |         |Plugin     |
	 * +-----|------+    .               v         +-----------+
	 * |     |      |    .    +--------------+                    +------------+
	 * |     +-----------.--->|EventPluginHub|                    |    Event   |
	 * |            |    .    |              |     +-----------+  | Propagators|
	 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
	 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
	 * |            |    .    |              |     +-----------+  |  utilities |
	 * |     +-----------.--->|              |                    +------------+
	 * |     |      |    .    +--------------+
	 * +-----|------+    .                ^        +-----------+
	 *       |           .                |        |Enter/Leave|
	 *       +           .                +-------+|Plugin     |
	 * +-------------+   .                         +-----------+
	 * | application |   .
	 * |-------------|   .
	 * |             |   .
	 * |             |   .
	 * +-------------+   .
	 *                   .
	 *    React Core     .  General Purpose Event Plugin System
	 */
	
	var alreadyListeningTo = {};
	var isMonitoringScrollValue = false;
	var reactTopListenersCounter = 0;
	
	// For events like 'submit' which don't consistently bubble (which we trap at a
	// lower node than `document`), binding at `document` would cause duplicate
	// events so we don't include them here
	var topEventMapping = {
	  topBlur: 'blur',
	  topChange: 'change',
	  topClick: 'click',
	  topCompositionEnd: 'compositionend',
	  topCompositionStart: 'compositionstart',
	  topCompositionUpdate: 'compositionupdate',
	  topContextMenu: 'contextmenu',
	  topCopy: 'copy',
	  topCut: 'cut',
	  topDoubleClick: 'dblclick',
	  topDrag: 'drag',
	  topDragEnd: 'dragend',
	  topDragEnter: 'dragenter',
	  topDragExit: 'dragexit',
	  topDragLeave: 'dragleave',
	  topDragOver: 'dragover',
	  topDragStart: 'dragstart',
	  topDrop: 'drop',
	  topFocus: 'focus',
	  topInput: 'input',
	  topKeyDown: 'keydown',
	  topKeyPress: 'keypress',
	  topKeyUp: 'keyup',
	  topMouseDown: 'mousedown',
	  topMouseMove: 'mousemove',
	  topMouseOut: 'mouseout',
	  topMouseOver: 'mouseover',
	  topMouseUp: 'mouseup',
	  topPaste: 'paste',
	  topScroll: 'scroll',
	  topSelectionChange: 'selectionchange',
	  topTextInput: 'textInput',
	  topTouchCancel: 'touchcancel',
	  topTouchEnd: 'touchend',
	  topTouchMove: 'touchmove',
	  topTouchStart: 'touchstart',
	  topWheel: 'wheel'
	};
	
	/**
	 * To ensure no conflicts with other potential React instances on the page
	 */
	var topListenersIDKey = "_reactListenersID" + String(Math.random()).slice(2);
	
	function getListeningForDocument(mountAt) {
	  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
	  // directly.
	  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
	    mountAt[topListenersIDKey] = reactTopListenersCounter++;
	    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
	  }
	  return alreadyListeningTo[mountAt[topListenersIDKey]];
	}
	
	/**
	 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
	 * example:
	 *
	 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
	 *
	 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
	 *
	 * @internal
	 */
	var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {
	
	  /**
	   * Injectable event backend
	   */
	  ReactEventListener: null,
	
	  injection: {
	    /**
	     * @param {object} ReactEventListener
	     */
	    injectReactEventListener: function(ReactEventListener) {
	      ReactEventListener.setHandleTopLevel(
	        ReactBrowserEventEmitter.handleTopLevel
	      );
	      ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
	    }
	  },
	
	  /**
	   * Sets whether or not any created callbacks should be enabled.
	   *
	   * @param {boolean} enabled True if callbacks should be enabled.
	   */
	  setEnabled: function(enabled) {
	    if (ReactBrowserEventEmitter.ReactEventListener) {
	      ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
	    }
	  },
	
	  /**
	   * @return {boolean} True if callbacks are enabled.
	   */
	  isEnabled: function() {
	    return !!(
	      ReactBrowserEventEmitter.ReactEventListener &&
	      ReactBrowserEventEmitter.ReactEventListener.isEnabled()
	    );
	  },
	
	  /**
	   * We listen for bubbled touch events on the document object.
	   *
	   * Firefox v8.01 (and possibly others) exhibited strange behavior when
	   * mounting `onmousemove` events at some node that was not the document
	   * element. The symptoms were that if your mouse is not moving over something
	   * contained within that mount point (for example on the background) the
	   * top-level listeners for `onmousemove` won't be called. However, if you
	   * register the `mousemove` on the document object, then it will of course
	   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
	   * top-level listeners to the document object only, at least for these
	   * movement types of events and possibly all events.
	   *
	   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	   *
	   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
	   * they bubble to document.
	   *
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {object} contentDocumentHandle Document which owns the container
	   */
	  listenTo: function(registrationName, contentDocumentHandle) {
	    var mountAt = contentDocumentHandle;
	    var isListening = getListeningForDocument(mountAt);
	    var dependencies = EventPluginRegistry.
	      registrationNameDependencies[registrationName];
	
	    var topLevelTypes = EventConstants.topLevelTypes;
	    for (var i = 0, l = dependencies.length; i < l; i++) {
	      var dependency = dependencies[i];
	      if (!(
	            isListening.hasOwnProperty(dependency) &&
	            isListening[dependency]
	          )) {
	        if (dependency === topLevelTypes.topWheel) {
	          if (isEventSupported('wheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topWheel,
	              'wheel',
	              mountAt
	            );
	          } else if (isEventSupported('mousewheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topWheel,
	              'mousewheel',
	              mountAt
	            );
	          } else {
	            // Firefox needs to capture a different mouse scroll event.
	            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topWheel,
	              'DOMMouseScroll',
	              mountAt
	            );
	          }
	        } else if (dependency === topLevelTypes.topScroll) {
	
	          if (isEventSupported('scroll', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	              topLevelTypes.topScroll,
	              'scroll',
	              mountAt
	            );
	          } else {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topScroll,
	              'scroll',
	              ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE
	            );
	          }
	        } else if (dependency === topLevelTypes.topFocus ||
	            dependency === topLevelTypes.topBlur) {
	
	          if (isEventSupported('focus', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	              topLevelTypes.topFocus,
	              'focus',
	              mountAt
	            );
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	              topLevelTypes.topBlur,
	              'blur',
	              mountAt
	            );
	          } else if (isEventSupported('focusin')) {
	            // IE has `focusin` and `focusout` events which bubble.
	            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topFocus,
	              'focusin',
	              mountAt
	            );
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topBlur,
	              'focusout',
	              mountAt
	            );
	          }
	
	          // to make sure blur and focus event listeners are only attached once
	          isListening[topLevelTypes.topBlur] = true;
	          isListening[topLevelTypes.topFocus] = true;
	        } else if (topEventMapping.hasOwnProperty(dependency)) {
	          ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	            dependency,
	            topEventMapping[dependency],
	            mountAt
	          );
	        }
	
	        isListening[dependency] = true;
	      }
	    }
	  },
	
	  trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	      topLevelType,
	      handlerBaseName,
	      handle
	    );
	  },
	
	  trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	      topLevelType,
	      handlerBaseName,
	      handle
	    );
	  },
	
	  /**
	   * Listens to window scroll and resize events. We cache scroll values so that
	   * application code can access them without triggering reflows.
	   *
	   * NOTE: Scroll events do not bubble.
	   *
	   * @see http://www.quirksmode.org/dom/events/scroll.html
	   */
	  ensureScrollValueMonitoring: function(){
	    if (!isMonitoringScrollValue) {
	      var refresh = ViewportMetrics.refreshScrollValues;
	      ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
	      isMonitoringScrollValue = true;
	    }
	  },
	
	  eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,
	
	  registrationNameModules: EventPluginHub.registrationNameModules,
	
	  putListener: EventPluginHub.putListener,
	
	  getListener: EventPluginHub.getListener,
	
	  deleteListener: EventPluginHub.deleteListener,
	
	  deleteAllListeners: EventPluginHub.deleteAllListeners
	
	});
	
	module.exports = ReactBrowserEventEmitter;


/***/ },
/* 90 */
/*!*****************************************!*\
  !*** ./~/react/lib/isEventSupported.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventSupported
	 */
	
	"use strict";
	
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	
	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
	  useHasFeature =
	    document.implementation &&
	    document.implementation.hasFeature &&
	    // always returns true in newer browsers as per the standard.
	    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	    document.implementation.hasFeature('', '') !== true;
	}
	
	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!ExecutionEnvironment.canUseDOM ||
	      capture && !('addEventListener' in document)) {
	    return false;
	  }
	
	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = eventName in document;
	
	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }
	
	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }
	
	  return isSupported;
	}
	
	module.exports = isEventSupported;


/***/ },
/* 91 */
/*!***********************************************!*\
  !*** ./~/react/lib/BeforeInputEventPlugin.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013 Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BeforeInputEventPlugin
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 66);
	var EventPropagators = __webpack_require__(/*! ./EventPropagators */ 133);
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	var SyntheticInputEvent = __webpack_require__(/*! ./SyntheticInputEvent */ 134);
	
	var keyOf = __webpack_require__(/*! ./keyOf */ 83);
	
	var canUseTextInputEvent = (
	  ExecutionEnvironment.canUseDOM &&
	  'TextEvent' in window &&
	  !('documentMode' in document || isPresto())
	);
	
	/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */
	function isPresto() {
	  var opera = window.opera;
	  return (
	    typeof opera === 'object' &&
	    typeof opera.version === 'function' &&
	    parseInt(opera.version(), 10) <= 12
	  );
	}
	
	var SPACEBAR_CODE = 32;
	var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	// Events and their corresponding property names.
	var eventTypes = {
	  beforeInput: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onBeforeInput: null}),
	      captured: keyOf({onBeforeInputCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topCompositionEnd,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topTextInput,
	      topLevelTypes.topPaste
	    ]
	  }
	};
	
	// Track characters inserted via keypress and composition events.
	var fallbackChars = null;
	
	// Track whether we've ever handled a keypress on the space key.
	var hasSpaceKeypress = false;
	
	/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
	function isKeypressCommand(nativeEvent) {
	  return (
	    (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
	    // ctrlKey && altKey is equivalent to AltGr, and is not a command.
	    !(nativeEvent.ctrlKey && nativeEvent.altKey)
	  );
	}
	
	/**
	 * Create an `onBeforeInput` event to match
	 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
	 *
	 * This event plugin is based on the native `textInput` event
	 * available in Chrome, Safari, Opera, and IE. This event fires after
	 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
	 *
	 * `beforeInput` is spec'd but not implemented in any browsers, and
	 * the `input` event does not provide any useful information about what has
	 * actually been added, contrary to the spec. Thus, `textInput` is the best
	 * available event to identify the characters that have actually been inserted
	 * into the target node.
	 */
	var BeforeInputEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	
	    var chars;
	
	    if (canUseTextInputEvent) {
	      switch (topLevelType) {
	        case topLevelTypes.topKeyPress:
	          /**
	           * If native `textInput` events are available, our goal is to make
	           * use of them. However, there is a special case: the spacebar key.
	           * In Webkit, preventing default on a spacebar `textInput` event
	           * cancels character insertion, but it *also* causes the browser
	           * to fall back to its default spacebar behavior of scrolling the
	           * page.
	           *
	           * Tracking at:
	           * https://code.google.com/p/chromium/issues/detail?id=355103
	           *
	           * To avoid this issue, use the keypress event as if no `textInput`
	           * event is available.
	           */
	          var which = nativeEvent.which;
	          if (which !== SPACEBAR_CODE) {
	            return;
	          }
	
	          hasSpaceKeypress = true;
	          chars = SPACEBAR_CHAR;
	          break;
	
	        case topLevelTypes.topTextInput:
	          // Record the characters to be added to the DOM.
	          chars = nativeEvent.data;
	
	          // If it's a spacebar character, assume that we have already handled
	          // it at the keypress level and bail immediately. Android Chrome
	          // doesn't give us keycodes, so we need to blacklist it.
	          if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
	            return;
	          }
	
	          // Otherwise, carry on.
	          break;
	
	        default:
	          // For other native event types, do nothing.
	          return;
	      }
	    } else {
	      switch (topLevelType) {
	        case topLevelTypes.topPaste:
	          // If a paste event occurs after a keypress, throw out the input
	          // chars. Paste events should not lead to BeforeInput events.
	          fallbackChars = null;
	          break;
	        case topLevelTypes.topKeyPress:
	          /**
	           * As of v27, Firefox may fire keypress events even when no character
	           * will be inserted. A few possibilities:
	           *
	           * - `which` is `0`. Arrow keys, Esc key, etc.
	           *
	           * - `which` is the pressed key code, but no char is available.
	           *   Ex: 'AltGr + d` in Polish. There is no modified character for
	           *   this key combination and no character is inserted into the
	           *   document, but FF fires the keypress for char code `100` anyway.
	           *   No `input` event will occur.
	           *
	           * - `which` is the pressed key code, but a command combination is
	           *   being used. Ex: `Cmd+C`. No character is inserted, and no
	           *   `input` event will occur.
	           */
	          if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
	            fallbackChars = String.fromCharCode(nativeEvent.which);
	          }
	          break;
	        case topLevelTypes.topCompositionEnd:
	          fallbackChars = nativeEvent.data;
	          break;
	      }
	
	      // If no changes have occurred to the fallback string, no relevant
	      // event has fired and we're done.
	      if (fallbackChars === null) {
	        return;
	      }
	
	      chars = fallbackChars;
	    }
	
	    // If no characters are being inserted, no BeforeInput event should
	    // be fired.
	    if (!chars) {
	      return;
	    }
	
	    var event = SyntheticInputEvent.getPooled(
	      eventTypes.beforeInput,
	      topLevelTargetID,
	      nativeEvent
	    );
	
	    event.data = chars;
	    fallbackChars = null;
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	    return event;
	  }
	};
	
	module.exports = BeforeInputEventPlugin;


/***/ },
/* 92 */
/*!******************************************!*\
  !*** ./~/react/lib/ChangeEventPlugin.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ChangeEventPlugin
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 66);
	var EventPluginHub = __webpack_require__(/*! ./EventPluginHub */ 135);
	var EventPropagators = __webpack_require__(/*! ./EventPropagators */ 133);
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 75);
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 136);
	
	var isEventSupported = __webpack_require__(/*! ./isEventSupported */ 90);
	var isTextInputElement = __webpack_require__(/*! ./isTextInputElement */ 137);
	var keyOf = __webpack_require__(/*! ./keyOf */ 83);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var eventTypes = {
	  change: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onChange: null}),
	      captured: keyOf({onChangeCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topChange,
	      topLevelTypes.topClick,
	      topLevelTypes.topFocus,
	      topLevelTypes.topInput,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topSelectionChange
	    ]
	  }
	};
	
	/**
	 * For IE shims
	 */
	var activeElement = null;
	var activeElementID = null;
	var activeElementValue = null;
	var activeElementValueProp = null;
	
	/**
	 * SECTION: handle `change` event
	 */
	function shouldUseChangeEvent(elem) {
	  return (
	    elem.nodeName === 'SELECT' ||
	    (elem.nodeName === 'INPUT' && elem.type === 'file')
	  );
	}
	
	var doesChangeEventBubble = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // See `handleChange` comment below
	  doesChangeEventBubble = isEventSupported('change') && (
	    !('documentMode' in document) || document.documentMode > 8
	  );
	}
	
	function manualDispatchChangeEvent(nativeEvent) {
	  var event = SyntheticEvent.getPooled(
	    eventTypes.change,
	    activeElementID,
	    nativeEvent
	  );
	  EventPropagators.accumulateTwoPhaseDispatches(event);
	
	  // If change and propertychange bubbled, we'd just bind to it like all the
	  // other events and have it go through ReactBrowserEventEmitter. Since it
	  // doesn't, we manually listen for the events and so we have to enqueue and
	  // process the abstract event manually.
	  //
	  // Batching is necessary here in order to ensure that all event handlers run
	  // before the next rerender (including event handlers attached to ancestor
	  // elements instead of directly on the input). Without this, controlled
	  // components don't work properly in conjunction with event bubbling because
	  // the component is rerendered and the value reverted before all the event
	  // handlers can run. See https://github.com/facebook/react/issues/708.
	  ReactUpdates.batchedUpdates(runEventInBatch, event);
	}
	
	function runEventInBatch(event) {
	  EventPluginHub.enqueueEvents(event);
	  EventPluginHub.processEventQueue();
	}
	
	function startWatchingForChangeEventIE8(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElement.attachEvent('onchange', manualDispatchChangeEvent);
	}
	
	function stopWatchingForChangeEventIE8() {
	  if (!activeElement) {
	    return;
	  }
	  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
	  activeElement = null;
	  activeElementID = null;
	}
	
	function getTargetIDForChangeEvent(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topChange) {
	    return topLevelTargetID;
	  }
	}
	function handleEventsForChangeEventIE8(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForChangeEventIE8();
	    startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForChangeEventIE8();
	  }
	}
	
	
	/**
	 * SECTION: handle `input` event
	 */
	var isInputEventSupported = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // IE9 claims to support the input event but fails to trigger it when
	  // deleting text, so we ignore its input events
	  isInputEventSupported = isEventSupported('input') && (
	    !('documentMode' in document) || document.documentMode > 9
	  );
	}
	
	/**
	 * (For old IE.) Replacement getter/setter for the `value` property that gets
	 * set on the active element.
	 */
	var newValueProp =  {
	  get: function() {
	    return activeElementValueProp.get.call(this);
	  },
	  set: function(val) {
	    // Cast to a string so we can do equality checks.
	    activeElementValue = '' + val;
	    activeElementValueProp.set.call(this, val);
	  }
	};
	
	/**
	 * (For old IE.) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
	function startWatchingForValueChange(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElementValue = target.value;
	  activeElementValueProp = Object.getOwnPropertyDescriptor(
	    target.constructor.prototype,
	    'value'
	  );
	
	  Object.defineProperty(activeElement, 'value', newValueProp);
	  activeElement.attachEvent('onpropertychange', handlePropertyChange);
	}
	
	/**
	 * (For old IE.) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
	function stopWatchingForValueChange() {
	  if (!activeElement) {
	    return;
	  }
	
	  // delete restores the original property definition
	  delete activeElement.value;
	  activeElement.detachEvent('onpropertychange', handlePropertyChange);
	
	  activeElement = null;
	  activeElementID = null;
	  activeElementValue = null;
	  activeElementValueProp = null;
	}
	
	/**
	 * (For old IE.) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
	function handlePropertyChange(nativeEvent) {
	  if (nativeEvent.propertyName !== 'value') {
	    return;
	  }
	  var value = nativeEvent.srcElement.value;
	  if (value === activeElementValue) {
	    return;
	  }
	  activeElementValue = value;
	
	  manualDispatchChangeEvent(nativeEvent);
	}
	
	/**
	 * If a `change` event should be fired, returns the target's ID.
	 */
	function getTargetIDForInputEvent(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topInput) {
	    // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
	    // what we want so fall through here and trigger an abstract event
	    return topLevelTargetID;
	  }
	}
	
	// For IE8 and IE9.
	function handleEventsForInputEventIE(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // In IE8, we can capture almost all .value changes by adding a
	    // propertychange handler and looking for events with propertyName
	    // equal to 'value'
	    // In IE9, propertychange fires for most input events but is buggy and
	    // doesn't fire when text is deleted, but conveniently, selectionchange
	    // appears to fire in all of the remaining cases so we catch those and
	    // forward the event if the value has changed
	    // In either case, we don't want to call the event handler if the value
	    // is changed from JS so we redefine a setter for `.value` that updates
	    // our activeElementValue variable, allowing us to ignore those changes
	    //
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForValueChange();
	    startWatchingForValueChange(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForValueChange();
	  }
	}
	
	// For IE8 and IE9.
	function getTargetIDForInputEventIE(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topSelectionChange ||
	      topLevelType === topLevelTypes.topKeyUp ||
	      topLevelType === topLevelTypes.topKeyDown) {
	    // On the selectionchange event, the target is just document which isn't
	    // helpful for us so just check activeElement instead.
	    //
	    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
	    // propertychange on the first input event after setting `value` from a
	    // script and fires only keydown, keypress, keyup. Catching keyup usually
	    // gets it and catching keydown lets us fire an event for the first
	    // keystroke if user does a key repeat (it'll be a little delayed: right
	    // before the second keystroke). Other input methods (e.g., paste) seem to
	    // fire selectionchange normally.
	    if (activeElement && activeElement.value !== activeElementValue) {
	      activeElementValue = activeElement.value;
	      return activeElementID;
	    }
	  }
	}
	
	
	/**
	 * SECTION: handle `click` event
	 */
	function shouldUseClickEvent(elem) {
	  // Use the `click` event to detect changes to checkbox and radio inputs.
	  // This approach works across all browsers, whereas `change` does not fire
	  // until `blur` in IE8.
	  return (
	    elem.nodeName === 'INPUT' &&
	    (elem.type === 'checkbox' || elem.type === 'radio')
	  );
	}
	
	function getTargetIDForClickEvent(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topClick) {
	    return topLevelTargetID;
	  }
	}
	
	/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
	var ChangeEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	
	    var getTargetIDFunc, handleEventFunc;
	    if (shouldUseChangeEvent(topLevelTarget)) {
	      if (doesChangeEventBubble) {
	        getTargetIDFunc = getTargetIDForChangeEvent;
	      } else {
	        handleEventFunc = handleEventsForChangeEventIE8;
	      }
	    } else if (isTextInputElement(topLevelTarget)) {
	      if (isInputEventSupported) {
	        getTargetIDFunc = getTargetIDForInputEvent;
	      } else {
	        getTargetIDFunc = getTargetIDForInputEventIE;
	        handleEventFunc = handleEventsForInputEventIE;
	      }
	    } else if (shouldUseClickEvent(topLevelTarget)) {
	      getTargetIDFunc = getTargetIDForClickEvent;
	    }
	
	    if (getTargetIDFunc) {
	      var targetID = getTargetIDFunc(
	        topLevelType,
	        topLevelTarget,
	        topLevelTargetID
	      );
	      if (targetID) {
	        var event = SyntheticEvent.getPooled(
	          eventTypes.change,
	          targetID,
	          nativeEvent
	        );
	        EventPropagators.accumulateTwoPhaseDispatches(event);
	        return event;
	      }
	    }
	
	    if (handleEventFunc) {
	      handleEventFunc(
	        topLevelType,
	        topLevelTarget,
	        topLevelTargetID
	      );
	    }
	  }
	
	};
	
	module.exports = ChangeEventPlugin;


/***/ },
/* 93 */
/*!*********************************************!*\
  !*** ./~/react/lib/ClientReactRootIndex.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ClientReactRootIndex
	 * @typechecks
	 */
	
	"use strict";
	
	var nextReactRootIndex = 0;
	
	var ClientReactRootIndex = {
	  createReactRootIndex: function() {
	    return nextReactRootIndex++;
	  }
	};
	
	module.exports = ClientReactRootIndex;


/***/ },
/* 94 */
/*!***********************************************!*\
  !*** ./~/react/lib/CompositionEventPlugin.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CompositionEventPlugin
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 66);
	var EventPropagators = __webpack_require__(/*! ./EventPropagators */ 133);
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	var ReactInputSelection = __webpack_require__(/*! ./ReactInputSelection */ 141);
	var SyntheticCompositionEvent = __webpack_require__(/*! ./SyntheticCompositionEvent */ 142);
	
	var getTextContentAccessor = __webpack_require__(/*! ./getTextContentAccessor */ 143);
	var keyOf = __webpack_require__(/*! ./keyOf */ 83);
	
	var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
	var START_KEYCODE = 229;
	
	var useCompositionEvent = (
	  ExecutionEnvironment.canUseDOM &&
	  'CompositionEvent' in window
	);
	
	// In IE9+, we have access to composition events, but the data supplied
	// by the native compositionend event may be incorrect. In Korean, for example,
	// the compositionend event contains only one character regardless of
	// how many characters have been composed since compositionstart.
	// We therefore use the fallback data while still using the native
	// events as triggers.
	var useFallbackData = (
	  !useCompositionEvent ||
	  (
	    'documentMode' in document &&
	    document.documentMode > 8 &&
	    document.documentMode <= 11
	  )
	);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	var currentComposition = null;
	
	// Events and their corresponding property names.
	var eventTypes = {
	  compositionEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCompositionEnd: null}),
	      captured: keyOf({onCompositionEndCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topCompositionEnd,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topMouseDown
	    ]
	  },
	  compositionStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCompositionStart: null}),
	      captured: keyOf({onCompositionStartCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topCompositionStart,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topMouseDown
	    ]
	  },
	  compositionUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCompositionUpdate: null}),
	      captured: keyOf({onCompositionUpdateCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topCompositionUpdate,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topMouseDown
	    ]
	  }
	};
	
	/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
	function getCompositionEventType(topLevelType) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionStart:
	      return eventTypes.compositionStart;
	    case topLevelTypes.topCompositionEnd:
	      return eventTypes.compositionEnd;
	    case topLevelTypes.topCompositionUpdate:
	      return eventTypes.compositionUpdate;
	  }
	}
	
	/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackStart(topLevelType, nativeEvent) {
	  return (
	    topLevelType === topLevelTypes.topKeyDown &&
	    nativeEvent.keyCode === START_KEYCODE
	  );
	}
	
	/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackEnd(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topKeyUp:
	      // Command keys insert or clear IME input.
	      return (END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1);
	    case topLevelTypes.topKeyDown:
	      // Expect IME keyCode on each keydown. If we get any other
	      // code we must have exited earlier.
	      return (nativeEvent.keyCode !== START_KEYCODE);
	    case topLevelTypes.topKeyPress:
	    case topLevelTypes.topMouseDown:
	    case topLevelTypes.topBlur:
	      // Events are not possible without cancelling IME.
	      return true;
	    default:
	      return false;
	  }
	}
	
	/**
	 * Helper class stores information about selection and document state
	 * so we can figure out what changed at a later date.
	 *
	 * @param {DOMEventTarget} root
	 */
	function FallbackCompositionState(root) {
	  this.root = root;
	  this.startSelection = ReactInputSelection.getSelection(root);
	  this.startValue = this.getText();
	}
	
	/**
	 * Get current text of input.
	 *
	 * @return {string}
	 */
	FallbackCompositionState.prototype.getText = function() {
	  return this.root.value || this.root[getTextContentAccessor()];
	};
	
	/**
	 * Text that has changed since the start of composition.
	 *
	 * @return {string}
	 */
	FallbackCompositionState.prototype.getData = function() {
	  var endValue = this.getText();
	  var prefixLength = this.startSelection.start;
	  var suffixLength = this.startValue.length - this.startSelection.end;
	
	  return endValue.substr(
	    prefixLength,
	    endValue.length - suffixLength - prefixLength
	  );
	};
	
	/**
	 * This plugin creates `onCompositionStart`, `onCompositionUpdate` and
	 * `onCompositionEnd` events on inputs, textareas and contentEditable
	 * nodes.
	 */
	var CompositionEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	
	    var eventType;
	    var data;
	
	    if (useCompositionEvent) {
	      eventType = getCompositionEventType(topLevelType);
	    } else if (!currentComposition) {
	      if (isFallbackStart(topLevelType, nativeEvent)) {
	        eventType = eventTypes.compositionStart;
	      }
	    } else if (isFallbackEnd(topLevelType, nativeEvent)) {
	      eventType = eventTypes.compositionEnd;
	    }
	
	    if (useFallbackData) {
	      // The current composition is stored statically and must not be
	      // overwritten while composition continues.
	      if (!currentComposition && eventType === eventTypes.compositionStart) {
	        currentComposition = new FallbackCompositionState(topLevelTarget);
	      } else if (eventType === eventTypes.compositionEnd) {
	        if (currentComposition) {
	          data = currentComposition.getData();
	          currentComposition = null;
	        }
	      }
	    }
	
	    if (eventType) {
	      var event = SyntheticCompositionEvent.getPooled(
	        eventType,
	        topLevelTargetID,
	        nativeEvent
	      );
	      if (data) {
	        // Inject data generated from fallback path into the synthetic event.
	        // This matches the property of native CompositionEventInterface.
	        event.data = data;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }
	  }
	};
	
	module.exports = CompositionEventPlugin;


/***/ },
/* 95 */
/*!************************************************!*\
  !*** ./~/react/lib/DefaultEventPluginOrder.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultEventPluginOrder
	 */
	
	"use strict";
	
	 var keyOf = __webpack_require__(/*! ./keyOf */ 83);
	
	/**
	 * Module that is injectable into `EventPluginHub`, that specifies a
	 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
	 * plugins, without having to package every one of them. This is better than
	 * having plugins be ordered in the same order that they are injected because
	 * that ordering would be influenced by the packaging order.
	 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
	 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
	 */
	var DefaultEventPluginOrder = [
	  keyOf({ResponderEventPlugin: null}),
	  keyOf({SimpleEventPlugin: null}),
	  keyOf({TapEventPlugin: null}),
	  keyOf({EnterLeaveEventPlugin: null}),
	  keyOf({ChangeEventPlugin: null}),
	  keyOf({SelectEventPlugin: null}),
	  keyOf({CompositionEventPlugin: null}),
	  keyOf({BeforeInputEventPlugin: null}),
	  keyOf({AnalyticsEventPlugin: null}),
	  keyOf({MobileSafariClickEventPlugin: null})
	];
	
	module.exports = DefaultEventPluginOrder;


/***/ },
/* 96 */
/*!**********************************************!*\
  !*** ./~/react/lib/EnterLeaveEventPlugin.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EnterLeaveEventPlugin
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 66);
	var EventPropagators = __webpack_require__(/*! ./EventPropagators */ 133);
	var SyntheticMouseEvent = __webpack_require__(/*! ./SyntheticMouseEvent */ 144);
	
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 44);
	var keyOf = __webpack_require__(/*! ./keyOf */ 83);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	var getFirstReactDOM = ReactMount.getFirstReactDOM;
	
	var eventTypes = {
	  mouseEnter: {
	    registrationName: keyOf({onMouseEnter: null}),
	    dependencies: [
	      topLevelTypes.topMouseOut,
	      topLevelTypes.topMouseOver
	    ]
	  },
	  mouseLeave: {
	    registrationName: keyOf({onMouseLeave: null}),
	    dependencies: [
	      topLevelTypes.topMouseOut,
	      topLevelTypes.topMouseOver
	    ]
	  }
	};
	
	var extractedEvents = [null, null];
	
	var EnterLeaveEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  /**
	   * For almost every interaction we care about, there will be both a top-level
	   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
	   * we do not extract duplicate events. However, moving the mouse into the
	   * browser from outside will not fire a `mouseout` event. In this case, we use
	   * the `mouseover` top-level event.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    if (topLevelType === topLevelTypes.topMouseOver &&
	        (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
	      return null;
	    }
	    if (topLevelType !== topLevelTypes.topMouseOut &&
	        topLevelType !== topLevelTypes.topMouseOver) {
	      // Must not be a mouse in or mouse out - ignoring.
	      return null;
	    }
	
	    var win;
	    if (topLevelTarget.window === topLevelTarget) {
	      // `topLevelTarget` is probably a window object.
	      win = topLevelTarget;
	    } else {
	      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	      var doc = topLevelTarget.ownerDocument;
	      if (doc) {
	        win = doc.defaultView || doc.parentWindow;
	      } else {
	        win = window;
	      }
	    }
	
	    var from, to;
	    if (topLevelType === topLevelTypes.topMouseOut) {
	      from = topLevelTarget;
	      to =
	        getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement) ||
	        win;
	    } else {
	      from = win;
	      to = topLevelTarget;
	    }
	
	    if (from === to) {
	      // Nothing pertains to our managed components.
	      return null;
	    }
	
	    var fromID = from ? ReactMount.getID(from) : '';
	    var toID = to ? ReactMount.getID(to) : '';
	
	    var leave = SyntheticMouseEvent.getPooled(
	      eventTypes.mouseLeave,
	      fromID,
	      nativeEvent
	    );
	    leave.type = 'mouseleave';
	    leave.target = from;
	    leave.relatedTarget = to;
	
	    var enter = SyntheticMouseEvent.getPooled(
	      eventTypes.mouseEnter,
	      toID,
	      nativeEvent
	    );
	    enter.type = 'mouseenter';
	    enter.target = to;
	    enter.relatedTarget = from;
	
	    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);
	
	    extractedEvents[0] = leave;
	    extractedEvents[1] = enter;
	
	    return extractedEvents;
	  }
	
	};
	
	module.exports = EnterLeaveEventPlugin;


/***/ },
/* 97 */
/*!**********************************************!*\
  !*** ./~/react/lib/HTMLDOMPropertyConfig.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule HTMLDOMPropertyConfig
	 */
	
	/*jslint bitwise: true*/
	
	"use strict";
	
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 68);
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	
	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
	var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
	var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
	var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE =
	  DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE =
	  DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
	
	var hasSVG;
	if (ExecutionEnvironment.canUseDOM) {
	  var implementation = document.implementation;
	  hasSVG = (
	    implementation &&
	    implementation.hasFeature &&
	    implementation.hasFeature(
	      'http://www.w3.org/TR/SVG11/feature#BasicStructure',
	      '1.1'
	    )
	  );
	}
	
	
	var HTMLDOMPropertyConfig = {
	  isCustomAttribute: RegExp.prototype.test.bind(
	    /^(data|aria)-[a-z_][a-z\d_.\-]*$/
	  ),
	  Properties: {
	    /**
	     * Standard Properties
	     */
	    accept: null,
	    acceptCharset: null,
	    accessKey: null,
	    action: null,
	    allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    allowTransparency: MUST_USE_ATTRIBUTE,
	    alt: null,
	    async: HAS_BOOLEAN_VALUE,
	    autoComplete: null,
	    // autoFocus is polyfilled/normalized by AutoFocusMixin
	    // autoFocus: HAS_BOOLEAN_VALUE,
	    autoPlay: HAS_BOOLEAN_VALUE,
	    cellPadding: null,
	    cellSpacing: null,
	    charSet: MUST_USE_ATTRIBUTE,
	    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    classID: MUST_USE_ATTRIBUTE,
	    // To set className on SVG elements, it's necessary to use .setAttribute;
	    // this works on HTML elements too in all browsers except IE8. Conveniently,
	    // IE8 doesn't support SVG and so we can simply use the attribute in
	    // browsers that support SVG and the property in browsers that don't,
	    // regardless of whether the element is HTML or SVG.
	    className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
	    cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    colSpan: null,
	    content: null,
	    contentEditable: null,
	    contextMenu: MUST_USE_ATTRIBUTE,
	    controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    coords: null,
	    crossOrigin: null,
	    data: null, // For `<object />` acts as `src`.
	    dateTime: MUST_USE_ATTRIBUTE,
	    defer: HAS_BOOLEAN_VALUE,
	    dir: null,
	    disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    download: HAS_OVERLOADED_BOOLEAN_VALUE,
	    draggable: null,
	    encType: null,
	    form: MUST_USE_ATTRIBUTE,
	    formNoValidate: HAS_BOOLEAN_VALUE,
	    frameBorder: MUST_USE_ATTRIBUTE,
	    height: MUST_USE_ATTRIBUTE,
	    hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    href: null,
	    hrefLang: null,
	    htmlFor: null,
	    httpEquiv: null,
	    icon: null,
	    id: MUST_USE_PROPERTY,
	    label: null,
	    lang: null,
	    list: MUST_USE_ATTRIBUTE,
	    loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    manifest: MUST_USE_ATTRIBUTE,
	    max: null,
	    maxLength: MUST_USE_ATTRIBUTE,
	    media: MUST_USE_ATTRIBUTE,
	    mediaGroup: null,
	    method: null,
	    min: null,
	    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    name: null,
	    noValidate: HAS_BOOLEAN_VALUE,
	    open: null,
	    pattern: null,
	    placeholder: null,
	    poster: null,
	    preload: null,
	    radioGroup: null,
	    readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    rel: null,
	    required: HAS_BOOLEAN_VALUE,
	    role: MUST_USE_ATTRIBUTE,
	    rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    rowSpan: null,
	    sandbox: null,
	    scope: null,
	    scrolling: null,
	    seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    shape: null,
	    size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    sizes: MUST_USE_ATTRIBUTE,
	    span: HAS_POSITIVE_NUMERIC_VALUE,
	    spellCheck: null,
	    src: null,
	    srcDoc: MUST_USE_PROPERTY,
	    srcSet: MUST_USE_ATTRIBUTE,
	    start: HAS_NUMERIC_VALUE,
	    step: null,
	    style: null,
	    tabIndex: null,
	    target: null,
	    title: null,
	    type: null,
	    useMap: null,
	    value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
	    width: MUST_USE_ATTRIBUTE,
	    wmode: MUST_USE_ATTRIBUTE,
	
	    /**
	     * Non-standard Properties
	     */
	    autoCapitalize: null, // Supported in Mobile Safari for keyboard hints
	    autoCorrect: null, // Supported in Mobile Safari for keyboard hints
	    itemProp: MUST_USE_ATTRIBUTE, // Microdata: http://schema.org/docs/gs.html
	    itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE, // Microdata: http://schema.org/docs/gs.html
	    itemType: MUST_USE_ATTRIBUTE, // Microdata: http://schema.org/docs/gs.html
	    property: null // Supports OG in meta tags
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  },
	  DOMPropertyNames: {
	    autoCapitalize: 'autocapitalize',
	    autoComplete: 'autocomplete',
	    autoCorrect: 'autocorrect',
	    autoFocus: 'autofocus',
	    autoPlay: 'autoplay',
	    encType: 'enctype',
	    hrefLang: 'hreflang',
	    radioGroup: 'radiogroup',
	    spellCheck: 'spellcheck',
	    srcDoc: 'srcdoc',
	    srcSet: 'srcset'
	  }
	};
	
	module.exports = HTMLDOMPropertyConfig;


/***/ },
/* 98 */
/*!*****************************************************!*\
  !*** ./~/react/lib/MobileSafariClickEventPlugin.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule MobileSafariClickEventPlugin
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 66);
	
	var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 121);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	/**
	 * Mobile Safari does not fire properly bubble click events on non-interactive
	 * elements, which means delegated click listeners do not fire. The workaround
	 * for this bug involves attaching an empty click listener on the target node.
	 *
	 * This particular plugin works around the bug by attaching an empty click
	 * listener on `touchstart` (which does fire on every element).
	 */
	var MobileSafariClickEventPlugin = {
	
	  eventTypes: null,
	
	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    if (topLevelType === topLevelTypes.topTouchStart) {
	      var target = nativeEvent.target;
	      if (target && !target.onclick) {
	        target.onclick = emptyFunction;
	      }
	    }
	  }
	
	};
	
	module.exports = MobileSafariClickEventPlugin;


/***/ },
/* 99 */
/*!*********************************************************!*\
  !*** ./~/react/lib/ReactComponentBrowserEnvironment.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentBrowserEnvironment
	 */
	
	/*jslint evil: true */
	
	"use strict";
	
	var ReactDOMIDOperations = __webpack_require__(/*! ./ReactDOMIDOperations */ 145);
	var ReactMarkupChecksum = __webpack_require__(/*! ./ReactMarkupChecksum */ 122);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 44);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 46);
	var ReactReconcileTransaction = __webpack_require__(/*! ./ReactReconcileTransaction */ 146);
	
	var getReactRootElementInContainer = __webpack_require__(/*! ./getReactRootElementInContainer */ 120);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	var setInnerHTML = __webpack_require__(/*! ./setInnerHTML */ 147);
	
	
	var ELEMENT_NODE_TYPE = 1;
	var DOC_NODE_TYPE = 9;
	
	
	/**
	 * Abstracts away all functionality of `ReactComponent` requires knowledge of
	 * the browser context.
	 */
	var ReactComponentBrowserEnvironment = {
	  ReactReconcileTransaction: ReactReconcileTransaction,
	
	  BackendIDOperations: ReactDOMIDOperations,
	
	  /**
	   * If a particular environment requires that some resources be cleaned up,
	   * specify this in the injected Mixin. In the DOM, we would likely want to
	   * purge any cached node ID lookups.
	   *
	   * @private
	   */
	  unmountIDFromEnvironment: function(rootNodeID) {
	    ReactMount.purgeID(rootNodeID);
	  },
	
	  /**
	   * @param {string} markup Markup string to place into the DOM Element.
	   * @param {DOMElement} container DOM Element to insert markup into.
	   * @param {boolean} shouldReuseMarkup Should reuse the existing markup in the
	   * container if possible.
	   */
	  mountImageIntoNode: ReactPerf.measure(
	    'ReactComponentBrowserEnvironment',
	    'mountImageIntoNode',
	    function(markup, container, shouldReuseMarkup) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        container && (
	          container.nodeType === ELEMENT_NODE_TYPE ||
	            container.nodeType === DOC_NODE_TYPE
	        ),
	        'mountComponentIntoNode(...): Target container is not valid.'
	      ) : invariant(container && (
	        container.nodeType === ELEMENT_NODE_TYPE ||
	          container.nodeType === DOC_NODE_TYPE
	      )));
	
	      if (shouldReuseMarkup) {
	        if (ReactMarkupChecksum.canReuseMarkup(
	          markup,
	          getReactRootElementInContainer(container))) {
	          return;
	        } else {
	          ("production" !== process.env.NODE_ENV ? invariant(
	            container.nodeType !== DOC_NODE_TYPE,
	            'You\'re trying to render a component to the document using ' +
	            'server rendering but the checksum was invalid. This usually ' +
	            'means you rendered a different component type or props on ' +
	            'the client from the one on the server, or your render() ' +
	            'methods are impure. React cannot handle this case due to ' +
	            'cross-browser quirks by rendering at the document root. You ' +
	            'should look for environment dependent code in your components ' +
	            'and ensure the props are the same client and server side.'
	          ) : invariant(container.nodeType !== DOC_NODE_TYPE));
	
	          if ("production" !== process.env.NODE_ENV) {
	            console.warn(
	              'React attempted to use reuse markup in a container but the ' +
	              'checksum was invalid. This generally means that you are ' +
	              'using server rendering and the markup generated on the ' +
	              'server was not what the client was expecting. React injected ' +
	              'new markup to compensate which works but you have lost many ' +
	              'of the benefits of server rendering. Instead, figure out ' +
	              'why the markup being generated is different on the client ' +
	              'or server.'
	            );
	          }
	        }
	      }
	
	      ("production" !== process.env.NODE_ENV ? invariant(
	        container.nodeType !== DOC_NODE_TYPE,
	        'You\'re trying to render a component to the document but ' +
	          'you didn\'t use server rendering. We can\'t do this ' +
	          'without using server rendering due to cross-browser quirks. ' +
	          'See renderComponentToString() for server rendering.'
	      ) : invariant(container.nodeType !== DOC_NODE_TYPE));
	
	      setInnerHTML(container, markup);
	    }
	  )
	};
	
	module.exports = ReactComponentBrowserEnvironment;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 100 */
/*!*****************************************************!*\
  !*** ./~/react/lib/ReactDefaultBatchingStrategy.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultBatchingStrategy
	 */
	
	"use strict";
	
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 75);
	var Transaction = __webpack_require__(/*! ./Transaction */ 125);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 121);
	
	var RESET_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: function() {
	    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
	  }
	};
	
	var FLUSH_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
	};
	
	var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];
	
	function ReactDefaultBatchingStrategyTransaction() {
	  this.reinitializeTransaction();
	}
	
	assign(
	  ReactDefaultBatchingStrategyTransaction.prototype,
	  Transaction.Mixin,
	  {
	    getTransactionWrappers: function() {
	      return TRANSACTION_WRAPPERS;
	    }
	  }
	);
	
	var transaction = new ReactDefaultBatchingStrategyTransaction();
	
	var ReactDefaultBatchingStrategy = {
	  isBatchingUpdates: false,
	
	  /**
	   * Call the provided function in a context within which calls to `setState`
	   * and friends are batched such that components aren't updated unnecessarily.
	   */
	  batchedUpdates: function(callback, a, b) {
	    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;
	
	    ReactDefaultBatchingStrategy.isBatchingUpdates = true;
	
	    // The code is written this way to avoid extra allocations
	    if (alreadyBatchingUpdates) {
	      callback(a, b);
	    } else {
	      transaction.perform(callback, null, a, b);
	    }
	  }
	};
	
	module.exports = ReactDefaultBatchingStrategy;


/***/ },
/* 101 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactDOMButton.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMButton
	 */
	
	"use strict";
	
	var AutoFocusMixin = __webpack_require__(/*! ./AutoFocusMixin */ 148);
	var ReactBrowserComponentMixin = __webpack_require__(/*! ./ReactBrowserComponentMixin */ 88);
	var ReactCompositeComponent = __webpack_require__(/*! ./ReactCompositeComponent */ 34);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactDOM = __webpack_require__(/*! ./ReactDOM */ 39);
	
	var keyMirror = __webpack_require__(/*! ./keyMirror */ 76);
	
	// Store a reference to the <button> `ReactDOMComponent`. TODO: use string
	var button = ReactElement.createFactory(ReactDOM.button.type);
	
	var mouseListenerNames = keyMirror({
	  onClick: true,
	  onDoubleClick: true,
	  onMouseDown: true,
	  onMouseMove: true,
	  onMouseUp: true,
	  onClickCapture: true,
	  onDoubleClickCapture: true,
	  onMouseDownCapture: true,
	  onMouseMoveCapture: true,
	  onMouseUpCapture: true
	});
	
	/**
	 * Implements a <button> native component that does not receive mouse events
	 * when `disabled` is set.
	 */
	var ReactDOMButton = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMButton',
	
	  mixins: [AutoFocusMixin, ReactBrowserComponentMixin],
	
	  render: function() {
	    var props = {};
	
	    // Copy the props; except the mouse listeners if we're disabled
	    for (var key in this.props) {
	      if (this.props.hasOwnProperty(key) &&
	          (!this.props.disabled || !mouseListenerNames[key])) {
	        props[key] = this.props[key];
	      }
	    }
	
	    return button(props, this.props.children);
	  }
	
	});
	
	module.exports = ReactDOMButton;


/***/ },
/* 102 */
/*!*************************************!*\
  !*** ./~/react/lib/ReactDOMForm.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMForm
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 66);
	var LocalEventTrapMixin = __webpack_require__(/*! ./LocalEventTrapMixin */ 149);
	var ReactBrowserComponentMixin = __webpack_require__(/*! ./ReactBrowserComponentMixin */ 88);
	var ReactCompositeComponent = __webpack_require__(/*! ./ReactCompositeComponent */ 34);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactDOM = __webpack_require__(/*! ./ReactDOM */ 39);
	
	// Store a reference to the <form> `ReactDOMComponent`. TODO: use string
	var form = ReactElement.createFactory(ReactDOM.form.type);
	
	/**
	 * Since onSubmit doesn't bubble OR capture on the top level in IE8, we need
	 * to capture it on the <form> element itself. There are lots of hacks we could
	 * do to accomplish this, but the most reliable is to make <form> a
	 * composite component and use `componentDidMount` to attach the event handlers.
	 */
	var ReactDOMForm = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMForm',
	
	  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],
	
	  render: function() {
	    // TODO: Instead of using `ReactDOM` directly, we should use JSX. However,
	    // `jshint` fails to parse JSX so in order for linting to work in the open
	    // source repo, we need to just use `ReactDOM.form`.
	    return form(this.props);
	  },
	
	  componentDidMount: function() {
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset');
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit');
	  }
	});
	
	module.exports = ReactDOMForm;


/***/ },
/* 103 */
/*!************************************!*\
  !*** ./~/react/lib/ReactDOMImg.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMImg
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 66);
	var LocalEventTrapMixin = __webpack_require__(/*! ./LocalEventTrapMixin */ 149);
	var ReactBrowserComponentMixin = __webpack_require__(/*! ./ReactBrowserComponentMixin */ 88);
	var ReactCompositeComponent = __webpack_require__(/*! ./ReactCompositeComponent */ 34);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactDOM = __webpack_require__(/*! ./ReactDOM */ 39);
	
	// Store a reference to the <img> `ReactDOMComponent`. TODO: use string
	var img = ReactElement.createFactory(ReactDOM.img.type);
	
	/**
	 * Since onLoad doesn't bubble OR capture on the top level in IE8, we need to
	 * capture it on the <img> element itself. There are lots of hacks we could do
	 * to accomplish this, but the most reliable is to make <img> a composite
	 * component and use `componentDidMount` to attach the event handlers.
	 */
	var ReactDOMImg = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMImg',
	  tagName: 'IMG',
	
	  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],
	
	  render: function() {
	    return img(this.props);
	  },
	
	  componentDidMount: function() {
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load');
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error');
	  }
	});
	
	module.exports = ReactDOMImg;


/***/ },
/* 104 */
/*!**************************************!*\
  !*** ./~/react/lib/ReactDOMInput.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMInput
	 */
	
	"use strict";
	
	var AutoFocusMixin = __webpack_require__(/*! ./AutoFocusMixin */ 148);
	var DOMPropertyOperations = __webpack_require__(/*! ./DOMPropertyOperations */ 30);
	var LinkedValueUtils = __webpack_require__(/*! ./LinkedValueUtils */ 150);
	var ReactBrowserComponentMixin = __webpack_require__(/*! ./ReactBrowserComponentMixin */ 88);
	var ReactCompositeComponent = __webpack_require__(/*! ./ReactCompositeComponent */ 34);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactDOM = __webpack_require__(/*! ./ReactDOM */ 39);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 44);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 75);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	// Store a reference to the <input> `ReactDOMComponent`. TODO: use string
	var input = ReactElement.createFactory(ReactDOM.input.type);
	
	var instancesByReactID = {};
	
	function forceUpdateIfMounted() {
	  /*jshint validthis:true */
	  if (this.isMounted()) {
	    this.forceUpdate();
	  }
	}
	
	/**
	 * Implements an <input> native component that allows setting these optional
	 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
	 *
	 * If `checked` or `value` are not supplied (or null/undefined), user actions
	 * that affect the checked state or value will trigger updates to the element.
	 *
	 * If they are supplied (and not null/undefined), the rendered element will not
	 * trigger updates to the element. Instead, the props must change in order for
	 * the rendered element to be updated.
	 *
	 * The rendered element will be initialized as unchecked (or `defaultChecked`)
	 * with an empty value (or `defaultValue`).
	 *
	 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
	 */
	var ReactDOMInput = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMInput',
	
	  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],
	
	  getInitialState: function() {
	    var defaultValue = this.props.defaultValue;
	    return {
	      initialChecked: this.props.defaultChecked || false,
	      initialValue: defaultValue != null ? defaultValue : null
	    };
	  },
	
	  render: function() {
	    // Clone `this.props` so we don't mutate the input.
	    var props = assign({}, this.props);
	
	    props.defaultChecked = null;
	    props.defaultValue = null;
	
	    var value = LinkedValueUtils.getValue(this);
	    props.value = value != null ? value : this.state.initialValue;
	
	    var checked = LinkedValueUtils.getChecked(this);
	    props.checked = checked != null ? checked : this.state.initialChecked;
	
	    props.onChange = this._handleChange;
	
	    return input(props, this.props.children);
	  },
	
	  componentDidMount: function() {
	    var id = ReactMount.getID(this.getDOMNode());
	    instancesByReactID[id] = this;
	  },
	
	  componentWillUnmount: function() {
	    var rootNode = this.getDOMNode();
	    var id = ReactMount.getID(rootNode);
	    delete instancesByReactID[id];
	  },
	
	  componentDidUpdate: function(prevProps, prevState, prevContext) {
	    var rootNode = this.getDOMNode();
	    if (this.props.checked != null) {
	      DOMPropertyOperations.setValueForProperty(
	        rootNode,
	        'checked',
	        this.props.checked || false
	      );
	    }
	
	    var value = LinkedValueUtils.getValue(this);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
	    }
	  },
	
	  _handleChange: function(event) {
	    var returnValue;
	    var onChange = LinkedValueUtils.getOnChange(this);
	    if (onChange) {
	      returnValue = onChange.call(this, event);
	    }
	    // Here we use asap to wait until all updates have propagated, which
	    // is important when using controlled components within layers:
	    // https://github.com/facebook/react/issues/1698
	    ReactUpdates.asap(forceUpdateIfMounted, this);
	
	    var name = this.props.name;
	    if (this.props.type === 'radio' && name != null) {
	      var rootNode = this.getDOMNode();
	      var queryRoot = rootNode;
	
	      while (queryRoot.parentNode) {
	        queryRoot = queryRoot.parentNode;
	      }
	
	      // If `rootNode.form` was non-null, then we could try `form.elements`,
	      // but that sometimes behaves strangely in IE8. We could also try using
	      // `form.getElementsByName`, but that will only return direct children
	      // and won't include inputs that use the HTML5 `form=` attribute. Since
	      // the input might not even be in a form, let's just use the global
	      // `querySelectorAll` to ensure we don't miss anything.
	      var group = queryRoot.querySelectorAll(
	        'input[name=' + JSON.stringify('' + name) + '][type="radio"]');
	
	      for (var i = 0, groupLen = group.length; i < groupLen; i++) {
	        var otherNode = group[i];
	        if (otherNode === rootNode ||
	            otherNode.form !== rootNode.form) {
	          continue;
	        }
	        var otherID = ReactMount.getID(otherNode);
	        ("production" !== process.env.NODE_ENV ? invariant(
	          otherID,
	          'ReactDOMInput: Mixing React and non-React radio inputs with the ' +
	          'same `name` is not supported.'
	        ) : invariant(otherID));
	        var otherInstance = instancesByReactID[otherID];
	        ("production" !== process.env.NODE_ENV ? invariant(
	          otherInstance,
	          'ReactDOMInput: Unknown radio button ID %s.',
	          otherID
	        ) : invariant(otherInstance));
	        // If this is a controlled radio button group, forcing the input that
	        // was previously checked to update will cause it to be come re-checked
	        // as appropriate.
	        ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
	      }
	    }
	
	    return returnValue;
	  }
	
	});
	
	module.exports = ReactDOMInput;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 105 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactDOMOption.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMOption
	 */
	
	"use strict";
	
	var ReactBrowserComponentMixin = __webpack_require__(/*! ./ReactBrowserComponentMixin */ 88);
	var ReactCompositeComponent = __webpack_require__(/*! ./ReactCompositeComponent */ 34);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactDOM = __webpack_require__(/*! ./ReactDOM */ 39);
	
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	// Store a reference to the <option> `ReactDOMComponent`. TODO: use string
	var option = ReactElement.createFactory(ReactDOM.option.type);
	
	/**
	 * Implements an <option> native component that warns when `selected` is set.
	 */
	var ReactDOMOption = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMOption',
	
	  mixins: [ReactBrowserComponentMixin],
	
	  componentWillMount: function() {
	    // TODO (yungsters): Remove support for `selected` in <option>.
	    if ("production" !== process.env.NODE_ENV) {
	      ("production" !== process.env.NODE_ENV ? warning(
	        this.props.selected == null,
	        'Use the `defaultValue` or `value` props on <select> instead of ' +
	        'setting `selected` on <option>.'
	      ) : null);
	    }
	  },
	
	  render: function() {
	    return option(this.props, this.props.children);
	  }
	
	});
	
	module.exports = ReactDOMOption;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 106 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactDOMSelect.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelect
	 */
	
	"use strict";
	
	var AutoFocusMixin = __webpack_require__(/*! ./AutoFocusMixin */ 148);
	var LinkedValueUtils = __webpack_require__(/*! ./LinkedValueUtils */ 150);
	var ReactBrowserComponentMixin = __webpack_require__(/*! ./ReactBrowserComponentMixin */ 88);
	var ReactCompositeComponent = __webpack_require__(/*! ./ReactCompositeComponent */ 34);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactDOM = __webpack_require__(/*! ./ReactDOM */ 39);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 75);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	
	// Store a reference to the <select> `ReactDOMComponent`. TODO: use string
	var select = ReactElement.createFactory(ReactDOM.select.type);
	
	function updateWithPendingValueIfMounted() {
	  /*jshint validthis:true */
	  if (this.isMounted()) {
	    this.setState({value: this._pendingValue});
	    this._pendingValue = 0;
	  }
	}
	
	/**
	 * Validation function for `value` and `defaultValue`.
	 * @private
	 */
	function selectValueType(props, propName, componentName) {
	  if (props[propName] == null) {
	    return;
	  }
	  if (props.multiple) {
	    if (!Array.isArray(props[propName])) {
	      return new Error(
	        ("The `" + propName + "` prop supplied to <select> must be an array if ") +
	        ("`multiple` is true.")
	      );
	    }
	  } else {
	    if (Array.isArray(props[propName])) {
	      return new Error(
	        ("The `" + propName + "` prop supplied to <select> must be a scalar ") +
	        ("value if `multiple` is false.")
	      );
	    }
	  }
	}
	
	/**
	 * If `value` is supplied, updates <option> elements on mount and update.
	 * @param {ReactComponent} component Instance of ReactDOMSelect
	 * @param {?*} propValue For uncontrolled components, null/undefined. For
	 * controlled components, a string (or with `multiple`, a list of strings).
	 * @private
	 */
	function updateOptions(component, propValue) {
	  var multiple = component.props.multiple;
	  var value = propValue != null ? propValue : component.state.value;
	  var options = component.getDOMNode().options;
	  var selectedValue, i, l;
	  if (multiple) {
	    selectedValue = {};
	    for (i = 0, l = value.length; i < l; ++i) {
	      selectedValue['' + value[i]] = true;
	    }
	  } else {
	    selectedValue = '' + value;
	  }
	  for (i = 0, l = options.length; i < l; i++) {
	    var selected = multiple ?
	      selectedValue.hasOwnProperty(options[i].value) :
	      options[i].value === selectedValue;
	
	    if (selected !== options[i].selected) {
	      options[i].selected = selected;
	    }
	  }
	}
	
	/**
	 * Implements a <select> native component that allows optionally setting the
	 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
	 * string. If `multiple` is true, the prop must be an array of strings.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that change the
	 * selected option will trigger updates to the rendered options.
	 *
	 * If it is supplied (and not null/undefined), the rendered options will not
	 * update in response to user actions. Instead, the `value` prop must change in
	 * order for the rendered options to update.
	 *
	 * If `defaultValue` is provided, any options with the supplied values will be
	 * selected.
	 */
	var ReactDOMSelect = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMSelect',
	
	  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],
	
	  propTypes: {
	    defaultValue: selectValueType,
	    value: selectValueType
	  },
	
	  getInitialState: function() {
	    return {value: this.props.defaultValue || (this.props.multiple ? [] : '')};
	  },
	
	  componentWillMount: function() {
	    this._pendingValue = null;
	  },
	
	  componentWillReceiveProps: function(nextProps) {
	    if (!this.props.multiple && nextProps.multiple) {
	      this.setState({value: [this.state.value]});
	    } else if (this.props.multiple && !nextProps.multiple) {
	      this.setState({value: this.state.value[0]});
	    }
	  },
	
	  render: function() {
	    // Clone `this.props` so we don't mutate the input.
	    var props = assign({}, this.props);
	
	    props.onChange = this._handleChange;
	    props.value = null;
	
	    return select(props, this.props.children);
	  },
	
	  componentDidMount: function() {
	    updateOptions(this, LinkedValueUtils.getValue(this));
	  },
	
	  componentDidUpdate: function(prevProps) {
	    var value = LinkedValueUtils.getValue(this);
	    var prevMultiple = !!prevProps.multiple;
	    var multiple = !!this.props.multiple;
	    if (value != null || prevMultiple !== multiple) {
	      updateOptions(this, value);
	    }
	  },
	
	  _handleChange: function(event) {
	    var returnValue;
	    var onChange = LinkedValueUtils.getOnChange(this);
	    if (onChange) {
	      returnValue = onChange.call(this, event);
	    }
	
	    var selectedValue;
	    if (this.props.multiple) {
	      selectedValue = [];
	      var options = event.target.options;
	      for (var i = 0, l = options.length; i < l; i++) {
	        if (options[i].selected) {
	          selectedValue.push(options[i].value);
	        }
	      }
	    } else {
	      selectedValue = event.target.value;
	    }
	
	    this._pendingValue = selectedValue;
	    ReactUpdates.asap(updateWithPendingValueIfMounted, this);
	    return returnValue;
	  }
	
	});
	
	module.exports = ReactDOMSelect;


/***/ },
/* 107 */
/*!*****************************************!*\
  !*** ./~/react/lib/ReactDOMTextarea.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextarea
	 */
	
	"use strict";
	
	var AutoFocusMixin = __webpack_require__(/*! ./AutoFocusMixin */ 148);
	var DOMPropertyOperations = __webpack_require__(/*! ./DOMPropertyOperations */ 30);
	var LinkedValueUtils = __webpack_require__(/*! ./LinkedValueUtils */ 150);
	var ReactBrowserComponentMixin = __webpack_require__(/*! ./ReactBrowserComponentMixin */ 88);
	var ReactCompositeComponent = __webpack_require__(/*! ./ReactCompositeComponent */ 34);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	var ReactDOM = __webpack_require__(/*! ./ReactDOM */ 39);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 75);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	// Store a reference to the <textarea> `ReactDOMComponent`. TODO: use string
	var textarea = ReactElement.createFactory(ReactDOM.textarea.type);
	
	function forceUpdateIfMounted() {
	  /*jshint validthis:true */
	  if (this.isMounted()) {
	    this.forceUpdate();
	  }
	}
	
	/**
	 * Implements a <textarea> native component that allows setting `value`, and
	 * `defaultValue`. This differs from the traditional DOM API because value is
	 * usually set as PCDATA children.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that affect the
	 * value will trigger updates to the element.
	 *
	 * If `value` is supplied (and not null/undefined), the rendered element will
	 * not trigger updates to the element. Instead, the `value` prop must change in
	 * order for the rendered element to be updated.
	 *
	 * The rendered element will be initialized with an empty value, the prop
	 * `defaultValue` if specified, or the children content (deprecated).
	 */
	var ReactDOMTextarea = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMTextarea',
	
	  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],
	
	  getInitialState: function() {
	    var defaultValue = this.props.defaultValue;
	    // TODO (yungsters): Remove support for children content in <textarea>.
	    var children = this.props.children;
	    if (children != null) {
	      if ("production" !== process.env.NODE_ENV) {
	        ("production" !== process.env.NODE_ENV ? warning(
	          false,
	          'Use the `defaultValue` or `value` props instead of setting ' +
	          'children on <textarea>.'
	        ) : null);
	      }
	      ("production" !== process.env.NODE_ENV ? invariant(
	        defaultValue == null,
	        'If you supply `defaultValue` on a <textarea>, do not pass children.'
	      ) : invariant(defaultValue == null));
	      if (Array.isArray(children)) {
	        ("production" !== process.env.NODE_ENV ? invariant(
	          children.length <= 1,
	          '<textarea> can only have at most one child.'
	        ) : invariant(children.length <= 1));
	        children = children[0];
	      }
	
	      defaultValue = '' + children;
	    }
	    if (defaultValue == null) {
	      defaultValue = '';
	    }
	    var value = LinkedValueUtils.getValue(this);
	    return {
	      // We save the initial value so that `ReactDOMComponent` doesn't update
	      // `textContent` (unnecessary since we update value).
	      // The initial value can be a boolean or object so that's why it's
	      // forced to be a string.
	      initialValue: '' + (value != null ? value : defaultValue)
	    };
	  },
	
	  render: function() {
	    // Clone `this.props` so we don't mutate the input.
	    var props = assign({}, this.props);
	
	    ("production" !== process.env.NODE_ENV ? invariant(
	      props.dangerouslySetInnerHTML == null,
	      '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
	    ) : invariant(props.dangerouslySetInnerHTML == null));
	
	    props.defaultValue = null;
	    props.value = null;
	    props.onChange = this._handleChange;
	
	    // Always set children to the same thing. In IE9, the selection range will
	    // get reset if `textContent` is mutated.
	    return textarea(props, this.state.initialValue);
	  },
	
	  componentDidUpdate: function(prevProps, prevState, prevContext) {
	    var value = LinkedValueUtils.getValue(this);
	    if (value != null) {
	      var rootNode = this.getDOMNode();
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
	    }
	  },
	
	  _handleChange: function(event) {
	    var returnValue;
	    var onChange = LinkedValueUtils.getOnChange(this);
	    if (onChange) {
	      returnValue = onChange.call(this, event);
	    }
	    ReactUpdates.asap(forceUpdateIfMounted, this);
	    return returnValue;
	  }
	
	});
	
	module.exports = ReactDOMTextarea;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 108 */
/*!*******************************************!*\
  !*** ./~/react/lib/ReactEventListener.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventListener
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var EventListener = __webpack_require__(/*! ./EventListener */ 151);
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 72);
	var ReactInstanceHandles = __webpack_require__(/*! ./ReactInstanceHandles */ 42);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 44);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 75);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var getEventTarget = __webpack_require__(/*! ./getEventTarget */ 152);
	var getUnboundedScrollPosition = __webpack_require__(/*! ./getUnboundedScrollPosition */ 153);
	
	/**
	 * Finds the parent React component of `node`.
	 *
	 * @param {*} node
	 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
	 *                           is not nested.
	 */
	function findParent(node) {
	  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
	  // traversal, but caching is difficult to do correctly without using a
	  // mutation observer to listen for all DOM changes.
	  var nodeID = ReactMount.getID(node);
	  var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
	  var container = ReactMount.findReactContainerForID(rootID);
	  var parent = ReactMount.getFirstReactDOM(container);
	  return parent;
	}
	
	// Used to store ancestor hierarchy in top level callback
	function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
	  this.topLevelType = topLevelType;
	  this.nativeEvent = nativeEvent;
	  this.ancestors = [];
	}
	assign(TopLevelCallbackBookKeeping.prototype, {
	  destructor: function() {
	    this.topLevelType = null;
	    this.nativeEvent = null;
	    this.ancestors.length = 0;
	  }
	});
	PooledClass.addPoolingTo(
	  TopLevelCallbackBookKeeping,
	  PooledClass.twoArgumentPooler
	);
	
	function handleTopLevelImpl(bookKeeping) {
	  var topLevelTarget = ReactMount.getFirstReactDOM(
	    getEventTarget(bookKeeping.nativeEvent)
	  ) || window;
	
	  // Loop through the hierarchy, in case there's any nested components.
	  // It's important that we build the array of ancestors before calling any
	  // event handlers, because event handlers can modify the DOM, leading to
	  // inconsistencies with ReactMount's node cache. See #1105.
	  var ancestor = topLevelTarget;
	  while (ancestor) {
	    bookKeeping.ancestors.push(ancestor);
	    ancestor = findParent(ancestor);
	  }
	
	  for (var i = 0, l = bookKeeping.ancestors.length; i < l; i++) {
	    topLevelTarget = bookKeeping.ancestors[i];
	    var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
	    ReactEventListener._handleTopLevel(
	      bookKeeping.topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      bookKeeping.nativeEvent
	    );
	  }
	}
	
	function scrollValueMonitor(cb) {
	  var scrollPosition = getUnboundedScrollPosition(window);
	  cb(scrollPosition);
	}
	
	var ReactEventListener = {
	  _enabled: true,
	  _handleTopLevel: null,
	
	  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,
	
	  setHandleTopLevel: function(handleTopLevel) {
	    ReactEventListener._handleTopLevel = handleTopLevel;
	  },
	
	  setEnabled: function(enabled) {
	    ReactEventListener._enabled = !!enabled;
	  },
	
	  isEnabled: function() {
	    return ReactEventListener._enabled;
	  },
	
	
	  /**
	   * Traps top-level events by using event bubbling.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return;
	    }
	    return EventListener.listen(
	      element,
	      handlerBaseName,
	      ReactEventListener.dispatchEvent.bind(null, topLevelType)
	    );
	  },
	
	  /**
	   * Traps a top-level event by using event capturing.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return;
	    }
	    return EventListener.capture(
	      element,
	      handlerBaseName,
	      ReactEventListener.dispatchEvent.bind(null, topLevelType)
	    );
	  },
	
	  monitorScrollValue: function(refresh) {
	    var callback = scrollValueMonitor.bind(null, refresh);
	    EventListener.listen(window, 'scroll', callback);
	    EventListener.listen(window, 'resize', callback);
	  },
	
	  dispatchEvent: function(topLevelType, nativeEvent) {
	    if (!ReactEventListener._enabled) {
	      return;
	    }
	
	    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(
	      topLevelType,
	      nativeEvent
	    );
	    try {
	      // Event queue being processed in the same cycle allows
	      // `preventDefault`.
	      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
	    } finally {
	      TopLevelCallbackBookKeeping.release(bookKeeping);
	    }
	  }
	};
	
	module.exports = ReactEventListener;


/***/ },
/* 109 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactInjection.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInjection
	 */
	
	"use strict";
	
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 68);
	var EventPluginHub = __webpack_require__(/*! ./EventPluginHub */ 135);
	var ReactComponent = __webpack_require__(/*! ./ReactComponent */ 33);
	var ReactCompositeComponent = __webpack_require__(/*! ./ReactCompositeComponent */ 34);
	var ReactEmptyComponent = __webpack_require__(/*! ./ReactEmptyComponent */ 77);
	var ReactBrowserEventEmitter = __webpack_require__(/*! ./ReactBrowserEventEmitter */ 89);
	var ReactNativeComponent = __webpack_require__(/*! ./ReactNativeComponent */ 128);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 46);
	var ReactRootIndex = __webpack_require__(/*! ./ReactRootIndex */ 116);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 75);
	
	var ReactInjection = {
	  Component: ReactComponent.injection,
	  CompositeComponent: ReactCompositeComponent.injection,
	  DOMProperty: DOMProperty.injection,
	  EmptyComponent: ReactEmptyComponent.injection,
	  EventPluginHub: EventPluginHub.injection,
	  EventEmitter: ReactBrowserEventEmitter.injection,
	  NativeComponent: ReactNativeComponent.injection,
	  Perf: ReactPerf.injection,
	  RootIndex: ReactRootIndex.injection,
	  Updates: ReactUpdates.injection
	};
	
	module.exports = ReactInjection;


/***/ },
/* 110 */
/*!******************************************!*\
  !*** ./~/react/lib/SelectEventPlugin.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SelectEventPlugin
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 66);
	var EventPropagators = __webpack_require__(/*! ./EventPropagators */ 133);
	var ReactInputSelection = __webpack_require__(/*! ./ReactInputSelection */ 141);
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 136);
	
	var getActiveElement = __webpack_require__(/*! ./getActiveElement */ 154);
	var isTextInputElement = __webpack_require__(/*! ./isTextInputElement */ 137);
	var keyOf = __webpack_require__(/*! ./keyOf */ 83);
	var shallowEqual = __webpack_require__(/*! ./shallowEqual */ 155);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var eventTypes = {
	  select: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onSelect: null}),
	      captured: keyOf({onSelectCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topContextMenu,
	      topLevelTypes.topFocus,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topMouseDown,
	      topLevelTypes.topMouseUp,
	      topLevelTypes.topSelectionChange
	    ]
	  }
	};
	
	var activeElement = null;
	var activeElementID = null;
	var lastSelection = null;
	var mouseDown = false;
	
	/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @param {object}
	 */
	function getSelection(node) {
	  if ('selectionStart' in node &&
	      ReactInputSelection.hasSelectionCapabilities(node)) {
	    return {
	      start: node.selectionStart,
	      end: node.selectionEnd
	    };
	  } else if (window.getSelection) {
	    var selection = window.getSelection();
	    return {
	      anchorNode: selection.anchorNode,
	      anchorOffset: selection.anchorOffset,
	      focusNode: selection.focusNode,
	      focusOffset: selection.focusOffset
	    };
	  } else if (document.selection) {
	    var range = document.selection.createRange();
	    return {
	      parentElement: range.parentElement(),
	      text: range.text,
	      top: range.boundingTop,
	      left: range.boundingLeft
	    };
	  }
	}
	
	/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */
	function constructSelectEvent(nativeEvent) {
	  // Ensure we have the right element, and that the user is not dragging a
	  // selection (this matches native `select` event behavior). In HTML5, select
	  // fires only on input and textarea thus if there's no focused element we
	  // won't dispatch.
	  if (mouseDown ||
	      activeElement == null ||
	      activeElement != getActiveElement()) {
	    return;
	  }
	
	  // Only fire when selection has actually changed.
	  var currentSelection = getSelection(activeElement);
	  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
	    lastSelection = currentSelection;
	
	    var syntheticEvent = SyntheticEvent.getPooled(
	      eventTypes.select,
	      activeElementID,
	      nativeEvent
	    );
	
	    syntheticEvent.type = 'select';
	    syntheticEvent.target = activeElement;
	
	    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);
	
	    return syntheticEvent;
	  }
	}
	
	/**
	 * This plugin creates an `onSelect` event that normalizes select events
	 * across form elements.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - contentEditable
	 *
	 * This differs from native browser implementations in the following ways:
	 * - Fires on contentEditable fields as well as inputs.
	 * - Fires for collapsed selection.
	 * - Fires after user input.
	 */
	var SelectEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	
	    switch (topLevelType) {
	      // Track the input node that has focus.
	      case topLevelTypes.topFocus:
	        if (isTextInputElement(topLevelTarget) ||
	            topLevelTarget.contentEditable === 'true') {
	          activeElement = topLevelTarget;
	          activeElementID = topLevelTargetID;
	          lastSelection = null;
	        }
	        break;
	      case topLevelTypes.topBlur:
	        activeElement = null;
	        activeElementID = null;
	        lastSelection = null;
	        break;
	
	      // Don't fire the event while the user is dragging. This matches the
	      // semantics of the native select event.
	      case topLevelTypes.topMouseDown:
	        mouseDown = true;
	        break;
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topMouseUp:
	        mouseDown = false;
	        return constructSelectEvent(nativeEvent);
	
	      // Chrome and IE fire non-standard event when selection is changed (and
	      // sometimes when it hasn't).
	      // Firefox doesn't support selectionchange, so check selection status
	      // after each key entry. The selection changes after keydown and before
	      // keyup, but we check on keydown as well in the case of holding down a
	      // key, when multiple keydown events are fired but only one keyup is.
	      case topLevelTypes.topSelectionChange:
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        return constructSelectEvent(nativeEvent);
	    }
	  }
	};
	
	module.exports = SelectEventPlugin;


/***/ },
/* 111 */
/*!*********************************************!*\
  !*** ./~/react/lib/ServerReactRootIndex.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ServerReactRootIndex
	 * @typechecks
	 */
	
	"use strict";
	
	/**
	 * Size of the reactRoot ID space. We generate random numbers for React root
	 * IDs and if there's a collision the events and DOM update system will
	 * get confused. In the future we need a way to generate GUIDs but for
	 * now this will work on a smaller scale.
	 */
	var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);
	
	var ServerReactRootIndex = {
	  createReactRootIndex: function() {
	    return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
	  }
	};
	
	module.exports = ServerReactRootIndex;


/***/ },
/* 112 */
/*!******************************************!*\
  !*** ./~/react/lib/SimpleEventPlugin.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SimpleEventPlugin
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 66);
	var EventPluginUtils = __webpack_require__(/*! ./EventPluginUtils */ 31);
	var EventPropagators = __webpack_require__(/*! ./EventPropagators */ 133);
	var SyntheticClipboardEvent = __webpack_require__(/*! ./SyntheticClipboardEvent */ 156);
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 136);
	var SyntheticFocusEvent = __webpack_require__(/*! ./SyntheticFocusEvent */ 157);
	var SyntheticKeyboardEvent = __webpack_require__(/*! ./SyntheticKeyboardEvent */ 158);
	var SyntheticMouseEvent = __webpack_require__(/*! ./SyntheticMouseEvent */ 144);
	var SyntheticDragEvent = __webpack_require__(/*! ./SyntheticDragEvent */ 159);
	var SyntheticTouchEvent = __webpack_require__(/*! ./SyntheticTouchEvent */ 160);
	var SyntheticUIEvent = __webpack_require__(/*! ./SyntheticUIEvent */ 161);
	var SyntheticWheelEvent = __webpack_require__(/*! ./SyntheticWheelEvent */ 162);
	
	var getEventCharCode = __webpack_require__(/*! ./getEventCharCode */ 163);
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	var keyOf = __webpack_require__(/*! ./keyOf */ 83);
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var eventTypes = {
	  blur: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onBlur: true}),
	      captured: keyOf({onBlurCapture: true})
	    }
	  },
	  click: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onClick: true}),
	      captured: keyOf({onClickCapture: true})
	    }
	  },
	  contextMenu: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onContextMenu: true}),
	      captured: keyOf({onContextMenuCapture: true})
	    }
	  },
	  copy: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCopy: true}),
	      captured: keyOf({onCopyCapture: true})
	    }
	  },
	  cut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCut: true}),
	      captured: keyOf({onCutCapture: true})
	    }
	  },
	  doubleClick: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDoubleClick: true}),
	      captured: keyOf({onDoubleClickCapture: true})
	    }
	  },
	  drag: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDrag: true}),
	      captured: keyOf({onDragCapture: true})
	    }
	  },
	  dragEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragEnd: true}),
	      captured: keyOf({onDragEndCapture: true})
	    }
	  },
	  dragEnter: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragEnter: true}),
	      captured: keyOf({onDragEnterCapture: true})
	    }
	  },
	  dragExit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragExit: true}),
	      captured: keyOf({onDragExitCapture: true})
	    }
	  },
	  dragLeave: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragLeave: true}),
	      captured: keyOf({onDragLeaveCapture: true})
	    }
	  },
	  dragOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragOver: true}),
	      captured: keyOf({onDragOverCapture: true})
	    }
	  },
	  dragStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragStart: true}),
	      captured: keyOf({onDragStartCapture: true})
	    }
	  },
	  drop: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDrop: true}),
	      captured: keyOf({onDropCapture: true})
	    }
	  },
	  focus: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onFocus: true}),
	      captured: keyOf({onFocusCapture: true})
	    }
	  },
	  input: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onInput: true}),
	      captured: keyOf({onInputCapture: true})
	    }
	  },
	  keyDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onKeyDown: true}),
	      captured: keyOf({onKeyDownCapture: true})
	    }
	  },
	  keyPress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onKeyPress: true}),
	      captured: keyOf({onKeyPressCapture: true})
	    }
	  },
	  keyUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onKeyUp: true}),
	      captured: keyOf({onKeyUpCapture: true})
	    }
	  },
	  load: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onLoad: true}),
	      captured: keyOf({onLoadCapture: true})
	    }
	  },
	  error: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onError: true}),
	      captured: keyOf({onErrorCapture: true})
	    }
	  },
	  // Note: We do not allow listening to mouseOver events. Instead, use the
	  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
	  mouseDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseDown: true}),
	      captured: keyOf({onMouseDownCapture: true})
	    }
	  },
	  mouseMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseMove: true}),
	      captured: keyOf({onMouseMoveCapture: true})
	    }
	  },
	  mouseOut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseOut: true}),
	      captured: keyOf({onMouseOutCapture: true})
	    }
	  },
	  mouseOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseOver: true}),
	      captured: keyOf({onMouseOverCapture: true})
	    }
	  },
	  mouseUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseUp: true}),
	      captured: keyOf({onMouseUpCapture: true})
	    }
	  },
	  paste: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onPaste: true}),
	      captured: keyOf({onPasteCapture: true})
	    }
	  },
	  reset: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onReset: true}),
	      captured: keyOf({onResetCapture: true})
	    }
	  },
	  scroll: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onScroll: true}),
	      captured: keyOf({onScrollCapture: true})
	    }
	  },
	  submit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onSubmit: true}),
	      captured: keyOf({onSubmitCapture: true})
	    }
	  },
	  touchCancel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchCancel: true}),
	      captured: keyOf({onTouchCancelCapture: true})
	    }
	  },
	  touchEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchEnd: true}),
	      captured: keyOf({onTouchEndCapture: true})
	    }
	  },
	  touchMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchMove: true}),
	      captured: keyOf({onTouchMoveCapture: true})
	    }
	  },
	  touchStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchStart: true}),
	      captured: keyOf({onTouchStartCapture: true})
	    }
	  },
	  wheel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onWheel: true}),
	      captured: keyOf({onWheelCapture: true})
	    }
	  }
	};
	
	var topLevelEventsToDispatchConfig = {
	  topBlur:        eventTypes.blur,
	  topClick:       eventTypes.click,
	  topContextMenu: eventTypes.contextMenu,
	  topCopy:        eventTypes.copy,
	  topCut:         eventTypes.cut,
	  topDoubleClick: eventTypes.doubleClick,
	  topDrag:        eventTypes.drag,
	  topDragEnd:     eventTypes.dragEnd,
	  topDragEnter:   eventTypes.dragEnter,
	  topDragExit:    eventTypes.dragExit,
	  topDragLeave:   eventTypes.dragLeave,
	  topDragOver:    eventTypes.dragOver,
	  topDragStart:   eventTypes.dragStart,
	  topDrop:        eventTypes.drop,
	  topError:       eventTypes.error,
	  topFocus:       eventTypes.focus,
	  topInput:       eventTypes.input,
	  topKeyDown:     eventTypes.keyDown,
	  topKeyPress:    eventTypes.keyPress,
	  topKeyUp:       eventTypes.keyUp,
	  topLoad:        eventTypes.load,
	  topMouseDown:   eventTypes.mouseDown,
	  topMouseMove:   eventTypes.mouseMove,
	  topMouseOut:    eventTypes.mouseOut,
	  topMouseOver:   eventTypes.mouseOver,
	  topMouseUp:     eventTypes.mouseUp,
	  topPaste:       eventTypes.paste,
	  topReset:       eventTypes.reset,
	  topScroll:      eventTypes.scroll,
	  topSubmit:      eventTypes.submit,
	  topTouchCancel: eventTypes.touchCancel,
	  topTouchEnd:    eventTypes.touchEnd,
	  topTouchMove:   eventTypes.touchMove,
	  topTouchStart:  eventTypes.touchStart,
	  topWheel:       eventTypes.wheel
	};
	
	for (var topLevelType in topLevelEventsToDispatchConfig) {
	  topLevelEventsToDispatchConfig[topLevelType].dependencies = [topLevelType];
	}
	
	var SimpleEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  /**
	   * Same as the default implementation, except cancels the event when return
	   * value is false. This behavior will be disabled in a future release.
	   *
	   * @param {object} Event to be dispatched.
	   * @param {function} Application-level callback.
	   * @param {string} domID DOM ID to pass to the callback.
	   */
	  executeDispatch: function(event, listener, domID) {
	    var returnValue = EventPluginUtils.executeDispatch(event, listener, domID);
	
	    ("production" !== process.env.NODE_ENV ? warning(
	      typeof returnValue !== 'boolean',
	      'Returning `false` from an event handler is deprecated and will be ' +
	      'ignored in a future release. Instead, manually call ' +
	      'e.stopPropagation() or e.preventDefault(), as appropriate.'
	    ) : null);
	
	    if (returnValue === false) {
	      event.stopPropagation();
	      event.preventDefault();
	    }
	  },
	
	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
	    if (!dispatchConfig) {
	      return null;
	    }
	    var EventConstructor;
	    switch (topLevelType) {
	      case topLevelTypes.topInput:
	      case topLevelTypes.topLoad:
	      case topLevelTypes.topError:
	      case topLevelTypes.topReset:
	      case topLevelTypes.topSubmit:
	        // HTML Events
	        // @see http://www.w3.org/TR/html5/index.html#events-0
	        EventConstructor = SyntheticEvent;
	        break;
	      case topLevelTypes.topKeyPress:
	        // FireFox creates a keypress event for function keys too. This removes
	        // the unwanted keypress events. Enter is however both printable and
	        // non-printable. One would expect Tab to be as well (but it isn't).
	        if (getEventCharCode(nativeEvent) === 0) {
	          return null;
	        }
	        /* falls through */
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        EventConstructor = SyntheticKeyboardEvent;
	        break;
	      case topLevelTypes.topBlur:
	      case topLevelTypes.topFocus:
	        EventConstructor = SyntheticFocusEvent;
	        break;
	      case topLevelTypes.topClick:
	        // Firefox creates a click event on right mouse clicks. This removes the
	        // unwanted click events.
	        if (nativeEvent.button === 2) {
	          return null;
	        }
	        /* falls through */
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topDoubleClick:
	      case topLevelTypes.topMouseDown:
	      case topLevelTypes.topMouseMove:
	      case topLevelTypes.topMouseOut:
	      case topLevelTypes.topMouseOver:
	      case topLevelTypes.topMouseUp:
	        EventConstructor = SyntheticMouseEvent;
	        break;
	      case topLevelTypes.topDrag:
	      case topLevelTypes.topDragEnd:
	      case topLevelTypes.topDragEnter:
	      case topLevelTypes.topDragExit:
	      case topLevelTypes.topDragLeave:
	      case topLevelTypes.topDragOver:
	      case topLevelTypes.topDragStart:
	      case topLevelTypes.topDrop:
	        EventConstructor = SyntheticDragEvent;
	        break;
	      case topLevelTypes.topTouchCancel:
	      case topLevelTypes.topTouchEnd:
	      case topLevelTypes.topTouchMove:
	      case topLevelTypes.topTouchStart:
	        EventConstructor = SyntheticTouchEvent;
	        break;
	      case topLevelTypes.topScroll:
	        EventConstructor = SyntheticUIEvent;
	        break;
	      case topLevelTypes.topWheel:
	        EventConstructor = SyntheticWheelEvent;
	        break;
	      case topLevelTypes.topCopy:
	      case topLevelTypes.topCut:
	      case topLevelTypes.topPaste:
	        EventConstructor = SyntheticClipboardEvent;
	        break;
	    }
	    ("production" !== process.env.NODE_ENV ? invariant(
	      EventConstructor,
	      'SimpleEventPlugin: Unhandled event type, `%s`.',
	      topLevelType
	    ) : invariant(EventConstructor));
	    var event = EventConstructor.getPooled(
	      dispatchConfig,
	      topLevelTargetID,
	      nativeEvent
	    );
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	    return event;
	  }
	
	};
	
	module.exports = SimpleEventPlugin;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 113 */
/*!*********************************************!*\
  !*** ./~/react/lib/SVGDOMPropertyConfig.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SVGDOMPropertyConfig
	 */
	
	/*jslint bitwise: true*/
	
	"use strict";
	
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 68);
	
	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
	
	var SVGDOMPropertyConfig = {
	  Properties: {
	    cx: MUST_USE_ATTRIBUTE,
	    cy: MUST_USE_ATTRIBUTE,
	    d: MUST_USE_ATTRIBUTE,
	    dx: MUST_USE_ATTRIBUTE,
	    dy: MUST_USE_ATTRIBUTE,
	    fill: MUST_USE_ATTRIBUTE,
	    fillOpacity: MUST_USE_ATTRIBUTE,
	    fontFamily: MUST_USE_ATTRIBUTE,
	    fontSize: MUST_USE_ATTRIBUTE,
	    fx: MUST_USE_ATTRIBUTE,
	    fy: MUST_USE_ATTRIBUTE,
	    gradientTransform: MUST_USE_ATTRIBUTE,
	    gradientUnits: MUST_USE_ATTRIBUTE,
	    markerEnd: MUST_USE_ATTRIBUTE,
	    markerMid: MUST_USE_ATTRIBUTE,
	    markerStart: MUST_USE_ATTRIBUTE,
	    offset: MUST_USE_ATTRIBUTE,
	    opacity: MUST_USE_ATTRIBUTE,
	    patternContentUnits: MUST_USE_ATTRIBUTE,
	    patternUnits: MUST_USE_ATTRIBUTE,
	    points: MUST_USE_ATTRIBUTE,
	    preserveAspectRatio: MUST_USE_ATTRIBUTE,
	    r: MUST_USE_ATTRIBUTE,
	    rx: MUST_USE_ATTRIBUTE,
	    ry: MUST_USE_ATTRIBUTE,
	    spreadMethod: MUST_USE_ATTRIBUTE,
	    stopColor: MUST_USE_ATTRIBUTE,
	    stopOpacity: MUST_USE_ATTRIBUTE,
	    stroke: MUST_USE_ATTRIBUTE,
	    strokeDasharray: MUST_USE_ATTRIBUTE,
	    strokeLinecap: MUST_USE_ATTRIBUTE,
	    strokeOpacity: MUST_USE_ATTRIBUTE,
	    strokeWidth: MUST_USE_ATTRIBUTE,
	    textAnchor: MUST_USE_ATTRIBUTE,
	    transform: MUST_USE_ATTRIBUTE,
	    version: MUST_USE_ATTRIBUTE,
	    viewBox: MUST_USE_ATTRIBUTE,
	    x1: MUST_USE_ATTRIBUTE,
	    x2: MUST_USE_ATTRIBUTE,
	    x: MUST_USE_ATTRIBUTE,
	    y1: MUST_USE_ATTRIBUTE,
	    y2: MUST_USE_ATTRIBUTE,
	    y: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNames: {
	    fillOpacity: 'fill-opacity',
	    fontFamily: 'font-family',
	    fontSize: 'font-size',
	    gradientTransform: 'gradientTransform',
	    gradientUnits: 'gradientUnits',
	    markerEnd: 'marker-end',
	    markerMid: 'marker-mid',
	    markerStart: 'marker-start',
	    patternContentUnits: 'patternContentUnits',
	    patternUnits: 'patternUnits',
	    preserveAspectRatio: 'preserveAspectRatio',
	    spreadMethod: 'spreadMethod',
	    stopColor: 'stop-color',
	    stopOpacity: 'stop-opacity',
	    strokeDasharray: 'stroke-dasharray',
	    strokeLinecap: 'stroke-linecap',
	    strokeOpacity: 'stroke-opacity',
	    strokeWidth: 'stroke-width',
	    textAnchor: 'text-anchor',
	    viewBox: 'viewBox'
	  }
	};
	
	module.exports = SVGDOMPropertyConfig;


/***/ },
/* 114 */
/*!************************************************!*\
  !*** ./~/react/lib/createFullPageComponent.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createFullPageComponent
	 * @typechecks
	 */
	
	"use strict";
	
	// Defeat circular references by requiring this directly.
	var ReactCompositeComponent = __webpack_require__(/*! ./ReactCompositeComponent */ 34);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 37);
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * Create a component that will throw an exception when unmounted.
	 *
	 * Components like <html> <head> and <body> can't be removed or added
	 * easily in a cross-browser way, however it's valuable to be able to
	 * take advantage of React's reconciliation for styling and <title>
	 * management. So we just document it and throw in dangerous cases.
	 *
	 * @param {string} tag The tag to wrap
	 * @return {function} convenience constructor of new component
	 */
	function createFullPageComponent(tag) {
	  var elementFactory = ReactElement.createFactory(tag);
	
	  var FullPageComponent = ReactCompositeComponent.createClass({
	    displayName: 'ReactFullPageComponent' + tag,
	
	    componentWillUnmount: function() {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        false,
	        '%s tried to unmount. Because of cross-browser quirks it is ' +
	        'impossible to unmount some top-level components (eg <html>, <head>, ' +
	        'and <body>) reliably and efficiently. To fix this, have a single ' +
	        'top-level component that never unmounts render these elements.',
	        this.constructor.displayName
	      ) : invariant(false));
	    },
	
	    render: function() {
	      return elementFactory(this.props);
	    }
	  });
	
	  return FullPageComponent;
	}
	
	module.exports = createFullPageComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 115 */
/*!*****************************************!*\
  !*** ./~/react/lib/ReactDefaultPerf.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerf
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 68);
	var ReactDefaultPerfAnalysis = __webpack_require__(/*! ./ReactDefaultPerfAnalysis */ 164);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 44);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 46);
	
	var performanceNow = __webpack_require__(/*! ./performanceNow */ 165);
	
	function roundFloat(val) {
	  return Math.floor(val * 100) / 100;
	}
	
	function addValue(obj, key, val) {
	  obj[key] = (obj[key] || 0) + val;
	}
	
	var ReactDefaultPerf = {
	  _allMeasurements: [], // last item in the list is the current one
	  _mountStack: [0],
	  _injected: false,
	
	  start: function() {
	    if (!ReactDefaultPerf._injected) {
	      ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
	    }
	
	    ReactDefaultPerf._allMeasurements.length = 0;
	    ReactPerf.enableMeasure = true;
	  },
	
	  stop: function() {
	    ReactPerf.enableMeasure = false;
	  },
	
	  getLastMeasurements: function() {
	    return ReactDefaultPerf._allMeasurements;
	  },
	
	  printExclusive: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
	    console.table(summary.map(function(item) {
	      return {
	        'Component class name': item.componentName,
	        'Total inclusive time (ms)': roundFloat(item.inclusive),
	        'Exclusive mount time (ms)': roundFloat(item.exclusive),
	        'Exclusive render time (ms)': roundFloat(item.render),
	        'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
	        'Render time per instance (ms)': roundFloat(item.render / item.count),
	        'Instances': item.count
	      };
	    }));
	    // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
	    // number.
	  },
	
	  printInclusive: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
	    console.table(summary.map(function(item) {
	      return {
	        'Owner > component': item.componentName,
	        'Inclusive time (ms)': roundFloat(item.time),
	        'Instances': item.count
	      };
	    }));
	    console.log(
	      'Total time:',
	      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
	    );
	  },
	
	  getMeasurementsSummaryMap: function(measurements) {
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(
	      measurements,
	      true
	    );
	    return summary.map(function(item) {
	      return {
	        'Owner > component': item.componentName,
	        'Wasted time (ms)': item.time,
	        'Instances': item.count
	      };
	    });
	  },
	
	  printWasted: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
	    console.log(
	      'Total time:',
	      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
	    );
	  },
	
	  printDOM: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
	    console.table(summary.map(function(item) {
	      var result = {};
	      result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
	      result['type'] = item.type;
	      result['args'] = JSON.stringify(item.args);
	      return result;
	    }));
	    console.log(
	      'Total time:',
	      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
	    );
	  },
	
	  _recordWrite: function(id, fnName, totalTime, args) {
	    // TODO: totalTime isn't that useful since it doesn't count paints/reflows
	    var writes =
	      ReactDefaultPerf
	        ._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1]
	        .writes;
	    writes[id] = writes[id] || [];
	    writes[id].push({
	      type: fnName,
	      time: totalTime,
	      args: args
	    });
	  },
	
	  measure: function(moduleName, fnName, func) {
	    return function() {var args=Array.prototype.slice.call(arguments,0);
	      var totalTime;
	      var rv;
	      var start;
	
	      if (fnName === '_renderNewRootComponent' ||
	          fnName === 'flushBatchedUpdates') {
	        // A "measurement" is a set of metrics recorded for each flush. We want
	        // to group the metrics for a given flush together so we can look at the
	        // components that rendered and the DOM operations that actually
	        // happened to determine the amount of "wasted work" performed.
	        ReactDefaultPerf._allMeasurements.push({
	          exclusive: {},
	          inclusive: {},
	          render: {},
	          counts: {},
	          writes: {},
	          displayNames: {},
	          totalTime: 0
	        });
	        start = performanceNow();
	        rv = func.apply(this, args);
	        ReactDefaultPerf._allMeasurements[
	          ReactDefaultPerf._allMeasurements.length - 1
	        ].totalTime = performanceNow() - start;
	        return rv;
	      } else if (moduleName === 'ReactDOMIDOperations' ||
	        moduleName === 'ReactComponentBrowserEnvironment') {
	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;
	
	        if (fnName === 'mountImageIntoNode') {
	          var mountID = ReactMount.getID(args[1]);
	          ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
	        } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
	          // special format
	          args[0].forEach(function(update) {
	            var writeArgs = {};
	            if (update.fromIndex !== null) {
	              writeArgs.fromIndex = update.fromIndex;
	            }
	            if (update.toIndex !== null) {
	              writeArgs.toIndex = update.toIndex;
	            }
	            if (update.textContent !== null) {
	              writeArgs.textContent = update.textContent;
	            }
	            if (update.markupIndex !== null) {
	              writeArgs.markup = args[1][update.markupIndex];
	            }
	            ReactDefaultPerf._recordWrite(
	              update.parentID,
	              update.type,
	              totalTime,
	              writeArgs
	            );
	          });
	        } else {
	          // basic format
	          ReactDefaultPerf._recordWrite(
	            args[0],
	            fnName,
	            totalTime,
	            Array.prototype.slice.call(args, 1)
	          );
	        }
	        return rv;
	      } else if (moduleName === 'ReactCompositeComponent' && (
	        fnName === 'mountComponent' ||
	        fnName === 'updateComponent' || // TODO: receiveComponent()?
	        fnName === '_renderValidatedComponent')) {
	
	        var rootNodeID = fnName === 'mountComponent' ?
	          args[0] :
	          this._rootNodeID;
	        var isRender = fnName === '_renderValidatedComponent';
	        var isMount = fnName === 'mountComponent';
	
	        var mountStack = ReactDefaultPerf._mountStack;
	        var entry = ReactDefaultPerf._allMeasurements[
	          ReactDefaultPerf._allMeasurements.length - 1
	        ];
	
	        if (isRender) {
	          addValue(entry.counts, rootNodeID, 1);
	        } else if (isMount) {
	          mountStack.push(0);
	        }
	
	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;
	
	        if (isRender) {
	          addValue(entry.render, rootNodeID, totalTime);
	        } else if (isMount) {
	          var subMountTime = mountStack.pop();
	          mountStack[mountStack.length - 1] += totalTime;
	          addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        } else {
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        }
	
	        entry.displayNames[rootNodeID] = {
	          current: this.constructor.displayName,
	          owner: this._owner ? this._owner.constructor.displayName : '<root>'
	        };
	
	        return rv;
	      } else {
	        return func.apply(this, args);
	      }
	    };
	  }
	};
	
	module.exports = ReactDefaultPerf;


/***/ },
/* 116 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactRootIndex.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRootIndex
	 * @typechecks
	 */
	
	"use strict";
	
	var ReactRootIndexInjection = {
	  /**
	   * @param {function} _createReactRootIndex
	   */
	  injectCreateReactRootIndex: function(_createReactRootIndex) {
	    ReactRootIndex.createReactRootIndex = _createReactRootIndex;
	  }
	};
	
	var ReactRootIndex = {
	  createReactRootIndex: null,
	  injection: ReactRootIndexInjection
	};
	
	module.exports = ReactRootIndex;


/***/ },
/* 117 */
/*!***************************************************!*\
  !*** ./~/react/lib/ReactMultiChildUpdateTypes.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChildUpdateTypes
	 */
	
	"use strict";
	
	var keyMirror = __webpack_require__(/*! ./keyMirror */ 76);
	
	/**
	 * When a component's children are updated, a series of update configuration
	 * objects are created in order to batch and serialize the required changes.
	 *
	 * Enumerates all the possible types of update configurations.
	 *
	 * @internal
	 */
	var ReactMultiChildUpdateTypes = keyMirror({
	  INSERT_MARKUP: null,
	  MOVE_EXISTING: null,
	  REMOVE_NODE: null,
	  TEXT_CONTENT: null
	});
	
	module.exports = ReactMultiChildUpdateTypes;


/***/ },
/* 118 */
/*!****************************************!*\
  !*** ./~/react/lib/flattenChildren.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule flattenChildren
	 */
	
	"use strict";
	
	var ReactTextComponent = __webpack_require__(/*! ./ReactTextComponent */ 49);
	
	var traverseAllChildren = __webpack_require__(/*! ./traverseAllChildren */ 73);
	var warning = __webpack_require__(/*! ./warning */ 71);
	
	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name) {
	  // We found a component instance.
	  var result = traverseContext;
	  var keyUnique = !result.hasOwnProperty(name);
	  ("production" !== process.env.NODE_ENV ? warning(
	    keyUnique,
	    'flattenChildren(...): Encountered two children with the same key, ' +
	    '`%s`. Child keys must be unique; when two children share a key, only ' +
	    'the first child will be used.',
	    name
	  ) : null);
	  if (keyUnique && child != null) {
	    var type = typeof child;
	    var normalizedValue;
	
	    if (type === 'string') {
	      normalizedValue = ReactTextComponent(child);
	    } else if (type === 'number') {
	      normalizedValue = ReactTextComponent('' + child);
	    } else {
	      normalizedValue = child;
	    }
	
	    result[name] = normalizedValue;
	  }
	}
	
	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};
	  traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  return result;
	}
	
	module.exports = flattenChildren;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 119 */
/*!*************************************!*\
  !*** ./~/react/lib/containsNode.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule containsNode
	 * @typechecks
	 */
	
	var isTextNode = __webpack_require__(/*! ./isTextNode */ 166);
	
	/*jslint bitwise:true */
	
	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 *
	 * @param {?DOMNode} outerNode Outer DOM node.
	 * @param {?DOMNode} innerNode Inner DOM node.
	 * @return {boolean} True if `outerNode` contains or is `innerNode`.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode(outerNode)) {
	    return false;
	  } else if (isTextNode(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if (outerNode.contains) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}
	
	module.exports = containsNode;


/***/ },
/* 120 */
/*!*******************************************************!*\
  !*** ./~/react/lib/getReactRootElementInContainer.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getReactRootElementInContainer
	 */
	
	"use strict";
	
	var DOC_NODE_TYPE = 9;
	
	/**
	 * @param {DOMElement|DOMDocument} container DOM element that may contain
	 *                                           a React component
	 * @return {?*} DOM element that may have the reactRoot ID, or null.
	 */
	function getReactRootElementInContainer(container) {
	  if (!container) {
	    return null;
	  }
	
	  if (container.nodeType === DOC_NODE_TYPE) {
	    return container.documentElement;
	  } else {
	    return container.firstChild;
	  }
	}
	
	module.exports = getReactRootElementInContainer;


/***/ },
/* 121 */
/*!**************************************!*\
  !*** ./~/react/lib/emptyFunction.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */
	
	function makeEmptyFunction(arg) {
	  return function() {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function() { return this; };
	emptyFunction.thatReturnsArgument = function(arg) { return arg; };
	
	module.exports = emptyFunction;


/***/ },
/* 122 */
/*!********************************************!*\
  !*** ./~/react/lib/ReactMarkupChecksum.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMarkupChecksum
	 */
	
	"use strict";
	
	var adler32 = __webpack_require__(/*! ./adler32 */ 167);
	
	var ReactMarkupChecksum = {
	  CHECKSUM_ATTR_NAME: 'data-react-checksum',
	
	  /**
	   * @param {string} markup Markup string
	   * @return {string} Markup string with checksum attribute attached
	   */
	  addChecksumToMarkup: function(markup) {
	    var checksum = adler32(markup);
	    return markup.replace(
	      '>',
	      ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '">'
	    );
	  },
	
	  /**
	   * @param {string} markup to use
	   * @param {DOMElement} element root React element
	   * @returns {boolean} whether or not the markup is the same
	   */
	  canReuseMarkup: function(markup, element) {
	    var existingChecksum = element.getAttribute(
	      ReactMarkupChecksum.CHECKSUM_ATTR_NAME
	    );
	    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
	    var markupChecksum = adler32(markup);
	    return markupChecksum === existingChecksum;
	  }
	};
	
	module.exports = ReactMarkupChecksum;


/***/ },
/* 123 */
/*!********************************************************!*\
  !*** ./~/react/lib/ReactServerRenderingTransaction.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerRenderingTransaction
	 * @typechecks
	 */
	
	"use strict";
	
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 72);
	var CallbackQueue = __webpack_require__(/*! ./CallbackQueue */ 124);
	var ReactPutListenerQueue = __webpack_require__(/*! ./ReactPutListenerQueue */ 168);
	var Transaction = __webpack_require__(/*! ./Transaction */ 125);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 121);
	
	/**
	 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
	 * during the performing of the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function() {
	    this.reactMountReady.reset();
	  },
	
	  close: emptyFunction
	};
	
	var PUT_LISTENER_QUEUEING = {
	  initialize: function() {
	    this.putListenerQueue.reset();
	  },
	
	  close: emptyFunction
	};
	
	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [
	  PUT_LISTENER_QUEUEING,
	  ON_DOM_READY_QUEUEING
	];
	
	/**
	 * @class ReactServerRenderingTransaction
	 * @param {boolean} renderToStaticMarkup
	 */
	function ReactServerRenderingTransaction(renderToStaticMarkup) {
	  this.reinitializeTransaction();
	  this.renderToStaticMarkup = renderToStaticMarkup;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.putListenerQueue = ReactPutListenerQueue.getPooled();
	}
	
	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array} Empty list of operation wrap proceedures.
	   */
	  getTransactionWrappers: function() {
	    return TRANSACTION_WRAPPERS;
	  },
	
	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function() {
	    return this.reactMountReady;
	  },
	
	  getPutListenerQueue: function() {
	    return this.putListenerQueue;
	  },
	
	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be resused.
	   */
	  destructor: function() {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;
	
	    ReactPutListenerQueue.release(this.putListenerQueue);
	    this.putListenerQueue = null;
	  }
	};
	
	
	assign(
	  ReactServerRenderingTransaction.prototype,
	  Transaction.Mixin,
	  Mixin
	);
	
	PooledClass.addPoolingTo(ReactServerRenderingTransaction);
	
	module.exports = ReactServerRenderingTransaction;


/***/ },
/* 124 */
/*!**************************************!*\
  !*** ./~/react/lib/CallbackQueue.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CallbackQueue
	 */
	
	"use strict";
	
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 72);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * A specialized pseudo-event module to help keep track of components waiting to
	 * be notified when their DOM representations are available for use.
	 *
	 * This implements `PooledClass`, so you should never need to instantiate this.
	 * Instead, use `CallbackQueue.getPooled()`.
	 *
	 * @class ReactMountReady
	 * @implements PooledClass
	 * @internal
	 */
	function CallbackQueue() {
	  this._callbacks = null;
	  this._contexts = null;
	}
	
	assign(CallbackQueue.prototype, {
	
	  /**
	   * Enqueues a callback to be invoked when `notifyAll` is invoked.
	   *
	   * @param {function} callback Invoked when `notifyAll` is invoked.
	   * @param {?object} context Context to call `callback` with.
	   * @internal
	   */
	  enqueue: function(callback, context) {
	    this._callbacks = this._callbacks || [];
	    this._contexts = this._contexts || [];
	    this._callbacks.push(callback);
	    this._contexts.push(context);
	  },
	
	  /**
	   * Invokes all enqueued callbacks and clears the queue. This is invoked after
	   * the DOM representation of a component has been created or updated.
	   *
	   * @internal
	   */
	  notifyAll: function() {
	    var callbacks = this._callbacks;
	    var contexts = this._contexts;
	    if (callbacks) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        callbacks.length === contexts.length,
	        "Mismatched list of contexts in callback queue"
	      ) : invariant(callbacks.length === contexts.length));
	      this._callbacks = null;
	      this._contexts = null;
	      for (var i = 0, l = callbacks.length; i < l; i++) {
	        callbacks[i].call(contexts[i]);
	      }
	      callbacks.length = 0;
	      contexts.length = 0;
	    }
	  },
	
	  /**
	   * Resets the internal queue.
	   *
	   * @internal
	   */
	  reset: function() {
	    this._callbacks = null;
	    this._contexts = null;
	  },
	
	  /**
	   * `PooledClass` looks for this.
	   */
	  destructor: function() {
	    this.reset();
	  }
	
	});
	
	PooledClass.addPoolingTo(CallbackQueue);
	
	module.exports = CallbackQueue;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 125 */
/*!************************************!*\
  !*** ./~/react/lib/Transaction.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Transaction
	 */
	
	"use strict";
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * `Transaction` creates a black box that is able to wrap any method such that
	 * certain invariants are maintained before and after the method is invoked
	 * (Even if an exception is thrown while invoking the wrapped method). Whoever
	 * instantiates a transaction can provide enforcers of the invariants at
	 * creation time. The `Transaction` class itself will supply one additional
	 * automatic invariant for you - the invariant that any transaction instance
	 * should not be run while it is already being run. You would typically create a
	 * single instance of a `Transaction` for reuse multiple times, that potentially
	 * is used to wrap several different methods. Wrappers are extremely simple -
	 * they only require implementing two methods.
	 *
	 * <pre>
	 *                       wrappers (injected at creation time)
	 *                                      +        +
	 *                                      |        |
	 *                    +-----------------|--------|--------------+
	 *                    |                 v        |              |
	 *                    |      +---------------+   |              |
	 *                    |   +--|    wrapper1   |---|----+         |
	 *                    |   |  +---------------+   v    |         |
	 *                    |   |          +-------------+  |         |
	 *                    |   |     +----|   wrapper2  |--------+   |
	 *                    |   |     |    +-------------+  |     |   |
	 *                    |   |     |                     |     |   |
	 *                    |   v     v                     v     v   | wrapper
	 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
	 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
	 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | +---+ +---+   +---------+   +---+ +---+ |
	 *                    |  initialize                    close    |
	 *                    +-----------------------------------------+
	 * </pre>
	 *
	 * Use cases:
	 * - Preserving the input selection ranges before/after reconciliation.
	 *   Restoring selection even in the event of an unexpected error.
	 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
	 *   while guaranteeing that afterwards, the event system is reactivated.
	 * - Flushing a queue of collected DOM mutations to the main UI thread after a
	 *   reconciliation takes place in a worker thread.
	 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
	 *   content.
	 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
	 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
	 * - (Future use case): Layout calculations before and after DOM upates.
	 *
	 * Transactional plugin API:
	 * - A module that has an `initialize` method that returns any precomputation.
	 * - and a `close` method that accepts the precomputation. `close` is invoked
	 *   when the wrapped process is completed, or has failed.
	 *
	 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
	 * that implement `initialize` and `close`.
	 * @return {Transaction} Single transaction for reuse in thread.
	 *
	 * @class Transaction
	 */
	var Mixin = {
	  /**
	   * Sets up this instance so that it is prepared for collecting metrics. Does
	   * so such that this setup method may be used on an instance that is already
	   * initialized, in a way that does not consume additional memory upon reuse.
	   * That can be useful if you decide to make your subclass of this mixin a
	   * "PooledClass".
	   */
	  reinitializeTransaction: function() {
	    this.transactionWrappers = this.getTransactionWrappers();
	    if (!this.wrapperInitData) {
	      this.wrapperInitData = [];
	    } else {
	      this.wrapperInitData.length = 0;
	    }
	    this._isInTransaction = false;
	  },
	
	  _isInTransaction: false,
	
	  /**
	   * @abstract
	   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
	   */
	  getTransactionWrappers: null,
	
	  isInTransaction: function() {
	    return !!this._isInTransaction;
	  },
	
	  /**
	   * Executes the function within a safety window. Use this for the top level
	   * methods that result in large amounts of computation/mutations that would
	   * need to be safety checked.
	   *
	   * @param {function} method Member of scope to call.
	   * @param {Object} scope Scope to invoke from.
	   * @param {Object?=} args... Arguments to pass to the method (optional).
	   *                           Helps prevent need to bind in many cases.
	   * @return Return value from `method`.
	   */
	  perform: function(method, scope, a, b, c, d, e, f) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !this.isInTransaction(),
	      'Transaction.perform(...): Cannot initialize a transaction when there ' +
	      'is already an outstanding transaction.'
	    ) : invariant(!this.isInTransaction()));
	    var errorThrown;
	    var ret;
	    try {
	      this._isInTransaction = true;
	      // Catching errors makes debugging more difficult, so we start with
	      // errorThrown set to true before setting it to false after calling
	      // close -- if it's still set to true in the finally block, it means
	      // one of these calls threw.
	      errorThrown = true;
	      this.initializeAll(0);
	      ret = method.call(scope, a, b, c, d, e, f);
	      errorThrown = false;
	    } finally {
	      try {
	        if (errorThrown) {
	          // If `method` throws, prefer to show that stack trace over any thrown
	          // by invoking `closeAll`.
	          try {
	            this.closeAll(0);
	          } catch (err) {
	          }
	        } else {
	          // Since `method` didn't throw, we don't want to silence the exception
	          // here.
	          this.closeAll(0);
	        }
	      } finally {
	        this._isInTransaction = false;
	      }
	    }
	    return ret;
	  },
	
	  initializeAll: function(startIndex) {
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      try {
	        // Catching errors makes debugging more difficult, so we start with the
	        // OBSERVED_ERROR state before overwriting it with the real return value
	        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
	        // block, it means wrapper.initialize threw.
	        this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
	        this.wrapperInitData[i] = wrapper.initialize ?
	          wrapper.initialize.call(this) :
	          null;
	      } finally {
	        if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
	          // The initializer for wrapper i threw an error; initialize the
	          // remaining wrappers but silence any exceptions from them to ensure
	          // that the first error is the one to bubble up.
	          try {
	            this.initializeAll(i + 1);
	          } catch (err) {
	          }
	        }
	      }
	    }
	  },
	
	  /**
	   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
	   * them the respective return values of `this.transactionWrappers.init[i]`
	   * (`close`rs that correspond to initializers that failed will not be
	   * invoked).
	   */
	  closeAll: function(startIndex) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      this.isInTransaction(),
	      'Transaction.closeAll(): Cannot close transaction when none are open.'
	    ) : invariant(this.isInTransaction()));
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      var initData = this.wrapperInitData[i];
	      var errorThrown;
	      try {
	        // Catching errors makes debugging more difficult, so we start with
	        // errorThrown set to true before setting it to false after calling
	        // close -- if it's still set to true in the finally block, it means
	        // wrapper.close threw.
	        errorThrown = true;
	        if (initData !== Transaction.OBSERVED_ERROR) {
	          wrapper.close && wrapper.close.call(this, initData);
	        }
	        errorThrown = false;
	      } finally {
	        if (errorThrown) {
	          // The closer for wrapper i threw an error; close the remaining
	          // wrappers but silence any exceptions from them to ensure that the
	          // first error is the one to bubble up.
	          try {
	            this.closeAll(i + 1);
	          } catch (e) {
	          }
	        }
	      }
	    }
	    this.wrapperInitData.length = 0;
	  }
	};
	
	var Transaction = {
	
	  Mixin: Mixin,
	
	  /**
	   * Token to look for to determine if an error occured.
	   */
	  OBSERVED_ERROR: {}
	
	};
	
	module.exports = Transaction;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 126 */
/*!************************************!*\
  !*** ./~/react/lib/emptyObject.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyObject
	 */
	
	"use strict";
	
	var emptyObject = {};
	
	if ("production" !== process.env.NODE_ENV) {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 127 */
/*!************************************!*\
  !*** ./~/react/lib/joinClasses.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule joinClasses
	 * @typechecks static-only
	 */
	
	"use strict";
	
	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	function joinClasses(className/*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}
	
	module.exports = joinClasses;


/***/ },
/* 128 */
/*!*********************************************!*\
  !*** ./~/react/lib/ReactNativeComponent.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNativeComponent
	 */
	
	"use strict";
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	var genericComponentClass = null;
	// This registry keeps track of wrapper classes around native tags
	var tagToComponentClass = {};
	
	var ReactNativeComponentInjection = {
	  // This accepts a class that receives the tag string. This is a catch all
	  // that can render any kind of tag.
	  injectGenericComponentClass: function(componentClass) {
	    genericComponentClass = componentClass;
	  },
	  // This accepts a keyed object with classes as values. Each key represents a
	  // tag. That particular tag will use this class instead of the generic one.
	  injectComponentClasses: function(componentClasses) {
	    assign(tagToComponentClass, componentClasses);
	  }
	};
	
	/**
	 * Create an internal class for a specific tag.
	 *
	 * @param {string} tag The tag for which to create an internal instance.
	 * @param {any} props The props passed to the instance constructor.
	 * @return {ReactComponent} component The injected empty component.
	 */
	function createInstanceForTag(tag, props, parentType) {
	  var componentClass = tagToComponentClass[tag];
	  if (componentClass == null) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      genericComponentClass,
	      'There is no registered component for the tag %s',
	      tag
	    ) : invariant(genericComponentClass));
	    return new genericComponentClass(tag, props);
	  }
	  if (parentType === tag) {
	    // Avoid recursion
	    ("production" !== process.env.NODE_ENV ? invariant(
	      genericComponentClass,
	      'There is no registered component for the tag %s',
	      tag
	    ) : invariant(genericComponentClass));
	    return new genericComponentClass(tag, props);
	  }
	  // Unwrap legacy factories
	  return new componentClass.type(props);
	}
	
	var ReactNativeComponent = {
	  createInstanceForTag: createInstanceForTag,
	  injection: ReactNativeComponentInjection,
	};
	
	module.exports = ReactNativeComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 129 */
/*!************************************!*\
  !*** ./~/react/lib/CSSProperty.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */
	
	"use strict";
	
	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	  columnCount: true,
	  fillOpacity: true,
	  flex: true,
	  flexGrow: true,
	  flexShrink: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  widows: true,
	  zIndex: true,
	  zoom: true
	};
	
	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}
	
	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	
	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function(prop) {
	  prefixes.forEach(function(prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});
	
	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundImage: true,
	    backgroundPosition: true,
	    backgroundRepeat: true,
	    backgroundColor: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  }
	};
	
	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};
	
	module.exports = CSSProperty;


/***/ },
/* 130 */
/*!******************************************!*\
  !*** ./~/react/lib/camelizeStyleName.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelizeStyleName
	 * @typechecks
	 */
	
	"use strict";
	
	var camelize = __webpack_require__(/*! ./camelize */ 169);
	
	var msPattern = /^-ms-/;
	
	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}
	
	module.exports = camelizeStyleName;


/***/ },
/* 131 */
/*!********************************************!*\
  !*** ./~/react/lib/dangerousStyleValue.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var CSSProperty = __webpack_require__(/*! ./CSSProperty */ 129);
	
	var isUnitlessNumber = CSSProperty.isUnitlessNumber;
	
	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901
	
	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }
	
	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 ||
	      isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }
	
	  if (typeof value === 'string') {
	    value = value.trim();
	  }
	  return value + 'px';
	}
	
	module.exports = dangerousStyleValue;


/***/ },
/* 132 */
/*!*******************************************!*\
  !*** ./~/react/lib/hyphenateStyleName.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenateStyleName
	 * @typechecks
	 */
	
	"use strict";
	
	var hyphenate = __webpack_require__(/*! ./hyphenate */ 172);
	
	var msPattern = /^ms-/;
	
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;


/***/ },
/* 133 */
/*!*****************************************!*\
  !*** ./~/react/lib/EventPropagators.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPropagators
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 66);
	var EventPluginHub = __webpack_require__(/*! ./EventPluginHub */ 135);
	
	var accumulateInto = __webpack_require__(/*! ./accumulateInto */ 170);
	var forEachAccumulated = __webpack_require__(/*! ./forEachAccumulated */ 171);
	
	var PropagationPhases = EventConstants.PropagationPhases;
	var getListener = EventPluginHub.getListener;
	
	/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */
	function listenerAtPhase(id, event, propagationPhase) {
	  var registrationName =
	    event.dispatchConfig.phasedRegistrationNames[propagationPhase];
	  return getListener(id, registrationName);
	}
	
	/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
	function accumulateDirectionalDispatches(domID, upwards, event) {
	  if ("production" !== process.env.NODE_ENV) {
	    if (!domID) {
	      throw new Error('Dispatching id must not be null');
	    }
	  }
	  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
	  var listener = listenerAtPhase(domID, event, phase);
	  if (listener) {
	    event._dispatchListeners =
	      accumulateInto(event._dispatchListeners, listener);
	    event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
	  }
	}
	
	/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We can not perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
	function accumulateTwoPhaseDispatchesSingle(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(
	      event.dispatchMarker,
	      accumulateDirectionalDispatches,
	      event
	    );
	  }
	}
	
	
	/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
	function accumulateDispatches(id, ignoredDirection, event) {
	  if (event && event.dispatchConfig.registrationName) {
	    var registrationName = event.dispatchConfig.registrationName;
	    var listener = getListener(id, registrationName);
	    if (listener) {
	      event._dispatchListeners =
	        accumulateInto(event._dispatchListeners, listener);
	      event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
	    }
	  }
	}
	
	/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
	function accumulateDirectDispatchesSingle(event) {
	  if (event && event.dispatchConfig.registrationName) {
	    accumulateDispatches(event.dispatchMarker, null, event);
	  }
	}
	
	function accumulateTwoPhaseDispatches(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
	}
	
	function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
	  EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(
	    fromID,
	    toID,
	    accumulateDispatches,
	    leave,
	    enter
	  );
	}
	
	
	function accumulateDirectDispatches(events) {
	  forEachAccumulated(events, accumulateDirectDispatchesSingle);
	}
	
	
	
	/**
	 * A small set of propagation patterns, each of which will accept a small amount
	 * of information, and generate a set of "dispatch ready event objects" - which
	 * are sets of events that have already been annotated with a set of dispatched
	 * listener functions/ids. The API is designed this way to discourage these
	 * propagation strategies from actually executing the dispatches, since we
	 * always want to collect the entire set of dispatches before executing event a
	 * single one.
	 *
	 * @constructor EventPropagators
	 */
	var EventPropagators = {
	  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
	  accumulateDirectDispatches: accumulateDirectDispatches,
	  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
	};
	
	module.exports = EventPropagators;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 134 */
/*!********************************************!*\
  !*** ./~/react/lib/SyntheticInputEvent.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013 Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticInputEvent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 136);
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
	 *      /#events-inputevents
	 */
	var InputEventInterface = {
	  data: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticInputEvent(
	  dispatchConfig,
	  dispatchMarker,
	  nativeEvent) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}
	
	SyntheticEvent.augmentClass(
	  SyntheticInputEvent,
	  InputEventInterface
	);
	
	module.exports = SyntheticInputEvent;
	


/***/ },
/* 135 */
/*!***************************************!*\
  !*** ./~/react/lib/EventPluginHub.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginHub
	 */
	
	"use strict";
	
	var EventPluginRegistry = __webpack_require__(/*! ./EventPluginRegistry */ 138);
	var EventPluginUtils = __webpack_require__(/*! ./EventPluginUtils */ 31);
	
	var accumulateInto = __webpack_require__(/*! ./accumulateInto */ 170);
	var forEachAccumulated = __webpack_require__(/*! ./forEachAccumulated */ 171);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * Internal store for event listeners
	 */
	var listenerBank = {};
	
	/**
	 * Internal queue of events that have accumulated their dispatches and are
	 * waiting to have their dispatches executed.
	 */
	var eventQueue = null;
	
	/**
	 * Dispatches an event and releases it back into the pool, unless persistent.
	 *
	 * @param {?object} event Synthetic event to be dispatched.
	 * @private
	 */
	var executeDispatchesAndRelease = function(event) {
	  if (event) {
	    var executeDispatch = EventPluginUtils.executeDispatch;
	    // Plugins can provide custom behavior when dispatching events.
	    var PluginModule = EventPluginRegistry.getPluginModuleForEvent(event);
	    if (PluginModule && PluginModule.executeDispatch) {
	      executeDispatch = PluginModule.executeDispatch;
	    }
	    EventPluginUtils.executeDispatchesInOrder(event, executeDispatch);
	
	    if (!event.isPersistent()) {
	      event.constructor.release(event);
	    }
	  }
	};
	
	/**
	 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
	 *   hierarchy given ids of the logical DOM elements involved.
	 */
	var InstanceHandle = null;
	
	function validateInstanceHandle() {
	  var invalid = !InstanceHandle||
	    !InstanceHandle.traverseTwoPhase ||
	    !InstanceHandle.traverseEnterLeave;
	  if (invalid) {
	    throw new Error('InstanceHandle not injected before use!');
	  }
	}
	
	/**
	 * This is a unified interface for event plugins to be installed and configured.
	 *
	 * Event plugins can implement the following properties:
	 *
	 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
	 *     Required. When a top-level event is fired, this method is expected to
	 *     extract synthetic events that will in turn be queued and dispatched.
	 *
	 *   `eventTypes` {object}
	 *     Optional, plugins that fire events must publish a mapping of registration
	 *     names that are used to register listeners. Values of this mapping must
	 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
	 *
	 *   `executeDispatch` {function(object, function, string)}
	 *     Optional, allows plugins to override how an event gets dispatched. By
	 *     default, the listener is simply invoked.
	 *
	 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
	 *
	 * @public
	 */
	var EventPluginHub = {
	
	  /**
	   * Methods for injecting dependencies.
	   */
	  injection: {
	
	    /**
	     * @param {object} InjectedMount
	     * @public
	     */
	    injectMount: EventPluginUtils.injection.injectMount,
	
	    /**
	     * @param {object} InjectedInstanceHandle
	     * @public
	     */
	    injectInstanceHandle: function(InjectedInstanceHandle) {
	      InstanceHandle = InjectedInstanceHandle;
	      if ("production" !== process.env.NODE_ENV) {
	        validateInstanceHandle();
	      }
	    },
	
	    getInstanceHandle: function() {
	      if ("production" !== process.env.NODE_ENV) {
	        validateInstanceHandle();
	      }
	      return InstanceHandle;
	    },
	
	    /**
	     * @param {array} InjectedEventPluginOrder
	     * @public
	     */
	    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,
	
	    /**
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     */
	    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName
	
	  },
	
	  eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,
	
	  registrationNameModules: EventPluginRegistry.registrationNameModules,
	
	  /**
	   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {?function} listener The callback to store.
	   */
	  putListener: function(id, registrationName, listener) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !listener || typeof listener === 'function',
	      'Expected %s listener to be a function, instead got type %s',
	      registrationName, typeof listener
	    ) : invariant(!listener || typeof listener === 'function'));
	
	    var bankForRegistrationName =
	      listenerBank[registrationName] || (listenerBank[registrationName] = {});
	    bankForRegistrationName[id] = listener;
	  },
	
	  /**
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @return {?function} The stored callback.
	   */
	  getListener: function(id, registrationName) {
	    var bankForRegistrationName = listenerBank[registrationName];
	    return bankForRegistrationName && bankForRegistrationName[id];
	  },
	
	  /**
	   * Deletes a listener from the registration bank.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   */
	  deleteListener: function(id, registrationName) {
	    var bankForRegistrationName = listenerBank[registrationName];
	    if (bankForRegistrationName) {
	      delete bankForRegistrationName[id];
	    }
	  },
	
	  /**
	   * Deletes all listeners for the DOM element with the supplied ID.
	   *
	   * @param {string} id ID of the DOM element.
	   */
	  deleteAllListeners: function(id) {
	    for (var registrationName in listenerBank) {
	      delete listenerBank[registrationName][id];
	    }
	  },
	
	  /**
	   * Allows registered plugins an opportunity to extract events from top-level
	   * native browser events.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @internal
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    var events;
	    var plugins = EventPluginRegistry.plugins;
	    for (var i = 0, l = plugins.length; i < l; i++) {
	      // Not every plugin in the ordering may be loaded at runtime.
	      var possiblePlugin = plugins[i];
	      if (possiblePlugin) {
	        var extractedEvents = possiblePlugin.extractEvents(
	          topLevelType,
	          topLevelTarget,
	          topLevelTargetID,
	          nativeEvent
	        );
	        if (extractedEvents) {
	          events = accumulateInto(events, extractedEvents);
	        }
	      }
	    }
	    return events;
	  },
	
	  /**
	   * Enqueues a synthetic event that should be dispatched when
	   * `processEventQueue` is invoked.
	   *
	   * @param {*} events An accumulation of synthetic events.
	   * @internal
	   */
	  enqueueEvents: function(events) {
	    if (events) {
	      eventQueue = accumulateInto(eventQueue, events);
	    }
	  },
	
	  /**
	   * Dispatches all synthetic events on the event queue.
	   *
	   * @internal
	   */
	  processEventQueue: function() {
	    // Set `eventQueue` to null before processing it so that we can tell if more
	    // events get enqueued while processing.
	    var processingEventQueue = eventQueue;
	    eventQueue = null;
	    forEachAccumulated(processingEventQueue, executeDispatchesAndRelease);
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !eventQueue,
	      'processEventQueue(): Additional events were enqueued while processing ' +
	      'an event queue. Support for this has not yet been implemented.'
	    ) : invariant(!eventQueue));
	  },
	
	  /**
	   * These are needed for tests only. Do not use!
	   */
	  __purge: function() {
	    listenerBank = {};
	  },
	
	  __getListenerBank: function() {
	    return listenerBank;
	  }
	
	};
	
	module.exports = EventPluginHub;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 136 */
/*!***************************************!*\
  !*** ./~/react/lib/SyntheticEvent.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticEvent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 72);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 121);
	var getEventTarget = __webpack_require__(/*! ./getEventTarget */ 152);
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var EventInterface = {
	  type: null,
	  target: getEventTarget,
	  // currentTarget is set when dispatching; no use in copying it here
	  currentTarget: emptyFunction.thatReturnsNull,
	  eventPhase: null,
	  bubbles: null,
	  cancelable: null,
	  timeStamp: function(event) {
	    return event.timeStamp || Date.now();
	  },
	  defaultPrevented: null,
	  isTrusted: null
	};
	
	/**
	 * Synthetic events are dispatched by event plugins, typically in response to a
	 * top-level event delegation handler.
	 *
	 * These systems should generally use pooling to reduce the frequency of garbage
	 * collection. The system should check `isPersistent` to determine whether the
	 * event should be released into the pool after being dispatched. Users that
	 * need a persisted event should invoke `persist`.
	 *
	 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
	 * normalizing browser quirks. Subclasses do not necessarily have to implement a
	 * DOM interface; custom application-specific events can also subclass this.
	 *
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 */
	function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  this.dispatchConfig = dispatchConfig;
	  this.dispatchMarker = dispatchMarker;
	  this.nativeEvent = nativeEvent;
	
	  var Interface = this.constructor.Interface;
	  for (var propName in Interface) {
	    if (!Interface.hasOwnProperty(propName)) {
	      continue;
	    }
	    var normalize = Interface[propName];
	    if (normalize) {
	      this[propName] = normalize(nativeEvent);
	    } else {
	      this[propName] = nativeEvent[propName];
	    }
	  }
	
	  var defaultPrevented = nativeEvent.defaultPrevented != null ?
	    nativeEvent.defaultPrevented :
	    nativeEvent.returnValue === false;
	  if (defaultPrevented) {
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  } else {
	    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
	  }
	  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
	}
	
	assign(SyntheticEvent.prototype, {
	
	  preventDefault: function() {
	    this.defaultPrevented = true;
	    var event = this.nativeEvent;
	    event.preventDefault ? event.preventDefault() : event.returnValue = false;
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  },
	
	  stopPropagation: function() {
	    var event = this.nativeEvent;
	    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
	    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
	  },
	
	  /**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
	  persist: function() {
	    this.isPersistent = emptyFunction.thatReturnsTrue;
	  },
	
	  /**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
	  isPersistent: emptyFunction.thatReturnsFalse,
	
	  /**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
	  destructor: function() {
	    var Interface = this.constructor.Interface;
	    for (var propName in Interface) {
	      this[propName] = null;
	    }
	    this.dispatchConfig = null;
	    this.dispatchMarker = null;
	    this.nativeEvent = null;
	  }
	
	});
	
	SyntheticEvent.Interface = EventInterface;
	
	/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
	SyntheticEvent.augmentClass = function(Class, Interface) {
	  var Super = this;
	
	  var prototype = Object.create(Super.prototype);
	  assign(prototype, Class.prototype);
	  Class.prototype = prototype;
	  Class.prototype.constructor = Class;
	
	  Class.Interface = assign({}, Super.Interface, Interface);
	  Class.augmentClass = Super.augmentClass;
	
	  PooledClass.addPoolingTo(Class, PooledClass.threeArgumentPooler);
	};
	
	PooledClass.addPoolingTo(SyntheticEvent, PooledClass.threeArgumentPooler);
	
	module.exports = SyntheticEvent;


/***/ },
/* 137 */
/*!*******************************************!*\
  !*** ./~/react/lib/isTextInputElement.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextInputElement
	 */
	
	"use strict";
	
	/**
	 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
	 */
	var supportedInputTypes = {
	  'color': true,
	  'date': true,
	  'datetime': true,
	  'datetime-local': true,
	  'email': true,
	  'month': true,
	  'number': true,
	  'password': true,
	  'range': true,
	  'search': true,
	  'tel': true,
	  'text': true,
	  'time': true,
	  'url': true,
	  'week': true
	};
	
	function isTextInputElement(elem) {
	  return elem && (
	    (elem.nodeName === 'INPUT' && supportedInputTypes[elem.type]) ||
	    elem.nodeName === 'TEXTAREA'
	  );
	}
	
	module.exports = isTextInputElement;


/***/ },
/* 138 */
/*!********************************************!*\
  !*** ./~/react/lib/EventPluginRegistry.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginRegistry
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * Injectable ordering of event plugins.
	 */
	var EventPluginOrder = null;
	
	/**
	 * Injectable mapping from names to event plugin modules.
	 */
	var namesToPlugins = {};
	
	/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */
	function recomputePluginOrdering() {
	  if (!EventPluginOrder) {
	    // Wait until an `EventPluginOrder` is injected.
	    return;
	  }
	  for (var pluginName in namesToPlugins) {
	    var PluginModule = namesToPlugins[pluginName];
	    var pluginIndex = EventPluginOrder.indexOf(pluginName);
	    ("production" !== process.env.NODE_ENV ? invariant(
	      pluginIndex > -1,
	      'EventPluginRegistry: Cannot inject event plugins that do not exist in ' +
	      'the plugin ordering, `%s`.',
	      pluginName
	    ) : invariant(pluginIndex > -1));
	    if (EventPluginRegistry.plugins[pluginIndex]) {
	      continue;
	    }
	    ("production" !== process.env.NODE_ENV ? invariant(
	      PluginModule.extractEvents,
	      'EventPluginRegistry: Event plugins must implement an `extractEvents` ' +
	      'method, but `%s` does not.',
	      pluginName
	    ) : invariant(PluginModule.extractEvents));
	    EventPluginRegistry.plugins[pluginIndex] = PluginModule;
	    var publishedEvents = PluginModule.eventTypes;
	    for (var eventName in publishedEvents) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        publishEventForPlugin(
	          publishedEvents[eventName],
	          PluginModule,
	          eventName
	        ),
	        'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',
	        eventName,
	        pluginName
	      ) : invariant(publishEventForPlugin(
	        publishedEvents[eventName],
	        PluginModule,
	        eventName
	      )));
	    }
	  }
	}
	
	/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */
	function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    !EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName),
	    'EventPluginHub: More than one plugin attempted to publish the same ' +
	    'event name, `%s`.',
	    eventName
	  ) : invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)));
	  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;
	
	  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
	  if (phasedRegistrationNames) {
	    for (var phaseName in phasedRegistrationNames) {
	      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
	        var phasedRegistrationName = phasedRegistrationNames[phaseName];
	        publishRegistrationName(
	          phasedRegistrationName,
	          PluginModule,
	          eventName
	        );
	      }
	    }
	    return true;
	  } else if (dispatchConfig.registrationName) {
	    publishRegistrationName(
	      dispatchConfig.registrationName,
	      PluginModule,
	      eventName
	    );
	    return true;
	  }
	  return false;
	}
	
	/**
	 * Publishes a registration name that is used to identify dispatched events and
	 * can be used with `EventPluginHub.putListener` to register listeners.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */
	function publishRegistrationName(registrationName, PluginModule, eventName) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    !EventPluginRegistry.registrationNameModules[registrationName],
	    'EventPluginHub: More than one plugin attempted to publish the same ' +
	    'registration name, `%s`.',
	    registrationName
	  ) : invariant(!EventPluginRegistry.registrationNameModules[registrationName]));
	  EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
	  EventPluginRegistry.registrationNameDependencies[registrationName] =
	    PluginModule.eventTypes[eventName].dependencies;
	}
	
	/**
	 * Registers plugins so that they can extract and dispatch events.
	 *
	 * @see {EventPluginHub}
	 */
	var EventPluginRegistry = {
	
	  /**
	   * Ordered list of injected plugins.
	   */
	  plugins: [],
	
	  /**
	   * Mapping from event name to dispatch config
	   */
	  eventNameDispatchConfigs: {},
	
	  /**
	   * Mapping from registration name to plugin module
	   */
	  registrationNameModules: {},
	
	  /**
	   * Mapping from registration name to event name
	   */
	  registrationNameDependencies: {},
	
	  /**
	   * Injects an ordering of plugins (by plugin name). This allows the ordering
	   * to be decoupled from injection of the actual plugins so that ordering is
	   * always deterministic regardless of packaging, on-the-fly injection, etc.
	   *
	   * @param {array} InjectedEventPluginOrder
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginOrder}
	   */
	  injectEventPluginOrder: function(InjectedEventPluginOrder) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !EventPluginOrder,
	      'EventPluginRegistry: Cannot inject event plugin ordering more than ' +
	      'once. You are likely trying to load more than one copy of React.'
	    ) : invariant(!EventPluginOrder));
	    // Clone the ordering so it cannot be dynamically mutated.
	    EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
	    recomputePluginOrdering();
	  },
	
	  /**
	   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	   * in the ordering injected by `injectEventPluginOrder`.
	   *
	   * Plugins can be injected as part of page initialization or on-the-fly.
	   *
	   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginsByName}
	   */
	  injectEventPluginsByName: function(injectedNamesToPlugins) {
	    var isOrderingDirty = false;
	    for (var pluginName in injectedNamesToPlugins) {
	      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
	        continue;
	      }
	      var PluginModule = injectedNamesToPlugins[pluginName];
	      if (!namesToPlugins.hasOwnProperty(pluginName) ||
	          namesToPlugins[pluginName] !== PluginModule) {
	        ("production" !== process.env.NODE_ENV ? invariant(
	          !namesToPlugins[pluginName],
	          'EventPluginRegistry: Cannot inject two different event plugins ' +
	          'using the same name, `%s`.',
	          pluginName
	        ) : invariant(!namesToPlugins[pluginName]));
	        namesToPlugins[pluginName] = PluginModule;
	        isOrderingDirty = true;
	      }
	    }
	    if (isOrderingDirty) {
	      recomputePluginOrdering();
	    }
	  },
	
	  /**
	   * Looks up the plugin for the supplied event.
	   *
	   * @param {object} event A synthetic event.
	   * @return {?object} The plugin that created the supplied event.
	   * @internal
	   */
	  getPluginModuleForEvent: function(event) {
	    var dispatchConfig = event.dispatchConfig;
	    if (dispatchConfig.registrationName) {
	      return EventPluginRegistry.registrationNameModules[
	        dispatchConfig.registrationName
	      ] || null;
	    }
	    for (var phase in dispatchConfig.phasedRegistrationNames) {
	      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
	        continue;
	      }
	      var PluginModule = EventPluginRegistry.registrationNameModules[
	        dispatchConfig.phasedRegistrationNames[phase]
	      ];
	      if (PluginModule) {
	        return PluginModule;
	      }
	    }
	    return null;
	  },
	
	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _resetEventPlugins: function() {
	    EventPluginOrder = null;
	    for (var pluginName in namesToPlugins) {
	      if (namesToPlugins.hasOwnProperty(pluginName)) {
	        delete namesToPlugins[pluginName];
	      }
	    }
	    EventPluginRegistry.plugins.length = 0;
	
	    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
	    for (var eventName in eventNameDispatchConfigs) {
	      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
	        delete eventNameDispatchConfigs[eventName];
	      }
	    }
	
	    var registrationNameModules = EventPluginRegistry.registrationNameModules;
	    for (var registrationName in registrationNameModules) {
	      if (registrationNameModules.hasOwnProperty(registrationName)) {
	        delete registrationNameModules[registrationName];
	      }
	    }
	  }
	
	};
	
	module.exports = EventPluginRegistry;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 139 */
/*!***********************************************!*\
  !*** ./~/react/lib/ReactEventEmitterMixin.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventEmitterMixin
	 */
	
	"use strict";
	
	var EventPluginHub = __webpack_require__(/*! ./EventPluginHub */ 135);
	
	function runEventQueueInBatch(events) {
	  EventPluginHub.enqueueEvents(events);
	  EventPluginHub.processEventQueue();
	}
	
	var ReactEventEmitterMixin = {
	
	  /**
	   * Streams a fired top-level event to `EventPluginHub` where plugins have the
	   * opportunity to create `ReactEvent`s to be dispatched.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {object} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native environment event.
	   */
	  handleTopLevel: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    var events = EventPluginHub.extractEvents(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent
	    );
	
	    runEventQueueInBatch(events);
	  }
	};
	
	module.exports = ReactEventEmitterMixin;


/***/ },
/* 140 */
/*!****************************************!*\
  !*** ./~/react/lib/ViewportMetrics.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ViewportMetrics
	 */
	
	"use strict";
	
	var getUnboundedScrollPosition = __webpack_require__(/*! ./getUnboundedScrollPosition */ 153);
	
	var ViewportMetrics = {
	
	  currentScrollLeft: 0,
	
	  currentScrollTop: 0,
	
	  refreshScrollValues: function() {
	    var scrollPosition = getUnboundedScrollPosition(window);
	    ViewportMetrics.currentScrollLeft = scrollPosition.x;
	    ViewportMetrics.currentScrollTop = scrollPosition.y;
	  }
	
	};
	
	module.exports = ViewportMetrics;


/***/ },
/* 141 */
/*!********************************************!*\
  !*** ./~/react/lib/ReactInputSelection.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInputSelection
	 */
	
	"use strict";
	
	var ReactDOMSelection = __webpack_require__(/*! ./ReactDOMSelection */ 173);
	
	var containsNode = __webpack_require__(/*! ./containsNode */ 119);
	var focusNode = __webpack_require__(/*! ./focusNode */ 174);
	var getActiveElement = __webpack_require__(/*! ./getActiveElement */ 154);
	
	function isInDocument(node) {
	  return containsNode(document.documentElement, node);
	}
	
	/**
	 * @ReactInputSelection: React input selection module. Based on Selection.js,
	 * but modified to be suitable for react and has a couple of bug fixes (doesn't
	 * assume buttons have range selections allowed).
	 * Input selection module for React.
	 */
	var ReactInputSelection = {
	
	  hasSelectionCapabilities: function(elem) {
	    return elem && (
	      (elem.nodeName === 'INPUT' && elem.type === 'text') ||
	      elem.nodeName === 'TEXTAREA' ||
	      elem.contentEditable === 'true'
	    );
	  },
	
	  getSelectionInformation: function() {
	    var focusedElem = getActiveElement();
	    return {
	      focusedElem: focusedElem,
	      selectionRange:
	          ReactInputSelection.hasSelectionCapabilities(focusedElem) ?
	          ReactInputSelection.getSelection(focusedElem) :
	          null
	    };
	  },
	
	  /**
	   * @restoreSelection: If any selection information was potentially lost,
	   * restore it. This is useful when performing operations that could remove dom
	   * nodes and place them back in, resulting in focus being lost.
	   */
	  restoreSelection: function(priorSelectionInformation) {
	    var curFocusedElem = getActiveElement();
	    var priorFocusedElem = priorSelectionInformation.focusedElem;
	    var priorSelectionRange = priorSelectionInformation.selectionRange;
	    if (curFocusedElem !== priorFocusedElem &&
	        isInDocument(priorFocusedElem)) {
	      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
	        ReactInputSelection.setSelection(
	          priorFocusedElem,
	          priorSelectionRange
	        );
	      }
	      focusNode(priorFocusedElem);
	    }
	  },
	
	  /**
	   * @getSelection: Gets the selection bounds of a focused textarea, input or
	   * contentEditable node.
	   * -@input: Look up selection bounds of this input
	   * -@return {start: selectionStart, end: selectionEnd}
	   */
	  getSelection: function(input) {
	    var selection;
	
	    if ('selectionStart' in input) {
	      // Modern browser with input or textarea.
	      selection = {
	        start: input.selectionStart,
	        end: input.selectionEnd
	      };
	    } else if (document.selection && input.nodeName === 'INPUT') {
	      // IE8 input.
	      var range = document.selection.createRange();
	      // There can only be one selection per document in IE, so it must
	      // be in our element.
	      if (range.parentElement() === input) {
	        selection = {
	          start: -range.moveStart('character', -input.value.length),
	          end: -range.moveEnd('character', -input.value.length)
	        };
	      }
	    } else {
	      // Content editable or old IE textarea.
	      selection = ReactDOMSelection.getOffsets(input);
	    }
	
	    return selection || {start: 0, end: 0};
	  },
	
	  /**
	   * @setSelection: Sets the selection bounds of a textarea or input and focuses
	   * the input.
	   * -@input     Set selection bounds of this input or textarea
	   * -@offsets   Object of same form that is returned from get*
	   */
	  setSelection: function(input, offsets) {
	    var start = offsets.start;
	    var end = offsets.end;
	    if (typeof end === 'undefined') {
	      end = start;
	    }
	
	    if ('selectionStart' in input) {
	      input.selectionStart = start;
	      input.selectionEnd = Math.min(end, input.value.length);
	    } else if (document.selection && input.nodeName === 'INPUT') {
	      var range = input.createTextRange();
	      range.collapse(true);
	      range.moveStart('character', start);
	      range.moveEnd('character', end - start);
	      range.select();
	    } else {
	      ReactDOMSelection.setOffsets(input, offsets);
	    }
	  }
	};
	
	module.exports = ReactInputSelection;


/***/ },
/* 142 */
/*!**************************************************!*\
  !*** ./~/react/lib/SyntheticCompositionEvent.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticCompositionEvent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 136);
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
	 */
	var CompositionEventInterface = {
	  data: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticCompositionEvent(
	  dispatchConfig,
	  dispatchMarker,
	  nativeEvent) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}
	
	SyntheticEvent.augmentClass(
	  SyntheticCompositionEvent,
	  CompositionEventInterface
	);
	
	module.exports = SyntheticCompositionEvent;
	


/***/ },
/* 143 */
/*!***********************************************!*\
  !*** ./~/react/lib/getTextContentAccessor.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getTextContentAccessor
	 */
	
	"use strict";
	
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	
	var contentKey = null;
	
	/**
	 * Gets the key used to access text content on a DOM node.
	 *
	 * @return {?string} Key used to access text content.
	 * @internal
	 */
	function getTextContentAccessor() {
	  if (!contentKey && ExecutionEnvironment.canUseDOM) {
	    // Prefer textContent to innerText because many browsers support both but
	    // SVG <text> elements don't support innerText even when <div> does.
	    contentKey = 'textContent' in document.documentElement ?
	      'textContent' :
	      'innerText';
	  }
	  return contentKey;
	}
	
	module.exports = getTextContentAccessor;


/***/ },
/* 144 */
/*!********************************************!*\
  !*** ./~/react/lib/SyntheticMouseEvent.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticMouseEvent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var SyntheticUIEvent = __webpack_require__(/*! ./SyntheticUIEvent */ 161);
	var ViewportMetrics = __webpack_require__(/*! ./ViewportMetrics */ 140);
	
	var getEventModifierState = __webpack_require__(/*! ./getEventModifierState */ 175);
	
	/**
	 * @interface MouseEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var MouseEventInterface = {
	  screenX: null,
	  screenY: null,
	  clientX: null,
	  clientY: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  getModifierState: getEventModifierState,
	  button: function(event) {
	    // Webkit, Firefox, IE9+
	    // which:  1 2 3
	    // button: 0 1 2 (standard)
	    var button = event.button;
	    if ('which' in event) {
	      return button;
	    }
	    // IE<9
	    // which:  undefined
	    // button: 0 0 0
	    // button: 1 4 2 (onmouseup)
	    return button === 2 ? 2 : button === 4 ? 1 : 0;
	  },
	  buttons: null,
	  relatedTarget: function(event) {
	    return event.relatedTarget || (
	      event.fromElement === event.srcElement ?
	        event.toElement :
	        event.fromElement
	    );
	  },
	  // "Proprietary" Interface.
	  pageX: function(event) {
	    return 'pageX' in event ?
	      event.pageX :
	      event.clientX + ViewportMetrics.currentScrollLeft;
	  },
	  pageY: function(event) {
	    return 'pageY' in event ?
	      event.pageY :
	      event.clientY + ViewportMetrics.currentScrollTop;
	  }
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);
	
	module.exports = SyntheticMouseEvent;


/***/ },
/* 145 */
/*!*********************************************!*\
  !*** ./~/react/lib/ReactDOMIDOperations.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMIDOperations
	 * @typechecks static-only
	 */
	
	/*jslint evil: true */
	
	"use strict";
	
	var CSSPropertyOperations = __webpack_require__(/*! ./CSSPropertyOperations */ 87);
	var DOMChildrenOperations = __webpack_require__(/*! ./DOMChildrenOperations */ 176);
	var DOMPropertyOperations = __webpack_require__(/*! ./DOMPropertyOperations */ 30);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 44);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 46);
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	var setInnerHTML = __webpack_require__(/*! ./setInnerHTML */ 147);
	
	/**
	 * Errors for properties that should not be updated with `updatePropertyById()`.
	 *
	 * @type {object}
	 * @private
	 */
	var INVALID_PROPERTY_ERRORS = {
	  dangerouslySetInnerHTML:
	    '`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',
	  style: '`style` must be set using `updateStylesByID()`.'
	};
	
	/**
	 * Operations used to process updates to DOM nodes. This is made injectable via
	 * `ReactComponent.BackendIDOperations`.
	 */
	var ReactDOMIDOperations = {
	
	  /**
	   * Updates a DOM node with new property values. This should only be used to
	   * update DOM properties in `DOMProperty`.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} name A valid property name, see `DOMProperty`.
	   * @param {*} value New value of the property.
	   * @internal
	   */
	  updatePropertyByID: ReactPerf.measure(
	    'ReactDOMIDOperations',
	    'updatePropertyByID',
	    function(id, name, value) {
	      var node = ReactMount.getNode(id);
	      ("production" !== process.env.NODE_ENV ? invariant(
	        !INVALID_PROPERTY_ERRORS.hasOwnProperty(name),
	        'updatePropertyByID(...): %s',
	        INVALID_PROPERTY_ERRORS[name]
	      ) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));
	
	      // If we're updating to null or undefined, we should remove the property
	      // from the DOM node instead of inadvertantly setting to a string. This
	      // brings us in line with the same behavior we have on initial render.
	      if (value != null) {
	        DOMPropertyOperations.setValueForProperty(node, name, value);
	      } else {
	        DOMPropertyOperations.deleteValueForProperty(node, name);
	      }
	    }
	  ),
	
	  /**
	   * Updates a DOM node to remove a property. This should only be used to remove
	   * DOM properties in `DOMProperty`.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} name A property name to remove, see `DOMProperty`.
	   * @internal
	   */
	  deletePropertyByID: ReactPerf.measure(
	    'ReactDOMIDOperations',
	    'deletePropertyByID',
	    function(id, name, value) {
	      var node = ReactMount.getNode(id);
	      ("production" !== process.env.NODE_ENV ? invariant(
	        !INVALID_PROPERTY_ERRORS.hasOwnProperty(name),
	        'updatePropertyByID(...): %s',
	        INVALID_PROPERTY_ERRORS[name]
	      ) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));
	      DOMPropertyOperations.deleteValueForProperty(node, name, value);
	    }
	  ),
	
	  /**
	   * Updates a DOM node with new style values. If a value is specified as '',
	   * the corresponding style property will be unset.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {object} styles Mapping from styles to values.
	   * @internal
	   */
	  updateStylesByID: ReactPerf.measure(
	    'ReactDOMIDOperations',
	    'updateStylesByID',
	    function(id, styles) {
	      var node = ReactMount.getNode(id);
	      CSSPropertyOperations.setValueForStyles(node, styles);
	    }
	  ),
	
	  /**
	   * Updates a DOM node's innerHTML.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} html An HTML string.
	   * @internal
	   */
	  updateInnerHTMLByID: ReactPerf.measure(
	    'ReactDOMIDOperations',
	    'updateInnerHTMLByID',
	    function(id, html) {
	      var node = ReactMount.getNode(id);
	      setInnerHTML(node, html);
	    }
	  ),
	
	  /**
	   * Updates a DOM node's text content set by `props.content`.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} content Text content.
	   * @internal
	   */
	  updateTextContentByID: ReactPerf.measure(
	    'ReactDOMIDOperations',
	    'updateTextContentByID',
	    function(id, content) {
	      var node = ReactMount.getNode(id);
	      DOMChildrenOperations.updateTextContent(node, content);
	    }
	  ),
	
	  /**
	   * Replaces a DOM node that exists in the document with markup.
	   *
	   * @param {string} id ID of child to be replaced.
	   * @param {string} markup Dangerous markup to inject in place of child.
	   * @internal
	   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
	   */
	  dangerouslyReplaceNodeWithMarkupByID: ReactPerf.measure(
	    'ReactDOMIDOperations',
	    'dangerouslyReplaceNodeWithMarkupByID',
	    function(id, markup) {
	      var node = ReactMount.getNode(id);
	      DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
	    }
	  ),
	
	  /**
	   * Updates a component's children by processing a series of updates.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markup List of markup strings.
	   * @internal
	   */
	  dangerouslyProcessChildrenUpdates: ReactPerf.measure(
	    'ReactDOMIDOperations',
	    'dangerouslyProcessChildrenUpdates',
	    function(updates, markup) {
	      for (var i = 0; i < updates.length; i++) {
	        updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
	      }
	      DOMChildrenOperations.processUpdates(updates, markup);
	    }
	  )
	};
	
	module.exports = ReactDOMIDOperations;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 146 */
/*!**************************************************!*\
  !*** ./~/react/lib/ReactReconcileTransaction.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconcileTransaction
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var CallbackQueue = __webpack_require__(/*! ./CallbackQueue */ 124);
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 72);
	var ReactBrowserEventEmitter = __webpack_require__(/*! ./ReactBrowserEventEmitter */ 89);
	var ReactInputSelection = __webpack_require__(/*! ./ReactInputSelection */ 141);
	var ReactPutListenerQueue = __webpack_require__(/*! ./ReactPutListenerQueue */ 168);
	var Transaction = __webpack_require__(/*! ./Transaction */ 125);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	
	/**
	 * Ensures that, when possible, the selection range (currently selected text
	 * input) is not disturbed by performing the transaction.
	 */
	var SELECTION_RESTORATION = {
	  /**
	   * @return {Selection} Selection information.
	   */
	  initialize: ReactInputSelection.getSelectionInformation,
	  /**
	   * @param {Selection} sel Selection information returned from `initialize`.
	   */
	  close: ReactInputSelection.restoreSelection
	};
	
	/**
	 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
	 * high level DOM manipulations (like temporarily removing a text input from the
	 * DOM).
	 */
	var EVENT_SUPPRESSION = {
	  /**
	   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
	   * the reconciliation.
	   */
	  initialize: function() {
	    var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
	    ReactBrowserEventEmitter.setEnabled(false);
	    return currentlyEnabled;
	  },
	
	  /**
	   * @param {boolean} previouslyEnabled Enabled status of
	   *   `ReactBrowserEventEmitter` before the reconciliation occured. `close`
	   *   restores the previous value.
	   */
	  close: function(previouslyEnabled) {
	    ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
	  }
	};
	
	/**
	 * Provides a queue for collecting `componentDidMount` and
	 * `componentDidUpdate` callbacks during the the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function() {
	    this.reactMountReady.reset();
	  },
	
	  /**
	   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
	   */
	  close: function() {
	    this.reactMountReady.notifyAll();
	  }
	};
	
	var PUT_LISTENER_QUEUEING = {
	  initialize: function() {
	    this.putListenerQueue.reset();
	  },
	
	  close: function() {
	    this.putListenerQueue.putListeners();
	  }
	};
	
	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [
	  PUT_LISTENER_QUEUEING,
	  SELECTION_RESTORATION,
	  EVENT_SUPPRESSION,
	  ON_DOM_READY_QUEUEING
	];
	
	/**
	 * Currently:
	 * - The order that these are listed in the transaction is critical:
	 * - Suppresses events.
	 * - Restores selection range.
	 *
	 * Future:
	 * - Restore document/overflow scroll positions that were unintentionally
	 *   modified via DOM insertions above the top viewport boundary.
	 * - Implement/integrate with customized constraint based layout system and keep
	 *   track of which dimensions must be remeasured.
	 *
	 * @class ReactReconcileTransaction
	 */
	function ReactReconcileTransaction() {
	  this.reinitializeTransaction();
	  // Only server-side rendering really needs this option (see
	  // `ReactServerRendering`), but server-side uses
	  // `ReactServerRenderingTransaction` instead. This option is here so that it's
	  // accessible and defaults to false when `ReactDOMComponent` and
	  // `ReactTextComponent` checks it in `mountComponent`.`
	  this.renderToStaticMarkup = false;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.putListenerQueue = ReactPutListenerQueue.getPooled();
	}
	
	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array<object>} List of operation wrap proceedures.
	   *   TODO: convert to array<TransactionWrapper>
	   */
	  getTransactionWrappers: function() {
	    return TRANSACTION_WRAPPERS;
	  },
	
	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function() {
	    return this.reactMountReady;
	  },
	
	  getPutListenerQueue: function() {
	    return this.putListenerQueue;
	  },
	
	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be resused.
	   */
	  destructor: function() {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;
	
	    ReactPutListenerQueue.release(this.putListenerQueue);
	    this.putListenerQueue = null;
	  }
	};
	
	
	assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);
	
	PooledClass.addPoolingTo(ReactReconcileTransaction);
	
	module.exports = ReactReconcileTransaction;


/***/ },
/* 147 */
/*!*************************************!*\
  !*** ./~/react/lib/setInnerHTML.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setInnerHTML
	 */
	
	"use strict";
	
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	
	var WHITESPACE_TEST = /^[ \r\n\t\f]/;
	var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
	
	/**
	 * Set the innerHTML property of a node, ensuring that whitespace is preserved
	 * even in IE8.
	 *
	 * @param {DOMElement} node
	 * @param {string} html
	 * @internal
	 */
	var setInnerHTML = function(node, html) {
	  node.innerHTML = html;
	};
	
	if (ExecutionEnvironment.canUseDOM) {
	  // IE8: When updating a just created node with innerHTML only leading
	  // whitespace is removed. When updating an existing node with innerHTML
	  // whitespace in root TextNodes is also collapsed.
	  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html
	
	  // Feature detection; only IE8 is known to behave improperly like this.
	  var testElement = document.createElement('div');
	  testElement.innerHTML = ' ';
	  if (testElement.innerHTML === '') {
	    setInnerHTML = function(node, html) {
	      // Magic theory: IE8 supposedly differentiates between added and updated
	      // nodes when processing innerHTML, innerHTML on updated nodes suffers
	      // from worse whitespace behavior. Re-adding a node like this triggers
	      // the initial and more favorable whitespace behavior.
	      // TODO: What to do on a detached node?
	      if (node.parentNode) {
	        node.parentNode.replaceChild(node, node);
	      }
	
	      // We also implement a workaround for non-visible tags disappearing into
	      // thin air on IE8, this only happens if there is no visible text
	      // in-front of the non-visible tags. Piggyback on the whitespace fix
	      // and simply check if any non-visible tags appear in the source.
	      if (WHITESPACE_TEST.test(html) ||
	          html[0] === '<' && NONVISIBLE_TEST.test(html)) {
	        // Recover leading whitespace by temporarily prepending any character.
	        // \uFEFF has the potential advantage of being zero-width/invisible.
	        node.innerHTML = '\uFEFF' + html;
	
	        // deleteData leaves an empty `TextNode` which offsets the index of all
	        // children. Definitely want to avoid this.
	        var textNode = node.firstChild;
	        if (textNode.data.length === 1) {
	          node.removeChild(textNode);
	        } else {
	          textNode.deleteData(0, 1);
	        }
	      } else {
	        node.innerHTML = html;
	      }
	    };
	  }
	}
	
	module.exports = setInnerHTML;


/***/ },
/* 148 */
/*!***************************************!*\
  !*** ./~/react/lib/AutoFocusMixin.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule AutoFocusMixin
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var focusNode = __webpack_require__(/*! ./focusNode */ 174);
	
	var AutoFocusMixin = {
	  componentDidMount: function() {
	    if (this.props.autoFocus) {
	      focusNode(this.getDOMNode());
	    }
	  }
	};
	
	module.exports = AutoFocusMixin;


/***/ },
/* 149 */
/*!********************************************!*\
  !*** ./~/react/lib/LocalEventTrapMixin.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LocalEventTrapMixin
	 */
	
	"use strict";
	
	var ReactBrowserEventEmitter = __webpack_require__(/*! ./ReactBrowserEventEmitter */ 89);
	
	var accumulateInto = __webpack_require__(/*! ./accumulateInto */ 170);
	var forEachAccumulated = __webpack_require__(/*! ./forEachAccumulated */ 171);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	function remove(event) {
	  event.remove();
	}
	
	var LocalEventTrapMixin = {
	  trapBubbledEvent:function(topLevelType, handlerBaseName) {
	    ("production" !== process.env.NODE_ENV ? invariant(this.isMounted(), 'Must be mounted to trap events') : invariant(this.isMounted()));
	    var listener = ReactBrowserEventEmitter.trapBubbledEvent(
	      topLevelType,
	      handlerBaseName,
	      this.getDOMNode()
	    );
	    this._localEventListeners =
	      accumulateInto(this._localEventListeners, listener);
	  },
	
	  // trapCapturedEvent would look nearly identical. We don't implement that
	  // method because it isn't currently needed.
	
	  componentWillUnmount:function() {
	    if (this._localEventListeners) {
	      forEachAccumulated(this._localEventListeners, remove);
	    }
	  }
	};
	
	module.exports = LocalEventTrapMixin;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 150 */
/*!*****************************************!*\
  !*** ./~/react/lib/LinkedValueUtils.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedValueUtils
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var ReactPropTypes = __webpack_require__(/*! ./ReactPropTypes */ 47);
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	var hasReadOnlyValue = {
	  'button': true,
	  'checkbox': true,
	  'image': true,
	  'hidden': true,
	  'radio': true,
	  'reset': true,
	  'submit': true
	};
	
	function _assertSingleLink(input) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    input.props.checkedLink == null || input.props.valueLink == null,
	    'Cannot provide a checkedLink and a valueLink. If you want to use ' +
	    'checkedLink, you probably don\'t want to use valueLink and vice versa.'
	  ) : invariant(input.props.checkedLink == null || input.props.valueLink == null));
	}
	function _assertValueLink(input) {
	  _assertSingleLink(input);
	  ("production" !== process.env.NODE_ENV ? invariant(
	    input.props.value == null && input.props.onChange == null,
	    'Cannot provide a valueLink and a value or onChange event. If you want ' +
	    'to use value or onChange, you probably don\'t want to use valueLink.'
	  ) : invariant(input.props.value == null && input.props.onChange == null));
	}
	
	function _assertCheckedLink(input) {
	  _assertSingleLink(input);
	  ("production" !== process.env.NODE_ENV ? invariant(
	    input.props.checked == null && input.props.onChange == null,
	    'Cannot provide a checkedLink and a checked property or onChange event. ' +
	    'If you want to use checked or onChange, you probably don\'t want to ' +
	    'use checkedLink'
	  ) : invariant(input.props.checked == null && input.props.onChange == null));
	}
	
	/**
	 * @param {SyntheticEvent} e change event to handle
	 */
	function _handleLinkedValueChange(e) {
	  /*jshint validthis:true */
	  this.props.valueLink.requestChange(e.target.value);
	}
	
	/**
	  * @param {SyntheticEvent} e change event to handle
	  */
	function _handleLinkedCheckChange(e) {
	  /*jshint validthis:true */
	  this.props.checkedLink.requestChange(e.target.checked);
	}
	
	/**
	 * Provide a linked `value` attribute for controlled forms. You should not use
	 * this outside of the ReactDOM controlled form components.
	 */
	var LinkedValueUtils = {
	  Mixin: {
	    propTypes: {
	      value: function(props, propName, componentName) {
	        if (!props[propName] ||
	            hasReadOnlyValue[props.type] ||
	            props.onChange ||
	            props.readOnly ||
	            props.disabled) {
	          return;
	        }
	        return new Error(
	          'You provided a `value` prop to a form field without an ' +
	          '`onChange` handler. This will render a read-only field. If ' +
	          'the field should be mutable use `defaultValue`. Otherwise, ' +
	          'set either `onChange` or `readOnly`.'
	        );
	      },
	      checked: function(props, propName, componentName) {
	        if (!props[propName] ||
	            props.onChange ||
	            props.readOnly ||
	            props.disabled) {
	          return;
	        }
	        return new Error(
	          'You provided a `checked` prop to a form field without an ' +
	          '`onChange` handler. This will render a read-only field. If ' +
	          'the field should be mutable use `defaultChecked`. Otherwise, ' +
	          'set either `onChange` or `readOnly`.'
	        );
	      },
	      onChange: ReactPropTypes.func
	    }
	  },
	
	  /**
	   * @param {ReactComponent} input Form component
	   * @return {*} current value of the input either from value prop or link.
	   */
	  getValue: function(input) {
	    if (input.props.valueLink) {
	      _assertValueLink(input);
	      return input.props.valueLink.value;
	    }
	    return input.props.value;
	  },
	
	  /**
	   * @param {ReactComponent} input Form component
	   * @return {*} current checked status of the input either from checked prop
	   *             or link.
	   */
	  getChecked: function(input) {
	    if (input.props.checkedLink) {
	      _assertCheckedLink(input);
	      return input.props.checkedLink.value;
	    }
	    return input.props.checked;
	  },
	
	  /**
	   * @param {ReactComponent} input Form component
	   * @return {function} change callback either from onChange prop or link.
	   */
	  getOnChange: function(input) {
	    if (input.props.valueLink) {
	      _assertValueLink(input);
	      return _handleLinkedValueChange;
	    } else if (input.props.checkedLink) {
	      _assertCheckedLink(input);
	      return _handleLinkedCheckChange;
	    }
	    return input.props.onChange;
	  }
	};
	
	module.exports = LinkedValueUtils;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 151 */
/*!**************************************!*\
  !*** ./~/react/lib/EventListener.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule EventListener
	 * @typechecks
	 */
	
	var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 121);
	
	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },
	
	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function(target, eventType, callback) {
	    if (!target.addEventListener) {
	      if ("production" !== process.env.NODE_ENV) {
	        console.error(
	          'Attempted to listen to events during the capture phase on a ' +
	          'browser that does not support the capture phase. Your application ' +
	          'will not receive some events.'
	        );
	      }
	      return {
	        remove: emptyFunction
	      };
	    } else {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    }
	  },
	
	  registerDefault: function() {}
	};
	
	module.exports = EventListener;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 152 */
/*!***************************************!*\
  !*** ./~/react/lib/getEventTarget.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventTarget
	 * @typechecks static-only
	 */
	
	"use strict";
	
	/**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */
	function getEventTarget(nativeEvent) {
	  var target = nativeEvent.target || nativeEvent.srcElement || window;
	  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
	  // @see http://www.quirksmode.org/js/events_properties.html
	  return target.nodeType === 3 ? target.parentNode : target;
	}
	
	module.exports = getEventTarget;


/***/ },
/* 153 */
/*!***************************************************!*\
  !*** ./~/react/lib/getUnboundedScrollPosition.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getUnboundedScrollPosition
	 * @typechecks
	 */
	
	"use strict";
	
	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are unbounded, unlike `getScrollPosition`. This means they
	 * may be negative or exceed the element boundaries (which is possible using
	 * inertial scrolling).
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */
	function getUnboundedScrollPosition(scrollable) {
	  if (scrollable === window) {
	    return {
	      x: window.pageXOffset || document.documentElement.scrollLeft,
	      y: window.pageYOffset || document.documentElement.scrollTop
	    };
	  }
	  return {
	    x: scrollable.scrollLeft,
	    y: scrollable.scrollTop
	  };
	}
	
	module.exports = getUnboundedScrollPosition;


/***/ },
/* 154 */
/*!*****************************************!*\
  !*** ./~/react/lib/getActiveElement.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getActiveElement
	 * @typechecks
	 */
	
	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document body is not yet defined.
	 */
	function getActiveElement() /*?DOMElement*/ {
	  try {
	    return document.activeElement || document.body;
	  } catch (e) {
	    return document.body;
	  }
	}
	
	module.exports = getActiveElement;


/***/ },
/* 155 */
/*!*************************************!*\
  !*** ./~/react/lib/shallowEqual.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */
	
	"use strict";
	
	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) &&
	        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = shallowEqual;


/***/ },
/* 156 */
/*!************************************************!*\
  !*** ./~/react/lib/SyntheticClipboardEvent.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticClipboardEvent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 136);
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/clipboard-apis/
	 */
	var ClipboardEventInterface = {
	  clipboardData: function(event) {
	    return (
	      'clipboardData' in event ?
	        event.clipboardData :
	        window.clipboardData
	    );
	  }
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}
	
	SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);
	
	module.exports = SyntheticClipboardEvent;
	


/***/ },
/* 157 */
/*!********************************************!*\
  !*** ./~/react/lib/SyntheticFocusEvent.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticFocusEvent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var SyntheticUIEvent = __webpack_require__(/*! ./SyntheticUIEvent */ 161);
	
	/**
	 * @interface FocusEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var FocusEventInterface = {
	  relatedTarget: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);
	
	module.exports = SyntheticFocusEvent;


/***/ },
/* 158 */
/*!***********************************************!*\
  !*** ./~/react/lib/SyntheticKeyboardEvent.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticKeyboardEvent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var SyntheticUIEvent = __webpack_require__(/*! ./SyntheticUIEvent */ 161);
	
	var getEventCharCode = __webpack_require__(/*! ./getEventCharCode */ 163);
	var getEventKey = __webpack_require__(/*! ./getEventKey */ 177);
	var getEventModifierState = __webpack_require__(/*! ./getEventModifierState */ 175);
	
	/**
	 * @interface KeyboardEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var KeyboardEventInterface = {
	  key: getEventKey,
	  location: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  repeat: null,
	  locale: null,
	  getModifierState: getEventModifierState,
	  // Legacy Interface
	  charCode: function(event) {
	    // `charCode` is the result of a KeyPress event and represents the value of
	    // the actual printable character.
	
	    // KeyPress is deprecated, but its replacement is not yet final and not
	    // implemented in any major browser. Only KeyPress has charCode.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    return 0;
	  },
	  keyCode: function(event) {
	    // `keyCode` is the result of a KeyDown/Up event and represents the value of
	    // physical keyboard key.
	
	    // The actual meaning of the value depends on the users' keyboard layout
	    // which cannot be detected. Assuming that it is a US keyboard layout
	    // provides a surprisingly accurate mapping for US and European users.
	    // Due to this, it is left to the user to implement at this time.
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  },
	  which: function(event) {
	    // `which` is an alias for either `keyCode` or `charCode` depending on the
	    // type of the event.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  }
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);
	
	module.exports = SyntheticKeyboardEvent;


/***/ },
/* 159 */
/*!*******************************************!*\
  !*** ./~/react/lib/SyntheticDragEvent.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticDragEvent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var SyntheticMouseEvent = __webpack_require__(/*! ./SyntheticMouseEvent */ 144);
	
	/**
	 * @interface DragEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var DragEventInterface = {
	  dataTransfer: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}
	
	SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);
	
	module.exports = SyntheticDragEvent;


/***/ },
/* 160 */
/*!********************************************!*\
  !*** ./~/react/lib/SyntheticTouchEvent.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticTouchEvent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var SyntheticUIEvent = __webpack_require__(/*! ./SyntheticUIEvent */ 161);
	
	var getEventModifierState = __webpack_require__(/*! ./getEventModifierState */ 175);
	
	/**
	 * @interface TouchEvent
	 * @see http://www.w3.org/TR/touch-events/
	 */
	var TouchEventInterface = {
	  touches: null,
	  targetTouches: null,
	  changedTouches: null,
	  altKey: null,
	  metaKey: null,
	  ctrlKey: null,
	  shiftKey: null,
	  getModifierState: getEventModifierState
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);
	
	module.exports = SyntheticTouchEvent;


/***/ },
/* 161 */
/*!*****************************************!*\
  !*** ./~/react/lib/SyntheticUIEvent.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticUIEvent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 136);
	
	var getEventTarget = __webpack_require__(/*! ./getEventTarget */ 152);
	
	/**
	 * @interface UIEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var UIEventInterface = {
	  view: function(event) {
	    if (event.view) {
	      return event.view;
	    }
	
	    var target = getEventTarget(event);
	    if (target != null && target.window === target) {
	      // target is a window object
	      return target;
	    }
	
	    var doc = target.ownerDocument;
	    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	    if (doc) {
	      return doc.defaultView || doc.parentWindow;
	    } else {
	      return window;
	    }
	  },
	  detail: function(event) {
	    return event.detail || 0;
	  }
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}
	
	SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);
	
	module.exports = SyntheticUIEvent;


/***/ },
/* 162 */
/*!********************************************!*\
  !*** ./~/react/lib/SyntheticWheelEvent.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticWheelEvent
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var SyntheticMouseEvent = __webpack_require__(/*! ./SyntheticMouseEvent */ 144);
	
	/**
	 * @interface WheelEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var WheelEventInterface = {
	  deltaX: function(event) {
	    return (
	      'deltaX' in event ? event.deltaX :
	      // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
	      'wheelDeltaX' in event ? -event.wheelDeltaX : 0
	    );
	  },
	  deltaY: function(event) {
	    return (
	      'deltaY' in event ? event.deltaY :
	      // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
	      'wheelDeltaY' in event ? -event.wheelDeltaY :
	      // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
	      'wheelDelta' in event ? -event.wheelDelta : 0
	    );
	  },
	  deltaZ: null,
	
	  // Browsers without "deltaMode" is reporting in raw wheel delta where one
	  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
	  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
	  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
	  deltaMode: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
	function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}
	
	SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);
	
	module.exports = SyntheticWheelEvent;


/***/ },
/* 163 */
/*!*****************************************!*\
  !*** ./~/react/lib/getEventCharCode.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventCharCode
	 * @typechecks static-only
	 */
	
	"use strict";
	
	/**
	 * `charCode` represents the actual "character code" and is safe to use with
	 * `String.fromCharCode`. As such, only keys that correspond to printable
	 * characters produce a valid `charCode`, the only exception to this is Enter.
	 * The Tab-key is considered non-printable and does not have a `charCode`,
	 * presumably because it does not produce a tab-character in browsers.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `charCode` property.
	 */
	function getEventCharCode(nativeEvent) {
	  var charCode;
	  var keyCode = nativeEvent.keyCode;
	
	  if ('charCode' in nativeEvent) {
	    charCode = nativeEvent.charCode;
	
	    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
	    if (charCode === 0 && keyCode === 13) {
	      charCode = 13;
	    }
	  } else {
	    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
	    charCode = keyCode;
	  }
	
	  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
	  // Must not discard the (non-)printable Enter-key.
	  if (charCode >= 32 || charCode === 13) {
	    return charCode;
	  }
	
	  return 0;
	}
	
	module.exports = getEventCharCode;


/***/ },
/* 164 */
/*!*************************************************!*\
  !*** ./~/react/lib/ReactDefaultPerfAnalysis.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerfAnalysis
	 */
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	
	// Don't try to save users less than 1.2ms (a number I made up)
	var DONT_CARE_THRESHOLD = 1.2;
	var DOM_OPERATION_TYPES = {
	  'mountImageIntoNode': 'set innerHTML',
	  INSERT_MARKUP: 'set innerHTML',
	  MOVE_EXISTING: 'move',
	  REMOVE_NODE: 'remove',
	  TEXT_CONTENT: 'set textContent',
	  'updatePropertyByID': 'update attribute',
	  'deletePropertyByID': 'delete attribute',
	  'updateStylesByID': 'update styles',
	  'updateInnerHTMLByID': 'set innerHTML',
	  'dangerouslyReplaceNodeWithMarkupByID': 'replace'
	};
	
	function getTotalTime(measurements) {
	  // TODO: return number of DOM ops? could be misleading.
	  // TODO: measure dropped frames after reconcile?
	  // TODO: log total time of each reconcile and the top-level component
	  // class that triggered it.
	  var totalTime = 0;
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    totalTime += measurement.totalTime;
	  }
	  return totalTime;
	}
	
	function getDOMSummary(measurements) {
	  var items = [];
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var id;
	
	    for (id in measurement.writes) {
	      measurement.writes[id].forEach(function(write) {
	        items.push({
	          id: id,
	          type: DOM_OPERATION_TYPES[write.type] || write.type,
	          args: write.args
	        });
	      });
	    }
	  }
	  return items;
	}
	
	function getExclusiveSummary(measurements) {
	  var candidates = {};
	  var displayName;
	
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign(
	      {},
	      measurement.exclusive,
	      measurement.inclusive
	    );
	
	    for (var id in allIDs) {
	      displayName = measurement.displayNames[id].current;
	
	      candidates[displayName] = candidates[displayName] || {
	        componentName: displayName,
	        inclusive: 0,
	        exclusive: 0,
	        render: 0,
	        count: 0
	      };
	      if (measurement.render[id]) {
	        candidates[displayName].render += measurement.render[id];
	      }
	      if (measurement.exclusive[id]) {
	        candidates[displayName].exclusive += measurement.exclusive[id];
	      }
	      if (measurement.inclusive[id]) {
	        candidates[displayName].inclusive += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[displayName].count += measurement.counts[id];
	      }
	    }
	  }
	
	  // Now make a sorted array with the results.
	  var arr = [];
	  for (displayName in candidates) {
	    if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[displayName]);
	    }
	  }
	
	  arr.sort(function(a, b) {
	    return b.exclusive - a.exclusive;
	  });
	
	  return arr;
	}
	
	function getInclusiveSummary(measurements, onlyClean) {
	  var candidates = {};
	  var inclusiveKey;
	
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign(
	      {},
	      measurement.exclusive,
	      measurement.inclusive
	    );
	    var cleanComponents;
	
	    if (onlyClean) {
	      cleanComponents = getUnchangedComponents(measurement);
	    }
	
	    for (var id in allIDs) {
	      if (onlyClean && !cleanComponents[id]) {
	        continue;
	      }
	
	      var displayName = measurement.displayNames[id];
	
	      // Inclusive time is not useful for many components without knowing where
	      // they are instantiated. So we aggregate inclusive time with both the
	      // owner and current displayName as the key.
	      inclusiveKey = displayName.owner + ' > ' + displayName.current;
	
	      candidates[inclusiveKey] = candidates[inclusiveKey] || {
	        componentName: inclusiveKey,
	        time: 0,
	        count: 0
	      };
	
	      if (measurement.inclusive[id]) {
	        candidates[inclusiveKey].time += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[inclusiveKey].count += measurement.counts[id];
	      }
	    }
	  }
	
	  // Now make a sorted array with the results.
	  var arr = [];
	  for (inclusiveKey in candidates) {
	    if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[inclusiveKey]);
	    }
	  }
	
	  arr.sort(function(a, b) {
	    return b.time - a.time;
	  });
	
	  return arr;
	}
	
	function getUnchangedComponents(measurement) {
	  // For a given reconcile, look at which components did not actually
	  // render anything to the DOM and return a mapping of their ID to
	  // the amount of time it took to render the entire subtree.
	  var cleanComponents = {};
	  var dirtyLeafIDs = Object.keys(measurement.writes);
	  var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
	
	  for (var id in allIDs) {
	    var isDirty = false;
	    // For each component that rendered, see if a component that triggered
	    // a DOM op is in its subtree.
	    for (var i = 0; i < dirtyLeafIDs.length; i++) {
	      if (dirtyLeafIDs[i].indexOf(id) === 0) {
	        isDirty = true;
	        break;
	      }
	    }
	    if (!isDirty && measurement.counts[id] > 0) {
	      cleanComponents[id] = true;
	    }
	  }
	  return cleanComponents;
	}
	
	var ReactDefaultPerfAnalysis = {
	  getExclusiveSummary: getExclusiveSummary,
	  getInclusiveSummary: getInclusiveSummary,
	  getDOMSummary: getDOMSummary,
	  getTotalTime: getTotalTime
	};
	
	module.exports = ReactDefaultPerfAnalysis;


/***/ },
/* 165 */
/*!***************************************!*\
  !*** ./~/react/lib/performanceNow.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performanceNow
	 * @typechecks
	 */
	
	var performance = __webpack_require__(/*! ./performance */ 178);
	
	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (!performance || !performance.now) {
	  performance = Date;
	}
	
	var performanceNow = performance.now.bind(performance);
	
	module.exports = performanceNow;


/***/ },
/* 166 */
/*!***********************************!*\
  !*** ./~/react/lib/isTextNode.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextNode
	 * @typechecks
	 */
	
	var isNode = __webpack_require__(/*! ./isNode */ 179);
	
	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}
	
	module.exports = isTextNode;


/***/ },
/* 167 */
/*!********************************!*\
  !*** ./~/react/lib/adler32.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule adler32
	 */
	
	/* jslint bitwise:true */
	
	"use strict";
	
	var MOD = 65521;
	
	// This is a clean-room implementation of adler32 designed for detecting
	// if markup is not what we expect it to be. It does not need to be
	// cryptographically strong, only reasonably good at detecting if markup
	// generated on the server is different than that on the client.
	function adler32(data) {
	  var a = 1;
	  var b = 0;
	  for (var i = 0; i < data.length; i++) {
	    a = (a + data.charCodeAt(i)) % MOD;
	    b = (b + a) % MOD;
	  }
	  return a | (b << 16);
	}
	
	module.exports = adler32;


/***/ },
/* 168 */
/*!**********************************************!*\
  !*** ./~/react/lib/ReactPutListenerQueue.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPutListenerQueue
	 */
	
	"use strict";
	
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 72);
	var ReactBrowserEventEmitter = __webpack_require__(/*! ./ReactBrowserEventEmitter */ 89);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 50);
	
	function ReactPutListenerQueue() {
	  this.listenersToPut = [];
	}
	
	assign(ReactPutListenerQueue.prototype, {
	  enqueuePutListener: function(rootNodeID, propKey, propValue) {
	    this.listenersToPut.push({
	      rootNodeID: rootNodeID,
	      propKey: propKey,
	      propValue: propValue
	    });
	  },
	
	  putListeners: function() {
	    for (var i = 0; i < this.listenersToPut.length; i++) {
	      var listenerToPut = this.listenersToPut[i];
	      ReactBrowserEventEmitter.putListener(
	        listenerToPut.rootNodeID,
	        listenerToPut.propKey,
	        listenerToPut.propValue
	      );
	    }
	  },
	
	  reset: function() {
	    this.listenersToPut.length = 0;
	  },
	
	  destructor: function() {
	    this.reset();
	  }
	});
	
	PooledClass.addPoolingTo(ReactPutListenerQueue);
	
	module.exports = ReactPutListenerQueue;


/***/ },
/* 169 */
/*!*********************************!*\
  !*** ./~/react/lib/camelize.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelize
	 * @typechecks
	 */
	
	var _hyphenPattern = /-(.)/g;
	
	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function(_, character) {
	    return character.toUpperCase();
	  });
	}
	
	module.exports = camelize;


/***/ },
/* 170 */
/*!***************************************!*\
  !*** ./~/react/lib/accumulateInto.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule accumulateInto
	 */
	
	"use strict";
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 *
	 * Accumulates items that must not be null or undefined into the first one. This
	 * is used to conserve memory by avoiding array allocations, and thus sacrifices
	 * API cleanness. Since `current` can be null before being passed in and not
	 * null after this function, make sure to assign it back to `current`:
	 *
	 * `a = accumulateInto(a, b);`
	 *
	 * This API should be sparingly used. Try `accumulate` for something cleaner.
	 *
	 * @return {*|array<*>} An accumulation of items.
	 */
	
	function accumulateInto(current, next) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    next != null,
	    'accumulateInto(...): Accumulated items must not be null or undefined.'
	  ) : invariant(next != null));
	  if (current == null) {
	    return next;
	  }
	
	  // Both are not empty. Warning: Never call x.concat(y) when you are not
	  // certain that x is an Array (x could be a string with concat method).
	  var currentIsArray = Array.isArray(current);
	  var nextIsArray = Array.isArray(next);
	
	  if (currentIsArray && nextIsArray) {
	    current.push.apply(current, next);
	    return current;
	  }
	
	  if (currentIsArray) {
	    current.push(next);
	    return current;
	  }
	
	  if (nextIsArray) {
	    // A bit too dangerous to mutate `next`.
	    return [current].concat(next);
	  }
	
	  return [current, next];
	}
	
	module.exports = accumulateInto;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 171 */
/*!*******************************************!*\
  !*** ./~/react/lib/forEachAccumulated.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule forEachAccumulated
	 */
	
	"use strict";
	
	/**
	 * @param {array} an "accumulation" of items which is either an Array or
	 * a single item. Useful when paired with the `accumulate` module. This is a
	 * simple utility that allows us to reason about a collection of items, but
	 * handling the case when there is exactly one item (and we do not need to
	 * allocate an array).
	 */
	var forEachAccumulated = function(arr, cb, scope) {
	  if (Array.isArray(arr)) {
	    arr.forEach(cb, scope);
	  } else if (arr) {
	    cb.call(scope, arr);
	  }
	};
	
	module.exports = forEachAccumulated;


/***/ },
/* 172 */
/*!**********************************!*\
  !*** ./~/react/lib/hyphenate.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenate
	 * @typechecks
	 */
	
	var _uppercasePattern = /([A-Z])/g;
	
	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}
	
	module.exports = hyphenate;


/***/ },
/* 173 */
/*!******************************************!*\
  !*** ./~/react/lib/ReactDOMSelection.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelection
	 */
	
	"use strict";
	
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	
	var getNodeForCharacterOffset = __webpack_require__(/*! ./getNodeForCharacterOffset */ 181);
	var getTextContentAccessor = __webpack_require__(/*! ./getTextContentAccessor */ 143);
	
	/**
	 * While `isCollapsed` is available on the Selection object and `collapsed`
	 * is available on the Range object, IE11 sometimes gets them wrong.
	 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
	 */
	function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
	  return anchorNode === focusNode && anchorOffset === focusOffset;
	}
	
	/**
	 * Get the appropriate anchor and focus node/offset pairs for IE.
	 *
	 * The catch here is that IE's selection API doesn't provide information
	 * about whether the selection is forward or backward, so we have to
	 * behave as though it's always forward.
	 *
	 * IE text differs from modern selection in that it behaves as though
	 * block elements end with a new line. This means character offsets will
	 * differ between the two APIs.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getIEOffsets(node) {
	  var selection = document.selection;
	  var selectedRange = selection.createRange();
	  var selectedLength = selectedRange.text.length;
	
	  // Duplicate selection so we can move range without breaking user selection.
	  var fromStart = selectedRange.duplicate();
	  fromStart.moveToElementText(node);
	  fromStart.setEndPoint('EndToStart', selectedRange);
	
	  var startOffset = fromStart.text.length;
	  var endOffset = startOffset + selectedLength;
	
	  return {
	    start: startOffset,
	    end: endOffset
	  };
	}
	
	/**
	 * @param {DOMElement} node
	 * @return {?object}
	 */
	function getModernOffsets(node) {
	  var selection = window.getSelection && window.getSelection();
	
	  if (!selection || selection.rangeCount === 0) {
	    return null;
	  }
	
	  var anchorNode = selection.anchorNode;
	  var anchorOffset = selection.anchorOffset;
	  var focusNode = selection.focusNode;
	  var focusOffset = selection.focusOffset;
	
	  var currentRange = selection.getRangeAt(0);
	
	  // If the node and offset values are the same, the selection is collapsed.
	  // `Selection.isCollapsed` is available natively, but IE sometimes gets
	  // this value wrong.
	  var isSelectionCollapsed = isCollapsed(
	    selection.anchorNode,
	    selection.anchorOffset,
	    selection.focusNode,
	    selection.focusOffset
	  );
	
	  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;
	
	  var tempRange = currentRange.cloneRange();
	  tempRange.selectNodeContents(node);
	  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);
	
	  var isTempRangeCollapsed = isCollapsed(
	    tempRange.startContainer,
	    tempRange.startOffset,
	    tempRange.endContainer,
	    tempRange.endOffset
	  );
	
	  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
	  var end = start + rangeLength;
	
	  // Detect whether the selection is backward.
	  var detectionRange = document.createRange();
	  detectionRange.setStart(anchorNode, anchorOffset);
	  detectionRange.setEnd(focusNode, focusOffset);
	  var isBackward = detectionRange.collapsed;
	
	  return {
	    start: isBackward ? end : start,
	    end: isBackward ? start : end
	  };
	}
	
	/**
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setIEOffsets(node, offsets) {
	  var range = document.selection.createRange().duplicate();
	  var start, end;
	
	  if (typeof offsets.end === 'undefined') {
	    start = offsets.start;
	    end = start;
	  } else if (offsets.start > offsets.end) {
	    start = offsets.end;
	    end = offsets.start;
	  } else {
	    start = offsets.start;
	    end = offsets.end;
	  }
	
	  range.moveToElementText(node);
	  range.moveStart('character', start);
	  range.setEndPoint('EndToStart', range);
	  range.moveEnd('character', end - start);
	  range.select();
	}
	
	/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setModernOffsets(node, offsets) {
	  if (!window.getSelection) {
	    return;
	  }
	
	  var selection = window.getSelection();
	  var length = node[getTextContentAccessor()].length;
	  var start = Math.min(offsets.start, length);
	  var end = typeof offsets.end === 'undefined' ?
	            start : Math.min(offsets.end, length);
	
	  // IE 11 uses modern selection, but doesn't support the extend method.
	  // Flip backward selections, so we can set with a single range.
	  if (!selection.extend && start > end) {
	    var temp = end;
	    end = start;
	    start = temp;
	  }
	
	  var startMarker = getNodeForCharacterOffset(node, start);
	  var endMarker = getNodeForCharacterOffset(node, end);
	
	  if (startMarker && endMarker) {
	    var range = document.createRange();
	    range.setStart(startMarker.node, startMarker.offset);
	    selection.removeAllRanges();
	
	    if (start > end) {
	      selection.addRange(range);
	      selection.extend(endMarker.node, endMarker.offset);
	    } else {
	      range.setEnd(endMarker.node, endMarker.offset);
	      selection.addRange(range);
	    }
	  }
	}
	
	var useIEOffsets = ExecutionEnvironment.canUseDOM && document.selection;
	
	var ReactDOMSelection = {
	  /**
	   * @param {DOMElement} node
	   */
	  getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,
	
	  /**
	   * @param {DOMElement|DOMTextNode} node
	   * @param {object} offsets
	   */
	  setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
	};
	
	module.exports = ReactDOMSelection;


/***/ },
/* 174 */
/*!**********************************!*\
  !*** ./~/react/lib/focusNode.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule focusNode
	 */
	
	"use strict";
	
	/**
	 * @param {DOMElement} node input/textarea to focus
	 */
	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch(e) {
	  }
	}
	
	module.exports = focusNode;


/***/ },
/* 175 */
/*!**********************************************!*\
  !*** ./~/react/lib/getEventModifierState.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013 Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventModifierState
	 * @typechecks static-only
	 */
	
	"use strict";
	
	/**
	 * Translation from modifier key to the associated property in the event.
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
	 */
	
	var modifierKeyToProp = {
	  'Alt': 'altKey',
	  'Control': 'ctrlKey',
	  'Meta': 'metaKey',
	  'Shift': 'shiftKey'
	};
	
	// IE8 does not implement getModifierState so we simply map it to the only
	// modifier keys exposed by the event itself, does not support Lock-keys.
	// Currently, all major browsers except Chrome seems to support Lock-keys.
	function modifierStateGetter(keyArg) {
	  /*jshint validthis:true */
	  var syntheticEvent = this;
	  var nativeEvent = syntheticEvent.nativeEvent;
	  if (nativeEvent.getModifierState) {
	    return nativeEvent.getModifierState(keyArg);
	  }
	  var keyProp = modifierKeyToProp[keyArg];
	  return keyProp ? !!nativeEvent[keyProp] : false;
	}
	
	function getEventModifierState(nativeEvent) {
	  return modifierStateGetter;
	}
	
	module.exports = getEventModifierState;


/***/ },
/* 176 */
/*!**********************************************!*\
  !*** ./~/react/lib/DOMChildrenOperations.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMChildrenOperations
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var Danger = __webpack_require__(/*! ./Danger */ 180);
	var ReactMultiChildUpdateTypes = __webpack_require__(/*! ./ReactMultiChildUpdateTypes */ 117);
	
	var getTextContentAccessor = __webpack_require__(/*! ./getTextContentAccessor */ 143);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * The DOM property to use when setting text content.
	 *
	 * @type {string}
	 * @private
	 */
	var textContentAccessor = getTextContentAccessor();
	
	/**
	 * Inserts `childNode` as a child of `parentNode` at the `index`.
	 *
	 * @param {DOMElement} parentNode Parent node in which to insert.
	 * @param {DOMElement} childNode Child node to insert.
	 * @param {number} index Index at which to insert the child.
	 * @internal
	 */
	function insertChildAt(parentNode, childNode, index) {
	  // By exploiting arrays returning `undefined` for an undefined index, we can
	  // rely exclusively on `insertBefore(node, null)` instead of also using
	  // `appendChild(node)`. However, using `undefined` is not allowed by all
	  // browsers so we must replace it with `null`.
	  parentNode.insertBefore(
	    childNode,
	    parentNode.childNodes[index] || null
	  );
	}
	
	var updateTextContent;
	if (textContentAccessor === 'textContent') {
	  /**
	   * Sets the text content of `node` to `text`.
	   *
	   * @param {DOMElement} node Node to change
	   * @param {string} text New text content
	   */
	  updateTextContent = function(node, text) {
	    node.textContent = text;
	  };
	} else {
	  /**
	   * Sets the text content of `node` to `text`.
	   *
	   * @param {DOMElement} node Node to change
	   * @param {string} text New text content
	   */
	  updateTextContent = function(node, text) {
	    // In order to preserve newlines correctly, we can't use .innerText to set
	    // the contents (see #1080), so we empty the element then append a text node
	    while (node.firstChild) {
	      node.removeChild(node.firstChild);
	    }
	    if (text) {
	      var doc = node.ownerDocument || document;
	      node.appendChild(doc.createTextNode(text));
	    }
	  };
	}
	
	/**
	 * Operations for updating with DOM children.
	 */
	var DOMChildrenOperations = {
	
	  dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,
	
	  updateTextContent: updateTextContent,
	
	  /**
	   * Updates a component's children by processing a series of updates. The
	   * update configurations are each expected to have a `parentNode` property.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markupList List of markup strings.
	   * @internal
	   */
	  processUpdates: function(updates, markupList) {
	    var update;
	    // Mapping from parent IDs to initial child orderings.
	    var initialChildren = null;
	    // List of children that will be moved or removed.
	    var updatedChildren = null;
	
	    for (var i = 0; update = updates[i]; i++) {
	      if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING ||
	          update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
	        var updatedIndex = update.fromIndex;
	        var updatedChild = update.parentNode.childNodes[updatedIndex];
	        var parentID = update.parentID;
	
	        ("production" !== process.env.NODE_ENV ? invariant(
	          updatedChild,
	          'processUpdates(): Unable to find child %s of element. This ' +
	          'probably means the DOM was unexpectedly mutated (e.g., by the ' +
	          'browser), usually due to forgetting a <tbody> when using tables, ' +
	          'nesting tags like <form>, <p>, or <a>, or using non-SVG elements '+
	          'in an <svg> parent. Try inspecting the child nodes of the element ' +
	          'with React ID `%s`.',
	          updatedIndex,
	          parentID
	        ) : invariant(updatedChild));
	
	        initialChildren = initialChildren || {};
	        initialChildren[parentID] = initialChildren[parentID] || [];
	        initialChildren[parentID][updatedIndex] = updatedChild;
	
	        updatedChildren = updatedChildren || [];
	        updatedChildren.push(updatedChild);
	      }
	    }
	
	    var renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);
	
	    // Remove updated children first so that `toIndex` is consistent.
	    if (updatedChildren) {
	      for (var j = 0; j < updatedChildren.length; j++) {
	        updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
	      }
	    }
	
	    for (var k = 0; update = updates[k]; k++) {
	      switch (update.type) {
	        case ReactMultiChildUpdateTypes.INSERT_MARKUP:
	          insertChildAt(
	            update.parentNode,
	            renderedMarkup[update.markupIndex],
	            update.toIndex
	          );
	          break;
	        case ReactMultiChildUpdateTypes.MOVE_EXISTING:
	          insertChildAt(
	            update.parentNode,
	            initialChildren[update.parentID][update.fromIndex],
	            update.toIndex
	          );
	          break;
	        case ReactMultiChildUpdateTypes.TEXT_CONTENT:
	          updateTextContent(
	            update.parentNode,
	            update.textContent
	          );
	          break;
	        case ReactMultiChildUpdateTypes.REMOVE_NODE:
	          // Already removed by the for-loop above.
	          break;
	      }
	    }
	  }
	
	};
	
	module.exports = DOMChildrenOperations;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 177 */
/*!************************************!*\
  !*** ./~/react/lib/getEventKey.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventKey
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var getEventCharCode = __webpack_require__(/*! ./getEventCharCode */ 163);
	
	/**
	 * Normalization of deprecated HTML5 `key` values
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var normalizeKey = {
	  'Esc': 'Escape',
	  'Spacebar': ' ',
	  'Left': 'ArrowLeft',
	  'Up': 'ArrowUp',
	  'Right': 'ArrowRight',
	  'Down': 'ArrowDown',
	  'Del': 'Delete',
	  'Win': 'OS',
	  'Menu': 'ContextMenu',
	  'Apps': 'ContextMenu',
	  'Scroll': 'ScrollLock',
	  'MozPrintableKey': 'Unidentified'
	};
	
	/**
	 * Translation from legacy `keyCode` to HTML5 `key`
	 * Only special keys supported, all others depend on keyboard layout or browser
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var translateToKey = {
	  8: 'Backspace',
	  9: 'Tab',
	  12: 'Clear',
	  13: 'Enter',
	  16: 'Shift',
	  17: 'Control',
	  18: 'Alt',
	  19: 'Pause',
	  20: 'CapsLock',
	  27: 'Escape',
	  32: ' ',
	  33: 'PageUp',
	  34: 'PageDown',
	  35: 'End',
	  36: 'Home',
	  37: 'ArrowLeft',
	  38: 'ArrowUp',
	  39: 'ArrowRight',
	  40: 'ArrowDown',
	  45: 'Insert',
	  46: 'Delete',
	  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
	  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
	  144: 'NumLock',
	  145: 'ScrollLock',
	  224: 'Meta'
	};
	
	/**
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `key` property.
	 */
	function getEventKey(nativeEvent) {
	  if (nativeEvent.key) {
	    // Normalize inconsistent values reported by browsers due to
	    // implementations of a working draft specification.
	
	    // FireFox implements `key` but returns `MozPrintableKey` for all
	    // printable characters (normalized to `Unidentified`), ignore it.
	    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	    if (key !== 'Unidentified') {
	      return key;
	    }
	  }
	
	  // Browser does not implement `key`, polyfill as much of it as we can.
	  if (nativeEvent.type === 'keypress') {
	    var charCode = getEventCharCode(nativeEvent);
	
	    // The enter-key is technically both printable and non-printable and can
	    // thus be captured by `keypress`, no other non-printable key should.
	    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
	  }
	  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
	    // While user keyboard layout determines the actual meaning of each
	    // `keyCode` value, almost all function keys have a universal value.
	    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
	  }
	  return '';
	}
	
	module.exports = getEventKey;


/***/ },
/* 178 */
/*!************************************!*\
  !*** ./~/react/lib/performance.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performance
	 * @typechecks
	 */
	
	"use strict";
	
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	
	var performance;
	
	if (ExecutionEnvironment.canUseDOM) {
	  performance =
	    window.performance ||
	    window.msPerformance ||
	    window.webkitPerformance;
	}
	
	module.exports = performance || {};


/***/ },
/* 179 */
/*!*******************************!*\
  !*** ./~/react/lib/isNode.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isNode
	 * @typechecks
	 */
	
	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	function isNode(object) {
	  return !!(object && (
	    typeof Node === 'function' ? object instanceof Node :
	      typeof object === 'object' &&
	      typeof object.nodeType === 'number' &&
	      typeof object.nodeName === 'string'
	  ));
	}
	
	module.exports = isNode;


/***/ },
/* 180 */
/*!*******************************!*\
  !*** ./~/react/lib/Danger.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Danger
	 * @typechecks static-only
	 */
	
	/*jslint evil: true, sub: true */
	
	"use strict";
	
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	
	var createNodesFromMarkup = __webpack_require__(/*! ./createNodesFromMarkup */ 182);
	var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 121);
	var getMarkupWrap = __webpack_require__(/*! ./getMarkupWrap */ 183);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
	var RESULT_INDEX_ATTR = 'data-danger-index';
	
	/**
	 * Extracts the `nodeName` from a string of markup.
	 *
	 * NOTE: Extracting the `nodeName` does not require a regular expression match
	 * because we make assumptions about React-generated markup (i.e. there are no
	 * spaces surrounding the opening tag and there is at least one attribute).
	 *
	 * @param {string} markup String of markup.
	 * @return {string} Node name of the supplied markup.
	 * @see http://jsperf.com/extract-nodename
	 */
	function getNodeName(markup) {
	  return markup.substring(1, markup.indexOf(' '));
	}
	
	var Danger = {
	
	  /**
	   * Renders markup into an array of nodes. The markup is expected to render
	   * into a list of root nodes. Also, the length of `resultList` and
	   * `markupList` should be the same.
	   *
	   * @param {array<string>} markupList List of markup strings to render.
	   * @return {array<DOMElement>} List of rendered nodes.
	   * @internal
	   */
	  dangerouslyRenderMarkup: function(markupList) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      ExecutionEnvironment.canUseDOM,
	      'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' +
	      'thread. Make sure `window` and `document` are available globally ' +
	      'before requiring React when unit testing or use ' +
	      'React.renderToString for server rendering.'
	    ) : invariant(ExecutionEnvironment.canUseDOM));
	    var nodeName;
	    var markupByNodeName = {};
	    // Group markup by `nodeName` if a wrap is necessary, else by '*'.
	    for (var i = 0; i < markupList.length; i++) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        markupList[i],
	        'dangerouslyRenderMarkup(...): Missing markup.'
	      ) : invariant(markupList[i]));
	      nodeName = getNodeName(markupList[i]);
	      nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
	      markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
	      markupByNodeName[nodeName][i] = markupList[i];
	    }
	    var resultList = [];
	    var resultListAssignmentCount = 0;
	    for (nodeName in markupByNodeName) {
	      if (!markupByNodeName.hasOwnProperty(nodeName)) {
	        continue;
	      }
	      var markupListByNodeName = markupByNodeName[nodeName];
	
	      // This for-in loop skips the holes of the sparse array. The order of
	      // iteration should follow the order of assignment, which happens to match
	      // numerical index order, but we don't rely on that.
	      for (var resultIndex in markupListByNodeName) {
	        if (markupListByNodeName.hasOwnProperty(resultIndex)) {
	          var markup = markupListByNodeName[resultIndex];
	
	          // Push the requested markup with an additional RESULT_INDEX_ATTR
	          // attribute.  If the markup does not start with a < character, it
	          // will be discarded below (with an appropriate console.error).
	          markupListByNodeName[resultIndex] = markup.replace(
	            OPEN_TAG_NAME_EXP,
	            // This index will be parsed back out below.
	            '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" '
	          );
	        }
	      }
	
	      // Render each group of markup with similar wrapping `nodeName`.
	      var renderNodes = createNodesFromMarkup(
	        markupListByNodeName.join(''),
	        emptyFunction // Do nothing special with <script> tags.
	      );
	
	      for (i = 0; i < renderNodes.length; ++i) {
	        var renderNode = renderNodes[i];
	        if (renderNode.hasAttribute &&
	            renderNode.hasAttribute(RESULT_INDEX_ATTR)) {
	
	          resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
	          renderNode.removeAttribute(RESULT_INDEX_ATTR);
	
	          ("production" !== process.env.NODE_ENV ? invariant(
	            !resultList.hasOwnProperty(resultIndex),
	            'Danger: Assigning to an already-occupied result index.'
	          ) : invariant(!resultList.hasOwnProperty(resultIndex)));
	
	          resultList[resultIndex] = renderNode;
	
	          // This should match resultList.length and markupList.length when
	          // we're done.
	          resultListAssignmentCount += 1;
	
	        } else if ("production" !== process.env.NODE_ENV) {
	          console.error(
	            "Danger: Discarding unexpected node:",
	            renderNode
	          );
	        }
	      }
	    }
	
	    // Although resultList was populated out of order, it should now be a dense
	    // array.
	    ("production" !== process.env.NODE_ENV ? invariant(
	      resultListAssignmentCount === resultList.length,
	      'Danger: Did not assign to every index of resultList.'
	    ) : invariant(resultListAssignmentCount === resultList.length));
	
	    ("production" !== process.env.NODE_ENV ? invariant(
	      resultList.length === markupList.length,
	      'Danger: Expected markup to render %s nodes, but rendered %s.',
	      markupList.length,
	      resultList.length
	    ) : invariant(resultList.length === markupList.length));
	
	    return resultList;
	  },
	
	  /**
	   * Replaces a node with a string of markup at its current position within its
	   * parent. The markup must render into a single root node.
	   *
	   * @param {DOMElement} oldChild Child node to replace.
	   * @param {string} markup Markup to render in place of the child node.
	   * @internal
	   */
	  dangerouslyReplaceNodeWithMarkup: function(oldChild, markup) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      ExecutionEnvironment.canUseDOM,
	      'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' +
	      'worker thread. Make sure `window` and `document` are available ' +
	      'globally before requiring React when unit testing or use ' +
	      'React.renderToString for server rendering.'
	    ) : invariant(ExecutionEnvironment.canUseDOM));
	    ("production" !== process.env.NODE_ENV ? invariant(markup, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(markup));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      oldChild.tagName.toLowerCase() !== 'html',
	      'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' +
	      '<html> node. This is because browser quirks make this unreliable ' +
	      'and/or slow. If you want to render to the root you must use ' +
	      'server rendering. See renderComponentToString().'
	    ) : invariant(oldChild.tagName.toLowerCase() !== 'html'));
	
	    var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
	    oldChild.parentNode.replaceChild(newChild, oldChild);
	  }
	
	};
	
	module.exports = Danger;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 181 */
/*!**************************************************!*\
  !*** ./~/react/lib/getNodeForCharacterOffset.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getNodeForCharacterOffset
	 */
	
	"use strict";
	
	/**
	 * Given any node return the first leaf node without children.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {DOMElement|DOMTextNode}
	 */
	function getLeafNode(node) {
	  while (node && node.firstChild) {
	    node = node.firstChild;
	  }
	  return node;
	}
	
	/**
	 * Get the next sibling within a container. This will walk up the
	 * DOM if a node's siblings have been exhausted.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {?DOMElement|DOMTextNode}
	 */
	function getSiblingNode(node) {
	  while (node) {
	    if (node.nextSibling) {
	      return node.nextSibling;
	    }
	    node = node.parentNode;
	  }
	}
	
	/**
	 * Get object describing the nodes which contain characters at offset.
	 *
	 * @param {DOMElement|DOMTextNode} root
	 * @param {number} offset
	 * @return {?object}
	 */
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  var nodeStart = 0;
	  var nodeEnd = 0;
	
	  while (node) {
	    if (node.nodeType == 3) {
	      nodeEnd = nodeStart + node.textContent.length;
	
	      if (nodeStart <= offset && nodeEnd >= offset) {
	        return {
	          node: node,
	          offset: offset - nodeStart
	        };
	      }
	
	      nodeStart = nodeEnd;
	    }
	
	    node = getLeafNode(getSiblingNode(node));
	  }
	}
	
	module.exports = getNodeForCharacterOffset;


/***/ },
/* 182 */
/*!**********************************************!*\
  !*** ./~/react/lib/createNodesFromMarkup.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createNodesFromMarkup
	 * @typechecks
	 */
	
	/*jslint evil: true, sub: true */
	
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	
	var createArrayFrom = __webpack_require__(/*! ./createArrayFrom */ 184);
	var getMarkupWrap = __webpack_require__(/*! ./getMarkupWrap */ 183);
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * Dummy container used to render all markup.
	 */
	var dummyNode =
	  ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
	
	/**
	 * Pattern used by `getNodeName`.
	 */
	var nodeNamePattern = /^\s*<(\w+)/;
	
	/**
	 * Extracts the `nodeName` of the first element in a string of markup.
	 *
	 * @param {string} markup String of markup.
	 * @return {?string} Node name of the supplied markup.
	 */
	function getNodeName(markup) {
	  var nodeNameMatch = markup.match(nodeNamePattern);
	  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
	}
	
	/**
	 * Creates an array containing the nodes rendered from the supplied markup. The
	 * optionally supplied `handleScript` function will be invoked once for each
	 * <script> element that is rendered. If no `handleScript` function is supplied,
	 * an exception is thrown if any <script> elements are rendered.
	 *
	 * @param {string} markup A string of valid HTML markup.
	 * @param {?function} handleScript Invoked once for each rendered <script>.
	 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
	 */
	function createNodesFromMarkup(markup, handleScript) {
	  var node = dummyNode;
	  ("production" !== process.env.NODE_ENV ? invariant(!!dummyNode, 'createNodesFromMarkup dummy not initialized') : invariant(!!dummyNode));
	  var nodeName = getNodeName(markup);
	
	  var wrap = nodeName && getMarkupWrap(nodeName);
	  if (wrap) {
	    node.innerHTML = wrap[1] + markup + wrap[2];
	
	    var wrapDepth = wrap[0];
	    while (wrapDepth--) {
	      node = node.lastChild;
	    }
	  } else {
	    node.innerHTML = markup;
	  }
	
	  var scripts = node.getElementsByTagName('script');
	  if (scripts.length) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      handleScript,
	      'createNodesFromMarkup(...): Unexpected <script> element rendered.'
	    ) : invariant(handleScript));
	    createArrayFrom(scripts).forEach(handleScript);
	  }
	
	  var nodes = createArrayFrom(node.childNodes);
	  while (node.lastChild) {
	    node.removeChild(node.lastChild);
	  }
	  return nodes;
	}
	
	module.exports = createNodesFromMarkup;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 183 */
/*!**************************************!*\
  !*** ./~/react/lib/getMarkupWrap.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getMarkupWrap
	 */
	
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 53);
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * Dummy container used to detect which wraps are necessary.
	 */
	var dummyNode =
	  ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
	
	/**
	 * Some browsers cannot use `innerHTML` to render certain elements standalone,
	 * so we wrap them, render the wrapped nodes, then extract the desired node.
	 *
	 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
	 */
	var shouldWrap = {
	  // Force wrapping for SVG elements because if they get created inside a <div>,
	  // they will be initialized in the wrong namespace (and will not display).
	  'circle': true,
	  'defs': true,
	  'ellipse': true,
	  'g': true,
	  'line': true,
	  'linearGradient': true,
	  'path': true,
	  'polygon': true,
	  'polyline': true,
	  'radialGradient': true,
	  'rect': true,
	  'stop': true,
	  'text': true
	};
	
	var selectWrap = [1, '<select multiple="true">', '</select>'];
	var tableWrap = [1, '<table>', '</table>'];
	var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	var svgWrap = [1, '<svg>', '</svg>'];
	
	var markupWrap = {
	  '*': [1, '?<div>', '</div>'],
	
	  'area': [1, '<map>', '</map>'],
	  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
	  'legend': [1, '<fieldset>', '</fieldset>'],
	  'param': [1, '<object>', '</object>'],
	  'tr': [2, '<table><tbody>', '</tbody></table>'],
	
	  'optgroup': selectWrap,
	  'option': selectWrap,
	
	  'caption': tableWrap,
	  'colgroup': tableWrap,
	  'tbody': tableWrap,
	  'tfoot': tableWrap,
	  'thead': tableWrap,
	
	  'td': trWrap,
	  'th': trWrap,
	
	  'circle': svgWrap,
	  'defs': svgWrap,
	  'ellipse': svgWrap,
	  'g': svgWrap,
	  'line': svgWrap,
	  'linearGradient': svgWrap,
	  'path': svgWrap,
	  'polygon': svgWrap,
	  'polyline': svgWrap,
	  'radialGradient': svgWrap,
	  'rect': svgWrap,
	  'stop': svgWrap,
	  'text': svgWrap
	};
	
	/**
	 * Gets the markup wrap configuration for the supplied `nodeName`.
	 *
	 * NOTE: This lazily detects which wraps are necessary for the current browser.
	 *
	 * @param {string} nodeName Lowercase `nodeName`.
	 * @return {?array} Markup wrap configuration, if applicable.
	 */
	function getMarkupWrap(nodeName) {
	  ("production" !== process.env.NODE_ENV ? invariant(!!dummyNode, 'Markup wrapping node not initialized') : invariant(!!dummyNode));
	  if (!markupWrap.hasOwnProperty(nodeName)) {
	    nodeName = '*';
	  }
	  if (!shouldWrap.hasOwnProperty(nodeName)) {
	    if (nodeName === '*') {
	      dummyNode.innerHTML = '<link />';
	    } else {
	      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
	    }
	    shouldWrap[nodeName] = !dummyNode.firstChild;
	  }
	  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
	}
	
	
	module.exports = getMarkupWrap;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 184 */
/*!****************************************!*\
  !*** ./~/react/lib/createArrayFrom.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createArrayFrom
	 * @typechecks
	 */
	
	var toArray = __webpack_require__(/*! ./toArray */ 185);
	
	/**
	 * Perform a heuristic test to determine if an object is "array-like".
	 *
	 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
	 *   Joshu replied: "Mu."
	 *
	 * This function determines if its argument has "array nature": it returns
	 * true if the argument is an actual array, an `arguments' object, or an
	 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
	 *
	 * It will return false for other array-like objects like Filelist.
	 *
	 * @param {*} obj
	 * @return {boolean}
	 */
	function hasArrayNature(obj) {
	  return (
	    // not null/false
	    !!obj &&
	    // arrays are objects, NodeLists are functions in Safari
	    (typeof obj == 'object' || typeof obj == 'function') &&
	    // quacks like an array
	    ('length' in obj) &&
	    // not window
	    !('setInterval' in obj) &&
	    // no DOM node should be considered an array-like
	    // a 'select' element has 'length' and 'item' properties on IE8
	    (typeof obj.nodeType != 'number') &&
	    (
	      // a real array
	      (// HTMLCollection/NodeList
	      (Array.isArray(obj) ||
	      // arguments
	      ('callee' in obj) || 'item' in obj))
	    )
	  );
	}
	
	/**
	 * Ensure that the argument is an array by wrapping it in an array if it is not.
	 * Creates a copy of the argument if it is already an array.
	 *
	 * This is mostly useful idiomatically:
	 *
	 *   var createArrayFrom = require('createArrayFrom');
	 *
	 *   function takesOneOrMoreThings(things) {
	 *     things = createArrayFrom(things);
	 *     ...
	 *   }
	 *
	 * This allows you to treat `things' as an array, but accept scalars in the API.
	 *
	 * If you need to convert an array-like object, like `arguments`, into an array
	 * use toArray instead.
	 *
	 * @param {*} obj
	 * @return {array}
	 */
	function createArrayFrom(obj) {
	  if (!hasArrayNature(obj)) {
	    return [obj];
	  } else if (Array.isArray(obj)) {
	    return obj.slice();
	  } else {
	    return toArray(obj);
	  }
	}
	
	module.exports = createArrayFrom;


/***/ },
/* 185 */
/*!********************************!*\
  !*** ./~/react/lib/toArray.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule toArray
	 * @typechecks
	 */
	
	var invariant = __webpack_require__(/*! ./invariant */ 67);
	
	/**
	 * Convert array-like objects to arrays.
	 *
	 * This API assumes the caller knows the contents of the data type. For less
	 * well defined inputs use createArrayFrom.
	 *
	 * @param {object|function|filelist} obj
	 * @return {array}
	 */
	function toArray(obj) {
	  var length = obj.length;
	
	  // Some browse builtin objects can report typeof 'function' (e.g. NodeList in
	  // old versions of Safari).
	  ("production" !== process.env.NODE_ENV ? invariant(
	    !Array.isArray(obj) &&
	    (typeof obj === 'object' || typeof obj === 'function'),
	    'toArray: Array-like object expected'
	  ) : invariant(!Array.isArray(obj) &&
	  (typeof obj === 'object' || typeof obj === 'function')));
	
	  ("production" !== process.env.NODE_ENV ? invariant(
	    typeof length === 'number',
	    'toArray: Object needs a length property'
	  ) : invariant(typeof length === 'number'));
	
	  ("production" !== process.env.NODE_ENV ? invariant(
	    length === 0 ||
	    (length - 1) in obj,
	    'toArray: Object should have keys for indices'
	  ) : invariant(length === 0 ||
	  (length - 1) in obj));
	
	  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
	  // without method will throw during the slice call and skip straight to the
	  // fallback.
	  if (obj.hasOwnProperty) {
	    try {
	      return Array.prototype.slice.call(obj);
	    } catch (e) {
	      // IE < 9 does not support Array#slice on collections objects
	    }
	  }
	
	  // Fall back to copying key by key. This assumes all keys have a value,
	  // so will not preserve sparsely populated inputs.
	  var ret = Array(length);
	  for (var ii = 0; ii < length; ii++) {
	    ret[ii] = obj[ii];
	  }
	  return ret;
	}
	
	module.exports = toArray;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 65)))

/***/ },
/* 186 */
/*!*************************************************!*\
  !*** ./presentation/slides/immutable-code5.jsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 7);
	var code  = __webpack_require__(/*! ../code/immutable5.txt */ 187);
	var hljs = __webpack_require__(/*! hljs */ 29);
	
	module.exports = React.createClass({displayName: 'exports',
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("pre", null, 
	          React.createElement("code", {dangerouslySetInnerHTML: {__html: hljs(code, 'javascript').value}})
	        )
	      )
	    );
	  }  
	
	});

/***/ },
/* 187 */
/*!******************************************!*\
  !*** ./presentation/code/immutable5.txt ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "// Other Supported Structures:\nImmutable.List()  // (array like)\n\nImmutable.Stack()\n\nImmutable.OrderedMap()\n\nImmutable.Set()\n\nImmutable.Map()"

/***/ }
/******/ ])
//# sourceMappingURL=index.js.map