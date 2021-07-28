import React from 'react'
import { Product } from './Product'

import './ProductList.css'

export const ProductList = ({products = [], onProductClick}) => {
  return (
    <div className="products-container">
      {products.map((product, index) => <Product key={product.id} product={product} onClick={onProductClick} index={index}/>)}
    </div>
  )
}
