import React from 'react'
import { Product } from './Product'

import './ProductList.css'

export const ProductList = ({products = [], onProductClick}) => {
  return (
    <div className="products-container">
      {products.map(product => <Product key={product.id} product={product} onClick={onProductClick}/>)}
    </div>
  )
}
