import * as ActionTypes from "../actionTypes";

const InitialState = {
  cartItems: [],
  cartLength: 0,
  cartTotal: 0,
};

const addItemToStoreReducer = (state, action) => {
  let existingItem = state.cartItems.find(
    (item) => item._id === action.payload._id
  );

  if (existingItem) {
    let updatedCartItems = state.cartItems.map((item) => {
      return item._id === action.payload._id
        ? { ...item, quantity: item.quantity + action.payload.quantity }
        : item;
    });
    let updatedCartTotal = updatedCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return {
      ...state,
      cartItems: updatedCartItems,
      cartTotal: updatedCartTotal,
    };
  } else {
    let newCartItems = [...state.cartItems, action.payload];
    let newCartTotal = newCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return {
      ...state,
      cartItems: newCartItems,
      cartLength: state.cartLength + 1,
      cartTotal: newCartTotal,
    };
  }
};

const updateCartItemReducer = (state, action) => {
  const updatedCartItems = state.cartItems.map((item) => {
    return item._id === action.payload._id ? action.payload : item;
  });
  const updatedCartTotal = updatedCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return {
    ...state,
    cartItems: updatedCartItems,
    cartTotal: updatedCartTotal,
  };
};

const removeCartItemReducer = (state, action) => {
  const filteredCartItems = state.cartItems.filter(
    (item) => item._id !== action.payload
  );
  const filteredCartTotal = filteredCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return {
    ...state,
    cartItems: filteredCartItems,
    cartLength: state.cartLength - 1,
    cartTotal: filteredCartTotal,
  };
};

const cartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.AddCartItemToStore:
      return addItemToStoreReducer(state, action);

    case ActionTypes.ClearCartStoreItems:
      return {
        ...state,
        cartItems: [],
        cartLength: 0,
        cartTotal: 0,
      };

    case ActionTypes.UpdateCartItem:
      return updateCartItemReducer(state, action);

    case ActionTypes.RemoveItemFromCart:
      return removeCartItemReducer(state, action);

    default:
      return state;
  }
};

export default cartReducer;
