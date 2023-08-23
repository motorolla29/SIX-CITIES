import React from "react";
import ReactDOM from "react-dom/client";

import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createApi } from "./api/api.js";

import App from "./components/app/app";
import { reducer } from "./store/reducer";
import { REVIEWS_DATA } from "./mocks/reviews";
import { fetchOffers } from "./api/api-actions.js";

const api = createApi();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(fetchOffers());

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
  <Provider store={store}>
    <App reviews={REVIEWS_DATA} />
  </Provider>
);
