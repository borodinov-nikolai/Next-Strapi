exports.id = 834;
exports.ids = [834];
exports.modules = {

/***/ 8026:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 34791));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1512));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 96215));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 35155));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 35185));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 39371));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 60507));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 40837))

/***/ }),

/***/ 22958:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 82825, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 1512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64021);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const StyledComponentsRegistry = ({ children })=>{
    const cache = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__.createCache)(), [
        _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__.createCache
    ]);
    (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useServerInsertedHTML)(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
            id: "antd",
            dangerouslySetInnerHTML: {
                __html: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__.extractStyle)(cache, true)
            }
        }));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__.StyleProvider, {
        cache: cache,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledComponentsRegistry);


/***/ }),

/***/ 96013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ $apiClient_CMS),
/* harmony export */   W: () => (/* binding */ $apiClient_NEXT)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93258);

const $apiClient_NEXT = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: "http://127.0.0.1:3000/api"
});
const $apiClient_CMS = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: "http://127.0.0.1:1337/api"
});


/***/ }),

/***/ 60507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/antd/lib/modal/index.js
var modal = __webpack_require__(53275);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/LoginOutlined.js
var LoginOutlined = __webpack_require__(90992);
// EXTERNAL MODULE: ./node_modules/antd/lib/button/index.js
var lib_button = __webpack_require__(79636);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);
// EXTERNAL MODULE: ./node_modules/antd/lib/checkbox/index.js
var lib_checkbox = __webpack_require__(84533);
// EXTERNAL MODULE: ./node_modules/antd/lib/form/index.js
var lib_form = __webpack_require__(77829);
// EXTERNAL MODULE: ./node_modules/antd/lib/input/index.js
var input = __webpack_require__(72781);
// EXTERNAL MODULE: ./node_modules/antd/lib/result/index.js
var result = __webpack_require__(54060);
// EXTERNAL MODULE: ./src/components/Header/MobileNavbar/auth/form/AuthForm.module.scss
var AuthForm_module = __webpack_require__(55035);
var AuthForm_module_default = /*#__PURE__*/__webpack_require__.n(AuthForm_module);
// EXTERNAL MODULE: ./src/services/clientApi.ts
var clientApi = __webpack_require__(63590);
;// CONCATENATED MODULE: ./src/components/Header/MobileNavbar/auth/form/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const AuthForm = ({ registration, setRegistration })=>{
    const [login, setLogin] = react_default().useState("");
    const [email, setEmail] = react_default().useState("");
    const [password, setPassword] = react_default().useState("");
    const [success, setSuccess] = react_default().useState(false);
    if (!registration) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib_form/* default */.Z, {
            className: (AuthForm_module_default()).root,
            name: "basic",
            labelCol: {
                span: 8
            },
            wrapperCol: {
                span: 16
            },
            style: {
                maxWidth: 600
            },
            initialValues: {
                remember: true
            },
            autoComplete: "off",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    label: "Логин",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"], {
                        onChange: (e)=>setLogin(e.target.value)
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    label: "Пароль",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"].Password, {
                        onChange: (e)=>setPassword(e.target.value)
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    name: "remember",
                    valuePropName: "checked",
                    wrapperCol: {
                        offset: 8,
                        span: 16
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib_checkbox/* default */.Z, {
                        children: "Запомнить меня"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (AuthForm_module_default()).text,
                    children: [
                        " Нет аккаунта? ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            onClick: ()=>setRegistration(true),
                            children: "Зарегистрируйся!"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: "flex",
                        justifyContent: "end"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                        type: "primary",
                        style: {
                            marginRight: "-70px",
                            marginTop: "20px"
                        },
                        onClick: ()=>(0,clientApi/* authMobile */.bu)(login, password),
                        children: "Авторизоваться"
                    })
                })
            ]
        });
    } else {
        return !success ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib_form/* default */.Z, {
            className: (AuthForm_module_default()).root,
            name: "basic",
            labelCol: {
                span: 8
            },
            wrapperCol: {
                span: 16
            },
            style: {
                maxWidth: 600
            },
            initialValues: {
                remember: true
            },
            autoComplete: "off",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    label: "Логин",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"], {
                        onChange: (e)=>setLogin(e.target.value)
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    label: "Email",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"], {
                        onChange: (e)=>setEmail(e.target.value)
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    label: "Пароль",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"].Password, {
                        onChange: (e)=>setPassword(e.target.value)
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (AuthForm_module_default()).text,
                    children: [
                        "Есть аккаунт? ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            onClick: ()=>setRegistration(false),
                            children: "Авторизуйся!"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: "flex",
                        justifyContent: "end"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                        type: "primary",
                        style: {
                            marginRight: "-70px"
                        },
                        onClick: ()=>{
                            (0,clientApi/* mobileRegister */.mM)(login, email, password, setSuccess);
                        },
                        children: "Зарегистрироваться"
                    })
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(result/* default */.ZP, {
            className: (AuthForm_module_default()).result,
            status: "success",
            title: "Вы успешно зарегистрировались!"
        });
    }
};
/* harmony default export */ const auth_form = (AuthForm);

