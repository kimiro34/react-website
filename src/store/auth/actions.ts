import { createAsyncThunk } from "@reduxjs/toolkit";

export const setlogin = createAsyncThunk("auth/login", async (data: any) => {
  const payload = {
    loginStatus: "true",
    loginData: data,
  };
  return payload;
});

export const setlogout = createAsyncThunk("auth/logout", async () => {
  const payload = {
    loginStatus: "false",
    loginData: {},
  };
  return payload;
});
