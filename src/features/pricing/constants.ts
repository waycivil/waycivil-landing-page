import type { ComparisonCategoryType, PricingPlan } from "./types";

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
      "Custom prompts",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    highlighted: true,
    showAnnualBadge: true,
    route: "contact",
  },
];

export const comparisonFeatures: ComparisonCategoryType[] = [
  {
    category: "Plan Reviews",
    features: [
      {
        name: "Plan reviews per month",
        free: "5",
        enterprise: "Unlimited",
      },
      { name: "Review history", free: true, enterprise: true },
      { name: "Custom propmts", free: false, enterprise: true },
      { name: "Custom AI models", free: false, enterprise: true },
    ],
  },
  /* {
    category: "Compliance & Analysis",
    features: [
      {
        name: "Basic compliance checking",
        free: true,
        enterprise: true,
      },
      {
        name: "Advanced compliance checking",
        free: false,
        enterprise: true,
      },
      {
        name: "Custom compliance rules",
        free: false,
        enterprise: true,
      },
      {
        name: "Automated report generation",
        free: false,
        enterprise: true,
      },
    ],
  }, */
  {
    category: "Support & Services",
    features: [
      { name: "Email support", free: true, enterprise: true },
      { name: "Priority support", free: false, enterprise: true },
      { name: "Phone support", free: false, enterprise: true },
      {
        name: "Dedicated account manager",
        free: false,
        enterprise: true,
      },
      { name: "Team collaboration", free: false, enterprise: true },
    ],
  },
];
