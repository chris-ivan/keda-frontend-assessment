import { FC, useState } from 'react';
import styles from './Input.module.scss';

import EyeButtonHide from '../../assets/images/icon/icon-eye-hide.svg';
import EyeButtonOpen from '../../assets/images/icon/icon-eye-open.svg';
import SvgContainer from './SvgContainer';

interface IInput extends React.HTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IEyeButton extends React.HTMLAttributes<HTMLButtonElement> {
  isVisible: boolean;
}

const EyeButton: FC<IEyeButton> = ({ isVisible, ...rest }) => {
  return (
    <button {...rest} className={styles['eye-button']}>
      <SvgContainer
        src={isVisible ? EyeButtonHide : EyeButtonOpen}
        alt="toggle show password"
      />
    </button>
  );
};

const Input: FC<IInput> = ({
  name,
  type,
  value,
  label,
  placeholder,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    if (type !== 'password') {
      return;
    }

    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? 'text' : type;

  return (
    <div className={styles['input-component-container']}>
      {label && <label>{label}</label>}
      <div className={styles['input-container']}>
        <input
          className={styles['input']}
          name={name}
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {type === 'password' && (
          <EyeButton isVisible={showPassword} onClick={toggleShowPassword} />
        )}
      </div>
    </div>
  );
};

export default Input;
