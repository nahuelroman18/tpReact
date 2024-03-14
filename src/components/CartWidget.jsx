import changuito from "../assets/changuito.webp";

export const CartWidget = () => {
  return (
    <div id="cart-widget">
      <img src={changuito} alt="Cart" width={40} />
      <span>89</span>
    </div>
  );
};
