import React from "react";
import { arrayOf } from "prop-types";
import { connect } from "react-redux";
import { adPropTypes } from "../../../propTypes/ad.js";

import FavouritesEmpty from "../../favourites-empty/favourites-empty.jsx";
import Header from "../../header/header";
import FavoritesList from "../../favourites-list/favourites-list.jsx";
import Footer from "../../footer/footer.jsx";

function FavoritesPage({ ads }) {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section
            className={`favorites ${!ads.length ? "favorites--empty" : ""}`}
          >
            {ads.length ? (
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesList ads={ads} />
              </>
            ) : (
              <FavouritesEmpty />
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

FavoritesPage.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
};

const mapStateToProps = ({ ads }) => ({
  ads: ads.filter((it) => it.isFavourite),
});

export { FavoritesPage };
export default connect(mapStateToProps)(FavoritesPage);
