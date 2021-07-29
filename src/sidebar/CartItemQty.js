import { useCartDispatch } from '../cartContext';

import './CartItemQty.css';

export const CartItemQty = ({qty, index}) => {
  const dispatch = useCartDispatch();
  
  const handleIncrementQty = () => {
    dispatch({type: 'INCREMENT_QTY', index});
  };

  const handleDecrementQty = () => {
    dispatch({type: 'DECREMENT_QTY', index});
  };

  return (
    <div className="cart-item-qty">
      <div className="cart-item-qty__button" onClick={handleDecrementQty}>-</div>
      <div>{qty}</div>
      <div className="cart-item-qty__button" onClick={handleIncrementQty}>+</div>
    </div>
  )
}
