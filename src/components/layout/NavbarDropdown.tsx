import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { services } from "@/utils/DropdownItems";
import DropdownItem from "./DropdownItem";

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
