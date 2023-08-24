import React from "react";
import { arrayOf } from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const.js";
import { reviewPropTypes } from "../../propTypes/review.js";
import { OFFERS_NEAR_DATA } from "../../mocks/offers-near.js";
import MainPage from "../pages/main-page/main-page";
import LoginPage from "../pages/login-page/login-page.jsx";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";
import NotFoundPage from "../pages/not-found-page/not-found-page.jsx";
import OfferPage from "../pages/offer-page/offer-page.jsx";
import PrivateRoute from "../private-route/private-route.jsx";

const App = ({ reviews }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage />} exact />

        <Route path={AppRoute.LOGIN} element={<LoginPage />} exact />

        <Route path="/" element={<PrivateRoute />} exact>
          <Route path="/" element={<FavoritesPage />} exact />
        </Route>

        <Route
          path={AppRoute.OFFER}
          element={<OfferPage reviews={reviews} adsNear={OFFERS_NEAR_DATA} />}
          exact
        />

        <Route element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: arrayOf(reviewPropTypes),
};

export default App;
