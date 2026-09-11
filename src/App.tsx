import React from "react";
import { Container } from "./App.styles";
import HeaderContainer from "./components/Header/HeaderContainer";
import HomeContent from "./components/HomeContent/HomeContent";
import Footer from "./components/Footer/Footer";
import useIsSmallScreen from "./hooks/useIsSmallScreen";
import useSections from "./hooks/useSections";

function App() {
  const isSmallScreen = useIsSmallScreen();

  const { sections, aboutUsRef, aerospaceRef, contactUsRef } =
    useSections(isSmallScreen);

  return (
    <Container container>
      <HeaderContainer
        sections={sections}
        isSmallScreen={isSmallScreen}
        aboutUsRef={aboutUsRef}
        aerospaceRef={aerospaceRef}
        contactUsRef={contactUsRef}
      />
      <HomeContent
        sections={sections}
        isSmallScreen={isSmallScreen}
        aboutUsRef={aboutUsRef}
        contactUsRef={contactUsRef}
      />
      <Footer />
    </Container>
  );
}

export default App;
