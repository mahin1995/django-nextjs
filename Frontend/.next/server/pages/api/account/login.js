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
exports.id = "pages/api/account/login";
exports.ids = ["pages/api/account/login"];
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

/***/ "./src/pages/api/account/login.js":
/*!****************************************!*\
  !*** ./src/pages/api/account/login.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/index */ \"./src/config/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'POST') {\n        const { username , password  } = req.body;\n        const body = JSON.stringify({\n            username,\n            password\n        });\n        try {\n            const apiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/api/gettoken/`, {\n                method: 'POST',\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                },\n                body: body\n            });\n            const data = await apiRes.json();\n            console.log(data);\n            if (apiRes.status === 200) {\n                res.setHeader('Set-Cookie', [\n                    cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize('access', data.access, {\n                        httpOnly: true,\n                        secure: \"development\" !== 'development',\n                        maxAge: 60 * 60 * 24,\n                        sameSite: 'strict',\n                        path: '/api/'\n                    }),\n                    cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize('refresh', data.refresh, {\n                        httpOnly: true,\n                        secure: \"development\" !== 'development',\n                        maxAge: 60 * 60 * 24,\n                        sameSite: 'strict',\n                        path: '/api/'\n                    })\n                ]);\n                return res.status(200).json({\n                    success: 'Loged in sccessfully'\n                });\n            } else {\n                return res.status(apiRes.status).json({\n                    error: data.error\n                });\n            }\n        } catch (e) {\n            return res.status(500).json({\n                error: `${e}+\" ######  Something went wrong when authenticating\"`\n            });\n        }\n    } else {\n        res.setHeader('Allow', [\n            'POST'\n        ]);\n        return res.status(405).json({\n            error: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQjtBQUNrQjtBQUU3QyxpRUFBTSxPQUFnQkUsR0FBRyxFQUFDQyxHQUFHLEdBQUcsQ0FBQztJQUM3QixFQUFFLEVBQUNELEdBQUcsQ0FBQ0UsTUFBTSxLQUFHLENBQU0sT0FBQyxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxDQUFDQyxDQUFBQSxRQUFRLEdBQUNDLFFBQVEsR0FBQyxHQUFDSixHQUFHLENBQUNLLElBQUk7UUFDbEMsS0FBSyxDQUFDQSxJQUFJLEdBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUNKO1lBQUFBLFFBQVE7WUFBQ0MsUUFBUTtRQUFBLENBQUM7UUFFOUMsR0FBRyxFQUFDO1lBQ0ksS0FBSyxDQUFFSSxNQUFNLEdBQUMsS0FBSyxDQUFDQyxLQUFLLElBQUlWLGtEQUFPLENBQUMsY0FBYyxHQUFFLENBQUM7Z0JBQ2xERyxNQUFNLEVBQUMsQ0FBTTtnQkFDYlEsT0FBTyxFQUFDLENBQUM7b0JBQ0wsQ0FBUSxTQUFDLENBQWtCO29CQUMzQixDQUFjLGVBQUMsQ0FBa0I7Z0JBQ3JDLENBQUM7Z0JBQ0RMLElBQUksRUFBQ0EsSUFBSTtZQUNiLENBQUM7WUFDRCxLQUFLLENBQUNNLElBQUksR0FBQyxLQUFLLENBQUNILE1BQU0sQ0FBQ0ksSUFBSTtZQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUk7WUFDaEIsRUFBRSxFQUFDSCxNQUFNLENBQUNPLE1BQU0sS0FBRyxHQUFHLEVBQUMsQ0FBQztnQkFDaEJkLEdBQUcsQ0FBQ2UsU0FBUyxDQUFDLENBQVksYUFBQyxDQUFDO29CQUN4QmxCLHVEQUFnQixDQUNaLENBQVEsU0FBQ2EsSUFBSSxDQUFDTyxNQUFNLEVBQUMsQ0FBQzt3QkFDbEJDLFFBQVEsRUFBQyxJQUFJO3dCQUNiQyxNQUFNLEVBeEI5QyxDQUFhLGlCQXdCeUQsQ0FBYTt3QkFDM0NDLE1BQU0sRUFBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUU7d0JBQ2ZDLFFBQVEsRUFBQyxDQUFRO3dCQUNqQkMsSUFBSSxFQUFDLENBQU87b0JBQ2hCLENBQUM7b0JBRUx6Qix1REFBZ0IsQ0FDWixDQUFTLFVBQUNhLElBQUksQ0FBQ2EsT0FBTyxFQUFDLENBQUM7d0JBQ3BCTCxRQUFRLEVBQUMsSUFBSTt3QkFDYkMsTUFBTSxFQWpDOUMsQ0FBYSxpQkFpQ3lELENBQWE7d0JBQzNDQyxNQUFNLEVBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFO3dCQUNmQyxRQUFRLEVBQUMsQ0FBUTt3QkFDakJDLElBQUksRUFBQyxDQUFPO29CQUNoQixDQUFDO2dCQUVULENBQUM7Z0JBRUQsTUFBTSxDQUFDdEIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxFQUFFSCxJQUFJLENBQUMsQ0FBQztvQkFDekJhLE9BQU8sRUFBQyxDQUFzQjtnQkFDbEMsQ0FBQztZQUNULENBQUMsTUFBSSxDQUFDO2dCQUNGLE1BQU0sQ0FBQ3hCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDUCxNQUFNLENBQUNPLE1BQU0sRUFBRUgsSUFBSSxDQUFDLENBQUM7b0JBQ25DYyxLQUFLLEVBQUNmLElBQUksQ0FBQ2UsS0FBSztnQkFDcEIsQ0FBQztZQUNMLENBQUM7UUFDVCxDQUFDLENBQ0QsS0FBSyxFQUFDQyxDQUFDLEVBQUMsQ0FBQztZQUNMLE1BQU0sQ0FBQzFCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsRUFBRUgsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCYyxLQUFLLEtBQUlDLENBQUMsQ0FBQyxvREFBb0Q7WUFDbkUsQ0FBQztRQUNMLENBQUM7SUFDVCxDQUFDLE1BQUksQ0FBQztRQUNGMUIsR0FBRyxDQUFDZSxTQUFTLENBQUMsQ0FBTyxRQUFDLENBQUM7WUFBQSxDQUFNO1FBQUEsQ0FBQztRQUM5QixNQUFNLENBQUNmLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsRUFBRUgsSUFBSSxDQUFDLENBQUNjO1lBQUFBLEtBQUssR0FBRSxPQUFPLEVBQUUxQixHQUFHLENBQUNFLE1BQU0sQ0FBQyxZQUFZO1FBQUMsQ0FBQztJQUMxRSxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvZ2luX3NpZ251cC8uL3NyYy9wYWdlcy9hcGkvYWNjb3VudC9sb2dpbi5qcz8zNzZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xuaW1wb3J0IHtBUElfVVJMfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEscmVzKT0+e1xuICAgIGlmKHJlcS5tZXRob2Q9PT0nUE9TVCcpe1xuICAgICAgICAgICAgY29uc3Qge3VzZXJuYW1lLHBhc3N3b3JkfT1yZXEuYm9keTtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPUpTT04uc3RyaW5naWZ5KHt1c2VybmFtZSxwYXNzd29yZH0pXG4gICAgICAgICAgXG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICBhcGlSZXM9YXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL2dldHRva2VuL2Ase1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOidhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OmJvZHkgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGE9YXdhaXQgYXBpUmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgaWYoYXBpUmVzLnN0YXR1cz09PTIwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29raWUuc2VyaWFsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjY2VzcycsZGF0YS5hY2Nlc3Mse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBPbmx5OnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOnByb2Nlc3MuZW52Lk5PREVfRU5WIT09J2RldmVsb3BtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhBZ2U6NjAqNjAqMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZVNpdGU6J3N0cmljdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDonL2FwaS8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZS5zZXJpYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVmcmVzaCcsZGF0YS5yZWZyZXNoLHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwT25seTp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTpwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdkZXZlbG9wbWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4QWdlOjYwKjYwKjI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVTaXRlOidzdHJpY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6Jy9hcGkvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6J0xvZ2VkIGluIHNjY2Vzc2Z1bGx5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoYXBpUmVzLnN0YXR1cykuanNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ZGF0YS5lcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2goZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6YCR7ZX0rXCIgIyMjIyMjICBTb21ldGhpbmcgd2VudCB3cm9uZyB3aGVuIGF1dGhlbnRpY2F0aW5nXCJgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLFsnUE9TVCddKVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oe2Vycm9yOmBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiY29va2llIiwiQVBJX1VSTCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFwaVJlcyIsImZldGNoIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNldEhlYWRlciIsInNlcmlhbGl6ZSIsImFjY2VzcyIsImh0dHBPbmx5Iiwic2VjdXJlIiwibWF4QWdlIiwic2FtZVNpdGUiLCJwYXRoIiwicmVmcmVzaCIsInN1Y2Nlc3MiLCJlcnJvciIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/account/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/account/login.js"));
module.exports = __webpack_exports__;

})();