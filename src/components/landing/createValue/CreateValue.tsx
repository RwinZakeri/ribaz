import CreateValueCard from "@/components/ui/createValueCard/CreateValueCard";
import { createValueData } from "./createValueData";

const CreateValue = () => {
  return (
    <div className="px-8 flex flex-col gap-5 lg:flex-row">
      <div className="flex flex-col gap-8">
        {createValueData?.slice(0, 3)?.map((item, index) => (
          <CreateValueCard
            key={item.id}
            desc={item.description}
            index={index + 1}
            title={item.title}
          />
        ))}
      </div>

      <div>
        <p className="text-big text-center font-morabba">
          خلق ارزش در دنیای دیجیتال .
        </p>
      </div>

      {createValueData?.slice(3, 6)?.map((item, index) => (
        <CreateValueCard
          key={item.id}
          desc={item.description}
          index={index + 3 + 1}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default CreateValue;
