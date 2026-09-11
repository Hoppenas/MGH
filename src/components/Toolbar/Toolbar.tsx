import React, { RefObject } from "react";
import { Button, Toolbar } from "@mui/material";
import { useTranslation } from "react-i18next";
import DropDownMenu, { DropDownMenuProps } from "../Menu/Menu";
import { handleScrollTo } from "../../utils/utils";

export interface AppToolbarProps extends DropDownMenuProps {
  aboutUsRef: RefObject<HTMLDivElement>;
  aerospaceRef: RefObject<HTMLDivElement>;
  contactUsRef: RefObject<HTMLDivElement>;
}

const AppToolbar: React.FC<AppToolbarProps> = ({
  sections,
  isSmallScreen,
  aboutUsRef,
  aerospaceRef,
  contactUsRef,
}) => {
  const { t } = useTranslation();

  return (
    <Toolbar>
      {!isSmallScreen && (
        <Button
          style={{ whiteSpace: "nowrap" }}
          color="inherit"
          onClick={() => handleScrollTo(aboutUsRef)}
        >
          {t("about-us.subject")}
        </Button>
      )}
      <DropDownMenu
        sections={sections}
        isSmallScreen={isSmallScreen}
      />
      {!isSmallScreen && (
        <Button
          style={{ whiteSpace: "nowrap" }}
          color="inherit"
          onClick={() => handleScrollTo(aerospaceRef)}
        >
          {t("aog-247")}
        </Button>
      )}
      {!isSmallScreen && (
        <Button
          style={{ whiteSpace: "nowrap" }}
          color="inherit"
          onClick={() => handleScrollTo(contactUsRef)}
        >
          {t("contact-us.subject")}
        </Button>
      )}
    </Toolbar>
  );
};

export default AppToolbar;
