import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./assets/css/index.css";
import "react-toastify/dist/ReactToastify.min.css";

import App from "./pages/App";

import { configureStore } from "./store/configureStore";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import { saveState } from "./localStorage";

import { throttle } from "lodash/throttle";

const store = configureStore();
store.subscribe(() => {
  saveState({
    user: store.getState().user,
    resume: store.getState().resume,
    favoritejob: store.getState().favoritejob
  });
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
