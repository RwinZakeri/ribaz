import { cn } from "@/lib/utils";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: React.ReactNode;
  required?: boolean;
}

function Input({ className, type, label, required, ...props }: InputProps) {
  return (
    <div className="flex flex-col w-full gap-2 font-bold">
      <div className="flex gap-2 items-center">
        <span>{label} </span>
        <span className="text-[var(--dark-orange)] text-sm">
          {required && "(ضروری)"}
        </span>
      </div>
      <input
        type={type}
        required={required}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-[5px] h-[60px] border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-input",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
