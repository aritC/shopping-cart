import * as ActionTypes from "../actionTypes";

const InitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  apiName: "",
};

let apiReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.APIisLoading:
      return { ...state, isLoading: true, apiName: action.payload };
    default:
      return state;
  }
};

export default apiReducer;
