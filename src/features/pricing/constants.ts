import type { PricingPlan } from "./types";

export const plans: PricingPlan[] = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for getting started",
    features: [
      "Up to 5 plan reviews per month",
      "One member in your organization",
      "Basic compliance checking",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
    showAnnualBadge: false,
    route: `${import.meta.env.PRIVATE_SITE_URL}/login`,
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    description: "For large organizations",
    features: [
      "Everything in Free",
      "Unlimited plan reviews",
      "Unlimited members in your organization",
      "Custom AI models",
      "Dedicated account manager",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    highlighted: true,
    showAnnualBadge: true,
    route: "contact",
  },
];
