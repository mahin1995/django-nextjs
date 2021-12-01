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
exports.id = "pages/api/account/verify";
exports.ids = ["pages/api/account/verify"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL)\n/* harmony export */ });\nconst API_URL = \"http://127.0.0.1:8000\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxLQUFLLENBQUNBLE9BQU8sR0FBQ0MsdUJBQStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9naW5fc2lnbnVwLy4vc3JjL2NvbmZpZy9pbmRleC5qcz8zM2E2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfVVJMPXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkw7Il0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/index.js\n");

/***/ }),

/***/ "./src/pages/api/account/verify.js":
/*!*****************************************!*\
  !*** ./src/pages/api/account/verify.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/index */ \"./src/config/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'GET') {\n        const cookies = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie ?? \"\");\n        const access = cookies.access ?? false;\n        if (access === false) {\n            return res.status(403).json({\n                error: 'User forbidden from makeing the request'\n            });\n        }\n        const body = JSON.stringify({\n            token: access\n        });\n        try {\n            const apiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/api/token/verify/`, {\n                method: 'POST',\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-type': 'application/json'\n                },\n                body: body\n            });\n            // console.log(apiRes)\n            if (apiRes.status === 200) {\n                return res.status(200).json({\n                    success: 'Authenticate successfully'\n                });\n            } else {\n                return res.status(apiRes.status).json({\n                    error: \"Failed to authenticated\"\n                });\n            }\n        } catch (e) {\n            return res.status(500).json({\n                error: \"Something went wrong trying  to  authenticated\"\n            });\n        }\n    } else {\n        res.setHeader('Allow', [\n            'GET'\n        ]);\n        return res.status(405).json({\n            error: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvdmVyaWZ5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkI7QUFDa0I7QUFFN0MsaUVBQU0sT0FBZ0JFLEdBQUcsRUFBQ0MsR0FBRyxHQUFHLENBQUM7SUFDN0IsRUFBRSxFQUFDRCxHQUFHLENBQUNFLE1BQU0sS0FBRyxDQUFLLE1BQUMsQ0FBQztRQUNuQixLQUFLLENBQUNDLE9BQU8sR0FBQ0wsbURBQVksQ0FBQ0UsR0FBRyxDQUFDSyxPQUFPLENBQUNQLE1BQU0sSUFBRSxDQUFFO1FBQ2pELEtBQUssQ0FBQ1EsTUFBTSxHQUFDSCxPQUFPLENBQUNHLE1BQU0sSUFBRSxLQUFLO1FBRWxDLEVBQUUsRUFBQ0EsTUFBTSxLQUFHLEtBQUssRUFBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDTCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUN6QkMsS0FBSyxFQUFFLENBQXlDO1lBQ3BELENBQUM7UUFDTCxDQUFDO1FBQ0QsS0FBSyxDQUFDQyxJQUFJLEdBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7WUFDeEJDLEtBQUssRUFBQ1AsTUFBTTtRQUNoQixDQUFDO1FBQ0QsR0FBRyxFQUFDO1lBQ0EsS0FBSyxDQUFDUSxNQUFNLEdBQUMsS0FBSyxDQUFDQyxLQUFLLElBQUloQixrREFBTyxDQUFDLGtCQUFrQixHQUFFLENBQUM7Z0JBQ3JERyxNQUFNLEVBQUMsQ0FBTTtnQkFDYkcsT0FBTyxFQUFDLENBQUM7b0JBQ0wsQ0FBUSxTQUFDLENBQWtCO29CQUMzQixDQUFjLGVBQUMsQ0FBa0I7Z0JBQ3JDLENBQUM7Z0JBQ0RLLElBQUksRUFBQ0EsSUFBSTtZQUNiLENBQUM7WUFDRCxFQUFzQjtZQUN0QixFQUFFLEVBQUNJLE1BQU0sQ0FBQ1AsTUFBTSxLQUFHLEdBQUcsRUFBQyxDQUFDO2dCQUNwQixNQUFNLENBQUNOLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pCUSxPQUFPLEVBQUMsQ0FBMkI7Z0JBQ3ZDLENBQUM7WUFDTCxDQUFDLE1BQUksQ0FBQztnQkFDRixNQUFNLENBQUNmLEdBQUcsQ0FBQ00sTUFBTSxDQUFDTyxNQUFNLENBQUNQLE1BQU0sRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQ25DQyxLQUFLLEVBQUMsQ0FBeUI7Z0JBQ25DLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxNQUFLLEVBQUNRLENBQUMsRUFBQyxDQUFDO1lBRU4sTUFBTSxDQUFDaEIsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFDekJDLEtBQUssRUFBQyxDQUFnRDtZQUMxRCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsTUFBSSxDQUFDO1FBQ0ZSLEdBQUcsQ0FBQ2lCLFNBQVMsQ0FBQyxDQUFPLFFBQUMsQ0FBQztZQUFBLENBQUs7UUFBQSxDQUFDO1FBQzdCLE1BQU0sQ0FBQ2pCLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFDekJDLEtBQUssR0FBRSxPQUFPLEVBQUVULEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVk7UUFDM0MsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9naW5fc2lnbnVwLy4vc3JjL3BhZ2VzL2FwaS9hY2NvdW50L3ZlcmlmeS5qcz8wNzdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xuaW1wb3J0IHtBUElfVVJMfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEscmVzKT0+e1xuICAgIGlmKHJlcS5tZXRob2Q9PT0nR0VUJyl7XG4gICAgICAgIGNvbnN0IGNvb2tpZXM9Y29va2llLnBhcnNlKHJlcS5oZWFkZXJzLmNvb2tpZT8/XCJcIilcbiAgICAgICAgY29uc3QgYWNjZXNzPWNvb2tpZXMuYWNjZXNzPz9mYWxzZVxuICAgICAgXG4gICAgICAgIGlmKGFjY2Vzcz09PWZhbHNlKXtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7XG4gICAgICAgICAgICAgICAgZXJyb3IgOidVc2VyIGZvcmJpZGRlbiBmcm9tIG1ha2VpbmcgdGhlIHJlcXVlc3QnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJvZHkgPUpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHRva2VuOmFjY2Vzc1xuICAgICAgICB9KVxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBhcGlSZXM9YXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL3Rva2VuL3ZlcmlmeS9gLHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzonYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTpib2R5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXBpUmVzKVxuICAgICAgICAgICAgaWYoYXBpUmVzLnN0YXR1cz09PTIwMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczonQXV0aGVudGljYXRlIHN1Y2Nlc3NmdWxseSdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoYXBpUmVzLnN0YXR1cykuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOlwiRmFpbGVkIHRvIGF1dGhlbnRpY2F0ZWRcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1jYXRjaChlKXtcbiAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICBlcnJvcjpcIlNvbWV0aGluZyB3ZW50IHdyb25nIHRyeWluZyAgdG8gIGF1dGhlbnRpY2F0ZWRcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsWydHRVQnXSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7XG4gICAgICAgICAgICBlcnJvcjpgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgXG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJjb29raWUiLCJBUElfVVJMIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29va2llcyIsInBhcnNlIiwiaGVhZGVycyIsImFjY2VzcyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW4iLCJhcGlSZXMiLCJmZXRjaCIsInN1Y2Nlc3MiLCJlIiwic2V0SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/account/verify.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/account/verify.js"));
module.exports = __webpack_exports__;

})();