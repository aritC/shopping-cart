import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./app.css";
import NotFound from "./components/404/404";
import NavBar from "./components/Navbar/NavBar";
import AddNewProduct from "./components/Products/AddProduct/AddProduct";
import Products from "./components/Products/Products";

const App = () => {
  let navItems = [
    { url: "/", name: "Product", component: <Products />, isNavItem: false },
    {
      url: "/admin/addProduct",
      name: "AddNewProduct",
      component: <AddNewProduct />,
      isNavItem: false,
    },
    { url: "/cart", name: "Cart", component: <NotFound />, isNavItem: true },
  ];

  return (
    <div>
      <NavBar navItems={navItems} />
      <div className="container border bg-light">
        <Router>
          <Suspense fallback={<h1 className="text-danger">Loading....</h1>} />
          <Routes>
            {navItems.map((navItem, idx) => {
              const timestamp = Date.now();
              return (
                <Route
                  path={navItem.url}
                  key={idx + timestamp}
                  element={navItem.component}
                />
              );
            })}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
