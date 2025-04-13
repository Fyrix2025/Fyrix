import { Feature } from "@/types/feature";

const WhoWeAreTwo: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
      >
        <path
          d="M17 21V19C17 17.8954 16.1046 17 15 17H9C7.89543 17 7 17.8954 7 19V21M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.24 14.24C21.2167 15.2167 21.2167 16.7833 20.24 17.76C19.2633 18.7367 17.6967 18.7367 16.72 17.76C15.7433 16.7833 15.7433 15.2167 16.72 14.24C17.6967 13.2633 19.2633 13.2633 20.24 14.24Z"
          className="fill-current"
        />
      </svg>
    ),
    title: "Who We Are?",
    paragraph:
      "We are a passionate team of web experts committed to helping businesses thrive in the digital world. With a focus on customer satisfaction and technical excellence, we empower clients through web vitals optimization, SEO, and tailored web development. Our goal is to elevate your online presence and drive impactful results.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
      >
        <path
          d="M3 3V21H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 17L10 13L13 16L17 10L21 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="17" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    title: "What We Offer?",
    paragraph:
      "At Fyrix, we provide a comprehensive suite of services to help your business grow online. From optimizing performance metrics and enhancing user experience to implementing SEO strategies and crafting custom websites, we deliver solutions tailored to your unique business goals.",
  },
];

export default WhoWeAreTwo;
