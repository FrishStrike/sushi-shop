import MainButton from "@/components/MainButton";

const page = () => {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <div className="welcome-info">
          <h1>Welcome to Sushi Restaurant</h1>
          <p>
            People eat with their eyes and Sushi creates an easy way for
            customers to order when they can see beautiful photos of your food
          </p>
        </div>
        <div className="welcome-btn">
          <MainButton href="/location" children="LOCATION" />
          <MainButton href="/menu" children="MENU" />
        </div>
      </div>
    </div>
  );
};

export default page;
