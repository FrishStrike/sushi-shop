import { FC } from "react";
import NavBar from "./NavBar";
import ImageProfile from "./ImageProfile";

interface IProps {
  title: string;
}

const SushiHeader: FC<IProps> = async ({ title }) => {
  return (
    <header>
      <div className="container">
        <h1>{title}</h1>
        <ImageProfile />
      </div>
      <NavBar />
    </header>
  );
};

export default SushiHeader;
