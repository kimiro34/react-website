import { createSlice } from "@reduxjs/toolkit";
import { setNames } from "./actions";
import { namesType } from "./types";

const PREFIX = "name";
const initialState: namesType = {
  names: [],
};

const setSpaces = (state: namesType, data: any) => {
  state.names = data.data;
};

export const namesReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setNames.fulfilled.type,
      (state: namesType, action: any) => {
        setSpaces(state, action.payload);
      }
    );
  },
});

export { setNames };
export default namesReducer.reducer;
