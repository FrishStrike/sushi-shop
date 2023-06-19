import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";

const store = configureStore({
  reducer: {
    cards: cardSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
