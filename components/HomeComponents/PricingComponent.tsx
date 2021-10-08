import React from "react";
import { styled } from "@mui/material/styles";
import { main_color } from "../color";
import Typography from "@mui/material/Typography";
import Card from "../layout/Card";

const Section = styled("div")(({ theme }) => ({
  margin: theme.spacing(5, 3, 5, 3),
  "& > h3": {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: theme.spacing(5),
  },
  "& .Pricing__items": {
    display: "flex",
    "&>*": {
      flex: 1,
    },
  },
}));
const PricingComponent = () => {
  return (
    <Section>
      <Typography variant="h3">
        FL<span style={{ color: main_color }}>I</span>X PRICING
      </Typography>
      <div className="Pricing__items">
        <Card />
        <Card />
        <Card />
      </div>
    </Section>
  );
};

export default PricingComponent;
