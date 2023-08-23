import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../Text/Text";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <Grid minWidth="400px">
      <Text>{t("contact-us.info.line1")}</Text>
      <Text>{t("contact-us.info.line2")}</Text>
      <Text>{t("contact-us.info.line3")}</Text>
      <Text>{t("contact-us.info.line4")}</Text>
      <Text>{t("contact-us.info.line5")}</Text>
      <Text>{t("contact-us.info.line6")}</Text>
      <Text>{t("contact-us.info.line7")}</Text>
    </Grid>
  );
};

export default ContactUs;
