import React from 'react'

const Product = ({product}) => {
  return (
    <div className="product" key={product.id}>
      <img src={product.image} alt={product.title} title={product.title} />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-price">
          <span className="price">{product.price}</span>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product