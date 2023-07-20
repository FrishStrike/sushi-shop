import { ICardItem } from "@/types/card.interface";

interface Props {
  page: number;
  cards: ICardItem[];
  setPage: (num: number) => void;
  isData: boolean;
  second?: boolean;
}

const Arrows: React.FC<Props> = ({ page, cards, setPage, second, isData }) => {
  let invisible = "";
  second ? (invisible = "arrows-second") : (invisible = "");

  return (
    <div className={`arrows ${invisible}`}>
      {page !== 1 ? (
        <img src="/arrow-left.svg" alt="" onClick={() => setPage(page - 1)} />
      ) : (
        <img
          src="/arrow-left.svg"
          alt=""
          style={{ opacity: 0, cursor: "default" }}
        />
      )}

      {isData && cards.length === 8 ? (
        <img src="/arrow-right.svg" alt="" onClick={() => setPage(page + 1)} />
      ) : (
        <img
          src="/arrow-left.svg"
          alt=""
          style={{ opacity: 0, cursor: "default" }}
        />
      )}
    </div>
  );
};

export default Arrows;
