import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";
import Home from "../page";

type useFetchResponse = {
  data: object | undefined | null;
  loading: null | boolean;
};

let fetchedPodcasts: useFetchResponse = { data: {}, loading: null };

// since I want to test the use case of what would happen if X and Y when fetching data PLUS
// avoiding actually fetching, the unit test it's done based on a mock, to check all behaviours
jest.mock("../../services/useFetch.ts", () => ({
  useFetch: jest.fn(() => {
    return fetchedPodcasts;
  }),
}));

describe("HOME", () => {
  test("should render <main> tag, owned by Dashboard component", () => {
    const view = render(<Home />);

    // main it's rendered on Dashboard component
    const main = view.container.querySelector("main");

    // console.log(prettyDOM(li as HTMLElement));
    expect(main).toBeInTheDocument();
  });

  test("should render loading if the data still fetching", () => {
    fetchedPodcasts.loading = true;
    const view = render(<Home />);

    expect(view.container.querySelector("span")).toBeInTheDocument();
  });

  test("should NOT render loading when data has been fetched", () => {
    fetchedPodcasts.loading = false;
    const view = render(<Home />);

    expect(view.container.querySelector("span")).toBeNull();
  });
});
