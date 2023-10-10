import * as ActionTypes from "../actionTypes";
import axios from "../../../config/axios.config";

export const AddProductToStore = (product) => {
  return {
    type: ActionTypes.AddProductToStore,
    payload: product,
  };
};

export const AddProductToDB = (product) => {
  return (dispatchEvent) => {
    axios
      .post("/product", product)
      .then((response) => {
        dispatchEvent(AddProductToStore(response.data));
      })
      .catch((error) => {
        console.log("Error saving product:", error);
      });
  };
};
