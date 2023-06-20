export interface CardItem {
  id: number;
  quantity: number;
  title: string;
  price: string;
  img: string;
  bought: boolean;
}

export interface CardList {
  cards: CardItem[];
}
