"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Index": () => (/* binding */ Index),
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(147);
var i18n_default = /*#__PURE__*/__webpack_require__.n(i18n);
;// CONCATENATED MODULE: external "next-translate/loadNamespaces"
const loadNamespaces_namespaceObject = require("next-translate/loadNamespaces");
var loadNamespaces_default = /*#__PURE__*/__webpack_require__.n(loadNamespaces_namespaceObject);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: ./constants/menu.ts
const menu_MENU = {
    Home: "Home",
    WeddingCard: "Reception",
    Photo: "Photo",
    Thankyou: "Thankyou"
};

;// CONCATENATED MODULE: ./constants/index.ts


;// CONCATENATED MODULE: ./assets/images/bg.png
/* harmony default export */ const bg = ({"src":"/_next/static/media/bg.e4d46f88.png","height":1240,"width":1748,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAnElEQVR42kWM2wqCQBiE9/1foUsfoa6soCsJlQ5GUJYKkUKezd9DKTstu4EXwwzMx8d014Z5s+D4Dk7eAbv7HlTn+LZvDF3NmWYsoG3n8OMHqErRNxXSLEIQukiyiLPV2YCXhiAqMXaEoa0FVCJJnrgER87KPAbvSSo/MpWEOiqwtnQwcUitaAX9dyOMm6utAJUJGIUhLF6YmUv8ABVIsixi7FAGAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ../../node_modules/next/image.js
var next_image = __webpack_require__(136);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "react-use"
const external_react_use_namespaceObject = require("react-use");
;// CONCATENATED MODULE: ./components/Image.tsx





// You can add as many loader as you want, and use them conditionally.
// See https://nextjs.org/docs/basic-features/image-optimization#loader
const ImageLoader = ({ src , width , quality  })=>{
    return `/${src}?w=${width}&q=${quality || 50}`;
};
const Image_Image = (props)=>{
    const intersectionRef = external_react_.useRef(null);
    const intersection = (0,external_react_use_namespaceObject.useIntersection)(intersectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });
    const { src , alt , layout ="fill" , objectFit ="cover" , container , lazy =false , ...rest } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        position: "relative",
        ...container,
        ref: intersectionRef,
        children: lazy ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: intersection && intersection.intersectionRatio >= 0.5 && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                objectFit: objectFit,
                layout: layout,
                src: src,
                alt: alt,
                ...rest
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            objectFit: objectFit,
            layout: layout,
            src: src,
            alt: alt,
            ...rest
        })
    });
};

;// CONCATENATED MODULE: external "react-visibility-sensor"
const external_react_visibility_sensor_namespaceObject = require("react-visibility-sensor");
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_namespaceObject);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
// EXTERNAL MODULE: ../../node_modules/react-scroll-section/lib/index.js + 5 modules
var lib = __webpack_require__(168);
;// CONCATENATED MODULE: external "motion"
const external_motion_namespaceObject = require("motion");
;// CONCATENATED MODULE: external "next-translate/useTranslation"
const useTranslation_namespaceObject = require("next-translate/useTranslation");
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_namespaceObject);
;// CONCATENATED MODULE: ./components/ScrollWrapper.tsx








