import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddCartItemToStore } from "../../../../state/Cart/CartAction";

import "./Product.css";

const Product = ({ product }) => {
  let [quantity, setQuantity] = useState(1);
  let dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(AddCartItemToStore({ ...product, quantity }));
  };

  const handleDecrement = () => {
    if (quantity === 0) setQuantity(0);
    else setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="card">
      <img
        src={product.image}
        className="card-img-top rounded"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <div className="row justify-content-between">
          <div className="quantity-input col-md-4">
            <button onClick={handleDecrement} className="btn btn-secondary">
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="col-md-4"
            />
            <button onClick={handleIncrement} className="btn btn-secondary">
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="btn btn-primary col-md-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
