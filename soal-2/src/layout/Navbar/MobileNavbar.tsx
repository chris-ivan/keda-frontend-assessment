import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../utils/constant';

import styles from './Navbar.module.scss';
import Logo from '../../assets/images/icon/logo.svg';
import BackgroundBlob from '../../assets/images/decoration/decoration-logo.svg';
import SvgContainer from '../../components/general/SvgContainer';

import NavLinks from './NavbarLinks';

const MobileNavbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const openClass = isOpen && styles['nav-container-mobile-open'];
  const containerClassName = `${openClass} ${styles['nav-container']}`;

  const buttonClass = isOpen && styles['nav-mobile-button-line-active'];
  const buttonLineClass = `${buttonClass} ${styles['nav-mobile-button-line']}`;

  return (
    <nav>
      <SvgContainer className={styles['img-container']} src={BackgroundBlob} />
      <div ref={navRef} className={containerClassName}>
        <div className={`page-container ${styles['nav']}`}>
          <NavLink className={styles['nav-logo']} to={PATH.HOME}>
            <img src={Logo} alt="web-erp logo" />
            <h4>HOME</h4>
          </NavLink>
          <div className={styles['nav-mobile-button']} onClick={toggleOpen}>
            <div className={buttonLineClass} />
          </div>
        </div>
        <div className={'page-container'}>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