const ScrollWrapper = ({ nextId , nextText ="Next" , prevId , prevText ="Prev" , children  })=>{
    const { t  } = useTranslation_default()("common");
    const [showNextBtn, setShowNextBtn] = external_react_default().useState(false);
    const [showPrevBtn, setShowPrevBtn] = external_react_default().useState(false);
    const nextSection = (0,lib/* useScrollSection */.G4)(nextId !== null && nextId !== void 0 ? nextId : "");
    const prevSection = (0,lib/* useScrollSection */.G4)(prevId !== null && prevId !== void 0 ? prevId : "");
    const prevRef = external_react_default().useRef(null);
    const nextRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        if (nextRef.current) {
            (0,external_motion_namespaceObject.animate)(nextRef.current, {
                bottom: "11%"
            }, {
                duration: 1,
                repeat: Infinity
            });
        }
    }, [
        showNextBtn
    ]);
    external_react_default().useEffect(()=>{
        if (prevRef.current) {
            (0,external_motion_namespaceObject.animate)(prevRef.current, {
                top: "4%"
            }, {
                duration: 1,
                repeat: Infinity
            });
        }
    }, [
        showPrevBtn
    ]);
    const onElementVisibility = (isVisible)=>{
        setShowNextBtn(isVisible);
        setShowPrevBtn(isVisible);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                onChange: onElementVisibility,
                children: children
            }),
            showPrevBtn && prevId && /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                ref: prevRef,
                width: "100%",
                pos: "absolute",
                top: "5%",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                    variant: "ghost",
                    leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiChevronsUp, {}),
                    onClick: prevSection.onClick,
                    children: t(prevText)
                })
            }),
            showNextBtn && nextId && /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                ref: nextRef,
                width: "100%",
                pos: "absolute",
                bottom: "10%",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                    variant: "ghost",
                    leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiChevronsDown, {}),
                    onClick: nextSection.onClick,
                    children: t(nextText)
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Home.tsx








