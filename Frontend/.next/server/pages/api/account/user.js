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
exports.id = "pages/api/account/user";
exports.ids = ["pages/api/account/user"];
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

/***/ "./src/pages/api/account/user.js":
/*!***************************************!*\
  !*** ./src/pages/api/account/user.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/index */ \"./src/config/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'GET') {\n        const cookies = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie ?? '');\n        const access = cookies.access ?? false;\n        console.log(access);\n        if (access == false) {\n            return res.status(404).json({\n                error: \"User unauthorize to make this request\"\n            });\n        }\n        try {\n            const apiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.APP_URL}/api/account/userView`, {\n                method: \"GET\",\n                headers: {\n                    \"Accept\": 'application/json',\n                    \"Authoriztion\": `Bearer ${access}`\n                }\n            });\n            const data = apiRes.json();\n            if (apiRes.status === 200) {\n                return res.status(200).json({\n                    user: data.user\n                });\n            } else {\n                return res.status(apiRes.status).json({\n                    error: data.error\n                });\n            }\n        } catch (err) {\n            return res.status(500).json({\n                error: \"Something went wrong in retriving user\"\n            });\n        }\n    } else {\n        res.setHeader('Allow', [\n            'GET'\n        ]);\n        return res.status(405).json({\n            error: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJCO0FBQ2tCO0FBRzdDLGlFQUFNLE9BQWdCRSxHQUFHLEVBQUNDLEdBQUcsR0FBRyxDQUFDO0lBQzdCLEVBQUUsRUFBQ0QsR0FBRyxDQUFDRSxNQUFNLEtBQUcsQ0FBSyxNQUFDLENBQUM7UUFDbkIsS0FBSyxDQUFDQyxPQUFPLEdBQUNMLG1EQUFZLENBQUNFLEdBQUcsQ0FBQ0ssT0FBTyxDQUFDUCxNQUFNLElBQUUsQ0FBRTtRQUNqRCxLQUFLLENBQUNRLE1BQU0sR0FBQ0gsT0FBTyxDQUFDRyxNQUFNLElBQUUsS0FBSztRQUNsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU07UUFDbEIsRUFBRSxFQUFDQSxNQUFNLElBQUUsS0FBSyxFQUFDLENBQUM7WUFDZCxNQUFNLENBQUNMLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCQyxLQUFLLEVBQUMsQ0FBdUM7WUFDakQsQ0FBQztRQUNMLENBQUM7UUFDRCxHQUFHLEVBQUM7WUFDQSxLQUFLLENBQUNDLE1BQU0sR0FBQyxLQUFLLENBQUNDLEtBQUssSUFBSWQsa0RBQU8sQ0FBQyxxQkFBcUIsR0FBRSxDQUFDO2dCQUN4REcsTUFBTSxFQUFDLENBQUs7Z0JBQ1pHLE9BQU8sRUFBQyxDQUFDO29CQUNMLENBQVEsU0FBQyxDQUFrQjtvQkFDM0IsQ0FBYyxnQkFBRSxPQUFPLEVBQUVDLE1BQU07Z0JBQ25DLENBQUM7WUFDTCxDQUFDO1lBQ0QsS0FBSyxDQUFDUSxJQUFJLEdBQUVGLE1BQU0sQ0FBQ0YsSUFBSTtZQUN2QixFQUFFLEVBQUNFLE1BQU0sQ0FBQ0gsTUFBTSxLQUFHLEdBQUcsRUFBQyxDQUFDO2dCQUNwQixNQUFNLENBQUNSLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pCSyxJQUFJLEVBQUNELElBQUksQ0FBQ0MsSUFBSTtnQkFDbEIsQ0FBQztZQUNMLENBQUMsTUFBSSxDQUFDO2dCQUNGLE1BQU0sQ0FBQ2QsR0FBRyxDQUFDUSxNQUFNLENBQUNHLE1BQU0sQ0FBQ0gsTUFBTSxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFDbkNDLEtBQUssRUFBQ0csSUFBSSxDQUFDSCxLQUFLO2dCQUNwQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsTUFBSyxFQUFDSyxHQUFHLEVBQUMsQ0FBQztZQUNSLE1BQU0sQ0FBQ2YsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFDekJDLEtBQUssRUFBQyxDQUF3QztZQUNsRCxDQUFDO1FBQ0wsQ0FBQztJQUVMLENBQUMsTUFBSSxDQUFDO1FBQ0ZWLEdBQUcsQ0FBQ2dCLFNBQVMsQ0FBQyxDQUFPLFFBQUMsQ0FBQztZQUFBLENBQUs7UUFBQSxDQUFDO1FBQzdCLE1BQU0sQ0FBQ2hCLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFDekJDLEtBQUssR0FBRSxPQUFPLEVBQUVYLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVk7UUFDM0MsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9naW5fc2lnbnVwLy4vc3JjL3BhZ2VzL2FwaS9hY2NvdW50L3VzZXIuanM/OTY1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcbmltcG9ydCB7QVBQX1VSTH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2luZGV4J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEscmVzKT0+e1xuICAgIGlmKHJlcS5tZXRob2Q9PT0nR0VUJyl7XG4gICAgICAgIGNvbnN0IGNvb2tpZXM9Y29va2llLnBhcnNlKHJlcS5oZWFkZXJzLmNvb2tpZT8/JycpXG4gICAgICAgIGNvbnN0IGFjY2Vzcz1jb29raWVzLmFjY2Vzcz8/ZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjY2VzcylcbiAgICAgICAgaWYoYWNjZXNzPT1mYWxzZSl7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xuICAgICAgICAgICAgICAgIGVycm9yOlwiVXNlciB1bmF1dGhvcml6ZSB0byBtYWtlIHRoaXMgcmVxdWVzdFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IGFwaVJlcz1hd2FpdCBmZXRjaChgJHtBUFBfVVJMfS9hcGkvYWNjb3VudC91c2VyVmlld2Ase1xuICAgICAgICAgICAgICAgIG1ldGhvZDpcIkdFVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOidhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpenRpb25cIjpgQmVhcmVyICR7YWNjZXNzfWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9YXBpUmVzLmpzb24oKVxuICAgICAgICAgICAgaWYoYXBpUmVzLnN0YXR1cz09PTIwMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcjpkYXRhLnVzZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoYXBpUmVzLnN0YXR1cykuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOmRhdGEuZXJyb3JcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgZXJyb3I6XCJTb21ldGhpbmcgd2VudCB3cm9uZyBpbiByZXRyaXZpbmcgdXNlclwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgIFxuICAgIH1lbHNle1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsWydHRVQnXSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7XG4gICAgICAgICAgICBlcnJvcjpgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgXG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJjb29raWUiLCJBUFBfVVJMIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29va2llcyIsInBhcnNlIiwiaGVhZGVycyIsImFjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJhcGlSZXMiLCJmZXRjaCIsImRhdGEiLCJ1c2VyIiwiZXJyIiwic2V0SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/account/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/account/user.js"));
module.exports = __webpack_exports__;

})();