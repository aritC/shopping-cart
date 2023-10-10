import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./app.css";
import NotFound from "./components/404/404";
import NavBar from "./components/Navbar/NavBar";
import navRoutes from "./routes/routes";

const App = () => {
  return (
    <Router>
      <NavBar navItems={navRoutes} />
      <Suspense fallback={<h1 className="text-danger">Loading....</h1>}>
        <Routes>
          {navRoutes.map((navItem, idx) => {
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
