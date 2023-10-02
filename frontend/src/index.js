import React from "react";
import * as ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./state/store";

import App from "./app/app";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
