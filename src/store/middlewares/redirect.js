import browserHistory from "../../services/browser-history";

const redirect = (store) => (next) => (action) => {
  if (action.type === "REDIRECT_TO") {
    browserHistory.push(action.payload);
  }

  return next(action);
};

export default redirect;
