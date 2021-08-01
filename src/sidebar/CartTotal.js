import { calculateTotalPrice } from './cartUtils';

import './CartTotal.css';

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
