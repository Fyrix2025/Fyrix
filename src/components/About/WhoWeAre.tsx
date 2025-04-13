import SectionTitle from "../Common/SectionTitle";
import SectionFour from "./SectionFour";
import SectionThree from "./SectionThree";
import WhoWeAreOne from "./WhoWeAreOne";
import WhoWeAreTwo from "./WhoWeAreTwo";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">

        <div className="grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
          {WhoWeAreTwo.map((feature) => (
            <WhoWeAreOne key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
