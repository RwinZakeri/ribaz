"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import navItem from "./navItem";

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-fit">
      <div className="xl:hidden">
        <Button
          onClick={clickHandler}
          className={`rounded-full hover:bg-primary px-1.5 sm:w-12 sm:h-12 ${
            isOpen ? "bg-primary" : "bg-foreground"
          }`}
        >
          <Image
            src={isOpen ? "/icons/close.svg" : "/icons/burger.svg"}
            width={23}
            height={23}
            alt="menu icon"
            className="cursor-pointer"
          />
        </Button>

        <div
          className={`transition-all shadow-2xl duration-500 overflow-hidden absolute left-0 top-24 w-full bg-white ${
            isOpen ? "max-h-[360px]" : "max-h-0"
          } rounded-sm`}
        >
          <div className="flex flex-col ">
            {navItem?.map((item) => (
              <Link href={item.href} key={item.id} className="p-6 text-base">
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* nav on desktop */}
      <div className="hidden xl:flex px-12">
        {navItem?.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="p-6 xl:py-[13px] xl:px-[20px] text-base xl:text-lg"
          >
            {item?.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default HeaderNav;
