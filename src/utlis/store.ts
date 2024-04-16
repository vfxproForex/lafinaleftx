import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import accountDetailsSlice from "./accountDetails";
import withdrawSlice from "./withdraws";
import depositSlice from "./deposits";
import tokenSlice from "./token";

export const makeStore = () => {
  return configureStore({
    reducer: {
      accountDetails: accountDetailsSlice.reducer,
      withdraws: withdrawSlice.reducer,
      deposits: depositSlice.reducer,
    },
  });
};

//infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

//infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispathc = AppStore["dispatch"];

const reducer = combineReducers({
  token: tokenSlice.reducer,
  accountDetails: accountDetailsSlice.reducer,
  withdrawal: withdrawSlice.reducer,
  deposits: depositSlice.reducer,
});

const store = configureStore({
  reducer,
});

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

export default store;
