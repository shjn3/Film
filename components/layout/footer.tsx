import React from "react";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";

import { box_bg, main_color } from "../color";
import { listFooter } from "../list";
import Link from "next/link";
import Img from "next/image";

import GooglePlay from "../../assets/images/google-play.png";
import AppStore from "../../assets/images/app-store.png";

import Logo from "./logo";

const WrapFooter = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  backgroundColor: box_bg,
  width: "100%",
  padding: theme.spacing(5, 3, 5, 3),
  "& > div": {
    marginRight: theme.spacing(5),
  },
  "& > div:nth-of-type(1)": {
    flex: 1,
    "& > *": {
      paddingBottom: theme.spacing(2),
    },
    "& >div": {
      display: "flex",
      flexDirection: "row",
      paddingTop: theme.spacing(1),
      "& >i": {
        paddingRight: theme.spacing(3),
        color: main_color,
        "&::before": {
          background: "white",
          borderRadius: "50%",
          padding: theme.spacing(1),
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      flex: 1,
    },
  },
  "& > div:nth-of-type(2)": {
    paddingTop: theme.spacing(4),
    flex: 2,
    display: "flex",
    "& > ul": {
      width: "100%",
      display: "flex",
      "& >li": {
        flex: 1,
        "& > ul > li > a": {
          display: "block",
          transition: "all .2s linear",
          "&:hover": {
            color: main_color,
            transform: "translateX(5px)",
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      "&> div": {
        marginTop: theme.spacing(3),
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const WrapImage = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
  transition: "all .4s linear",
  cursor: "pointer",
  "&:hover": {
    transform: "translateX(10px)",
  },
}));

const FooterFilm = () => {
  return (
    <>
      <WrapFooter>
        <div>
          <Logo />
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea non,
            praesentium quia reiciendis autem molestiae.
          </Typography>
          <div>
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-twitter"></i>
          </div>
        </div>
        <div className="main__footer">
          <ul>
            {listFooter.map((item) => (
              <li key={item.id}>
                <span style={{ fontWeight: "bold" }}>{item.value}</span>{" "}
                <ul>
                  {item.list?.map((_item) => (
                    <li key={_item.id}>
                      <Link href={_item.link}>
                        <a>{_item.value}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="download__footer">
            <span style={{ fontWeight: "bold" }}>Download app</span>
            <WrapImage>
              <Img
                width={120}
                height={50}
                layout={"fixed"}
                src={GooglePlay}
                alt="GooglePlay"
              />
            </WrapImage>

            <WrapImage>
              <Img
                width={120}
                height={50}
                layout={"fixed"}
                src={AppStore}
                alt="AppStore"
              />
            </WrapImage>
          </div>
        </div>
      </WrapFooter>
      <div
        style={{
          background: box_bg,
          textAlign: "center",
          marginTop: "2px",
        }}
      >
        Copyright 2021 Tuat Tran Anh All Right Reserved
      </div>
    </>
  );
};

export default FooterFilm;
