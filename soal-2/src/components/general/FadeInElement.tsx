import { FC, useState, useEffect, useRef } from 'react';

interface IFadeInElement {
  children: any;
}

const THRESHOLD = 0.1;

const FadeInElement: FC<IFadeInElement> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (!isVisible && entry.intersectionRatio > THRESHOLD) {
          setIsVisible(true);
        }
      },
      {
        threshold: THRESHOLD,
      }
    )
  );
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      observer.current.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.current.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 1s, opacity 1s',
        position: 'relative',
      }}
      onTransitionEnd={() =>
        ref.current && observer.current.unobserve(ref.current)
      }
    >
      {children}
    </div>
  );
};

export default FadeInElement;
