import React, { useEffect, useRef, useState } from "react";
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
    height: "100%",
    position: "relative",
    display: "flex",
    "& .topFilm__wrapItem": {
      position: "relative",
      height: "100%",
    },
  },
  [theme.breakpoints.down("md")]: {
    top: 0,
  },
}));
const TopFilmComponent = () => {
  const arrLength = _listTopFilm.length;
  const ref = useRef<any>(null);
  const [NumberActive, setNumberActive] = useState(1);

  useEffect(() => {
    if (NumberActive === arrLength + 1) {
      ref.current.style.transform = "translate3d(0,0,0)";
      ref.current.style.transition = "none";
      setNumberActive(1);
    } else {
      ref.current.style.transform = `translate3d(calc((-100%/${
        arrLength + 4
      })*${NumberActive}),0,0)`;
      ref.current.style.transition = "all .2s ease-in";
    }
  }, [NumberActive, arrLength]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumberActive(NumberActive + 1);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <WrapTopFilm>
      <div
        className="topFilm__wrapItems"
        ref={ref}
        style={{ width: `calc( (25% * ${arrLength + 4})` }}
      >
        <div
          className="topFilm__wrapItem clone"
          style={{ width: `calc(100% / ${arrLength + 4})` }}
        >
          <CardTopFilm listTopFilm={_listTopFilm[arrLength - 1]} />
        </div>
        {_listTopFilm.map((item) => (
          <div
            className="topFilm__wrapItem "
            key={item.id}
            style={{ width: `calc(100% / ${arrLength + 4})` }}
          >
            <CardTopFilm listTopFilm={item} />
          </div>
        ))}
        <div
          className="topFilm__wrapItem clone"
          style={{ width: `calc(100% / ${arrLength + 4})` }}
        >
          <CardTopFilm listTopFilm={_listTopFilm[0]} />
        </div>
        <div
          className="topFilm__wrapItem clone"
          style={{ width: `calc(100% / ${arrLength + 4})` }}
        >
          <CardTopFilm listTopFilm={_listTopFilm[1]} />
        </div>
        <div
          className="topFilm__wrapItem clone"
          style={{ width: `calc(100% / ${arrLength + 4})` }}
        >
          <CardTopFilm listTopFilm={_listTopFilm[2]} />
        </div>
      </div>
    </WrapTopFilm>
  );
};

export default TopFilmComponent;
