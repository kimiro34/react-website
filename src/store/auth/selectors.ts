import type { RootState } from "../store";

export const selectLoginStatus = (state: RootState) => state.auth.loginStatus;
export const selectLoginEmail = (state: RootState) => state.auth.loginEmail;
export const selectLoginPicture = (state: RootState) => state.auth.loginPicture;
export const selectLoginData = (state: RootState) => state.auth.loginData;
