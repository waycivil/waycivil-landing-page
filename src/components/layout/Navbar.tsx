import { useState } from "react";
import Logo from "./Logo";
import NavbarDropdown from "./NavbarDropdown";
import NavbarItem from "./NavbarItem";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

interface NavbarProps {
  privateSiteUrl: string;
}

const Navbar = ({ privateSiteUrl }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 ${
        isMobileMenuOpen ? " h-screen" : "h-17"
      }`}
    >
      <div className="max-w-content mx-auto w-full flex items-center justify-between px-6 maxwidth:px-0 transition-all h-17">
        {/* Logo */}
        <Logo />

        {/* Center Items */}
        <div
          className={`${
            isMobileMenuOpen ? "hidden" : "hidden full:flex"
          } items-center gap-6`}
        >
          <NavbarDropdown />
          <NavbarItem route="pricing" label="Pricing" />
          <NavbarItem route="about" label="About" />
        </div>

        {/* Right Items */}
        <div
          className={`${
            isMobileMenuOpen ? "hidden" : "hidden full:flex"
          } items-center gap-6`}
        >
          <NavbarItem route="contact" label="Contact" />
          <a href={`${privateSiteUrl}/login`}>
            <button
              className="bg-primary text-foreground hover:bg-primary-hover h-8 text-sm font-bold px-3 rounded-md
                cursor-pointer"
            >
              Use Now
            </button>
          </a>
        </div>

        {/* Toggle sidebar */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className={`${
            isMobileMenuOpen ? " block" : "full:hidden"
          } text-foreground  hover:cursor-pointer transition-all duration-200 hover:rotate-90 my-6`}
          aria-label="Toggle menu"
        >
          {!isMobileMenuOpen ? (
            <Menu className="h-5 w-5" />
          ) : (
            <X className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Sidebar menu */}
      <Sidebar
        privateSiteUrl={privateSiteUrl}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </nav>
  );
};

export default Navbar;
