import store from '../redux/store';
import { redirect } from 'react-router-dom';
import { IUserState } from '../interfaces/userState';
import { PATH } from './constant';

export const redirectIfNotLoggedIn = () => {
  const { user_id } = store.getState().user as IUserState;

  if (!user_id) {
    return redirect(PATH.LOGIN);
  }

  return null;
};

export const redirectIfLoggedIn = () => {
  const { username } = store.getState().user as IUserState;

  if (username) {
    return redirect(PATH.PROFILE);
  }

  return null;
};
