"use client";
import React, { useEffect } from "react";
import CardItem from "./CardItem";
import { useQuery } from "@tanstack/react-query";
import { getCards } from "@/services/cards.service";
import { useAppDispatch } from "@/store/hook";
import { addCard } from "@/store/cardSlice";

const SushiList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cards"],
    queryFn: getCards,
  });

  const dispatch = useAppDispatch();

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

  if (isLoading) {
    return (
      <div className="container">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (isError) {
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
      <div className="container">
        <div className="cards">
          {data?.data.map((card) => (
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
    </main>
  );
};

export default SushiList;
