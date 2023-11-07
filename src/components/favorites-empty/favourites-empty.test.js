import React from "react";
import { render } from "@testing-library/react";

import FavoritesEmpty from "./favorites-empty";

describe("Component: FavoritesEmpty", () => {
  it("should render correctly", () => {
    const { getByText } = render(<FavoritesEmpty />);

    const contentElement = getByText("Nothing yet saved.");

    expect(contentElement).toBeInTheDocument();
  });
});
