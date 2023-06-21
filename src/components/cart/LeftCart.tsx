"use client";
import { handleCard, handleQuantity } from "@/store/cardSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";

const LeftCart = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards.cards);

  let countBoughtIsFalse = 0;

  return (
    <div className="left-cart">
      {cards.map((card) => {
        if (card.bought) {
          return (
            <div className="cart-item">
              <div className="cart-logo">
                <img src={card.img} alt="" />
                <div className="cart-info">
                  <h3>{card.title}</h3>
                  <p>{card.price}</p>
                </div>
              </div>
              <div className="cart-func">
                <div className="cart-handle">
                  <span
                    onClick={() => {
                      dispatch(handleQuantity({ id: card.id, act: false }));
                    }}
                  >
                    -
                  </span>
                  <div>{card.quantity}</div>
                  <span
                    onClick={() => {
                      dispatch(handleQuantity({ id: card.id, act: true }));
                    }}
                  >
                    +
                  </span>
                </div>
                <button
                  className="cart-button"
                  onClick={() => {
                    dispatch(handleCard(card.id));
                  }}
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          );
        }
        countBoughtIsFalse++;
        return;
      })}
      {cards.length === countBoughtIsFalse && <h2>A cart is empty!</h2>}
    </div>
  );
};

export default LeftCart;
