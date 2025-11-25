import { type FC, useEffect } from "react";
import SidebarItem from "./SidebarItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { services } from "@/utils/DropdownItems";
import SidebarAccordionItem from "./SidebarAccordionItem";

interface Props {
  privateSiteUrl: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<Props> = ({
  privateSiteUrl,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  /* Si el width cambia y se pasa de 1027, se cierra el sidebar */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1027 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  return (
    <section
      className={`bg-background max-h-[800px] flex flex-col justify-between w-full ${
        isMobileMenuOpen ? "flex" : "hidden"
      }`}
    >
      {/* Contenedor con scroll */}
      <div className="w-full max-h-[800px] overflow-y-auto">
        <ul className="flex flex-col mx-3 tablet:mx-6 mt-8 text-subtitle overflow-y-auto h-full">
          <Accordion
            type="single"
            collapsible
            className="w-full border-b border-border"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg cursor-pointer hover:no-underline hover:text-primary-hover">
                Services
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <ul className=" flex flex-col w-full">
                  {services.map((item) => (
                    <SidebarAccordionItem key={item.route} item={item} />
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <SidebarItem route="pricing" label="Pricing" />
          <SidebarItem route="about" label="About" />
          <SidebarItem route="contact" label="Contact" />
        </ul>
      </div>

      {/* Sign Up Buttons */}
      <div className=" absolute bottom-0 bg-background border-t border-border w-full p-3 tablet:p-6 flex gap-4">
        <a className="w-full" href={`${privateSiteUrl}/signup`}>
          <button className="bg-primary text-foreground hover:bg-primary-hover h-8 text-sm font-bold px-3 rounded-md cursor-pointer w-full">
            Sign Up
          </button>
        </a>
        <a className="w-full" href={`${privateSiteUrl}/login`}>
          <button
            className=" text-foreground hover:border-primary h-8 text-sm font-bold px-3 rounded-md
           cursor-pointer w-full border-border border transition-all hover:text-primary bg-background"
          >
            Log In
          </button>
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
