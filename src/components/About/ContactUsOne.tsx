import { Feature } from "@/types/feature";

const ContactUsOne = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-[280px] flex-shrink-0 text-center">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-black dark:text-white leading-snug">
            {title}
          </h3>
        </div>
        <p className="text-base font-normal leading-relaxed text-body-color mt-2 px-2">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default ContactUsOne;
