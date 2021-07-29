import './CartTotal.css';

const calculateTotalPrice = (cartItems) => {
  const total = cartItems.reduce((total, {qty, product: {price}}) => {
    return (total += Number(price) * qty);
  }, 0);

  return total.toFixed(2);
};

export const CartTotal = ({items}) => {

  return (
    <div className="cart-total-container">
      <div className="cart-total-text">
        Subtotal
        <span className="cart-total-text__amount">
          ฿{calculateTotalPrice(items)}
        </span>
      </div>
    </div>
  );
};
