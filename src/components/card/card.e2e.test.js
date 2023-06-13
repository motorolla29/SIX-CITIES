import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card";
import { OFFERS_DATA } from "../../mocks/offers";

Enzyme.configure({ adapter: new Adapter() });

it("Hovering over the offer card works correctly", () => {
  const offer = OFFERS_DATA[3];
  let stateActiveCardId = null;
  const card = shallow(
    <Card
      key={offer.id}
      offer={offer}
      onMouseEnter={() => (stateActiveCardId = offer.id)}
      onMouseLeave={() => (stateActiveCardId = null)}
    />
  );

  card.simulate("mouseenter");

  expect(stateActiveCardId).toEqual(offer.id);

  card.simulate("mouseleave");

  expect(stateActiveCardId).toEqual(null);
});
