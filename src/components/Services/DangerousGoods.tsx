import { Typography, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const DangerousGoods = () => {
  const { t } = useTranslation();
  return (
    <Grid margin="0 5rem">
      <Typography variant="h5" margin="2rem 0">
        {t("dangerous-goods.description")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("dangerous-goods.services.service1")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("dangerous-goods.services.service2")}
      </Typography>
    </Grid>
  );
};

export default DangerousGoods;
