import React from "react";
import renderer from "react-test-renderer";
import CardList from "./card-list";
import { OFFERS_DATA } from "../../mocks/offers";

it("Card list correctly renders after relaunch", () => {
  const tree = renderer.create(<CardList offersData={OFFERS_DATA} />).toJSON();

  expect(tree).toMatchSnapshot();
});
