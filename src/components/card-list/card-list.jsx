import React from "react";
import { arrayOf, string, func } from "prop-types";

import { adPropTypes } from "../../propTypes/ad.js";
import { CardListNames, componentVariants } from "./settings.js";
import Card from "../card/card.jsx";

function CardList({
  ads,
  variant = CardListNames.MAIN_PAGE,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) {
  const { listClassNameMod } = componentVariants[variant];

  return (
    <div className={`${listClassNameMod} places__list`}>
      {ads.map((it) => (
        <Card
          key={it.id}
          data={it}
          variant={variant}
          onMouseEnter={() => onMouseEnter(it.id)}
          onMouseLeave={() => onMouseLeave(null)}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
  variant: string,
  onMouseEnter: func,
  onMouseLeave: func,
};

export default CardList;
