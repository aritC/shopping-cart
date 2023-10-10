import * as ActionTypes from "../actionTypes";
import axios from "../../../config/axios.config";
import { GetCartFromDB } from "../Cart/CartAction";
import { useNavigate } from "react-router-dom";

export const AddUserToStore = (user) => {
  return {
    type: ActionTypes.AddUserToStore,
    payload: user,
  };
};

export const AddUserToDB = (user) => {
  return (dispatchEvent) => {
    axios
      .post("/user/signup", { ...user })
      .then((response) => {
        dispatchEvent(AddUserToStore(response.data.user));
      })
      .catch((error) => {
        console.log("Error adding user:", error);
      });
  };
};

export const LoginUser = (userName, password, navigate) => {
  return (dispatchEvent) => {
    axios
      .post("/user/login", { userName, password })
      .then((response) => {
        const { user } = response.data;
        navigate("/");
        dispatchEvent(AddUserToStore(user));
        dispatchEvent(GetCartFromDB(user._id));
      })
      .catch((error) => {
        console.log("Error adding user:", error);
      });
  };
};

export const LogoutUser = () => {
  return {
    type: ActionTypes.AddUserToStore,
    payload: {
      _id: "",
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      address: "",
    },
  };
};
