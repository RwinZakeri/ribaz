import TabCard from "@/components/ui/tabCard/tabCard";
import { services } from "./services";

const ServiceSection = () => {
  return (
    <section
      id="services"
      className="w-full mx-auto h-[740px] lg:h-60 bg-[url(/images/dotted-vector-pattern.png)] relative mb-36"
      aria-label="Our Services"
    >
      <div className="wrapper mx-auto relative justify-center -top-16 grid grid-cols-1 lg:grid-cols-3 px-8 xl:px-0 gap-6">
        {services.map(({ id, title }, index) => {
          const isLast = index === services.length - 1;

          return (
            <div key={id} className={isLast ? "flex justify-center" : ""}>
              <TabCard
                id={Number(id)}
                index={index}
                title={title}
                theme={isLast ? "dark" : "light"}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection;
