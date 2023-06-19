import { CardItem } from "@/store/cardSlice";
import axios from "axios";

const BASE_URL = "http://localhost:3004/cards";

export const getCards = async () => {
  const data = await axios.get<CardItem[]>(BASE_URL);
  return data;
};
