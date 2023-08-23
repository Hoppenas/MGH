import React, { useState, RefObject, MouseEvent } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { handleScrollTo } from "../../utils/utils";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";

export interface DropDownMenuProps {
  refArr: {
    ref: RefObject<HTMLDivElement>;
    subject: string;
    description?: React.ReactNode;
  }[];
  showSmallScreenmenu: boolean;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  refArr,
  showSmallScreenmenu,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (ref: RefObject<HTMLDivElement>) => {
    setAnchorEl(null);
    //TODO: move to useEffect???
    setTimeout(() => handleScrollTo(ref), 100);
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
        {!showSmallScreenmenu ? t("services") : <MenuIcon />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(refArr[0].ref)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {refArr.map((item) => (
          <MenuItem onClick={() => handleClose(item.ref)} key={item.subject}>
            {item.subject}
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
};

export default DropDownMenu;
