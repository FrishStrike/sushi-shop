export interface ICardItem {
  _id: string;
  quantity: number;
  title: string;
  price: string;
  img: string;
  bought: boolean;
}

export interface ICardList {
  cards: ICardItem[];
}
