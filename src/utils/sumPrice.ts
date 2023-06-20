import { useAppSelector } from "@/store/hook";

export const sumPrice = () => {
  const cards = useAppSelector((state) => state.cards.cards);
  let result = 0;
  cards.forEach((card) => {
    if (card.bought) {
      result += Number(card.price.substring(1)) * card.quantity;
    }
  });

  return result;
};
