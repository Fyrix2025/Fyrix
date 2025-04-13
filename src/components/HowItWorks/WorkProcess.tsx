import ContactUs from "../About/ContactUs";

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-16 lg:py-20">
      <div className="container text-center">
      <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          Work Process
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          Starting the process is very easy — just follow 3 simple steps.
        </p>
        <div className="mt-2">
          <ContactUs />
        </div>
      </div>
    </section>
  );
};

export default Features;
