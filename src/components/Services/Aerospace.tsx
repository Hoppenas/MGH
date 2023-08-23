import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../Text/Text";

const Aerospace = () => {
  const { t } = useTranslation();
  return (
    <Grid minWidth="400px">
      <Text>{t("aerospace.description")}</Text>
      <Text>
        {t("aerospace.contact-us")} <strong>{t("aerospace.aog-email")}</strong>
        {t("aerospace.get-247-service")}
      </Text>
    </Grid>
  );
};

export default Aerospace;
