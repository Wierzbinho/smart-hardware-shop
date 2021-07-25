import './CartItem.css';

export const CartItem = ({defaultImage, name, price}) => {
  return (
    <>
      <img className="cart-item-image" src={defaultImage} alt={name} />
      <div className="cart-item-name">{name}</div>   
      <div className="cart-item-price">฿{price}</div>   
    </>
  )
}
