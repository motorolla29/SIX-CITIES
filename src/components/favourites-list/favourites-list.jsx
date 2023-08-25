import React from "react";
import { arrayOf, func, objectOf } from "prop-types";
import { adPropTypes } from "../../propTypes/ad.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import FavoritePlacesList from "../favourite-places-list/favourite-places-list.jsx";
import { ActionCreator } from "../../store/action.js";
function FavoritesList({ adsObj, changeCity }) {
  return (
    <ul className="favorites__list">
      {Object.entries(adsObj).map(([key, value]) => (
        <li key={key} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                onClick={({ target }) => changeCity(target.textContent)}
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
  adsObj: objectOf(arrayOf(adPropTypes)),
  changeCity: func,
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(newCity) {
    dispatch(ActionCreator.changeCity(newCity));
  },
});

export { FavoritesList };
export default connect(null, mapDispatchToProps)(FavoritesList);
