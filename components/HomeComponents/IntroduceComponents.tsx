import React, { useState, useRef, useEffect, useMemo } from "react";
import { styled } from "@mui/material/styles";
import { main_color } from "../color";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import { _listIntroduce } from "../list";
import { CardIntroduce } from "../layout/Card";
const WrapIntroduce = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  "& .Introduce__wrapItems": {
    position: "relative",
    display: "flex",
    "& .Introduce__wrapItem": {
      position: "relative",
      width: "100vw",
    },
  },
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
  "&.Introduce__wrapBtnPrev,&.Introduce__wrapBtnNext": {
    transition: "opacity .3s ease-in",
    "&.disabled": {
      pointerEvents: "none",
      opacity: 0.5,
    },
  },
  "&.Introduce__wrapBtnPrev": {
    left: 10,
  },
  "&.Introduce__wrapBtnNext": {
    right: 10,
  },
  [theme.breakpoints.down("md")]: {
    "& .Introduce_btnCarousel": {
      fontSize: "2rem",
    },
    "&.Introduce__wrapBtnPrev": {
      left: 2,
    },
    "&.Introduce__wrapBtnNext": {
      right: 2,
    },
  },
}));
const IntroduceComponents = () => {
  const mainRef = useRef<any>(null);
  const btnNextRef = useRef<any>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const arrLength = _listIntroduce.length;
  const [elRefs, setElRefs] = useState([]);
  const [NumberActive, setNumberActive] = useState(0);

  useEffect(() => {
    for (let i = 0; i < arrLength; i++) {
      elRefs[i] = elRefs[i] || React.createRef();
    }
  }, [arrLength, elRefs]);
  useEffect(() => {
    if (mainRef.current !== null) {
      console.log(NumberActive);
      if (NumberActive === arrLength + 1) {
        mainRef.current.style.transform = "translate3d(0,0,0)";
        mainRef.current.style.transition = "none";
        setNumberActive(1);
      } else {
        if (NumberActive === 0) {
          mainRef.current.style.transform = `translate3d(${-(
            (arrLength + 1) *
            100
          )}vw,0,0)`;
          mainRef.current.style.transition = "none";
          setNumberActive(arrLength);
        } else {
          mainRef.current.style.transform = `translate3d(${
            -100 * NumberActive
          }vw,0,0)`;
          mainRef.current.style.transition = "all .25s ease-in 0s";
        }
      }
    }
  }, [NumberActive, arrLength]);
  const handleSlice = (isPrev: boolean) => {
    if (isPrev) {
      setNumberActive(NumberActive - 1);
    } else {
      setNumberActive(NumberActive + 1);
    }
  };

  return (
    <WrapIntroduce>
      <div
        style={{
          transform: "translate3d(0,0,0)",
          width: `${(arrLength + 2) * 100}vw`,
        }}
      >
        <div className="Introduce__wrapItems" ref={mainRef}>
          <div className="Introduce__wrapItem clone" ref={elRefs[0]}>
            <CardIntroduce
              active={false}
              listIntroduce={_listIntroduce[arrLength - 1]}
            />
          </div>
          {_listIntroduce.map((item) => (
            <div
              className="Introduce__wrapItem"
              ref={elRefs[item.id]}
              key={item.id}
            >
              <CardIntroduce
                active={item.id === NumberActive}
                listIntroduce={item}
              />
            </div>
          ))}
          <div className="Introduce__wrapItem clone" ref={elRefs[arrLength]}>
            <CardIntroduce active={false} listIntroduce={_listIntroduce[0]} />
          </div>
        </div>
      </div>
      <WrapSliceIcon
        className="Introduce__wrapBtnPrev"
        onClick={() => handleSlice(true)}
      >
        <KeyboardArrowLeftIcon className="Introduce_btnCarousel" />
      </WrapSliceIcon>
      <WrapSliceIcon
        className={"Introduce__wrapBtnNext"}
        onClick={() => handleSlice(false)}
      >
        <KeyboardArrowRightIcon className="Introduce_btnCarousel" />
      </WrapSliceIcon>
    </WrapIntroduce>
  );
};

export default IntroduceComponents;
