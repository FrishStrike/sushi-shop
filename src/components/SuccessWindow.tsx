"use client";
import { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const SuccessWindow = ({
  active,
  setSuccessWindow,
}: {
  active: boolean[];
  setSuccessWindow: (param: boolean[]) => void;
}) => {
  if (active[active.length - 1]) {
    return (
      <div className="success-window">
        <span>
          <BsFillCheckCircleFill />
        </span>
        <h3>The product added to cart</h3>
      </div>
    );
  }
};

export default SuccessWindow;