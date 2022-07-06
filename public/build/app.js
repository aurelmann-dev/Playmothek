(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/scripts.js */ "./assets/js/scripts.js");
/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_scripts_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application

 // import JavaScript



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/scripts.js":
/*!******************************!*\
  !*** ./assets/js/scripts.js ***!
  \******************************/
/***/ (() => {

console.log('toto'); // NAVBAR FIXED

/* ~Top screen navbar position~ */

window.onscroll = function () {
  scrollNavbar();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scrollNavbar() {
  console.log(navbar);

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
} // FORM REGISTER

/* ~On click displays fields~ */


var fiels = document.getElementById('fiels_hidden');
var fiels_text = document.getElementById('text_hidden');

function clicked() {
  fiels.classList.remove("hidden_kollector");
  fiels_text.classList.remove("hidden_kollector");
  /* ~Change attribute~ */

  var name = document.getElementById('registration_form_name');
  name.setAttribute('required', true);
  var firstname = document.getElementById('registration_form_firstname');
  firstname.setAttribute('required', true);
  var postalcode = document.getElementById('registration_form_postalcode');
  postalcode.setAttribute('required', true);
  var city = document.getElementById('registration_form_city');
  city.setAttribute('required', true);
  var checkbox = document.getElementById('registration_form_roles_1');
  checkbox.checked = true;
} // FORM REGISTER INVERSE

/* ~On click displays fields~ */


function clickoff() {
  fiels.classList.add("hidden_kollector");
  fiels_text.classList.add("hidden_kollector");
  /* ~Change attribute~ */

  var name = document.getElementById('registration_form_name');
  name.removeAttribute('required');
  var firstname = document.getElementById('registration_form_firstname');
  firstname.removeAttribute('required');
  var postalcode = document.getElementById('registration_form_postalcode');
  postalcode.removeAttribute('required');
  var city = document.getElementById('registration_form_city');
  city.removeAttribute('required');
  var checkbox = document.getElementById('registration_form_roles_1');
  checkbox.checked = false;
  var elem = document.getElementById('registration_form_plainPassword').value = "";
}

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_fu-23ca09"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixrQkFBcEI7RUFDQUcsVUFBVSxDQUFDSixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixrQkFBekI7RUFDQTs7RUFDQSxJQUFJSyxJQUFJLEdBQUdYLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qix3QkFBeEIsQ0FBWDtFQUNBVSxJQUFJLENBQUNRLGVBQUwsQ0FBcUIsVUFBckI7RUFFQSxJQUFJTixTQUFTLEdBQUdiLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qiw2QkFBeEIsQ0FBaEI7RUFDQVksU0FBUyxDQUFDTSxlQUFWLENBQTBCLFVBQTFCO0VBRUEsSUFBSUwsVUFBVSxHQUFHZCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsOEJBQXhCLENBQWpCO0VBQ0FhLFVBQVUsQ0FBQ0ssZUFBWCxDQUEyQixVQUEzQjtFQUVBLElBQUlKLElBQUksR0FBR2YsUUFBUSxDQUFDQyxjQUFULENBQXdCLHdCQUF4QixDQUFYO0VBQ0FjLElBQUksQ0FBQ0ksZUFBTCxDQUFxQixVQUFyQjtFQUVILElBQUlILFFBQVEsR0FBR2hCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QiwyQkFBeEIsQ0FBZjtFQUNBZSxRQUFRLENBQUNDLE9BQVQsR0FBbUIsS0FBbkI7RUFFQSxJQUFJRyxJQUFJLEdBQUdwQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUNBQXhCLEVBQTJEb0IsS0FBM0QsR0FBbUUsRUFBOUU7QUFDQTs7Ozs7Ozs7Ozs7O0FDckVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbi8vIGltcG9ydCBKYXZhU2NyaXB0XG5pbXBvcnQgJy4vanMvc2NyaXB0cy5qcyc7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJjb25zb2xlLmxvZygndG90bycpO1xyXG5cclxuLy8gTkFWQkFSIEZJWEVEXHJcbi8qIH5Ub3Agc2NyZWVuIG5hdmJhciBwb3NpdGlvbn4gKi9cclxuXHJcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHsgc2Nyb2xsTmF2YmFyKCkgfTtcclxudmFyIG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpO1xyXG52YXIgc3RpY2t5ID0gbmF2YmFyLm9mZnNldFRvcDtcclxuXHJcbmZ1bmN0aW9uIHNjcm9sbE5hdmJhcigpIHtcclxuICAgIGNvbnNvbGUubG9nKG5hdmJhcik7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHN0aWNreSkge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEZPUk0gUkVHSVNURVJcclxuXHJcbi8qIH5PbiBjbGljayBkaXNwbGF5cyBmaWVsZHN+ICovXHJcbnZhciBmaWVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsc19oaWRkZW4nKTtcclxudmFyIGZpZWxzX3RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dF9oaWRkZW4nKTtcclxuXHJcbmZ1bmN0aW9uIGNsaWNrZWQoKSB7XHJcbiAgICBmaWVscy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuX2tvbGxlY3RvclwiKTtcclxuICAgIGZpZWxzX3RleHQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlbl9rb2xsZWN0b3JcIik7XHJcbiAgICAvKiB+Q2hhbmdlIGF0dHJpYnV0ZX4gKi9cclxuICAgIHZhciBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdHJhdGlvbl9mb3JtX25hbWUnKTtcclxuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xyXG5cclxuICAgIHZhciBmaXJzdG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0cmF0aW9uX2Zvcm1fZmlyc3RuYW1lJyk7XHJcbiAgICBmaXJzdG5hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xyXG5cclxuICAgIHZhciBwb3N0YWxjb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdHJhdGlvbl9mb3JtX3Bvc3RhbGNvZGUnKTtcclxuICAgIHBvc3RhbGNvZGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xyXG5cclxuICAgIHZhciBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdHJhdGlvbl9mb3JtX2NpdHknKTtcclxuICAgIGNpdHkuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xyXG5cclxuXHR2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0cmF0aW9uX2Zvcm1fcm9sZXNfMScpO1xyXG5cdGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG59XHJcblxyXG5cclxuLy8gRk9STSBSRUdJU1RFUiBJTlZFUlNFXHJcbi8qIH5PbiBjbGljayBkaXNwbGF5cyBmaWVsZHN+ICovXHJcbmZ1bmN0aW9uIGNsaWNrb2ZmKCkgeyBcclxuICAgIGZpZWxzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5fa29sbGVjdG9yXCIpO1xyXG4gICAgZmllbHNfdGV4dC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuX2tvbGxlY3RvclwiKTtcclxuICAgIC8qIH5DaGFuZ2UgYXR0cmlidXRlfiAqL1xyXG4gICAgdmFyIG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0cmF0aW9uX2Zvcm1fbmFtZScpO1xyXG4gICAgbmFtZS5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XHJcblxyXG4gICAgdmFyIGZpcnN0bmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3RyYXRpb25fZm9ybV9maXJzdG5hbWUnKTtcclxuICAgIGZpcnN0bmFtZS5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XHJcblxyXG4gICAgdmFyIHBvc3RhbGNvZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0cmF0aW9uX2Zvcm1fcG9zdGFsY29kZScpO1xyXG4gICAgcG9zdGFsY29kZS5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XHJcblxyXG4gICAgdmFyIGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0cmF0aW9uX2Zvcm1fY2l0eScpO1xyXG4gICAgY2l0eS5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XHJcblxyXG5cdHZhciBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3RyYXRpb25fZm9ybV9yb2xlc18xJyk7XHJcblx0Y2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHR2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3RyYXRpb25fZm9ybV9wbGFpblBhc3N3b3JkJykudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwib25zY3JvbGwiLCJzY3JvbGxOYXZiYXIiLCJuYXZiYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RpY2t5Iiwib2Zmc2V0VG9wIiwicGFnZVlPZmZzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJmaWVscyIsImZpZWxzX3RleHQiLCJjbGlja2VkIiwibmFtZSIsInNldEF0dHJpYnV0ZSIsImZpcnN0bmFtZSIsInBvc3RhbGNvZGUiLCJjaXR5IiwiY2hlY2tib3giLCJjaGVja2VkIiwiY2xpY2tvZmYiLCJyZW1vdmVBdHRyaWJ1dGUiLCJlbGVtIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9