"use client";
import React, { useEffect, useMemo, useState } from "react";
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

const SushiList = () => {
  const dispatch = useAppDispatch();
  const [cards, setCards] = useState<ICardItem[]>([]);
  const [page, setPage] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [nextDataQ, setNextDataQ] = useState<AxiosResponse<ICardItem[]>>();
  const [isData, setIsData] = useState(true);
  const [lastPage, setLastPage] = useState(1);

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
        return data;
      }
      setLastPage(page);

      if (toggle) {
        setIsData(true);
        setToggle(!toggle);
        const data = nextDataQ;
        return data;
      }

      console.log("request right");

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
            id: card.id,
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
        <h3>Loading...</h3>
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
      <Arrows page={page} cards={cards} setPage={setPage} isData={isData} />
      <div className="container">
        <div className="cards">
          {cards.map((card) => (
            <CardItem
              key={card.id}
              id={card.id}
              quantity={card.quantity}
              title={card.title}
              img={card.img}
              price={card.price}
              bought={card.bought}
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
    </main>
  );
};

export default SushiList;
