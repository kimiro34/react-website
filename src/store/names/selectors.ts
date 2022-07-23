import type { RootState } from "../store";

export const getNames = (state: RootState) => state.names.names;
