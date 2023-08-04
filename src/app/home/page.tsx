import CarouselBox from "@/components/CarouselBox";
import FirstSwiper from "@/components/FirstSwiper";
import ListGoods from "@/components/ListGoods";

const page = () => {
  return (
    <div className="container">
      <FirstSwiper />
      <div className="home-container">
        <ListGoods />
        <CarouselBox />
      </div>
    </div>
  );
};

export default page;
