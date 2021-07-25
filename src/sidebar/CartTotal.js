import { useCart } from "../cartContext";

import './CartTotal.css';

const calculateTotalPrice = (cartItems) => {
  const total = cartItems.reduce((total, item) => {
    return (total += Number(item.price));
  }, 0);

  return total.toFixed(2);
};

export const CartTotal = () => {
  const cartItems = useCart();

  return (
    <div className="cart-total-container">
      <div className="cart-total-text">
        Subtotal
        <span className="cart-total-text__amount">
          ฿{calculateTotalPrice(cartItems)}
        </span>
      </div>
    </div>
  );
};
