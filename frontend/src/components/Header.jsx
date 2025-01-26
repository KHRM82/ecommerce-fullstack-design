/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary p-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4">
            <nav>
              <ul className="nav justify-content-center justify-content-md-start">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link text-white">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link text-white">
                    Cart
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-md-4 my-3 my-md-0">
            <div className="search-bar d-flex justify-content-center">
              <input
                type="text"
                placeholder="Search products..."
                className="form-control"
              />
              <button className="btn btn-light ml-2">Search</button>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="auth-links d-flex justify-content-center justify-content-md-end">
              <Link to="/login" className="nav-link text-white">
                Login
              </Link>
              <Link to="/signup" className="nav-link text-white">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
