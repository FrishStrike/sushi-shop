"use client";

import { addCard } from "@/store/cardSlice";
import { useAppDispatch } from "@/store/hook";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartButton = () => {
  const dispatch = useAppDispatch();

  const addToBasket: React.MouseEventHandler<SVGElement> = (e) => {
    e.preventDefault();
  };

  return <AiOutlineShoppingCart onClick={addToBasket} className="cart" />;
};

export default CartButton;
