import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import productReducer from "./Product/ProductReducer";
import productsReducer from "./Products/ProductsReducer";
import apiReducer from "./APIState/APIStateReducer";
import cartReducer from "./Cart/CartReducer";
import userReducer from "./User/UserReducer";

const rootReducer = combineReducers({
  productReducer,
  productsReducer,
  apiReducer,
  cartReducer,
  userReducer,
});

export default configureStore(
  { reducer: rootReducer },
  {},
  applyMiddleware(thunk)
);
