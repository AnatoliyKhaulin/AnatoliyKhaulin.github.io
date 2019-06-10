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

var $catalogSidebarNavLink = $('.js-sidebar-nav-link');
$catalogSidebarNavLink.on('click', function (e) {
  var $this = $(e.currentTarget);
  var dropdownMenu = $this.find('.js-sidebar-nav-dropdown');

  if (dropdownMenu.length > 0) {
    e.preventDefault();
  }

  if (!$this.hasClass('open') && dropdownMenu.length > 0) {
    $this.addClass('open');
    dropdownMenu.addClass('open');
  } else {
    $this.removeClass('open');
    dropdownMenu.removeClass('open');
  }
});

/***/ }),

/***/ "./src/js/contacts-map.js":
/*!********************************!*\
  !*** ./src/js/contacts-map.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var adressCordOne = [59.844050, 30.386979];
var adressCordTwo = [60.026132, 30.317916];
var adressCordThree = [59.940271, 30.265374];
var indexMap = document.querySelector('#contactsMap');
var contactsAdressOne = document.querySelector('#contactsAdressOne');
var contactsAdressTwo = document.querySelector('#contactsAdressTwo');
var contactsAdressThree = document.querySelector('#contactsAdressThree');
var contactsMapAdressFirst = document.querySelector('#contactsMapAdressFirst');
var contactsMapAdressSecond = document.querySelector('#contactsMapAdressSecond');
var contactsMapAdressThird = document.querySelector('#contactsMapAdressThird');

function init() {
  var contactsMap = new ymaps.Map("contactsMap", {
    center: adressCordOne,
    zoom: 9
  }, {
    searchControlProvider: 'yandex#search'
  });
  contactsMap.controls.add(new ymaps.control.ZoomControl({
    options: {
      position: {
        left: 10,
        bottom: 70
      }
    }
  }));
  onePlacemark = new ymaps.Placemark(adressCordOne, {
    hintContent: '«ФЛИК ФЛЯК» КУПЧИНО:',
    balloonContent: '192284, Санкт-Петербург, ул. Купчинская, 4 (корп. 4)'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './images/sprites/svg/flac_location_map.svg',
    // Размеры метки.
    iconImageSize: [123, 63],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
  });
  twoPlacemark = new ymaps.Placemark(adressCordTwo, {
    hintContent: '«ФЛИК ФЛЯК» ОЗЕРКИ:',
    balloonContent: '192284, Санкт-Петербург, пр. Энгельса 98'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './images/sprites/svg/flac_location_map.svg',
    // Размеры метки.
    iconImageSize: [123, 63],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
  });
  threePlacemark = new ymaps.Placemark(adressCordThree, {
    hintContent: '«ФЛИК ФЛЯК» ВАСИЛЕОСТРОВСКАЯ:',
    balloonContent: 'метро Василеостровская, 16 линия В.О. д. 45'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './images/sprites/svg/flac_location_map.svg',
    // Размеры метки.
    iconImageSize: [123, 63],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
  });
  contactsMap.geoObjects.add(onePlacemark).add(twoPlacemark).add(threePlacemark);
  contactsMap.controls.remove('geolocationControl');
  contactsMap.controls.remove('searchControl');
  contactsMap.controls.remove('trafficControl');
  contactsMap.controls.remove('typeSelector');
  contactsMap.controls.remove('fullscreenControl');
  contactsMap.controls.remove('rulerControl');
  contactsMap.controls.remove('zoomControl');
  contactsMap.behaviors.disable('scrollZoom');
  contactsMap.behaviors.disable('drag');
  $(window).on('resize', function () {
    setTimeout(function () {
      contactsMap.container.fitToViewport();
    }, 250);
  });
  contactsAdressOne.addEventListener('click', function (e) {
    e.preventDefault();
    contactsMap.setCenter(adressCordOne, 17);
  });
  contactsAdressTwo.addEventListener('click', function (e) {
    e.preventDefault();
    contactsMap.setCenter(adressCordTwo, 17);
  });
  contactsAdressThree.addEventListener('click', function (e) {
    e.preventDefault();
    contactsMap.setCenter(adressCordThree, 17);
  });
}

function initMapAdressFirst() {
  var contactsMap = new ymaps.Map(contactsMapAdressFirst, {
    center: adressCordOne,
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });
  contactsMap.controls.add(new ymaps.control.ZoomControl({
    options: {
      position: {
        left: 10,
        bottom: 70
      }
    }
  }));
  onePlacemark = new ymaps.Placemark(adressCordOne, {
    hintContent: '«ФЛИК ФЛЯК» КУПЧИНО:',
    balloonContent: '192284, Санкт-Петербург, ул. Купчинская, 4 (корп. 4)'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './images/sprites/svg/flac_location_map.svg',
    // Размеры метки.
    iconImageSize: [123, 63],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
  });
  contactsMap.geoObjects.add(onePlacemark);
  contactsMap.controls.remove('geolocationControl');
  contactsMap.controls.remove('searchControl');
  contactsMap.controls.remove('trafficControl');
  contactsMap.controls.remove('typeSelector');
  contactsMap.controls.remove('fullscreenControl');
  contactsMap.controls.remove('rulerControl');
  contactsMap.controls.remove('zoomControl');
  contactsMap.behaviors.disable('scrollZoom');
  contactsMap.behaviors.disable('drag');
  $(window).on('resize', function () {
    setTimeout(function () {
      contactsMap.container.fitToViewport();
    }, 250);
  });
}

function initMapAdressSecond() {
  var contactsMap = new ymaps.Map(contactsMapAdressSecond, {
    center: adressCordTwo,
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });
  contactsMap.controls.add(new ymaps.control.ZoomControl({
    options: {
      position: {
        left: 10,
        bottom: 70
      }
    }
  }));
  onePlacemark = new ymaps.Placemark(adressCordTwo, {
    hintContent: '«ФЛИК ФЛЯК» Озерки:',
    balloonContent: '192284, Санкт-Петербург, пр. Энгельса 98'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './images/sprites/svg/flac_location_map.svg',
    // Размеры метки.
    iconImageSize: [123, 63],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
  });
  contactsMap.geoObjects.add(onePlacemark);
  contactsMap.controls.remove('geolocationControl');
  contactsMap.controls.remove('searchControl');
  contactsMap.controls.remove('trafficControl');
  contactsMap.controls.remove('typeSelector');
  contactsMap.controls.remove('fullscreenControl');
  contactsMap.controls.remove('rulerControl');
  contactsMap.controls.remove('zoomControl');
  contactsMap.behaviors.disable('scrollZoom');
  contactsMap.behaviors.disable('drag');
  $(window).on('resize', function () {
    setTimeout(function () {
      contactsMap.container.fitToViewport();
    }, 250);
  });
}

function initMapAdressThird() {
  var contactsMap = new ymaps.Map(contactsMapAdressThird, {
    center: adressCordThree,
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });
  contactsMap.controls.add(new ymaps.control.ZoomControl({
    options: {
      position: {
        left: 10,
        bottom: 70
      }
    }
  }));
  onePlacemark = new ymaps.Placemark(adressCordThree, {
    hintContent: '«ФЛИК ФЛЯК» ВАСИЛЕОСТРОВСКАЯ:',
    balloonContent: 'метро Василеостровская, 16 линия В.О. д. 45'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './images/sprites/svg/flac_location_map.svg',
    // Размеры метки.
    iconImageSize: [123, 63],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
  });
  contactsMap.geoObjects.add(onePlacemark);
  contactsMap.controls.remove('geolocationControl');
  contactsMap.controls.remove('searchControl');
  contactsMap.controls.remove('trafficControl');
  contactsMap.controls.remove('typeSelector');
  contactsMap.controls.remove('fullscreenControl');
  contactsMap.controls.remove('rulerControl');
  contactsMap.controls.remove('zoomControl');
  contactsMap.behaviors.disable('scrollZoom');
  contactsMap.behaviors.disable('drag');
  $(window).on('resize', function () {
    setTimeout(function () {
      contactsMap.container.fitToViewport();
    }, 250);
  });
}

if (indexMap) {
  ymaps.ready(init);
}

if (contactsMapAdressFirst) {
  ymaps.ready(initMapAdressFirst);
}

if (contactsMapAdressSecond) {
  ymaps.ready(initMapAdressSecond);
}

if (contactsMapAdressThird) {
  ymaps.ready(initMapAdressThird);
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

/***/ "./src/js/fives-slider.js":
/*!********************************!*\
  !*** ./src/js/fives-slider.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");

var fivesSliderContainer = document.querySelector('.glide--fives');

if (fivesSliderContainer) {
  var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"](fivesSliderContainer, {
    type: 'carousel',
    autoplay: false,
    perView: 5,
    gap: 16,
    breakpoints: {
      1024: {
        gap: 8
      },
      768: {
        perView: 3
      },
      600: {
        perView: 1
      }
    }
  });
  glide.mount();
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
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _header_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-mobile */ "./src/js/header-mobile.js");
/* harmony import */ var _header_mobile__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_mobile__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-menu */ "./src/js/dropdown-menu.js");
/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _once_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./once-slider */ "./src/js/once-slider.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalog */ "./src/js/catalog.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_catalog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _triple_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./triple-slider */ "./src/js/triple-slider.js");
/* harmony import */ var _fives_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fives-slider */ "./src/js/fives-slider.js");
/* harmony import */ var _contacts_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacts-map */ "./src/js/contacts-map.js");
/* harmony import */ var _contacts_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_contacts_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs */ "./src/js/tabs.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tabs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popup */ "./src/js/popup.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_popup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jquery_nice_number_src_jquery_nice_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery.nice-number/src/jquery.nice-number */ "./node_modules/jquery.nice-number/src/jquery.nice-number.js");
/* harmony import */ var jquery_nice_number_src_jquery_nice_number__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery_nice_number_src_jquery_nice_number__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);












