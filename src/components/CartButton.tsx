"use client";

import { handleCard } from "@/store/cardSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { FC, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface IProps {
  _id: string;
  className?: string;
  setSuccessWindow?: (param: boolean[]) => void;
  successWindow: boolean[];
}

const CartButton: FC<IProps> = ({
  _id,
  className,
  setSuccessWindow,
  successWindow,
}) => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards.cards);
  const toggle = cards.find((card) => card._id === _id);

  useEffect(() => {
    if (setSuccessWindow && successWindow)
      if (toggle?.bought) {
        setSuccessWindow([...successWindow, false, true]);
      } else {
        setSuccessWindow([false]);
      }
  }, [toggle?.bought]);

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
