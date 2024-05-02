import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IDeposit {
  userId: string;
  depositDate: string;
  refernce: string;
  depositAmount: string;
  status: boolean;
  depositStatus?: "Pending" | "Failed" | "Confirmed";
}

const initialState: IDeposit[] = [
  {
    userId: "sdsf",
    depositDate: "12 January 2021",
    refernce: "sdfsdf-wewe-2323-mkss",
    depositAmount: "8 000.00",
    depositStatus: "Pending",
    status: false,
  },
  {
    userId: "john.doe@example.com",
    depositDate: "2024-04-15T08:30:00Z",
    refernce: "ABC123XYZ",
    depositAmount: "5000.00",
    depositStatus: "Confirmed",
    status: true,
  },
  {
    userId: "jane.smith@example.com",
    depositDate: "2024-04-14T10:45:00Z",
    refernce: "DEF456UVW",
    depositAmount: "3000.00",
    depositStatus: "Failed",
    status: false,
  },
  {
    userId: "mary.johnson@example.com",
    depositDate: "2024-04-13T11:15:00Z",
    refernce: "GHI789PQR",
    depositAmount: "7000.00",
    depositStatus: "Confirmed",
    status: true,
  },
  {
    userId: "william.brown@example.com",
    depositDate: "2024-04-12T09:20:00Z",
    refernce: "JKL012STU",
    depositAmount: "2500.00",
    depositStatus: "Pending",
    status: false,
  },
  {
    userId: "emma.jones@example.com",
    depositDate: "2024-04-11T14:00:00Z",
    refernce: "MNO345VWX",
    depositAmount: "4000.00",
    depositStatus: "Confirmed",
    status: true,
  },
  {
    userId: "michael.jackson@example.com",
    depositDate: "2024-04-10T16:45:00Z",
    refernce: "PQR678YZA",
    depositAmount: "6000.00",
    depositStatus: "Failed",
    status: false,
  },
  {
    userId: "olivia.white@example.com",
    depositDate: "2024-04-09T13:30:00Z",
    refernce: "STU901BCD",
    depositAmount: "3500.00",
    depositStatus: "Confirmed",
    status: true,
  },
  {
    userId: "ethan.thomas@example.com",
    depositDate: "2024-04-08T10:00:00Z",
    refernce: "EFG234HIJ",
    depositAmount: "4500.00",
    depositStatus: "Pending",
    status: false,
  },
  {
    userId: "ava.miller@example.com",
    depositDate: "2024-04-07T12:20:00Z",
    refernce: "KLM567NOP",
    depositAmount: "5500.00",
    depositStatus: "Confirmed",
    status: true,
  },
];

const depositSlice = createSlice({
  name: "deposit slice",
  initialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<IDeposit>) => {
        console.log(payload);
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
