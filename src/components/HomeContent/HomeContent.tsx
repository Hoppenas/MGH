import React, { RefObject } from "react";
import { useTranslation } from "react-i18next";
import Card from "../Card/Card";
import AboutUs from "../Services/AboutUs";
import ContactUs from "../Services/ContactUs";
import aboutUs from "../../images/aboutUs.jpg";
import type { Section } from "../../types/Section";

export interface HomeContentProps {
  sections: Section[];
  isSmallScreen: boolean;
  aboutUsRef: RefObject<HTMLDivElement>;
  contactUsRef: RefObject<HTMLDivElement>;
}

const HomeContent: React.FC<HomeContentProps> = ({
  sections,
  isSmallScreen,
  aboutUsRef,
  contactUsRef,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {!isSmallScreen && (
        <Card
          cardRef={aboutUsRef}
          subject={t("about-us.subject")}
          description={<AboutUs />}
          reverse
          image={aboutUs}
        />
      )}
      {sections.map((card, id) => (
        <Card
          key={card.subject}
          cardRef={card.ref}
          subject={card.subject}
          description={card.description}
          reverse={id % 2 === 1}
          image={card.image}
        />
      ))}
      {!isSmallScreen && (
        <Card
          cardRef={contactUsRef}
          subject={t("contact-us.subject")}
          description={<ContactUs />}
        />
      )}
    </>
  );
};

export default HomeContent;
