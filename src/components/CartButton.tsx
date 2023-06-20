"use client";

import { addCard, handleCard } from "@/store/cardSlice";
import { useAppDispatch } from "@/store/hook";
import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface IProps {
  id: number;
}

const CartButton: FC<IProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const addToBasket: React.MouseEventHandler<SVGElement> = (e) => {
    e.preventDefault();
    dispatch(handleCard(id));
  };

  return <AiOutlineShoppingCart onClick={addToBasket} className="cart" />;
};

export default CartButton;
