"use client";

import { handleCard } from "@/store/cardSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { FC, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface IProps {
  id: number;
}

const CartButton: FC<IProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards.cards);
  const toggle = cards.find((card) => card.id === id);

  const addToBasket: React.MouseEventHandler<SVGElement> = (e) => {
    e.preventDefault();
    dispatch(handleCard(id));
  };

  return toggle?.bought ? (
    <BsFillCheckCircleFill onClick={addToBasket} className="cart" />
  ) : (
    <AiOutlineShoppingCart onClick={addToBasket} className="cart" />
  );
};

export default CartButton;
