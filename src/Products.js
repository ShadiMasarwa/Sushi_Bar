import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
};

export default Products;
