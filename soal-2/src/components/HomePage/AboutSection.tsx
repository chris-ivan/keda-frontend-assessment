import { FC } from 'react';
import styles from './AboutSection.module.scss';
import SvgContainer from '../general/SvgContainer';

import Illustration1 from '../../assets/images/illustration/illustration-designed-with-entrepreneurs.svg';
import Illustration2 from '../../assets/images/illustration/illustration-overcome-your-challenge.svg';
import Illustration3 from '../../assets/images/illustration/illustration-about-us.svg';

import Decoration1 from '../../assets/images/decoration/decoration-designed-with-entrepreneurs.svg';
import Decoration2 from '../../assets/images/decoration/decoration-about-us.svg';

const AboutSection: FC = () => {
  return (
    <section className={styles['about-section']}>
      <SvgContainer src={Decoration1} className={styles['about-decoration1']} />
      <SvgContainer src={Decoration2} className={styles['about-decoration2']} />
      <div className="page-container">
        <h2>ABOUT</h2>
        <div className={styles['about-content']}>
          <SvgContainer
            src={Illustration1}
            className={styles['about-illustration-1']}
          />
          <div>
            <h3>ERP IS DESIGNED WITH ENTREPRENEURS IN MIND</h3>
            <p>
              We offer a range of features and tools designed to streamline your
              business operations and help you focus on what matters most –
              growing your business.
            </p>
          </div>
        </div>
        <div className={styles['about-content']}>
          <div>
            <h3>OVERCOME YOUR BUSINESS CHALLENGES</h3>
            <p>
              With our website, you can easily track your inventory, manage your
              orders, process payments, and much more. We are constantly adding
              new features and improving our platform based on feedback from our
              users.
            </p>
          </div>
          <SvgContainer
            src={Illustration2}
            className={styles['about-illustration-2']}
          />
        </div>
        <div className={styles['about-content']}>
          <SvgContainer
            src={Illustration3}
            className={styles['about-illustration-3']}
          />
          <div>
            <p>
              Our company is dedicated to helping entrepreneurs streamline their
              business operations and achieve their goals. Our team of
              entrepreneurs has developed a range of features and tools that are
              tailored to the needs of small businesses. We believe that by
              empowering entrepreneurs with the right tools, we can help drive
              economic growth and success. Our company is committed to
              constantly improving our ERP platform and adding new features
              based on the feedback of our users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
