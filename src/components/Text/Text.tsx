import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

export interface TextProps {
  children: string | ReactNode;
}

const Text: React.FC<TextProps> = ({ children }: TextProps) => {
  return (
    <Typography variant="h6" margin="1rem 0">
      {children}
    </Typography>
  );
};

export default Text;
