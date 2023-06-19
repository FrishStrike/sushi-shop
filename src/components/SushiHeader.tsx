import { FC } from "react";

interface IProps {
  title: string;
}

const SushiHeader: FC<IProps> = ({ title }) => {
  return (
    <header>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  );
};

export default SushiHeader;
