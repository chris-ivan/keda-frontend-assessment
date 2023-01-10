import { IPricingContent } from '../interfaces/pricing';

export const PATH = {
  HOME: '/',
  LOGIN: '/login',
  PROFILE: '/profile',
};

export const HOMEPAGE_SECTION_ID = {
  HERO: 'hero_section',
  ABOUT: 'about_section',
  PRICING: 'pricing_section',
  CONTACT: 'contact_section',
};

export const COLOR = {
  BLACK: '#231d1b',
  BLUE: '#0667fd',
  LIGHT_BLUE: '#27c2f6',
  GRAY: '#cccccc',
  WHITE: '#ffffff',
};

export const PRICING_CONTENT: IPricingContent[] = [
  {
    title: 'BASIC',
    price: 100_000,
    type: 'regular',
    exclusiveBenefits: [
      'Mencatat barang masuk',
      'Mencatat barang keluar',
      'Mencatat hasil keuntungan',
    ],
  },
  {
    title: 'BUSINESS',
    price: 150_000,
    type: 'best-seller',
    normalBenefits: [
      'Mencatat barang masuk',
      'Mencatat barang keluar',
      'Mencatat hasil keuntungan',
    ],
    exclusiveBenefits: [
      'Dapat menganalisis hasil penjualan dengan CHART',
      'Support 24/7',
    ],
  },
  {
    title: 'ENTREPRENEUR',
    price: 250_000,
    type: 'regular',
    normalBenefits: [
      'Mencatat barang masuk',
      'Mencatat barang keluar',
      'Mencatat hasil keuntungan',
      'Dapat menganalisis hasil penjualan dengan CHART',
      'Support 24/7',
    ],
    exclusiveBenefits: ['Export data ke Excel', 'AI prediksi penghasilan'],
  },
];
