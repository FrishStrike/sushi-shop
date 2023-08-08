"use client";
import { ICardItem } from "@/types/card.interface";
import CartButton from "./CartButton";

interface props extends ICardItem {
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
  modal: boolean;
  setSuccessWindowWithOutModal: (param: boolean) => void;
}

const CardItem: React.FC<props> = ({
  title,
  img,
  price,
  _id,
  setModalContent,
  modal,
  setSuccessWindowWithOutModal,
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
          modal={modal}
          setSuccessWindowWithOutModal={setSuccessWindowWithOutModal}
        />
      </div>
    </div>
  );
};

export default CardItem;
