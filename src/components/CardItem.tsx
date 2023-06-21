import { ICardItem } from "@/types/card.interface";
import CartButton from "./CartButton";

const CardItem: React.FC<ICardItem> = ({ title, img, price, id }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-info">
        <h3>{title}</h3>
        <span className="price">{price}</span>
        <CartButton id={id} />
      </div>
    </div>
  );
};

export default CardItem;
