import React from "react";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import Typography from "@mui/material/Typography";

import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import { main_color } from "../color";
const WrapLogo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
const WrapMovieIcon = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: "5px",
  animation: "myAnimation 2s infinite",
  transition: "all .2s linear",
  "& > *": {
    fontSize: "2.7rem",
    color: main_color,
  },
  "@keyframes myAnimation": {
    "0%": {
      transform: "scale3d(1,1,1)",
    },
    "10%,20%": {
      transform: "scale3d(.95,.95,.95) rotate3d(0,0,1,-10deg)",
    },
    "30%,50%,70%,90%": {
      transform: "scale3d(1,1,1) rotate3d(0,0,1,10deg)",
    },
    "40%,60%,80%": {
      transform: "rotate3d(0,0,1,-10deg)",
    },
    "100%": {
      transform: "scale3d(1,1,1)",
    },
  },
}));
const Logo = () => {
  return (
    <WrapLogo sx={{ flexGrow: 1 }}>
      <WrapMovieIcon>
        <MovieCreationIcon />
      </WrapMovieIcon>
      <Typography variant="h4" noWrap sx={{ fontWeight: "bold" }}>
        <Link href="#">
          <a>
            Fl<span style={{ color: main_color }}>i</span>x
          </a>
        </Link>
      </Typography>
    </WrapLogo>
  );
};

export default Logo;
