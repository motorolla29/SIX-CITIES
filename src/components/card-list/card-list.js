import React from "react";
import { arrayOf, shape, string, number } from "prop-types";
import Card from "../card/card";

const CardList = ({ data }) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {data.map(({ id, title }) => (
        <Card key={id} title={title} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  data: arrayOf(
    shape({
      title: string.isRequired,
      id: number,
    })
  ).isRequired,
};

export default CardList;
