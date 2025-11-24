import { useState } from "react";
import Logo from "./Logo";
import NavbarDropdown from "./NavbarDropdown";
import NavbarItem from "./NavbarItem";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed h-17 top-0 w-full border-b border-border bg-background/80 backdrop-blur-lg z-50">
      <div className="max-w-content mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Logo />

        {/* Center Items */}
        <div className="hidden full:flex items-center gap-6">
          <NavbarDropdown />
          <NavbarItem route="pricing" label="Pricing" />
          <NavbarItem route="about" label="About" />
        </div>

        {/* Right Items */}
        <div className="hidden full:flex items-center gap-6">
          <NavbarItem route="contact" label="Contact" />
          <NavbarItem route="login" label="Log In" />
          <a href="/signup">
            <button
              className="bg-primary text-white hover:bg-primary-hover h-8 text-sm font-bold px-3 rounded-md
             cursor-pointer"
            >
              Sign Up
            </button>
          </a>
        </div>

        {/* Toggle sidebar */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-foreground full:hidden hover:cursor-pointer transition-all duration-200 hover:rotate-90 my-6"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar menu */}
      <Sidebar
        isOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </nav>
  );
};

export default Navbar;
