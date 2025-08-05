import { v4 as uuidv4 } from "uuid";

export interface OrderOption {
  id: string;
  title: string;
}

export const OrderOptions: OrderOption[] = [
  {
    id: uuidv4(),
    title: "مشاوره و آنالیز رایگان",
  },
  {
    id: uuidv4(),
    title: "ارسال پروپوزال",
  },
  {
    id: uuidv4(),
    title: "عقد قرارداد",
  },
  {
    id: uuidv4(),
    title: "انجام پروژه",
  },
  {
    id: uuidv4(),
    title: "تحویل پروژه",
  },
];
