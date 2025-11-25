import type { FC } from "react";

interface Props {
  route: string;
  label: string;
}

const NavbarItem: FC<Props> = ({ route, label }) => {
  // Detectar si la ruta es absoluta (URL completa) o relativa
  const isAbsoluteUrl = route.startsWith("http://") || route.startsWith("https://");
  const href = isAbsoluteUrl ? route : `/${route}`;

  return (
    <a
      href={href}
      className="group relative text-sm text-subtitle transition-colors hover:text-primary-hover hover:cursor-pointer
             py-6"
    >
      {label}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary-hover transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export default NavbarItem;
