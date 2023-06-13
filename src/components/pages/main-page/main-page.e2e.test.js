import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainPage from "./main-page";
import { OFFERS_DATA } from "../../../mocks/offers";

Enzyme.configure({ adapter: new Adapter() });

it("Main page correctly renders after relaunch", () => {
  const clickHandler = jest.fn();
  const mainPage = shallow(
    <MainPage offersData={OFFERS_DATA} onCityLinkClick={clickHandler} />
  );

  const titleLink = mainPage.find(".tabs__item").at(0);

  titleLink.simulate("click");

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
