import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { COLOR, PATH } from '../utils/constant';

import styles from './Navbar.module.scss';
import Logo from '../assets/images/icon/logo.svg';
import BackgroundBlob from '../assets/images/decoration/decoration-logo.svg';
import SvgContainer from '../components/general/SvgContainer';
import Button from '../components/general/Button';

interface INavbarLink {
  to: string;
  children: string;
}

const getNavbarLinkStyle = ({ isActive }: any) => {
  return {
    color: COLOR.BLACK,
    textUnderlineOffset: isActive ? '8px' : '0',
    textDecoration: isActive ? `underline ${COLOR.BLUE}` : 'none',
  };
};

const NavbarLink: FC<INavbarLink> = ({ to, children }) => {
  return (
    <NavLink style={getNavbarLinkStyle} to={to}>
      <span className={styles['nav-link']}>{children}</span>
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <nav>
      <SvgContainer className={styles['img-container']} src={BackgroundBlob} />
      <div className={`page-container ${styles.nav}`}>
        <NavLink className={styles['nav-logo']} to={PATH.HOME}>
          <img src={Logo} alt="web-erp logo" />
          <h4>HOME</h4>
        </NavLink>
        <div className={styles['nav-links']}>
          <NavbarLink to={PATH.HOME}>ABOUT</NavbarLink>
          <NavbarLink to={PATH.LOGIN}>PRICING</NavbarLink>
          <NavbarLink to={PATH.PROFILE}>CONTACT</NavbarLink>
          <NavLink to={PATH.LOGIN} className={styles['nav-link-button']}>
            <Button type="secondary">LOGIN</Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
