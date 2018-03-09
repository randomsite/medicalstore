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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction sayHello() {\n  // if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {\n  var args = ['\\n %c Made with ❤️ by RNDM %c %c http://sercraft.com/  %c 1 \\n\\n', 'color: #252830; background: #1ca8dd; padding: 8px;', 'color: #b0976d; background-image: url(\"https://randomsite.github.io/app/rndm.jpg\"); background-size: cover; padding: 8px 12px 8px 11px;', 'color: #fff; background: #1bc98e; padding: 8px;', 'color: transparent; background: transparent; padding: 8px;'];\n  window.console.log.apply(console, args);\n  // } else if (window.console) {\n  // \twindow.console.log('Made with love ❤️ SerCRAFT - http://sercraft.com/  ❤️');\n  // }\n}\nmodule.exports = sayHello;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL3NheUhlbGxvLmpzP2E2MmQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2F5SGVsbG8oKSB7XG4gIC8vIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgPiAtMSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTEpIHtcbiAgdmFyIGFyZ3MgPSBbXG4gICAgJ1xcbiAlYyBNYWRlIHdpdGgg4p2k77iPIGJ5IFJORE0gJWMgJWMgaHR0cDovL3NlcmNyYWZ0LmNvbS8gICVjIDEgXFxuXFxuJyxcbiAgICAnY29sb3I6ICMyNTI4MzA7IGJhY2tncm91bmQ6ICMxY2E4ZGQ7IHBhZGRpbmc6IDhweDsnLFxuICAgICdjb2xvcjogI2IwOTc2ZDsgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9yYW5kb21zaXRlLmdpdGh1Yi5pby9hcHAvcm5kbS5qcGdcIik7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMXB4OycsXG4gICAgJ2NvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAjMWJjOThlOyBwYWRkaW5nOiA4cHg7JyxcbiAgICAnY29sb3I6IHRyYW5zcGFyZW50OyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgcGFkZGluZzogOHB4OydcbiAgXTtcbiAgd2luZG93LmNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAvLyB9IGVsc2UgaWYgKHdpbmRvdy5jb25zb2xlKSB7XG4gIC8vIFx0d2luZG93LmNvbnNvbGUubG9nKCdNYWRlIHdpdGggbG92ZSDinaTvuI8gU2VyQ1JBRlQgLSBodHRwOi8vc2VyY3JhZnQuY29tLyAg4p2k77iPJyk7XG4gIC8vIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2F5SGVsbG87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpYi9zYXlIZWxsby5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sayHello = __webpack_require__(0);\n\nvar _sayHello2 = _interopRequireDefault(_sayHello);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _sayHello2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNheUhlbGxvIGZyb20gJy4vbGliL3NheUhlbGxvLmpzJztcblxuc2F5SGVsbG8oKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7Ozs7O0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);