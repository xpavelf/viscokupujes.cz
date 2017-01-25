/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	var _reactRedux = __webpack_require__(21);

	var _store = __webpack_require__(6);

	var _store2 = _interopRequireDefault(_store);

	var _reactRouter = __webpack_require__(5);

	__webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default })
	), document.getElementById("root"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = react;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(32);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	var _store = __webpack_require__(6);

	var _store2 = _interopRequireDefault(_store);

	var _Product = __webpack_require__(17);

	var _App = __webpack_require__(19);

	var _App2 = _interopRequireDefault(_App);

	var _Product2 = __webpack_require__(32);

	var _Product3 = _interopRequireDefault(_Product2);

	var _AboutUs = __webpack_require__(34);

	var _AboutUs2 = _interopRequireDefault(_AboutUs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: "/", component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { getComponent: function getComponent(nextState, cb) {
	      _store2.default.dispatch((0, _Product.resetActiveProduct)());
	      cb(null, _AboutUs2.default);
	    } }),
	  _react2.default.createElement(_reactRouter.Route, { path: "product/:id", component: _Product3.default })
	);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(208);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(7);

	var _reduxLogger = __webpack_require__(8);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reduxPromiseMiddleware = __webpack_require__(14);

	var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

	var _reduxThunk = __webpack_require__(15);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(16);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var middleware = (0, _redux.applyMiddleware)((0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default);

	exports.default = (0, _redux.createStore)(_reducers2.default, middleware);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(185);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _core = __webpack_require__(9);

	var _helpers = __webpack_require__(10);

	var _defaults = __webpack_require__(13);

	var _defaults2 = _interopRequireDefault(_defaults);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates logger with following options
	 *
	 * @namespace
	 * @param {object} options - options for logger
	 * @param {string | function | object} options.level - console[level]
	 * @param {boolean} options.duration - print duration of each action?
	 * @param {boolean} options.timestamp - print timestamp with each action?
	 * @param {object} options.colors - custom colors
	 * @param {object} options.logger - implementation of the `console` API
	 * @param {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @param {boolean} options.collapsed - is group collapsed?
	 * @param {boolean} options.predicate - condition which resolves logger behavior
	 * @param {function} options.stateTransformer - transform state before print
	 * @param {function} options.actionTransformer - transform action before print
	 * @param {function} options.errorTransformer - transform error before print
	 *
	 * @returns {function} logger middleware
	 */
	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var loggerOptions = _extends({}, _defaults2.default, options);

	  var logger = loggerOptions.logger;
	  var transformer = loggerOptions.transformer;
	  var stateTransformer = loggerOptions.stateTransformer;
	  var errorTransformer = loggerOptions.errorTransformer;
	  var predicate = loggerOptions.predicate;
	  var logErrors = loggerOptions.logErrors;
	  var diffPredicate = loggerOptions.diffPredicate;

	  // Return if 'console' object is not defined

	  if (typeof logger === 'undefined') {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }

	  if (transformer) {
	    console.error('Option \'transformer\' is deprecated, use \'stateTransformer\' instead!'); // eslint-disable-line no-console
	  }

	  var logBuffer = [];

	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // Exit early if predicate function returns 'false'
	        if (typeof predicate === 'function' && !predicate(getState, action)) {
	          return next(action);
	        }

	        var logEntry = {};
	        logBuffer.push(logEntry);

	        logEntry.started = _helpers.timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;

	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }

	        logEntry.took = _helpers.timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());

	        var diff = loggerOptions.diff && typeof diffPredicate === 'function' ? diffPredicate(getState, action) : loggerOptions.diff;

	        (0, _core.printBuffer)(logBuffer, _extends({}, loggerOptions, { diff: diff }));
	        logBuffer.length = 0;

	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}

	exports.default = createLogger;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.printBuffer = printBuffer;

	var _helpers = __webpack_require__(10);

	var _diff = __webpack_require__(11);

	var _diff2 = _interopRequireDefault(_diff);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	/**
	 * Get log level string based on supplied params
	 *
	 * @param {string | function | object} level - console[level]
	 * @param {object} action - selected action
	 * @param {array} payload - selected payload
	 * @param {string} type - log entry type
	 *
	 * @returns {string} level
	 */
	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
	    case 'object':
	      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case 'function':
	      return level(action);
	    default:
	      return level;
	  }
	}

	function defaultTitleFormatter(options) {
	  var timestamp = options.timestamp;
	  var duration = options.duration;

	  return function (action, time, took) {
	    var parts = ['action'];
	    if (timestamp) {
	      parts.push('@ ' + time);
	    }
	    parts.push(action.type);
	    if (duration) {
	      parts.push('(in ' + took.toFixed(2) + ' ms)');
	    }
	    return parts.join(' ');
	  };
	}

	function printBuffer(buffer, options) {
	  var logger = options.logger;
	  var actionTransformer = options.actionTransformer;
	  var _options$titleFormatt = options.titleFormatter;
	  var titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt;
	  var collapsed = options.collapsed;
	  var colors = options.colors;
	  var level = options.level;
	  var diff = options.diff;

	  buffer.forEach(function (logEntry, key) {
	    var started = logEntry.started;
	    var startedTime = logEntry.startedTime;
	    var action = logEntry.action;
	    var prevState = logEntry.prevState;
	    var error = logEntry.error;
	    var took = logEntry.took;
	    var nextState = logEntry.nextState;

	    var nextEntry = buffer[key + 1];

	    if (nextEntry) {
	      nextState = nextEntry.prevState;
	      took = nextEntry.started - started;
	    }

	    // Message
	    var formattedAction = actionTransformer(action);
	    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
	      return nextState;
	    }, action) : collapsed;

	    var formattedTime = (0, _helpers.formatTime)(startedTime);
	    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : null;
	    var title = titleFormatter(formattedAction, formattedTime, took);

	    // Render
	    try {
	      if (isCollapsed) {
	        if (colors.title) logger.groupCollapsed('%c ' + title, titleCSS);else logger.groupCollapsed(title);
	      } else {
	        if (colors.title) logger.group('%c ' + title, titleCSS);else logger.group(title);
	      }
	    } catch (e) {
	      logger.log(title);
	    }

	    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
	    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
	    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
	    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');

	    if (prevStateLevel) {
	      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
	    }

	    if (actionLevel) {
	      if (colors.action) logger[actionLevel]('%c action', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action', formattedAction);
	    }

	    if (error && errorLevel) {
	      if (colors.error) logger[errorLevel]('%c error', 'color: ' + colors.error(error, prevState) + '; font-weight: bold', error);else logger[errorLevel]('error', error);
	    }

	    if (nextStateLevel) {
	      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
	    }

	    if (diff) {
	      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
	    }

	    try {
	      logger.groupEnd();
	    } catch (e) {
	      logger.log('—— log end ——');
	    }
	  });
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var repeat = exports.repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};

	var pad = exports.pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};

	var formatTime = exports.formatTime = function formatTime(time) {
	  return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};

	// Use performance API if it's available in order to get better precision
	var timer = exports.timer = typeof performance !== "undefined" && performance !== null && typeof performance.now === "function" ? performance : Date;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = diffLogger;

	var _deepDiff = __webpack_require__(12);

	var _deepDiff2 = _interopRequireDefault(_deepDiff);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// https://github.com/flitbit/diff#differences
	var dictionary = {
	  'E': {
	    color: '#2196F3',
	    text: 'CHANGED:'
	  },
	  'N': {
	    color: '#4CAF50',
	    text: 'ADDED:'
	  },
	  'D': {
	    color: '#F44336',
	    text: 'DELETED:'
	  },
	  'A': {
	    color: '#2196F3',
	    text: 'ARRAY:'
	  }
	};

	function style(kind) {
	  return 'color: ' + dictionary[kind].color + '; font-weight: bold';
	}

	function render(diff) {
	  var kind = diff.kind;
	  var path = diff.path;
	  var lhs = diff.lhs;
	  var rhs = diff.rhs;
	  var index = diff.index;
	  var item = diff.item;

	  switch (kind) {
	    case 'E':
	      return path.join('.') + ' ' + lhs + ' → ' + rhs;
	    case 'N':
	      return path.join('.') + ' ' + rhs;
	    case 'D':
	      return '' + path.join('.');
	    case 'A':
	      return [path.join('.') + '[' + index + ']', item];
	    default:
	      return null;
	  }
	}

	function diffLogger(prevState, newState, logger, isCollapsed) {
	  var diff = (0, _deepDiff2.default)(prevState, newState);

	  try {
	    if (isCollapsed) {
	      logger.groupCollapsed('diff');
	    } else {
	      logger.group('diff');
	    }
	  } catch (e) {
	    logger.log('diff');
	  }

	  if (diff) {
	    diff.forEach(function (elem) {
	      var kind = elem.kind;

	      var output = render(elem);

	      logger.log('%c ' + dictionary[kind].text, style(kind), output);
	    });
	  } else {
	    logger.log('—— no diff ——');
	  }

	  try {
	    logger.groupEnd();
	  } catch (e) {
	    logger.log('—— diff end —— ');
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * deep-diff.
	 * Licensed under the MIT License.
	 */
	;(function(root, factory) {
	  'use strict';
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.DeepDiff = factory();
	  }
	}(this, function(undefined) {
	  'use strict';

	  var $scope, conflict, conflictResolution = [];
	  if (typeof global === 'object' && global) {
	    $scope = global;
	  } else if (typeof window !== 'undefined') {
	    $scope = window;
	  } else {
	    $scope = {};
	  }
	  conflict = $scope.DeepDiff;
	  if (conflict) {
	    conflictResolution.push(
	      function() {
	        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
	          $scope.DeepDiff = conflict;
	          conflict = undefined;
	        }
	      });
	  }

	  // nodejs compatible on server side and in the browser.
	  function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  }

	  function Diff(kind, path) {
	    Object.defineProperty(this, 'kind', {
	      value: kind,
	      enumerable: true
	    });
	    if (path && path.length) {
	      Object.defineProperty(this, 'path', {
	        value: path,
	        enumerable: true
	      });
	    }
	  }

	  function DiffEdit(path, origin, value) {
	    DiffEdit.super_.call(this, 'E', path);
	    Object.defineProperty(this, 'lhs', {
	      value: origin,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffEdit, Diff);

	  function DiffNew(path, value) {
	    DiffNew.super_.call(this, 'N', path);
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffNew, Diff);

	  function DiffDeleted(path, value) {
	    DiffDeleted.super_.call(this, 'D', path);
	    Object.defineProperty(this, 'lhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffDeleted, Diff);

	  function DiffArray(path, index, item) {
	    DiffArray.super_.call(this, 'A', path);
	    Object.defineProperty(this, 'index', {
	      value: index,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'item', {
	      value: item,
	      enumerable: true
	    });
	  }
	  inherits(DiffArray, Diff);

	  function arrayRemove(arr, from, to) {
	    var rest = arr.slice((to || from) + 1 || arr.length);
	    arr.length = from < 0 ? arr.length + from : from;
	    arr.push.apply(arr, rest);
	    return arr;
	  }

	  function realTypeOf(subject) {
	    var type = typeof subject;
	    if (type !== 'object') {
	      return type;
	    }

	    if (subject === Math) {
	      return 'math';
	    } else if (subject === null) {
	      return 'null';
	    } else if (Array.isArray(subject)) {
	      return 'array';
	    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
	      return 'date';
	    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
	      return 'regexp';
	    }
	    return 'object';
	  }

	  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
	    path = path || [];
	    var currentPath = path.slice(0);
	    if (typeof key !== 'undefined') {
	      if (prefilter) {
	        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
	        else if (typeof(prefilter) === 'object') {
	          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
	          if (prefilter.normalize) {
	            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
	            if (alt) {
	              lhs = alt[0];
	              rhs = alt[1];
	            }
	          }
	        }
	      }
	      currentPath.push(key);
	    }

	    // Use string comparison for regexes
	    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
	      lhs = lhs.toString();
	      rhs = rhs.toString();
	    }

	    var ltype = typeof lhs;
	    var rtype = typeof rhs;
	    if (ltype === 'undefined') {
	      if (rtype !== 'undefined') {
	        changes(new DiffNew(currentPath, rhs));
	      }
	    } else if (rtype === 'undefined') {
	      changes(new DiffDeleted(currentPath, lhs));
	    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
	      stack = stack || [];
	      if (stack.indexOf(lhs) < 0) {
	        stack.push(lhs);
	        if (Array.isArray(lhs)) {
	          var i, len = lhs.length;
	          for (i = 0; i < lhs.length; i++) {
	            if (i >= rhs.length) {
	              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
	            } else {
	              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
	            }
	          }
	          while (i < rhs.length) {
	            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
	          }
	        } else {
	          var akeys = Object.keys(lhs);
	          var pkeys = Object.keys(rhs);
	          akeys.forEach(function(k, i) {
	            var other = pkeys.indexOf(k);
	            if (other >= 0) {
	              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
	              pkeys = arrayRemove(pkeys, other);
	            } else {
	              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
	            }
	          });
	          pkeys.forEach(function(k) {
	            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
	          });
	        }
	        stack.length = stack.length - 1;
	      }
	    } else if (lhs !== rhs) {
	      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
	        changes(new DiffEdit(currentPath, lhs, rhs));
	      }
	    }
	  }

	  function accumulateDiff(lhs, rhs, prefilter, accum) {
	    accum = accum || [];
	    deepDiff(lhs, rhs,
	      function(diff) {
	        if (diff) {
	          accum.push(diff);
	        }
	      },
	      prefilter);
	    return (accum.length) ? accum : undefined;
	  }

	  function applyArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    } else {
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr = arrayRemove(arr, index);
	          break;
	        case 'E':
	        case 'N':
	          arr[index] = change.rhs;
	          break;
	      }
	    }
	    return arr;
	  }

	  function applyChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i = -1,
	          last = change.path ? change.path.length - 1 : 0;
	      while (++i < last) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    }
	  }

	  function revertArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      // the structure of the object at the index has changed...
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          delete it[change.path[i]];
	          break;
	      }
	    } else {
	      // the array item is different...
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr[index] = change.lhs;
	          break;
	        case 'E':
	          arr[index] = change.lhs;
	          break;
	        case 'N':
	          arr = arrayRemove(arr, index);
	          break;
	      }
	    }
	    return arr;
	  }

	  function revertChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i, u;
	      u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          // Array was modified...
	          // it will be an array...
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          // Item was deleted...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          // Item was edited...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          // Item is new...
	          delete it[change.path[i]];
	          break;
	      }
	    }
	  }

	  function applyDiff(target, source, filter) {
	    if (target && source) {
	      var onChange = function(change) {
	        if (!filter || filter(target, source, change)) {
	          applyChange(target, source, change);
	        }
	      };
	      deepDiff(target, source, onChange);
	    }
	  }

	  Object.defineProperties(accumulateDiff, {

	    diff: {
	      value: accumulateDiff,
	      enumerable: true
	    },
	    observableDiff: {
	      value: deepDiff,
	      enumerable: true
	    },
	    applyDiff: {
	      value: applyDiff,
	      enumerable: true
	    },
	    applyChange: {
	      value: applyChange,
	      enumerable: true
	    },
	    revertChange: {
	      value: revertChange,
	      enumerable: true
	    },
	    isConflict: {
	      value: function() {
	        return 'undefined' !== typeof conflict;
	      },
	      enumerable: true
	    },
	    noConflict: {
	      value: function() {
	        if (conflictResolution) {
	          conflictResolution.forEach(function(it) {
	            it();
	          });
	          conflictResolution = null;
	        }
	        return accumulateDiff;
	      },
	      enumerable: true
	    }
	  });

	  return accumulateDiff;
	}));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  level: "log",
	  logger: console,
	  logErrors: true,
	  collapsed: undefined,
	  predicate: undefined,
	  duration: false,
	  timestamp: true,
	  stateTransformer: function stateTransformer(state) {
	    return state;
	  },
	  actionTransformer: function actionTransformer(action) {
	    return action;
	  },
	  errorTransformer: function errorTransformer(error) {
	    return error;
	  },
	  colors: {
	    title: function title() {
	      return "inherit";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  },
	  diff: false,
	  diffPredicate: undefined,

	  // Deprecated options
	  transformer: undefined
	};
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(262);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(261);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments[1];


	  switch (action.type) {
	    case _Product.SEARCH_PRODUCT_RESET:
	      return _extends({}, state, { searchProduct: INITIAL_STATE.searchProduct });
	    case _Product.SEARCH_PRODUCT + "_PENDING":
	      return _extends({}, state, { searchProduct: { products: null, err: null, pending: true } });

	    case _Product.SEARCH_PRODUCT + "_FULFILLED":
	      return _extends({}, state, { searchProduct: { products: action.payload, err: null, pending: false } });

	    case _Product.GET_PRODUCT_BY_ID_RESET:
	      return _extends({}, state, { activeProduct: INITIAL_STATE.activeProduct });
	    case _Product.GET_PRODUCT_BY_ID + "_FULFILLED":
	      return _extends({}, state, { activeProduct: { product: action.payload, err: null, pending: false } });

	  }

	  return state;
	};

	var _Product = __webpack_require__(17);

	var INITIAL_STATE = {
	  searchProduct: { products: null, err: null, pending: false },
	  activeProduct: { product: null, err: null, pending: false }
	};

	;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GET_PRODUCT_BY_ID_RESET = exports.GET_PRODUCT_BY_ID = exports.SEARCH_PRODUCT_RESET = exports.SEARCH_PRODUCT = undefined;
	exports.searchProduct = searchProduct;
	exports.getProductById = getProductById;
	exports.resetSearchProduct = resetSearchProduct;
	exports.resetActiveProduct = resetActiveProduct;

	__webpack_require__(18);

	var SEARCH_PRODUCT = exports.SEARCH_PRODUCT = "SEARCH_PRODUCT";
	var SEARCH_PRODUCT_RESET = exports.SEARCH_PRODUCT_RESET = SEARCH_PRODUCT + "_RESET";
	var GET_PRODUCT_BY_ID = exports.GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
	var GET_PRODUCT_BY_ID_RESET = exports.GET_PRODUCT_BY_ID_RESET = GET_PRODUCT_BY_ID + "_RESET";

	function searchProduct(term) {
	  return {
	    type: SEARCH_PRODUCT,
	    payload: fetch("/api/product?q=" + term).then(function (resp) {
	      return resp.json();
	    })
	  };
	}

	function getProductById(id) {
	  return {
	    type: GET_PRODUCT_BY_ID,
	    payload: fetch("/api/product/" + id).then(function (resp) {
	      return resp.json();
	    })
	  };
	}

	function resetSearchProduct() {
	  return { type: SEARCH_PRODUCT_RESET };
	}

	function resetActiveProduct() {
	  return { type: GET_PRODUCT_BY_ID_RESET };
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]

	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }

	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }

	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }

	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)

	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }

	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }

	  function Body() {
	    this.bodyUsed = false

	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }

	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }

	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body

	    if (typeof input === 'string') {
	      this.url = input
	    } else {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split('\r\n').forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Toolbar = __webpack_require__(20);

	var _Toolbar2 = _interopRequireDefault(_Toolbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (props) {
	  return _react2.default.createElement(
	    "div",
	    { className: "App" },
	    _react2.default.createElement(_Toolbar2.default, null),
	    _react2.default.createElement(
	      "div",
	      { className: "App__content" },
	      props.children
	    )
	  );
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(21);

	var _debounce = __webpack_require__(22);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _reactRouter = __webpack_require__(5);

	var _Product = __webpack_require__(17);

	var _progressbar = __webpack_require__(24);

	var _progressbar2 = _interopRequireDefault(_progressbar);

	var _cart = __webpack_require__(25);

	var _cart2 = _interopRequireDefault(_cart);

	var _logo = __webpack_require__(26);

	var _logo2 = _interopRequireDefault(_logo);

	var _reactSearchbox = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Suggestion = function Suggestion(props) {
	  var splitAt = function splitAt(hit, str, startpos) {
	    return [str.slice(startpos, hit[0]), str.slice(hit[0], hit[1]), str.slice(hit[1])];
	  };
	  var hits = props.data.hits;
	  var name = [];
	  if (hits && hits.length) {
	    for (var i = 0; i < hits.length; i++) {
	      var prev = i === 0 ? 0 : hits[i - 1][1];
	      var arr = splitAt(hits[i], props.data.name, prev);
	      var end = i + 1 === hits.length ? arr[2] : null;
	      name = name.concat(arr[0], _react2.default.createElement(
	        "span",
	        { key: hits[i], className: "SearchBox__Product-highlight" },
	        arr[1]
	      ), end);
	    }
	  } else {
	    name = props.data.name;
	  }

	  return _react2.default.createElement(
	    _reactSearchbox.SuggestionLink,
	    { data: props.data, onSelect: props.onSelect },
	    _react2.default.createElement(
	      "div",
	      { className: "SearchBox__Product-name" },
	      name
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "SearchBox__Product-producer" },
	      props.data.producer
	    )
	  );
	};

	var Toolbar = (_dec = (0, _reactRedux.connect)(function (store) {
	  return {
	    activeProduct: store.activeProduct,
	    searchProduct: store.searchProduct
	  };
	}), _dec(_class = function (_React$Component) {
	  _inherits(Toolbar, _React$Component);

	  function Toolbar() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Toolbar);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call.apply(_ref, [this].concat(args))), _this), _this.goBack = function () {
	      _reactRouter.browserHistory.push("/");
	    }, _this._searchProductDebounced = (0, _debounce2.default)(function (term) {
	      _this.props.dispatch((0, _Product.searchProduct)(term));
	    }, 300), _this.onChange = function (term) {
	      _this.props.dispatch((0, _Product.resetSearchProduct)());
	      _this._searchProductDebounced(term);
	    }, _this.onSelect = function (product) {
	      _reactRouter.browserHistory.push("/product/" + product.id);
	    }, _this.renderEmptySuggestion = function (data) {
	      if (data.pending) {
	        return _react2.default.createElement(
	          _reactSearchbox.Suggestion,
	          null,
	          _react2.default.createElement("img", { height: "15", src: _progressbar2.default }),
	          "\xA0\xA0\xA0Vyhled\xE1v\xE1m.."
	        );
	      } else if (data.products !== null) {
	        return _react2.default.createElement(
	          _reactSearchbox.Suggestion,
	          null,
	          "Nena\u0161li jsme \u017E\xE1dn\xFD produkt... \u2639"
	        );
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Toolbar, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "Toolbar" },
	        this.props.activeProduct.product ? _react2.default.createElement(
	          "button",
	          { className: "Toolbar__backBtn", onClick: this.goBack },
	          "\u2190"
	        ) : null,
	        _react2.default.createElement(
	          "h1",
	          { className: "Toolbar__title" },
	          _react2.default.createElement("img", { src: _cart2.default }),
	          _react2.default.createElement("img", { src: _logo2.default }),
	          _react2.default.createElement(
	            "a",
	            { target: "_blank", href: "https://www.facebook.com/viscokupujes", title: "Facebook", className: "Toolbar__fbLink" },
	            _react2.default.createElement(
	              "svg",
	              { height: "32", width: "32", viewBox: "0 0 512 512" },
	              _react2.default.createElement("rect", { fill: "#319631", x: "0", y: "0", width: "512", height: "512" }),
	              _react2.default.createElement("path", { fill: "white", d: "M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64 H288z" })
	            )
	          )
	        ),
	        !this.props.activeProduct.product ? _react2.default.createElement(_reactSearchbox.SearchBox, {
	          onChange: this.onChange,
	          onSelect: this.onSelect,
	          placeholder: "Najdi v\xFDrobek...",
	          suggestions: this.props.searchProduct,
	          parseSuggestionsData: function parseSuggestionsData(data) {
	            return data.products;
	          },
	          suggestionComp: Suggestion,
	          renderEmptySuggestion: this.renderEmptySuggestion
	        }) : null
	      );
	    }
	  }]);

	  return Toolbar;
	}(_react2.default.Component)) || _class);
	exports.default = Toolbar;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(178);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var now = __webpack_require__(23);

	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds. If `immediate` is passed, trigger the function on the
	 * leading edge, instead of the trailing.
	 *
	 * @source underscore.js
	 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	 * @param {Function} function to wrap
	 * @param {Number} timeout in ms (`100`)
	 * @param {Boolean} whether to execute at the beginning (`false`)
	 * @api public
	 */

	module.exports = function debounce(func, wait, immediate){
	  var timeout, args, context, timestamp, result;
	  if (null == wait) wait = 100;

	  function later() {
	    var last = now() - timestamp;

	    if (last < wait && last > 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      if (!immediate) {
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      }
	    }
	  };

	  return function debounced() {
	    context = this;
	    args = arguments;
	    timestamp = now();
	    var callNow = immediate && !timeout;
	    if (!timeout) timeout = setTimeout(later, wait);
	    if (callNow) {
	      result = func.apply(context, args);
	      context = args = null;
	    }

	    return result;
	  };
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = Date.now || now

	function now() {
	    return new Date().getTime()
	}


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "/dist/assets/progressbar-daa4e6.gif";

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "/dist/assets/cart-805c01.png";

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "/dist/assets/logo-3932ee.png";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SuggestionLink = exports.Suggestion = exports.SearchBox = undefined;

	var _SearchBox = __webpack_require__(28);

	var _SearchBox2 = _interopRequireDefault(_SearchBox);

	var _Suggestion = __webpack_require__(30);

	var _Suggestion2 = _interopRequireDefault(_Suggestion);

	var _SuggestionLink = __webpack_require__(31);

	var _SuggestionLink2 = _interopRequireDefault(_SuggestionLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchBox = exports.SearchBox = _SearchBox2.default;
	var Suggestion = exports.Suggestion = _Suggestion2.default;
	var SuggestionLink = exports.SuggestionLink = _SuggestionLink2.default;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SuggestionList = __webpack_require__(29);

	var _SuggestionList2 = _interopRequireDefault(_SuggestionList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchBox = function (_React$Component) {
	  _inherits(SearchBox, _React$Component);

	  function SearchBox() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SearchBox);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      inputValue: "",
	      showSuggestionList: false
	    }, _this.clearInput = function () {
	      _this.setState({
	        inputValue: "",
	        showSuggestionList: false
	      });
	      _this.props.onChange(null);
	    }, _this.onSelect = function (data) {
	      _this.setState({
	        inputValue: _this.props.selectedToString(data),
	        showSuggestionList: false
	      });
	      _this.props.onSelect(data);
	    }, _this.onChange = function (e) {
	      // workaround - triggers on mobile chrome with same input
	      if (e.target.value !== _this.state.inputValue) {
	        _this.setState({
	          inputValue: e.target.value,
	          showSuggestionList: true
	        });

	        _this.props.onChange(e.target.value);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SearchBox, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      if (this.props.autoFocus) {
	        this.input.focus();
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        "div",
	        { className: "SearchBox" },
	        this.props.showBackButton && _react2.default.createElement(
	          "button",
	          { className: "SearchBox__backButton",
	            onClick: this.props.onBack },
	          "\u2190"
	        ),
	        _react2.default.createElement("input", { value: this.state.inputValue,
	          ref: function ref(input) {
	            _this2.input = input;
	          },
	          className: "SearchBox__input",
	          onChange: this.onChange,
	          placeholder: this.props.placeholder }),
	        _react2.default.createElement(
	          "button",
	          { className: "SearchBox__clearButton",
	            onClick: this.clearInput },
	          "\u2715"
	        ),
	        _react2.default.createElement(_SuggestionList2.default, {
	          show: this.state.showSuggestionList,
	          onSelect: this.onSelect,
	          suggestions: this.props.suggestions,
	          suggestionComp: this.props.suggestionComp,
	          parseSuggestionsData: this.props.parseSuggestionsData,
	          renderEmptySuggestion: this.props.renderEmptySuggestion })
	      );
	    }
	  }]);

	  return SearchBox;
	}(_react2.default.Component);

	SearchBox.propTypes = {
	  onChange: _react2.default.PropTypes.func,
	  onSelect: _react2.default.PropTypes.func,
	  onBack: _react2.default.PropTypes.func,
	  selectedToString: _react2.default.PropTypes.func,
	  placeholder: _react2.default.PropTypes.string,
	  suggestions: _react2.default.PropTypes.object,
	  parseSuggestionsData: _react2.default.PropTypes.func,
	  renderEmptySuggestion: _react2.default.PropTypes.func,
	  suggestionComp: _react2.default.PropTypes.func,
	  showBackButton: _react2.default.PropTypes.bool,
	  autoFocus: _react2.default.PropTypes.bool
	};
	SearchBox.defaultProps = {
	  placeholder: "Search...",
	  showBackButton: false,
	  autoFocus: true,
	  onBack: function onBack() {},
	  selectedToString: function selectedToString(data) {
	    return data;
	  }
	};
	exports.default = SearchBox;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Suggestion = __webpack_require__(30);

	var _Suggestion2 = _interopRequireDefault(_Suggestion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SuggestionList = function (_React$Component) {
	  _inherits(SuggestionList, _React$Component);

	  function SuggestionList() {
	    var _ref,
	        _this2 = this;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SuggestionList);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SuggestionList.__proto__ || Object.getPrototypeOf(SuggestionList)).call.apply(_ref, [this].concat(args))), _this), _this.state = { show: false }, _this.renderSuggestions = function (data) {
	      var sugArr = _this.props.parseSuggestionsData(data);

	      if (!sugArr || !sugArr.length) {
	        return _this.props.renderEmptySuggestion(data);
	      }

	      return sugArr.map(function (itemData) {
	        return _react2.default.createElement(_this2.props.suggestionComp, {
	          onSelect: _this.props.onSelect,
	          data: itemData, key: itemData.id });
	      });
	    }, _this.hide = function () {
	      return _this.setState({ show: false });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SuggestionList, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({ show: nextProps.show });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var show = this.state.show ? "SuggestionList--open" : "";
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "ul",
	          { className: "SuggestionList " + show },
	          this.renderSuggestions(this.props.suggestions)
	        ),
	        this.state.show ? _react2.default.createElement("div", { onClick: this.hide, className: "SuggestionList__backdrop" }) : ""
	      );
	    }
	  }]);

	  return SuggestionList;
	}(_react2.default.Component);

	SuggestionList.propTypes = {
	  suggestions: _react2.default.PropTypes.object,
	  suggestionComp: _react2.default.PropTypes.func,
	  parseSuggestionsData: _react2.default.PropTypes.func,
	  renderEmptySuggestion: _react2.default.PropTypes.func
	};
	SuggestionList.defaultProps = {
	  suggestions: null,
	  suggestionComp: _Suggestion2.default,
	  parseSuggestionsData: function parseSuggestionsData(data) {
	    return data;
	  },
	  renderEmptySuggestion: function renderEmptySuggestion(data) {
	    return null;
	  }
	};
	exports.default = SuggestionList;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Suggestion = function (_React$Component) {
	  _inherits(Suggestion, _React$Component);

	  function Suggestion() {
	    _classCallCheck(this, Suggestion);

	    return _possibleConstructorReturn(this, (Suggestion.__proto__ || Object.getPrototypeOf(Suggestion)).apply(this, arguments));
	  }

	  _createClass(Suggestion, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "li",
	        { className: "Suggestion" },
	        _react2.default.createElement(
	          "div",
	          { className: "Suggestion__block" },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Suggestion;
	}(_react2.default.Component);

	exports.default = Suggestion;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Suggestion = __webpack_require__(30);

	var _Suggestion2 = _interopRequireDefault(_Suggestion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SuggestionLink = function (_React$Component) {
	  _inherits(SuggestionLink, _React$Component);

	  function SuggestionLink() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SuggestionLink);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SuggestionLink.__proto__ || Object.getPrototypeOf(SuggestionLink)).call.apply(_ref, [this].concat(args))), _this), _this.select = function (e) {
	      e.preventDefault();
	      _this.props.onSelect(_this.props.data);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SuggestionLink, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Suggestion2.default,
	        null,
	        _react2.default.createElement(
	          "a",
	          { onClick: this.select, className: "Suggestion__link" },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return SuggestionLink;
	}(_react2.default.Component);

	SuggestionLink.propTypes = {
	  data: _react2.default.PropTypes.object.isRequired,
	  onSelect: _react2.default.PropTypes.func.isRequired
	};
	exports.default = SuggestionLink;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _EckoList = __webpack_require__(33);

	var _EckoList2 = _interopRequireDefault(_EckoList);

	var _reactRedux = __webpack_require__(21);

	var _Product = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Product = (_dec = (0, _reactRedux.connect)(function (store) {
	  return { activeProduct: store.activeProduct };
	}), _dec(_class = function (_React$Component) {
	  _inherits(Product, _React$Component);

	  function Product() {
	    _classCallCheck(this, Product);

	    return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).apply(this, arguments));
	  }

	  _createClass(Product, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      if (this.props.params.id) {
	        this.props.dispatch((0, _Product.getProductById)(this.props.params.id));
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var prod = this.props.activeProduct.product;
	      return prod ? _react2.default.createElement(
	        "div",
	        { className: "Product" },
	        _react2.default.createElement(
	          "h2",
	          { className: "Product__name" },
	          prod.name
	        ),
	        _react2.default.createElement(
	          "small",
	          { className: "Product__producer" },
	          prod.producer
	        ),
	        _react2.default.createElement(_EckoList2.default, { list: prod.e }),
	        prod.nutr ? _react2.default.createElement(
	          "table",
	          { className: "Product__nutrition-facts" },
	          _react2.default.createElement(
	            "caption",
	            null,
	            "Nutri\u010Dn\xED hodnoty",
	            prod.nutr[0] ? _react2.default.createElement(
	              "div",
	              null,
	              prod.nutr[0]
	            ) : ""
	          ),
	          _react2.default.createElement(
	            "tbody",
	            null,
	            prod.nutr.slice(1).map(function (line) {
	              return _react2.default.createElement(
	                "tr",
	                null,
	                line.map(function (t) {
	                  return _react2.default.createElement(
	                    "td",
	                    null,
	                    t
	                  );
	                })
	              );
	            })
	          )
	        ) : null,
	        prod.ref
	      ) : null;
	    }
	  }]);

	  return Product;
	}(_react2.default.Component)) || _class);
	exports.default = Product;
	;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EckoList = function (_React$Component) {
	  _inherits(EckoList, _React$Component);

	  function EckoList() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, EckoList);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EckoList.__proto__ || Object.getPrototypeOf(EckoList)).call.apply(_ref, [this].concat(args))), _this), _this.state = { showBackdrop: false }, _this.onClick = function (ecko) {
	      _this.setState({
	        showBackdrop: true,
	        selected: ecko
	      });
	    }, _this.hide = function () {
	      _this.setState({
	        showBackdrop: false,
	        selected: null
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(EckoList, [{
	    key: "getModal",
	    value: function getModal(e) {
	      return _react2.default.createElement(
	        "div",
	        { className: "Ecko-modal" },
	        _react2.default.createElement(
	          "div",
	          { className: "Ecko-modal__title" },
	          _react2.default.createElement(
	            "div",
	            { className: "Ecko Ecko--" + e.rating },
	            e.id
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "Ecko-modal__name" },
	            e.names[0]
	          ),
	          _react2.default.createElement(
	            "button",
	            { onClick: this.hide, className: "Ecko-modal__btnClose" },
	            "\u2715"
	          )
	        ),
	        e.desc ? _react2.default.createElement(
	          "div",
	          { className: "Ecko-modal__content" },
	          e.desc
	        ) : null
	      );
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var arr = this.props.list.sort(function (a, b) {
	        return b.rating - a.rating;
	      });

	      return _react2.default.createElement(
	        "div",
	        null,
	        arr.map(function (ecko) {
	          return _react2.default.createElement(
	            "button",
	            { onClick: function onClick() {
	                return _this2.onClick(ecko);
	              }, className: "Ecko Ecko--" + ecko.rating, key: ecko.id },
	            ecko.id
	          );
	        }),
	        this.state.showBackdrop ? _react2.default.createElement("div", { className: "Ecko-backdrop", onClick: this.hide }) : null,
	        this.state.showBackdrop ? this.getModal(this.state.selected) : null
	      );
	    }
	  }]);

	  return EckoList;
	}(_react2.default.Component);

	exports.default = EckoList;
	;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutUs = function (_React$Component) {
	  _inherits(AboutUs, _React$Component);

	  function AboutUs() {
	    _classCallCheck(this, AboutUs);

	    return _possibleConstructorReturn(this, (AboutUs.__proto__ || Object.getPrototypeOf(AboutUs)).apply(this, arguments));
	  }

	  _createClass(AboutUs, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "AboutUs" },
	        _react2.default.createElement(
	          "p",
	          { className: "AboutUs__text" },
	          _react2.default.createElement(
	            "strong",
	            null,
	            "Chc",
	            _react2.default.createElement(
	              "span",
	              { className: "text-red" },
	              "e"
	            ),
	            "\u0161 j\xEDst zdrav",
	            _react2.default.createElement(
	              "span",
	              { className: "text-red" },
	              "\u011B"
	            ),
	            "?",
	            _react2.default.createElement("br", null),
	            "N",
	            _react2.default.createElement(
	              "span",
	              { className: "text-red" },
	              "e"
	            ),
	            "vyzn\xE1\u0161 s",
	            _react2.default.createElement(
	              "span",
	              { className: "text-red" },
	              "e"
	            ),
	            " v ",
	            _react2.default.createElement(
	              "span",
	              { className: "text-red" },
	              "\xC9"
	            ),
	            "\u010Dk\xE1ch?",
	            _react2.default.createElement("br", null),
	            "M\xE1\u0161 dost n",
	            _react2.default.createElement(
	              "span",
	              { className: "text-red" },
	              "e"
	            ),
	            "kvalitn\xEDch v\xFDrobk\u016F?"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "AboutUs__ecka" },
	          _react2.default.createElement(
	            "p",
	            null,
	            " Vytvo\u0159ili jsme ti aplikaci ",
	            _react2.default.createElement(
	              "strong",
	              null,
	              "V\xED\u0161CoKupuje\u0161"
	            ),
	            ", proto\u017Ee n\xE1s u\u017E nebavilo st\xE1t v supermarketu, lu\u0161tit mal\xE1 p\xEDsmenka na obalech a hledat schovan\xE1 \xE9\u010Dka v textu. ",
	            _react2.default.createElement(
	              "strong",
	              null,
	              "Rozd\u011Blili jsme ti \xE9\u010Dka jednodu\u0161e do t\u0159\xED kategori\xED podle \u0161kodlivosti."
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "Ecko Ecko--2" },
	            "!"
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "Ecko Ecko--1" },
	            "?"
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "Ecko Ecko--0" },
	            "\u2713"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "Zat\xEDm m\xE1me datab\xE1zi asi 12 000 v\xFDrobk\u016F. Nikdo n\xE1s nesponzoruje ani neovliv\u0148uje. Jsme jen oby\u010Dejn\xED lidi, co cht\u011Bj\xED kupovat a j\xEDst kvalitn\u011Bj\u0161\xED potraviny. Proto budeme r\xE1di, kdy\u017E na\u0161i aplikaci ",
	            _react2.default.createElement(
	              "strong",
	              null,
	              "V\xED\u0161CoKupuje\u0161"
	            ),
	            " bude\u0161 sd\xEDlet p\u0159es ",
	            _react2.default.createElement(
	              "a",
	              { target: "_blank", href: "https://www.facebook.com/viscokupujes/" },
	              "Facebook"
	            ),
	            " a \u0159ekne\u0161 o n\xED sv\xFDm kamar\xE1d\u016Fm. Pokud se ti na n\xED n\u011Bco nel\xEDb\xED, dej to v\u011Bd\u011Bt n\xE1m, a\u0165 m\xE1me co zlep\u0161ovat."
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "Kontaktujte n\xE1s na:",
	            _react2.default.createElement("br", null),
	            _react2.default.createElement(
	              "a",
	              { target: "_blank", href: "https://www.facebook.com/viscokupujes", title: "Facebook" },
	              _react2.default.createElement(
	                "svg",
	                { height: "32", width: "32", viewBox: "0 0 512 512" },
	                _react2.default.createElement("path", { fill: "#319631", d: "M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64 H288z" })
	              )
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "mailto:viscokupujes@gmail.com" },
	              _react2.default.createElement(
	                "svg",
	                { height: "32", width: "32", viewBox: "0 0 256 200", strokeWidth: "10", stroke: "#319631", transform: "scale(.8)" },
	                _react2.default.createElement("path", { d: "M 0,97.00377 0,0 129.00497,0 258.00995,0 257.75497,96.75 257.5,193.5 128.75,193.75377 0,194.00755 0,97.00377 z m 203.25561,47.75479 -42.24144,-42.24143 -11.75708,11.64086 c -12.15071,12.03059 -16.16572,14.86722 -20.95743,14.80657 -4.12528,-0.0522 -5.85964,-1.32169 -19.35007,-14.16339 L 96.65978,103.10234 54.829888,144.17892 C 31.82345,166.77103 13,185.64801 13,186.12775 13,186.61908 63.76621,187 129.24852,187 l 116.24852,0 -42.24143,-42.24144 z M 49.248521,54.751479 7,12.502959 7,97 7,181.49704 49.248521,139.24852 91.49704,97 49.248521,54.751479 z M 251,96.91667 C 251,50.670833 250.63934,12.983333 250.19852,13.166667 249.75771,13.35 230.77241,32.312699 208.00897,55.305998 L 166.6209,97.112 208.55599,139.056 C 231.62028,162.1252 250.60558,181 250.74554,181 250.88549,181 251,143.1625 251,96.91667 z M 188.1087,64.75281 244.7174,7.5 186.8587,7.241942 c -31.82228,-0.141932 -84.0685,-0.141932 -116.10269,0 L 12.51201,7.5 l 56.994,57.28148 c 45.3652,45.59402 57.50408,57.27562 59.49399,57.25281 1.96251,-0.0225 14.67058,-12.33773 59.1087,-57.28148 z" })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return AboutUs;
	}(_react2.default.Component);

	exports.default = AboutUs;
	;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(40)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./default.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./default.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports
	exports.i(__webpack_require__(38), "");
	exports.i(__webpack_require__(39), "");

	// module
	exports.push([module.id, "\nbutton { cursor: pointer; }\nhtml, body, #root, .App { height: 100%; }\nstrong { font-weight: bold; }\na { color: blue; }\n\n/**************************/\n/*********** App **********/\n/**************************/\n.App {\n  max-width: 800px;\n  margin: 0 auto 0 auto;\r\n  background-color: #f8f6ed;\r\n}\n\n.App__content {\n  padding: 5px 5px 50px 5px;\n}\n\n.AboutUs__text {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 25px;\n  font-family: 'Roboto', sans-serif;\n  color: #206320;\n  line-height: 35px;\n}\n\n.AboutUs .text-red {\n  color: red;\n}\n\n.AboutUs__ecka {\n  text-align: center;\n  padding-top: 10px;\n  font-family: 'Roboto', sans-serif;\n}\n\n.AboutUs__ecka p {\n  text-align: justify;\n  font-size: 15px;\n  line-height: 16px;\n  padding-top: 10px;\n}\n\n.AboutUs__ecka .Ecko {\n  font-weight: bold;\n  font-size: 40px;\n}\n\n/**************************/\n/******* Toolbar **********/\n/**************************/\n.Toolbar {\n  background-color: #3cb73c;\n  position: relative;\n  border-bottom: 3px solid #319631;\n}\n\n.Toolbar__backBtn {\n  border: none;\n  background-color: transparent;\r\n  color: white;\r\n  font-size: 25px;\r\n  position: absolute;\r\n  left: 10px;\r\n  top: 5px;\r\n}\n\n.Toolbar__fbLink {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.Toolbar__title {\n  font-size: 30px;\n  color: white;\n  margin: 0 30px 0 0;\n  text-align: center;\n  text-shadow: 1px 1px 3px #222;\n}\n\n.Toolbar__title img {\n  vertical-align: middle;\n  display: inline-block;\n}\n\n@media only screen and (max-width: 330px) {\n  .Toolbar__title img:first-child { display: none; }\n}\n\n.Toolbar__searchButton {\n  background: transparent;\n  border: none;\n  height: 45px;\n  width: 45px;\n  position: absolute;\n  top: calc(50% - 20px);\n  right: 10px;\n  fill: white;\n}\n\n/****************************/\n/********* SearchBox ********/\n/****************************/\n\n.SearchBox,\n.SearchBox__input,\n.SearchBox__clearButton,\n.SearchBox__backButton {\n  font-family: 'Roboto', sans-serif;\n}\n\n.SearchBox__clearButton {\n  font-size: 15px;\n  width: 26px;\n  height: 26px;\n  top: calc(50% - 13px);\n}\n\n.SearchBox__input {\n  font-size: 20px;\n  padding: 3px 50px 3px 10px;\n  margin: 0px 5px;\n  width: calc(100% - 10px);\n}\n\n.SearchBox__link {\n  padding: 6px;\n}\n\n.SearchBox__Product-name {\n  padding-bottom: 6px;\n  display: block;\n  font-size: 16px;\n}\n\n.SearchBox__Product-highlight {\n  background-color: yellow;\n}\n\n.SearchBox__Product-producer {\n  font-size: 13px;\n  color: #bbb;\n}\n\n.Suggestion__link {\n  padding: 6px 10px;\n}\n\n/**************************/\n/********* Product ********/\n/**************************/\n\n.Product {\n  padding: 10px 0;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.Product__name {\n  padding-bottom: 10px;\n  display: block;\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.Product__producer {\n  font-size: 15px;\n  color: #bbb;\n\n}\n\n.Product__nutrition-facts {\n  border: 2px solid black;\n  padding: 10px;\n  border-collapse: separate;\n  background-color: white;\n  margin: 10px auto;\n}\n\n.Product__nutrition-facts td {\n  border-bottom: 1px solid #ccc;\n  padding: 5px;\n}\n\n.Product__nutrition-facts caption {\n  border: 2px solid black;\n  color: white;\n  background-color: black;\n  font-weight: bold;\n  font-size: 20px;\n  padding: 10px;\n}\n\n.Product__nutrition-facts caption div {\n  font-size: 12px;\n  padding-top: 10px;\n}\n\n.Ecko {\n  color: white;\n  border: none;\n  width: 60px;\n  height: 60px;\n  border-radius: 35px;\n  font-size: 21px;\n  font-family: 'Patrick Hand', cursive;\n  line-height: 60px;\n  text-align: center;\n  display: inline-block;\n  margin: 5px;\n  text-transform: capitalize;\n}\n\n.Ecko--0 {\n  background-color: #3cb73c;\n  background-image: linear-gradient(#3cb73c, #319631);\n}\n\n.Ecko--1 {\n  background-color: #ffcc00;\n  background-image: linear-gradient(#ffd265, #ffcc00);\n}\n\n.Ecko--2 {\n  background-color: #ff5353;\n  background-image: linear-gradient(#ff5353, #bb0000);\n}\n\n.Ecko-modal {\n  position: fixed;\n  background-color: white;\n  border: 3px solid gray;\n  width: 500px;\n  z-index: 21;\n  top: 15%;\n  left: 5%;\n  width: 90%;\n  padding: 20px 10px;\n}\n\n.Ecko-modal__btnClose {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background: transparent;\n  display: inline-block;\n  border: none;\n  font-size: 25px;\n  height: 40px;\n  width: 40px;\n}\n\n.Ecko-modal__title {\n  font-size: 20px;\n  font-weight: bold;\n}\n.Ecko-modal__title > * { display: table-cell; }\n.Ecko-modal__name {\n  padding-left: 10px;\n  vertical-align: middle;\n}\n\n.Ecko-modal__content {\n  padding-top: 15px;\n}\n\n@media only screen and (min-width: 700px) {\n  .Ecko-modal {\n    width: 600px;\n    left: calc(50% - 300px);\n  }\n}\n\n.Ecko-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 20;\n  background-color: rgba(0, 0, 0, .5);\n}\n", ""]);

	// exports


/***/ },
/* 37 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n", ""]);

	// exports


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, "/**************************/\r\n/***** SearchBox **********/\r\n/**************************/\r\n.SearchBox {\r\n  position: relative;\r\n}\r\n\r\n.SearchBox__input {\r\n  position: relative;\r\n  font-size: 20px;\r\n  z-index: 11;\r\n  padding: 15px 50px 10px 10px;\r\n  border: none;\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n.SearchBox__clearButton {\r\n  position: absolute;\r\n  background: transparent;\r\n  border: none;\r\n  z-index: 12;\r\n  font-size: 20px;\r\n  top: calc(50% - 16px);\r\n  right: 5px;\r\n  height: 32px;\r\n  width: 32px;\r\n}\r\n\r\n.SearchBox__backButton {\r\n  position: absolute;\r\n  background: transparent;\r\n  border: none;\r\n  z-index: 12;\r\n  font-size: 20px;\r\n  top: calc(50% - 16px);\r\n  left: 10px;\r\n  height: 32px;\r\n  width: 32px;\r\n}\r\n\r\n.SearchBox__backButton + .SearchBox__input {\r\n  padding-left: 50px;\r\n}\r\n\r\n/**************************/\r\n/***** SugestionList ******/\r\n/**************************/\r\n.SuggestionList {\r\n  display: none;\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  position: absolute;\r\n  max-height: 300px;\r\n  min-width: 300px;\r\n  overflow: auto;\r\n  border: 3px solid #003d50;\r\n  z-index: 11;\r\n  background-color: white;\r\n}\r\n\r\n.SuggestionList__backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n  background-color: rgba(0, 0, 0, .5);\r\n}\r\n\r\n.SuggestionList--open {\r\n  display: block;\r\n}\r\n/**************************/\r\n/****** Suggestion ********/\r\n/**************************/\r\n.Suggestion {\r\n  padding: 0px;\r\n}\r\n\r\n.Suggestion__block {\r\n  padding: 10px 10px;\r\n}\r\n\r\n.Suggestion__link {\r\n  margin: -10px -10px;\r\n  padding: 10px 10px;\r\n  border-bottom: 1px solid #ccc;\r\n  display: block;\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n\r\n.Suggestion__link:hover,\r\n.Suggestion__link:focus {\r\n  background-color: #eee;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);