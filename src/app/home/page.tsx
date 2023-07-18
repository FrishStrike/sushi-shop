import CarouselBox from "@/components/CarouselBox";
import FirstSwiper from "@/components/FirstSwiper";

const page = () => {
  return (
    <div className="container">
      <FirstSwiper />

      <div className="home-container">
        <div className="the-best-thing">
          <h2>Top goods</h2>
          <div className="list-goods">
            <div className="goods-item">
              <img src="/img/Burrito.jpg" alt="" />
              <p>Burritos</p>
            </div>

            <div className="goods-item">
              <img src="/img/HuevosRancheros.jpg" alt="" />
              <p>Rancheros</p>
            </div>

            <div className="goods-item">
              <img src="/img/Pancakes.jpg" alt="" />
              <p>Pancakes</p>
            </div>
          </div>
        </div>
        <CarouselBox />
      </div>
    </div>
  );
};

export default page;
