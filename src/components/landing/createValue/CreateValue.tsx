import CreateValueCard from "@/components/ui/createValueCard/CreateValueCard";
import Image from "next/image";
import { createValueData } from "./createValueData";

const CreateValue = () => {
  return (
    <div className="px-8 flex flex-col xl:flex-row gap-5 lg:flex-row mb-36">
      <div className="flex flex-col gap-8 w-full ">
        {createValueData?.slice(0, 3)?.map((item, index) => (
          <CreateValueCard
            key={item.id}
            desc={item.description}
            index={index + 1}
            title={item.title}
            className={`${index === 1 && "self-end"}`}
          />
        ))}
      </div>

      <div className="w-full">
        <p className="text-big text-center font-morabba">
          خلق ارزش در دنیای دیجیتال .
        </p>
        <Image
          className="w-full"
          width={250}
          height={250}
          src={"/images/Our-features2.png"}
          alt="feature"
        />
      </div>
      <div className="flex flex-col gap-8 w-full">
        {createValueData?.slice(3, 6)?.map((item, index) => (
          <CreateValueCard
            className={`${(index === 0 || index === 2) && "self-end"}`}
            key={item.id}
            desc={item.description}
            index={index + 3 + 1}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateValue;
