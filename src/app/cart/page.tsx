import LeftCart from "@/components/cart/LeftCart";
import RightCard from "@/components/cart/RightCard";

const page = () => {
  return (
    <main>
      <div className="container container-cart">
        <div className="cart-content">
          <LeftCart />
          <RightCard />
        </div>
      </div>
    </main>
  );
};

export default page;
