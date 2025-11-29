import type { FC } from "react";
import type { PricingPlan } from "../types/types";
import { Check } from "lucide-react";
import OrangeButton from "@/components/OrangeButton";

interface Props {
  plan: PricingPlan;
  billingPeriod: "monthly" | "annual";
}

const PricingOpt: FC<Props> = ({ plan, billingPeriod }) => {
  const isEnterprise = plan.price[billingPeriod] === null;
  return (
    <div
      className={`group relative rounded-2xl border bg-background/40 p-6 tablet:p-8 backdrop-blur-sm transition-all
        flex flex-col gap-6 items-start ${
          plan.highlighted
            ? "border-primary shadow-[0_0_40px_rgba(249,115,22,0.2)] hover:shadow-[0_0_60px_rgba(249,115,22,0.35)]"
            : "border-container hover:border-primary hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]"
        }`}
    >
      <div className="flex flex-col gap-2">
        {/* Title */}
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
          {billingPeriod === "annual" && plan.showAnnualBadge && (
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-foreground">
              1 month free
            </span>
          )}
        </div>
        <p className="text-sm text-subtitle">{plan.description}</p>
      </div>

      {/* Price */}
      {!isEnterprise ? (
        <div>
          <div className="flex items-baseline">
            <span className="text-5xl font-bold text-foreground">
              ${plan.price[billingPeriod]}
            </span>
            <span className="ml-2 text-subtitle">
              /{billingPeriod === "monthly" ? "month" : "year"}
            </span>
          </div>

          {/* Fee to pay monthly */}
          {billingPeriod === "annual" &&
          plan.price.annual &&
          plan.price.annual > 0 ? (
            <p className="mt-1 text-sm text-subtitle">
              ${Math.round(plan.price.annual / 12)}/month billed annually
            </p>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="text-3xl font-bold text-foreground">Custom</div>
      )}

      {plan.highlighted ? (
        <a
          href={plan.route}
          className="w-full relative overflow-hidden rounded-md transition-all duration-200"
        >
          <button
            className=" bg-primary text-foreground hover:bg-primary-hover transition-all duration-200 w-full py-1
         rounded-md cursor-pointer font-bold"
          >
            {plan.cta}
          </button>
        </a>
      ) : (
        <a
          href={plan.route}
          className="w-full relative overflow-hidden rounded-md hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]
            transition-all duration-200"
        >
          <button
            className=" bg-transparent text-foreground hover:border-primary transition-all duration-200 w-full py-1
         rounded-md cursor-pointer font-bold border-border border hover:text-primary"
          >
            {plan.cta}
          </button>
        </a>
      )}

      {/* Caracterisitcas */}
      <ul className="space-y-3">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm text-subtitle">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingOpt;
