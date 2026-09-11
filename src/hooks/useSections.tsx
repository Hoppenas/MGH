import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Airfreight from "../components/Services/Airfreight";
import Aerospace from "../components/Services/Aerospace";
import DiplomaticCargo from "../components/Services/DiplomaticCargo";
import Roadfreight from "../components/Services/Roadfreight";
import DangerousGoods from "../components/Services/DangerousGoods";
import TimeCritical from "../components/Services/TimeCritical";
import Oceanfreight from "../components/Services/Oceanfreight";
import aboutUs from "../images/aboutUs.jpg";
import blackJet from "../images/blackJet.jpg";
import containers from "../images/containers.jpg";
import diplomaticPouch from "../images/diplomaticPouch.jpg";
import engine from "../images/engine.jpg";
import fragile from "../images/fragile.jpg";
import helicopter from "../images/helicopter.jpg";
import truck from "../images/truck.jpg";
import AboutUs from "../components/Services/AboutUs";
import ContactUs from "../components/Services/ContactUs";
import type { Section } from "../types/Section";

const useSections = (isSmallScreen: boolean) => {
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

  const sections: Section[] = [
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

  if (isSmallScreen) {
    sections.splice(0, 0, {
      ref: aboutUsRef,
      subject: t("about-us.subject"),
      description: <AboutUs />,
      image: aboutUs,
    });
    sections.push({
      ref: contactUsRef,
      subject: t("contact-us.subject"),
      description: <ContactUs />,
    });
  }

  return { sections, aboutUsRef, aerospaceRef, contactUsRef };
};

export default useSections;
