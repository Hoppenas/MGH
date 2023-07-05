import React from "react";
import "./App.css";
import { Box, Button, Grid, Toolbar } from "@mui/material";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import logo from "./images/logo.png";
import DropDownMenu from "./components/Menu/Menu";

function App() {
  return (
    <Grid container xs={12}>
      <Header
        left={<img src={logo} alt="MGH transport logo" width="150px" />}
        center={<Button color="inherit">aog@mghtranspot.lt</Button>}
        right={
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
              <DropDownMenu />
            </Toolbar>
          </Box>
        }
      />
      <Card />
      <Card reverse={true} />
    </Grid>
  );
}

export default App;
