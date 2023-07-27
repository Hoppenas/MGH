import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Container, Grid, Link, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: "#FFF",
        p: 6,
      }}
      component="footer"
    >
      <Container>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://www.mghtransport.com/">
            MGH transport, UAB
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
