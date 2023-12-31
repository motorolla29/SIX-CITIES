import React from "react";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import CityPlaces from "./city-places";
import { getPluralNoun } from "../../util";

const ADS = [
  {
    id: 1,
    city: "Paris",
    title: "Wood and stone place",
    descriptions: ["This building is green and from 18th century."],
    photos: {
      main: "https://picsum.photos/260/199",
      all: [
        "https://picsum.photos/260/201",
        "https://picsum.photos/260/202",
        "https://picsum.photos/260/203",
        "https://picsum.photos/260/204",
      ],
    },
    price: 220,
    rating: 2.1,
    offerType: "Single Room",
    isPremium: false,
    isFavorite: true,
    bedroomsAmount: 1,
    capacity: 9,
    features: ["Towels"],
    address: { lat: 52.369553943508, lng: 4.85309666406198 },
    host: {
      name: "Oleg",
      userPic: "https://www.placecage.com/75/75",
      isPro: true,
    },
  },
  {
    id: 2,
    city: "Cologne",
    title: "Nice, cozy, warm big bed house",
    descriptions: ["You will love it !"],
    photos: {
      main: "https://picsum.photos/260/198",
      all: ["https://picsum.photos/260/201", "https://picsum.photos/260/202"],
    },
    price: 400,
    rating: 4.7,
    offerType: "House",
    isPremium: false,
    isFavorite: true,
    bedroomsAmount: 6,
    capacity: 13,
    features: [
      "Washing machine",
      "Towels",
      "Baby seat",
      "Kitchen",
      "Dishwasher",
      "Cabel TV",
      "Fridge",
      "Wi-Fi",
    ],
    address: { lat: 52.3909553943508, lng: 4.929309666406198 },
    host: {
      name: "Paul",
      userPic: "https://www.placecage.com/75/75",
      isPro: true,
    },
  },
];

const mockStore = configureStore();

describe("Component: CityPlaces", () => {
  it("should render correctly", () => {
    const store = mockStore({ UI: { adSortingType: null } });
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <CityPlaces ads={ADS} activeCity={ADS[0].city} />
        </Router>
      </Provider>
    );

    expect(
      screen.getByText(
        `${ADS.length} ${getPluralNoun(ADS.length, "place")} to stay in ${
          ADS[0].city
        }`
      )
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("list-card")).toHaveLength(ADS.length);
  });
});
