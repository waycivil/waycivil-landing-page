import { Target, Zap, Shield } from "lucide-react";

interface Props {
  iconName: "target" | "zap" | "shield";
  title: string;
  description: string;
}

const iconMap = {
  target: Target,
  zap: Zap,
  shield: Shield,
};

export default function FeatureBox({ iconName, title, description }: Props) {
  const Icon = iconMap[iconName];

  return (
    <div className="group rounded-2xl border border-border bg-popover p-4 tablet:p-8 transition-all hover:border-primary/50">
      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
        <Icon className="h-5 tablet:h-6 w-5 tablet:w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-lg tablet:text-xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-sm tablet:text-base leading-relaxed text-subtitle">
        {description}
      </p>
    </div>
  );
}
