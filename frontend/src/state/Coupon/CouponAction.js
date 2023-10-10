import * as ActionTypes from "../actionTypes";
import couponGenerator from "../../app/services/couponGenerator";

export const GenerateCoupon = () => {
  let coupon = couponGenerator();
  return {
    type: ActionTypes.GenerateCoupon,
    payload: { ...coupon },
  };
};
