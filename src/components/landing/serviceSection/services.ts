import { v4 as uuidv4 } from "uuid";

export interface SiteType {
  id: string;
  title: string;
}

export const services: SiteType[] = [
  {
    id: uuidv4(),
    title: "طراحی سایت فروشگاهی",
  },
  {
    id: uuidv4(),
    title: "طراحی سایت خبری",
  },
  {
    id: uuidv4(),
    title: "طراحی سایت شرکتی",
  },
  {
    id: uuidv4(),
    title: "طراحی سایت پزشکی",
  },
  {
    id: uuidv4(),
    title: "طراحی سایت آموزشی",
  },
  {
    id: uuidv4(),
    title: "طراحی سایت شخصی",
  },
  {
    id: uuidv4(),
    title: "جای کسب و کار شما خالی است...",
  },
];
