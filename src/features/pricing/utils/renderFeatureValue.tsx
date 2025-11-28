import { Check, X } from "lucide-react";

export const renderFeatureValue = (value: boolean | string) => {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex items-center justify-center">
        <Check className="h-5 w-5 text-primary" />
      </div>
    ) : (
      <div className="flex items-center justify-center">
        <X className="h-5 w-5 text-subtitle" />
      </div>
    );
  }
  return <span className="text-foreground">{value}</span>;
};
