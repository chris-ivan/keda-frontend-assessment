import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { PATH, HOMEPAGE_SECTION_ID } from '../utils/constant';

import styles from './Navbar.module.scss';
import Logo from '../assets/images/icon/logo.svg';
import BackgroundBlob from '../assets/images/decoration/decoration-logo.svg';
import SvgContainer from '../components/general/SvgContainer';
import Button from '../components/general/Button';

import { useSelector } from 'react-redux';
import { IUserState } from '../interfaces/userState';
import { userSelector } from '../features/user/userSlice';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  const { username } = useSelector(userSelector) as IUserState;
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav || window.innerWidth <= 768) {
      return;
    }

    window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset;
      const newClass = styles['nav-container-scrolled'];

      if (currentScroll) {
        if (currentScroll) {
          nav.classList.add(newClass);
          nav.style.height = '76px';
        }
      } else {
        nav.classList.remove(newClass);
        nav.style.height = '100px';
      }
    });

    // eslint-disable-next-line
    return () => window.removeEventListener('scroll', () => {});
  }, [window.innerWidth]);

  return (
    <nav>
      <SvgContainer className={styles['img-container']} src={BackgroundBlob} />
      <div ref={navRef} className={styles['nav-container']}>
        <div className={`page-container ${styles.nav}`}>
          <NavLink className={styles['nav-logo']} to={PATH.HOME}>
            <img src={Logo} alt="web-erp logo" />
            <h4>HOME</h4>
          </NavLink>
          <div className={styles['nav-links']}>
            <NavbarLink to={HOMEPAGE_SECTION_ID.ABOUT}>ABOUT</NavbarLink>
            <NavbarLink to={HOMEPAGE_SECTION_ID.PRICING}>PRICING</NavbarLink>
            <NavbarLink to={HOMEPAGE_SECTION_ID.CONTACT}>CONTACT</NavbarLink>
            <div className={styles['nav-link-button']}>
              {username ? (
                <Button to={PATH.PROFILE} type="secondary">
                  PROFILE
                </Button>
              ) : (
                <Button to={PATH.LOGIN} type="secondary">
                  LOGIN
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
