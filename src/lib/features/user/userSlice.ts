import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  userName: string;
  email: string;
  isLoggedIn: boolean;
  token: string;
}

const initialState: UserState = {
  userName: '',
  email: '',
  isLoggedIn: false,
  token: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: state => {
      state = {
        ...state,
        isLoggedIn: true
      };
    },
    logout: state => {
      state = {
        ...state,
        isLoggedIn: false
      };
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
