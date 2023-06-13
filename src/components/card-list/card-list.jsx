import React, { useState } from "react";
import { arrayOf, shape, string, number, object } from "prop-types";
import Card from "../card/card";

const CardList = ({ offersData }) => {
  const [activeOffer, setActiveOffer] = useState({ activeOfferId: null });

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersData.map((item) => (
        <Card
          key={item.id}
          offer={item}
          onMouseEnter={() => setActiveOffer({ activeOfferId: item.id })}
          onMouseLeave={() => setActiveOffer({ activeOfferId: null })}
        />
      ))}
    </div>
  );
};

CardList.propTypes = {
  offersData: arrayOf(object).isRequired,
};

export default CardList;
