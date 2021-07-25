
import { CartItem } from './CartItem';
import { useCart } from '../cartContext';

import './Cart.css';

export const Cart = () => {
  const cartItems = useCart();

  return (
    <div className="cart-container">
      {cartItems.map(item => <CartItem {...item}/>)}
      
    </div>
  )
}
