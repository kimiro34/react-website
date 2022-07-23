import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNamesAPI } from "../api/names";

export const setNames = createAsyncThunk("name/getNames", async () => {
  try {
    const res = await getNamesAPI();
    return res;
  } catch (err: any) {}
});
