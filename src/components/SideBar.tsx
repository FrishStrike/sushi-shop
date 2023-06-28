import Link from "next/link";
import { Baloo_Bhai_2 } from "next/font/google";

const balooBhai = Baloo_Bhai_2({
  weight: ["600"],
  subsets: ["latin"],
});

const SideBar = () => {
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
        <Link href="/">
          <img src="/exit.svg" alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;
