import { IUserState } from '../interfaces/userState';
import axios from 'axios';

interface ILoginParams {
  username: string;
  password: string;
}

export const login = async (loginData: ILoginParams): Promise<IUserState> => {
  const { username, password } = loginData;

  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/v1/dummy-login`,
    {
      username,
      password,
    }
  );
  return response.data;
};
