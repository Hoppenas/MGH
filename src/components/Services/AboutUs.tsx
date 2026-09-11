import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../Text/Text";

const serviceKeys = [
  "about-us.services.service1",
  "about-us.services.service2",
  "about-us.services.service3",
  "about-us.services.service4",
  "about-us.services.service5",
];

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Grid minWidth="400px">
      <Text>{t("about-us.description")}</Text>
      {serviceKeys.map((key) => (
        <Text key={key}>{t(key)}</Text>
      ))}
    </Grid>
  );
};

export default AboutUs;
