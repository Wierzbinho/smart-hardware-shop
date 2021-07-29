import {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { ProductDetailsCarousel } from './ProductDetailsCarousel';
import { useCartDispatch } from '../cartContext';

import './ProductDetails.css';

export const ProductDetails = ({isOpen, onClose, product = {}}) => {
  const {name, images, description, price} = product;
  const dispatch = useCartDispatch();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  const handleAddToCart = () => {
    dispatch({ type: "ADD", product });
    if (snackbarOpen) {
      setSnackbarOpen(false);
      setTimeout(() => {setSnackbarOpen(true)}, 150);
    } else {
      setSnackbarOpen(true);
    }
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  }

  console.log(snackbarOpen)
  
  return (
    <>
      <Dialog onClose={onClose} open={isOpen} fullWidth={true} maxWidth={"md"}>
        <div className="product-details-header">
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <DialogContent>
          <div className="product-details-container">
            <div className="product-details-carousel-container">
              <ProductDetailsCarousel images={images} />
            </div>
            <div className="product-details">
              <h3 className="product-details__name">{name}</h3>
              <div className="product-details__description">{description}</div>
              <Button variant="outlined" onClick={handleAddToCart}>
                Add to cart • ฿{price}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" variant="filled">
          {`${name} has been added to cart`}
        </Alert>
      </Snackbar>
    </>
  );
}
