import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./app.css";
import NotFound from "./components/404/404";
import NavBar from "./components/Navbar/NavBar";
import navRoutes from "./routes/routes";

const App = () => {
  const user = useSelector((store) => store.userReducer.User);
  return (
    <Router>
      <NavBar navItems={navRoutes} />
      <Suspense fallback={<h1 className="text-danger">Loading....</h1>}>
        <Routes>
          {navRoutes
            .filter((navRoute) => {
              if (navRoute.isAdminRoute && user.userName === "admin") {
                return navRoute;
              } else if (!navRoute.isAdminRoute) {
                return navRoute;
              }
            })
            .map((navItem, idx) => {
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
      </Suspense>
    </Router>
  );
};

export default App;
