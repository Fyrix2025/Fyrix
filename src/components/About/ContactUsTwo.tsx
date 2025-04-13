import { Feature } from "@/types/feature";

const ContactUsTwo: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75m19.5 0L12 13.5"
        />
      </svg>
    ),
    title: "Contact Us",
    paragraph:
      "Reach out to us through our website or by phone to discuss your needs and receive a quote.",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2l4-4m2 8.25V6.75A2.25 2.25 0 0014.75 4.5h-5.5A2.25 2.25 0 007 6.75v10.5A2.25 2.25 0 009.25 19.5h5.5A2.25 2.25 0 0017 17.25z"
        />
      </svg>
    ),
    title: "Review & Approve",
    paragraph:
      "Review the quote and once you're satisfied, you have to approve the quote to proceed.",
  },

  {
    id: 3,
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2l4-4m6 2a10 10 0 11-20 0 10 10 0 0120 0z"
        />
      </svg>
    ),
    title: "Confirm & Complete",
    paragraph:
      "We'll then get started on delivering the services you need to achieve your online goals.",
  },
];
export default ContactUsTwo;
