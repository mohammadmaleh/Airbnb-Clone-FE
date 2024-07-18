import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  phoneNumber: string;
  isLoggedIn: boolean;
  token: string;
}

const initialState: UserState = {
  phoneNumber: '',
  isLoggedIn: false,
  token: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (
      state: UserState,
      action: PayloadAction<Pick<UserState, 'token' | 'phoneNumber'>>
    ) =>
      (state = {
        phoneNumber: action.payload.phoneNumber,
        token: action.payload.token,
        isLoggedIn: true
      }),
    logout: () => initialState
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
