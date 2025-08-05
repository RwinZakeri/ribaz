import { cn } from "@/lib/utils";
import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label?: React.ReactNode;
  required?: boolean;
}

function Textarea({ className, label, required, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col w-full gap-2 font-bold">
      <div className="flex gap-2 items-center">
        <span>{label}</span>
        <span className="text-[var(--dark-orange)] text-sm">
          {required && "(ضروری)"}
        </span>
      </div>
      <textarea
        required={required}
        data-slot="textarea"
        className={cn(
          "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-[5px] border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-input",
          className
        )}
        rows={4}
        {...props}
      />
    </div>
  );
}

export { Textarea };
