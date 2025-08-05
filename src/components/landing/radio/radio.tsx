import { cn } from "@/lib/utils";
import React from "react";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: React.ReactNode;
  required?: boolean;
}

function Radio({ className, label, required, ...props }: RadioProps) {
  return (
    <label className="flex items-center gap-2 font-bold cursor-pointer">
      <input
        type="radio"
        required={required}
        className={cn(
          // Increased default border to 2px and inner border to 6px when checked
          "h-5 w-5 appearance-none rounded-full border-2 border-[var(--dark-orange)] bg-transparent checked:border-[6px] checked:border-[var(--dark-orange)] transition-colors duration-200 ease-in-out",
          "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
      <span className="text-sm">
        {label}
        {required && (
          <span className="text-[var(--dark-orange)] text-xs ms-1">
            (ضروری)
          </span>
        )}
      </span>
    </label>
  );
}

export { Radio };
