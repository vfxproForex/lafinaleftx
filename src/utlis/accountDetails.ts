import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAccountDetails {
  userId?: string;
  firstname?: string;
  middleName?: string;
  lastname?: string;
  bankName?: string;
  contactNumber?: string;
  accountName?: string;
  accountNumber?: string;
  accountType?: string;
  abaNumber?: string;
  nameOnCard?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  currentBalance?: number;
}

const initialState: IAccountDetails = {};

const accountDetailsSlice = createSlice({
  name: "account details slice",
  initialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<IAccountDetails>) => {
        return {
          ...state,
          ...payload,
        };
      },
      prepare: (item: IAccountDetails) => ({
        payload: item,
      }),
    },
  },
});

export const { create: createAccountDetailsAction } =
  accountDetailsSlice.actions;
export default accountDetailsSlice;
