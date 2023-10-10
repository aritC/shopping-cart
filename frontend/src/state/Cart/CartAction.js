import * as ActionTypes from "../actionTypes";
import axios from "../../../config/axios.config";

export const AddCartItemToStore = (item) => {
  return {
    type: ActionTypes.AddCartItemToStore,
    payload: item,
  };
};

export const ClearCartStoreItems = () => ({
  type: ActionTypes.ClearCartStoreItems,
});

export const UpdateCartItem = (item) => ({
  type: ActionTypes.UpdateCartItem,
  payload: item,
});

export const RemoveItemFromCart = (itemId) => ({
  type: ActionTypes.RemoveItemFromCart,
  payload: itemId,
});

export const SaveCartToDB = (userId, cartItems) => {
  return (dispatchEvent) => {
    axios
      .post("/cart/", { userId, cartItems })
      .then((response) => {
        // console.log("Save cart to db", response.data);
        return;
      })
      .catch((error) => {
        console.error("Error getting products from db:", error);
      });
  };
};

export const GetCartFromDB = (userId) => {
  return (dispatchEvent) => {
    axios
      .get(`/cart/${userId}`)
      .then((response) => {
        dispatchEvent(ClearCartStoreItems());
        const { cartItems } = response.data;
        cartItems.forEach((cartItem) => {
          dispatchEvent(AddCartItemToStore(cartItem));
        });
      })
      .catch((error) => {
        console.error("Error getting products from db:", error);
      });
  };
};