;// CONCATENATED MODULE: ./src/components/Header/MobileNavbar/auth/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Auth = ({ user })=>{
    const [isModalOpen, setIsModalOpen] = (0,react_.useState)(false);
    const [registration, setRegistration] = react_default().useState(false);
    const showModal = ()=>{
        setIsModalOpen(true);
    };
    const handleCancel = ()=>{
        setIsModalOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onClick: showModal,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(LoginOutlined/* default */.Z, {
                            style: {
                                fontSize: "24px",
                                cursor: "pointer"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Войти"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modal/* default */.Z, {
                footer: null,
                title: !registration ? "Авторизация" : "Регистрация",
                open: isModalOpen,
                onCancel: handleCancel,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        margin: "50px 90px 0 0"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(auth_form, {
                        registration: registration,
                        setRegistration: setRegistration
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const auth = (Auth);


/***/ }),

/***/ 35185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/antd/lib/modal/index.js
var modal = __webpack_require__(53275);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/LoginOutlined.js
var LoginOutlined = __webpack_require__(90992);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/UserOutlined.js
var UserOutlined = __webpack_require__(84490);
// EXTERNAL MODULE: ./node_modules/antd/lib/button/index.js
var lib_button = __webpack_require__(79636);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);
// EXTERNAL MODULE: ./node_modules/antd/lib/checkbox/index.js
var lib_checkbox = __webpack_require__(84533);
// EXTERNAL MODULE: ./node_modules/antd/lib/form/index.js
var lib_form = __webpack_require__(77829);
// EXTERNAL MODULE: ./node_modules/antd/lib/input/index.js
var input = __webpack_require__(72781);
// EXTERNAL MODULE: ./node_modules/antd/lib/result/index.js
var result = __webpack_require__(54060);
// EXTERNAL MODULE: ./src/components/Header/auth/form/AuthForm.module.scss
var AuthForm_module = __webpack_require__(34424);
var AuthForm_module_default = /*#__PURE__*/__webpack_require__.n(AuthForm_module);
// EXTERNAL MODULE: ./src/services/clientApi.ts
var clientApi = __webpack_require__(63590);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./src/components/Header/auth/form/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const AuthForm = ({ registration, setRegistration, setIsModalOpen })=>{
    const [login, setLogin] = react_default().useState("");
    const [email, setEmail] = react_default().useState("");
    const [password, setPassword] = react_default().useState("");
    const [success, setSuccess] = react_default().useState(false);
    const router = (0,navigation.useRouter)();
    if (!registration) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib_form/* default */.Z, {
            className: (AuthForm_module_default()).root,
            name: "basic",
            labelCol: {
                span: 8
            },
            wrapperCol: {
                span: 16
            },
            style: {
                maxWidth: 600
            },
            initialValues: {
                remember: true
            },
            autoComplete: "off",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    label: "Логин",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"], {
                        onChange: (e)=>setLogin(e.target.value)
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    label: "Пароль",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"].Password, {
                        onChange: (e)=>setPassword(e.target.value)
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    name: "remember",
                    valuePropName: "checked",
                    wrapperCol: {
                        offset: 8,
                        span: 16
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib_checkbox/* default */.Z, {
                        children: "Запомнить меня"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (AuthForm_module_default()).text,
                    children: [
                        " Нет аккаунта? ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            onClick: ()=>{
                                setRegistration(true);
                            },
                            children: "Зарегистрируйся!"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: "flex",
                        justifyContent: "end"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                        type: "primary",
                        style: {
                            marginRight: "-70px",
                            marginTop: "20px"
                        },
                        onClick: ()=>{
                            (0,clientApi/* auth */.I8)(login, password, router, setIsModalOpen);
                        },
                        children: "Авторизоваться"
                    })
                })
            ]
        });
    } else {
        return !success ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib_form/* default */.Z, {
            className: (AuthForm_module_default()).root,
            name: "basic",
            labelCol: {
                span: 8
            },
            wrapperCol: {
                span: 16
            },
            style: {
                maxWidth: 600
            },
            initialValues: {
                remember: true
            },
            autoComplete: "off",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    label: "Логин",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"], {
                        onChange: (e)=>setLogin(e.target.value)
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    label: "Email",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"], {
                        onChange: (e)=>setEmail(e.target.value)
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    label: "Пароль",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"].Password, {
                        onChange: (e)=>setPassword(e.target.value)
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (AuthForm_module_default()).text,
                    children: [
                        "Есть аккаунт? ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            onClick: ()=>{
                                setRegistration(false);
                            },
                            children: "Авторизуйся!"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: "flex",
                        justifyContent: "end"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                        type: "primary",
                        style: {
                            marginRight: "-70px"
                        },
                        onClick: ()=>{
                            (0,clientApi/* register */.z2)(login, email, password, setSuccess, router, setIsModalOpen);
                        },
                        children: "Зарегистрироваться"
                    })
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(result/* default */.ZP, {
            className: (AuthForm_module_default()).result,
            status: "success",
            title: "Вы успешно зарегистрировались!"
        });
    }
};
/* harmony default export */ const auth_form = (AuthForm);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Header/auth/auth.module.scss
var auth_module = __webpack_require__(17945);
var auth_module_default = /*#__PURE__*/__webpack_require__.n(auth_module);
;// CONCATENATED MODULE: ./src/components/Header/auth/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const Auth = ({ user })=>{
    const [isModalOpen, setIsModalOpen] = (0,react_.useState)(false);
    const [registration, setRegistration] = react_default().useState(false);
    const [showSubmenu, setShowSubmenu] = react_default().useState(false);
    const router = (0,navigation.useRouter)();
    const showModal = ()=>{
        setIsModalOpen(true);
    };
    const handleCancel = (e)=>{
        setIsModalOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (auth_module_default()).root,
        children: [
            !user ? /*#__PURE__*/ jsx_runtime_.jsx(LoginOutlined/* default */.Z, {
                onClick: showModal,
                style: {
                    fontSize: "24px",
                    cursor: "pointer"
                }
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: "5px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            alignSelf: "center"
                        },
                        children: user.username
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onClick: ()=>setShowSubmenu(!showSubmenu),
                        className: (auth_module_default()).account,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(UserOutlined/* default */.Z, {
                                    style: {
                                        fontSize: "24px",
                                        cursor: "pointer"
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: (e)=>e.stopPropagation(),
                                className: !showSubmenu ? (auth_module_default()).submenu : (auth_module_default()).submenu + " " + (auth_module_default()).submenu_hover,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: !showSubmenu ? (auth_module_default()).submenu_list : (auth_module_default()).submenu_list + " " + (auth_module_default()).submenu_list_hover,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            onClick: ()=>setShowSubmenu(false),
                                            href: "/account",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: (auth_module_default()).submenu_item,
                                                children: "Личный кабинет"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            onClick: ()=>(0,clientApi/* logout */.kS)(router, setShowSubmenu),
                                            className: (auth_module_default()).submenu_item,
                                            children: "Выйти"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modal/* default */.Z, {
                footer: null,
                title: !registration ? "Авторизация" : "Регистрация",
                open: isModalOpen,
                onCancel: (e)=>handleCancel(e),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        margin: "50px 90px 0 0"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(auth_form, {
                        registration: registration,
                        setRegistration: setRegistration,
                        setIsModalOpen: setIsModalOpen
                    })
                })
            }),
            showSubmenu && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (auth_module_default()).fade,
                onClick: ()=>setShowSubmenu(!showSubmenu)
            })
        ]
    });
};
/* harmony default export */ const auth = (Auth);


