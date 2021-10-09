import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { main_color, box_bg } from "../color";
import { ButtonSignIn } from "./Button";

const WrapCard = styled("div")(({ theme }) => ({
  margin: theme.spacing(2),
  background: box_bg,
  transition: "transform .3s ease-in-out",
  "&:hover": {
    transform: "translateY(-20px)",
  },
  "& .card__wrapContent": {
    margin: theme.spacing(4, 3),
    lineHeight: 2,
    position: "relative",
  },
  [theme.breakpoints.down("md")]: {
    "&:hover": {
      transform: "translateY(0px)",
    },
  },
  "& .card__content": {
    fontSize: "1.5rem",
    "&--title": {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "2rem",
    },
    "&--infos": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: theme.spacing(5),
      "& > div:nth-of-type(3), &>div:nth-of-type(4)": {
        textDecoration: "line-through",
      },
    },
    "&--register": {
      display: "flex",
      position: "relative",
      marginTop: theme.spacing(5),
      justifyContent: "center",
      zIndex: 0,
      "& .btnRegister": {
        width: "50%",
      },
      "& a": {
        fontSize: "1.5rem",
        textTransform: "uppercase",
      },
    },
  },
}));
const Card = () => {
  return (
    <WrapCard>
      <div className="card__wrapContent">
        <div className="card__content">
          <div className="card__content--title">
            <div>Basic</div>
            <div>Free</div>
          </div>
          <div className="card__content--infos">
            <div>Originals</div>
            <div>Switch plans anytime</div>
            <div>65+ top live</div>
            <div>TV Channels</div>
          </div>
          <div className="card__content--register">
            <div className="btnRegister">
              <ButtonSignIn>
                <Link href="#">
                  <a>register now</a>
                </Link>
              </ButtonSignIn>
            </div>
          </div>
        </div>
      </div>
    </WrapCard>
  );
};

export default Card;

const WrapCardLatestMovie = styled("div")(({ theme }) => ({
  height: "500px",
  position: "relative",
  cursor: "pointer",
  width: "100%",

  "& .imgBanner": {
    transition: "transform .3s linear",
  },
  "&:hover .imgBanner": {
    transform: "scale(1.2)",
  },
  "& .CardLatestMovie__content": {
    position: "absolute",
    background: "rgba(0,0,0,.8)",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    width: "100%",
    bottom: 0,
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "50%",
      top: "-50%",
      left: 0,
      background: "linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,0))",
    },
    "&--movieInfos": {
      display: "flex",
      marginTop: theme.spacing(4),
      "&>div:nth-of-type(1),&>div:nth-of-type(2)": {
        display: "flex",
        alignItems: "center",
      },
      "&>div:not(:last-child)": {
        marginRight: theme.spacing(2),
      },
    },
  },
}));

export const CardLatestMovie: FC = () => {
  return (
    <WrapCardLatestMovie>
      <Image
        src="/images/cartoons/coco.jpg"
        alt=""
        layout="fill"
        className="imgBanner"
      />
      <div className="CardLatestMovie__content">
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Stanger Things
        </Typography>
        <div className="CardLatestMovie__content--movieInfos">
          <div>
            <StarIcon sx={{ color: main_color, mr: 1 }} />
            <span>9.5</span>
          </div>
          <div>
            <AccessTimeIcon sx={{ color: main_color, mr: 1 }} />
            <span>120 mins</span>
          </div>
          <div>HD</div>
          <div>16+</div>
        </div>
      </div>
    </WrapCardLatestMovie>
  );
};

