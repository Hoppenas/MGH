import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Text from "../Text/Text";

const Oceanfreight = () => {
  const { t } = useTranslation();
  return (
    <Grid>
      <Text>{t("oceanfreight.description")}</Text>
      <Text>{t("oceanfreight.services.service1")}</Text>
      <Text>{t("oceanfreight.services.service2")}</Text>
      <Text>{t("oceanfreight.services.service3")}</Text>
      <Text>{t("oceanfreight.services.service4")}</Text>
      <Text>{t("oceanfreight.services.service5")}</Text>
    </Grid>
  );
};

export default Oceanfreight;
