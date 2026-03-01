import { useState } from "react";
import PricingBtnOption from "./PricingBtnOption";
import { plans } from "../utils/constants";
import PricingOpt from "./PricingOpt";

const PricingPlans = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly"
  );
  return (
    <div className=" flex-col justify-center flex items-center gap-12 px-6 maxwidth:px-0">
      {/* Buttons */}
      <div className="inline-flex rounded-lg border border-container bg-background/50 p-1">
        <PricingBtnOption
          isSelected={billingPeriod === "monthly"}
          handleClick={() => setBillingPeriod("monthly")}
        >
          Monthly
        </PricingBtnOption>
        <PricingBtnOption
          isSelected={billingPeriod === "annual"}
          handleClick={() => setBillingPeriod("annual")}
        >
          Annual
          <span
            className={`ml-2 text-xs ${
              billingPeriod === "annual" ? "text-foreground/80" : "text-primary"
            }`}
          >
            Save ~8%
          </span>
        </PricingBtnOption>
      </div>

      {/* Pricing Options */}
      <div className="grid grid-cols-1 gap-8 laptop:grid-cols-3">
        {plans.map((plan) => (
          <PricingOpt key={plan.name} billingPeriod={billingPeriod} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
