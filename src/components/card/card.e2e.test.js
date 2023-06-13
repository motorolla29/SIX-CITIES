import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card";
import { OFFERS_DATA } from "../../mocks/offers";

Enzyme.configure({ adapter: new Adapter() });

it("Hovering over the offer card works correctly", () => {
  const offer = OFFERS_DATA[0];
  const mouseEnterHandler = jest.fn();
  const mouseLeaveHandler = jest.fn();

  const card = shallow(
    <Card
      key={offer.id}
      offer={offer}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    />
  );

  card.simulate("mouseenter");

  expect(mouseEnterHandler).toHaveBeenCalledTimes(1);

  card.simulate("mouseleave");

  expect(mouseLeaveHandler).toHaveBeenCalledTimes(1);
});
