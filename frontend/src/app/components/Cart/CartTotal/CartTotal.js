import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SaveCartToDB } from "../../../../state/Cart/CartAction";
import { useNavigate } from "react-router-dom";

const CartTotal = ({ isCheckout }) => {
  const cartState = useSelector((store) => store.cartReducer);
  const user = useSelector((store) => store.userReducer.User);
  const navigate = useNavigate();

  if (cartState.cartItems.length === 0) {
    return "";
  }

  let dispatch = useDispatch();

  const subTotal = cartState.cartTotal.toFixed(2);
  const taxAmount = (cartState.cartTotal * 0.05).toFixed(2);
  const totalAmount = (parseFloat(subTotal) + parseFloat(taxAmount)).toFixed(2);

  return (
    <div className="container">
      <div className="row">
        <p className="col-md-4 fw-bold">
          SubTotal:{`\n(${cartState.cartLength} Items)`}
        </p>
        <p className="col-md-6">{`$${subTotal}`}</p>
      </div>
      <div className="row border-bottom">
        <p className="col-md-4 fw-bold">Taxes: </p>
        <p className="col-md-6">{`$${taxAmount}`}</p>
      </div>
      <div className="row">
        <p className="col-md-4 fw-bold">Total: </p>
        <p className="col-md-6">{`$${totalAmount}`}</p>
      </div>
      {!isCheckout && (
        <div className="row">
          <button
            className="btn btn-success"
            onClick={() => {
              dispatch(SaveCartToDB(user._id, cartState.cartItems));
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartTotal;
