import SectionTitle from "../Common/SectionTitle";
import BenefitsTwo from "./BenefitsTwo";
import BenefitsOne from "./BenefitsOne";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Discover the Benefits"
            paragraph="We understand the importance of meeting deadlines and delivering results quickly & that's why we work efficiently and effectively to deliver your projects faster than you expect, without sacrificing quality or attention to detail."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {BenefitsOne.map((feature) => (
              <BenefitsTwo key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
