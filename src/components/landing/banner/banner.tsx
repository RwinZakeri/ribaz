import cup from "@/assets/business-man-holding-cup.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="px-8">
      <div className="bg-primary max-w-[1200px]  lg:mx-auto rounded-[12px] my-12 pt-2 flex flex-col lg:flex-row">
        <div className="px-4 w-full flex flex-col gap-2 items-center justify-center">
          <p className="text-white text-center">
            برای کسب و کار خود نیاز به وبسایت دارید؟ میزبان صدای گرمتان هستیم.
          </p>
          <Button className="bg-black">سفارش طراحی سایت</Button>
        </div>
        <div className="flex justify-center w-full">
          <Image src={cup} alt="cup" className="w-52" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
