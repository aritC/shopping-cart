import React from "react";

import AddNewProduct from "../components/Products/AddProduct/AddProduct";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import Login from "../components/User/Login/Login";
import AddUser from "../components/User/AddUser/AddUser";
import Checkout from "../components/Checkout/Checkout";
import Coupon from "../components/Coupon/Coupon";
import UserProfile from "../components/User/UserProfile/UserProfile";

const navRoutes = [
  {
    url: "/cart",
    name: "Cart",
    component: <Cart />,
    isNavItem: true,
    isAdminRoute: false,
  },
  {
    url: "/coupon",
    name: "Coupon",
    component: <Coupon />,
    isNavItem: true,
    isAdminRoute: false,
  },
  {
    url: "/",
    name: "Product",
    component: <Products />,
    isNavItem: false,
    isAdminRoute: false,
  },
  {
    url: "/login",
    name: "Login",
    component: <Login />,
    isNavItem: false,
    isAdminRoute: false,
  },
  {
    url: "/profile",
    name: "User Profile",
    component: <UserProfile />,
    isNavItem: false,
    isAdminRoute: false,
  },
  {
    url: "/checkout",
    name: "Checkout",
    component: <Checkout />,
    isNavItem: false,
    isAdminRoute: false,
  },
  {
    url: "/admin/addProduct",
    name: "Add Product",
    component: <AddNewProduct />,
    isNavItem: true,
    isAdminRoute: true,
  },
  {
    url: "/admin/addUser",
    name: "Add User",
    component: <AddUser />,
    isNavItem: true,
    isAdminRoute: true,
  },
];

export default navRoutes;
