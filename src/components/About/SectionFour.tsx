import { Feature } from "@/types/feature";

const SectionFour = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="group rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300 ease-in-out p-5 hover:shadow-md h-[300px] flex flex-col justify-between">
          <div className="flex flex-col items-start gap-4">
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </h3>
          </div>
          <p className="text-base font-medium leading-relaxed text-body-color pr-[10px]">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
