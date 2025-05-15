import type { IHowItWorks } from "../types/type";
import { imageProvider } from "./imageProvider";

export const howItWorksData: IHowItWorks[] = [
  {
    icon: imageProvider.SupportIcon, // replace with your actual image path or import
    title: "Browse Events",
    description:
      "Take a little break from the work stress of everyday. Discover plan trip and explore beautiful destinations.",
  },
  {
    icon: imageProvider.PlanIcon,
    title: "Book Securely",
    description:
      "Take a little break from the work stress of everyday. Discover plan trip and explore beautiful destinations.",
  },
  {
    icon: imageProvider.MapIcon,
    title: "Get Your E-Ticket",
    description:
      "Take a little break from the work stress of everyday. Discover plan trip and explore beautiful destinations.",
  },
];
