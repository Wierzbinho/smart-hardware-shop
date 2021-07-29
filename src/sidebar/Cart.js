
import { CartItem } from './CartItem';
import { CartTotal } from './CartTotal';

import './Cart.css';

export const Cart = ({items}) => {
  return (
    <>
      <div className="cart-container">
        {items.map((item, index) => (
          <CartItem key={item.product.id} item={item} index={index} />
        ))}
      </div>
      <CartTotal items={items}/>
    </>
  );
}
