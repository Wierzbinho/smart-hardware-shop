import React, {useEffect, useState, useRef} from 'react'

import { SearchBox } from "./SearchBox";
import { ProductList } from './ProductList';
import { getProducts } from './api/productsService';
import { BusyDots } from './BusyDots';
import { ProductDetails } from './ProductDetails';

import './Main.css';

export const Main = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState();
  const [isRetrievingProducts, setIsRetrievingProducts] = useState(false);

  const loader = useRef(null);

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

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {   
        setPage((page) => page + 1)
    }
}

  useEffect(() => {
    initializeObserver();
}, []);
  
  useEffect(() => {
    const fetchProducts = async () => {
      setIsRetrievingProducts(true);
      const productsBatch = await getProducts({page});
      setIsRetrievingProducts(false);
      setProducts([...products, ...productsBatch]);
    };

    fetchProducts();
  }, [page])

  const onProductClick = (product) => {
    setSelectedProduct(product);
  };

  const onProductDetailsClose = () => {
    setSelectedProduct(undefined);
  }
  
  return (
    <>
      <div className="main-container">
        <div className="main-header">
          <h2>Featured products</h2>
        </div>
        {/* <SearchBox/> */}
        <ProductList
          products={products}
          onProductClick={onProductClick}
        />
        <div ref={loader}>{isRetrievingProducts && <BusyDots />}</div>
      </div>
      <ProductDetails onClose={onProductDetailsClose} product={selectedProduct} isOpen={!!selectedProduct}/>
    </>
  );
}
