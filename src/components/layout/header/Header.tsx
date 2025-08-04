import Image from "next/image";
// imported images
import logo from "@/assets/logo/android-chrome-192x192.png";
import { Button } from "../../ui/button";
import HeaderNav from "./components/headerNav/headerNav";
const Header = () => {
  return (
    <header className="w-full z-50 h-auto fixed top-0 left-0 py-2.5 flex items-center justify-between px-4 bg-white sm:rounded-full sm:w-11/12 sm:top-10 sm:left-1/2 sm:-translate-x-1/2 max-w-[1270px] border-1 xl:px-7">
      <Image
        src={logo}
        width={120}
        height={120}
        alt="ribaz logo"
        className="w-16 xl:w-[75px]"
      />

      <div className="flex gap-8 items-center w-auto justify-between sm:flex-row-reverse sm:w-1/2 xl:w-full">
        <Button className="sm:py-[18px]  sm:px-[39px] sm:h-13 text-base ">
          <span className="hidden sm:block">سفارش طراحی سایت</span>
          <span className="block sm:hidden"> مشاوره رایگان</span>
        </Button>

        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
