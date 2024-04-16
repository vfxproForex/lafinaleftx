import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IWithdraw {
  _id: string;
  userId: string;
  withdrawDate: Date;
  reference: string;
  withdrawalAmount: number;
}

const initialState: IWithdraw[] = [];

const withdrawSlice = createSlice({
  name: "deposit slice",
  initialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<IWithdraw>) => {
        state.push(payload);
      },
      prepare: (item) => ({
        payload: item,
      }),
    },
  },
});

export const { create: createWithDrawAction } = withdrawSlice.actions;

export default withdrawSlice;
