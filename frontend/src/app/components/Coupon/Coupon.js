import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GenerateCoupon } from "../../../state/Coupon/CouponAction";

const Coupon = () => {
  let dispatch = useDispatch();
  let coupon = useSelector((store) => store.couponReducer.Coupon);
  const handleGenerateCoupon = () => {
    dispatch(GenerateCoupon());
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light container"
      style={{ minHeight: "30rem" }}
    >
      <div className="text-center">
        <button className="btn btn-warning" onClick={handleGenerateCoupon}>
          Generate Coupon
        </button>
        {coupon.code !== "" ? (
          <p className="text-success">
            Code: <strong>{coupon.code}</strong> gives you{" "}
            <strong>{coupon.value}% off</strong>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Coupon;
