import React, { useRef, Suspense } from "react";
import "./App.css";
import { Box, Button, Grid, Toolbar } from "@mui/material";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import logo from "./images/logo.png";
import DropDownMenu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

function App() {
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  return (
    <Suspense fallback="loading">
      <Grid container xs={12} marginTop="95px">
        <Header
          left={<img src={logo} alt="MGH transport logo" width="150px" />}
          center={
            <Button color="inherit" onClick={() => console.log("email")}>
              aog@mghtranspot.lt
            </Button>
          }
          right={
            <Box>
              <Toolbar>
                <DropDownMenu refArr={[firstRef, secondRef, thirdRef]} />
              </Toolbar>
            </Box>
          }
        />
        <Card cardRef={firstRef} />
        <Card reverse={true} cardRef={secondRef} />
        <Card cardRef={thirdRef} />
        <Footer />
      </Grid>
    </Suspense>
  );
}

export default App;
