import React, {useEffect, useState, useRef} from 'react'

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ProductList } from './ProductList';
import { getProducts } from './api/productsService';
import { ProductDetails } from './ProductDetails';

import './Main.css';

export const Main = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState();
  const [isRetrievingProducts, setIsRetrievingProducts] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const loader = useRef(null);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {   
        setPage((page) => page + 1)
    }
}

  useEffect(() => {
    const initializeObserver = () => {
      const options = {
        root: null,
        rootMargin: "10px",
        threshold: 1.0
     };
  
     const observer = new IntersectionObserver(handleObserver, options);
     
     if (loader.current) {
        observer.observe(loader.current)
     }
    }

    initializeObserver();
}, []);
  
useEffect(() => {
  const fetchProducts = async () => {
    setIsRetrievingProducts(true);

    try {
      const productsBatch = await getProducts({ page });
      setProducts(loadedProducts => [...loadedProducts, ...productsBatch]);
      setIsRetrievingProducts(false);
    } catch (e) {
      setIsRetrievingProducts(false);
      handleError(e);
    }
  };

  fetchProducts();
}, [page]);

  const onProductClick = (product) => {
    setSelectedProduct(product);
  };

  const onProductDetailsClose = () => {
    setSelectedProduct(undefined);
  };

  const handleError = (e) => {
    setErrorMessage(`Unable to retrieve product list.`);
    console.log(e);
  }
 
  const handleErrorSnackbarClose = () => {
    setErrorMessage();
  };

  return (
    <>
      <div className="main-container">
        <div className="main-header">
          <h2>Featured products</h2>
        </div>
        <ProductList products={products} onProductClick={onProductClick} />
        <div ref={loader} className="loader">{isRetrievingProducts && <CircularProgress />}</div>
      </div>
      <ProductDetails
        onClose={onProductDetailsClose}
        product={selectedProduct}
        isOpen={!!selectedProduct}
      />
      <Snackbar open={!!errorMessage} onClose={handleErrorSnackbarClose}>
        <Alert onClose={handleErrorSnackbarClose} severity="error" variant="filled">
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
