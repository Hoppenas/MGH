import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Grid margin="10px">
          <Grid container direction="row">
            <Grid item container xs={4} justifyContent="flex-start">
              <Box>Left</Box>
            </Grid>
            <Grid item container justifyContent="center" xs={4}>
              <Box>Center</Box>
            </Grid>
            <Grid item container xs={4} justifyContent="flex-end">
              <Box>Right</Box>
            </Grid>
          </Grid>
        </Grid>
        {/* <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar> */}
      </AppBar>
    </Box>
  );
};

export default Header;
