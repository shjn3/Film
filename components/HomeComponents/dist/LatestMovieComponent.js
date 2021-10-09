"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var color_1 = require("../color");
var Card_1 = require("../layout/Card");
var KeyboardArrowRight_1 = require("@mui/icons-material/KeyboardArrowRight");
var KeyboardArrowLeft_1 = require("@mui/icons-material/KeyboardArrowLeft");
var Section = styles_1.styled("div")(function (_a) {
    var _b;
    var theme = _a.theme;
    return ({
        margin: theme.spacing(5, 5),
        padding: theme.spacing(5, 2),
        "& .latestMovie__title": {
            fontSize: "2rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            borderLeft: "7px solid " + color_1.main_color,
            paddingLeft: theme.spacing(3)
        },
        "& .latestMovie__wrapContent": {
            position: "relative",
            overflow: "hidden",
            "& .btnPrev, .btnNext": {
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                background: "rgba(0,0,0)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
                "& .carouselIcon": {
                    fontSize: "2rem",
                    margin: theme.spacing(1)
                },
                "&:hover": {
                    color: color_1.main_color
                }
            },
            "& .btnNext": {
                right: 20
            },
            "& .btnPrev": {
                left: 10
            },
            "& .latestMovie__content": (_b = {
                    display: "flex",
                    marginTop: theme.spacing(5),
                    width: "calc((100vw - 2 * " + theme.spacing(5) + " - 2 * " + theme.spacing(2) + ") * 2)",
                    "&__wrapItem": {
                        width: "calc(12.5% - " + theme.spacing(2) + ")",
                        marginRight: theme.spacing(2)
                    }
                },
                _b[theme.breakpoints.down("md")] = {
                    width: "calc((100vw - 2 * " + theme.spacing(5) + " - 2 * " + theme.spacing(2) + ") * 4)",
                    "&__wrapItem": {
                        width: "calc(25% - " + theme.spacing(2) + ")"
                    }
                },
                _b[theme.breakpoints.down(700)] = {
                    width: "calc((100vw - 2 * " + theme.spacing(5) + " - 2 * " + theme.spacing(2) + ") * 8)",
                    "&__wrapItem": {
                        width: "calc(50% - " + theme.spacing(2) + ")"
                    }
                },
                _b)
        }
    });
});
var LatestMovieComponent = function () {
    var handleClickCarousel = function (isLeft) {
        if (isLeft) {
            console.log("abc");
        }
        else {
            console.log("abc");
        }
    };
    return (react_1["default"].createElement(Section, null,
        react_1["default"].createElement("div", { className: "latestMovie__title" }, "latest movies"),
        react_1["default"].createElement("div", { className: "latestMovie__wrapContent" },
            react_1["default"].createElement("div", { className: "btnPrev", onClick: function () { return handleClickCarousel(true); } },
                react_1["default"].createElement(KeyboardArrowLeft_1["default"], { className: "carouselIcon" })),
            react_1["default"].createElement("div", { className: "btnNext", onClick: function () { return handleClickCarousel(false); } },
                react_1["default"].createElement(KeyboardArrowRight_1["default"], { className: "carouselIcon" })),
            react_1["default"].createElement("div", { className: "latestMovie__content" },
                react_1["default"].createElement("div", { className: "latestMovie__content__wrapItem" },
                    react_1["default"].createElement(Card_1.CardLatestMovie, null)),
                react_1["default"].createElement("div", { className: "latestMovie__content__wrapItem" },
                    react_1["default"].createElement(Card_1.CardLatestMovie, null)),
                react_1["default"].createElement("div", { className: "latestMovie__content__wrapItem" },
                    react_1["default"].createElement(Card_1.CardLatestMovie, null)),
                react_1["default"].createElement("div", { className: "latestMovie__content__wrapItem" },
                    react_1["default"].createElement(Card_1.CardLatestMovie, null)),
                react_1["default"].createElement("div", { className: "latestMovie__content__wrapItem" },
                    react_1["default"].createElement(Card_1.CardLatestMovie, null)),
                react_1["default"].createElement("div", { className: "latestMovie__content__wrapItem" },
                    react_1["default"].createElement(Card_1.CardLatestMovie, null)),
                react_1["default"].createElement("div", { className: "latestMovie__content__wrapItem" },
                    react_1["default"].createElement(Card_1.CardLatestMovie, null)),
                react_1["default"].createElement("div", { className: "latestMovie__content__wrapItem" },
                    react_1["default"].createElement(Card_1.CardLatestMovie, null))))));
};
exports["default"] = LatestMovieComponent;
