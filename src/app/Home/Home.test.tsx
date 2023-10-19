let fetchedPodcasts = { data: {}, loading: null };
jest.mock("../../services/useFetch.ts", () => ({
  useFetch: () => {
    return fetchedPodcasts;
  },
}));

import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";

import Home from "../page";

describe("HOME", () => {
  test("dashboard should render <main> tag", () => {
    const view = render(<Home />);

    // main it's rendered on Dashboard component
    const main = view.container.querySelector("main");
    // console.log(prettyDOM(li as HTMLElement));
    expect(main).toBeInTheDocument();
  });
});
