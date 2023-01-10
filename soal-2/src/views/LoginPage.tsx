import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../API/login';
import { IUserState } from '../interfaces/userState';
import { setUser } from '../features/user/userSlice';
import { PATH } from '../utils/constant';
import styles from './LoginPage.module.scss';
import Button from '../components/general/Button';
import Input from '../components/general/Input';
import FadeInElement from '../components/general/FadeInElement';
import Fade from '../layout/Fade';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('Bambang');
  const [password, setPassword] = useState<string>('Wholesome');

  const handleLogin = () => {
    const loginData = {
      username,
      password,
    };

    login(loginData).then((res: IUserState) => {
      dispatch(setUser(res));
      navigate(PATH.PROFILE);
    });
  };

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Fade location={location}>
      <div className="page-container">
        <FadeInElement>
          <div className={styles['login-page']}>
            <h2>LOGIN</h2>
            <div className={styles['login-page-content']}>
              <Input
                label="Username"
                type="text"
                value={username}
                onChange={handleChangeUsername}
                placeholder="Username"
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={handleChangePassword}
                placeholder="Password"
              />
              <span className={styles['login-action-link']}>
                Forget password?
              </span>
              <Button fullWidth onClick={handleLogin}>
                Login
              </Button>
              <p>
                Haven&apos;t created an account yet?{' '}
                <span className={styles['login-action-link']}>
                  Create a new account
                </span>
              </p>
            </div>
          </div>
        </FadeInElement>
      </div>
    </Fade>
  );
};

export default LoginPage;
