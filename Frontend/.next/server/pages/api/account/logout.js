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
exports.id = "pages/api/account/logout";
exports.ids = ["pages/api/account/logout"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "./src/pages/api/account/logout.js":
/*!*****************************************!*\
  !*** ./src/pages/api/account/logout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        res.setHeader('Set-Cookie', [\n            cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize('access', '', {\n                httpOnly: true,\n                secure: \"development\" !== 'development',\n                expires: new Date(0),\n                sameSite: 'strict',\n                path: '/api/'\n            }),\n            cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize('refresh', '', {\n                httpOnly: true,\n                secure: \"development\" !== 'development',\n                expires: new Date(0),\n                sameSite: 'strict',\n                path: '/api/'\n            })\n        ]);\n        return res.status(200).json({\n            success: 'successfully logged out'\n        });\n    } else {\n        res.setHeader('Allow', [\n            'POST'\n        ]);\n        return res.status(405).json({\n            error: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvbG9nb3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUczQixpRUFBTSxPQUFnQkMsR0FBRyxFQUFDQyxHQUFHLEdBQUcsQ0FBQztJQUM3QixFQUFFLEVBQUNELEdBQUcsQ0FBQ0UsTUFBTSxLQUFHLENBQU0sT0FBQyxDQUFDO1FBQ3BCRCxHQUFHLENBQUNFLFNBQVMsQ0FBQyxDQUFZLGFBQUMsQ0FBQztZQUN4QkosdURBQWdCLENBQ1osQ0FBUSxTQUFDLENBQUUsR0FBQyxDQUFDO2dCQUNUTSxRQUFRLEVBQUMsSUFBSTtnQkFDYkMsTUFBTSxFQVQxQixDQUFhLGlCQVNxQyxDQUFhO2dCQUMzQ0MsT0FBTyxFQUFDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCQyxRQUFRLEVBQUMsQ0FBUTtnQkFDakJDLElBQUksRUFBQyxDQUFPO1lBQ2hCLENBQUM7WUFFTFgsdURBQWdCLENBQ1osQ0FBUyxVQUFDLENBQUUsR0FBQyxDQUFDO2dCQUNWTSxRQUFRLEVBQUMsSUFBSTtnQkFDYkMsTUFBTSxFQWxCMUIsQ0FBYSxpQkFrQnFDLENBQWE7Z0JBQzNDQyxPQUFPLEVBQUMsR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBQztnQkFDbEJDLFFBQVEsRUFBQyxDQUFRO2dCQUNqQkMsSUFBSSxFQUFDLENBQU87WUFDaEIsQ0FBQztRQUVULENBQUM7UUFFRCxNQUFNLENBQUNULEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFDekJDLE9BQU8sRUFBQyxDQUF5QjtRQUNyQyxDQUFDO0lBQ0wsQ0FBQyxNQUFJLENBQUM7UUFDRlosR0FBRyxDQUFDRSxTQUFTLENBQUMsQ0FBTyxRQUFDLENBQUM7WUFBQSxDQUFNO1FBQUEsQ0FBQztRQUM5QixNQUFNLENBQUNGLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFDekJFLEtBQUssR0FBRSxPQUFPLEVBQUVkLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVk7UUFDM0MsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9naW5fc2lnbnVwLy4vc3JjL3BhZ2VzL2FwaS9hY2NvdW50L2xvZ291dC5qcz81ZDNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEscmVzKT0+e1xuICAgIGlmKHJlcS5tZXRob2Q9PT1cIlBPU1RcIil7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLFtcbiAgICAgICAgICAgIGNvb2tpZS5zZXJpYWxpemUoXG4gICAgICAgICAgICAgICAgJ2FjY2VzcycsJycse1xuICAgICAgICAgICAgICAgICAgICBodHRwT25seTp0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzZWN1cmU6cHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0nZGV2ZWxvcG1lbnQnLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzOm5ldyBEYXRlKDApLFxuICAgICAgICAgICAgICAgICAgICBzYW1lU2l0ZTonc3RyaWN0JyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDonL2FwaS8nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNvb2tpZS5zZXJpYWxpemUoXG4gICAgICAgICAgICAgICAgJ3JlZnJlc2gnLCcnLHtcbiAgICAgICAgICAgICAgICAgICAgaHR0cE9ubHk6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJlOnByb2Nlc3MuZW52Lk5PREVfRU5WIT09J2RldmVsb3BtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlczpuZXcgRGF0ZSgwKSxcbiAgICAgICAgICAgICAgICAgICAgc2FtZVNpdGU6J3N0cmljdCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6Jy9hcGkvJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgXSlcblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgc3VjY2Vzczonc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBvdXQnXG4gICAgICAgIH0pXG4gICAgfWVsc2V7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JyxbJ1BPU1QnXSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7XG4gICAgICAgICAgICBlcnJvcjpgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgXG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJjb29raWUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXRIZWFkZXIiLCJzZXJpYWxpemUiLCJodHRwT25seSIsInNlY3VyZSIsImV4cGlyZXMiLCJEYXRlIiwic2FtZVNpdGUiLCJwYXRoIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/account/logout.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/account/logout.js"));
module.exports = __webpack_exports__;

})();