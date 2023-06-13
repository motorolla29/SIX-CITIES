import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { OFFERS_DATA } from "./mocks/offers";

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(<App offersData={OFFERS_DATA} />);
