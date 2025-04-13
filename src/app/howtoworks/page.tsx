import Breadcrumb from "@/components/Common/Breadcrumb";
import Benefits from "@/components/HowItWorks/Benefits";
import Video from "@/components/Video";
import WorkProcess from "@/components/HowItWorks/WorkProcess";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - Fyrix",
  description:
    "Learn how Fyrix collaborates with clients to deliver smart solutions.",
};

const HowitworksPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="How it Works?"
        description={
          <div className="space-y-2">
            <p>
              We believe in making the process of working with us simple and
              straightforward. Our process starts with an initial consultation
              where we listen to your needs, goals, and requirements, and work
              with you to determine the best solution for your business.
            </p>
            <p>
              From there, our team of experts takes over, using our expertise
              and experience to deliver the services you need. Throughout the
              process, we provide regular updates and progress reports so that
              you can stay informed and in control.
            </p>
          </div>
        }
      />

      <Video />
      <WorkProcess />
      <Benefits />
    </>
  );
};

export default HowitworksPage;
