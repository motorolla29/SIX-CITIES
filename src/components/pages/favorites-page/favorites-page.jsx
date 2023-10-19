import React from "react";
import { arrayOf, objectOf } from "prop-types";
import { useSelector } from "react-redux";

import { getFavouriteAdsByCityObj } from "../../../store/data/selectors.js";
import FavouritesListEmpty from "../../favourites-empty/favourites-empty.jsx";
import Header from "../../header/header";
import FavoritesList from "../../favourites-list/favourites-list.jsx";
import Footer from "../../footer/footer.jsx";

function FavoritesPage() {
  const adsObj = useSelector(getFavouriteAdsByCityObj);
  const isEmpty = !Object.keys(adsObj).length;
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className={`favorites ${isEmpty ? "favorites--empty" : ""}`}>
            {isEmpty ? (
              <FavouritesListEmpty />
            ) : (
              <FavoritesList adsObj={adsObj} />
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
