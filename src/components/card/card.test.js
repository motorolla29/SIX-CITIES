import React from "react";
import renderer from "react-test-renderer";
import Card from "./card";

it("Card correctly renders after relaunch", () => {
  const tree = renderer.create(<Card title={"some_string"} />).toJSON();

  expect(tree).toMatchSnapshot();
});
