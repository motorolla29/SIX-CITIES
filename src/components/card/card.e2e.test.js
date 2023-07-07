import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card";
import { OFFERS_DATA } from "../../mocks/offers";

Enzyme.configure({ adapter: new Adapter() });

it("Hovering over the offer card works correctly", () => {
  const offer = OFFERS_DATA[3];
  let stateActiveCard = null;
  const card = shallow(
    <Card
      key={offer.id}
      offer={offer}
      onMouseEnter={() => (stateActiveCard = offer)}
      onMouseLeave={() => (stateActiveCard = null)}
    />
  );

  card.simulate("mouseenter");

  expect(stateActiveCard).toEqual(offer);

  card.simulate("mouseleave");

  expect(stateActiveCard).toEqual(null);
});
