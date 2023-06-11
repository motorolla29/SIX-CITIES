import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";

const data = [
  {
    id: 1,
    title: "Beautiful & luxurious apartment at great location",
  },
  {
    id: 2,
    title: "Wood and stone place",
  },
  {
    id: 3,
    title: "Canal View Prinsengracht",
  },
  {
    id: 4,
    title: "Nice, cozy, warm big bed apartment",
  },
  {
    id: 5,
    title: "Wood and stone place",
  },
];

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(<App data={data} />);
