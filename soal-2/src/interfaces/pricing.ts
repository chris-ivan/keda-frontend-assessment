export type PricingType = 'regular' | 'best-seller';

export interface IPricingContent {
  title: string;
  price: number;
  type: PricingType;
  normalBenefits?: string[];
  exclusiveBenefits?: string[];
}
