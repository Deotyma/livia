import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ChallengeDetail from "./ChallengeDetail";

function renderPage() {
  render(
    <MemoryRouter initialEntries={["/challenges/diagnostique_besoins"]}>
      <Routes>
        <Route path="/challenges/:id" element={<ChallengeDetail />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("ChallengeDetail page", () => {

  it("page ChallengeDetail exists", () => {
    expect(() => renderPage()).not.toThrow();
  });

  it("displays the challenge title", () => {
    renderPage();

    expect(
      screen.getByRole("heading", { name: /Diagnostique tes besoins/i })
    ).toBeInTheDocument();
  });

  it("displays the challenge duration", () => {
    renderPage();

    expect(
      screen.getByText(/5-10 min/i)
    ).toBeInTheDocument();
  });

  it("displays the Descriptif section", () => {
    renderPage();

    expect(
      screen.getByText(/Descriptif/i)
    ).toBeInTheDocument();
  });

  it("displays the Avant de te lancer section", () => {
    renderPage();

    expect(
      screen.getByText(/Avant de te lancer/i)
    ).toBeInTheDocument();
  });

  it("displays the Pré-requis section", () => {
    renderPage();

    expect(
      screen.getByText(/Pré-requis/i)
    ).toBeInTheDocument();
  });

  it("displays the main action button", () => {
    renderPage();

    expect(
      screen.getByRole("button", { name: /Parler avec Liv\.ia/i })
    ).toBeInTheDocument();
  });

  it("has a link to go back to the home page", () => {
    renderPage();

    expect(
      screen.getByRole("link", { name: /Retour à la liste/i })
    ).toHaveAttribute("href", "/");
  });

});

