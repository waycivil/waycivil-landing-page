import type { FC } from "react";
import type { ComparisonCategoryType } from "../types/types";
import { renderFeatureValue } from "../utils/renderFeatureValue";

interface Props {
  selectedComparisonPlan: "free" | "enterprise";
}

const ComparisonCategoryMobile: FC<ComparisonCategoryType & Props> = ({
  category,
  features,
  selectedComparisonPlan,
}) => {
  return (
    <div className="rounded-lg border border-container bg-background/40 p-4">
      <h3 className="mb-4 text-sm font-semibold uppercase text-primary">
        {category}
      </h3>
      <div className="space-y-3">
        {features.map((feature) => (
          <div key={feature.name} className="flex items-center justify-between">
            <span className="text-sm text-subtitle">{feature.name}</span>
            <div className="flex items-center text-sm">
              {renderFeatureValue(feature[selectedComparisonPlan])}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonCategoryMobile;
