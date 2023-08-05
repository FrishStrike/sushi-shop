"use client";

import { ICardItem } from "@/types/card.interface";
import GoodsItem from "./GoodsItem";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useAppDispatch } from "@/store/hook";
import { addCard } from "@/store/cardSlice";

const ListGoods = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalPrice, setModalPrice] = useState("");
  const [modalId, setModalId] = useState("");

  const dispatch = useAppDispatch();

  const setActive = () => {
    setModalActive(!modalActive);
  };

  const setModalContent = ({
    img,
    title,
    price,
    _id,
  }: {
    img: string;
    title: string;
    price: string;
    _id: string;
  }) => {
    setModalImg(img);
    setModalTitle(title);
    setModalPrice(price);
    setModalId(_id);
    setModalActive(!modalActive);
  };

  const goods: ICardItem[] = [
    {
      _id: "1000",
      img: "/img/Burrito.jpg",
      title: "Burritos",
      price: "$25.00",
      bought: false,
      quantity: 1,
    },
    {
      _id: "2000",
      img: "/img/HuevosRancheros.jpg",
      title: "Rancheros",
      price: "$25.00",
      bought: false,
      quantity: 1,
    },
    {
      _id: "3000",
      img: "/img/Pancakes.jpg",
      title: "Pancakes",
      price: "$25.00",
      bought: false,
      quantity: 1,
    },
  ];

  useEffect(() => {
    goods.map((good) => {
      if (good) {
        dispatch(
          addCard({
            _id: good._id,
            quantity: 1,
            title: good.title,
            img: good.img,
            price: good.price,
            bought: good.bought,
          })
        );
      }
    });
  }, []);

  return (
    <div className="the-best-thing">
      <h2>Top goods</h2>
      <div className="list-goods">
        {goods.map((good) => (
          <GoodsItem
            _id={good._id}
            img={good.img}
            bought={good.bought}
            price={good.price}
            quantity={good.quantity}
            title={good.title}
            key={good._id}
            setModalContent={setModalContent}
          />
        ))}
      </div>
      <Modal
        active={modalActive}
        setActive={setActive}
        successWindow={[]}
        id={modalId}
        img={modalImg}
        price={modalPrice}
        title={modalTitle}
        key={modalId}
      />
    </div>
  );
};

export default ListGoods;
