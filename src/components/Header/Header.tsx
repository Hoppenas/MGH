import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import logo from "../../images/logo.png";

export interface HeaderProps {
  left?: JSX.Element;
  center?: JSX.Element;
  right?: JSX.Element;
}

const Header: React.FC<HeaderProps> = ({ left, center, right }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#FFF", color: "black" }}>
        <Grid margin="10px">
          <Grid container direction="row">
            <Grid item container xs={4} justifyContent="flex-start">
              {left}
            </Grid>
            <Grid item container justifyContent="center" xs={4}>
              {center}
            </Grid>
            <Grid item container xs={4} justifyContent="flex-end">
              {right}
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Header;
