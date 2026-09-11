import React from "react";
import Header from "./Header";
import AppToolbar, { AppToolbarProps } from "../Toolbar/Toolbar";
import logo from "../../images/logo.png";

export type HeaderContainerProps = AppToolbarProps;

const HeaderContainer: React.FC<HeaderContainerProps> = (props) => {
  return (
    <Header
      logo={<img src={logo} alt="MGH transport logo" width="150px" />}
      navigation={<AppToolbar {...props} />}
    />
  );
};

export default HeaderContainer;
