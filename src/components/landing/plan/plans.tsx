// ./Plans.tsx
import PlanCard from "@/components/ui/planCard/planCard";
import { plansData } from "./plansData";

const Plans = () => {
  return (
    <div id="plans" className="wrapper mx-auto mb-36">
      <h2 className="text-big font-morabba text-center mb-7">پلن ها .</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3  px-8 xl:px-0">
        {plansData.map((item) => (
          <PlanCard
            id={item.id}
            key={item.id}
            badge={item.badge}
            options={item.options}
            btnText="استعلام قیمت"
          />
        ))}

        <PlanCard
          id={31231}
          badge={{
            desc: "سفارشی (وکالت؛ پزشکی و...)",
            planName: "پلن ۴",
            isBadgeFull: true,
          }}
          options={[]}
          className="lg:col-span-3 "
          btnText="محاسبه هزینه"
        >
          <div className="w-6 h-6 bg-main-gray rounded-full  mx-auto my-2 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full "></div>
          </div>
          <p className="text-center text-gray text-color-gray">تماس بگیرید</p>
        </PlanCard>
      </div>
    </div>
  );
};

export default Plans;
