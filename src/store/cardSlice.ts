import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CardItem = {
  id: number;
  title: string;
  price: string;
  img: string;
  bought: boolean;
};

export type CardList = {
  cards: CardItem[];
};

const initialState: CardList = { cards: [] };

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<CardItem>) {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
