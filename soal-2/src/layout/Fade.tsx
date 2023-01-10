import { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

interface IFade {
  children: any;
  location: Location;
}

const Fade: FC<IFade> = ({ children, location }) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={true}
      appear={true}
      nodeRef={nodeRef}
      timeout={1000}
      classNames="fade"
      key={location.pathname}
    >
      {children}
    </CSSTransition>
  );
};

export default Fade;
