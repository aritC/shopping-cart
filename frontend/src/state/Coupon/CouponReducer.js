import * as ActionTypes from "../actionTypes";

const InitialState = {
  Coupon: {
    code: "",
    value: 0,
  },
};

let couponReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.GenerateCoupon:
      return { ...state, Coupon: action.payload };
    default:
      return state;
  }
};

export default couponReducer;
