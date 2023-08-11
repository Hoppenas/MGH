import React, { LegacyRef } from "react";
import { Grid, Typography } from "@mui/material";

export interface CardProps {
  reverse?: boolean;
  cardRef: LegacyRef<HTMLDivElement> | undefined;
  subject?: string;
  description?: React.ReactNode;
  image?: string;
}

const Card: React.FC<CardProps> = ({
  reverse = false,
  cardRef,
  subject,
  description,
  image,
}) => {
  return (
    <Grid textAlign={image ? "justify" : "center"} xs={12} padding="0 10px">
      <Typography variant="h2" width="100%" textAlign="center" margin="2rem 0">
        {subject}
      </Typography>
      <div ref={cardRef} />
      {image && (
        <img
          src={image}
          alt="jet airbase"
          loading="lazy"
          width="40%"
          style={{
            float: reverse ? "left" : "right",
            margin: reverse ? "0 1rem 0 0" : "0 0 0 1rem",
            borderRadius: "10px",
            minWidth: "400px",
          }}
        />
      )}
      {description}
    </Grid>
  );
};

export default Card;
