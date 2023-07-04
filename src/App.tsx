import React from "react";
import "./App.css";
import { Grid } from "@mui/material";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  return (
    <Grid container xs={12}>
      <Header />
      <Card />
      <Card reverse={true} />
    </Grid>
  );
}

export default App;
