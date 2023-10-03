import * as ActionTypes from "../actionTypes";

const InitialState = {
  name: "",
  price: "",
  desc: "",
  rating: "",
};

let productReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.AddProductToDB:
      return { ...state, Product: action.payload };
    default:
      return state;
  }
};

export default productReducer;
