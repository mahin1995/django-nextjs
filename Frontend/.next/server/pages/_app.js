"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/action/type.js":
/*!****************************!*\
  !*** ./src/action/type.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"REGISTER_SUCCESS\": () => (/* binding */ REGISTER_SUCCESS),\n/* harmony export */   \"REGISTER_FAIL\": () => (/* binding */ REGISTER_FAIL),\n/* harmony export */   \"LOGIN_SUCCESS\": () => (/* binding */ LOGIN_SUCCESS),\n/* harmony export */   \"LOGIN_FAIL\": () => (/* binding */ LOGIN_FAIL),\n/* harmony export */   \"SET_AUTH_LOADING\": () => (/* binding */ SET_AUTH_LOADING),\n/* harmony export */   \"REMOVE_AUTH_LOADING\": () => (/* binding */ REMOVE_AUTH_LOADING)\n/* harmony export */ });\nconst REGISTER_SUCCESS = 'REGISTER_SUCCESS';\nconst REGISTER_FAIL = 'REGISTER_FAIL';\nconst LOGIN_SUCCESS = 'LOGIN_SUCCESS';\nconst LOGIN_FAIL = 'LOGIN_FAIL';\nconst SET_AUTH_LOADING = \"SET_AUTH_LOADING\";\nconst REMOVE_AUTH_LOADING = \"REMOVE_AUTH_LOADING\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9uL3R5cGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sS0FBSyxDQUFDQSxnQkFBZ0IsR0FBQyxDQUFrQjtBQUN6QyxLQUFLLENBQUNDLGFBQWEsR0FBQyxDQUFlO0FBQ25DLEtBQUssQ0FBQ0MsYUFBYSxHQUFDLENBQWU7QUFDbkMsS0FBSyxDQUFDQyxVQUFVLEdBQUMsQ0FBWTtBQUM3QixLQUFLLENBQUNDLGdCQUFnQixHQUFDLENBQWtCO0FBQ3pDLEtBQUssQ0FBQ0MsbUJBQW1CLEdBQUMsQ0FBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2dpbl9zaWdudXAvLi9zcmMvYWN0aW9uL3R5cGUuanM/NjExNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgUkVHSVNURVJfU1VDQ0VTUz0nUkVHSVNURVJfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GQUlMPSdSRUdJU1RFUl9GQUlMJ1xuZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1M9J0xPR0lOX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgTE9HSU5fRkFJTD0nTE9HSU5fRkFJTCdcbmV4cG9ydCBjb25zdCBTRVRfQVVUSF9MT0FESU5HPVwiU0VUX0FVVEhfTE9BRElOR1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9BVVRIX0xPQURJTkc9XCJSRU1PVkVfQVVUSF9MT0FESU5HXCI7Il0sIm5hbWVzIjpbIlJFR0lTVEVSX1NVQ0NFU1MiLCJSRUdJU1RFUl9GQUlMIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUwiLCJTRVRfQVVUSF9MT0FESU5HIiwiUkVNT1ZFX0FVVEhfTE9BRElORyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/action/type.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const store = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useStore)(pageProps.initialReduxState);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/home/pikachu/Public/CODING/react/project/django-next-project1/Frontend/src/pages/_app.js\",\n                    lineNumber: 12,\n                    columnNumber: 1\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/home/pikachu/Public/CODING/react/project/django-next-project1/Frontend/src/pages/_app.js\",\n                            lineNumber: 13,\n                            columnNumber: 3\n                        },\n                        __self: this,\n                        children: \"HttpOnly Auth\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\",\n                        rel: \"stylesheet\",\n                        __source: {\n                            fileName: \"/home/pikachu/Public/CODING/react/project/django-next-project1/Frontend/src/pages/_app.js\",\n                            lineNumber: 14,\n                            columnNumber: 3\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\",\n                strategy: \"beforeInteractive\",\n                __source: {\n                    fileName: \"/home/pikachu/Public/CODING/react/project/django-next-project1/Frontend/src/pages/_app.js\",\n                    lineNumber: 19,\n                    columnNumber: 1\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n                store: store,\n                __source: {\n                    fileName: \"/home/pikachu/Public/CODING/react/project/django-next-project1/Frontend/src/pages/_app.js\",\n                    lineNumber: 20,\n                    columnNumber: 1\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                    ...pageProps,\n                    __source: {\n                        fileName: \"/home/pikachu/Public/CODING/react/project/django-next-project1/Frontend/src/pages/_app.js\",\n                        lineNumber: 21,\n                        columnNumber: 1\n                    },\n                    __self: this\n                })\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU0QjtBQUNJO0FBQ007QUFDSDtTQUUxQkksS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsS0FBSyxDQUFDQyxLQUFLLEdBQUdKLGdEQUFRLENBQUNHLFNBQVMsQ0FBQ0UsaUJBQWlCO0lBQ2xELE1BQU0sdUVBQUM7O2tGQUVSUixrREFBSTs7Ozs7Ozs7eUZBQ0ZTLENBQUs7Ozs7Ozs7a0NBQUMsQ0FBYTs7eUZBQ25CQyxDQUFJO3dCQUNIQyxJQUFJLEVBQUMsQ0FBeUU7d0JBQzlFQyxHQUFHLEVBQUMsQ0FBWTs7Ozs7Ozs7OztpRkFHbkJYLG9EQUFNO2dCQUFFWSxHQUFHLEVBQUMsQ0FBOEU7Z0JBQUNDLFFBQVEsRUFBQyxDQUFtQjs7Ozs7Ozs7aUZBQ3ZIWixpREFBUTtnQkFBQ0ssS0FBSyxFQUFFQSxLQUFLOzs7Ozs7OytGQUNyQkYsU0FBUzt1QkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFJeEIsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9naW5fc2lnbnVwLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFNjcmlwdCBmcm9tICduZXh0L3NjcmlwdCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZShwYWdlUHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpXG4gIHJldHVybihcbjw+XG48SGVhZD5cbiAgPHRpdGxlPkh0dHBPbmx5IEF1dGg8L3RpdGxlPlxuICA8bGluayBcbiAgICBocmVmPSdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycgXG4gICAgcmVsPSdzdHlsZXNoZWV0J1xuICAgIC8+ICBcbjwvSGVhZD5cbjxTY3JpcHQgIHNyYz0naHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjMvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qcycgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiICA+PC9TY3JpcHQ+XG48UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbjxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbjwvUHJvdmlkZXI+XG48Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkhlYWQiLCJTY3JpcHQiLCJQcm92aWRlciIsInVzZVN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIiwidGl0bGUiLCJsaW5rIiwiaHJlZiIsInJlbCIsInNyYyIsInN0cmF0ZWd5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/reducers/auth.js":
