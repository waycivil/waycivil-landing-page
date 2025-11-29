import type { DropdownItemType } from "@/types/DropdownItems";
import { BarChart3, Calculator, FileCheck, MessageCircle } from "lucide-react";

export const services: DropdownItemType[] = [
  {
    icon: FileCheck,
    route: "quality-checks",
    title: "Quality Checks",
    description: "Review your civil plans in seconds",
    enabled: true,
  },
  {
    icon: BarChart3,
    route: "reports",
    title: "Reports",
    description: "Generate comprehensive project reports",
    enabled: false,
  },
  {
    icon: Calculator,
    route: "quantities",
    title: "Quantities",
    description: "Calculate quantities and estimates",
    enabled: false,
  },
  {
    icon: MessageCircle,
    route: "ask-civil-eng",
    title: "Ask Civil Eng",
    description: "Get instant answers from AI civil engineer",
    enabled: false,
  },
];
