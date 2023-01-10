import { FC } from 'react';
import styles from './Button.module.scss';
import Ripples from 'react-ripples';
import { Link } from 'react-router-dom';

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'small';
  type?: 'primary' | 'secondary';
  fullWidth?: boolean;
  to?: string;
}

const getButtonClassName = (button: IButton): string => {
  const { size, type } = button;

  const sizeClass = styles[`button-${size || 'large'}`];
  const typeClass = styles[`button-${type || 'primary'}`];

  return `${styles['button']} ${sizeClass} ${typeClass}`;
};

const Button: FC<IButton> = (buttonProps) => {
  const { size, type, to, fullWidth, ...rest } = buttonProps;
  const buttonClassProps = { type, size };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    rest.onClick && rest.onClick(e);
  };

  let buttonContainerClass = styles['button-container'];
  if (fullWidth) {
    buttonContainerClass += ` ${styles['button-container-full-width']}`;
  }

  if (to) {
    return (
      <Ripples className={buttonContainerClass}>
        <Link to={to} className={getButtonClassName(buttonClassProps)}>
          {buttonProps.children}
        </Link>
      </Ripples>
    );
  }

  return (
    <Ripples className={buttonContainerClass}>
      <button
        {...rest}
        onClick={handleClick}
        className={getButtonClassName(buttonClassProps)}
      >
        {buttonProps.children}
      </button>
    </Ripples>
  );
};

export default Button;
