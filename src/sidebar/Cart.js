
import { CartItem } from './CartItem';
import { useCart } from '../cartContext';

import './Cart.css';

export const Cart = () => {
  const cartItems = useCart();

  return (
    <div className="cart-container">
      {cartItems.map((item, index)=> <CartItem key={item.id} {...item} index={index}/>)}
    </div>
  )
}
