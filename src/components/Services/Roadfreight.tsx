import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Text from "../Text/Text";

const Roadfreight = () => {
  const { t } = useTranslation();
  return (
    <Grid>
      <Text>{t("roadfreight.description")}</Text>
      <Text>{t("roadfreight.services.service1")}</Text>
      <Text>{t("roadfreight.services.service2")}</Text>
      <Text>{t("roadfreight.services.service3")}</Text>
      <Text>{t("roadfreight.services.service4")}</Text>
      <Text>{t("roadfreight.services.service5")}</Text>
    </Grid>
  );
};

export default Roadfreight;
