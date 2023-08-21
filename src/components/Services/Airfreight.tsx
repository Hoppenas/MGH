import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Text from "../Text/Text";

const Airfreight = () => {
  const { t } = useTranslation();
  return (
    <Grid minWidth="400px">
      <Text>{t("airfreight.description")}</Text>
      <Text>{t("airfreight.services.express-airfreight")}</Text>
      <Text>{t("airfreight.services.consolidated-airfreight")}</Text>
      <Text>{t("airfreight.services.specialized-cargo-handling")}</Text>
      <Text>{t("airfreight.services.door-to-door")}</Text>
    </Grid>
  );
};

export default Airfreight;
