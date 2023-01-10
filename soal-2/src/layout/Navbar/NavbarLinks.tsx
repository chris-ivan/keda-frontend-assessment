import { FC, useState, useEffect, useCallback } from 'react';
import { PATH, HOMEPAGE_SECTION_ID } from '../../utils/constant';

import styles from './Navbar.module.scss';
import Button from '../../components/general/Button';

import { useSelector } from 'react-redux';
import { IUserState } from '../../interfaces/userState';
import { userSelector } from '../../features/user/userSlice';
import NavbarLink from './NavbarLink';

const NAVBAR_LINKS = [
  {
    label: 'ABOUT',
    id: HOMEPAGE_SECTION_ID.ABOUT,
  },
  {
    label: 'PRICING',
    id: HOMEPAGE_SECTION_ID.PRICING,
  },
  {
    label: 'CONTACT',
    id: HOMEPAGE_SECTION_ID.CONTACT,
  },
];

interface INavbarLinks {
  onClickLink?: () => void;
}

const DesktopNavLink: FC<INavbarLinks> = ({ onClickLink }) => {
  const { username } = useSelector(userSelector) as IUserState;
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  const intersect = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (entries: IntersectionObserverEntry[], _observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSectionId(id);
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(intersect, { threshold: 0.25 });

    NAVBAR_LINKS.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles['nav-links']}>
      {NAVBAR_LINKS.map(({ label, id }) => (
        <NavbarLink
          key={id}
          to={id}
          isActive={id == activeSectionId}
          onClick={onClickLink}
        >
          {label}
        </NavbarLink>
      ))}
      <div className={styles['nav-link-button']}>
        {username ? (
          <Button to={PATH.PROFILE} onClick={onClickLink} type="secondary">
            PROFILE
          </Button>
        ) : (
          <Button to={PATH.LOGIN} onClick={onClickLink} type="secondary">
            LOGIN
          </Button>
        )}
      </div>
    </div>
  );
};

export default DesktopNavLink;
