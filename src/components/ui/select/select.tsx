import { cn } from "@/lib/utils";
import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  label?: React.ReactNode;
  required?: boolean;
  options: { label: string; value: string }[];
}

function Select({
  className,
  label,
  required,
  options,
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col w-full gap-2 font-bold">
      <div className="flex gap-2 items-center">
        <span>{label}</span>
        <span className="text-[var(--dark-orange)] text-sm">
          {required && "(ضروری)"}
        </span>
      </div>
      <select
        required={required}
        className={cn(
          "bg-input border-input flex h-9 w-full min-w-0 rounded-[5px] h-[60px] border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-input",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        {...props}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export { Select };
