import { Feature } from "@/types/feature";

const SectionThree: Feature[] = [
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
          d="M12 3a6.75 6.75 0 00-3.294 12.648c.218.12.356.34.356.587v.79a.75.75 0 00.75.75h4.376a.75.75 0 00.75-.75v-.79c0-.247.138-.467.356-.587A6.75 6.75 0 0012 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 19.5h4.5M10.5 21h3"
        />
      </svg>
    ),
    title: "Expertise",
    paragraph:
      "We have a team of experienced & knowledgeable professionals who are dedicated in delivering top-notch web services.",
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
          d="M11.25 2.25c.97 0 1.75.78 1.75 1.75s-.78 1.75-1.75 1.75-1.75-.78-1.75-1.75.78-1.75 1.75-1.75zM3.75 12c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75-.78 1.75-1.75 1.75S3.75 12.97 3.75 12zm7.5 7.25c.97 0 1.75.78 1.75 1.75s-.78 1.75-1.75 1.75-1.75-.78-1.75-1.75.78-1.75 1.75-1.75zM21 12a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM12 12.75V11.25M16.5 7.5l-1.5 1.5M7.5 7.5L9 9M16.5 16.5l-1.5-1.5M7.5 16.5l1.5-1.5"
        />
      </svg>
    ),
    title: "Customization",
    paragraph:
      "At Fyrix, we recognize that every business is distinct.Our solutions are thoughtfully tailored to align with your specific goals and requirements.",
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
          d="M12 3L4.5 6.75v5.25c0 5.25 3.75 9.75 7.5 10.5 3.75-.75 7.5-5.25 7.5-10.5V6.75L12 3z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Reliability",
    paragraph:
      "We are deeply committed to delivering high-quality results while consistently exceeding client expectations through dedication and precision.",
  },
  {
    id: 4,
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
          d="M4 4h16M4 4l4 4M4 4l4-4M20 20H4m16 0l-4 4m4-4l-4-4"
        />
      </svg>
    ),
    title: "Flexibility",
    paragraph:
      "We excel at adapting to evolving business needs, delivering flexible and scalable solutions that drive long-term success.",
  },
];
export default SectionThree;
