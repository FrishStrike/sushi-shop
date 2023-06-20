import { CardItem, CardList } from "@/types/card.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CardList = { cards: [] };

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<CardItem>) {
      state.cards.push(action.payload);
    },
    handleCard(state, action: PayloadAction<number>) {
      const card = state.cards.find((card) => card.id === action.payload);
      if (card) {
        card.bought = !card.bought;
      }
    },
    handleQuantity(state, action: PayloadAction<{ id: number; act: boolean }>) {
      const card = state.cards.find((card) => card.id === action.payload.id);
      if (action.payload.act && card) {
        card.quantity += 1;
      } else if (card && card.quantity !== 1) {
        card.quantity -= 1;
      } else if (card) {
        card.bought = !card.bought;
      }
    },
  },
});

export const { addCard, handleCard, handleQuantity } = cardSlice.actions;
export default cardSlice.reducer;
