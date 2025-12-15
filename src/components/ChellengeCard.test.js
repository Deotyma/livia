import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ChallengeCard from "./ChallengeCard";

const mockChallenge = {
  id: "diagnostique_besoins",
  title: "Diagnostique tes besoins",
  duration: "5-10 min",
  description: "Renseigne tes besoins avant de prendre rendez-vous.",
};

describe("ChallengeCard component", () => {

  it("renders without crashing", () => {
    expect(() =>
      render(
        <MemoryRouter>
          <ChallengeCard challenge={mockChallenge} />
        </MemoryRouter>
      )
    ).not.toThrow();
  });

  it("displays challenge title", () => {
    render(
      <MemoryRouter>
        <ChallengeCard challenge={mockChallenge} />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Diagnostique tes besoins/i)
    ).toBeInTheDocument();
  });

  it("displays challenge duration", () => {
    render(
      <MemoryRouter>
        <ChallengeCard challenge={mockChallenge} />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/5-10 min/i)
    ).toBeInTheDocument();
  });

  it("links to the challenge detail page", () => {
    render(
      <MemoryRouter>
        <ChallengeCard challenge={mockChallenge} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      `/challenges/${mockChallenge.id}`
    );
  });

});
