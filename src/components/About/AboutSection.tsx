import SectionTitle from "../Common/SectionTitle";
import SectionFour from "./SectionFour";
import SectionThree from "./SectionThree";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Core Value"
          paragraph="At Fyrix our core value define who we are and guide the way we do Business "
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {SectionThree.map((feature) => (
            <SectionFour key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
