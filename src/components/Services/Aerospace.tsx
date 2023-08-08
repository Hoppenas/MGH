import { Typography, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Aerospace = () => {
  const { t } = useTranslation();
  return (
    <Grid margin="0 5rem">
      <Typography variant="h5" margin="2rem 0">
        {t("aerospace.description")}
      </Typography>
    </Grid>
  );
};

export default Aerospace;
