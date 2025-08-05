import TabCard from "@/components/ui/tabCard/tabCard";
import { services } from "./services";

const ServiceSection = () => {
  return (
    <section
      className="w-full mx-auto h-[740px] lg:h-60 bg-[url(/images/dotted-vector-pattern.png)] relative mb-36"
      aria-label="Our Services"
    >
      <div className="wrapper mx-auto relative  justify-center -top-16 wrapper grid grid-cols-1 lg:grid-cols-3 px-8 xl:px-0 gap-6">
        {services.map(({ id, title }, index) => (
          <TabCard
            key={id}
            id={Number(id)}
            index={index}
            title={title}
            theme={index === 6 ? "dark" : "light"}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
