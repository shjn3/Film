"use strict";
exports.__esModule = true;
var react_1 = require("react");
var list_1 = require("../list");
var styles_1 = require("@mui/material/styles");
var Card_1 = require("../layout/Card");
var WrapTopFilm = styles_1.styled("div")(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            position: "relative",
            top: -50,
            height: "600px",
            width: "100%",
            overflow: "hidden",
            "& .topFilm__wrapItems": {
                height: "100%",
                position: "relative",
                display: "flex",
                "& .topFilm__wrapItem": {
                    position: "relative",
                    height: "100%"
                }
            }
        },
        _b[theme.breakpoints.down("md")] = {
            top: 0
        },
        _b);
});
var TopFilmComponent = function () {
    var arrLength = list_1._listTopFilm.length;
    var ref = react_1.useRef(null);
    var _a = react_1.useState(1), NumberActive = _a[0], setNumberActive = _a[1];
    react_1.useEffect(function () {
        if (NumberActive === arrLength + 1) {
            ref.current.style.transform = "translate3d(0,0,0)";
            ref.current.style.transition = "none";
            setNumberActive(1);
        }
        else {
            ref.current.style.transform = "translate3d(calc((-100%/" + (arrLength + 4) + ")*" + NumberActive + "),0,0)";
            ref.current.style.transition = "all .2s ease-in";
        }
    }, [NumberActive, arrLength]);
    react_1.useEffect(function () {
        var interval = setInterval(function () {
            setNumberActive(NumberActive + 1);
        }, 3000);
        return function () { return clearInterval(interval); };
    });
    return (react_1["default"].createElement(WrapTopFilm, null,
        react_1["default"].createElement("div", { className: "topFilm__wrapItems", ref: ref, style: { width: "calc( (25% * " + (arrLength + 4) + ")" } },
            react_1["default"].createElement("div", { className: "topFilm__wrapItem clone", style: { width: "calc(100% / " + (arrLength + 4) + ")" } },
                react_1["default"].createElement(Card_1.CardTopFilm, { listTopFilm: list_1._listTopFilm[arrLength - 1] })),
            list_1._listTopFilm.map(function (item) { return (react_1["default"].createElement("div", { className: "topFilm__wrapItem ", key: item.id, style: { width: "calc(100% / " + (arrLength + 4) + ")" } },
                react_1["default"].createElement(Card_1.CardTopFilm, { listTopFilm: item }))); }),
            react_1["default"].createElement("div", { className: "topFilm__wrapItem clone", style: { width: "calc(100% / " + (arrLength + 4) + ")" } },
                react_1["default"].createElement(Card_1.CardTopFilm, { listTopFilm: list_1._listTopFilm[0] })),
            react_1["default"].createElement("div", { className: "topFilm__wrapItem clone", style: { width: "calc(100% / " + (arrLength + 4) + ")" } },
                react_1["default"].createElement(Card_1.CardTopFilm, { listTopFilm: list_1._listTopFilm[1] })),
            react_1["default"].createElement("div", { className: "topFilm__wrapItem clone", style: { width: "calc(100% / " + (arrLength + 4) + ")" } },
                react_1["default"].createElement(Card_1.CardTopFilm, { listTopFilm: list_1._listTopFilm[2] })))));
};
exports["default"] = TopFilmComponent;
