import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { BarChart3, Calculator, FileCheck, MessageCircle } from "lucide-react";
import DropdownItem from "./DropdownItem";

export interface DropdownItemType {
  icon: any;
  route: string;
  title: string;
  description: string;
  enabled: boolean;
}

const services: DropdownItemType[] = [
  {
    icon: FileCheck,
    route: "plan-reviews",
    title: "Review plans",
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

const NavbarDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-2">
        <NavigationMenuItem className="group relative py-0">
          <NavigationMenuTrigger
            className="text-sm text-subtitle py-6 h-fit cursor-pointer px-0 bg-transparent hover:bg-transparent
            hover:text-primary-hover focus:bg-transparent focus:text-primary-hover  data-[state=open]:hover:bg-transparent
            data-[state=open]:text-primary-hover data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent
            outline-none"
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[320px] gap-2 p-2">
              {services.map((item) => {
                return <DropdownItem key={item.route} item={item} />;
              })}
            </ul>
          </NavigationMenuContent>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary-hover transition-all duration-300 group-hover:w-full" />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarDropdown;
