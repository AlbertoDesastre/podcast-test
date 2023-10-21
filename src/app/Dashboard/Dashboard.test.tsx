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

  test("dashboard should render a loader when 'loading' = true", () => {
    const view = render(
      <Dashboard loading={true}>
        <PodcastList podcasts={[]} />
      </Dashboard>
    );

    const span = view.container.querySelector("span");
    // console.log(prettyDOM(li as HTMLElement));
    expect(span).toBeInTheDocument();
  });

  test("dashboard should NOT render a loader when 'loading' = false", () => {
    const view = render(
      <Dashboard loading={false}>
        <PodcastList podcasts={[]} />
      </Dashboard>
    );

    const span = view.container.querySelector("span");
    // console.log(prettyDOM(li as HTMLElement));
    expect(span).toBeNull();
  });
});
