import { v4 as uuidv4 } from "uuid";

import { Button } from "../button";
import { PlanCardType } from "./type";

const PlanCard = ({
  badge,
  options,
  className,
  children,
  btnText,
}: PlanCardType) => {
  return (
    <div className={`bg-card rounded-[10px] overflow-hidden  ${className}`}>
      <div
        className={`${
          badge.isBadgeFull ? "w-full" : "w-fit"
        } h-24 bg-black rounded-l-[20px] text-white px-2 py-4 flex flex-col justify-between font-morabba`}
      >
        <h3 className="text-2xl">{badge?.planName}</h3>
        <p className="text-xl">{badge?.desc}</p>
      </div>

      <div className="py-6 px-2">
        <ul>
          {options?.map((item, index) => (
            <li className="my-3 py-1 border-b-2" key={uuidv4()}>
              <p className="">{options[index]}</p>
            </li>
          ))}
        </ul>
      </div>

      {children}

      <div className="flex flex-col items-center gap-4 py-6">
        <Button className="py-5.5 text-base px-7 w-fit">{btnText}</Button>
        <span className="text-sm">قیمت بر اساس امکانات متغییر است.</span>
      </div>
    </div>
  );
};

export default PlanCard;
