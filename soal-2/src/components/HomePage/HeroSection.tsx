import { FC } from 'react';
import styles from './HeroSection.module.scss';
import Button from '../general/Button';
import SvgContainer from '../general/SvgContainer';

import Illustration from '../../assets/images/illustration/illustration-hero.svg';
import Decoration from '../../assets/images/decoration/decoration-hero.svg';

const HeroSection: FC = () => {
  return (
    <section className={styles['hero-section']}>
      <SvgContainer src={Decoration} className={styles['hero-decoration']} />
      <div className={`page-container ${styles['hero-content']}`}>
        <div>
          <h1>SIMPLIFY YOUR BUSINESS OPERATIONS</h1>
          <p>Our ERP website has everything you need</p>
          <Button>LEARN MORE</Button>
        </div>
        <SvgContainer
          src={Illustration}
          className={styles['hero-illustration']}
        />
      </div>
    </section>
  );
};

export default HeroSection;
