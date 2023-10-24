import React from "react";
import { arrayOf } from "prop-types";
import { adPropTypes } from "../../propTypes/ad.js";
import FavoritesCard from "../favorites-card/favorites-card.jsx";

function FavoritePlacesList({ places }) {
  return (
    <div className="favorites__places">
      {places.map((it) => (
        <FavoritesCard key={it.id} data={it} />
      ))}
    </div>
  );
}

FavoritePlacesList.propTypes = {
  places: arrayOf(adPropTypes),
};

export default FavoritePlacesList;
