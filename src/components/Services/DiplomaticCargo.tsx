import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Text from "../Text/Text";

const DiplomaticCargo = () => {
  const { t } = useTranslation();
  return (
    <Grid>
      <Text>{t("diplomatic-cargo.description")}</Text>
      <Text>{t("diplomatic-cargo.services.service1")}</Text>
      <Text>{t("diplomatic-cargo.services.service2")}</Text>
      <Text>{t("diplomatic-cargo.services.service3")}</Text>
    </Grid>
  );
};

export default DiplomaticCargo;
