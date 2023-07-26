import React from "react";
import { arrayOf } from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const.js";
import { adPropTypes } from "../../propTypes/ad.js";
import { reviewPropTypes } from "../../propTypes/review.js";
import { OFFERS_NEAR_DATA } from "../../mocks/offers-near.js";
import MainPage from "../pages/main-page/main-page";
import LoginPage from "../pages/login-page/login-page.jsx";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";
import NotFoundPage from "../pages/not-found-page/not-found-page.jsx";
import OfferPage from "../pages/offer-page/offer-page.jsx";

const App = ({ ads, reviews }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage />} exact />

        <Route path={AppRoute.LOGIN} element={<LoginPage />} exact />

        <Route
          path={AppRoute.FAVORITES}
          element={<FavoritesPage ads={ads} />}
          exact
        />

        <Route
          path={AppRoute.OFFER}
          element={
            <OfferPage
              ad={ads[1]}
              reviews={reviews}
              adsNear={OFFERS_NEAR_DATA}
            />
          }
          exact
        />

        <Route element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

App.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
  reviews: arrayOf(reviewPropTypes),
};

export default App;
