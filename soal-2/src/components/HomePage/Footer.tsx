import { FC } from 'react';
import SvgContainer from '../general/SvgContainer';
import styles from './Footer.module.scss';

import FooterBackground from '../../assets/images/decoration/decoration-footer.svg';
import InstagramLogo from '../../assets/images/icon/icon-instagram.svg';
import LinkedInLogo from '../../assets/images/icon/icon-linkedin.svg';
import WhatsAppLogo from '../../assets/images/icon/icon-whatsapp.svg';
import { HOMEPAGE_SECTION_ID } from '../../utils/constant';

const CONTACTS = [
  {
    logo: InstagramLogo,
    text: '@web-erp',
  },
  {
    logo: LinkedInLogo,
    text: 'Web ERP Indonesia',
  },
  {
    logo: WhatsAppLogo,
    text: '+62 111 1111 1111',
  },
];

const Footer: FC = () => {
  return (
    <footer className={styles['footer']} id={HOMEPAGE_SECTION_ID.CONTACT}>
      <SvgContainer src={FooterBackground} className={styles['footer-bg']} />
      <div className={`page-container ${styles['footer-content']}`}>
        <h2>CONTACT</h2>
        <p>
          We are always here to help! If you have any questions or need
          assistance with our website, please don&rsquo;t hesitate to reach out
          to us
        </p>
        <div className={styles['footer-contacts']}>
          {CONTACTS.map((contact, index) => (
            <div className={styles['footer-contact']} key={index}>
              <SvgContainer
                src={contact.logo}
                className={styles['footer-contact-logo']}
              />
              <p>{contact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
