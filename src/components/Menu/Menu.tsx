import React, { useState, RefObject, MouseEvent, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { handleScrollTo } from "../../utils/utils";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import type { Section } from "../../types/Section";

export interface DropDownMenuProps {
  sections: Pick<Section, "ref" | "subject">[];
  isSmallScreen: boolean;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  sections,
  isSmallScreen,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (ref: RefObject<HTMLDivElement>) => {
    setAnchorEl(null);
    setTimeout(() => {
      handleScrollTo(ref);
    }, 100);
  };

  return (
    <Grid container justifyContent="flex-end" width="fit-content">
      <Button
        color="inherit"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {!isSmallScreen ? t("services") : <MenuIcon fontSize="large" />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(sections[0].ref)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {sections.map((item) => (
          <MenuItem
            onClick={() => handleClose(item.ref)}
            key={item.subject}
            style={{
              fontSize: isSmallScreen ? "32px" : "16px",
              padding: "10px",
            }}
          >
            {item.subject}
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
};

export default DropDownMenu;
