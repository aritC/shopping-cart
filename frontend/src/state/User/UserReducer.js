import * as ActionTypes from "../actionTypes";

const InitialState = {
  User: {
    _id: "",
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    address: "",
  },
};
let userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.AddUserToStore:
      return { ...state, User: action.payload };
    case ActionTypes.LogoutUser:
      return { ...state, User: action.payload };
    default:
      return state;
  }
};

export default userReducer;
