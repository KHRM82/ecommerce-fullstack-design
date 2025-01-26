/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
