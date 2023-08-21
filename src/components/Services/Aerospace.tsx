import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Text from "../Text/Text";

const Aerospace = () => {
  const { t } = useTranslation();
  return (
    <Grid minWidth="400px">
      <Text>{t("aerospace.description")}</Text>
    </Grid>
  );
};

export default Aerospace;
