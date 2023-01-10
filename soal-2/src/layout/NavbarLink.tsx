import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { COLOR, PATH } from '../utils/constant';

import styles from './Navbar.module.scss';

interface INavbarLink {
  to: string;
  children: string;
}

const getNavbarLinkStyle = () => {
  const isActive = false;

  return {
    color: COLOR.BLACK,
    textUnderlineOffset: isActive ? '8px' : '0',
    textDecoration: isActive ? `underline ${COLOR.BLUE}` : 'none',
  };
};

const NavbarLink: FC<INavbarLink> = ({ to, children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    if (location.pathname !== PATH.HOME) {
      window.location.assign(`/#${id}`);
    }

    const targetElement = document.querySelector(`#${id}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.pathname !== PATH.HOME) {
      return;
    }

    if (location.hash === `#${to}`) {
      const timeout = setTimeout(() => {
        scrollTo(to);
        navigate(PATH.HOME, { replace: true });
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);

  return (
    <div style={getNavbarLinkStyle()} onClick={() => scrollTo(to)}>
      <span className={styles['nav-link']}>{children}</span>
    </div>
  );
};

export default NavbarLink;