/***/ }),

/***/ 39371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cart)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/components/Header/cart/Cart.module.scss
var Cart_module = __webpack_require__(26905);
var Cart_module_default = /*#__PURE__*/__webpack_require__.n(Cart_module);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/antd/lib/badge/index.js
var badge = __webpack_require__(43923);
// EXTERNAL MODULE: ./node_modules/antd/lib/button/index.js
var lib_button = __webpack_require__(79636);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);
// EXTERNAL MODULE: ./node_modules/antd/lib/divider/index.js
var divider = __webpack_require__(39614);
// EXTERNAL MODULE: ./node_modules/antd/lib/drawer/index.js
var drawer = __webpack_require__(81216);
// EXTERNAL MODULE: ./node_modules/antd/lib/input-number/index.js
var input_number = __webpack_require__(29545);
// EXTERNAL MODULE: ./node_modules/antd/lib/notification/index.js
var notification = __webpack_require__(23577);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/ShoppingCartOutlined.js
var ShoppingCartOutlined = __webpack_require__(75524);
// EXTERNAL MODULE: ./src/redux/hooks.ts
var hooks = __webpack_require__(92897);
// EXTERNAL MODULE: ./src/redux/slices/cartSlice.ts
var cartSlice = __webpack_require__(50222);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/CloseOutlined.js
var CloseOutlined = __webpack_require__(75737);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/services/clientApi.ts
var clientApi = __webpack_require__(63590);
// EXTERNAL MODULE: ./src/axios/clientConfig.ts
var clientConfig = __webpack_require__(96013);
// EXTERNAL MODULE: ./node_modules/antd/lib/form/index.js
var lib_form = __webpack_require__(77829);
// EXTERNAL MODULE: ./node_modules/antd/lib/input/index.js
var input = __webpack_require__(72781);
// EXTERNAL MODULE: ./node_modules/antd/es/input/TextArea.js + 58 modules
var TextArea = __webpack_require__(60288);
;// CONCATENATED MODULE: ./src/components/Header/cart/orderForm/index.tsx









