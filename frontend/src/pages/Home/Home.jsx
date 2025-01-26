/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import FeaturedProducts from "../../components/FeaturedProducts";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch featured products from your API or use static data
    // Example:
    const fetchProducts = async () => {
      const response = await fetch("/api/featured-products"); // Update with your API endpoint
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Banner />
      <h2 className="my-4">Featured Products</h2>
      <FeaturedProducts products={products} />
    </div>
  );
};

export default Home;
