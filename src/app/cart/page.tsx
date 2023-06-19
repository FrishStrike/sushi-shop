const page = () => {
  return (
    <main>
      <div className="container">
        <div className="cart-content">
          <div className="left-cart">
            <h2>A cart is empty!</h2>
          </div>
          <div className="right-cart">
            <div className="right-top-cart">
              <h2>Your Subtotal</h2>
              <div className="right-cart-price">
                <div>Subtotal</div>
                <div>80$</div>
              </div>
              <button>Confirm Order</button>
            </div>
            <div className="right-bottom-cart">
              <h2>Promo Code</h2>
              <form className="cart-form" action="#">
                <input type="text" placeholder="enter promo code" />
                <button>Apply</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
