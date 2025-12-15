import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home page", () => {

  it("Home page exists", () => {
    expect(() =>
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      )
    ).not.toThrow();
  });

  it("text from Home page exists", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Ceci est la page home/i)
    ).toBeInTheDocument();
  });

});
