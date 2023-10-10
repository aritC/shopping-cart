import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItems from "../Cart/CartItems/CartItems";
import CartTotal from "../Cart/CartTotal/CartTotal";

const Checkout = () => {
  const user = useSelector((store) => store.userReducer.User);
  const cartState = useSelector((store) => store.cartReducer);
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleMakePayment = () => {
    setShowSpinner(true);

    setTimeout(() => {
      setShowSpinner(false);
      setShowPaymentMessage(true);
    }, 2000);

    setTimeout(() => {
      setShowPaymentMessage(false);
    }, 10000);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 m-2">
          {!showPaymentMessage && (
            <div className="row justify-content-between border-bottom border-3 mb-3 align-middle">
              <p className="h1 col-md-4">Checkout Page</p>
            </div>
          )}

          {user._id === "" ? (
            <div className="row">
              <p>Please log in to view your details and cart items.</p>
            </div>
          ) : !showSpinner && !showPaymentMessage ? (
            <>
              <div className="row">
                <h2>User Details</h2>
                <p>
                  Name: {user.firstName} {user.lastName}
                </p>
                <p>Email: {user.email}</p>
                <div>
                  <p>Address: {user.address}</p>
                  <p className="form-text">
                    We'll use this address to deliver your items.
                  </p>
                </div>
              </div>
              {cartState.cartItems.length === 0 ? (
                <p>
                  Your cart is empty. Add items to your cart before proceeding.
                </p>
              ) : (
                <>
                  <CartItems />
                  <CartTotal isCheckout={true} />
                  <div className="row">
                    <button
                      className="btn btn-success"
                      onClick={handleMakePayment}
                    >
                      Proceed to Payment
                    </button>
                  </div>
                </>
              )}
            </>
          ) : showSpinner && !showPaymentMessage ? (
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className="row justify-content-between">
              <p className="h1 border-bottom border-3 mb-">
                Payment Successful!
              </p>
              <p>Thank you for the payment, your order is being processed!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
