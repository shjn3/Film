"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var image_1 = require("next/image");
var styles_1 = require("@mui/material/styles");
var Typography_1 = require("@mui/material/Typography");
var PlayArrow_1 = require("@mui/icons-material/PlayArrow");
var Star_1 = require("@mui/icons-material/Star");
var AccessTime_1 = require("@mui/icons-material/AccessTime");
var color_1 = require("../color");
var Button_1 = require("../layout/Button");
var Section = styles_1.styled("div")(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return ({
        position: "relative",
        paddingTop: 40,
        overflow: "hidden",
        "& .specialFilm": (_b = {
                height: "700px",
                position: "relative"
            },
            _b[theme.breakpoints.down("md")] = {
                height: "500px"
            },
            _b["& .overlay"] = {
                position: "absolute",
                inset: " 0 0 0 0",
                background: "rgba(0,0,0,.5)"
            },
            _b["&__item--content"] = (_c = {
                    position: "absolute",
                    width: "40%",
                    display: "flex",
                    height: "100%",
                    paddingLeft: "5rem",
                    background: "rgba(0,0,0,.8)"
                },
                _c[theme.breakpoints.down("md")] = {
                    width: "100%",
                    background: "rgba(0,0,0,.4)",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    height: "100%"
                },
                _c["&::before"] = {
                    content: '""',
                    position: "absolute",
                    left: "100%",
                    top: "0",
                    width: "40%",
                    height: "100%",
                    background: "linear-gradient(to right, rgba(0,0,0,0.8),rgba(0,0,0,0))"
                },
                _c["&__wrap"] = {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    "& > div": {
                        paddingTop: theme.spacing(3)
                    }
                },
                _c["&__title"] = {
                    fontWeight: "bold"
                },
                _c["&__movieInfos"] = {
                    display: "flex",
                    "& > div:nth-of-type(1), & > div:nth-of-type(2)": {
                        display: "flex",
                        alignItems: "center"
                    },
                    "& >div:not(:last-child)": {
                        marginRight: theme.spacing(2)
                    }
                },
                _c["&__description"] = {
                    fontWeight: "bold",
                    fontSize: "1.15rem",
                    lineHeight: "1.5rem"
                },
                _c["&__action"] = {
                    position: "relative",
                    width: "200px",
                    zIndex: 0,
                    "& a": {
                        padding: theme.spacing(1),
                        display: "flex",
                        alignItems: "center"
                    }
                },
                _c),
            _b)
    });
});
var SpecialFilmComponent = function () {
    return (react_1["default"].createElement(Section, null,
        react_1["default"].createElement("div", { className: "specialFilm" },
            react_1["default"].createElement(image_1["default"], { src: "/images/transformer-banner.jpg", layout: "fill", alt: "" }),
            react_1["default"].createElement("div", { className: "overlay" }),
            react_1["default"].createElement("div", { className: "specialFilm__item--content" },
                react_1["default"].createElement("div", { className: "specialFilm__item--content__wrap" },
                    react_1["default"].createElement(Typography_1["default"], { variant: "h2", className: "specialFilm__item--content__title" }, "Transformer"),
                    react_1["default"].createElement("div", { className: "specialFilm__item--content__movieInfos" },
                        react_1["default"].createElement("div", { className: "main__Introduce__evaluate" },
                            react_1["default"].createElement(Star_1["default"], { sx: { color: color_1.main_color } }),
                            react_1["default"].createElement("span", null, "9.5")),
                        react_1["default"].createElement("div", { className: "main__Introduce__evaluate" },
                            react_1["default"].createElement(AccessTime_1["default"], { sx: { color: color_1.main_color } }),
                            react_1["default"].createElement("span", null, "120 mins")),
                        react_1["default"].createElement("div", null, "HD"),
                        react_1["default"].createElement("div", null, "16+")),
                    react_1["default"].createElement("div", { className: "specialFilm__item--content__description" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit."),
                    react_1["default"].createElement("div", { className: "specialFilm__item--content__action" },
                        react_1["default"].createElement(Button_1.ButtonSignIn, null,
                            react_1["default"].createElement(link_1["default"], { href: "#" },
                                react_1["default"].createElement("a", null,
                                    react_1["default"].createElement(PlayArrow_1["default"], null),
                                    react_1["default"].createElement("span", null, "Watch Now"))))))))));
};
exports["default"] = SpecialFilmComponent;
