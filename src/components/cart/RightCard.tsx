"use client";
import { sumPrice } from "@/utils/sumPrice";

const RightCard = () => {
  const prices = sumPrice();

  return (
    <div className="right-cart">
      <div className="right-top-cart">
        <h2>Your Subtotal</h2>
        <div className="right-cart-price">
          <div>Subtotal</div>
          <div>{prices}</div>
        </div>
        <button>Confirm Order</button>
      </div>
      <div className="right-bottom-cart">
        <h2>Promo Code</h2>
        <form className="cart-form" action="#">
          <input type="text" placeholder="enter promo code" />
          <button>Apply</button>
        </form>
      </div>
    </div>
  );
};

export default RightCard;
