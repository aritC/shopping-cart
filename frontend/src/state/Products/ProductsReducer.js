import * as ActionTypes from "../actionTypes";

const InitialState = {
  products: [],
};

let productsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.GetAllProductsFromDB:
      return { ...state, products: action.payload };
    case ActionTypes.AddProductsToStore:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
