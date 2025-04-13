type SectionTitleProps = {
  title: string;
  paragraph: string;
  center?: boolean;
  width?: string;
};

const SectionTitle = ({ title, paragraph, center, width }: SectionTitleProps) => {
  return (
    <div className={`mx-auto mb-12 ${center ? "text-center" : "text-left"}`} style={{ maxWidth: width || "570px" }}>
      <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base text-body-color sm:text-lg">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
