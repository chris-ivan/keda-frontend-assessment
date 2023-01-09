import { FC } from 'react';

interface ISvgContainer {
  className?: string;
  alt?: string;
  src: string;
}

const SvgContainer: FC<ISvgContainer> = ({ className, src, alt }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt || ''} />
    </div>
  );
};

export default SvgContainer;
