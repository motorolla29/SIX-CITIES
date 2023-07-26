import React from "react";
import { connect } from "react-redux";
import { arrayOf, func, string } from "prop-types";
import { sortByKey } from "../../util.js";
import { ActionCreator } from "../../store/action.js";
import { adPropTypes } from "../../propTypes/ad.js";
import { CardListNames, componentVariants } from "./settings.js";
import Card from "../card/card.jsx";

function CardList({
  ads,
  variant = CardListNames.MAIN_PAGE,
  changeFocusedAdId,
}) {
  const { listClassNameMod } = componentVariants[variant];

  return (
    <div className={`${listClassNameMod} places__list`}>
      {ads.map((it) => (
        <Card
          key={it.id}
          data={it}
          variant={variant}
          onMouseEnter={() => changeFocusedAdId(it.id)}
          onMouseLeave={() => changeFocusedAdId(null)}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
  variant: string,
  changeFocusedAdId: func,
};

const mapStateToProps = (state, ownProps) => ({
  ads: sortByKey(ownProps.ads, state.adSortingType),
});

const mapDispatchToProps = (dispatch) => ({
  changeFocusedAdId(newId) {
    dispatch(ActionCreator.changeFocusedAdId(newId));
  },
});

export { CardList };
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
