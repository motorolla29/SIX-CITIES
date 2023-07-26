import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./components/app/app";
import { reducer } from "./store/reducer";
import { OFFERS_DATA } from "./mocks/offers";
import { REVIEWS_DATA } from "./mocks/reviews";

const store = configureStore({ reducer });

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
  <Provider store={store}>
    <App ads={OFFERS_DATA} reviews={REVIEWS_DATA} />
  </Provider>
);
