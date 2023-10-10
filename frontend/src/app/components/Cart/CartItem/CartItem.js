import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  RemoveItemFromCart,
  UpdateCartItem,
} from "../../../../state/Cart/CartAction";
import "./CartItem.css";

const CartItem = ({ product }) => {
  let dispatch = useDispatch();
  let [quantity, setQuantity] = useState(product.quantity);

  const handleUpdate = (e) => {
    setQuantity(e.target.value);

    const updatedProduct = {
      ...product,
      quantity: e.target.value,
    };
    dispatch(UpdateCartItem(updatedProduct));
  };

  return (
    <div className="bg-light p-4 m-2 border rounded container cartItem">
      <div className="row">
        <div className="col-md-3 border-right">
          <img
            src={product.image}
            className="img-fluid rounded"
            alt={product.name}
          />
        </div>
        <div className="col-md-6">
          <div className="col-md-8">
            <h2>{product.name}</h2>
            <p className="text-muted">{product.category}</p>
            <p>{product.desc}</p>
            <p>Rating: {product.rating}</p>
            <p className="row">
              Quantity:{" "}
              <input
                type="number"
                value={quantity}
                onChange={handleUpdate}
                min="1"
              />
            </p>
            <p className="text-success">Price: ${product.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="col-md-3 text-right h2 d-flex flex-row-reverse align-middle">
          <button
            onClick={() => dispatch(RemoveItemFromCart(product._id))}
            className="btn btn-danger"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
