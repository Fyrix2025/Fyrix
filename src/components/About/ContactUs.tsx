import SectionTitle from "../Common/SectionTitle";
import ContactUsOne from "./ContactUsOne";
import ContactUsTwo from "./ContactUsTwo";
import SectionFour from "./SectionFour";
import SectionThree from "./SectionThree";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
  <div className="container">
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full ml-4">
        {ContactUsTwo.map((feature) => (
          <ContactUsOne key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  </div>
</section>


  );
};

export default Features;
