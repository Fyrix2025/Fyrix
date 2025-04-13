import { Feature } from "@/types/feature";

const WhoWeAreOne = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full max-w-[460px] mx-auto">
      <div
        className="group relative h-[370px] w-full rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex flex-col justify-between"
      >
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl z-0" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl mb-3">
            {title}
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreOne;
