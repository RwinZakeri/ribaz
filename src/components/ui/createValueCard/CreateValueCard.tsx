import Image from "next/image";
import { createValueCardType } from "./type";

const CreateValueCard = ({
  desc,
  index,
  title,
  className,
}: createValueCardType) => {
  return (
    <div
      className={`w-full hover:bg-primary transition-all shadow-[0px_0px_12px_#dddddd] rounded-[20px] flex flex-col gap-4 p-5 xl:w-11/12 ${className}`}
    >
      <div className="flex flex-col gap-2">
        <Image
          src={`/images/ib-icon-${index}.png`}
          alt="icons"
          width={45}
          height={45}
        />
        <h3 className="text-xl font-morabba">{title}</h3>
      </div>
      <p className="leading-7">{desc}</p>
    </div>
  );
};

export default CreateValueCard;
