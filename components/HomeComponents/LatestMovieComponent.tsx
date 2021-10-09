import React from "react";
import { styled } from "@mui/material/styles";
import { main_color } from "../color";
import { CardLatestMovie } from "../layout/Card";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Section = styled("div")(({ theme }) => ({
  margin: theme.spacing(5, 5),
  padding: theme.spacing(5, 2),
  "& .latestMovie__title": {
    fontSize: "2rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderLeft: `7px solid ${main_color}`,
    paddingLeft: theme.spacing(3),
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
        margin: theme.spacing(1),
      },
      "&:hover": {
        color: main_color,
      },
    },
    "& .btnNext": {
      right: 20,
    },
    "& .btnPrev": {
      left: 10,
    },
    "& .latestMovie__content": {
      display: "flex",
      marginTop: theme.spacing(5),
      width: `calc((100vw - 2 * ${theme.spacing(5)} - 2 * ${theme.spacing(
        2
      )}) * 2)`,
      "&__wrapItem": {
        width: `calc(12.5% - ${theme.spacing(2)})`,
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down("md")]: {
        width: `calc((100vw - 2 * ${theme.spacing(5)} - 2 * ${theme.spacing(
          2
        )}) * 4)`,
        "&__wrapItem": {
          width: `calc(25% - ${theme.spacing(2)})`,
        },
      },
      [theme.breakpoints.down(700)]: {
        width: `calc((100vw - 2 * ${theme.spacing(5)} - 2 * ${theme.spacing(
          2
        )}) * 8)`,
        "&__wrapItem": {
          width: `calc(50% - ${theme.spacing(2)})`,
        },
      },
    },
  },
}));

const LatestMovieComponent = () => {
  const handleClickCarousel = (isLeft: boolean) => {
    if (isLeft) {
      console.log("abc");
    } else {
      console.log("abc");
    }
  };
  return (
    <Section>
      <div className="latestMovie__title">latest movies</div>
      <div className="latestMovie__wrapContent">
        <div className="btnPrev" onClick={() => handleClickCarousel(true)}>
          <KeyboardArrowLeftIcon className="carouselIcon" />
        </div>
        <div className="btnNext" onClick={() => handleClickCarousel(false)}>
          <KeyboardArrowRightIcon className="carouselIcon" />
        </div>
        <div className="latestMovie__content">
          <div className="latestMovie__content__wrapItem">
            <CardLatestMovie />
          </div>
          <div className="latestMovie__content__wrapItem">
            <CardLatestMovie />
          </div>
          <div className="latestMovie__content__wrapItem">
            <CardLatestMovie />
          </div>
          <div className="latestMovie__content__wrapItem">
            <CardLatestMovie />
          </div>
          <div className="latestMovie__content__wrapItem">
            <CardLatestMovie />
          </div>
          <div className="latestMovie__content__wrapItem">
            <CardLatestMovie />
          </div>
          <div className="latestMovie__content__wrapItem">
            <CardLatestMovie />
          </div>
          <div className="latestMovie__content__wrapItem">
            <CardLatestMovie />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LatestMovieComponent;
