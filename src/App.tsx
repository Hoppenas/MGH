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

function App() {
  const airfreightRef = useRef<HTMLDivElement>(null);
  const aerospaceRef = useRef<HTMLDivElement>(null);
  const diplomaticCargoRef = useRef<HTMLDivElement>(null);
  const roadfreightRef = useRef<HTMLDivElement>(null);
  const dangerousGoodsRef = useRef<HTMLDivElement>(null);
  const timeCriticalRef = useRef<HTMLDivElement>(null);
  const oceanFreightRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  const refArr = [
    {
      ref: airfreightRef,
      subject: t("airfreight.subject"),
    },
    {
      ref: aerospaceRef,
      subject: t("aerospace.subject"),
    },
    {
      ref: diplomaticCargoRef,
      subject: t("diplomatic-cargo.subject"),
    },
    {
      ref: roadfreightRef,
      subject: t("roadfreight.subject"),
    },
    {
      ref: dangerousGoodsRef,
      subject: t("dangerous-goods.subject"),
    },
    {
      ref: timeCriticalRef,
      subject: t("time-critical.subject"),
    },
    {
      ref: oceanFreightRef,
      subject: t("oceanfreight.subject"),
    },
  ];

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
                <DropDownMenu refArr={refArr} />
              </Toolbar>
            </Box>
          }
        />
        <Card
          cardRef={airfreightRef}
          subject={t("airfreight.subject")}
          description={<Airfreight />}
        />
        <Card
          reverse={true}
          cardRef={aerospaceRef}
          subject={t("aerospace.subject")}
          description={<Aerospace />}
        />
        <Card
          cardRef={diplomaticCargoRef}
          subject={t("diplomatic-cargo.subject")}
          description={<DiplomaticCargo />}
        />
        <Card
          cardRef={roadfreightRef}
          subject={t("roadfreight.subject")}
          description={<Roadfreight />}
        />
        <Card
          cardRef={dangerousGoodsRef}
          subject={t("dangerous-goods.subject")}
          description={<DangerousGoods />}
        />
        <Card
          cardRef={timeCriticalRef}
          subject={t("time-critical.subject")}
          description={<TimeCritical />}
        />
        <Card
          cardRef={oceanFreightRef}
          subject={t("oceanfreight.subject")}
          description={<Oceanfreight />}
        />
        <Footer />
      </Grid>
    </Suspense>
  );
}

export default App;
