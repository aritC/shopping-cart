import React from "react";

import AddNewProduct from "../components/Products/AddProduct/AddProduct";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import Login from "../components/User/Login/Login";
import AddUser from "../components/User/AddUser/AddUser";
import Checkout from "../components/Checkout/Checkout";

const navRoutes = [
  { url: "/cart", name: "Cart", component: <Cart />, isNavItem: true },
  { url: "/", name: "Product", component: <Products />, isNavItem: false },
  { url: "/login", name: "Login", component: <Login />, isNavItem: false },
  {
    url: "/profile",
    name: "User Profile",
    component: <Login />,
    isNavItem: false,
  },
  {
    url: "/checkout",
    name: "Checkout",
    component: <Checkout />,
    isNavItem: false,
  },
  {
    url: "/admin/addProduct",
    name: "AddNewProduct",
    component: <AddNewProduct />,
    isNavItem: false,
  },
  {
    url: "/admin/addUser",
    name: "AddNewUser",
    component: <AddUser />,
    isNavItem: false,
  },
];

export default navRoutes;
