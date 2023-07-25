import React, { LegacyRef, MutableRefObject, RefObject, useRef } from "react";
import "./App.css";
import { Box, Button, Grid, Toolbar } from "@mui/material";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import logo from "./images/logo.png";
import DropDownMenu from "./components/Menu/Menu";

function App() {
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  const executeScroll = (refNr: RefObject<HTMLDivElement>) => {
    refNr.current?.scrollIntoView();
  };
  return (
    <Grid container xs={12}>
      <Header
        left={<img src={logo} alt="MGH transport logo" width="150px" />}
        center={
          <Button
            color="inherit"
            onClick={() =>
              firstRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
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
      <div ref={firstRef} />
      <Card reverse={true} cardRef={secondRef} />
      <div ref={secondRef} />
      <Card reverse={true} cardRef={thirdRef} />
      <div ref={thirdRef} />
    </Grid>
  );
}

export default App;
