import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./assets/css/index.css";
import "react-toastify/dist/ReactToastify.min.css"

import App from "./containers/App";

import { configureStore } from "./store/configureStore";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
