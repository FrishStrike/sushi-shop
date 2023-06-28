"use client";
import Link from "next/link";
import { Baloo_Bhai_2 } from "next/font/google";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useSession, signOut } from "next-auth/react";

const balooBhai = Baloo_Bhai_2({
  weight: ["600"],
  subsets: ["latin"],
});

const SideBar = () => {
  const session = useSession();

  return (
    <nav className="nav">
      <div>
        <Link className={balooBhai.className} href="/">
          S.
        </Link>
      </div>
      <div>
        <Link href="/home">
          <img src="/home.svg" alt="" />
        </Link>
      </div>
      <div>
        <Link href="/menu">
          <img src="/menu.svg" alt="" />
        </Link>
      </div>
      <div>
        <Link href="/cart">
          <img src="/cart.svg" alt="" />
        </Link>
      </div>
      <div>
        <Link href="/location">
          <img src="/location.svg" alt="" />
        </Link>
      </div>
      <div>
        {session?.data ? (
          <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
            <BiLogOut color="white" size={50} />
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <BiLogIn color="white" size={50} />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default SideBar;
