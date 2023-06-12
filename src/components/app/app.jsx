import React from "react";
import { arrayOf, object } from "prop-types";
import MainPage from "../pages/main-page/main-page";

const App = ({ data }) => {
  return <MainPage data={data} onCityLinkClick={() => {}} />;
};

App.propTypes = {
  data: arrayOf(object).isRequired,
};

export default App;
