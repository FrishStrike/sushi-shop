"use client";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [navClass, setNavClass] = useState("");
  const [buttonClass, setButtonClass] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <button
        onClick={() => {
          if (!toggle) {
            setButtonClass("button-open");
            setNavClass("menu-open");
            setToggle(!toggle);
          } else {
            setButtonClass("");
            setNavClass("");
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

      <ul className={`menu ${navClass}`}>
        <li className="menu-item">
          <Link className="menu-link" href="#">
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link" href="/">
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
