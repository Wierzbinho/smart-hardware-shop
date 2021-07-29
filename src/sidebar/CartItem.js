import { CartItemQty } from './CartItemQty';

import './CartItem.css';

export const CartItem = ({item, index}) => {
  const {qty, product: {defaultImage, name, price}} = item;

  return (
    <>
      <img className="cart-item-image" src={defaultImage} alt={name} />
      <div className="cart-item-name">{name}</div>   
      <div className="cart-item-price">฿{price}</div>
      <CartItemQty qty={qty} index={index}/>
    </>
  )
}
