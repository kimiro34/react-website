import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setlogin, setlogout } from "./actions";

// const PREFIX = 'trade/orderHsitory'
const PREFIX = "auth";

let initLoginStatus;
let initLoginEmail;
let initLoginPicture;

if (localStorage.loginStatus && localStorage.loginStatus !== "undefined") {
  initLoginStatus = localStorage.loginStatus;
} else {
  initLoginStatus = "false";
}

if (localStorage.loginPicture && localStorage.loginPicture !== "undefined") {
  initLoginPicture = localStorage.loginPicture;
} else {
  initLoginPicture = "";
}

if (localStorage.loginEmail && localStorage.loginEmail !== "undefined") {
  initLoginEmail = localStorage.loginEmail;
} else {
  initLoginEmail = "";
}

const initialState: any = {
  loginStatus: initLoginStatus,
  loginEmail: initLoginEmail,
  loginPicture: initLoginPicture,
  loginData: {},
};

const setAuth = (state: any, payload: any) => {
  localStorage.setItem("loginStatus", payload.loginStatus);
  localStorage.setItem("loginEmail", payload.loginData.email);
  localStorage.setItem("loginPicture", payload.loginData.imageUrl);
  state.loginStatus = payload.loginStatus;
  state.loginEmail = payload.loginData.email;
  state.loginPicture = payload.loginData.imageUrl;
  state.loginData = payload.loginData;
};

export const authReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setlogin.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        setAuth(state, action.payload);
      }
    );
    builder.addCase(
      setlogout.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        setAuth(state, action.payload);
      }
    );
  },
});

export { setlogin, setlogout };
export default authReducer.reducer;
