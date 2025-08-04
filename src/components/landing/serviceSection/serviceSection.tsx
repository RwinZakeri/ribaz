import TabCard from "@/components/ui/tabCard/tabCard";
import { services } from "./services";

const ServiceSection = () => {
  return (
    <section
      className="w-full h-[680px] bg-[url(/images/dotted-vector-pattern.png)] relative"
      aria-label="Our Services"
    >
      <div className="w-full relative -top-16 px-4">
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
