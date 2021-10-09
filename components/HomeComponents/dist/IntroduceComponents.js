"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var color_1 = require("../color");
var KeyboardArrowRight_1 = require("@mui/icons-material/KeyboardArrowRight");
var KeyboardArrowLeft_1 = require("@mui/icons-material/KeyboardArrowLeft");
var list_1 = require("../list");
var Card_1 = require("../layout/Card");
var WrapIntroduce = styles_1.styled("div")(function (_a) {
    var theme = _a.theme;
    return ({
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        "& .Introduce__wrapItems": {
            position: "relative",
            display: "flex",
            "& .Introduce__wrapItem": {
                position: "relative",
                width: "100vw"
            }
        }
    });
});
var WrapSliceIcon = styles_1.styled("div")(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            "& .Introduce_btnCarousel": {
                fontSize: "3rem",
                borderRadius: "50%",
                background: "#000",
                cursor: "pointer",
                "&:hover": {
                    color: color_1.main_color
                }
            },
            "&.Introduce__wrapBtnPrev,&.Introduce__wrapBtnNext": {
                transition: "opacity .3s ease-in",
                "&.disabled": {
                    pointerEvents: "none",
                    opacity: 0.5
                }
            },
            "&.Introduce__wrapBtnPrev": {
                left: 10
            },
            "&.Introduce__wrapBtnNext": {
                right: 10
            }
        },
        _b[theme.breakpoints.down("md")] = {
            "& .Introduce_btnCarousel": {
                fontSize: "2rem"
            },
            "&.Introduce__wrapBtnPrev": {
                left: 2
            },
            "&.Introduce__wrapBtnNext": {
                right: 2
            }
        },
        _b);
});
var IntroduceComponents = function () {
    var mainRef = react_1.useRef(null);
    var btnNextRef = react_1.useRef(null);
    var _a = react_1.useState(false), isScrolling = _a[0], setIsScrolling = _a[1];
    var arrLength = list_1._listIntroduce.length;
    var _b = react_1.useState([]), elRefs = _b[0], setElRefs = _b[1];
    var _c = react_1.useState(0), NumberActive = _c[0], setNumberActive = _c[1];
    react_1.useEffect(function () {
        for (var i = 0; i < arrLength; i++) {
            elRefs[i] = elRefs[i] || react_1["default"].createRef();
        }
    }, [arrLength, elRefs]);
    react_1.useEffect(function () {
        if (mainRef.current !== null) {
            console.log(NumberActive);
            if (NumberActive === arrLength + 1) {
                mainRef.current.style.transform = "translate3d(0,0,0)";
                mainRef.current.style.transition = "none";
                setNumberActive(1);
            }
            else {
                if (NumberActive === 0) {
                    mainRef.current.style.transform = "translate3d(" + -((arrLength + 1) *
                        100) + "vw,0,0)";
                    mainRef.current.style.transition = "none";
                    setNumberActive(arrLength);
                }
                else {
                    mainRef.current.style.transform = "translate3d(" + -100 * NumberActive + "vw,0,0)";
                    mainRef.current.style.transition = "all .25s ease-in 0s";
                }
            }
        }
    }, [NumberActive, arrLength]);
    var handleSlice = function (isPrev) {
        if (isPrev) {
            setNumberActive(NumberActive - 1);
        }
        else {
            setNumberActive(NumberActive + 1);
        }
    };
    return (react_1["default"].createElement(WrapIntroduce, null,
        react_1["default"].createElement("div", { style: {
                transform: "translate3d(0,0,0)",
                width: (arrLength + 2) * 100 + "vw"
            } },
            react_1["default"].createElement("div", { className: "Introduce__wrapItems", ref: mainRef },
                react_1["default"].createElement("div", { className: "Introduce__wrapItem clone", ref: elRefs[0] },
                    react_1["default"].createElement(Card_1.CardIntroduce, { active: false, listIntroduce: list_1._listIntroduce[arrLength - 1] })),
                list_1._listIntroduce.map(function (item) { return (react_1["default"].createElement("div", { className: "Introduce__wrapItem", ref: elRefs[item.id], key: item.id },
                    react_1["default"].createElement(Card_1.CardIntroduce, { active: item.id === NumberActive, listIntroduce: item }))); }),
                react_1["default"].createElement("div", { className: "Introduce__wrapItem clone", ref: elRefs[arrLength] },
                    react_1["default"].createElement(Card_1.CardIntroduce, { active: false, listIntroduce: list_1._listIntroduce[0] })))),
        react_1["default"].createElement(WrapSliceIcon, { className: "Introduce__wrapBtnPrev", onClick: function () { return handleSlice(true); } },
            react_1["default"].createElement(KeyboardArrowLeft_1["default"], { className: "Introduce_btnCarousel" })),
        react_1["default"].createElement(WrapSliceIcon, { className: "Introduce__wrapBtnNext", onClick: function () { return handleSlice(false); } },
            react_1["default"].createElement(KeyboardArrowRight_1["default"], { className: "Introduce_btnCarousel" }))));
};
exports["default"] = IntroduceComponents;
