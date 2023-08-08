import React, { useState, RefObject, MouseEvent } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export interface DropDownMenuProps {
  refArr: { ref: RefObject<HTMLDivElement>; subject: string }[];
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ refArr }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (ref: RefObject<HTMLDivElement>) => {
    setAnchorEl(null);
    //TODO: move to useEffect???
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Services
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
    </div>
  );
};

export default DropDownMenu;
