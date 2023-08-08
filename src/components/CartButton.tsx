"use client";

import { handleCard } from "@/store/cardSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { FC, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import SuccessWindow from "./success-window/SuccessWindow";

interface IProps {
  _id: string;
  className?: string;
  modal?: boolean;
  setSuccessWindowWithOutModal?: (param: boolean) => void;
}

const CartButton: FC<IProps> = ({
  _id,
  className,
  modal,
  setSuccessWindowWithOutModal,
}) => {
  const [successWindow, setSuccessWindow] = useState(false);
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards.cards);
  const toggle = cards.find((card) => card._id === _id);

  const addToBasket: React.MouseEventHandler<SVGElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(handleCard(_id));

    if (!modal && setSuccessWindowWithOutModal) {
      toggle?.bought
        ? setSuccessWindowWithOutModal(false)
        : setSuccessWindowWithOutModal(true);
      return;
    }

    toggle?.bought ? setSuccessWindow(false) : setSuccessWindow(true);
  };

  return (
    <>
      {toggle?.bought ? (
        <BsFillCheckCircleFill
          onClick={addToBasket}
          className={`cart ${className}`}
        />
      ) : (
        <AiOutlineShoppingCart
          onClick={addToBasket}
          className={`cart ${className}`}
        />
      )}
      <SuccessWindow active={successWindow} />
    </>
  );
};

export default CartButton;
