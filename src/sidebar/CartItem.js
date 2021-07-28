import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCartDispatch } from '../cartContext';

import './CartItem.css';

export const CartItem = ({defaultImage, name, price, index}) => {
  const dispatch = useCartDispatch();
  
  const handleDelete = () => {
    dispatch({type: 'REMOVE', index});
  }

  return (
    <>
      <img className="cart-item-image" src={defaultImage} alt={name} />
      <div className="cart-item-name">{name}</div>   
      <div className="cart-item-price">฿{price}</div>
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </>
  )
}
