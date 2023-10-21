import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";

import Dashboard from "./Dashboard";
import PodcastList from "../PodcastList/PodcastList";

describe("DASHBOARD", () => {
  test("dashboard should render a list with li", () => {
    const view = render(
      <Dashboard loading={false}>
        <PodcastList podcasts={[]} />
      </Dashboard>
    );

    const li = view.container.querySelector("li");
    // console.log(prettyDOM(li as HTMLElement));
    expect(li).toBeInTheDocument();

    const text = view.getAllByText(/JAJAJ/i);

    // console.log(prettyDOM(text[0]));
    expect(text).toHaveLength(5);
  });
});
