import { Typography, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Airfreight = () => {
  const { t } = useTranslation();
  return (
    <Grid margin="0 5rem">
      <Typography variant="h5" margin="2rem 0">
        {t("airfreight.description")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("airfreight.services.express-airfreight")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("airfreight.services.consolidated-airfreight")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("airfreight.services.specialized-cargo-handling")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("airfreight.services.door-to-door")}
      </Typography>
    </Grid>
  );
};

export default Airfreight;