const OrderForm = ({ close, closeChild, openNotification })=>{
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const { items, totalPrice } = (0,hooks/* useAppSelector */.C)((state)=>state.cart);
    const [username, setUserName] = react_default().useState("");
    const [address, setAddress] = react_default().useState("");
    const [phoneNumber, setPhoneNumber] = react_default().useState("");
    const order = async ()=>{
        try {
            if (items.length > 0 && username && address && phoneNumber) {
                const orderText = items.map((item, i)=>{
                    return `№${i + 1}. ID: ${item.id} Название: ${item.name} Цена:${item.price} Кол-во:${item.count}\n`;
                }).join("") + `Общая сумма: ${totalPrice}`;
                const res = await clientConfig/* $apiClient_CMS */.M.post("/orders", {
                    data: {
                        username,
                        address,
                        phoneNumber,
                        orderText
                    }
                });
                if (res.status === 200) {
                    setTimeout(openNotification, 500);
                    dispatch((0,cartSlice/* clearItems */.H5)());
                    setUserName("");
                    setAddress("");
                    setPhoneNumber("");
                    closeChild();
                    close();
                }
            } else {
                return console.log("Корзина пуста");
            }
        } catch (e) {
            console.error(e);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib_form/* default */.Z, {
        name: "basic",
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 16
        },
        style: {
            maxWidth: 600
        },
        initialValues: {
            remember: true
        },
        autoComplete: "off",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                label: "Имя",
                name: "username",
                children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"], {
                    onChange: (e)=>setUserName(e.target.value),
                    value: username
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                label: "Телефон",
                name: "number",
                children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"], {
                    onChange: (e)=>setPhoneNumber(e.target.value),
                    value: phoneNumber
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                label: "Адрес",
                name: "adress",
                children: /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                    onChange: (e)=>setAddress(e.target.value),
                    value: address,
                    rows: 4
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                wrapperCol: {
                    offset: 8,
                    span: 16
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                    onClick: order,
                    type: "primary",
                    htmlType: "submit",
                    children: "Отправить заявку"
                })
            })
        ]
    });
};
/* harmony default export */ const orderForm = (OrderForm);

;// CONCATENATED MODULE: ./src/components/Header/cart/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 















const Cart = ({ user })=>{
    const [open, setOpen] = (0,react_.useState)(false);
    const [openChildDrawer, setOpenChildDrawer] = (0,react_.useState)(false);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const { items, totalCount, totalPrice } = (0,hooks/* useAppSelector */.C)((state)=>state.cart);
    const [api, contextHolder] = notification/* default */.ZP.useNotification();
    const showDrawer = ()=>{
        setOpen(true);
    };
    const onClose = ()=>{
        setOpen(false);
    };
    const showChildDrawer = ()=>{
        setOpenChildDrawer(true);
    };
    const onCloseChildDrawer = ()=>{
        setOpenChildDrawer(false);
    };
    const openNotification = ()=>{
        api.success({
            message: `Спасибо за заказ!`,
            description: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "Менеджер свяжется с вами в ближайшее время"
            }),
            placement: "topRight"
        });
    };
    react_default().useEffect(()=>{
        const loadItems = async ()=>{
            const serverItems = user?.cart?.items?.items;
            const clientItems = localStorage.getItem("cartItems");
            if (serverItems?.length > 0) {
                dispatch((0,cartSlice/* replaceItems */.yh)(serverItems));
            } else if (clientItems) {
                const parsedClienItems = await JSON.parse(clientItems);
                dispatch((0,cartSlice/* replaceItems */.yh)(parsedClienItems));
            }
        };
        loadItems();
    }, []);
    react_default().useEffect(()=>{
        if (items.length > 0) {
            localStorage.setItem("cartItems", JSON.stringify(items));
        }
        if (user) {
            (0,clientApi/* addToCart */.Xq)(user, items);
        }
    }, [
        items
    ]);
    const drawerFooter = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Cart_module_default()).footer,
        children: [
            " ",
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Итого: ",
                    totalPrice
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                onClick: showChildDrawer,
                children: "заказать "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(drawer/* default */.Z, {
                title: "Оформить заказ",
                placement: "right",
                open: openChildDrawer,
                onClose: onCloseChildDrawer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(orderForm, {
                    close: onClose,
                    closeChild: onCloseChildDrawer,
                    openNotification: openNotification
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            contextHolder,
            /*#__PURE__*/ jsx_runtime_.jsx(badge/* default */.Z, {
                size: "small",
                count: totalCount,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ShoppingCartOutlined/* default */.Z, {
                    style: {
                        fontSize: "24px"
                    },
                    onClick: showDrawer
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(drawer/* default */.Z, {
                className: (Cart_module_default()).drawer,
                footer: items.length > 0 ? drawerFooter : null,
                title: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Cart_module_default()).header,
                    children: "Корзина"
                }),
                placement: "right",
                onClose: onClose,
                open: open,
                children: items.map((item)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Cart_module_default()).root,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: 100,
                                        height: 100,
                                        alt: "",
                                        src: `http://localhost:1337${item.image}`
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: (Cart_module_default()).title,
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: (Cart_module_default()).price,
                                        children: [
                                            "цена: ",
                                            item.price,
                                            "p"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Cart_module_default()).count,
                                        children: "кол-во:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Cart_module_default()).buttons,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(input_number/* default */.Z, {
                                                onChange: (e)=>e > 0 ? dispatch((0,cartSlice/* minusItem */.uz)({
                                                        id: item.id,
                                                        count: e
                                                    })) : dispatch((0,cartSlice/* removeItem */.cl)(item)),
                                                value: item.count
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                                                shape: "circle",
                                                onClick: ()=>dispatch((0,cartSlice/* removeItem */.cl)(item)),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CloseOutlined["default"], {})
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(divider/* default */.Z, {})
                        ]
                    }, item.id);
                })
            })
        ]
    });
};
/* harmony default export */ const cart = (Cart);


