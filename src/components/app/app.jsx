import React from "react";
import { arrayOf, object } from "prop-types";
import MainPage from "../pages/main-page/main-page";

const App = ({ offersData }) => {
  return <MainPage offersData={offersData} onCityLinkClick={() => {}} />;
};

App.propTypes = {
  offersData: arrayOf(object).isRequired,
};

export default App;
