import React from "react";
import ReactDOM from "react-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { setAuthStatus } from "./api/api-actions.js";
import { createApi } from "./api/api.js";
import App from "./components/app/app";
import { reducer } from "./store/reducer";
import redirect from "./store/middlewares/redirect.js";

const api = createApi();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
  )
);

store.dispatch(setAuthStatus());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
