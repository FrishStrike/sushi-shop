"use client";

import { handleCard } from "@/store/cardSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface IProps {
  _id: string;
  className?: string;
}

const CartButton: FC<IProps> = ({ _id, className }) => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards.cards);
  const toggle = cards.find((card) => card._id === _id);

  const addToBasket: React.MouseEventHandler<SVGElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(handleCard(_id));
  };

  return toggle?.bought ? (
    <BsFillCheckCircleFill
      onClick={addToBasket}
      className={`cart ${className}`}
    />
  ) : (
    <AiOutlineShoppingCart
      onClick={addToBasket}
      className={`cart ${className}`}
    />
  );
};

export default CartButton;
