import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export interface HeaderProps {
  left?: JSX.Element;
  center?: JSX.Element;
  right?: JSX.Element;
}

const Header: React.FC<HeaderProps> = ({ left, center, right }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{ background: "rgba(255, 255, 255, 0.9)", color: "black" }}
      >
        <Grid margin="10px">
          <Grid container direction="row">
            <Grid item container justifyContent="flex-start" xs>
              {left}
            </Grid>
            <Grid item container justifyContent="center" xs>
              {center}
            </Grid>
            <Grid item container justifyContent="flex-end" xs>
              {right}
              {/* <MenuIcon /> */}
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Header;
