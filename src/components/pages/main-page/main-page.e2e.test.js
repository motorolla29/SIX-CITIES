import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainPage from "./main-page";

Enzyme.configure({ adapter: new Adapter() });

it("Main page correctly renders after relaunch", () => {
  const clickHandler = jest.fn();
  const mainPage = shallow(
    <MainPage
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
      onCityLinkClick={clickHandler}
    />
  );

  const titleLink = mainPage.find(".tabs__item").at(0);

  titleLink.simulate("click");

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
