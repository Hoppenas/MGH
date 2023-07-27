import React, { LegacyRef } from "react";
import jetImage from "../../images/jet-airbase.jpg";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export interface CardProps {
  reverse?: boolean;
  cardRef: LegacyRef<HTMLDivElement> | undefined;
}

const Card: React.FC<CardProps> = ({ reverse = false, cardRef }) => {
  const { t } = useTranslation();
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
          {t("subject")}
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
      <div ref={cardRef} />
    </Grid>
  );
};

export default Card;
