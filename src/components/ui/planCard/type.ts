import { ReactNode } from "react";

// types.ts
export interface PlanCardType {
  id: number;
  badge: {
    planName: string;
    desc: string;
    isBadgeFull?: boolean;
  };
  options: string[];
  className?: string;
  children?: ReactNode;
  btnText?: string;
}
