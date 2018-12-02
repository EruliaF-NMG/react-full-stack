module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst config = {\n    env: \"development\" || 'development',\n    port: process.env.PORT || 3000,\n    jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n    mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernsocial'\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: Unexpected token (77:4)\\n\\n\\u001b[0m \\u001b[90m 75 | \\u001b[39m  \\u001b[36mconst\\u001b[39m context \\u001b[33m=\\u001b[39m {}\\u001b[33m;\\u001b[39m\\n \\u001b[90m 76 | \\u001b[39m  \\u001b[36mconst\\u001b[39m markup \\u001b[33m=\\u001b[39m \\u001b[33mReactDOMServer\\u001b[39m\\u001b[33m.\\u001b[39mrenderToString(\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 77 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mStaticRouter\\u001b[39m location\\u001b[33m=\\u001b[39m{req\\u001b[33m.\\u001b[39murl} context\\u001b[33m=\\u001b[39m{context}\\u001b[33m>\\u001b[39m\\n \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 78 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mJssProvider\\u001b[39m\\n \\u001b[90m 79 | \\u001b[39m        registry\\u001b[33m=\\u001b[39m{sheetsRegistry}\\n \\u001b[90m 80 | \\u001b[39m        generateClassName\\u001b[33m=\\u001b[39m{generateClassName}\\u001b[0m\\n\");\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_express__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n//Database Connection URL\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mongoUri);\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${mongoUri}`);\n});\n\n_express__WEBPACK_IMPORTED_MODULE_2___default.a.listen(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].port, err => {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/eruliaf/WorkPlace/NodeJS/react-full-stack/mern-social/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });