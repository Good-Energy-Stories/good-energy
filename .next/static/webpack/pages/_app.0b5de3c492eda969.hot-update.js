"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./stores/UIStore.js":
/*!***************************!*\
  !*** ./stores/UIStore.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js\");\n/* harmony import */ var _Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js\");\n/* harmony import */ var _Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\n/* harmony import */ var _utils_getRandomColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getRandomColor */ \"./utils/getRandomColor.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;\n\n\n\nvar DEFAULT_BACKGROUND = \"#fff\";\nvar DEFAULT_FILTER = \"all\";\nvar UIStore = (_dec = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec2 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec3 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec4 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec5 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec6 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec7 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec8 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec9 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec10 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec11 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec12 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec13 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec14 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec15 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec16 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec17 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, _dec18 = mobx__WEBPACK_IMPORTED_MODULE_6__.action.bound, (_class = /*#__PURE__*/function () {\n  function UIStore(rootStore) {\n    (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, UIStore);\n\n    (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"activeFilter\", _descriptor, this);\n\n    this.lastActiveFilter = DEFAULT_FILTER;\n\n    (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"scrollPosition\", _descriptor2, this);\n\n    (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"directory__searchActive\", _descriptor3, this);\n\n    (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"player__isMinimized\", _descriptor4, this);\n\n    (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"directory__subscribeFormActive\", _descriptor5, this);\n\n    (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"directory__subscribeFormSubmitted\", _descriptor6, this);\n\n    (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"showTutorial\", _descriptor7, this);\n\n    this.lastScrollPosition = 0;\n\n    (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"scrollPositionTotal\", _descriptor8, this);\n\n    (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"pageHeight\", _descriptor9, this);\n\n    (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"windowWidth\", _descriptor10, this);\n\n    (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"windowHeight\", _descriptor11, this);\n\n    this.rootStore = rootStore;\n    (0,mobx__WEBPACK_IMPORTED_MODULE_6__.makeObservable)(this);\n  }\n\n  (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(UIStore, [{\n    key: \"setPlayerMinimized\",\n    value: function setPlayerMinimized(minimized) {\n      this.player__isMinimized = minimized;\n    }\n  }, {\n    key: \"setSearchModeActive\",\n    value: function setSearchModeActive(active) {\n      this.directory__searchActive = active;\n    }\n  }, {\n    key: \"setSubscribeFormActive\",\n    value: function setSubscribeFormActive(active) {\n      this.directory__subscribeFormActive = active;\n    }\n  }, {\n    key: \"setSubscribeFormSubmitted\",\n    value: function setSubscribeFormSubmitted(submitted) {\n      this.directory__subscribeFormSubmitted = submitted;\n    }\n  }, {\n    key: \"goToLastFilter\",\n    value: function goToLastFilter() {\n      this.activeFilter = this.lastActiveFilter;\n    }\n  }, {\n    key: \"resetActiveFilter\",\n    value: function resetActiveFilter(filter) {\n      this.activeFilter = DEFAULT_FILTER;\n    }\n  }, {\n    key: \"setHidePlayer\",\n    value: function setHidePlayer(state) {\n      this.hidePlayer = state;\n    }\n  }, {\n    key: \"setBsideActive\",\n    value: function setBsideActive(active) {\n      this.bsideActive = active;\n    }\n  }, {\n    key: \"updateWindowHeight\",\n    value: function updateWindowHeight(height) {\n      this.windowHeight = height;\n    }\n  }, {\n    key: \"updateWindowWidth\",\n    value: function updateWindowWidth(width) {\n      this.windowWidth = width;\n    }\n  }, {\n    key: \"windowScrollPositionPixels\",\n    get: function get() {\n      return this.scrollPosition * this.pageHeight;\n    }\n  }, {\n    key: \"updateScrollPosition\",\n    value: function updateScrollPosition(pos) {\n      this.requestScrollTick();\n    }\n  }, {\n    key: \"setShowTutorial\",\n    value: function setShowTutorial(show) {\n      this.showTutorial = show;\n    }\n  }, {\n    key: \"getPageHeight\",\n    value: function getPageHeight() {\n      var height = Math.max(document.body.scrollHeight, document.body.offsetHeight);\n      this.pageHeight = height;\n    }\n  }, {\n    key: \"requestScrollTick\",\n    value: function requestScrollTick() {\n      if (!this.scroll__ticking) {\n        requestAnimationFrame(this.setScrollPosition);\n      }\n\n      this.scroll__ticking = true;\n    }\n  }, {\n    key: \"scrollToTop\",\n    value: function scrollToTop() {\n      window.scrollTo(0, 0);\n    }\n  }, {\n    key: \"scrollToRef\",\n    value: function scrollToRef(ref) {\n      var top = ref.current.offsetTop;\n      window.scrollTo({\n        top: top,\n        behavior: \"smooth\"\n      });\n    }\n  }, {\n    key: \"setScrollPosition\",\n    value: function setScrollPosition() {\n      var winScroll = window.scrollY;\n      var height = document.body.clientHeight - this.windowHeight;\n      var scrolled = winScroll / height;\n      this.lastScrollPosition = this.scrollPosition;\n      this.scrollPosition = scrolled;\n      this.scroll__ticking = false;\n    }\n  }, {\n    key: \"setPlayerColor\",\n    value: function setPlayerColor(color) {\n      this.playerColor = color;\n    }\n  }, {\n    key: \"setLukeHovered\",\n    value: function setLukeHovered(hovered) {\n      this.lukeHovered = hovered;\n    } // @computed get playerColor() {\n    // \tconsole.log(this.cotrolColor);\n    // \treturn this.cotrolColor;\n    // }\n\n  }]);\n\n  return UIStore;\n}(), (_descriptor = (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"activeFilter\", [mobx__WEBPACK_IMPORTED_MODULE_6__.observable], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return DEFAULT_FILTER;\n  }\n}), _descriptor2 = (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"scrollPosition\", [mobx__WEBPACK_IMPORTED_MODULE_6__.observable], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return 0;\n  }\n}), _descriptor3 = (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"directory__searchActive\", [mobx__WEBPACK_IMPORTED_MODULE_6__.observable], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return false;\n  }\n}), _descriptor4 = (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"player__isMinimized\", [mobx__WEBPACK_IMPORTED_MODULE_6__.observable], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return false;\n  }\n}), _descriptor5 = (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"directory__subscribeFormActive\", [mobx__WEBPACK_IMPORTED_MODULE_6__.observable], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return false;\n  }\n}), _descriptor6 = (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"directory__subscribeFormSubmitted\", [mobx__WEBPACK_IMPORTED_MODULE_6__.observable], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return false;\n  }\n}), _descriptor7 = (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"showTutorial\", [mobx__WEBPACK_IMPORTED_MODULE_6__.observable], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return true;\n  }\n}), _descriptor8 = (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"scrollPositionTotal\", [mobx__WEBPACK_IMPORTED_MODULE_6__.observable], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return 0;\n  }\n}), _descriptor9 = (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"pageHeight\", [mobx__WEBPACK_IMPORTED_MODULE_6__.observable], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return 0;\n  }\n}), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"setPlayerMinimized\", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, \"setPlayerMinimized\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"setSearchModeActive\", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, \"setSearchModeActive\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"setSubscribeFormActive\", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, \"setSubscribeFormActive\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"setSubscribeFormSubmitted\", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, \"setSubscribeFormSubmitted\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"goToLastFilter\", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, \"goToLastFilter\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"resetActiveFilter\", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, \"resetActiveFilter\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"setHidePlayer\", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, \"setHidePlayer\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"setBsideActive\", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, \"setBsideActive\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"updateWindowHeight\", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, \"updateWindowHeight\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"updateWindowWidth\", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, \"updateWindowWidth\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"windowScrollPositionPixels\", [mobx__WEBPACK_IMPORTED_MODULE_6__.computed], Object.getOwnPropertyDescriptor(_class.prototype, \"windowScrollPositionPixels\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"updateScrollPosition\", [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, \"updateScrollPosition\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"setShowTutorial\", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, \"setShowTutorial\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"getPageHeight\", [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, \"getPageHeight\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"scrollToTop\", [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, \"scrollToTop\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"scrollToRef\", [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, \"scrollToRef\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"setScrollPosition\", [_dec16], Object.getOwnPropertyDescriptor(_class.prototype, \"setScrollPosition\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"setPlayerColor\", [_dec17], Object.getOwnPropertyDescriptor(_class.prototype, \"setPlayerColor\"), _class.prototype), (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"setLukeHovered\", [_dec18], Object.getOwnPropertyDescriptor(_class.prototype, \"setLukeHovered\"), _class.prototype), _descriptor10 = (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"windowWidth\", [mobx__WEBPACK_IMPORTED_MODULE_6__.observable], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return  true ? window.innerWidth : 0;\n  }\n}), _descriptor11 = (0,_Users_ryansheehan_good_energy_node_modules_next_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"windowHeight\", [mobx__WEBPACK_IMPORTED_MODULE_6__.observable], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return  true ? window.innerHeight : 0;\n  }\n})), _class));\n/* harmony default export */ __webpack_exports__[\"default\"] = (UIStore);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxFQUFFO0FBRkssT0FBaEI7QUFJQTs7O1dBRUQsNkJBQWtDO0FBQ2pDLFVBQU1DLFNBQVMsR0FBR1AsTUFBTSxDQUFDUSxPQUF6QjtBQUVBLFVBQU0zQixNQUFNLEdBQUdZLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjZSxZQUFkLEdBQTZCLEtBQUszQixZQUFqRDtBQUVBLFVBQU00QixRQUFRLEdBQUdILFNBQVMsR0FBRzFCLE1BQTdCO0FBRUEsV0FBS2Isa0JBQUwsR0FBMEIsS0FBS2lCLGNBQS9CO0FBQ0EsV0FBS0EsY0FBTCxHQUFzQnlCLFFBQXRCO0FBQ0EsV0FBS2IsZUFBTCxHQUF1QixLQUF2QjtBQUNBOzs7V0FFRCx3QkFBNkJjLEtBQTdCLEVBQW9DO0FBQ25DLFdBQUtDLFdBQUwsR0FBbUJELEtBQW5CO0FBQ0E7OztXQUNELHdCQUE2QkUsT0FBN0IsRUFBc0M7QUFDckMsV0FBS0MsV0FBTCxHQUFtQkQsT0FBbkI7QUFDQSxNQU9EO0FBQ0E7QUFDQTtBQUNBOzs7OztvTkFqSENyRDs7Ozs7V0FBMEJHOztxTkFHMUJIOzs7OztXQUE0Qjs7OE5BQzVCQTs7Ozs7V0FBcUM7OzBOQUNyQ0E7Ozs7O1dBQWlDOztxT0FFakNBOzs7OztXQUE0Qzs7d09BQzVDQTs7Ozs7V0FBK0M7O21OQUMvQ0E7Ozs7O1dBQTBCOzswTkFFMUJBOzs7OztXQUFpQzs7aU5BQ2pDQTs7Ozs7V0FBd0I7O2duR0FvQ3hCRiw4bkZBeURBRTs7Ozs7V0FDQSxRQUFnQ3dDLE1BQU0sQ0FBQ2UsVUFBdkMsR0FBb0RDOztvTkFDcER4RDs7Ozs7V0FDQSxRQUFnQ3dDLE1BQU0sQ0FBQ2lCLFdBQXZDLEdBQXFERDs7O0FBUXZELCtEQUFlcEQsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZXMvVUlTdG9yZS5qcz8yN2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjdGlvbiwgY29tcHV0ZWQsIG1ha2VPYnNlcnZhYmxlLCBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCB7IGdldFJhbmRvbUNvbG9yIH0gZnJvbSBcIi4uL3V0aWxzL2dldFJhbmRvbUNvbG9yXCI7XG5jb25zdCBERUZBVUxUX0JBQ0tHUk9VTkQgPSBcIiNmZmZcIjtcbmNvbnN0IERFRkFVTFRfRklMVEVSID0gXCJhbGxcIjtcblxuY2xhc3MgVUlTdG9yZSB7XG5cdGNvbnN0cnVjdG9yKHJvb3RTdG9yZSkge1xuXHRcdHRoaXMucm9vdFN0b3JlID0gcm9vdFN0b3JlO1xuXHRcdG1ha2VPYnNlcnZhYmxlKHRoaXMpO1xuXHR9XG5cblx0QG9ic2VydmFibGUgYWN0aXZlRmlsdGVyID0gREVGQVVMVF9GSUxURVI7XG5cdGxhc3RBY3RpdmVGaWx0ZXIgPSBERUZBVUxUX0ZJTFRFUjtcblxuXHRAb2JzZXJ2YWJsZSBzY3JvbGxQb3NpdGlvbiA9IDA7XG5cdEBvYnNlcnZhYmxlIGRpcmVjdG9yeV9fc2VhcmNoQWN0aXZlID0gZmFsc2U7XG5cdEBvYnNlcnZhYmxlIHBsYXllcl9faXNNaW5pbWl6ZWQgPSBmYWxzZTtcblxuXHRAb2JzZXJ2YWJsZSBkaXJlY3RvcnlfX3N1YnNjcmliZUZvcm1BY3RpdmUgPSBmYWxzZTtcblx0QG9ic2VydmFibGUgZGlyZWN0b3J5X19zdWJzY3JpYmVGb3JtU3VibWl0dGVkID0gZmFsc2U7XG5cdEBvYnNlcnZhYmxlIHNob3dUdXRvcmlhbCA9IHRydWU7XG5cdGxhc3RTY3JvbGxQb3NpdGlvbiA9IDA7XG5cdEBvYnNlcnZhYmxlIHNjcm9sbFBvc2l0aW9uVG90YWwgPSAwO1xuXHRAb2JzZXJ2YWJsZSBwYWdlSGVpZ2h0ID0gMDtcblxuXHRAYWN0aW9uLmJvdW5kIHNldFBsYXllck1pbmltaXplZChtaW5pbWl6ZWQpIHtcblx0XHR0aGlzLnBsYXllcl9faXNNaW5pbWl6ZWQgPSBtaW5pbWl6ZWQ7XG5cdH1cblx0QGFjdGlvbi5ib3VuZCBzZXRTZWFyY2hNb2RlQWN0aXZlKGFjdGl2ZSkge1xuXHRcdHRoaXMuZGlyZWN0b3J5X19zZWFyY2hBY3RpdmUgPSBhY3RpdmU7XG5cdH1cblx0QGFjdGlvbi5ib3VuZCBzZXRTdWJzY3JpYmVGb3JtQWN0aXZlKGFjdGl2ZSkge1xuXHRcdHRoaXMuZGlyZWN0b3J5X19zdWJzY3JpYmVGb3JtQWN0aXZlID0gYWN0aXZlO1xuXHR9XG5cdEBhY3Rpb24uYm91bmQgc2V0U3Vic2NyaWJlRm9ybVN1Ym1pdHRlZChzdWJtaXR0ZWQpIHtcblx0XHR0aGlzLmRpcmVjdG9yeV9fc3Vic2NyaWJlRm9ybVN1Ym1pdHRlZCA9IHN1Ym1pdHRlZDtcblx0fVxuXHRAYWN0aW9uLmJvdW5kIGdvVG9MYXN0RmlsdGVyKCkge1xuXHRcdHRoaXMuYWN0aXZlRmlsdGVyID0gdGhpcy5sYXN0QWN0aXZlRmlsdGVyO1xuXHR9XG5cdEBhY3Rpb24uYm91bmQgcmVzZXRBY3RpdmVGaWx0ZXIoZmlsdGVyKSB7XG5cdFx0dGhpcy5hY3RpdmVGaWx0ZXIgPSBERUZBVUxUX0ZJTFRFUjtcblx0fVxuXG5cdEBhY3Rpb24uYm91bmQgc2V0SGlkZVBsYXllcihzdGF0ZSkge1xuXHRcdHRoaXMuaGlkZVBsYXllciA9IHN0YXRlO1xuXHR9XG5cblx0QGFjdGlvbi5ib3VuZCBzZXRCc2lkZUFjdGl2ZShhY3RpdmUpIHtcblx0XHR0aGlzLmJzaWRlQWN0aXZlID0gYWN0aXZlO1xuXHR9XG5cblx0QGFjdGlvbi5ib3VuZCB1cGRhdGVXaW5kb3dIZWlnaHQoaGVpZ2h0KSB7XG5cdFx0dGhpcy53aW5kb3dIZWlnaHQgPSBoZWlnaHQ7XG5cdH1cblxuXHRAYWN0aW9uLmJvdW5kIHVwZGF0ZVdpbmRvd1dpZHRoKHdpZHRoKSB7XG5cdFx0dGhpcy53aW5kb3dXaWR0aCA9IHdpZHRoO1xuXHR9XG5cdEBjb21wdXRlZCBnZXQgd2luZG93U2Nyb2xsUG9zaXRpb25QaXhlbHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2Nyb2xsUG9zaXRpb24gKiB0aGlzLnBhZ2VIZWlnaHQ7XG5cdH1cblx0QGFjdGlvbi5ib3VuZCB1cGRhdGVTY3JvbGxQb3NpdGlvbihwb3MpIHtcblx0XHR0aGlzLnJlcXVlc3RTY3JvbGxUaWNrKCk7XG5cdH1cblx0QGFjdGlvbi5ib3VuZCBzZXRTaG93VHV0b3JpYWwoc2hvdykge1xuXHRcdHRoaXMuc2hvd1R1dG9yaWFsID0gc2hvdztcblx0fVxuXG5cdEBhY3Rpb24uYm91bmQgZ2V0UGFnZUhlaWdodCgpIHtcblx0XHR2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoXG5cdFx0XHRkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcblx0XHRcdGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0XG5cdFx0KTtcblxuXHRcdHRoaXMucGFnZUhlaWdodCA9IGhlaWdodDtcblx0fVxuXG5cdHJlcXVlc3RTY3JvbGxUaWNrKCkge1xuXHRcdGlmICghdGhpcy5zY3JvbGxfX3RpY2tpbmcpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNldFNjcm9sbFBvc2l0aW9uKTtcblx0XHR9XG5cdFx0dGhpcy5zY3JvbGxfX3RpY2tpbmcgPSB0cnVlO1xuXHR9XG5cblx0QGFjdGlvbi5ib3VuZCBzY3JvbGxUb1RvcCgpIHtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdH1cblx0QGFjdGlvbi5ib3VuZCBzY3JvbGxUb1JlZihyZWYpIHtcblx0XHRjb25zdCB0b3AgPSByZWYuY3VycmVudC5vZmZzZXRUb3A7XG5cblx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xuXHRcdFx0dG9wLFxuXHRcdFx0YmVoYXZpb3I6IFwic21vb3RoXCIsXG5cdFx0fSk7XG5cdH1cblxuXHRAYWN0aW9uLmJvdW5kIHNldFNjcm9sbFBvc2l0aW9uKCkge1xuXHRcdGNvbnN0IHdpblNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZO1xuXG5cdFx0Y29uc3QgaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSB0aGlzLndpbmRvd0hlaWdodDtcblxuXHRcdGNvbnN0IHNjcm9sbGVkID0gd2luU2Nyb2xsIC8gaGVpZ2h0O1xuXG5cdFx0dGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSB0aGlzLnNjcm9sbFBvc2l0aW9uO1xuXHRcdHRoaXMuc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxlZDtcblx0XHR0aGlzLnNjcm9sbF9fdGlja2luZyA9IGZhbHNlO1xuXHR9XG5cblx0QGFjdGlvbi5ib3VuZCBzZXRQbGF5ZXJDb2xvcihjb2xvcikge1xuXHRcdHRoaXMucGxheWVyQ29sb3IgPSBjb2xvcjtcblx0fVxuXHRAYWN0aW9uLmJvdW5kIHNldEx1a2VIb3ZlcmVkKGhvdmVyZWQpIHtcblx0XHR0aGlzLmx1a2VIb3ZlcmVkID0gaG92ZXJlZDtcblx0fVxuXG5cdEBvYnNlcnZhYmxlIHdpbmRvd1dpZHRoID1cblx0XHR0eXBlb2Ygd2luZG93ICE9PSBgdW5kZWZpbmVkYCA/IHdpbmRvdy5pbm5lcldpZHRoIDogdW5kZWZpbmVkO1xuXHRAb2JzZXJ2YWJsZSB3aW5kb3dIZWlnaHQgPVxuXHRcdHR5cGVvZiB3aW5kb3cgIT09IGB1bmRlZmluZWRgID8gd2luZG93LmlubmVySGVpZ2h0IDogdW5kZWZpbmVkO1xuXG5cdC8vIEBjb21wdXRlZCBnZXQgcGxheWVyQ29sb3IoKSB7XG5cdC8vIFx0Y29uc29sZS5sb2codGhpcy5jb3Ryb2xDb2xvcik7XG5cdC8vIFx0cmV0dXJuIHRoaXMuY290cm9sQ29sb3I7XG5cdC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUlTdG9yZTtcbiJdLCJuYW1lcyI6WyJhY3Rpb24iLCJjb21wdXRlZCIsIm1ha2VPYnNlcnZhYmxlIiwib2JzZXJ2YWJsZSIsImdldFJhbmRvbUNvbG9yIiwiREVGQVVMVF9CQUNLR1JPVU5EIiwiREVGQVVMVF9GSUxURVIiLCJVSVN0b3JlIiwiYm91bmQiLCJyb290U3RvcmUiLCJsYXN0QWN0aXZlRmlsdGVyIiwibGFzdFNjcm9sbFBvc2l0aW9uIiwibWluaW1pemVkIiwicGxheWVyX19pc01pbmltaXplZCIsImFjdGl2ZSIsImRpcmVjdG9yeV9fc2VhcmNoQWN0aXZlIiwiZGlyZWN0b3J5X19zdWJzY3JpYmVGb3JtQWN0aXZlIiwic3VibWl0dGVkIiwiZGlyZWN0b3J5X19zdWJzY3JpYmVGb3JtU3VibWl0dGVkIiwiYWN0aXZlRmlsdGVyIiwiZmlsdGVyIiwic3RhdGUiLCJoaWRlUGxheWVyIiwiYnNpZGVBY3RpdmUiLCJoZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJ3aWR0aCIsIndpbmRvd1dpZHRoIiwic2Nyb2xsUG9zaXRpb24iLCJwYWdlSGVpZ2h0IiwicG9zIiwicmVxdWVzdFNjcm9sbFRpY2siLCJzaG93Iiwic2hvd1R1dG9yaWFsIiwiTWF0aCIsIm1heCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsInNjcm9sbF9fdGlja2luZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFNjcm9sbFBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsVG8iLCJyZWYiLCJ0b3AiLCJjdXJyZW50Iiwib2Zmc2V0VG9wIiwiYmVoYXZpb3IiLCJ3aW5TY3JvbGwiLCJzY3JvbGxZIiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsZWQiLCJjb2xvciIsInBsYXllckNvbG9yIiwiaG92ZXJlZCIsImx1a2VIb3ZlcmVkIiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImlubmVySGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./stores/UIStore.js\n");

/***/ })

});