(self["webpackChunkwebpack_react_boilerplate"] = self["webpackChunkwebpack_react_boilerplate"] || []).push([[179],{

/***/ 961:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
// EXTERNAL MODULE: ./node_modules/@reach/router/es/index.js + 3 modules
var es = __webpack_require__(252);
// EXTERNAL MODULE: ./src/styles/common.module.scss
var common_module = __webpack_require__(627);
// CONCATENATED MODULE: ./src/components/NavElement.js



function NavElement(_ref) {
  var linkTo = _ref.linkTo,
      textContent = _ref.textContent;
  return /*#__PURE__*/react.createElement("li", {
    className: common_module/* default.navbar-element */.Z["navbar-element"]
  }, /*#__PURE__*/react.createElement(es/* Link */.rU, {
    className: common_module/* default.link */.Z.link,
    to: linkTo
  }, textContent));
}
// CONCATENATED MODULE: ./src/components/NavBar.js



function NavBar() {
  return /*#__PURE__*/react.createElement("ul", {
    className: common_module/* default.navbar */.Z.navbar
  }, /*#__PURE__*/react.createElement(NavElement, {
    linkTo: "/",
    textContent: "Home"
  }), /*#__PURE__*/react.createElement(NavElement, {
    linkTo: "/profile",
    textContent: "Profile"
  }), /*#__PURE__*/react.createElement(NavElement, {
    linkTo: "/about",
    textContent: "About"
  }));
}
// CONCATENATED MODULE: ./src/index.js

 // router

 // components

 // styles


var Home = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 696).then(__webpack_require__.bind(__webpack_require__, 696));
});
var About = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 899).then(__webpack_require__.bind(__webpack_require__, 899));
});
var Profile = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 642).then(__webpack_require__.bind(__webpack_require__, 642));
});

function Fallback() {
  return /*#__PURE__*/react.createElement("div", null, "Loading...");
}

function App() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(NavBar, null), /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement(Fallback, null)
  }, /*#__PURE__*/react.createElement(es/* Router */.F0, null, /*#__PURE__*/react.createElement(Home, {
    path: "/"
  }), /*#__PURE__*/react.createElement(About, {
    path: "/about"
  }), /*#__PURE__*/react.createElement(Profile, {
    path: "/profile"
  }))));
}

react_dom.render( /*#__PURE__*/react.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ 627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"_6OYEhY3EhZj-Rgx4qUjiF","image":"_32fUCXyiEtVGDzIsIKPiUK","link":"_1fOGmRySvXAOOwUPI_XRiR","textBody":"_1gCWTVSl9JKqMjQCk3MWlu","title":"_3EmEjZeZFS3PjI_uoTavkO","navbar":"_3iFkWPDpRKmxgUyzplNV-r","navbar-element":"_Q06YkiCi0YIOwEuzn-zN"});

/***/ })

},
0,[[961,666,216]]]);