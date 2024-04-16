import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IDeposit {
  userId: string;
  depositDate: string;
  refernce: string;
  depositAmount: string;
}

const initialState: IDeposit[] = [];

const depositSlice = createSlice({
  name: "deposit slice",
  initialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<IDeposit>) => {
        state.push(payload);
      },
      prepare: (item) => ({
        payload: item,
      }),
    },
  },
});

export const { create: createDepositsliceAction } = depositSlice.actions;

export default depositSlice;
