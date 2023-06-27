import { FC } from "react";
import NavBar from "./NavBar";

interface IProps {
  title: string;
}

const SushiHeader: FC<IProps> = ({ title }) => {
  return (
    <header>
      <div className="container">
        <h1>{title}</h1>
      </div>
      <NavBar />
    </header>
  );
};

export default SushiHeader;
