import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/", // Ensure a valid `index.tsx` exists in the `pages` directory
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about", // Ensure `about.tsx` exists in the `pages` directory
    newTab: false,
  },
  {
    id: 3,
    title: "How it works",
    path: "/howtoworks", // Ensure `how-it-works.tsx` exists in the `pages` directory
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact", // Ensure `contact.tsx` exists in the `pages` directory
    newTab: false,
  },
  {
    id: 5,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 6,
    title: "Pricing",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Web Design & Development",
        path: "/web-design",
        newTab: false,
      },
      {
        id: 62,
        title: "Scalable App Solutions",
        path: "/app-solutions",
        newTab: false,
      },
      {
        id: 63,
        title: "AI Services",
        path: "/ai-services",
        newTab: false,
      },
      {
        id: 64,
        title: "UI/UX",
        path: "/ui-ux",
        newTab: false,
      },
      {
        id: 65,
        title: "Quality Assurance",
        path: "/quality-assurance",
        newTab: false,
      },
      {
        id: 66,
        title: "Cloud Solutions",
        path: "/cloud-solutions",
        newTab: false,
      },
      {
        id: 67,
        title: "DevOps",
        path: "/devops",
        newTab: false,
      },
    ],
  },
  {
    id: 7,
    title: "Legals",
    newTab: false,
    submenu: [
      {
        id: 71,
        title: "FAQ's",
        path: "/faqs",
        newTab: false,
      },
      {
        id: 72,
        title: "Disclaimer",
        path: "/disclaimer",
        newTab: false,
      },
      {
        id: 73,
        title: "Terms & Conditions",
        path: "/terms-and-conditions",
        newTab: false,
      },
      {
        id: 74,
        title: "Privacy Policy",
        path: "/privacy-policy",
        newTab: false,
      },
    ],
  },
];
export default menuData;