const Home = ()=>{
    const { t  } = useTranslation_default()("common");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        h: "100vh",
        direction: "row",
        position: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Image_Image, {
                container: {
                    w: "100vw",
                    h: "100vh"
                },
                src: bg,
                alt: "background-image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollWrapper, {
                nextId: menu_MENU.WeddingCard,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                    width: "100%",
                    pos: "absolute",
                    top: "40%",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                        spacing: "4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                size: "4xl",
                                fontWeight: "400",
                                children: t("Welcome")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                size: "2xl",
                                children: [
                                    " ",
                                    t("To our wedding")
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                size: "3xl",
                                fontWeight: "400",
                                children: t("Ti\xea\u0301n \u0110\u01B0\u0301c & Tru\u0301c Linh")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                children: [
                                    " ",
                                    t("July 10, 2022")
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                fontSize: "2xl",
                                textAlign: "center",
                                fontWeight: "normal",
                                fontStyle: "italic",
                                children: t("In dreams and in love there are no impossibilities")
                            })
                        ]
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Menu.tsx




const Menu = ()=>{
    const homeSection = useScrollSection(MENU.Home);
    const weddingCardSection = useScrollSection(MENU.WeddingCard);
    const photoSection = useScrollSection(MENU.Photo);
    return /*#__PURE__*/ _jsx(Center, {
        width: "100%",
        pos: "fixed",
        top: "20px",
        zIndex: "1",
        children: /*#__PURE__*/ _jsxs(HStack, {
            spacing: "4",
            children: [
                /*#__PURE__*/ _jsx(Button, {
                    variant: "ghost",
                    onClick: homeSection.onClick,
                    children: /*#__PURE__*/ _jsx(Heading, {
                        children: MENU.Home
                    })
                }),
                /*#__PURE__*/ _jsx(Button, {
                    variant: "ghost",
                    onClick: weddingCardSection.onClick,
                    children: /*#__PURE__*/ _jsx(Heading, {
                        children: MENU.WeddingCard
                    })
                }),
                /*#__PURE__*/ _jsx(Button, {
                    variant: "ghost",
                    onClick: photoSection.onClick,
                    children: /*#__PURE__*/ _jsx(Heading, {
                        children: MENU.Photo
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: external "react-image-lightbox"
const external_react_image_lightbox_namespaceObject = require("react-image-lightbox");
var external_react_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_image_lightbox_namespaceObject);
;// CONCATENATED MODULE: ./components/Photo.tsx






 // This only needs to be imported once in your app

const Photo_images = [
    {
        src: "/wedding/1-min.jpg",
        rowSpan: 2,
        colSpan: 1
    },
    {
        src: "/wedding/2-min.jpg",
        rowSpan: 1,
        colSpan: 2
    },
    {
        src: "/wedding/9-min.jpg",
        rowSpan: 1,
        colSpan: 1
    },
    {
        src: "/wedding/4-min.jpg",
        rowSpan: 1,
        colSpan: 1
    },
    {
        src: "/wedding/16-min.jpg",
        rowSpan: 1,
        colSpan: 2
    },
    {
        src: "/wedding/26-min.jpg",
        rowSpan: 2,
        colSpan: 1
    },
    {
        src: "/wedding/18-min.jpg",
        rowSpan: 1,
        colSpan: 1
    },
    {
        src: "/wedding/23-min.jpg",
        rowSpan: 1,
        colSpan: 1
    },
    {
        src: "/wedding/45-min.jpg",
        rowSpan: 1,
        colSpan: 1
    },
    {
        src: "/wedding/44-min.jpg",
        rowSpan: 1,
        colSpan: 1
    },
    {
        src: "/wedding/37-min.jpg",
        rowSpan: 2,
        colSpan: 1
    },
    {
        src: "/wedding/36-min.jpg",
        rowSpan: 1,
        colSpan: 2
    },
    {
        src: "/wedding/3-min.jpg"
    },
    {
        src: "/wedding/5-min.jpg"
    },
    {
        src: "/wedding/6-min.jpg"
    },
    {
        src: "/wedding/7-min.jpg"
    },
    {
        src: "/wedding/8-min.jpg"
    },
    {
        src: "/wedding/10-min.jpg"
    },
    {
        src: "/wedding/11-min.jpg"
    },
    {
        src: "/wedding/12-min.jpg"
    },
    {
        src: "/wedding/13-min.jpg"
    },
    {
        src: "/wedding/14-min.jpg"
    },
    {
        src: "/wedding/15-min.jpg"
    },
    {
        src: "/wedding/17-min.jpg"
    },
    {
        src: "/wedding/19-min.jpg"
    },
    {
        src: "/wedding/20-min.jpg"
    },
    {
        src: "/wedding/21-min.jpg"
    },
    {
        src: "/wedding/22-min.jpg"
    },
    {
        src: "/wedding/24-min.jpg"
    },
    {
        src: "/wedding/25-min.jpg"
    },
    {
        src: "/wedding/27-min.jpg"
    },
    {
        src: "/wedding/28-min.jpg"
    },
    {
        src: "/wedding/29-min.jpg"
    },
    {
        src: "/wedding/30-min.jpg"
    },
    {
        src: "/wedding/31-min.jpg"
    },
    {
        src: "/wedding/32-min.jpg"
    },
    {
        src: "/wedding/33-min.jpg"
    },
    {
        src: "/wedding/34-min.jpg"
    },
    {
        src: "/wedding/35-min.jpg"
    },
    {
        src: "/wedding/38-min.jpg"
    },
    {
        src: "/wedding/39-min.jpg"
    },
    {
        src: "/wedding/40-min.jpg"
    },
    {
        src: "/wedding/41-min.jpg"
    },
    {
        src: "/wedding/42-min.jpg"
    },
    {
        src: "/wedding/43-min.jpg"
    }, 
];
const getNextImageWithIndex = (index)=>{
    const imgName = Photo_images[index].src;
    return `/_next/image?url=${encodeURIComponent(imgName)}&w=1080&q=80`;
};
const Photo = ()=>{
    const { t  } = useTranslation_default()("common");
    const [openLightbox, toggleLightbox] = (0,external_react_use_namespaceObject.useToggle)(false);
    const [photoIndex, setPhotoIndex] = external_react_default().useState(0);
    const viewAll = ()=>{
        setPhotoIndex(0);
        toggleLightbox(true);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            minH: "100vh",
            pos: "relative",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                    width: "100%",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                        w: "100%",
                        h: "100%",
                        templateRows: {
                            base: "repeat(6, 1fr)",
                            md: "repeat(2, 1fr)"
                        },
                        templateColumns: {
                            base: "repeat(3, 1fr)"
                        },
                        children: Photo_images.filter((img)=>Boolean(img.colSpan) || Boolean(img.rowSpan)
                        ).map((img, index)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                rowSpan: img.rowSpan,
                                colSpan: img.colSpan,
                                onClick: ()=>{
                                    setPhotoIndex(index);
                                    toggleLightbox(true);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Image_Image, {
                                    container: {
                                        w: "100%",
                                        h: "100%"
                                    },
                                    src: img.src,
                                    alt: "wedding-image"
                                })
                            }, index)
                        )
                    })
                }),
                openLightbox && /*#__PURE__*/ jsx_runtime_.jsx((external_react_image_lightbox_default()), {
                    mainSrc: getNextImageWithIndex(photoIndex),
                    nextSrc: getNextImageWithIndex((photoIndex + 1) % Photo_images.length),
                    prevSrc: getNextImageWithIndex((photoIndex + Photo_images.length - 1) % Photo_images.length),
                    onCloseRequest: ()=>toggleLightbox(false)
                    ,
                    onMovePrevRequest: ()=>setPhotoIndex((preState)=>(preState + Photo_images.length - 1) % Photo_images.length
                        )
                    ,
                    onMoveNextRequest: ()=>setPhotoIndex((preState)=>(preState + 1) % Photo_images.length
                        )
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                    width: "100%",
                    pos: "absolute",
                    bottom: "9%",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        boxShadow: "md",
                        onClick: viewAll,
                        children: t("View all photo")
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./assets/images/bg2.png
/* harmony default export */ const bg2 = ({"src":"/_next/static/media/bg2.409990ad.png","height":1240,"width":1748,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAlElEQVR42j2NywrCMBRE8/9fJKILUUSwVBelUFKsJH0SUpLatzVjiI/F4V6Ywwx5jS0Wy9w3mIeHw/29u4ZoLaBUhWVwkmPqNITM0DW1IRELUcvi1/InySgqwQ1hBYWUqauebPBBIy9viNPICjnF5rzG87ttTdw5xe6yxYmFhtgdeJEPP75ibBVKwXEIjtiHHlZJYN6mj7OL09wUXgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/WeddingCard.tsx








const WeddingCard = ()=>{
    const { t  } = useTranslation_default()("common");
    const openMaps = ()=>{
        if (/* if we're on iOS, open in Apple Maps */ navigator.platform.indexOf("iPhone") != -1 || navigator.platform.indexOf("iPad") != -1 || navigator.platform.indexOf("iPod") != -1) {
            window.open("maps://goo.gl/maps/d3iDmtMbQXELNfak7");
        } else {
            /* else use Google */ window.open("https://goo.gl/maps/d3iDmtMbQXELNfak7");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        h: "100vh",
        pos: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Image_Image, {
                container: {
                    w: "100vw",
                    h: "100vh"
                },
                src: bg2,
                alt: "background-image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollWrapper, {
                prevId: menu_MENU.Home,
                nextId: menu_MENU.Photo,
                nextText: menu_MENU.Photo,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                    w: "100%",
                    pos: "absolute",
                    top: "12%",
                    px: {
                        base: "10",
                        md: "16"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        w: "100%",
                        h: "100%",
                        direction: "column",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                fontSize: "4xl",
                                fontWeight: "normal",
                                marginBottom: "4",
                                children: t("Reception")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                spacing: "2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        textAlign: "center",
                                        children: t("Please share in our celebration by joining us for dinner reception at five o'clock in the evening on")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        textAlign: "center",
                                        fontWeight: "semibold",
                                        children: t("Five o'clock in the evening")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        textAlign: "center",
                                        fontWeight: "semibold",
                                        children: t("Sunday, July 10th, 2022")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                marginTop: "6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        textAlign: "center",
                                        fontWeight: "semibold",
                                        children: t("GALA CENTER")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        textAlign: "center",
                                        children: t("415 Hoang Van Thu Street")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        textAlign: "center",
                                        children: t("Tan Binh District, Ho Chi Minh City")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        variant: "link",
                                        onClick: openMaps,
                                        leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiMapPin, {}),
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                            children: [
                                                " ",
                                                t("View Maps")
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                marginTop: "12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                        textAlign: "center",
                                        fontSize: "4xl",
                                        fontWeight: "normal",
                                        children: t("Thank you")
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                textAlign: "center",
                                                children: t("For sharing our special day")
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                                textAlign: "center",
                                                children: [
                                                    " ",
                                                    t("02 . 10 . 2022")
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                                fontSize: "sm",
                                                fontWeight: "normal",
                                                children: t("\u0110\u01AF\u0301C & LINH")
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./assets/images/bg3.png
/* harmony default export */ const bg3 = ({"src":"/_next/static/media/bg3.4b780d17.png","height":1240,"width":1748,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAnklEQVR4nBXOsQ6CQAwG4L8HB0EW46Ikalh4/9cx6oQaFw0ooOFOrv6kQ5v2a1PxzunjVuNyPmCXLpAtVzg2d6w3exRlpTK8XypQiI3AhNhahDDBfUeIRDNo1RiBTRNoUKgSG4Of86yh8iEQA0R2BoFbAAWB4yWCrn2q8mSSZTCcTuwKw49uhio9fxiHDtf6hCLJ4fsBTRpjW1awWa5/29BUG0o+DZoAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/ThankYou.tsx





const ThankYou = ()=>{
    const { t  } = useTranslation("common");
    return /*#__PURE__*/ _jsxs(Flex, {
        pos: "relative",
        children: [
            /*#__PURE__*/ _jsx(Image, {
                container: {
                    w: "100vw",
                    h: "100vh"
                },
                layout: "responsive",
                src: bgImg,
                alt: "wedding-image"
            }),
            /*#__PURE__*/ _jsx(Center, {
                w: "100%",
                h: "100%",
                pos: "absolute",
                top: "100px",
                px: {
                    base: "10",
                    md: "16"
                },
                children: /*#__PURE__*/ _jsxs(Flex, {
                    w: "100%",
                    h: "100%",
                    direction: "column",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ _jsx(Heading, {
                            fontWeight: "normal",
                            marginBottom: "4",
                            children: t("Thank you")
                        }),
                        /*#__PURE__*/ _jsxs(VStack, {
                            spacing: "2",
                            children: [
                                /*#__PURE__*/ _jsxs(Text, {
                                    textAlign: "center",
                                    children: [
                                        " ",
                                        t("For sharing our special day")
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Text, {
                                    textAlign: "center",
                                    children: [
                                        " ",
                                        t("02 . 10 . 2022")
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Text, {
                                    fontWeight: "semibold",
                                    children: [
                                        " ",
                                        t("TI\xca\u0301N \u0110\u01AF\u0301C & TRU\u0301C LINH")
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Music.tsx




const Music = ()=>{
    const [playing, setPlaying] = external_react_default().useState(false);
    const audioRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        const handlePlay = async ()=>{
            var ref, ref1;
            await ((ref = audioRef.current) === null || ref === void 0 ? void 0 : ref.play());
            if ((ref1 = audioRef.current) === null || ref1 === void 0 ? void 0 : ref1.played) {
                setPlaying(true);
            }
        };
        if (audioRef.current) {
            handlePlay();
        }
    }, []);
    const onPlay = ()=>{
        if (playing) {
            var ref;
            (ref = audioRef.current) === null || ref === void 0 ? void 0 : ref.pause();
        } else {
            var ref2;
            (ref2 = audioRef.current) === null || ref2 === void 0 ? void 0 : ref2.play();
        }
        setPlaying((preState)=>!preState
        );
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                pos: "fixed",
                top: "10px",
                right: "10px",
                zIndex: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                    variant: "outline",
                    colorScheme: "pink",
                    "aria-label": "Play music",
                    icon: playing ? /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiVolume2, {}) : /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiVolumeX, {}),
                    onClick: onPlay
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                src: "/audio/silence.mp3",
                allow: "autoplay",
                id: "audio",
                style: {
                    display: "none"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("audio", {
                ref: audioRef,
                id: "player",
                autoPlay: true,
                loop: true,
                style: {
                    display: "none"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                    src: "/audio/little-love.mp3",
                    type: "audio/mp3"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./assets/images/heart.svg
/* harmony default export */ const images_heart = ({"src":"/_next/static/media/heart.bcb46960.svg","height":150,"width":150});
;// CONCATENATED MODULE: ./components/FloatingHeart.tsx






const heartSize = 30;
const heartSizePx = `${heartSize}px`;
const defaultNumberOfHeart = 30;
const random = (min = 10, max = 100)=>{
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const generateArrayWithNumber = (num = 0)=>Array.from(Array(num).keys())
;
const FloatingHeart = ()=>{
    const [hearts, setHearts] = external_react_default().useState([]);
    const positions = external_react_default().useRef([]);
    const generatePositionX = ()=>{
        var ref;
        const index = random(0, ((ref = positions.current) === null || ref === void 0 ? void 0 : ref.length) - 2);
        const num = positions.current[index];
        positions.current = positions.current.filter((value)=>value !== num
        );
        return num;
    };
    const getHearts = (numberHearts = defaultNumberOfHeart)=>generateArrayWithNumber(numberHearts).map((n)=>({
                id: "heart-" + n,
                position: [
                    generatePositionX(),
                    0
                ]
            })
        )
    ;
    const handleAnimate = async ()=>{
        const min = 10;
        const max = screen === null || screen === void 0 ? void 0 : screen.width;
        const x = random(min, max);
        const y = 0;
        for (const heart of hearts){
            (0,external_motion_namespaceObject.animate)(`#${heart.id}`, {
                opacity: [
                    0.8,
                    0
                ],
                x: [
                    x,
                    x - 50,
                    x + 50,
                    x,
                    x - 50,
                    x + 50,
                    x
                ],
                y: [
                    y,
                    screen.availHeight * 2
                ]
            }, {
                delay: random(1, defaultNumberOfHeart) / 10,
                duration: random(12, 20),
                easing: "ease-in-out",
                repeat: Infinity
            });
        }
    };
    external_react_default().useEffect(()=>{
        positions.current = generateArrayWithNumber(document.body.clientWidth).filter((n)=>n % 5 === 0
        );
    }, []);
    external_react_default().useEffect(()=>{
        if (!positions.current) return;
        setHearts(getHearts(defaultNumberOfHeart));
    }, [
        getHearts,
        positions
    ]);
    external_react_default().useEffect(()=>{
        if (!hearts.length) return;
        handleAnimate();
    }, [
        hearts,
        handleAnimate
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            pos: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            children: hearts === null || hearts === void 0 ? void 0 : hearts.map((heart, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Image_Image, {
                    container: {
                        pos: "absolute",
                        top: `-${heartSizePx}`,
                        left: `${heart.position[0]}px`,
                        w: `${heartSizePx}`,
                        h: `${heartSizePx}`,
                        id: heart.id,
                        className: "heart",
                        zIndex: 1
                    },
                    src: images_heart,
                    alt: "heart-flying"
                }, index)
            )
        })
    });
};

;// CONCATENATED MODULE: external "next-translate/setLanguage"
const setLanguage_namespaceObject = require("next-translate/setLanguage");
var setLanguage_default = /*#__PURE__*/__webpack_require__.n(setLanguage_namespaceObject);
;// CONCATENATED MODULE: ./components/LanguageToggle.tsx




var LanguageKey;
(function(LanguageKey) {
    LanguageKey["vn"] = "vn";
    LanguageKey["en"] = "en";
})(LanguageKey || (LanguageKey = {}));
const LanguageToggle = ()=>{
    const { lang  } = useTranslation_default()();
    const onChangeLanguage = ()=>{
        switch(lang){
            case LanguageKey.en:
                setLanguage_default()(LanguageKey.vn);
                break;
            case LanguageKey.vn:
                setLanguage_default()(LanguageKey.en);
                break;
            default:
                setLanguage_default()(LanguageKey.vn);
                break;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        pos: "fixed",
        top: "10px",
        right: "60px",
        zIndex: 2,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
            onClick: onChangeLanguage,
            variant: "outline",
            colorScheme: "pink",
            "aria-label": "Change Language",
            children: lang === LanguageKey.en ? "VN" : "EN"
        })
    });
};

;// CONCATENATED MODULE: ./components/index.ts










;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/BankInfo.tsx





function BankInputInfo({ label , value , breakRow =false , canCopy =false  }) {
    const { onCopy  } = (0,react_.useClipboard)(value);
    const [copied, setCopied] = external_react_default().useState(false);
    const handleCopy = ()=>{
        onCopy();
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        }, 3000);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        mb: 2,
        direction: breakRow ? "column" : "row",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                fontWeight: "bold",
                marginRight: 2,
                children: [
                    label,
                    ":"
                ]
            }),
            canCopy ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.InputGroup, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            value: value,
                            isReadOnly: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.InputRightElement, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                                variant: "ghost",
                                onClick: handleCopy,
                                "aria-label": "Copy",
                                icon: copied ? /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiCheckSquare, {}) : /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiCopy, {})
                            })
                        })
                    ]
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                children: value
            })
        ]
    });
}
const BankInfoDrawer = ()=>{
    const { t  } = useTranslation_default()("common");
    const { isOpen , onOpen , onClose  } = (0,react_.useDisclosure)();
    const btnRef = external_react_default().useRef(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                pos: "fixed",
                top: "10px",
                right: "125px",
                zIndex: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                    variant: "outline",
                    colorScheme: "pink",
                    ref: btnRef,
                    onClick: onOpen,
                    children: t("Bank")
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Drawer, {
                isOpen: isOpen,
                placement: "right",
                onClose: onClose,
                finalFocusRef: btnRef,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerOverlay, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerContent, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerCloseButton, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerHeader, {
                                children: t("Banking Info")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerBody, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        fontStyle: "italic",
                                        children: t("This is for case when you don't like using cash")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                                        my: "2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(BankInputInfo, {
                                        label: t("Bank"),
                                        value: "Vietbank",
                                        breakRow: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(BankInputInfo, {
                                        label: t("Bank Name"),
                                        value: "Huynh Thi Truc Linh",
                                        breakRow: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(BankInputInfo, {
                                        label: t("Bank Number"),
                                        value: "000000205626",
                                        breakRow: true,
                                        canCopy: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerFooter, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    variant: "outline",
                                    mr: 3,
                                    onClick: onClose,
                                    children: t("Cancel")
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/index.tsx

// @ts-ignore

// @ts-ignore

// @ts-ignore








function Index() {
    const { t  } = useTranslation_default()("common");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
        pos: "relative",
        maxW: "100%",
        maxH: "100%",
        p: "0",
        overflow: "hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Ti\xea\u0301n \u0110\u01B0\u0301c & Tru\u0301c Linh!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: t("Ti\xea\u0301n \u0110\u01B0\u0301c & Tru\u0301c Linh Wedding")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: t("In dreams and in love there are no impossibilities")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "/wedding/26-min.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:title",
                        content: t("Ti\xea\u0301n \u0110\u01B0\u0301c & Tru\u0301c Linh Wedding")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:description",
                        content: t("In dreams and in love there are no impossibilities")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:image",
                        content: "/wedding/26-min.jpg"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BankInfoDrawer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(LanguageToggle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Music, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(FloatingHeart, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                pos: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(lib/* Section */.$0, {
                        id: menu_MENU.Home,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Home, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib/* Section */.$0, {
                        id: menu_MENU.WeddingCard,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(WeddingCard, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib/* Section */.$0, {
                        id: menu_MENU.Photo,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Photo, {})
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const pages = (Index);
// @ts-ignore
async function getStaticProps(ctx) {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return {
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        props: {
            // @ts-ignore
            // @ts-ignore
            ...await loadNamespaces_default()({
                // @ts-ignore
                ...ctx,
                // @ts-ignore
                pathname: "/index",
                // @ts-ignore
                loaderName: "getStaticProps",
                // @ts-ignore
                ...(i18n_default())
            })
        }
    };
// @ts-ignore
} // @ts-ignore


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [168,53,136,147], () => (__webpack_exec__(406)));
module.exports = __webpack_exports__;

})();