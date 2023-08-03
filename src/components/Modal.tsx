"use client";

import CartButton from "./CartButton";

interface props {
  active: boolean;
  setActive: () => void;
  setSuccessWindow: (param: boolean[]) => void;
  img: string;
  title: string;
  price: string;
  id: string;
  successWindow: boolean[];
}

const Modal: React.FC<props> = ({
  active,
  setActive,
  setSuccessWindow,
  successWindow,
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
            <CartButton
              className="cart"
              _id={id}
              successWindow={successWindow}
              setSuccessWindow={setSuccessWindow}
            />
          </div>
          <p>{price}</p>
          <img src="/pineapple.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
