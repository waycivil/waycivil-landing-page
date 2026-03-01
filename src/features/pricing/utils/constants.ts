import type { ComparisonCategoryType, PricingPlan } from "../types/types";

export const plans: PricingPlan[] = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for getting started",
    features: [
      "1 plan review per month",
      "1 project",
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
    name: "Pro",
    price: { monthly: 100, annual: 1100 },
    description: "For large organizations",
    features: [
      "Everything in Free",
      "Up to 6 plan reviews per month",
      "Up to 3 projects",
      "One member in your organization",
      "Standard compliance checking",
      "QC Platform",
      "Email support",
    ],
    cta: "Sign Up",
    highlighted: true,
    showAnnualBadge: true,
    route: `${import.meta.env.PRIVATE_SITE_URL}/login`,
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited plan reviews",
      "Unlimited projects",
      "Unlimited members in your organization",
      "Custom AI models",
      "Custom prompts",
      "Full QC Platform",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    highlighted: false,
    showAnnualBadge: true,
    route: "contact",
  },
];

export const comparisonFeatures: ComparisonCategoryType[] = [
  {
    category: "Plan Reviews & Projects",
    features: [
      {
        name: "Plan reviews per month",
        free: "1",
        pro: "6",
        enterprise: "Unlimited",
      },
      {
        name: "Projects",
        free: "1",
        pro: "3",
        enterprise: "Unlimited",
      },
      { name: "Review history", free: true, pro: true, enterprise: true },
      { name: "Custom propmts", free: false, pro: false, enterprise: true },
      { name: "Custom AI models", free: false, pro: false, enterprise: true },
      { name: "QC platform", free: false, pro: true, enterprise: true },
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
      { name: "Email support", free: true, pro: true, enterprise: true },
      { name: "Priority support", free: false, pro: true, enterprise: true },
      { name: "Phone support", free: false, pro: true, enterprise: true },
      {
        name: "Dedicated account manager",
        free: false,
        pro: false,
        enterprise: true,
      },
      { name: "Team collaboration", free: false, pro: false, enterprise: true },
    ],
  },
];
