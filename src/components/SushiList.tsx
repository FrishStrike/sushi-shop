"use client";
import React, { useEffect, useMemo, useState } from "react";
import CardItem from "./CardItem";
import { useQuery } from "@tanstack/react-query";
import { getCardsPagination } from "@/services/cards.service";
import { useAppDispatch } from "@/store/hook";
import { addCard } from "@/store/cardSlice";
import { ICardItem } from "@/types/card.interface";
import Arrows from "./Arrows";

const SushiList = () => {
  const dispatch = useAppDispatch();
  const [cards, setCards] = useState<ICardItem[]>([]);
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cards", page],
    queryFn: () => {
      setCards([]);
      const first = page * 8 - 8;
      const second = page * 8;
      return getCardsPagination(first, second);
    },
    keepPreviousData: true,
  });

  useEffect(() => {
    data?.data.map((card) =>
      dispatch(
        addCard({
          id: card.id,
          quantity: 1,
          title: card.title,
          img: card.img,
          price: card.price,
          bought: card.bought,
        })
      )
    );
  }, [data]);

  useMemo(() => {
    if (data) {
      setCards(data.data);
      console.log(data.data);
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
      <Arrows page={page} cards={cards} setPage={setPage} />
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
      <Arrows page={page} cards={cards} setPage={setPage} second={true} />
    </main>
  );
};

export default SushiList;
