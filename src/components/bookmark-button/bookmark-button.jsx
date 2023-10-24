import React from "react";
import { useDispatch } from "react-redux";
import { bool, number, string } from "prop-types";

import { BookmarkNames, componentVariants } from "./settings.js";
import { setIsFavoriteAd } from "../../api/api-actions.js";

function BookmarkButton({ isFavorite, adId, variant = BookmarkNames.LISTING }) {
  const {
    buttonClassname,
    buttonActiveModClassname,
    svgClassname,
    svgWidth,
    svgHeight,
  } = componentVariants[variant];
  const dispatch = useDispatch();

  const handleFavoriteButtonClick = () => {
    dispatch(setIsFavoriteAd(adId, !isFavorite));
  };

  return (
    <button
      className={`button ${buttonClassname} ${
        isFavorite ? buttonClassname + buttonActiveModClassname : ""
      }`}
      type="button"
      onClick={handleFavoriteButtonClick}
      title={`${isFavorite ? "Remove from" : "Add to"} favorites`}
    >
      <svg className={svgClassname} width={svgWidth} height={svgHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

BookmarkButton.propTypes = {
  isFavorite: bool.isRequired,
  adId: number.isRequired,
  variant: string,
};

export default BookmarkButton;