/***/ }),

/***/ 40837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92897);
/* harmony import */ var _redux_slices_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13503);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const SaveUser = ({ user })=>{
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        if (user) {
            dispatch((0,_redux_slices_userSlice__WEBPACK_IMPORTED_MODULE_2__/* .setUser */ .av)(user));
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveUser);


/***/ }),

/***/ 96215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Provider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(91388);
// EXTERNAL MODULE: ./src/redux/slices/cartSlice.ts
var cartSlice = __webpack_require__(50222);
// EXTERNAL MODULE: ./src/redux/slices/filtersSlice.ts
var filtersSlice = __webpack_require__(67175);
// EXTERNAL MODULE: ./src/redux/slices/userSlice.ts
var userSlice = __webpack_require__(13503);
;// CONCATENATED MODULE: ./src/redux/store.ts




const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        user: userSlice/* default */.ZP,
        filters: filtersSlice/* default */.ZP,
        cart: cartSlice/* default */.ZP
    }
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/redux/Provider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ReduxProvider = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store,
        children: children
    });
};
/* harmony default export */ const Provider = (ReduxProvider);


/***/ }),

/***/ 92897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useAppSelector),
/* harmony export */   T: () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 50222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H5: () => (/* binding */ clearItems),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   cl: () => (/* binding */ removeItem),
/* harmony export */   jX: () => (/* binding */ addItem),
/* harmony export */   uz: () => (/* binding */ minusItem),
/* harmony export */   yh: () => (/* binding */ replaceItems)
/* harmony export */ });
/* unused harmony export cartSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action)=>{
            const foundedItem = state.items.find((item)=>item.id === action.payload.id);
            if (foundedItem) {
                foundedItem.count++;
            } else {
                state.items.push(action.payload);
            }
            state.totalPrice = state.items.reduce((sum, item)=>sum + item.price * item.count, 0);
            state.totalCount = state.items.reduce((sum, item)=>sum + item.count, 0);
        },
        minusItem: (state, action)=>{
            const foundedItem = state.items.find((item)=>item.id === action.payload.id);
            if (foundedItem) {
                foundedItem.count = action.payload.count;
            }
            state.totalPrice = state.items.reduce((sum, item)=>sum + item.price * item.count, 0);
            state.totalCount = state.items.reduce((sum, item)=>sum + item.count, 0);
        },
        removeItem: (state, action)=>{
            const foundedItem = state.items.find((item)=>item.id === action.payload.id);
            if (foundedItem) {
                state.items = state.items.filter((item)=>item.id !== action.payload.id);
            }
            state.totalPrice = state.items.reduce((sum, item)=>sum + item.price * item.count, 0);
            state.totalCount = state.items.reduce((sum, item)=>sum + item.count, 0);
        },
        replaceItems: (state, action)=>{
            state.items = action.payload;
            state.totalPrice = state.items.reduce((sum, item)=>sum + item.price * item.count, 0);
            state.totalCount = state.items.reduce((sum, item)=>sum + item.count, 0);
        },
        clearItems: (state)=>{
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
        }
    }
});
const { addItem, minusItem, removeItem, replaceItems, clearItems } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ }),

/***/ 67175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YA: () => (/* binding */ setPage),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export filtersSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    sort: "",
    search: "",
    brand: "",
    page: 0
};
const filtersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "filters",
    initialState,
    reducers: {
        setPage: (state, action)=>{
            state.page = action.payload;
        }
    }
});
const { setPage } = filtersSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filtersSlice.reducer);


/***/ }),

/***/ 13503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   av: () => (/* binding */ setUser)
/* harmony export */ });
/* unused harmony exports userSlice, setIsAuth */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isAuth: false,
    id: null,
    username: "",
    email: ""
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {
        setIsAuth: (state, action)=>{
            state.isAuth = action.payload;
        },
        setUser: (state, action)=>{
            state.id = action.payload.id, state.username = action.payload.username, state.email = action.payload.email, state.isAuth = true;
        }
    }
});
const { setIsAuth, setUser } = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ }),