interface CardIntroduce {
  listIntroduce: {
    id: number;
    src: string;
    link: string;
    description?: string;
    star?: string;
    type?: string;
    age?: string;
  };
  active: boolean;
}
const WrapCardIntroduce = styled("div")(({ theme }) => ({
  height: "700px",
  width: "100%",
  position: "relative",
  "& .overlay": {
    position: "absolute",
    inset: "0 0 0 0",
    background: "rgba(0,0,0,.5)",
  },
  "& .Introduce__wrapContent": {
    position: "absolute",
    zIndex: 0,
    display: "flex",
    width: "40%",
    height: "100%",
    background: "rgba(0,0,0,.8)",
    "&::before": {
      position: "absolute",
      content: '""',
      width: "40%",
      height: "100%",
      left: "100%",
      top: 0,
      background: "linear-gradient(to right,rgba(0,0,0,.8),rgba(0,0,0,0))",
    },
    "& .Introduce__content": {
      display: "flex",
      flexDirection: "column",
      paddingLeft: "5rem",
      justifyContent: "center",

      "&--title": {
        fontWeight: "bold",
      },
      "&--movieInfos": {
        display: "flex",
        alignItems: "center",
        "& > div:nth-of-type(1),& > div:nth-of-type(2)": {
          display: "flex",
          alignItems: "center",
        },
        "&>div:not(:last-child)": {
          marginRight: theme.spacing(2),
        },
      },
      "&--description": {
        fontSize: "1.4rem",
        lineHeight: "1.3",
      },
      "&--watchNow": {
        width: "40%",
        "& a": {
          display: "flex",
          alignItems: "center",
          padding: theme.spacing(1, 0),
          fontWeight: "bold",
        },
      },
      "& .top-down": {
        marginTop: theme.spacing(4),
        transform: "translateY(-50px)",
        opacity: 0,
        visibility: "hidden",
        transition: "all 1s ease-in-out",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      background: "rgba(0,0,0,.4)",
      "& .Introduce__content": {
        paddingLeft: "3rem",
        paddingRight: "2rem",
        "&--description": {
          fontSize: "1rem",
          lineHeight: "1.3",
        },
      },
    },
  },
  "&.active": {
    "& .Introduce__wrapContent": {
      "& .Introduce__content": {
        "& .top-down": {
          transform: "translateY(0)",
          opacity: 1,
          visibility: "visible",
          "&.delay-2": {
            transitionDelay: ".2s",
          },
          "&.delay-4": {
            transitionDelay: ".4s",
          },
          "&.delay-6": {
            transitionDelay: ".6s",
          },
        },
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    height: "500px",
  },
}));
export const CardIntroduce: FC<CardIntroduce> = ({ listIntroduce, active }) => {
  const { src, link, description } = listIntroduce;
  return (
    <WrapCardIntroduce className={active ? "active" : ""}>
      <Image src={src} alt="" layout="fill" />
      <div className="overlay"></div>
      <div className="Introduce__wrapContent">
        <div className="Introduce__content">
          <Typography
            variant="h1"
            className="Introduce__content--title top-down"
          >
            {description}
          </Typography>
          <div className="Introduce__content--movieInfos top-down delay-2">
            <div>
              <StarIcon sx={{ color: main_color, mr: 1 }} />
              <span>9.5</span>
            </div>
            <div>
              <AccessTimeIcon sx={{ color: main_color, mr: 1 }} />
              <span>120 mins</span>
            </div>
            <div>HD</div>
            <div>16+</div>
          </div>
          <Typography className="Introduce__content--description top-down delay-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            possimus eius. Deserunt non odit, cum vero reprehenderit laudantium
            odio vitae autem quam, incidunt molestias ratione mollitia
            accusantium, facere ab suscipit.
          </Typography>
          <div className="Introduce__content--watchNow top-down delay-6">
            <ButtonSignIn>
              <Link href={link}>
                <a>
                  <PlayArrowIcon />
                  <span>WATCH NOW</span>
                </a>
              </Link>
            </ButtonSignIn>
          </div>
        </div>
      </div>
    </WrapCardIntroduce>
  );
};

const WrapCardTopFilm = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  "& .imgBanner": {
    transition: "transform .5s linear",
  },
  "&:hover .imgBanner": {
    transform: " scale(1.2)",
  },
  "& .topFilm__content": {
    position: "absolute",
    background: "rgba(0,0,0,.8)",
    width: "100%",
    bottom: "0",
    padding: theme.spacing(3, 2),
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: "100%",
      left: "0",
      width: "100%",
      height: "50%",
      background: "linear-gradient(to top, rgba(0,0,0,.8),rgba(0,0,0,0))",
    },
    "&--title": {},
    "&--movieInfos": {
      marginTop: theme.spacing(4),
      display: "flex",
      alignItems: "center",
      "& > div:nth-of-type(1),& > div:nth-of-type(2)": {
        display: "flex",
        alignItems: "center",
      },
      "& > div:not(:last-child)": {
        marginRight: theme.spacing(2),
      },
    },
  },
}));

interface CardTopFilm {
  listTopFilm: {
    id: number;
    src: string;
    link: string;
    description?: string;
    star?: string;
    type?: string;
    age?: string;
  };
}
export const CardTopFilm: FC<CardTopFilm> = ({ listTopFilm }) => {
  const { src, description } = listTopFilm;
  return (
    <WrapCardTopFilm>
      <Image src={src} alt="" layout="fill" className="imgBanner" />
      <div className="topFilm__content">
        <Typography variant="h4" className="topFilm__content--title">
          {description}
        </Typography>
        <div className="topFilm__content--movieInfos">
          <div>
            <StarIcon sx={{ color: main_color, mr: 1 }} />
            <span>9.5</span>
          </div>
          <div>
            <AccessTimeIcon sx={{ color: main_color, mr: 1 }} />
            <span>120 mins</span>
          </div>
          <div>HD</div>
          <div>16+</div>
        </div>
      </div>
    </WrapCardTopFilm>
  );
};
