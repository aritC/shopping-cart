import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SaveCartToDB } from "../../../../state/Cart/CartAction";
import { useNavigate } from "react-router-dom";

const CartTotal = ({ isCheckout }) => {
  const cartState = useSelector((store) => store.cartReducer);
  const user = useSelector((store) => store.userReducer.User);
  const coupon = useSelector((store) => store.couponReducer.Coupon);
  const [discountedTotalAmount, setDiscountedTotalAmount] =
    useState(totalAmount);
  const navigate = useNavigate();
  if (cartState.cartItems.length === 0) {
    return "";
  }

  let dispatch = useDispatch();

  const subTotal = cartState.cartTotal.toFixed(2);
  const taxAmount = (cartState.cartTotal * 0.05).toFixed(2);
  const totalAmount = (parseFloat(subTotal) + parseFloat(taxAmount)).toFixed(2);

  useEffect(() => {
    const discountPercentage = coupon.value / 100;
    const discount = cartState.cartTotal * discountPercentage;
    const newTotalAmount = (
      cartState.cartTotal +
      parseFloat(taxAmount) -
      discount
    ).toFixed(2);

    setDiscountedTotalAmount(newTotalAmount);
  }, [cartState.cartTotal, coupon.value, taxAmount]);

  return (
    <div className="container">
      <div className="row">
        <p className="col-md-4 fw-bold">
          SubTotal:{`\n(${cartState.cartLength} Items)`}
        </p>
        <p className="col-md-6">{`$${subTotal}`}</p>
      </div>
      {coupon.code !== "" ? (
        <div className="row">
          <p className="col-md-4 fw-bold">Applied Code: </p>
          <div className="col-md-6">
            <p className="row m-0">{`${coupon.code}`}</p>
            <p className="row m-0">{`(${coupon.value}% off)`}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="row border-bottom">
        <p className="col-md-4 fw-bold">Taxes: </p>
        <p className="col-md-6">{`$${taxAmount}`}</p>
      </div>
      <div className="row">
        <p className="col-md-4 fw-bold">Total: </p>
        <p className="col-md-6">{`$${discountedTotalAmount}`}</p>
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
