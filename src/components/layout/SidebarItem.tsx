import type { FC } from "react";

interface Props {
  route: string;
  label: string;
}

const SidebarItem: FC<Props> = ({ route, label }) => {
  return (
    <a
      href={route}
      className=" text-lg transition-all duration-200 hover:text-primary-hover border-b border-border w-full"
    >
      <li className=" py-4 cursor-pointer">{label}</li>
    </a>
  );
};

export default SidebarItem;