/***/ 63590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I8: () => (/* binding */ auth),
/* harmony export */   IO: () => (/* binding */ addRaiting),
/* harmony export */   Ir: () => (/* binding */ addComment),
/* harmony export */   NC: () => (/* binding */ getUserRatings),
/* harmony export */   PN: () => (/* binding */ removeComment),
/* harmony export */   Xq: () => (/* binding */ addToCart),
/* harmony export */   bu: () => (/* binding */ authMobile),
/* harmony export */   kS: () => (/* binding */ logout),
/* harmony export */   mM: () => (/* binding */ mobileRegister),
/* harmony export */   z2: () => (/* binding */ register),
/* harmony export */   zx: () => (/* binding */ editAccount)
/* harmony export */ });
/* harmony import */ var _axios_clientConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96013);

const register = async (login, email, password, setSuccess, router, setIsModalOpen)=>{
    try {
        await _axios_clientConfig__WEBPACK_IMPORTED_MODULE_0__/* .$apiClient_NEXT */ .W.post("/auth/register", {
            username: login,
            email,
            password
        });
        setSuccess(true);
        setTimeout(()=>{
            router.refresh();
            setIsModalOpen(false);
        }, 3000);
        setTimeout(()=>setSuccess(false), 3500);
    } catch (error) {
        console.error(error);
    }
};
const mobileRegister = async (login, email, password, setSuccess)=>{
    try {
        await _axios_clientConfig__WEBPACK_IMPORTED_MODULE_0__/* .$apiClient_NEXT */ .W.post("/auth/register", {
            username: login,
            email,
            password
        });
        setSuccess(true);
        setTimeout(()=>setSuccess(false), 3500);
    } catch (error) {
        console.error(error);
    }
};
const auth = async (login, password, router, setIsModalOpen)=>{
    try {
        const { data } = await _axios_clientConfig__WEBPACK_IMPORTED_MODULE_0__/* .$apiClient_NEXT */ .W.post("/auth/login", {
            identifier: login,
            password
        });
        router.refresh();
        setIsModalOpen(false);
        return data;
    } catch (error) {
        console.error(error.message);
    }
};
const authMobile = async (login, password)=>{
    try {
        const { data } = await _axios_clientConfig__WEBPACK_IMPORTED_MODULE_0__/* .$apiClient_NEXT */ .W.post("/auth/login", {
            identifier: login,
            password
        });
        return data;
    } catch (error) {
        console.error(error.message);
    }
};
const logout = async (router, setShowSubmenu)=>{
    try {
        await _axios_clientConfig__WEBPACK_IMPORTED_MODULE_0__/* .$apiClient_NEXT */ .W.post("/auth/logout");
        router.refresh();
        setShowSubmenu(false);
    } catch (e) {
        console.error(e);
    }
};
const addToCart = async (user, items)=>{
    await _axios_clientConfig__WEBPACK_IMPORTED_MODULE_0__/* .$apiClient_NEXT */ .W.put(`/cart`, {
        id: user?.cart?.id,
        items
    });
};
const addRaiting = async (e, deviceID, userID, ratingID, rating, loaded, router)=>{
    if (userID && !ratingID && !rating) {
        await _axios_clientConfig__WEBPACK_IMPORTED_MODULE_0__/* .$apiClient_NEXT */ .W.post("/rating", {
            value: e,
            device: deviceID,
            users_permissions_user: userID
        });
        router.refresh();
    } else if (ratingID) {
        await _axios_clientConfig__WEBPACK_IMPORTED_MODULE_0__/* .$apiClient_NEXT */ .W.put("/rating", {
            value: e,
            id: ratingID,
            device: deviceID
        });
        router.refresh();
    }
};
const getUserRatings = async (deviceID, userID)=>{
    if (userID) {
        try {
            const res = await _axios_clientConfig__WEBPACK_IMPORTED_MODULE_0__/* .$apiClient_CMS */ .M.get("/ratings", {
                params: {
                    filters: {
                        users_permissions_user: {
                            id: userID
                        },
                        device: {
                            id: deviceID
                        }
                    }
                }
            });
            return res;
        } catch (e) {
            console.error(e);
        }
    }
};
const addComment = async (commentText, deviceID, userID, router)=>{
    try {
        if (userID) {
            await _axios_clientConfig__WEBPACK_IMPORTED_MODULE_0__/* .$apiClient_NEXT */ .W.post("/comment", {
                text: commentText,
                device: deviceID,
                user: userID
            });
        }
        router.refresh();
    } catch (e) {
        console.error(e);
    }
};
const removeComment = async (deviceID, userID, router)=>{
    try {
        await _axios_clientConfig__WEBPACK_IMPORTED_MODULE_0__/* .$apiClient_NEXT */ .W.post("/comment", {
            device: deviceID,
            user: userID
        });
        router.refresh();
    } catch (e) {
        console.error(e);
    }
};
const editAccount = async (userID, dataType, dataValue, router, setType, setValue)=>{
    try {
        await _axios_clientConfig__WEBPACK_IMPORTED_MODULE_0__/* .$apiClient_NEXT */ .W.put("/account", {
            userID,
            dataType,
            dataValue
        });
        router.refresh();
        setType("");
        setValue("");
    } catch (e) {
        console.error(e);
    }
};


/***/ }),

