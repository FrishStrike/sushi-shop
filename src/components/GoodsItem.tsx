"use client";

import { ICardItem } from "@/types/card.interface";

interface props extends ICardItem {
  setModalContent: ({
    img,
    title,
    price,
    _id,
  }: {
    img: string;
    title: string;
    price: string;
    _id: string;
  }) => void;
}

const GoodsItem: React.FC<props> = ({
  img,
  price,
  title,
  _id,
  setModalContent,
}) => {
  return (
    <div
      className="goods-item"
      onClick={() =>
        setModalContent({ img: img, title: title, price: price, _id: _id })
      }
    >
      <img src={img} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default GoodsItem;
