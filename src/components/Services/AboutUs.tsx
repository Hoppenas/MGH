import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../Text/Text";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Grid minWidth="400px">
      <Text>{t("about-us.description")}</Text>
      <Text>{t("about-us.services.service1")}</Text>
      <Text>{t("about-us.services.service2")}</Text>
      <Text>{t("about-us.services.service3")}</Text>
      <Text>{t("about-us.services.service4")}</Text>
      <Text>{t("about-us.services.service5")}</Text>
    </Grid>
  );
};

export default AboutUs;
