(self["webpackChunkwebpack_react_boilerplate"] = self["webpackChunkwebpack_react_boilerplate"] || []).push([[696],{

/***/ 906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading...");
});

/***/ }),

/***/ 696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _styles_common_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(627);
/* harmony import */ var _components_Fallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(906);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // lazy loads

var Nietzsche = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/* import() */ 74).then(__webpack_require__.bind(__webpack_require__, 74));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      reveal = _React$useState2[0],
      setReveal = _React$useState2[1];

  var title = _styles_common_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.title */ .Z.title,
      textBody = _styles_common_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.textBody */ .Z.textBody,
      button = _styles_common_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.button */ .Z.button,
      image = _styles_common_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.image */ .Z.image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: title
  }, "Webpack config for React"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: textBody
  }, "Cat ipsum dolor sit amet, ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss so pee on walls it smells like breakfast scamper. Lick the curtain just to be annoying soft kitty warm kitty little ball of furr but fall asleep upside-down yet rub against owner because nose is wet. Snuggles up to shoulders or knees and purrs you to sleep human is behind a closed door, emergency! abandoned! meeooowwww!!!."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: textBody
  }, "While happily ignoring when being called chase the pig around the house. Chase red laser dot scratch the postman wake up lick paw wake up owner meow meow or eat the rubberband stare out the window love you, then bite you yet meow meow, i tell my human."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: button,
    onClick: function onClick() {
      return setReveal(!reveal);
    }
  }, reveal ? 'Hide' : 'Reveal me'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Fallback__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null)
  }, reveal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Nietzsche, null)));
});

/***/ })

}]);