import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../Text/Text";

const DangerousGoods = () => {
  const { t } = useTranslation();
  return (
    <Grid minWidth="400px">
      <Text>{t("dangerous-goods.description")}</Text>
      <Text>{t("dangerous-goods.services.service1")}</Text>
      <Text>{t("dangerous-goods.services.service2")}</Text>
    </Grid>
  );
};

export default DangerousGoods;
