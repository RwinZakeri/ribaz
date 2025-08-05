import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input/input";
import { Select } from "@/components/ui/select/select";
import { Textarea } from "@/components/ui/textArea/textArea";
import { Radio } from "../radio/radio";

const RequestForm = () => {
  return (
    <div
      id="contact"
      className="w-full bg-[url(/images/dotted-vector-pattern.png)] mb-36 "
    >
      <div className="max-w-[1300px] mx-auto flex-col flex items-center xl:flex-row p-8 justify-center gap-4">
        <div className="flex gap-2 flex-col w-full">
          <h2 className="text-big xl:text-start font-morabba text-center">
            درخواست طراحی سایت
          </h2>
          <p>
            جهت دریافت مشاوره رایگان طراحی سایت و ثبت درخواست همکاری لطفا فرم
            زیر را پر کنید تا کارشناسان ما با شما تماس بگیرند.
          </p>
        </div>
        <div className="w-full">
          <form action="" className="flex gap-4 flex-col">
            <div className="flex gap-4">
              <Input label="نام و نام خانوادگی" required />
              <Input label="تلفن همراه" required />
            </div>
            <div>
              <Select
                label="نوع درخواست"
                required
                name="requestType"
                options={[
                  { value: "", label: "انتخاب کنید." },
                  { value: "w01", label: "میخواهم یک وبسایت جدید طراحی کنم." },
                  { value: "w02", label: "فقط ظاهر سایت را مجدد طراحی کنم." },
                  { value: "w03", label: "ساختار کلی سایت را بروز کنم." },
                ]}
              />
            </div>
            <Textarea label="توضیحات" required />
            <div className="mt-2 font-bold text-sm">
              <p>
                از چه راهی با شما در ارتباط باشم؟{" "}
                <span className="text-[var(--dark-orange)]">(ضروری)</span>{" "}
              </p>
              <div className="flex flex-col my-4 gap-3">
                <Radio label="تلگرام" disabled />
                <Radio label="واتساپ" checked />
                <Radio label="تماس تلفنی" disabled />
              </div>
            </div>
            <Button className="w-fit px-12 py-6">ارسال</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
