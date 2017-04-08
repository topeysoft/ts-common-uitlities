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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var responsiveData = {};
var resposiveComponents = {};
var responsiveConfig;
var OnChangeEvent = new Event('ts:reponsive:change');
var initialized = false;
function isVisible(elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}
;
function init(config) {
    var mergedConfig = mergeConfig(config);
    window.addEventListener('resize', (e) => {
        calculateSizes();
    });
    calculateSizes();
    initialized = true;
}
function calculateSizes() {
    responsiveData.xs = window.innerWidth > responsiveConfig.breakpoints.xs;
    responsiveData.sm = window.innerWidth >= responsiveConfig.breakpoints.sm;
    responsiveData.md = window.innerWidth >= responsiveConfig.breakpoints.md;
    responsiveData.lg = window.innerWidth >= responsiveConfig.breakpoints.lg;
    responsiveData.xl = window.innerWidth >= responsiveConfig.breakpoints.xl;
    var data = responsiveData;
    var onChange = new CustomEvent('ts:responsive:change', { detail: data });
    window.dispatchEvent(onChange);
}
function mergeConfig(config) {
    responsiveConfig = new TsResponsiveConfig();
    return Object.assign(responsiveConfig, config);
}
function getData() {
    if (!initialized)
        init();
    return responsiveData;
}
class TsResponsiveConfig {
    constructor() {
        this.breakpoints = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TsResponsiveConfig;

const TsResponsive = {
    isVisible: isVisible,
    init: init,
    data: getData()
};
/* harmony export (immutable) */ __webpack_exports__["b"] = TsResponsive;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_responsive_index__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TsResponsiveConfig", function() { return __WEBPACK_IMPORTED_MODULE_1__src_responsive_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TsResponsive", function() { return __WEBPACK_IMPORTED_MODULE_1__src_responsive_index__["b"]; });



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__) {

"use strict";


/***/ })
/******/ ]);