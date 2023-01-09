import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../../interfaces/userState';

const INITIAL_STATE: IUserState = {
  user_id: 0,
  username: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, { payload }: PayloadAction<IUserState>) => {
      state.token = payload.token;
      state.user_id = payload.user_id;
      state.username = payload.username;
    },
    removeUser: (state) => {
      state.token = INITIAL_STATE.token;
      state.user_id = INITIAL_STATE.user_id;
      state.username = INITIAL_STATE.username;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const userSelector = (state: any) => state.user;
export default userSlice.reducer;
