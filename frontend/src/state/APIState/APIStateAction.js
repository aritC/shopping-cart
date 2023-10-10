import * as ActionTypes from "../actionTypes";

export const APIisLoading = (apiName, status) => {
  return {
    type: ActionTypes.APIisLoading,
    payload: apiName,
  };
};

export const APIisError = (apiName) => {
  return {
    type: ActionTypes.APIisError,
    payload: apiName,
  };
};

export const APIisSuccess = (apiName) => {
  return {
    type: ActionTypes.APIisSuccess,
    payload: apiName,
  };
};
