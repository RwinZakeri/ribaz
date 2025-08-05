import enamad from "@/assets/enamad-icon.png";
import logo from "@/assets/logo/android-chrome-192x192.png";
import { Mail, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import telegram from "../../../../public/icons/telegramsvg.svg";
const Footer = () => {
  return (
    <footer className="relative">
      <div className="w-full h-full absolute z-30 bottom-12 bg-[url(/icons/wave.svg)] bg-no-repeat rotate-180 "></div>
      <div className="px-8 relative z-40 flex flex-col xl:flex-row wrapper gap-4 items-center justify-center mx-auto">
        <div className="w-full">
          <Image
            src={logo}
            width={120}
            height={120}
            alt="ribaz logo"
            className="w-18 xl:w-[75px]"
          />
          <p>
            ما کسب و کار شما را در دنیای دیجیتال طراحی میکنیم | آژانس دیجیتال
            مارکتینگ ریباز وب
          </p>
        </div>
        <div className="my-10 flex flex-col w-full">
          <span className="font-bold font-morabba">تماس با ما</span>
          <Link
            href={"tel:09205664202"}
            className="flex items-center my-2 gap-2"
          >
            <span className=" w-8 h-8 p-1.5 flex items-center justify-center bg-black rounded-full text-white">
              <PhoneIcon className="text-primary" />
            </span>
            <span>09205664202</span>
          </Link>
          <Link
            href={"mailto:ribazweb@gmail.com"}
            className="flex items-center my-2 gap-2"
          >
            <span className=" w-8 h-8 p-1.5 flex items-center justify-center bg-black rounded-full text-white">
              <Mail className="text-primary" />
            </span>
            <span>ribazweb@gmail.com</span>
          </Link>
        </div>

        <div className="my-10 flex flex-col w-full">
          <span className="font-bold font-morabba">ارسال پیام به پشتیبانی</span>
          <Link
            href={"https://t.me/inforastegar"}
            className="w-24 h-32 my-4 flex items-center justify-center rounded-[10px] mx-auto  bg-linear-to-r from-[#03b8ff] to-[#4361ee] "
          >
            <Image src={telegram} className="w-12" alt="tel" />
          </Link>
        </div>

        <div className="my-10 flex flex-col w-full">
          <span className="font-bold font-morabba">نماد اعتماد الکترونیکی</span>
          <Link
            href={
              "https://trustseal.enamad.ir/?id=340531&amp;Code=mnteh535MrRhSXMAIPAE"
            }
            className="block mx-auto"
          >
            <Image src={enamad} className="w-48" alt="tel" />
          </Link>
        </div>
      </div>
      <div className="w-full bg-gray-500 text-white py-4 text-center">
        تمامی حقوق برای ریباز وب محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
