"use client";
import { discountCalculate } from "@/utils/discountСalculate";
import { FormEventHandler, useEffect, useState } from "react";
import { useAppSelector } from "@/store/hook";

const RightCard = () => {
  const [code, setCode] = useState("");
  const [resultPrice, setResultPrice] = useState(0);

  const cards = useAppSelector((state) => state.cards.cards);
  let result = 0;
  cards.forEach((card) => {
    if (card.bought) {
      result += Number(card.price.substring(1)) * card.quantity;
    }
  });

  const price = result;

  useEffect(() => {
    if (code === "pineapple") setResultPrice(discountCalculate(20, price));
    else setResultPrice(price);
  }, [code, price]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const code = formData.get("code");
    setCode(code as string);
  };

  return (
    <div className="right-cart">
      <div className="right-top-cart">
        <h2>Your Subtotal</h2>
        <div className="right-cart-price">
          <div>Subtotal</div>
          <div>{resultPrice}</div>
        </div>
        <button>Confirm Order</button>
      </div>
      <div className="right-bottom-cart">
        <h2>Promo Code</h2>
        <form className="cart-form" onSubmit={onSubmit}>
          <input type="text" name="code" placeholder="enter promo code" />
          <button>Apply</button>
        </form>
      </div>
    </div>
  );
};

export default RightCard;
