import React, { FC } from "react";

import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
interface Props {
  children: React.ReactNode;
}
const WrapBtnSignIn = styled(Button)(({ theme }) => ({
  display: "flex",

  color: "#ffffff",
  width: "100%",
  position: "relative",
  "&::before": {
    position: "absolute",
    width: "50%",
    height: "100%",
    backgroundColor: "#c0392b",
    content: '""',
    left: 0,
    zIndex: -1,
    transition: "width .5s linear",
  },
  "&:hover": {
    "&::before": {
      width: "100%",
    },
  },
}));

export const ButtonSignIn: FC<Props> = ({ children }) => {
  return <WrapBtnSignIn>{children}</WrapBtnSignIn>;
};
