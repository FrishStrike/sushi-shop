import MainButton from "@/components/MainButton";

const page = () => {
  return (
    <div className="welcome">
      <div className="background">
        <img src="/background.jpg" alt="" />
      </div>
      <div className="welcome-content">
        <div className="welcome-info">
          <h1>Welcome to Sushi Restaurant</h1>
          <p>
            People eat with their eyes and Sushi creates an easy way for
            customers to order when they can see beautiful photos of your food
          </p>
        </div>
        <div className="welcome-btn">
          <MainButton href="/home">HOME</MainButton>
          <MainButton href="/menu">MENU</MainButton>
        </div>
      </div>
    </div>
  );
};

export default page;
