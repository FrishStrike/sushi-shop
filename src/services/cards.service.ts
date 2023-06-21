import { ICardItem } from "@/types/card.interface";
import axios from "axios";

const BASE_URL = "http://localhost:3004/cards";

export const getAllCards = async () => {
  const data = await axios.get<ICardItem[]>(BASE_URL);
  return data;
};

export const getCardsPagination = async (start: number, end: number) => {
  const data = await axios.get<ICardItem[]>(
    `${BASE_URL}?_start=${start}&_end=${end}`
  );
  return data;
};
