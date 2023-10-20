"use strict";
(() => {
var exports = {};
exports.id = 348;
exports.ids = [348];
exports.modules = {

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 61761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/rating/route.tsx
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./src/axios/serverConfig.ts
var serverConfig = __webpack_require__(2043);
;// CONCATENATED MODULE: ./src/app/api/rating/route.tsx

async function POST(request) {
    try {
        const { value, device, users_permissions_user } = await request.json();
        const res = await serverConfig/* $apiServer_CMS */.u.post("/ratings", {
            data: {
                value,
                device: device,
                users_permissions_user: users_permissions_user
            }
        });
        if (res) {
            const ratings = await serverConfig/* $apiServer_CMS */.u.get("/ratings", {
                params: {
                    filters: {
                        device: device
                    }
                }
            });
            const deviceRating = ratings.data.data.reduce((sum, item)=>sum + item.attributes.value, 0) / ratings.data.data.length;
            serverConfig/* $apiServer_CMS */.u.put(`/devices/${device}`, {
                data: {
                    deviceRating
                }
            });
        }
        return new Response("ok", {
            status: 200
        });
    } catch (e) {
        console.log(e.message);
        return new Response("error", {
            status: 500
        });
    }
}
async function PUT(request) {
    const { value, id, device } = await request.json();
    try {
        const res = await serverConfig/* $apiServer_CMS */.u.put(`/ratings/${id}`, {
            data: {
                value
            }
        });
        if (res) {
            const ratings = await serverConfig/* $apiServer_CMS */.u.get("/ratings", {
                params: {
                    filters: {
                        device: device
                    }
                }
            });
            const deviceRating = ratings.data.data.reduce((sum, item)=>sum + item.attributes.value, 0) / ratings.data.data.length;
            serverConfig/* $apiServer_CMS */.u.put(`/devices/${device}`, {
                data: {
                    deviceRating
                }
            });
        }
        return new Response("ok", {
            status: 200
        });
    } catch (e) {
        console.error(e);
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Frating%2Froute&name=app%2Fapi%2Frating%2Froute&pagePath=private-next-app-dir%2Fapi%2Frating%2Froute.tsx&appDir=C%3A%5CUsers%5CNikolai%5CDesktop%5CProjects%5CNext-Strapi%5Cnext%5Csrc%5Capp&appPaths=%2Fapi%2Frating%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/rating/route",
        pathname: "/api/rating",
        filename: "route",
        bundlePath: "app/api/rating/route"
    },
    resolvedPagePath: "C:\\Users\\Nikolai\\Desktop\\Projects\\Next-Strapi\\next\\src\\app\\api\\rating\\route.tsx",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/rating/route";


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 2043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ $apiServer_CMS)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48760);
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40063);
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_headers__WEBPACK_IMPORTED_MODULE_0__);


const $apiServer_CMS = axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.create({
    baseURL: "http://127.0.0.1:1337/api",
    withCredentials: true
});
$apiServer_CMS.interceptors.request.use(function(config) {
    const cookie = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();
    const token = cookie.get("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token.value}`;
    }
    return config;
}, function(error) {
    console.error(error.status);
    return Promise.reject(error);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [326,527,501], () => (__webpack_exec__(61761)));
module.exports = __webpack_exports__;

})();