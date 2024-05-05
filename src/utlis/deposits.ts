import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IDeposit {
  userId: string;
  depositDate: string;
  refernce: string;
  depositAmount: string;
  status: boolean;
  depositStatus: "Pending" | "Failed" | "Confirmed";
}

const initialState: IDeposit[] = [];

const depositSlice = createSlice({
  name: "deposit slice",
  initialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<IDeposit>) => {
        console.log(`State: ${payload}`);
        state.push(payload);
      },
      prepare: (item) => ({
        payload: item,
      }),
    },
  },
});

export const { create: createDepositAction } = depositSlice.actions;

export default depositSlice;
