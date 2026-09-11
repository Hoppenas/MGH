import { AppBar, styled } from "@mui/material";

export const HeaderBar = styled(AppBar)({
  background: "rgba(255, 255, 255, 0.9)",
  color: "black",
});

export const HeaderRow = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "10px",
});
