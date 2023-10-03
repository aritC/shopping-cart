import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import productReducer from "./Product/ProductReducer";
import productsReducer from "./Products/ProductsReducer";

const rootReducer = combineReducers({
  productReducer,
  productsReducer,
});

export default configureStore(
  { reducer: rootReducer },
  {},
  applyMiddleware(thunk)
);
