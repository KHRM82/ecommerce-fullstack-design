/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      <h2 className="my-4">Your Cart</h2>
      <div className="row">
        {cartItems.length === 0 ? (
          <div className="col-12">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h4>
            Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}
          </h4>
          <button className="btn btn-primary">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
