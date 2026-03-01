export interface PricingPlan {
  name: string;
  price: { monthly: number | null; annual: number | null };
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  route: string;
  showAnnualBadge: boolean;
}

export interface ComparisonCategoryType {
  category: string;
  features: {
    name: string;
    free: string | boolean;
    pro: string | boolean;
    enterprise: string | boolean;
  }[];
}
