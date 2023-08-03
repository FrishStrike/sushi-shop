"use client";
import { ICardItem } from "@/types/card.interface";
import CartButton from "./CartButton";

interface props extends ICardItem {
  setSuccessWindow: (param: boolean[]) => void;
  onClick?: () => void;
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
  successWindow: boolean[];
}

const CardItem: React.FC<props> = ({
  title,
  img,
  price,
  _id,
  setModalContent,
  setSuccessWindow,
  successWindow,
}) => {
  return (
    <div
      className="card"
      onClick={() =>
        setModalContent({ img: img, title: title, price: price, _id: _id })
      }
    >
      <img src={img} alt="" />
      <div className="card-info">
        <h3>{title}</h3>
        <span className="price">{price}</span>
        <CartButton
          _id={_id}
          setSuccessWindow={setSuccessWindow}
          successWindow={successWindow}
        />
      </div>
    </div>
  );
};

export default CardItem;
