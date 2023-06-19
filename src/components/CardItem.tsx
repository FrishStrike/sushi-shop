import { CardItem } from "@/store/cardSlice";
import CartButton from "./CartButton";

const CardItem: React.FC<CardItem> = ({ title, img, price }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-info">
        <h3>{title}</h3>
        <span className="price">{price}</span>
        <CartButton />
      </div>
    </div>
  );
};

export default CardItem;
