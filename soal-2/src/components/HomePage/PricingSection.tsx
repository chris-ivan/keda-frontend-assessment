import { FC } from 'react';
import styles from './PricingSection.module.scss';

import { PRICING_CONTENT } from '../../utils/constant';
import PricingCard from './PricingCard';

const PricingSection: FC = () => {
  return (
    <section className={styles['pricing-section']}>
      <div className="page-container">
        <h2 className={styles['pricing-title']}>PRICING PLANS</h2>
        <div className={styles['pricing-content']}>
          {PRICING_CONTENT.map((content, index) => (
            <PricingCard {...content} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
