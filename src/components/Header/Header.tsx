import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#FFF", color: "black" }}>
        <Grid margin="10px">
          <Grid container direction="row">
            <Grid item container xs={4} justifyContent="flex-start">
              <img src={logo} alt="MGH transport logo" width="150px" />
            </Grid>
            <Grid item container justifyContent="center" xs={4}>
              <Button color="inherit">aog@mghtranspot.lt</Button>
            </Grid>
            <Grid item container xs={4} justifyContent="flex-end">
              <Box>
                <Toolbar>
                  {/* <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton> */}
                  <Button color="inherit">About us</Button>
                  <Button color="inherit">Services</Button>
                  <Button color="inherit">Contact</Button>
                </Toolbar>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Header;
