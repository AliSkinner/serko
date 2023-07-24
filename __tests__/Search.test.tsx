import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Search } from "@/app/Search";
import mockRouter from "next-router-mock";

describe("Search", () => {
  test("Renders with a placeholder", () => {
    render(<Search />);

    const input = screen.getByPlaceholderText(
      "Search for movies, TV shows or people"
    );

    expect(input).toBeInTheDocument();
  });

  test("User can initiate a search by clicking the search button", async () => {
    const user = userEvent.setup();

    render(<Search />);

    const input = screen.getByPlaceholderText(
      "Search for movies, TV shows or people"
    );

    await user.type(input, "Black mirror");

    const searchButton = screen.getByRole("button", { name: /search/i });

    await user.click(searchButton);

    expect(mockRouter).toMatchObject({
      asPath: "/search?q=Black+mirror",
      pathname: "/search",
      query: {
        q: "Black mirror",
      },
    });
  });

  test("User can initiate a search by pressing enter", async () => {
    const user = userEvent.setup();

    render(<Search />);

    const input = screen.getByPlaceholderText(
      "Search for movies, TV shows or people"
    );

    await user.type(input, "Black mirror{enter}");

    expect(mockRouter).toMatchObject({
      asPath: "/search?q=Black+mirror",
      pathname: "/search",
      query: {
        q: "Black mirror",
      },
    });
  });

  test.skip("User can not initiate a search with no search parameters", async () => {
    const user = userEvent.setup();

    render(<Search />);

    const input = screen.getByPlaceholderText(
      "Search for movies, TV shows or people"
    );

    const searchButton = screen.getByRole("button", { name: /search/i });

    await user.click(searchButton);

    expect(mockRouter).toMatchObject({
      asPath: "/",
      pathname: "/",
      query: {},
    });
  });
});
