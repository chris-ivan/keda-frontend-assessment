import { FC } from 'react';
import styles from './PricingSection.module.scss';

import { PRICING_CONTENT, HOMEPAGE_SECTION_ID } from '../../utils/constant';
import PricingCard from './PricingCard';
import FadeInElement from '../general/FadeInElement';

const PricingSection: FC = () => {
  return (
    <FadeInElement>
      <section
        className={styles['pricing-section']}
        id={HOMEPAGE_SECTION_ID.PRICING}
      >
        <div className="page-container">
          <h2 className={styles['pricing-title']}>PRICING PLANS</h2>
          <div className={styles['pricing-content']}>
            {PRICING_CONTENT.map((content, index) => (
              <PricingCard {...content} key={index} />
            ))}
          </div>
        </div>
      </section>
    </FadeInElement>
  );
};

export default PricingSection;
