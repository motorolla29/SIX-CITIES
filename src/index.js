import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { OFFERS_DATA } from "./mocks/offers";
import { REVIEWS_DATA } from "./mocks/reviews";

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(<App ads={OFFERS_DATA} reviews={REVIEWS_DATA} />);
