"use strict";
exports.id = 168;
exports.ids = [168];
exports.modules = {

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bG": () => (/* reexport */ ScrollingProvider),
  "$0": () => (/* reexport */ Section),
  "G4": () => (/* reexport */ useScrollSection)
});

// UNUSED EXPORTS: ScrollContext, useScrollSections

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ../../node_modules/react-scroll-section/lib/utils.js
var debounce = function(func, waitFor) {
    var timeout = null;
    var debounced = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        if (timeout !== null) {
            clearTimeout(timeout);
            timeout = null;
        }
        timeout = setTimeout(function() {
            return func.apply(void 0, args);
        }, waitFor);
    };
    return debounced;
}; //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ../../node_modules/react-scroll-section/lib/context.js

var DEFAULT_CONTEXT = {
    selected: "",
    refs: {},
    meta: {},
    scrollTo: function() {},
    registerRef: function() {
        return null;
    }
};
var context_ScrollContext = /*#__PURE__*/ (0,external_react_.createContext)(DEFAULT_CONTEXT);
var Consumer = context_ScrollContext.Consumer, Provider = context_ScrollContext.Provider; //# sourceMappingURL=context.js.map

// EXTERNAL MODULE: external "smoothscroll-polyfill"
var external_smoothscroll_polyfill_ = __webpack_require__(786);
;// CONCATENATED MODULE: ../../node_modules/react-scroll-section/lib/ScrollingProvider.js




var REFS = {};
var META = {};
if (false) {}
var ScrollingProvider = function(_a1) {
    var _b = _a1.debounceDelay, debounceDelay = _b === void 0 ? 50 : _b, _c = _a1.scrollBehavior, scrollBehavior = _c === void 0 ? "smooth" : _c, _d = _a1.offset, offset = _d === void 0 ? 0 : _d, children = _a1.children;
    var _e = (0,external_react_.useState)(""), selected = _e[0], setSelected = _e[1];
    (0,external_react_.useEffect)(function() {
        document.addEventListener("scroll", debounceScroll, true);
        handleScroll();
        return function() {
            document.removeEventListener("scroll", debounceScroll, true);
        };
    }, []);
    var handleScroll = function() {
        var selectedSection = Object.keys(REFS).reduce(function(acc, id) {
            var sectionRef = REFS[id] && REFS[id].current;
            if (!sectionRef) {
                return {
                    id: id,
                    differenceFromTop: 0
                };
            }
            var top = sectionRef.getBoundingClientRect().top;
            var differenceFromTop = Math.abs(top);
            if (differenceFromTop >= acc.differenceFromTop) return acc;
            return {
                differenceFromTop: differenceFromTop,
                id: id
            };
        }, {
            differenceFromTop: 9999,
            id: ""
        });
        if (selected !== selectedSection.id) setSelected(selectedSection.id);
    };
    var debounceScroll = debounce(handleScroll, debounceDelay);
    var registerRef = function(_a) {
        var id = _a.id, meta = _a.meta;
        var ref = /*#__PURE__*/ (0,external_react_.createRef)();
        REFS[id] = ref;
        META[id] = meta;
        return ref;
    };
    var scrollTo = function(section) {
        var sectionRef = REFS[section] && REFS[section].current;
        if (!sectionRef) return console.warn("Section ID not recognized!"); // eslint-disable-line
        setSelected(section);
        window.scrollTo({
            top: sectionRef.offsetTop + offset,
            behavior: scrollBehavior
        });
    };
    var value = (0,external_react_.useMemo)(function() {
        return {
            registerRef: registerRef,
            scrollTo: scrollTo,
            refs: REFS,
            meta: META,
            selected: selected
        };
    }, [
        selected,
        REFS
    ]);
    return /*#__PURE__*/ external_react_default().createElement(Provider, {
        value: value
    }, children);
}; //# sourceMappingURL=ScrollingProvider.js.map

;// CONCATENATED MODULE: ../../node_modules/react-scroll-section/lib/Section.js
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};


var Section = function(_a) {
    var id = _a.id, children = _a.children, meta = _a.meta, rest = __rest(_a, [
        "id",
        "children",
        "meta"
    ]);
    var registerRef = (0,external_react_.useContext)(context_ScrollContext).registerRef;
    var ref = (0,external_react_.useMemo)(function() {
        return registerRef({
            id: id,
            meta: meta
        });
    }, [
        id
    ]);
    return /*#__PURE__*/ external_react_default().createElement("section", __assign({}, rest, {
        ref: ref,
        id: id
    }), children);
}; //# sourceMappingURL=Section.js.map

;// CONCATENATED MODULE: ../../node_modules/react-scroll-section/lib/useScrollSection.js


var useScrollSection = function(id) {
    var _a = (0,external_react_.useContext)(context_ScrollContext), scrollTo = _a.scrollTo, selectedSection = _a.selected;
    var onClick = function() {
        return scrollTo(id);
    };
    var selected = selectedSection === id;
    return {
        onClick: onClick,
        selected: selected
    };
};
var useScrollSections = function() {
    var _a = useContext(ScrollContext), scrollTo = _a.scrollTo, selectedSection = _a.selected, refs = _a.refs, meta = _a.meta;
    var sections = Object.keys(refs).map(function(id) {
        return {
            id: id,
            meta: meta[id],
            onClick: function() {
                return scrollTo(id);
            },
            selected: selectedSection === id
        };
    });
    return sections;
}; //# sourceMappingURL=useScrollSection.js.map

;// CONCATENATED MODULE: ../../node_modules/react-scroll-section/lib/index.js



 //# sourceMappingURL=index.js.map


/***/ })

};
;