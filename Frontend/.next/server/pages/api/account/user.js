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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/index */ \"./src/config/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'GET') {\n        const cookies = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie ?? '');\n        const access = cookies.access ?? false;\n        console.log(\"access\", access);\n        if (access == false) {\n            return res.status(404).json({\n                error: \"User unauthorize to make this request\"\n            });\n        }\n        try {\n            const apiRes = await fetch(`http://127.0.0.1:8000/api/account/userView`, {\n                method: \"GET\",\n                headers: {\n                    \"Accept\": 'application/json',\n                    \"Authorization\": `Bearer ${access}`\n                }\n            });\n            console.log(apiRes.status);\n            const data = apiRes.json();\n            console.log(data);\n            if (apiRes.status === 200) {\n                return res.status(200).json({\n                    user: data.user\n                });\n            } else {\n                return res.status(apiRes.status).json({\n                    error: data.error\n                });\n            }\n        } catch (err) {\n            console.log(err);\n            return res.status(500).json({\n                error: \"Something went wrong in retriving user\"\n            });\n        }\n    } else {\n        res.setHeader('Allow', [\n            'GET'\n        ]);\n        return res.status(405).json({\n            error: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJCO0FBQ2tCO0FBRzdDLGlFQUFNLE9BQWdCRSxHQUFHLEVBQUNDLEdBQUcsR0FBRyxDQUFDO0lBQzdCLEVBQUUsRUFBQ0QsR0FBRyxDQUFDRSxNQUFNLEtBQUcsQ0FBSyxNQUFDLENBQUM7UUFDbkIsS0FBSyxDQUFDQyxPQUFPLEdBQUNMLG1EQUFZLENBQUNFLEdBQUcsQ0FBQ0ssT0FBTyxDQUFDUCxNQUFNLElBQUUsQ0FBRTtRQUNqRCxLQUFLLENBQUNRLE1BQU0sR0FBQ0gsT0FBTyxDQUFDRyxNQUFNLElBQUUsS0FBSztRQUNsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUSxTQUFDRixNQUFNO1FBQzNCLEVBQUUsRUFBQ0EsTUFBTSxJQUFFLEtBQUssRUFBQyxDQUFDO1lBQ2QsTUFBTSxDQUFDTCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUN6QkMsS0FBSyxFQUFDLENBQXVDO1lBQ2pELENBQUM7UUFDTCxDQUFDO1FBQ0QsR0FBRyxFQUFDO1lBQ0EsS0FBSyxDQUFDQyxNQUFNLEdBQUMsS0FBSyxDQUFDQyxLQUFLLEVBQUUsMENBQTBDLEdBQUUsQ0FBQztnQkFDbkVYLE1BQU0sRUFBQyxDQUFLO2dCQUNaRyxPQUFPLEVBQUMsQ0FBQztvQkFDTCxDQUFRLFNBQUMsQ0FBa0I7b0JBQzNCLENBQWUsaUJBQUUsT0FBTyxFQUFFQyxNQUFNO2dCQUNwQyxDQUFDO1lBQ0wsQ0FBQztZQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDSCxNQUFNO1lBQ3pCLEtBQUssQ0FBQ0ssSUFBSSxHQUFFRixNQUFNLENBQUNGLElBQUk7WUFDdkJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxJQUFJO1lBQ2hCLEVBQUUsRUFBQ0YsTUFBTSxDQUFDSCxNQUFNLEtBQUcsR0FBRyxFQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQ1IsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFDekJLLElBQUksRUFBQ0QsSUFBSSxDQUFDQyxJQUFJO2dCQUNsQixDQUFDO1lBQ0wsQ0FBQyxNQUFJLENBQUM7Z0JBQ0YsTUFBTSxDQUFDZCxHQUFHLENBQUNRLE1BQU0sQ0FBQ0csTUFBTSxDQUFDSCxNQUFNLEVBQUVDLElBQUksQ0FBQyxDQUFDO29CQUNuQ0MsS0FBSyxFQUFDRyxJQUFJLENBQUNILEtBQUs7Z0JBQ3BCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxNQUFLLEVBQUNLLEdBQUcsRUFBQyxDQUFDO1lBQ1JULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxHQUFHO1lBQ2YsTUFBTSxDQUFDZixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUN6QkMsS0FBSyxFQUFDLENBQXdDO1lBQ2xELENBQUM7UUFDTCxDQUFDO0lBRUwsQ0FBQyxNQUFJLENBQUM7UUFDRlYsR0FBRyxDQUFDZ0IsU0FBUyxDQUFDLENBQU8sUUFBQyxDQUFDO1lBQUEsQ0FBSztRQUFBLENBQUM7UUFDN0IsTUFBTSxDQUFDaEIsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUN6QkMsS0FBSyxHQUFFLE9BQU8sRUFBRVgsR0FBRyxDQUFDRSxNQUFNLENBQUMsWUFBWTtRQUMzQyxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2dpbl9zaWdudXAvLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvdXNlci5qcz85NjVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xuaW1wb3J0IHtBUFBfVVJMfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSxyZXMpPT57XG4gICAgaWYocmVxLm1ldGhvZD09PSdHRVQnKXtcbiAgICAgICAgY29uc3QgY29va2llcz1jb29raWUucGFyc2UocmVxLmhlYWRlcnMuY29va2llPz8nJylcbiAgICAgICAgY29uc3QgYWNjZXNzPWNvb2tpZXMuYWNjZXNzPz9mYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhY2Nlc3NcIixhY2Nlc3MpXG4gICAgICAgIGlmKGFjY2Vzcz09ZmFsc2Upe1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtcbiAgICAgICAgICAgICAgICBlcnJvcjpcIlVzZXIgdW5hdXRob3JpemUgdG8gbWFrZSB0aGlzIHJlcXVlc3RcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBhcGlSZXM9YXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvYWNjb3VudC91c2VyVmlld2Ase1xuICAgICAgICAgICAgICAgIG1ldGhvZDpcIkdFVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOidhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6YEJlYXJlciAke2FjY2Vzc31gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFwaVJlcy5zdGF0dXMpXG4gICAgICAgICAgICBjb25zdCBkYXRhID1hcGlSZXMuanNvbigpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgaWYoYXBpUmVzLnN0YXR1cz09PTIwMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcjpkYXRhLnVzZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoYXBpUmVzLnN0YXR1cykuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOmRhdGEuZXJyb3JcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgZXJyb3I6XCJTb21ldGhpbmcgd2VudCB3cm9uZyBpbiByZXRyaXZpbmcgdXNlclwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgIFxuICAgIH1lbHNle1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsWydHRVQnXSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7XG4gICAgICAgICAgICBlcnJvcjpgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgXG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJjb29raWUiLCJBUFBfVVJMIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29va2llcyIsInBhcnNlIiwiaGVhZGVycyIsImFjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJhcGlSZXMiLCJmZXRjaCIsImRhdGEiLCJ1c2VyIiwiZXJyIiwic2V0SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/account/user.js\n");

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