import * as ActionTypes from "../actionTypes";
import axios from "../../../config/axios.config";

export const AddProductsToStore = (products) => {
  return {
    type: ActionTypes.AddProductsToStore,
    payload: products,
  };
};

export const GetAllProductsFromDB = () => {
  return (dispatchEvent) => {
    axios
      .get("/products")
      .then((response) => {
        dispatchEvent(AddProductsToStore(response.data.products));
      })
      .catch((error) => {
        console.error("Error getting products from db:", error);
      });
  };
};
