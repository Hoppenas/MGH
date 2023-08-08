import { Typography, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const DiplomaticCargo = () => {
  const { t } = useTranslation();
  return (
    <Grid margin="0 5rem">
      <Typography variant="h5" margin="2rem 0">
        {t("diplomatic-cargo.description")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("diplomatic-cargo.services.service1")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("diplomatic-cargo.services.service2")}
      </Typography>
      <Typography variant="h5" margin="2rem 0">
        {t("diplomatic-cargo.services.service3")}
      </Typography>
    </Grid>
  );
};

export default DiplomaticCargo;
