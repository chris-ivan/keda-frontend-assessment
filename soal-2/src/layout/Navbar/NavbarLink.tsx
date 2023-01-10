import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATH } from '../../utils/constant';

import styles from './Navbar.module.scss';

interface INavbarLink {
  to: string;
  children: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavbarLink: FC<INavbarLink> = ({ to, children, isActive, onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    onClick && onClick();

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
    <div
      className={isActive ? styles['active-nav-link'] : undefined}
      onClick={() => scrollTo(to)}
    >
      <span className={styles['nav-link']}>{children}</span>
    </div>
  );
};

export default NavbarLink;
