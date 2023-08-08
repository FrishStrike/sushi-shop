"use client";
import Link from "next/link";
import { useState } from "react";
import ImageProfile from "./ImageProfile";
import { useSession, signOut } from "next-auth/react";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { balooBhai } from "./SideBar";
import { MdLocationPin } from "react-icons/md";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [ulClass, setUlClass] = useState("");
  const [buttonClass, setButtonClass] = useState("");
  const [toggle, setToggle] = useState(false);

  const session = useSession();
  const router = useRouter();

  return (
    <nav className="navbar">
      <ImageProfile className={`${ulClass} navbar-btn`} />
      <MdLocationPin
        className={`location-icon ${ulClass}`}
        size={55}
        onClick={() => router.push("/location")}
      />

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

      {session.data ? (
        <Link
          className={`log-in ${ulClass}`}
          href="#"
          onClick={() => signOut({ callbackUrl: "/home" })}
        >
          <BiLogOut color="white" size={60} />
        </Link>
      ) : (
        <Link className={`log-in ${ulClass}`} href="/api/auth/signin">
          <BiLogIn color="white" size={60} />
        </Link>
      )}

      <ul className={`menu ${ulClass}`}>
        <li className="menu-item logo-navbar">
          <Link href="/" className={balooBhai.className}>
            S.
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link" href="/home">
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
