"use client";
import Link from "next/link";
import { useState } from "react";
import ImageProfile from "./ImageProfile";

const NavBar = () => {
  const [ulClass, setUlClass] = useState("");
  const [buttonClass, setButtonClass] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <ImageProfile className={ulClass} />
      <button
        onClick={() => {
          if (!toggle) {
            setButtonClass("button-open");
            setUlClass("menu-open");
            setToggle(!toggle);
          } else {
            setButtonClass("");
            setUlClass("");
            setToggle(!toggle);
          }
        }}
        className={`menu-btn ${buttonClass}`}
        type="button"
      >
        <span className="btn-line"></span>
        <span className="btn-line"></span>
        <span className="btn-line"></span>
        <span className="btn-line"></span>
      </button>

      <ul className={`menu ${ulClass}`}>
        <li className="menu-item">
          <Link className="menu-link" href="/">
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link" href="/menu">
            Menu
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link" href="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