jquery__WEBPACK_IMPORTED_MODULE_11___default()('input[type="number"]').niceNumber();

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

if (onceSliderContainer) {
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

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $popupLink = $('.show-popup');
var $popupContainer = $('.popup');
var $popupClose = $('.popup__close');

var openPopup = function openPopup(e) {
  e.preventDefault();
  var $this = $(e.currentTarget);
  var $thisTarget = $this.data('target');
  var $popupName;
  $popupContainer.each(function (index, item) {
    $popupName = $(this).attr('id');

    if ($popupName === $thisTarget) {
      $(this).addClass('show');
    }
  });
};

var closePopup = function closePopup(e) {
  e.preventDefault();
  $popupContainer.removeClass('show');
};

$popupLink.on('click', openPopup);
$popupClose.on('click', closePopup);

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.tabs__link').click(function () {
  var tab_id = $('.tabs__content').attr('id');
  var datatarget = $(this).attr('data-target');

  if ($("#" + datatarget == tab_id)) {
    $('.tabs__link').removeClass('is-active');
    $('.tabs__content').removeClass('is-active');
    $(this).addClass('is-active');
    $("#" + datatarget).addClass('is-active');
  } else {
    $('.tabs__content').html('Нет информации');
  }
});

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

var tripleSliderContainer = document.querySelector('.glide--triple');

if (tripleSliderContainer) {
  var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"](tripleSliderContainer, {
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
}

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
/* harmony import */ var jquery_custom_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-custom-select */ "./node_modules/jquery-custom-select/jquery.custom-select.js");
/* harmony import */ var lightgallery_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lightgallery.js */ "./node_modules/lightgallery.js/lib/js/lightgallery.js");
/* harmony import */ var lightgallery_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lightgallery_js__WEBPACK_IMPORTED_MODULE_5__);






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

jquery__WEBPACK_IMPORTED_MODULE_3___default()('select').customSelect({
  includeValue: true,
  transition: 100
});
lightGallery(document.getElementById('lightgallery'));

/***/ })

/******/ });
//# sourceMappingURL=main.js.map