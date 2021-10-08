import React, { useState } from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ToolBar from "@mui/material/ToolBar";

import { listMenu } from "../list";
import { ButtonSignIn } from "./Button";

import Logo from "./logo";

const WrapMenuItem = styled("div")(({ theme }) => ({
  display: "flex",
  "& >ul": {
    display: "flex",
    "& > li": {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      fontWeight: "bold",
    },
  },
  "& .WrapBtnSignIn": {
    width: "100px",
  },
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    top: "60px",
    left: "-60vw",
    width: "60vw",
    height: "100vh",
    backgroundColor: "black",

    display: "flex",
    flexDirection: "Column",
    alignItems: "center",
    textAlign: "center",
    zIndex: -1,
    transition: "all .6s linear",
    "&>ul": {
      flexDirection: "Column",
      "&>li": {
        margin: theme.spacing(1),
      },
    },
    "& .WrapBtnSignIn": {
      marginTop: theme.spacing(1),
    },
    "&.active": {
      left: 0,
    },
  },
}));

const WrapMenuIcon = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "20px",
    height: "3px",
    background: "white",
    position: "relative",
    cursor: "pointer",
    transition: "all .1s linear",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "white",
      top: "-7px",
      transition: "all .3s linear",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "white",
      bottom: "-7px",
      transition: "all .3s linear",
    },
    "&.active": {
      background: "transparent",
      "&::before": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "white",
        transform: "rotate(45deg)",
        top: 0,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "white",
        transform: "rotate(-45deg)",
        bottom: 0,
      },
    },
  },
}));

const HeaderFilm = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ flexGrow: 1, backgroundColor: "#000" }}>
        <ToolBar>
          <Logo />

          <WrapMenuIcon
            className={isShowMenu ? "active" : ""}
            onClick={() => setIsShowMenu(!isShowMenu)}
          ></WrapMenuIcon>

          <WrapMenuItem className={isShowMenu ? "active" : ""}>
            <ul>
              {listMenu.map((item) => (
                <li key={item.id}>
                  <Link href={item.link}>
                    <a>{item.value}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="WrapBtnSignIn">
              <ButtonSignIn>SIGN IN</ButtonSignIn>
            </div>
          </WrapMenuItem>
        </ToolBar>
      </AppBar>
    </Box>
  );
};

export default HeaderFilm;
