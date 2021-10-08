import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { ButtonSignIn } from "../layout/Button";
import { main_color } from "../color";
import Image from "next/image";

import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import { _listIntroduce } from "../list";
import TopFilmComponent from "./TopFilmComponent";
import { CardIntroduce } from "../layout/Card";
const WrapIntroduce = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
}));

const WrapSliceIcon = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  "& .Introduce_btnCarousel": {
    fontSize: "3rem",
    borderRadius: "50%",
    background: "#000",
    cursor: "pointer",
    "&:hover": {
      color: main_color,
    },
  },
  "&.Introduce__wrapBtnPrev": {
    left: 10,
  },
  "&.Introduce__wrapBtnNext": {
    right: 10,
  },
}));
const IntroduceComponents = () => {
  const ref = useRef(null);
  const minNumber = 1,
    maxNumber = _listIntroduce.length;
  const [NumberActive, setNumberActive] = useState(1);
  const [height, setHeight] = useState(-1);

  useEffect(() => {
    setHeight(NumberActive - 1);
  }, [NumberActive]);

  const handleSliceLeft = () => {
    if (NumberActive !== 1) {
      setNumberActive(NumberActive - 1);
    }
  };
  const handleSliceRight = () => {
    if (NumberActive !== maxNumber) {
      setNumberActive(NumberActive + 1);
    } else {
      setNumberActive(minNumber);
    }
  };
  return (
    <WrapIntroduce>
      <div style={{ transform: "translate3d(0,0,0)" }} ref={ref}>
        <CardIntroduce />
      </div>
      <WrapSliceIcon
        className="Introduce__wrapBtnPrev"
        onClick={handleSliceLeft}
      >
        <KeyboardArrowLeftIcon className="Introduce_btnCarousel" />
      </WrapSliceIcon>
      <WrapSliceIcon
        className="Introduce__wrapBtnNext"
        onClick={handleSliceRight}
      >
        <KeyboardArrowRightIcon className="Introduce_btnCarousel" />
      </WrapSliceIcon>
    </WrapIntroduce>
  );
};

export default IntroduceComponents;
