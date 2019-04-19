/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/catalog.js":
/*!***************************!*\
  !*** ./src/js/catalog.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

var catalogItems = document.querySelectorAll('.catalog-list__item');

if (/Mobi/.test(navigator.userAgent)) {
  var _loop = function _loop(i) {
    var catalogItem = catalogItems[i];
    catalogItem.addEventListener('click', function () {
      var catalogItemList = catalogItem.querySelector('.catalog-list__list');

      if (catalogItem.classList.contains('active')) {
        catalogItem.classList.remove('active');
        catalogItemList.classList.remove('active');
      } else {
        catalogItem.classList.add('active');
        catalogItemList.classList.add('active');
      }
    });
  };

  for (var i = 0; i < catalogItems.length; i++) {
    _loop(i);
  }
}

/***/ }),

/***/ "./src/js/dropdown-menu.js":
/*!*********************************!*\
  !*** ./src/js/dropdown-menu.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (/Mobi/.test(navigator.userAgent)) {
  (function () {
    var dropdownLinks = document.querySelectorAll('.js-nav-link');
    var headerNav = document.querySelector('.main-nav__dropdown');

    var _loop = function _loop(i) {
      var dropdownLink = dropdownLinks[i];

      var showHideDropdown = function showHideDropdown(event) {
        event.preventDefault();

        if (dropdownLink.classList.contains('open')) {
          dropdownLink.classList.remove('open');
        } else {
          dropdownLink.classList.add('open');
        }

        if (headerNav.classList.contains('open')) {
          headerNav.classList.remove('open');
        } else {
          headerNav.classList.add('open');
        }
      };

      dropdownLink.addEventListener('touchstart', showHideDropdown);
    };

    for (var i = 0; i < dropdownLinks.length; i++) {
      _loop(i);
    }
  })();
}

/***/ }),

/***/ "./src/js/header-mobile.js":
/*!*********************************!*\
  !*** ./src/js/header-mobile.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var headerTopLine = document.querySelector('.top-nav');
var headerBottomLine = document.querySelector('.main-header__bottom');
var headerTopContainer = document.querySelector('.main-header__top .container');
var menuBtn = document.querySelector('.js-burger-btn');
var menuBurger = menuBtn.querySelector('.main-header__burger');
var topHeaderNavList = document.querySelector('.js-top-header-nav-list');

if (window.innerWidth < 1024) {
  headerBottomLine.appendChild(headerTopLine);
  menuBtn.addEventListener('click', function () {
    if (menuBurger.classList.contains('active')) {
      menuBurger.classList.remove('active');
      topHeaderNavList.classList.remove('active');
    } else {
      menuBurger.classList.add('active');
      topHeaderNavList.classList.add('active');
    }
  });
}

window.addEventListener('resize', function () {
  if (window.innerWidth < 1024) {
    headerBottomLine.appendChild(headerTopLine);
    menuBtn.addEventListener('click', function () {
      if (menuBurger.classList.contains('active')) {
        menuBurger.classList.remove('active');
        topHeaderNavList.classList.remove('active');
      } else {
        menuBurger.classList.add('active');
        topHeaderNavList.classList.add('active');
      }
    });
  } else {
    headerTopContainer.prepend(headerTopLine);
  }
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-mobile */ "./src/js/header-mobile.js");
/* harmony import */ var _header_mobile__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_mobile__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-menu */ "./src/js/dropdown-menu.js");
/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _once_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./once-slider */ "./src/js/once-slider.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalog */ "./src/js/catalog.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_catalog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _triple_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./triple-slider */ "./src/js/triple-slider.js");





 // import './contacts-map';

/***/ }),

/***/ "./src/js/once-slider.js":
/*!*******************************!*\
  !*** ./src/js/once-slider.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");

var onceSliderContainer = document.querySelector('.glide--single');

if (onceSliderContainer !== null) {
  var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"](onceSliderContainer, {
    type: 'carousel',
    autoplay: 6000,
    hoverpause: false,
    animationDuration: 1000,
    animationTimingFunc: 'ease-in-out'
  });
  glide.mount();
}

/***/ }),

/***/ "./src/js/triple-slider.js":
/*!*********************************!*\
  !*** ./src/js/triple-slider.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");

var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.glide--triple', {
  type: 'carousel',
  autoplay: false,
  perView: 3,
  gap: 34,
  breakpoints: {
    1024: {
      gap: 20
    },
    768: {
      perView: 2
    },
    600: {
      perView: 1
    }
  }
});
glide.mount();

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




svg4everybody__WEBPACK_IMPORTED_MODULE_2___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;

var images = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelectorAll('img'));

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var image = _step.value;

    if (image.height > image.width) {
      image.classList.add('vertical-image');
    } else {
      image.classList.add('horizontal-image');
    }
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map