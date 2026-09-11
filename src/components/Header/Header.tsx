import { ReactNode } from "react";
import { HeaderBar, HeaderRow } from "./Header.styles";

export interface HeaderProps {
  logo: ReactNode;
  navigation: ReactNode;
}

const Header = ({ logo, navigation }: HeaderProps) => (
  <HeaderBar position="fixed">
    <HeaderRow>
      {logo}
      {navigation}
    </HeaderRow>
  </HeaderBar>
);

export default Header;
