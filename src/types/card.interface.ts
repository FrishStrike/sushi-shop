export interface ICardItem {
  id: number;
  quantity: number;
  title: string;
  price: string;
  img: string;
  bought: boolean;
}

export interface ICardList {
  cards: ICardItem[];
}
