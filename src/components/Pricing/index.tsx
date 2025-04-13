"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isIndian, setIsIndian] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Choose a plan that fits your needs without breaking the bank. Transparent pricing, no hidden fees—just great value!"
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsIndian(true)}
              className={`${
                isIndian ? "pointer-events-none text-primary" : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Package in ₹ INR
            </span>
            <div onClick={() => setIsIndian(!isIndian)} className="flex cursor-pointer items-center">
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isIndian ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsIndian(false)}
              className={`${
                isIndian ? "text-dark dark:text-white" : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Package in $ USD
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isIndian ? "10,999" : "130"}
            duration={isIndian ? "Start's from" : "Start's from"}
            subtitle="A sleek portfolio website with essential pages, responsive design, and basic SEO for a strong online presence."
            isIndian={isIndian}
          >
            <OfferList text="static 4-6 pages" status="active" />
            <OfferList text="No Backend" status="active" />
            <OfferList text="Basic SEO" status="active" />
            <OfferList text="Responsive Design" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isIndian ? "14,999" : "180"}
            duration={isIndian ? "Start's from" : "Start's from"}
            subtitle="A sleek, responsive, and modern website for small-scale businesses. Fast, affordable, and SEO-friendly!"
            isIndian={isIndian}
          >
            <OfferList text="static 5-10 pages" status="active" />
            <OfferList text="No Backend" status="active" />
            <OfferList text="Minimal Features" status="active" />
            <OfferList text="Lifetime Access" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isIndian ? "2,50,000" : "3,012"}
            duration={isIndian ? "Projects" : "Projects"}
            subtitle="A high-performance, scalable website tailored for large businesses. Secure, robust, and built for growth!"
            isIndian={isIndian}
          >
            <OfferList text="custom-built" status="active" />
            <OfferList text="complex integration" status="active" />
            <OfferList text="Dashboard" status="active" />
            <OfferList text="Full Support" status="active" />
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