/***/ 89866:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Header_root__hagAA",
	"navbar": "Header_navbar__sgcPx",
	"leftBlock": "Header_leftBlock__a7hGW",
	"logo": "Header_logo__V9h3K",
	"rightBlock": "Header_rightBlock__oRj6D",
	"mobileNavbar": "Header_mobileNavbar__vcSQh"
};


/***/ }),

/***/ 852:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "MobileNavbar_root__HHPIJ",
	"menu": "MobileNavbar_menu__y0k9j",
	"item": "MobileNavbar_item__Pg7iq"
};


/***/ }),

/***/ 55035:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "AuthForm_root__rTOjl",
	"text": "AuthForm_text__Ua3Nm",
	"result": "AuthForm_result__RdBrb"
};


/***/ }),

/***/ 17945:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "auth_root__CxtUb",
	"account": "auth_account__IgNOp",
	"submenu": "auth_submenu__fZb0b",
	"submenu_list": "auth_submenu_list__p5QaZ",
	"submenu_hover": "auth_submenu_hover__WhCtl",
	"submenu_list_hover": "auth_submenu_list_hover__znL0z",
	"submenu_item": "auth_submenu_item__Dq8iR",
	"fade": "auth_fade__om83l"
};


/***/ }),

/***/ 34424:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "AuthForm_root__1TpPb",
	"text": "AuthForm_text__VkOAA",
	"result": "AuthForm_result__gweEN"
};


/***/ }),

/***/ 26905:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Cart_root__i6EuB",
	"title": "Cart_title__KFjWo",
	"price": "Cart_price__oqlpD",
	"count": "Cart_count__U3wLV",
	"buttons": "Cart_buttons__6aSPs",
	"drawer": "Cart_drawer__fjyQE",
	"header": "Cart_header__KGnEX",
	"footer": "Cart_footer__C4___"
};


/***/ }),

/***/ 26785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(74490);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/styles/global.scss
var global = __webpack_require__(46798);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/antDesign/AntRegistry.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Nikolai\Desktop\Projects\Next-Strapi\next\src\antDesign\AntRegistry.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const AntRegistry = (__default__);
;// CONCATENATED MODULE: ./src/redux/Provider.tsx

const Provider_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Nikolai\Desktop\Projects\Next-Strapi\next\src\redux\Provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Provider_esModule, $$typeof: Provider_$$typeof } = Provider_proxy;
const Provider_default_ = Provider_proxy.default;


/* harmony default export */ const Provider = (Provider_default_);
// EXTERNAL MODULE: ./src/components/Header/Header.module.scss
var Header_module = __webpack_require__(89866);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/components/Header/auth/index.tsx

const auth_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Nikolai\Desktop\Projects\Next-Strapi\next\src\components\Header\auth\index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: auth_esModule, $$typeof: auth_$$typeof } = auth_proxy;
const auth_default_ = auth_proxy.default;


/* harmony default export */ const auth = (auth_default_);
;// CONCATENATED MODULE: ./src/components/Header/cart/index.tsx

const cart_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Nikolai\Desktop\Projects\Next-Strapi\next\src\components\Header\cart\index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: cart_esModule, $$typeof: cart_$$typeof } = cart_proxy;
const cart_default_ = cart_proxy.default;


/* harmony default export */ const cart = (cart_default_);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/HomeOutlined.js
var HomeOutlined = __webpack_require__(95190);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/PhoneOutlined.js
var PhoneOutlined = __webpack_require__(95201);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/AppstoreOutlined.js
var AppstoreOutlined = __webpack_require__(86210);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Header/MobileNavbar/MobileNavbar.module.scss
var MobileNavbar_module = __webpack_require__(852);
var MobileNavbar_module_default = /*#__PURE__*/__webpack_require__.n(MobileNavbar_module);
;// CONCATENATED MODULE: ./src/components/Header/MobileNavbar/auth/index.tsx

const MobileNavbar_auth_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Nikolai\Desktop\Projects\Next-Strapi\next\src\components\Header\MobileNavbar\auth\index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: MobileNavbar_auth_esModule, $$typeof: MobileNavbar_auth_$$typeof } = MobileNavbar_auth_proxy;
const MobileNavbar_auth_default_ = MobileNavbar_auth_proxy.default;


/* harmony default export */ const MobileNavbar_auth = (MobileNavbar_auth_default_);
;// CONCATENATED MODULE: ./src/components/Header/MobileNavbar/index.tsx







