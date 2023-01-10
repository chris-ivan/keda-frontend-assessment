import { FC } from 'react';
import styles from './PricingCard.module.scss';
import { ReactComponent as CheckIcon } from '../../assets/images/icon/icon-check.svg';
import { IPricingContent, PricingType } from '../../interfaces/pricing';
import { parseNumber } from '../../utils';
import Button from '../general/Button';

interface IBenefit {
  text: string;
  type: PricingType;
  isExclusive?: boolean;
}

const Benefit: FC<IBenefit> = (benefit) => {
  const { text, type, isExclusive } = benefit;

  let className = styles['benefit'];

  if (type == 'best-seller') {
    className += ` ${styles['benefit-best-seller']}`;
  }

  if (isExclusive) {
    className += ` ${styles['benefit-exclusive']}`;
  }

  return (
    <div className={className}>
      <CheckIcon className={styles['check-icon']} />
      <small>{text}</small>
    </div>
  );
};

const PricingCard: FC<IPricingContent> = (pricingContent) => {
  const { title, price, type, normalBenefits, exclusiveBenefits } =
    pricingContent;

  let className = styles['pricing-card'];

  if (type == 'best-seller') {
    className += ` ${styles['pricing-card-best-seller']}`;
  }

  return (
    <div className={className}>
      <p className={styles['pricing-card-title']}>{title}</p>
      <span className={styles['pricing-card-price']}>
        <h3>Rp{parseNumber(price)}</h3>/bulan
      </span>
      <div className={styles['benefits']}>
        {normalBenefits?.map((benefit, index) => (
          <Benefit key={index} text={benefit} type={type} />
        ))}
        {exclusiveBenefits?.map((benefit, index) => (
          <Benefit key={index} text={benefit} type={type} isExclusive />
        ))}
      </div>
      <Button fullWidth type="secondary" size="small">
        DAFTAR
      </Button>
    </div>
  );
};

export default PricingCard;
