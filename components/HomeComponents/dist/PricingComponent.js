"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var color_1 = require("../color");
var Typography_1 = require("@mui/material/Typography");
var Card_1 = require("../layout/Card");
var Section = styles_1.styled("div")(function (_a) {
    var _b;
    var theme = _a.theme;
    return ({
        margin: theme.spacing(5, 3, 5, 3),
        "& > h3": {
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: theme.spacing(5)
        },
        "& .Pricing__items": (_b = {
                display: "flex",
                "&>*": {
                    flex: 1
                }
            },
            _b[theme.breakpoints.down("md")] = {
                flexDirection: "column"
            },
            _b)
    });
});
var PricingComponent = function () {
    return (react_1["default"].createElement(Section, null,
        react_1["default"].createElement(Typography_1["default"], { variant: "h3" },
            "FL",
            react_1["default"].createElement("span", { style: { color: color_1.main_color } }, "I"),
            "X PRICING"),
        react_1["default"].createElement("div", { className: "Pricing__items" },
            react_1["default"].createElement(Card_1["default"], null),
            react_1["default"].createElement(Card_1["default"], null),
            react_1["default"].createElement(Card_1["default"], null))));
};
exports["default"] = PricingComponent;
