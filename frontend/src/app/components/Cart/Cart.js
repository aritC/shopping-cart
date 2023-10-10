import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CartTotal from "./CartTotal/CartTotal";
import { SaveCartToDB } from "../../../state/Cart/CartAction";

import "./Cart.css";
import CartItems from "./CartItems/CartItems";

const Cart = (props) => {
  const cartState = useSelector((store) => store.cartReducer);
  const user = useSelector((store) => store.userReducer.User);
  let dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 m-2">
          <div className="row justify-content-between border-bottom border-3 mb-5 align-middle">
            <p className="h1 col-md-4">Your Cart</p>
            <button
              className="btn btn-warning col-sm-2 fw-bold mb-2"
              onClick={() => {
                dispatch(SaveCartToDB(user._id, cartState.cartItems));
              }}
            >
              Save Cart
            </button>
          </div>
          <div className="row">
            <CartItems />
          </div>
        </div>
        <div className="col-md-2 m-2">
          <div className="row border-bottom border-3 mb-5">
            <p className="h1">Cart Total</p>
          </div>
          <div className="row">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
