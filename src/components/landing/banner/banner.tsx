import { Button } from "@/components/ui/button";
import cup from "@/assets/business-man-holding-cup.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-primary max-w-[1300px] mx-auto rounded-[12px] flex">
      <div>
        <p>
          برای کسب و کار خود نیاز به وبسایت دارید؟ میزبان صدای گرمتان هستیم.
        </p>
        <Button className="bg-black">سفارش طراحی سایت</Button>
      </div>
      <div>
        <Image src={cup} alt="cup" className="w-52" />
      </div>
    </div>
  );
};

export default Banner;
