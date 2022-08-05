exports.id = 147;
exports.ids = [147];
exports.modules = {

/***/ 676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/common": 172,
	"./en/common.json": 172,
	"./vn/common": 392,
	"./vn/common.json": 392
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 676;

/***/ }),

/***/ 147:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
module.exports = {
    locales: [
        "vn",
        "en"
    ],
    defaultLocale: "vn",
    pages: {
        "*": [
            "common"
        ]
    },
    interpolation: {
        prefix: "${",
        suffix: "}"
    },
    loadLocaleFrom: (locale, namespace)=>Promise.resolve().then(function() {
            return _interopRequireWildcard(__webpack_require__(676)(`./${locale}/${namespace}`));
        }).then((m)=>m.default
        )
};


/***/ }),

/***/ 172:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Trung & Trâm Wedding":"Tiến Đức & Trúc Linh Wedding","Trung & Trâm":"Tiến Đức & Trúc Linh","July 10, 2022":"Oct 02, 2022","Five o\'clock in the evening":"Elevent o\'clock in the noon","Sunday, July 10th, 2022":"Sunday, October 02nd, 2022","GALA CENTER":"PRIVATE HOME","415 Hoang Van Thu Street":"34 Boi Loi","Tan Binh District, Ho Chi Minh City":"Ninh Trung, Ninh Son, Tay Ninh","Welcome":"Welcome","To our wedding":"To our wedding","In dreams and in love there are no impossibilities":"In dreams and in love there are no impossibilities. <3","Reception":"Reception","Please share in our celebration by joining us for dinner reception at five o\'clock in the evening on":"Please share in our celebration by joining us for dinner reception at","Thank you":"Thank you","For sharing our special day":"For sharing our special day <3","10 . 07 . 2022":"02 . 10 . 2022","Next":"Next","Prev":"Previous","Cancel":"Cancel","View Maps":"View Maps","View all photo":"View all photo","This is for case when you don\'t like using cash":"If you don\'t like using cash :(","Banking Info":"Banking Info","Bank":"Bank","Bank Name":"Bank Name","Bank Number":"Bank Number"}');

/***/ }),

/***/ 392:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Trung & Trâm Wedding":"Tiến Đức & Trúc Linh Wedding","Trung & Trâm":"Tiến Đức & Trúc Linh","July 10, 2022":"Ngày 02 tháng 10 năm 2022","Five o\'clock in the evening":"11 giờ 00 Chủ Nhật","Sunday, July 10th, 2022":"ngày 02 tháng 10 năm 2022","GALA CENTER":"TƯ GIA","415 Hoang Van Thu Street":"Hẻm 34 Đường Bời Lời","Tan Binh District, Ho Chi Minh City":"Ninh Trung, Ninh Sơn, TP.Tây Ninh","Welcome":"Xin chào","To our wedding":"đến đám cưới của em <3","In dreams and in love there are no impossibilities":"Trong giấc mơ và tình yêu thì không gì là không thể. <3","Reception":"Thư mời","Please share in our celebration by joining us for dinner reception at five o\'clock in the evening on":"Trân trọng kính mời Anh/Chị đến dự bữa tiệc rượu chung vui cùng gia đình","Thank you":"Xin chân thành cảm ơn","For sharing our special day":"Vì đã chia sẻ niềm hạnh phúc trong ngày đặc biệt này <3","10 . 07 . 2022":"02 . 10 . 2022","Next":"Tiếp tục","Prev":"Trở về","Cancel":"Thoát","View Maps":"Xem bản đồ","View all photo":"Xem hình cưới","This is for case when you don\'t like using cash":"Sự hiện diện của Anh/Chị là niềm hạnh phúc của gia đình chúng em <3","Banking Info":"Thông tin ngân hàng","Bank":"Ngân hàng","Bank Name":"Tên","Bank Number":"STK"}');

/***/ })

};
;