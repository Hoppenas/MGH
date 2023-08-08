import { Typography, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const TimeCritical = () => {
  const { t } = useTranslation();
  return (
    <Grid margin="0 5rem">
      <Typography variant="h5" margin="2rem 0">
        {t("time-critical.description")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("time-critical.services.service1")}
      </Typography>
    </Grid>
  );
};

export default TimeCritical;
