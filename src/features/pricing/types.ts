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
