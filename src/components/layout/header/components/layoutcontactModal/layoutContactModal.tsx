"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog/dialog";
import { Input } from "@/components/ui/input/input";
import { Textarea } from "@/components/ui/textArea/textArea";
import { useState } from "react";

const LayoutContactModal = () => {
  const [dialogType, setDialogType] = useState<"consultation" | "phone" | null>(
    null
  );

  return (
    <>
      {/* Trigger for مشاوره رایگان */}
      <Dialog
        open={dialogType === "consultation"}
        onOpenChange={(open) => setDialogType(open ? "consultation" : null)}
      >
        <DialogTrigger asChild>
          <div
            onClick={() => setDialogType("consultation")}
            className="cursor-pointer fixed w-20 px-1 text-center h-20 bg-black rounded-t-full z-50 bottom-0 right-28 text-white flex items-center justify-center text-sm"
          >
            مشاوره رایگان
          </div>
        </DialogTrigger>
        <DialogContent>
          <form action="" className="flex gap-4 flex-col">
            <div className="flex gap-4">
              <Input label="نام و نام خانوادگی" required />
              <Input label="تلفن همراه" required />
            </div>

            <Textarea label="توضیحات" required />
            <Button className="w-fit px-12 py-6">ارسال</Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Trigger for تلفن تماس */}
      <Dialog
        open={dialogType === "phone"}
        onOpenChange={(open) => setDialogType(open ? "phone" : null)}
      >
        <DialogTrigger asChild>
          <div
            onClick={() => setDialogType("phone")}
            className="cursor-pointer fixed w-20 px-1 h-20 bg-black rounded-t-full z-50 bottom-0 right-5 text-white flex items-center justify-center text-sm"
          >
            تلفن تماس
          </div>
        </DialogTrigger>
        <DialogContent>
          <div className="text-sm px-4">
            شماره تماس: <span className="text-primary">۰۹۱۲۳۴۵۶۷۸۹</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LayoutContactModal;
