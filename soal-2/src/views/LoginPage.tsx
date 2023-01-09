import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../API/login';
import { IUserState } from '../interfaces/userState';
import { setUser } from '../features/user/userSlice';
import { PATH } from '../utils/constant';

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
    <div>
      <input
        type="text"
        onChange={handleChangeUsername}
        placeholder="Username"
      />
      <input
        type="password"
        onChange={handleChangePassword}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
