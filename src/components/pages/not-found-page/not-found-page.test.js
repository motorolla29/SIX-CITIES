import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import NotFoundPage from "./not-found-page";

describe("Component: NotFoundPage", () => {
  it("should render correctly", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <NotFoundPage />
      </Router>
    );

    const contentElement = getByText("404. Page not found");
    const linkElement = getByText("Go to main page");

    expect(contentElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
