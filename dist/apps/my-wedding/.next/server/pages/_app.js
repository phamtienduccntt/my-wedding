"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(147);
var i18n_default = /*#__PURE__*/__webpack_require__.n(i18n);
;// CONCATENATED MODULE: external "next-translate/appWithI18n"
const appWithI18n_namespaceObject = require("next-translate/appWithI18n");
var appWithI18n_default = /*#__PURE__*/__webpack_require__.n(appWithI18n_namespaceObject);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
// EXTERNAL MODULE: ../../node_modules/react-scroll-section/lib/index.js + 5 modules
var lib = __webpack_require__(168);
;// CONCATENATED MODULE: ./themes/index.ts
var ref, ref1;
// 1. Import the extendTheme function

// 2. Extend the theme to include custom colors, fonts, etc
const theme = (0,react_.extendTheme)({
    breakpoints: {
        xs: "20em",
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "2xl": "96em"
    },
    colors: {
        brand: {
            100: "#FFFAEF"
        }
    },
    fonts: {
        heading: `'Dancing Script', ${(ref = react_.theme.fonts) === null || ref === void 0 ? void 0 : ref.heading}`,
        body: `'Montserrat', ${(ref1 = react_.theme.fonts) === null || ref1 === void 0 ? void 0 : ref1.body}`
    },
    components: {
        Button: {
            variants: {
                ghost: {
                    field: {
                        _focus: {
                            borderColor: "transparent"
                        },
                        _active: {
                            bachground: "transparent"
                        }
                    }
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./pages/_app.tsx

// @ts-ignore

// @ts-ignore





function CustomApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* ScrollingProvider */.bG, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "app",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
const __Page_Next_Translate__ = CustomApp;
// @ts-ignore
/* harmony default export */ const _app = (appWithI18n_default()(__Page_Next_Translate__, {
    // @ts-ignore
    ...(i18n_default()),
    // @ts-ignore
    isLoader: true,
    // @ts-ignore
    skipInitialProps: true
})); // @ts-ignore


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 786:
/***/ ((module) => {

module.exports = require("smoothscroll-polyfill");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [168,147], () => (__webpack_exec__(653)));
module.exports = __webpack_exports__;

})();