const MobileNavbar = ({ cart, user })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (MobileNavbar_module_default()).root,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: (MobileNavbar_module_default()).menu,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (MobileNavbar_module_default()).item,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(HomeOutlined/* default */.Z, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "Главная"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (MobileNavbar_module_default()).item,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contacts",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(PhoneOutlined/* default */.Z, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "Контакты"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (MobileNavbar_module_default()).item,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/catalog",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(AppstoreOutlined/* default */.Z, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "Каталог"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (MobileNavbar_module_default()).item,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            cart,
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: "Корзина"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (MobileNavbar_module_default()).item,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MobileNavbar_auth, {
                            user: user
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Header_MobileNavbar = (MobileNavbar);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/Html5Outlined.js
var Html5Outlined = __webpack_require__(15361);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx







const Header = ({ user })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Header_module_default()).root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: (Header_module_default()).navbar,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: (Header_module_default()).leftBlock,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).logo,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "/",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Html5Outlined/* default */.Z, {
                                                style: {
                                                    fontSize: "28px"
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    fontSize: "20px",
                                                    fontFamily: "cursive"
                                                },
                                                children: "Техно-Маркет"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: "Главная"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).catalog,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/catalog",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: "Каталог"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contacts",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: "Конаткты"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: "О нас"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: (Header_module_default()).rightBlock,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(cart, {
                                        user: user
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(auth, {
                                            user: user
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Header_module_default()).mobileNavbar,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Header_MobileNavbar, {
                        user: user,
                        cart: /*#__PURE__*/ jsx_runtime_.jsx(cart, {
                            user: user
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./node_modules/antd/lib/config-provider/index.js
var config_provider = __webpack_require__(75501);
var config_provider_default = /*#__PURE__*/__webpack_require__.n(config_provider);
;// CONCATENATED MODULE: ./src/antDesign/ThemeConfig.ts
const theme = {
    token: {
        colorPrimary: "#595959"
    },
    components: {
        Menu: {
            dropdownWidth: 200
        }
    }
};
/* harmony default export */ const ThemeConfig = (theme);

;// CONCATENATED MODULE: ./src/components/SaveUser/index.tsx

const SaveUser_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Nikolai\Desktop\Projects\Next-Strapi\next\src\components\SaveUser\index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: SaveUser_esModule, $$typeof: SaveUser_$$typeof } = SaveUser_proxy;
const SaveUser_default_ = SaveUser_proxy.default;


/* harmony default export */ const SaveUser = (SaveUser_default_);
// EXTERNAL MODULE: ./src/services/serverApi.ts
var serverApi = __webpack_require__(46767);
;// CONCATENATED MODULE: ./src/app/layout.tsx










const metadata = {
    title: "Магазин на Next-js",
    description: "Generated by create next app"
};
async function RootLayout({ children }) {
    const user = await (0,serverApi/* getUser */.PR)();
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Provider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(AntRegistry, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((config_provider_default()), {
                        theme: ThemeConfig,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SaveUser, {
                                user: user
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                                user: user
                            }),
                            children
                        ]
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 2043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 46767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PR: () => (/* binding */ getUser),
/* harmony export */   PW: () => (/* binding */ getDevices),
/* harmony export */   _v: () => (/* binding */ getDevice),
/* harmony export */   li: () => (/* binding */ getComments),
/* harmony export */   vp: () => (/* binding */ getBrands)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30784);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_serverConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2043);


const getUser = async ()=>{
    try {
        const { data } = await _axios_serverConfig__WEBPACK_IMPORTED_MODULE_1__/* .$apiServer_CMS */ .u.get("/users/me?populate=*");
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const getBrands = async (typeName)=>{
    try {
        if (typeName === "all") {
            const res = await _axios_serverConfig__WEBPACK_IMPORTED_MODULE_1__/* .$apiServer_CMS */ .u.get(`/brands`);
            return res.data.data;
        } else {
            const res = await _axios_serverConfig__WEBPACK_IMPORTED_MODULE_1__/* .$apiServer_CMS */ .u.get(`/brands?filters[types][name][$eq]=${typeName}`);
            return res.data.data;
        }
    } catch (e) {
        console.error(e);
    }
};
const getDevices = async (searchParams, typeParam)=>{
    try {
        const type = typeParam;
        const query = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(searchParams);
        if (type === "all") {
            const res = await _axios_serverConfig__WEBPACK_IMPORTED_MODULE_1__/* .$apiServer_CMS */ .u.get(`/devices?${query ? query : "sort=price:asc"}&populate=*`);
            return res.data;
        } else {
            const res = await _axios_serverConfig__WEBPACK_IMPORTED_MODULE_1__/* .$apiServer_CMS */ .u.get(`/devices?filters[type][name][$eq]=${type}&${query ? query : "sort=price:asc"}&populate=*`);
            return res.data;
        }
    } catch (e) {
        console.error(e);
    }
};
const getDevice = async (id)=>{
    try {
        const res = await _axios_serverConfig__WEBPACK_IMPORTED_MODULE_1__/* .$apiServer_CMS */ .u.get(`/devices/${id}?populate=*`);
        return res.data;
    } catch (e) {
        console.error(e);
    }
};
const getComments = async (id)=>{
    try {
        const res = await _axios_serverConfig__WEBPACK_IMPORTED_MODULE_1__/* .$apiServer_CMS */ .u.get(`/comments?filters[device][id][$eq]=${id}&populate=*`);
        return res.data;
    } catch (e) {
        console.error(e);
    }
};


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 46798:
/***/ (() => {



/***/ })

};
;