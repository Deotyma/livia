import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {

  it("Header exixts", () => {
    expect(() => render(<Header />)).not.toThrow();
  });

  it("displays the main title", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", { name: /orientation/i })
    ).toBeInTheDocument();
  });

  it("displays the logo image", () => {
    render(<Header />);

    const logo = screen.getByAltText(/logo livia/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src");
  });

});
