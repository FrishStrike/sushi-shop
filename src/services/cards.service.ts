import { ICardItem } from "@/types/card.interface";
import { makeBaseUrl } from "@/utils/makeBaseUrl";
import axios from "axios";

const BASE_URL = `${makeBaseUrl("/api/cards")}`;

export const getAllCards = async () => {
  const data = await axios.get<ICardItem[]>(BASE_URL);
  return data;
};

export const getCardsPaginationLeft = async (start: number, end: number) => {
  const data = await axios.get<ICardItem[]>(
    `${BASE_URL}/?_start=${start}&_end=${end}`
  );
  return data;
};

export const getCardsPagination = async (start: number, end: number) => {
  const currentData = await axios.get<ICardItem[]>(
    `${BASE_URL}/?_start=${start}&_end=${end}`
  );
  const nextData = await axios.get<ICardItem[]>(
    `${BASE_URL}/?_start=${start + 8}&_end=${end + 8}`
  );

  return [currentData, nextData];
};
