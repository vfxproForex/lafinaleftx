import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUser {
  balance: number;
}

const initialState: IUser = {
  balance: 0.0,
};

const userSlice = createSlice({
  name: "user slice",
  initialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<IUser>) => {
        state.balance = payload.balance;
      },
      prepare: (item: IUser) => ({
        payload: item,
      }),
    },
  },
});

export const { create: getUserBalanceAction } = userSlice.actions;
export default userSlice;
