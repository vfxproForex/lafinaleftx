import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IToken {
  token?: string | null;
}

const initialState: IToken = {
  token: null,
};

const tokenSlice = createSlice({
  name: "token slice",
  initialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<IToken>) => {
        state.token = payload.token;
      },
      prepare: (token) => ({
        payload: token,
      }),
    },
  },
});

export const { create: addTokenAction } = tokenSlice.actions;
export default tokenSlice;
