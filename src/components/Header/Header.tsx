import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

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
            {left && (
              <Grid item justifyContent="flex-start" xs>
                {left}
              </Grid>
            )}
            {center && (
              <Grid item justifyContent="center" xs>
                {center}
              </Grid>
            )}
            {right && (
              <Grid item container justifyContent="flex-end" xs margin="auto">
                {right}
              </Grid>
            )}
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Header;
