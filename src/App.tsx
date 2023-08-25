import React, { useRef, Suspense } from "react";
import { Button, Grid, Toolbar } from "@mui/material";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import logo from "./images/logo.png";
import DropDownMenu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import { useTranslation } from "react-i18next";
import Airfreight from "./components/Services/Airfreight";
import Aerospace from "./components/Services/Aerospace";
import DiplomaticCargo from "./components/Services/DiplomaticCargo";
import Roadfreight from "./components/Services/Roadfreight";
import DangerousGoods from "./components/Services/DangerousGoods";
import TimeCritical from "./components/Services/TimeCritical";
import Oceanfreight from "./components/Services/Oceanfreight";
import aboutUs from "./images/aboutUs.jpg";
import blackJet from "./images/blackJet.jpg";
import containers from "./images/containers.jpg";
import diplomaticPouch from "./images/diplomaticPouch.jpg";
import engine from "./images/engine.jpg";
import fragile from "./images/fragile.jpg";
import helicopter from "./images/helicopter.jpg";
import truck from "./images/truck.jpg";
import AboutUs from "./components/Services/AboutUs";
import ContactUs from "./components/Services/ContactUs";
import { handleScrollTo } from "./utils/utils";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const airfreightRef = useRef<HTMLDivElement>(null);
  const aerospaceRef = useRef<HTMLDivElement>(null);
  const diplomaticCargoRef = useRef<HTMLDivElement>(null);
  const roadfreightRef = useRef<HTMLDivElement>(null);
  const dangerousGoodsRef = useRef<HTMLDivElement>(null);
  const timeCriticalRef = useRef<HTMLDivElement>(null);
  const oceanFreightRef = useRef<HTMLDivElement>(null);
  const contactUsRef = useRef<HTMLDivElement>(null);

  const width = useWindowSize();
  const showSmallScreenmenu = width < 574;

  const { t } = useTranslation();

  const refArr = [
    {
      ref: airfreightRef,
      subject: t("airfreight.subject"),
      description: <Airfreight />,
      image: blackJet,
    },
    {
      ref: aerospaceRef,
      subject: t("aerospace.subject"),
      description: <Aerospace />,
      image: engine,
    },
    {
      ref: diplomaticCargoRef,
      subject: t("diplomatic-cargo.subject"),
      description: <DiplomaticCargo />,
      image: diplomaticPouch,
    },
    {
      ref: roadfreightRef,
      subject: t("roadfreight.subject"),
      description: <Roadfreight />,
      image: truck,
    },
    {
      ref: dangerousGoodsRef,
      subject: t("dangerous-goods.subject"),
      description: <DangerousGoods />,
      image: helicopter,
    },
    {
      ref: timeCriticalRef,
      subject: t("time-critical.subject"),
      description: <TimeCritical />,
      image: fragile,
    },
    {
      ref: oceanFreightRef,
      subject: t("oceanfreight.subject"),
      description: <Oceanfreight />,
      image: containers,
    },
  ];

  if (showSmallScreenmenu) {
    refArr.splice(0, 0, {
      ref: aboutUsRef,
      subject: t("about-us.subject"),
      description: <AboutUs />,
      image: aboutUs,
    });
    refArr.push({
      ref: contactUsRef,
      subject: t("contact-us.subject"),
      description: <ContactUs />,
      image: "",
    });
  }

  return (
    <Suspense fallback="loading">
      <Grid container margin="95px auto 0" maxWidth="1366px">
        <Header
          left={<img src={logo} alt="MGH transport logo" width="150px" />}
          right={
            <Toolbar>
              {!showSmallScreenmenu && (
                <Button
                  style={{ whiteSpace: "nowrap" }}
                  color="inherit"
                  onClick={() => handleScrollTo(aboutUsRef)}
                >
                  {t("about-us.subject")}
                </Button>
              )}
              <DropDownMenu
                refArr={refArr}
                showSmallScreenmenu={showSmallScreenmenu}
              />
              {!showSmallScreenmenu && (
                <Button
                  style={{ whiteSpace: "nowrap" }}
                  color="inherit"
                  onClick={() => handleScrollTo(aerospaceRef)}
                >
                  {t("aog-247")}
                </Button>
              )}
              {!showSmallScreenmenu && (
                <Button
                  style={{ whiteSpace: "nowrap" }}
                  color="inherit"
                  onClick={() => handleScrollTo(contactUsRef)}
                >
                  {t("contact-us.subject")}
                </Button>
              )}
            </Toolbar>
          }
        />
        {!showSmallScreenmenu && (
          <Card
            cardRef={aboutUsRef}
            subject={t("about-us.subject")}
            description={<AboutUs />}
            reverse
            image={aboutUs}
          />
        )}
        {refArr.map((card, id) => (
          <Card
            key={card.subject}
            cardRef={card.ref}
            subject={card.subject}
            description={card.description}
            reverse={id % 2 === 1}
            image={card.image}
          />
        ))}
        {!showSmallScreenmenu && (
          <Card
            cardRef={contactUsRef}
            subject={t("contact-us.subject")}
            description={<ContactUs />}
          />
        )}
        <Footer />
      </Grid>
    </Suspense>
  );
}

export default App;
