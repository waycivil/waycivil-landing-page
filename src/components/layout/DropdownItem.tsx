import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import type { DropdownItemType } from "./NavbarDropdown";

interface DropdownItemProps {
  item: DropdownItemType;
}

const DropdownItem = ({ item }: DropdownItemProps) => {
  const Icon = item.icon;

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={item.enabled ? `/${item.route}` : undefined}
          aria-disabled={!item.enabled}
          className={`
            flex gap-3 rounded-lg p-3 transition-all
            ${item.enabled
              ? "hover:bg-container cursor-pointer"
              : "cursor-not-allowed opacity-50"
            }
          `}
        >
          {/* Icon container */}
          <div className="shrink-0">
            <div className="inline-flex rounded-lg bg-primary/10 p-2">
              <Icon className="h-5 w-5 text-primary" />
            </div>
          </div>

          {/* Content */}
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
            <p className="text-xs leading-relaxed text-subtitle">
              {item.description}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

export default DropdownItem;
