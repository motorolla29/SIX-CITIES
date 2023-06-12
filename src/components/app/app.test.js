import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it("App correctly renders after relaunch", () => {
  const tree = renderer
    .create(
      <App
        data={[
          {
            id: 1,
            title: "Beautiful & luxurious apartment at great location",
          },
          {
            id: 2,
            title: "Wood and stone place",
          },
          {
            id: 3,
            title: "Canal View Prinsengracht",
          },
          {
            id: 4,
            title: "Nice, cozy, warm big bed apartment",
          },
          {
            id: 5,
            title: "Wood and stone place",
          },
        ]}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
