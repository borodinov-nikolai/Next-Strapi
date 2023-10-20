"use strict";
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 34226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92897);
/* harmony import */ var _redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50222);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79636);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68602);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const ToCartBtn = ({ item })=>{
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
    const [messageApi, contextHolder] = antd_lib_message__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP.useMessage();
    const success = ()=>{
        messageApi.open({
            type: "success",
            content: "Товар добавлен в корзину!"
        });
    };
    const addToCart = async (e)=>{
        e.stopPropagation();
        dispatch((0,_redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__/* .addItem */ .jX)({
            ...item,
            count: 1
        }));
        success();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            contextHolder,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default()), {
                onClick: (e)=>addToCart(e),
                children: "В корзину"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToCartBtn);


/***/ }),

/***/ 64437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Nikolai\Desktop\Projects\Next-Strapi\next\src\components\СatalogPage\ProductCard\toCartBtn\index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;