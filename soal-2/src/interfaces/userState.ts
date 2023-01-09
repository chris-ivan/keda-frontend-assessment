import { IUser } from '.';

export interface IUserState extends IUser {
  token: string;
}
