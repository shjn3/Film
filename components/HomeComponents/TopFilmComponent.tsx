import React from "react";
import { _listTopFilm } from "../list";
import { styled } from "@mui/material/styles";
import { CardTopFilm } from "../layout/Card";
const WrapTopFilm = styled("div")(({ theme }) => ({
  position: "relative",
  top: -50,
  height: "600px",
  width: "100%",
  overflow: "hidden",
  "& .topFilm__wrapItems": {
    width: `calc( (100vw / 4 ) * 8)`,
    height: "100%",
    position: "relative",
    display: "flex",
    "& .topFilm__wrapItem": {
      position: "relative",
      width: `calc(100vw / 4)`,
      height: "100%",
    },
  },
}));
const TopFilmComponent = () => {
  return (
    <WrapTopFilm>
      <div className="topFilm__wrapItems">
        <div className="topFilm__wrapItem">
          <CardTopFilm />
        </div>
        <div className="topFilm__wrapItem">
          <CardTopFilm />
        </div>
        <div className="topFilm__wrapItem">
          <CardTopFilm />
        </div>
        <div className="topFilm__wrapItem">
          <CardTopFilm />
        </div>
        <div className="topFilm__wrapItem">
          <CardTopFilm />
        </div>
      </div>
    </WrapTopFilm>
  );
};

export default TopFilmComponent;
