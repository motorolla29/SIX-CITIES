import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { arrayOf } from "prop-types";

import { AppRoute } from "../../const.js";
import FavoritePlacesList from "../favorite-places-list/favorite-places-list.jsx";
import { changeCity } from "../../store/action.js";
import { adPropTypes } from "../../propTypes/ad.js";
import { getAdsByCityObj } from "../../util.js";
function FavoritesList({ ads }) {
  const dispatch = useDispatch();
  const adsObj = getAdsByCityObj(ads);
  return (
    <ul className="favorites__list">
      {Object.entries(adsObj).map(([key, value]) => (
        <li key={key} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                onClick={({ target }) =>
                  dispatch(changeCity(target.textContent))
                }
                to={AppRoute.ROOT}
              >
                <span>{key}</span>
              </Link>
            </div>
          </div>
          <FavoritePlacesList places={value} />
        </li>
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  ads: arrayOf(adPropTypes),
};

export default FavoritesList;
