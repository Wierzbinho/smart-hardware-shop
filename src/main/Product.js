import React from 'react'

import './Product.css'

export const Product = ({product, onClick}) => {
  const handleClick = () => {
    onClick(product);
  };

  const {name, defaultImage, price} = product;

  return (
    <div className="product-container" onClick={handleClick}>
      <img className="product-image" src={defaultImage} alt={name} />
      <div className="product-name">{name}</div>
      <div className="product-price">{price}</div>
    </div>
  )
}
