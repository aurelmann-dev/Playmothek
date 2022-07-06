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

// NAVBAR FIXED

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxDQUFxQkMsR0FBckIsQ0FBeUIsa0JBQXpCO0VBQ0E7O0VBQ0EsSUFBSUssSUFBSSxHQUFHYixRQUFRLENBQUNDLGNBQVQsQ0FBd0Isd0JBQXhCLENBQVg7RUFDQVksSUFBSSxDQUFDUSxlQUFMLENBQXFCLFVBQXJCO0VBRUEsSUFBSU4sU0FBUyxHQUFHZixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsNkJBQXhCLENBQWhCO0VBQ0FjLFNBQVMsQ0FBQ00sZUFBVixDQUEwQixVQUExQjtFQUVBLElBQUlMLFVBQVUsR0FBR2hCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qiw4QkFBeEIsQ0FBakI7RUFDQWUsVUFBVSxDQUFDSyxlQUFYLENBQTJCLFVBQTNCO0VBRUEsSUFBSUosSUFBSSxHQUFHakIsUUFBUSxDQUFDQyxjQUFULENBQXdCLHdCQUF4QixDQUFYO0VBQ0FnQixJQUFJLENBQUNJLGVBQUwsQ0FBcUIsVUFBckI7RUFFSCxJQUFJSCxRQUFRLEdBQUdsQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsMkJBQXhCLENBQWY7RUFDQWlCLFFBQVEsQ0FBQ0MsT0FBVCxHQUFtQixLQUFuQjtFQUVBLElBQUlHLElBQUksR0FBR3RCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQ0FBeEIsRUFBMkRzQixLQUEzRCxHQUFtRSxFQUE5RTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuLy8gaW1wb3J0IEphdmFTY3JpcHRcbmltcG9ydCAnLi9qcy9zY3JpcHRzLmpzJzsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8vIE5BVkJBUiBGSVhFRFxyXG4vKiB+VG9wIHNjcmVlbiBuYXZiYXIgcG9zaXRpb25+ICovXHJcblxyXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7IHNjcm9sbE5hdmJhcigpIH07XHJcblxyXG52YXIgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIik7XHJcbnZhciBzdGlja3kgPSBuYXZiYXIub2Zmc2V0VG9wO1xyXG5cclxuZnVuY3Rpb24gc2Nyb2xsTmF2YmFyKCkge1xyXG4gICAgY29uc29sZS5sb2cobmF2YmFyKTtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gc3RpY2t5KSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBGT1JNIFJFR0lTVEVSXHJcblxyXG4vKiB+T24gY2xpY2sgZGlzcGxheXMgZmllbGRzfiAqL1xyXG52YXIgZmllbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmllbHNfaGlkZGVuJyk7XHJcbnZhciBmaWVsc190ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRfaGlkZGVuJyk7XHJcblxyXG5mdW5jdGlvbiBjbGlja2VkKCkge1xyXG4gICAgZmllbHMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlbl9rb2xsZWN0b3JcIik7XHJcbiAgICBmaWVsc190ZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5fa29sbGVjdG9yXCIpO1xyXG4gICAgLyogfkNoYW5nZSBhdHRyaWJ1dGV+ICovXHJcbiAgICB2YXIgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3RyYXRpb25fZm9ybV9uYW1lJyk7XHJcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcclxuXHJcbiAgICB2YXIgZmlyc3RuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdHJhdGlvbl9mb3JtX2ZpcnN0bmFtZScpO1xyXG4gICAgZmlyc3RuYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcclxuXHJcbiAgICB2YXIgcG9zdGFsY29kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3RyYXRpb25fZm9ybV9wb3N0YWxjb2RlJyk7XHJcbiAgICBwb3N0YWxjb2RlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcclxuXHJcbiAgICB2YXIgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3RyYXRpb25fZm9ybV9jaXR5Jyk7XHJcbiAgICBjaXR5LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcclxuXHJcblx0dmFyIGNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdHJhdGlvbl9mb3JtX3JvbGVzXzEnKTtcclxuXHRjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxufVxyXG5cclxuXHJcbi8vIEZPUk0gUkVHSVNURVIgSU5WRVJTRVxyXG4vKiB+T24gY2xpY2sgZGlzcGxheXMgZmllbGRzfiAqL1xyXG5mdW5jdGlvbiBjbGlja29mZigpIHsgXHJcbiAgICBmaWVscy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuX2tvbGxlY3RvclwiKTtcclxuICAgIGZpZWxzX3RleHQuY2xhc3NMaXN0LmFkZChcImhpZGRlbl9rb2xsZWN0b3JcIik7XHJcbiAgICAvKiB+Q2hhbmdlIGF0dHJpYnV0ZX4gKi9cclxuICAgIHZhciBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdHJhdGlvbl9mb3JtX25hbWUnKTtcclxuICAgIG5hbWUucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xyXG5cclxuICAgIHZhciBmaXJzdG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0cmF0aW9uX2Zvcm1fZmlyc3RuYW1lJyk7XHJcbiAgICBmaXJzdG5hbWUucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xyXG5cclxuICAgIHZhciBwb3N0YWxjb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdHJhdGlvbl9mb3JtX3Bvc3RhbGNvZGUnKTtcclxuICAgIHBvc3RhbGNvZGUucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xyXG5cclxuICAgIHZhciBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdHJhdGlvbl9mb3JtX2NpdHknKTtcclxuICAgIGNpdHkucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xyXG5cclxuXHR2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0cmF0aW9uX2Zvcm1fcm9sZXNfMScpO1xyXG5cdGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0dmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0cmF0aW9uX2Zvcm1fcGxhaW5QYXNzd29yZCcpLnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0Iiwid2luZG93Iiwib25zY3JvbGwiLCJzY3JvbGxOYXZiYXIiLCJuYXZiYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RpY2t5Iiwib2Zmc2V0VG9wIiwiY29uc29sZSIsImxvZyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZmllbHMiLCJmaWVsc190ZXh0IiwiY2xpY2tlZCIsIm5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJmaXJzdG5hbWUiLCJwb3N0YWxjb2RlIiwiY2l0eSIsImNoZWNrYm94IiwiY2hlY2tlZCIsImNsaWNrb2ZmIiwicmVtb3ZlQXR0cmlidXRlIiwiZWxlbSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==