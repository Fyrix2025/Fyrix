import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="At Fyrix, innovation meets action. Whether you're a startup looking for tech solutions or an enterprise aiming to scale, our team is ready to help you build what's next. Connect with us for smart strategies, powerful products, and real results. Let’s start a conversation that could change the game."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
