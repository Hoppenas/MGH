import React, { LegacyRef } from "react";
import jetImage from "../../images/jet-airbase.jpg";
import { Grid, Typography } from "@mui/material";

export interface CardProps {
  reverse?: boolean;
  cardRef: LegacyRef<HTMLDivElement> | undefined;
  subject?: string;
  description?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  reverse = false,
  cardRef,
  subject,
  description,
}) => {
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
          {subject}
        </Typography>
        {description}
      </Grid>
      <Grid item xs={6}>
        <img src={jetImage} alt="jet airbase" loading="lazy" width="100%" />
      </Grid>
      <div ref={cardRef} />
    </Grid>
  );
};

export default Card;
