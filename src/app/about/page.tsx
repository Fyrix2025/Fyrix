import AboutSection from "@/components/About/AboutSection";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import WhoWeAre from "@/components/About/WhoWeAre";
import ContactUs from "@/components/About/ContactUs";

import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page ",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="At Fyrix, we believe in turning bold ideas into powerful digital experiences. We're a passionate team of innovators, developers, and designers focused on building tech solutions that make a real impact. From startups to enterprises, we craft scalable products, smart strategies, and seamless user experiences. Driven by curiosity and powered by technology, we’re here to shape the future—one line of code at a time."
      />
      <WhoWeAre />
      <AboutSectionOne />
      <ContactUs />
      <AboutSectionTwo />
      <AboutSection />
    </>
  );
};

export default AboutPage;
