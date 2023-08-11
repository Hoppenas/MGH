import React, { useRef, Suspense } from "react";
import "./App.css";
import { Box, Button, Grid, Toolbar } from "@mui/material";
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

  return (
    <Suspense fallback="loading">
      <Grid container margin="95px auto 0" maxWidth="1366px">
        <Header
          left={<img src={logo} alt="MGH transport logo" width="150px" />}
          center={
            <Button color="inherit" onClick={() => console.log("email")}>
              {t("aog-email")}
            </Button>
          }
          right={
            <Box>
              <Toolbar>
                <Button
                  color="inherit"
                  onClick={() => handleScrollTo(aboutUsRef)}
                >
                  {t("about-us.subject")}
                </Button>
                <DropDownMenu refArr={refArr} />
                <Button
                  color="inherit"
                  onClick={() => handleScrollTo(contactUsRef)}
                >
                  {t("contact-us.subject")}
                </Button>
              </Toolbar>
            </Box>
          }
        />
        <Card
          cardRef={aboutUsRef}
          subject={t("about-us.subject")}
          description={<AboutUs />}
          reverse
          image={aboutUs}
        />
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
        <Card
          cardRef={contactUsRef}
          subject={t("contact-us.subject")}
          description={<ContactUs />}
        />
        <Footer />
      </Grid>
    </Suspense>
  );
}

export default App;
