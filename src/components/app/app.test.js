import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import { OFFERS_DATA } from "../../mocks/offers";

it("App correctly renders after relaunch", () => {
  const tree = renderer.create(<App offersData={OFFERS_DATA} />).toJSON();

  expect(tree).toMatchSnapshot();
});
