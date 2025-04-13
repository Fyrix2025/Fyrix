import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fyrix | Leading Software Development Company",
  description:
    "Fyrix is a top software development company based in Coimbatore, India, offering expert AI services, custom web and mobile app solutions for businesses worldwide.",
  keywords: [
    "Fyrix Coimbatore",
    "Software development company Coimbatore",
    "AI company Coimbatore",
    "Mobile app development",
    "Web development company",
    "Custom software development India",
    "Fyrix Technologies",
    "IT solutions Coimbatore",
    "AI development India",
    "Enterprise software solutions",
  ],
  authors: [{ name: "Fyrix Team", url: "https://www.fyrix.tech" }],
  creator: "Fyrix Team",
  publisher: "Fyrix Technologies",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.fyrix.tech/",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Fyrix Coimbatore | AI & Software Development Experts",
    description:
      "Fyrix offers advanced software solutions including AI, web, and mobile app development to empower your digital transformation.",
    url: "https://www.fyrix.tech/",
    siteName: "Fyrix Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.fyrix.tech/images/logo/favicon.svg",
        width: 600,
        height: 600,
        alt: "Fyrix Logo",
      },
      {
        url: "https://www.fyrix.tech/preview-image.webp",
        width: 1200,
        height: 630,
        alt: "Fyrix - AI & Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FyrixTech",
    creator: "@FyrixTech",
    title: "Fyrix | Software, AI & Mobile App Solutions",
    description:
      "Discover Fyrix - the trusted partner for AI-driven software, mobile app development, and web solutions in Coimbatore.",
    images: ["https://www.fyrix.tech/preview-image.webp"],
  },
  other: {
    "theme-color": "#000000",
    viewport: "width=device-width, initial-scale=1",
    charset: "UTF-8",
  },
};

// Optional: Include JSON-LD Schema markup for better SEO
export const structuredData = {
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fyrix Technologies",
    url: "https://www.fyrix.tech",
    logo: "https://www.fyrix.tech/images/logo/favicon.svg",
    sameAs: [
      "https://www.linkedin.com/company/fyrix-tech",
      "https://twitter.com/FyrixTech",
      "https://www.instagram.com/fyrix.tech",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9876543210",
        contactType: "Customer Support",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Coimbatore, Tamil Nadu",
      addressLocality: "Coimbatore",
      addressRegion: "TN",
      postalCode: "641001",
      addressCountry: "IN",
    },
  }),
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Contact />

      {/* Inject structured data in <body> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredData}
      />
    </>
  );
}
