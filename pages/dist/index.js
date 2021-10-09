"use strict";
exports.__esModule = true;
var IntroduceComponents_1 = require("../components/HomeComponents/IntroduceComponents");
var footer_1 = require("../components/layout/footer");
var header_1 = require("../components/layout/header");
var SpecialFilmComponent_1 = require("../components/HomeComponents/SpecialFilmComponent");
var PricingComponent_1 = require("../components/HomeComponents/PricingComponent");
var LatestMovieComponent_1 = require("../components/HomeComponents/LatestMovieComponent");
var TopFilmComponent_1 = require("../components/HomeComponents/TopFilmComponent");
var Home = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(header_1["default"], null),
        React.createElement(IntroduceComponents_1["default"], null),
        React.createElement(TopFilmComponent_1["default"], null),
        React.createElement(LatestMovieComponent_1["default"], null),
        React.createElement(LatestMovieComponent_1["default"], null),
        React.createElement(LatestMovieComponent_1["default"], null),
        React.createElement(SpecialFilmComponent_1["default"], null),
        React.createElement(PricingComponent_1["default"], null),
        React.createElement(footer_1["default"], null)));
};
exports["default"] = Home;
