"use client";

import { useAppDispatch, useAppSelector } from "@/store/hook";
import CartButton from "./CartButton";

interface props {
  active: boolean;
  setActive: () => void;
  img: string;
  title: string;
  price: string;
  id: string;
}

const Modal: React.FC<props> = ({
  active,
  setActive,
  img,
  title,
  price,
  id,
}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={setActive}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={img} alt="" />
        <div className="modal-info">
          <div className="title">
            <h1>{title}</h1>
            <CartButton className="cart" _id={id} />
          </div>
          <p>{price}</p>
          <img src="/pineapple.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
