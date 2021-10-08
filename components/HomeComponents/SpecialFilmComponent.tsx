import React from "react";
import Link from "next/link";
import Image from "next/image";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { main_color } from "../color";

import { ButtonSignIn } from "../layout/Button";

const Section = styled("div")(({ theme }) => ({
  position: "relative",
  paddingTop: 40,
  overflow: "hidden",
  "& .specialFilm": {
    height: "700px",
    position: "relative",
    "& .overlay": {
      position: "absolute",
      inset: " 0 0 0 0",
      background: "rgba(0,0,0,.5)",
    },
    "&__item--content": {
      position: "absolute",
      width: "40%",
      display: "flex",
      height: "100%",
      paddingLeft: "5rem",
      background: "rgba(0,0,0,.8)",
      "&::before": {
        content: '""',
        position: "absolute",
        left: "100%",
        top: "0",
        width: "40%",
        height: "100%",
        background: "linear-gradient(to right, rgba(0,0,0,0.8),rgba(0,0,0,0))",
      },
      "&__wrap": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "& > div": {
          paddingTop: theme.spacing(3),
        },
      },
      "&__title": {
        fontWeight: "bold",
      },
      "&__movieInfos": {
        display: "flex",
        "& > div:nth-of-type(1), & > div:nth-of-type(2)": {
          display: "flex",
          alignItems: "center",
        },
        "& >div:not(:last-child)": {
          marginRight: theme.spacing(2),
        },
      },
      "&__description": {
        fontWeight: "bold",
        fontSize: "1.15rem",
        lineHeight: "1.5rem",
      },
      "&__action": {
        position: "relative",
        width: "200px",
        zIndex: 0,
        "& a": {
          padding: theme.spacing(1),
          display: "flex",
          alignItems: "center",
        },
      },
    },
  },
}));

const SpecialFilmComponent = () => {
  return (
    <Section>
      <div className="specialFilm">
        <Image src="/images/transformer-banner.jpg" layout="fill" alt="" />
        <div className="overlay"></div>
        <div className="specialFilm__item--content">
          <div className="specialFilm__item--content__wrap">
            <Typography
              variant="h2"
              className="specialFilm__item--content__title"
            >
              Transformer
            </Typography>
            <div className="specialFilm__item--content__movieInfos">
              <div className="main__Introduce__evaluate">
                <StarIcon sx={{ color: main_color }} />
                <span>9.5</span>
              </div>
              <div className="main__Introduce__evaluate">
                <AccessTimeIcon sx={{ color: main_color }} />
                <span>120 mins</span>
              </div>
              <div>HD</div>
              <div>16+</div>
            </div>
            <div className="specialFilm__item--content__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              possimus eius. Deserunt non odit, cum vero reprehenderit
              laudantium odio vitae autem quam, incidunt molestias ratione
              mollitia accusantium, facere ab suscipit.
            </div>
            <div className="specialFilm__item--content__action">
              <ButtonSignIn>
                <Link href="#">
                  <a>
                    <PlayArrowIcon />
                    <span>Watch Now</span>
                  </a>
                </Link>
              </ButtonSignIn>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SpecialFilmComponent;
