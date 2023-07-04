import { Box } from "@mui/system";
import React from "react";
import jetImage from "../../images/jet-airbase.jpg";
import { Grid, Typography } from "@mui/material";

export interface CardProps {
  reverse?: boolean;
}

const Card: React.FC<CardProps> = ({ reverse = false }) => {
  console.log(reverse);
  return (
    <Grid
      container
      direction={reverse ? "row" : "row-reverse"}
      spacing={1}
      justifyContent="space-around"
      margin="5rem 0"
    >
      <Grid item container xs={6} alignContent="center">
        <Typography variant="h2" width="100%" textAlign="end" margin="0 5rem">
          Aircraft in a airbase
        </Typography>
        <Typography variant="h5" margin="5rem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          cupiditate, suscipit velit distinctio amet quam magnam atque assumenda
          ipsa. Impedit deserunt incidunt maxime quo hic consequuntur autem
          laudantium. A, enim? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Omnis cupiditate, suscipit velit distinctio amet
          quam magnam atque assumenda ipsa. Impedit deserunt incidunt maxime quo
          hic consequuntur autem laudantium. A, enim? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Omnis cupiditate, suscipit velit
          distinctio amet quam magnam atque assumenda ipsa. Impedit deserunt
          incidunt maxime quo hic consequuntur autem laudantium. A, enim? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate,
          suscipit velit distinctio amet quam magnam atque assumenda ipsa.
          Impedit deserunt incidunt maxime quo hic consequuntur autem
          laudantium. A, enim? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Omnis cupiditate, suscipit velit distinctio amet
          quam magnam atque assumenda ipsa. Impedit deserunt incidunt maxime quo
          hic consequuntur autem laudantium. A, enim?
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <img src={jetImage} alt="jet airbase" loading="lazy" width="100%" />
      </Grid>
    </Grid>
  );
};

export default Card;
