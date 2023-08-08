import { Typography, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Oceanfreight = () => {
  const { t } = useTranslation();
  return (
    <Grid margin="0 5rem">
      <Typography variant="h5" margin="2rem 0">
        {t("oceanfreight.description")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("oceanfreight.services.service1")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("oceanfreight.services.service2")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("oceanfreight.services.service3")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("oceanfreight.services.service4")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("oceanfreight.services.service5")}
      </Typography>
    </Grid>
  );
};

export default Oceanfreight;