/*!******************************!*\
  !*** ./src/reducers/auth.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ \"./src/action/type.js\");\n\nconst initialState = {\n    user: null,\n    isAuthenticated: false,\n    loading: false,\n    register_success: false\n};\nconst authReducer = (state = initialState, action)=>{\n    const { type , payload  } = action;\n    switch(type){\n        case _action_type__WEBPACK_IMPORTED_MODULE_0__.REGISTER_SUCCESS:\n            return {\n                ...state,\n                register_success: true\n            };\n        case _action_type__WEBPACK_IMPORTED_MODULE_0__.REGISTER_FAIL:\n            return {\n                ...state\n            };\n        case _action_type__WEBPACK_IMPORTED_MODULE_0__.SET_AUTH_LOADING:\n            return {\n                ...state,\n                loading: true\n            };\n        case _action_type__WEBPACK_IMPORTED_MODULE_0__.REMOVE_AUTH_LOADING:\n            return {\n                ...state,\n                loading: false\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1RztBQUV2RyxLQUFLLENBQUNJLFlBQVksR0FBRSxDQUFDO0lBQ2pCQyxJQUFJLEVBQUMsSUFBSTtJQUNUQyxlQUFlLEVBQUMsS0FBSztJQUNyQkMsT0FBTyxFQUFDLEtBQUs7SUFDYkMsZ0JBQWdCLEVBQUMsS0FBSztBQUMxQixDQUFDO0FBRUQsS0FBSyxDQUFDQyxXQUFXLElBQUVDLEtBQUssR0FBQ04sWUFBWSxFQUFDTyxNQUFNLEdBQUcsQ0FBQztJQUM1QyxLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFDQyxPQUFPLEdBQUMsR0FBQ0YsTUFBTTtJQUMzQixNQUFNLENBQUVDLElBQUk7UUFDUixJQUFJLENBQUNYLDBEQUFnQjtZQUNqQixNQUFNLEVBQUM7bUJBQ0FTLEtBQUs7Z0JBQ1JGLGdCQUFnQixFQUFDLElBQUk7WUFDekIsQ0FBQztRQUNMLElBQUksQ0FBQ1IsdURBQWE7WUFDZCxNQUFNLEVBQUM7bUJBQ0FVLEtBQUs7WUFDWixDQUFDO1FBQ0wsSUFBSSxDQUFDUCwwREFBZ0I7WUFDakIsTUFBTSxFQUFDO21CQUNBTyxLQUFLO2dCQUNSSCxPQUFPLEVBQUMsSUFBSTtZQUNoQixDQUFDO1FBQ0wsSUFBSSxDQUFDTCw2REFBbUI7WUFDcEIsTUFBTSxFQUFDO21CQUNBUSxLQUFLO2dCQUNSSCxPQUFPLEVBQUMsS0FBSztZQUNqQixDQUFDOztZQUVELE1BQU0sQ0FBQ0csS0FBSzs7QUFFeEIsQ0FBQztBQUNELGlFQUFlRCxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9naW5fc2lnbnVwLy4vc3JjL3JlZHVjZXJzL2F1dGguanM/NDZhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSRUdJU1RFUl9GQUlMLCBSRUdJU1RFUl9TVUNDRVNTLCBSRU1PVkVfQVVUSF9MT0FESU5HLCBTRVRfQVVUSF9MT0FESU5HIH0gZnJvbSBcIi4uL2FjdGlvbi90eXBlXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9e1xuICAgIHVzZXI6bnVsbCxcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6ZmFsc2UsXG4gICAgbG9hZGluZzpmYWxzZSxcbiAgICByZWdpc3Rlcl9zdWNjZXNzOmZhbHNlXG59XG5cbmNvbnN0IGF1dGhSZWR1Y2VyPShzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xuICAgIGNvbnN0IHt0eXBlLHBheWxvYWR9PWFjdGlvblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFJFR0lTVEVSX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJfc3VjY2Vzczp0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgUkVHSVNURVJfRkFJTDpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBTRVRfQVVUSF9MT0FESU5HOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6dHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFJFTU9WRV9BVVRIX0xPQURJTkc6XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGF1dGhSZWR1Y2VyIl0sIm5hbWVzIjpbIlJFR0lTVEVSX0ZBSUwiLCJSRUdJU1RFUl9TVUNDRVNTIiwiUkVNT1ZFX0FVVEhfTE9BRElORyIsIlNFVF9BVVRIX0xPQURJTkciLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiaXNBdXRoZW50aWNhdGVkIiwibG9hZGluZyIsInJlZ2lzdGVyX3N1Y2Nlc3MiLCJhdXRoUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducers/auth.js\n");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/reducers/auth.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    auth: _auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxQztBQUNKO0FBR2pDLGlFQUFlQSxzREFBZSxDQUFDLENBQUM7SUFDNUJFLElBQUksRUFBQ0QsNkNBQVk7QUFDckIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9naW5fc2lnbnVwLy4vc3JjL3JlZHVjZXJzL2luZGV4LmpzPzVjMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGF1dGhSZWR1Y2VycyBmcm9tICcuL2F1dGgnXG5cblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICBhdXRoOmF1dGhSZWR1Y2Vyc1xufSkiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiYXV0aFJlZHVjZXJzIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducers/index.js\n");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeStore\": () => (/* binding */ initializeStore),\n/* harmony export */   \"useStore\": () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/index */ \"./src/reducers/index.js\");\n\n\n\n\n\nlet store1;\nfunction initStore(initialState) {\n    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], initialState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_3___default()))));\n}\nconst initializeStore = (preloadedState)=>{\n    let _store = store1 ?? initStore(preloadedState);\n    // After navigating to a page with an initial Redux state, merge that state\n    // with the current state in the store, and create a new store\n    if (preloadedState && store1) {\n        _store = initStore({\n            ...store1.getState(),\n            ...preloadedState\n        });\n        // Reset the current store\n        store1 = undefined;\n    }\n    // For SSG and SSR always create a new store\n    if (true) return _store;\n    // Create the store once in the client\n    if (!store1) store1 = _store;\n    return _store;\n};\nfunction useStore(initialState) {\n    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeStore(initialState)\n    , [\n        initialState\n    ]);\n    return store;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDcUI7QUFDVTtBQUNyQjtBQUNGO0FBRXZDLEdBQUcsQ0FBQ00sTUFBSztTQUVBQyxTQUFTLENBQUNDLFlBQVksRUFBRSxDQUFDO0lBQ2hDLE1BQU0sQ0FBQ1Asa0RBQVcsQ0FDaEJJLHVEQUFRLEVBQ1JHLFlBQVksRUFDWkwsNkVBQW1CLENBQUNELHNEQUFlLENBQUNFLG9EQUFlO0FBRXZELENBQUM7QUFFTSxLQUFLLENBQUNLLGVBQWUsSUFBSUMsY0FBYyxHQUFLLENBQUM7SUFDbEQsR0FBRyxDQUFDQyxNQUFNLEdBQUdMLE1BQUssSUFBSUMsU0FBUyxDQUFDRyxjQUFjO0lBRTlDLEVBQTJFO0lBQzNFLEVBQThEO0lBQzlELEVBQUUsRUFBRUEsY0FBYyxJQUFJSixNQUFLLEVBQUUsQ0FBQztRQUM1QkssTUFBTSxHQUFHSixTQUFTLENBQUMsQ0FBQztlQUNmRCxNQUFLLENBQUNNLFFBQVE7ZUFDZEYsY0FBYztRQUNuQixDQUFDO1FBQ0QsRUFBMEI7UUFDMUJKLE1BQUssR0FBR08sU0FBUztJQUNuQixDQUFDO0lBRUQsRUFBNEM7SUFDNUMsRUFBRSxFQUFFLElBQTZCLEVBQUUsTUFBTSxDQUFDRixNQUFNO0lBQ2hELEVBQXNDO0lBQ3RDLEVBQUUsR0FBR0wsTUFBSyxFQUFFQSxNQUFLLEdBQUdLLE1BQU07SUFFMUIsTUFBTSxDQUFDQSxNQUFNO0FBQ2YsQ0FBQztBQUVNLFNBQVNHLFFBQVEsQ0FBQ04sWUFBWSxFQUFFLENBQUM7SUFDdEMsS0FBSyxDQUFDRixLQUFLLEdBQUdOLDhDQUFPLEtBQU9TLGVBQWUsQ0FBQ0QsWUFBWTtNQUFHLENBQUNBO1FBQUFBLFlBQVk7SUFBQSxDQUFDO0lBQ3pFLE1BQU0sQ0FBQ0YsS0FBSztBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2dpbl9zaWdudXAvLi9zcmMvc3RvcmUuanM/Y2RhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2luZGV4J1xuXG5sZXQgc3RvcmVcblxuZnVuY3Rpb24gaW5pdFN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlcnMsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxuXG4gIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcbiAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxuICAgIH0pXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXG5cbiAgcmV0dXJuIF9zdG9yZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG4gIHJldHVybiBzdG9yZVxufSJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwidGh1bmtNaWRkbGV3YXJlIiwicmVkdWNlcnMiLCJzdG9yZSIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSIsImluaXRpYWxpemVTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VTdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();