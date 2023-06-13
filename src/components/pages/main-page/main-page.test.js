import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page";
import { OFFERS_DATA } from "../../../mocks/offers";

it("Main page correctly renders after relaunch", () => {
  const tree = renderer.create(<MainPage offersData={OFFERS_DATA} />).toJSON();

  expect(tree).toMatchSnapshot();
});
