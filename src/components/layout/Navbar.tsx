import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
import NavbarDropdown from "./NavbarDropdown";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full border-b border-border bg-background/80 backdrop-blur-lg z-50">
      <div className="max-w-content mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Logo />

        {/* Center Items */}
        <div className="flex items-center gap-6">
          <NavbarDropdown />
          <NavbarItem route="pricing" label="Pricing" />
          <NavbarItem route="about" label="About" />
        </div>

        {/* Right Items */}
        <div className="flex items-center gap-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
