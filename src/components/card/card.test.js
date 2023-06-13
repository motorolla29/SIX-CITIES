import React from "react";
import renderer from "react-test-renderer";
import Card from "./card";
import { OFFERS_DATA } from "../../mocks/offers";

const offer = OFFERS_DATA[0];

it("Card correctly renders after relaunch", () => {
  const tree = renderer
    .create(
      <Card
        key={offer.id}
        offer={offer}
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
