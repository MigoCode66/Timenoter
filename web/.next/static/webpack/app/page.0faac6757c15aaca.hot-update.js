"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/chat.tsx":
/*!*********************************!*\
  !*** ./app/components/chat.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_magicui_line_shadow_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/magicui/line-shadow-text */ \"(app-pages-browser)/./components/magicui/line-shadow-text.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _createingShehuleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../createingShehuleContext */ \"(app-pages-browser)/./app/createingShehuleContext.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Chat = ()=>{\n    _s();\n    const [addTask, setAddTask] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_createingShehuleContext__WEBPACK_IMPORTED_MODULE_3__.shehuleContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"Chat\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center\",\n                children: [\n                    \"Welcome to time \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_magicui_line_shadow_text__WEBPACK_IMPORTED_MODULE_1__.LineShadowText, {\n                        children: \"schedule\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jraki\\\\projekrty\\\\Timenotre\\\\web\\\\app\\\\components\\\\chat.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jraki\\\\projekrty\\\\Timenotre\\\\web\\\\app\\\\components\\\\chat.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                className: \"w-[500px] shadow-lg shadow-indigo-500/50 border-[2px] border-indigo-500\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, {\n                                children: \"Your ai genereted shehule\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jraki\\\\projekrty\\\\Timenotre\\\\web\\\\app\\\\components\\\\chat.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardDescription, {\n                                children: \"check if ai added your task corectly\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jraki\\\\projekrty\\\\Timenotre\\\\web\\\\app\\\\components\\\\chat.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jraki\\\\projekrty\\\\Timenotre\\\\web\\\\app\\\\components\\\\chat.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardContent, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-col gap-[20px]\",\n                            children: addTask === null || addTask === void 0 ? void 0 : addTask.map((obj)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: obj.task\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\jraki\\\\projekrty\\\\Timenotre\\\\web\\\\app\\\\components\\\\chat.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                            defaultValue: obj['time-start']\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\jraki\\\\projekrty\\\\Timenotre\\\\web\\\\app\\\\components\\\\chat.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                            defaultValue: obj['time-end']\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\jraki\\\\projekrty\\\\Timenotre\\\\web\\\\app\\\\components\\\\chat.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, obj.task, true, {\n                                    fileName: \"C:\\\\Users\\\\jraki\\\\projekrty\\\\Timenotre\\\\web\\\\app\\\\components\\\\chat.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jraki\\\\projekrty\\\\Timenotre\\\\web\\\\app\\\\components\\\\chat.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jraki\\\\projekrty\\\\Timenotre\\\\web\\\\app\\\\components\\\\chat.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jraki\\\\projekrty\\\\Timenotre\\\\web\\\\app\\\\components\\\\chat.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jraki\\\\projekrty\\\\Timenotre\\\\web\\\\app\\\\components\\\\chat.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chat, \"r4tYD2gtRxEggjGPuZbj8zAXR/k=\");\n_c = Chat;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NoYXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDdUU7QUFDcEM7QUFDK0I7QUFPcEM7QUFDSjtBQUNvQjtBQUM5QyxNQUFNVSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCxpREFBVUEsQ0FBQ0Msb0VBQWNBO0lBSXZELHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUFjO2tDQUNWLDhEQUFDZCxnRkFBY0E7a0NBQUM7Ozs7Ozs7Ozs7OzswQkFFbEMsOERBQUNHLHFEQUFJQTtnQkFBQ1csV0FBVTs7a0NBQ2QsOERBQUNULDJEQUFVQTs7MENBQ1QsOERBQUNFLDBEQUFTQTswQ0FBQzs7Ozs7OzBDQUNYLDhEQUFDRCxnRUFBZUE7MENBQUM7Ozs7Ozs7Ozs7OztrQ0FJbkIsOERBQUNGLDREQUFXQTtrQ0FDViw0RUFBQ1k7NEJBQUdGLFdBQVU7c0NBQ1hILG9CQUFBQSw4QkFBQUEsUUFBU00sR0FBRyxDQUFDLENBQUNDO2dDQUNiLHFCQUNFLDhEQUFDQztvQ0FBa0JMLFdBQVU7O3NEQUMzQiw4REFBQ007c0RBQUdGLElBQUlHLElBQUk7Ozs7OztzREFDWiw4REFBQ1osdURBQUtBOzRDQUFDYSxjQUFjSixHQUFHLENBQUMsYUFBYTs7Ozs7O3NEQUN0Qyw4REFBQ1QsdURBQUtBOzRDQUFDYSxjQUFjSixHQUFHLENBQUMsV0FBVzs7Ozs7OzttQ0FIN0JBLElBQUlHLElBQUk7Ozs7OzRCQU1yQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQWpDTVg7S0FBQUE7QUFtQ04saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcanJha2lcXHByb2pla3J0eVxcVGltZW5vdHJlXFx3ZWJcXGFwcFxcY29tcG9uZW50c1xcY2hhdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgeyBMaW5lU2hhZG93VGV4dCB9IGZyb20gJ0AvY29tcG9uZW50cy9tYWdpY3VpL2xpbmUtc2hhZG93LXRleHQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzaGVodWxlQ29udGV4dCwgVGFzayB9IGZyb20gJy4uL2NyZWF0ZWluZ1NoZWh1bGVDb250ZXh0JztcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZERlc2NyaXB0aW9uLFxyXG4gIENhcmRUaXRsZSxcclxufSBmcm9tICdAL2NvbXBvbmVudHMvdWkvY2FyZCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2lucHV0JztcclxuY29uc3QgQ2hhdCA9ICgpID0+IHtcclxuICBjb25zdCBbYWRkVGFzaywgc2V0QWRkVGFza10gPSB1c2VDb250ZXh0KHNoZWh1bGVDb250ZXh0KSBhcyBbXHJcbiAgICBUYXNrW10gfCBudWxsLFxyXG4gICAgUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248VGFza1tdIHwgbnVsbD4+XHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDaGF0XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIFdlbGNvbWUgdG8gdGltZSA8TGluZVNoYWRvd1RleHQ+c2NoZWR1bGU8L0xpbmVTaGFkb3dUZXh0PlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LVs1MDBweF0gc2hhZG93LWxnIHNoYWRvdy1pbmRpZ28tNTAwLzUwIGJvcmRlci1bMnB4XSBib3JkZXItaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPENhcmRUaXRsZT5Zb3VyIGFpIGdlbmVyZXRlZCBzaGVodWxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICBjaGVjayBpZiBhaSBhZGRlZCB5b3VyIHRhc2sgY29yZWN0bHlcclxuICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtWzIwcHhdXCI+XHJcbiAgICAgICAgICAgIHthZGRUYXNrPy5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtvYmoudGFza30gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPHA+e29iai50YXNrfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IGRlZmF1bHRWYWx1ZT17b2JqWyd0aW1lLXN0YXJ0J119ID48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgZGVmYXVsdFZhbHVlPXtvYmpbJ3RpbWUtZW5kJ119ID48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XHJcbiJdLCJuYW1lcyI6WyJMaW5lU2hhZG93VGV4dCIsInVzZUNvbnRleHQiLCJzaGVodWxlQ29udGV4dCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRIZWFkZXIiLCJDYXJkRGVzY3JpcHRpb24iLCJDYXJkVGl0bGUiLCJSZWFjdCIsIklucHV0IiwiQ2hhdCIsImFkZFRhc2siLCJzZXRBZGRUYXNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ1bCIsIm1hcCIsIm9iaiIsImxpIiwicCIsInRhc2siLCJkZWZhdWx0VmFsdWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/chat.tsx\n"));

/***/ })

});