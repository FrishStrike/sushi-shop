"use client";
import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { useQuery } from "@tanstack/react-query";
import {
  getCardsPagination,
  getCardsPaginationLeft,
} from "@/services/cards.service";
import { useAppDispatch } from "@/store/hook";
import { addCard } from "@/store/cardSlice";
import { ICardItem } from "@/types/card.interface";
import Arrows from "./Arrows";
import { AxiosResponse } from "axios";
import Modal from "./Modal";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "./CardSkeleton";
import SuccessWindow from "./success-window/SuccessWindow";

const SushiList = () => {
  const dispatch = useAppDispatch();

  const [cards, setCards] = useState<ICardItem[]>([]);
  const [page, setPage] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [nextDataQ, setNextDataQ] = useState<AxiosResponse<ICardItem[]>>();
  const [isData, setIsData] = useState(true);
  const [lastPage, setLastPage] = useState(1);

  const [modalActive, setModalActive] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalPrice, setModalPrice] = useState("");
  const [modalId, setModalId] = useState("");

  const [successWindowWithOutModal, setSuccessWindowWithOutModal] =
    useState(false);

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

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cards", page],
    queryFn: async () => {
      setCards([]);

      const first = page * 8 - 8;
      const second = page * 8;

      if (lastPage > page) {
        setIsData(true);
        const data = await getCardsPaginationLeft(first, second);
        setLastPage(page);
        setToggle(false);
        return data;
      }
      setLastPage(page);

      if (toggle) {
        setIsData(true);
        setToggle(!toggle);
        const data = nextDataQ;
        return data;
      }

      const [currentData, nextData] = await getCardsPagination(first, second);
      const data = currentData;
      setToggle(!toggle);
      if (!nextData.data.length) {
        setIsData(false);
        return data;
      }
      setNextDataQ(nextData);
      return data;
    },
    keepPreviousData: true,
  });

  useEffect(() => {
    data?.data.map((card) => {
      if (card) {
        dispatch(
          addCard({
            _id: card._id,
            quantity: 1,
            title: card.title,
            img: card.img,
            price: card.price,
            bought: card.bought,
          })
        );
      }
    });
  }, [data]);

  useEffect(() => {
    if (data) {
      setCards(data.data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="container">
        <div className="cards">
          <CardSkeleton cards={8} />
        </div>
      </div>
    );
  }

  if (isError) {
    console.log(error);

    return (
      <div className="container">
        <h3>Error</h3>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="container">
        <h3>No data</h3>
      </div>
    );
  }

  return (
    <main>
      <SuccessWindow active={successWindowWithOutModal} />
      <Arrows page={page} cards={cards} setPage={setPage} isData={isData} />
      <div className="container">
        <div className="cards">
          {cards.map((card) => (
            <CardItem
              key={card._id}
              _id={card._id}
              quantity={card.quantity}
              title={card.title}
              img={card.img}
              price={card.price}
              bought={card.bought}
              onClick={setActive}
              setModalContent={setModalContent}
              modal={modalActive}
              setSuccessWindowWithOutModal={setSuccessWindowWithOutModal}
            />
          ))}
        </div>
      </div>
      <Arrows
        page={page}
        cards={cards}
        setPage={setPage}
        second={true}
        isData={isData}
      />
      <Modal
        active={modalActive}
        setActive={setActive}
        img={modalImg}
        title={modalTitle}
        price={modalPrice}
        id={modalId}
      />
    </main>
  );
};

export default SushiList;
