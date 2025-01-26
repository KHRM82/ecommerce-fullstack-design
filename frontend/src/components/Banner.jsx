/* eslint-disable no-unused-vars */
import React from "react";

const Banner = () => {
  return (
    <div className="jumbotron text-center bg-light">
      <h1 className="display-4">Welcome to Our Store!</h1>
      <p className="lead">Find the best products at unbeatable prices.</p>
      <a className="btn btn-primary btn-lg" href="/products" role="button">
        Shop Now
      </a>
    </div>
  );
};

export default Banner;
