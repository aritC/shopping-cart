import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NotFound from "./components/404/404";

import "./app.css";

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between mb-5">
        <a className="navbar-brand" href="/">
          Shopping Cart App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div className="container border border-danger bg-light">
        <Router>
          <Suspense fallback={<h1 className="text-danger">Loading....</h1>} />
          <Routes>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
