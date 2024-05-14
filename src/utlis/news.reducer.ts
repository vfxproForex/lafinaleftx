import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProps {
  source: {
    id: any;
    name: any;
  };
  author: any;
  title: any;
  description: any;
  url: any;
  urlToImage: any;
  publishedAt: any;
  content: any;
}
const initialState: IProps[] = [];

const newsSlice = createSlice({
  name: "news slice",
  initialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<IProps>) => {
        console.log("news state:");
        console.log(payload);
        state.push(payload);
      },
      prepare: (item) => ({
        payload: item,
      }),
    },
  },
});

export const { create: addNewsAction } = newsSlice.actions;
export default newsSlice;
