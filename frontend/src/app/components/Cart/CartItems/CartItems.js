import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../CartItem/CartItem";

const CartItems = (props) => {
  const cartState = useSelector((store) => store.cartReducer);
  return (
    <>
      {cartState.cartItems.length === 0 ? (
        <p className="h4">No items in cart</p>
      ) : (
        cartState.cartItems.map((cartItem, idx) => {
          return <CartItem product={cartItem} key={idx + Date.now()} />;
        })
      )}
    </>
  );
};

export default CartItems;
