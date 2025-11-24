import { X } from "lucide-react";
import Logo from "./Logo";
import type { FC } from "react";

interface Props {
  isOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<Props> = ({ isOpen, setIsMobileMenuOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen min-w-screen sm:w-80 z-50 bg-background shadow-xl transition-all 
            duration-300 ease-in-out ${
              isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
      >
        <div className="max-w-content mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <Logo />

          {/* Toggle sidebar */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-foreground full:hidden hover:cursor-pointer transition-all duration-200 hover:rotate-90 my-6"
            aria-label="Toggle menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
