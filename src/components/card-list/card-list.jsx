import React, { useState } from "react";
import { arrayOf, object } from "prop-types";
import Card from "../card/card";

const CardList = ({ offersData }) => {
  const [activeOffer, setActiveOffer] = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersData.map((item) => (
        <Card
          key={item.id}
          offer={item}
          onMouseEnter={() => setActiveOffer(item)}
          onMouseLeave={() => setActiveOffer(null)}
        />
      ))}
    </div>
  );
};

CardList.propTypes = {
  offersData: arrayOf(object).isRequired,
};

export default CardList;
