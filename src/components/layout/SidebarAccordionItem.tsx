import type { DropdownItemType } from "@/types/DropdownItems";
import type { FC } from "react";

interface DropdownItemProps {
  item: DropdownItemType;
}

const SidebarAccordionItem: FC<DropdownItemProps> = ({ item }) => {
  return (
    <a
      href={item.enabled ? `/${item.route}` : undefined}
      aria-disabled={!item.enabled}
      className={`flex gap-3 rounded-lg p-3 ${
        item.enabled
          ? "hover:bg-container cursor-pointer"
          : "cursor-not-allowed opacity-50"
      }`}
    >
      <div className="shrink-0">
        <div className="inline-flex rounded-lg bg-primary/10 p-2">
          <item.icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="flex-1">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">
            {item.title}
          </span>
          {!item.enabled && (
            <span className="rounded bg-primary px-2 py-0.5 text-xs font-medium text-foreground">
              SOON
            </span>
          )}
        </div>
        <div className="text-xs leading-relaxed text-foreground/60">
          {item.description}
        </div>
      </div>
    </a>
  );
};

export default SidebarAccordionItem;
