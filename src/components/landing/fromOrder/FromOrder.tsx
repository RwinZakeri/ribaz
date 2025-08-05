import TabCard from "@/components/ui/tabCard/tabCard";
import { OrderOption, OrderOptions } from "./orderOption";

const FromOrder = () => {
  return (
    <div className="wrapper mx-auto mb-32">
      <h2 className="text-center text-big font-morabba mb-7">
        از سفارش تا تحویل پروژه.
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-8 px-8 xl:px-0">
        {OrderOptions.map((item: OrderOption, index) => (
          <TabCard
            id={+item.id}
            index={index}
            title={item.title}
            key={item.id}
            theme={index === 4 ? "orange" : "dark"}
            className={`${index === 4 && "xl:col-span-4"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FromOrder;
