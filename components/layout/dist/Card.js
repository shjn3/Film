"use strict";
exports.__esModule = true;
exports.CardTopFilm = exports.CardIntroduce = exports.CardLatestMovie = void 0;
var react_1 = require("react");
var link_1 = require("next/link");
var image_1 = require("next/image");
var styles_1 = require("@mui/material/styles");
var Typography_1 = require("@mui/material/Typography");
var Star_1 = require("@mui/icons-material/Star");
var AccessTime_1 = require("@mui/icons-material/AccessTime");
var PlayArrow_1 = require("@mui/icons-material/PlayArrow");
var color_1 = require("../color");
var Button_1 = require("./Button");
var WrapCard = styles_1.styled("div")(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            margin: theme.spacing(2),
            background: color_1.box_bg,
            transition: "transform .3s ease-in-out",
            "&:hover": {
                transform: "translateY(-20px)"
            },
            "& .card__wrapContent": {
                margin: theme.spacing(4, 3),
                lineHeight: 2,
                position: "relative"
            }
        },
        _b[theme.breakpoints.down("md")] = {
            "&:hover": {
                transform: "translateY(0px)"
            }
        },
        _b["& .card__content"] = {
            fontSize: "1.5rem",
            "&--title": {
                display: "flex",
                justifyContent: "space-between",
                fontSize: "2rem"
            },
            "&--infos": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: theme.spacing(5),
                "& > div:nth-of-type(3), &>div:nth-of-type(4)": {
                    textDecoration: "line-through"
                }
            },
            "&--register": {
                display: "flex",
                position: "relative",
                marginTop: theme.spacing(5),
                justifyContent: "center",
                zIndex: 0,
                "& .btnRegister": {
                    width: "50%"
                },
                "& a": {
                    fontSize: "1.5rem",
                    textTransform: "uppercase"
                }
            }
        },
        _b);
});
var Card = function () {
    return (react_1["default"].createElement(WrapCard, null,
        react_1["default"].createElement("div", { className: "card__wrapContent" },
            react_1["default"].createElement("div", { className: "card__content" },
                react_1["default"].createElement("div", { className: "card__content--title" },
                    react_1["default"].createElement("div", null, "Basic"),
                    react_1["default"].createElement("div", null, "Free")),
                react_1["default"].createElement("div", { className: "card__content--infos" },
                    react_1["default"].createElement("div", null, "Originals"),
                    react_1["default"].createElement("div", null, "Switch plans anytime"),
                    react_1["default"].createElement("div", null, "65+ top live"),
                    react_1["default"].createElement("div", null, "TV Channels")),
                react_1["default"].createElement("div", { className: "card__content--register" },
                    react_1["default"].createElement("div", { className: "btnRegister" },
                        react_1["default"].createElement(Button_1.ButtonSignIn, null,
                            react_1["default"].createElement(link_1["default"], { href: "#" },
                                react_1["default"].createElement("a", null, "register now")))))))));
};
exports["default"] = Card;
var WrapCardLatestMovie = styles_1.styled("div")(function (_a) {
    var theme = _a.theme;
    return ({
        height: "500px",
        position: "relative",
        cursor: "pointer",
        width: "100%",
        "& .imgBanner": {
            transition: "transform .3s linear"
        },
        "&:hover .imgBanner": {
            transform: "scale(1.2)"
        },
        "& .CardLatestMovie__content": {
            position: "absolute",
            background: "rgba(0,0,0,.8)",
            padding: theme.spacing(2),
            display: "flex",
            flexDirection: "column",
            width: "100%",
            bottom: 0,
            "&::before": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "50%",
                top: "-50%",
                left: 0,
                background: "linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,0))"
            },
            "&--movieInfos": {
                display: "flex",
                marginTop: theme.spacing(4),
                "&>div:nth-of-type(1),&>div:nth-of-type(2)": {
                    display: "flex",
                    alignItems: "center"
                },
                "&>div:not(:last-child)": {
                    marginRight: theme.spacing(2)
                }
            }
        }
    });
});
exports.CardLatestMovie = function () {
    return (react_1["default"].createElement(WrapCardLatestMovie, null,
        react_1["default"].createElement(image_1["default"], { src: "/images/cartoons/coco.jpg", alt: "", layout: "fill", className: "imgBanner" }),
        react_1["default"].createElement("div", { className: "CardLatestMovie__content" },
            react_1["default"].createElement(Typography_1["default"], { variant: "h5", sx: { fontWeight: "bold" } }, "Stanger Things"),
            react_1["default"].createElement("div", { className: "CardLatestMovie__content--movieInfos" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(Star_1["default"], { sx: { color: color_1.main_color, mr: 1 } }),
                    react_1["default"].createElement("span", null, "9.5")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(AccessTime_1["default"], { sx: { color: color_1.main_color, mr: 1 } }),
                    react_1["default"].createElement("span", null, "120 mins")),
                react_1["default"].createElement("div", null, "HD"),
                react_1["default"].createElement("div", null, "16+")))));
};
var WrapCardIntroduce = styles_1.styled("div")(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {
            height: "700px",
            width: "100%",
            position: "relative",
            "& .overlay": {
                position: "absolute",
                inset: "0 0 0 0",
                background: "rgba(0,0,0,.5)"
            },
            "& .Introduce__wrapContent": (_c = {
                    position: "absolute",
                    zIndex: 0,
                    display: "flex",
                    width: "40%",
                    height: "100%",
                    background: "rgba(0,0,0,.8)",
                    "&::before": {
                        position: "absolute",
                        content: '""',
                        width: "40%",
                        height: "100%",
                        left: "100%",
                        top: 0,
                        background: "linear-gradient(to right,rgba(0,0,0,.8),rgba(0,0,0,0))"
                    },
                    "& .Introduce__content": {
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: "5rem",
                        justifyContent: "center",
                        "&--title": {
                            fontWeight: "bold"
                        },
                        "&--movieInfos": {
                            display: "flex",
                            alignItems: "center",
                            "& > div:nth-of-type(1),& > div:nth-of-type(2)": {
                                display: "flex",
                                alignItems: "center"
                            },
                            "&>div:not(:last-child)": {
                                marginRight: theme.spacing(2)
                            }
                        },
                        "&--description": {
                            fontSize: "1.4rem",
                            lineHeight: "1.3"
                        },
                        "&--watchNow": {
                            width: "40%",
                            "& a": {
                                display: "flex",
                                alignItems: "center",
                                padding: theme.spacing(1, 0),
                                fontWeight: "bold"
                            }
                        },
                        "& .top-down": {
                            marginTop: theme.spacing(4),
                            transform: "translateY(-50px)",
                            opacity: 0,
                            visibility: "hidden",
                            transition: "all 1s ease-in-out"
                        }
                    }
                },
                _c[theme.breakpoints.down("md")] = {
                    width: "100%",
                    background: "rgba(0,0,0,.4)",
                    "& .Introduce__content": {
                        paddingLeft: "3rem",
                        paddingRight: "2rem",
                        "&--description": {
                            fontSize: "1rem",
                            lineHeight: "1.3"
                        }
                    }
                },
                _c),
            "&.active": {
                "& .Introduce__wrapContent": {
                    "& .Introduce__content": {
                        "& .top-down": {
                            transform: "translateY(0)",
                            opacity: 1,
                            visibility: "visible",
                            "&.delay-2": {
                                transitionDelay: ".2s"
                            },
                            "&.delay-4": {
                                transitionDelay: ".4s"
                            },
                            "&.delay-6": {
                                transitionDelay: ".6s"
                            }
                        }
                    }
                }
            }
        },
        _b[theme.breakpoints.down("md")] = {
            height: "500px"
        },
        _b);
});
exports.CardIntroduce = function (_a) {
    var listIntroduce = _a.listIntroduce, active = _a.active;
    var src = listIntroduce.src, link = listIntroduce.link, description = listIntroduce.description;
    return (react_1["default"].createElement(WrapCardIntroduce, { className: active ? "active" : "" },
        react_1["default"].createElement(image_1["default"], { src: src, alt: "", layout: "fill" }),
        react_1["default"].createElement("div", { className: "overlay" }),
        react_1["default"].createElement("div", { className: "Introduce__wrapContent" },
            react_1["default"].createElement("div", { className: "Introduce__content" },
                react_1["default"].createElement(Typography_1["default"], { variant: "h1", className: "Introduce__content--title top-down" }, description),
                react_1["default"].createElement("div", { className: "Introduce__content--movieInfos top-down delay-2" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(Star_1["default"], { sx: { color: color_1.main_color, mr: 1 } }),
                        react_1["default"].createElement("span", null, "9.5")),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(AccessTime_1["default"], { sx: { color: color_1.main_color, mr: 1 } }),
                        react_1["default"].createElement("span", null, "120 mins")),
                    react_1["default"].createElement("div", null, "HD"),
                    react_1["default"].createElement("div", null, "16+")),
                react_1["default"].createElement(Typography_1["default"], { className: "Introduce__content--description top-down delay-4" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit."),
                react_1["default"].createElement("div", { className: "Introduce__content--watchNow top-down delay-6" },
                    react_1["default"].createElement(Button_1.ButtonSignIn, null,
                        react_1["default"].createElement(link_1["default"], { href: link },
                            react_1["default"].createElement("a", null,
                                react_1["default"].createElement(PlayArrow_1["default"], null),
                                react_1["default"].createElement("span", null, "WATCH NOW")))))))));
};
var WrapCardTopFilm = styles_1.styled("div")(function (_a) {
    var theme = _a.theme;
    return ({
        width: "100%",
        height: "100%",
        position: "relative",
        "& .imgBanner": {
            transition: "transform .5s linear"
        },
        "&:hover .imgBanner": {
            transform: " scale(1.2)"
        },
        "& .topFilm__content": {
            position: "absolute",
            background: "rgba(0,0,0,.8)",
            width: "100%",
            bottom: "0",
            padding: theme.spacing(3, 2),
            "&::before": {
                content: '""',
                position: "absolute",
                bottom: "100%",
                left: "0",
                width: "100%",
                height: "50%",
                background: "linear-gradient(to top, rgba(0,0,0,.8),rgba(0,0,0,0))"
            },
            "&--title": {},
            "&--movieInfos": {
                marginTop: theme.spacing(4),
                display: "flex",
                alignItems: "center",
                "& > div:nth-of-type(1),& > div:nth-of-type(2)": {
                    display: "flex",
                    alignItems: "center"
                },
                "& > div:not(:last-child)": {
                    marginRight: theme.spacing(2)
                }
            }
        }
    });
});
exports.CardTopFilm = function (_a) {
    var listTopFilm = _a.listTopFilm;
    var src = listTopFilm.src, description = listTopFilm.description;
    return (react_1["default"].createElement(WrapCardTopFilm, null,
        react_1["default"].createElement(image_1["default"], { src: src, alt: "", layout: "fill", className: "imgBanner" }),
        react_1["default"].createElement("div", { className: "topFilm__content" },
            react_1["default"].createElement(Typography_1["default"], { variant: "h4", className: "topFilm__content--title" }, description),
            react_1["default"].createElement("div", { className: "topFilm__content--movieInfos" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(Star_1["default"], { sx: { color: color_1.main_color, mr: 1 } }),
                    react_1["default"].createElement("span", null, "9.5")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(AccessTime_1["default"], { sx: { color: color_1.main_color, mr: 1 } }),
                    react_1["default"].createElement("span", null, "120 mins")),
                react_1["default"].createElement("div", null, "HD"),
                react_1["default"].createElement("div", null, "16+")))));
};
