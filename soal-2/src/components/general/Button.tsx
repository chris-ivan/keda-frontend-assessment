import { FC } from 'react';
import styles from './Button.module.scss';

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'small';
  type?: 'primary' | 'secondary';
}

const getButtonClassName = (button: IButton): string => {
  const { size, type } = button;

  const sizeClass = styles[`button-${size || 'large'}`];
  const typeClass = styles[`button-${type || 'primary'}`];

  return `${styles['button']} ${sizeClass} ${typeClass}`;
};

const Button: FC<IButton> = (buttonProps) => {
  return (
    <button className={getButtonClassName(buttonProps)}>
      {buttonProps.children}
    </button>
  );
};

export default Button;
