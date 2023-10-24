import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  favoriteAdsAreLoaded,
  getFavoriteAds,
} from "../../../store/data/selectors.js";
import { fetchFavoriteAds } from "../../../api/api-actions.js";
import { setFavoriteAdsAreLoaded } from "../../../store/action.js";
import FavoritesListEmpty from "../../favorites-empty/favorites-empty.jsx";
import Header from "../../header/header";
import FavoritesList from "../../favorites-list/favorites-list.jsx";
import Footer from "../../footer/footer.jsx";
import LoadWrapper from "../../load-wrapper/load-wrapper.jsx";

function FavoritesPage() {
  const dispatch = useDispatch();
  const ads = useSelector(getFavoriteAds);
  const adsAreLoaded = useSelector(favoriteAdsAreLoaded);

  useEffect(() => {
    dispatch(fetchFavoriteAds());

    return dispatch(setFavoriteAdsAreLoaded(false));
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section
            className={`favorites ${!ads.length ? "favorites--empty" : ""}`}
          >
            <LoadWrapper isLoad={adsAreLoaded}>
              {!ads.length ? (
                <FavoritesListEmpty />
              ) : (
                <FavoritesList ads={ads} />
              )}
            </LoadWrapper>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
