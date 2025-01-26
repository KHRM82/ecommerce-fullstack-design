/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your API or use static data
    const fetchProducts = async () => {
      const response = await fetch("/api/products"); // Update with your API endpoint
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="my-4">All Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
