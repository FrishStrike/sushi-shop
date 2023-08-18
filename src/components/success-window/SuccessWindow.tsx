"use client";
import { BsFillCheckCircleFill } from "react-icons/bs";
import classes from "./SuccessWindow.module.scss";
import { useEffect, useState } from "react";

interface props {
  active?: boolean;
}

const SuccessWindow: React.FC<props> = ({ active }) => {
  const [activeSuccessWindow, setActiveSuccessWindow] = useState(false);

  useEffect(() => {
    if (active) {
      setActiveSuccessWindow(true);
    } else {
      setActiveSuccessWindow(false);
    }
  }, [active]);

  if (activeSuccessWindow) {
    return (
      <div className={activeSuccessWindow ? classes.successWindow : ""}>
        <span>
          <BsFillCheckCircleFill />
        </span>
        <h3>The product added to cart</h3>
      </div>
    );
  }
};

export default SuccessWindow;
