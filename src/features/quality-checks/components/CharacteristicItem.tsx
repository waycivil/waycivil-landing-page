import type { LucideIcon } from "lucide-react";

interface CharacteristicItemProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function CharacteristicItem({
  Icon,
  title,
  description,
}: CharacteristicItemProps) {
  return (
    <div className="flex flex-col items-center gap-2 tablet:gap-y-4 tablet:items-start">
      <Icon className="text-primary w-8 h-8" />
      <h5 className="text-lg tablet:text-xl full:text-2xl text-foreground font-bold text-center tablet:text-left">
        {title}
      </h5>
      <p className="text-sm tablet:text-base full:text-lg text-subtitle text-center tablet:text-left">
        {description}
      </p>
    </div>
  );
}
