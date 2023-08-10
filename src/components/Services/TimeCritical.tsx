import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Text from "../Text/Text";

const TimeCritical = () => {
  const { t } = useTranslation();
  return (
    <Grid>
      <Text>{t("time-critical.description")}</Text>
      <Text>{t("time-critical.services.service1")}</Text>
    </Grid>
  );
};

export default TimeCritical;
