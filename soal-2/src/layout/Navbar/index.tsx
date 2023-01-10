import { useEffect, useState } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  if (width <= 768) {
    return <MobileNavbar />;
  }

  return <DesktopNavbar />;
};

export default Navbar;
