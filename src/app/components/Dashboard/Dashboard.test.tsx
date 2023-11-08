import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";

import Dashboard from "./Dashboard";
import PodcastOverview from "../PodcastOverview/PodcastOverview";

describe("DASHBOARD", () => {
  test("dashboard should render a section owned by <PodcastList>", () => {
    const view = render(
      <Dashboard loading={false}>
        <PodcastOverview podcasts={[]} />
      </Dashboard>
    );
    //console.log(prettyDOM(view.container));

    const section = view.container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  test("dashboard should render a loader when 'loading' = true", () => {
    const view = render(
      <Dashboard loading={true}>
        <PodcastOverview podcasts={[]} />
      </Dashboard>
    );

    const span = view.container.querySelector("span");
    // console.log(prettyDOM(li as HTMLElement));
    expect(span).toBeInTheDocument();
  });

  test("dashboard should NOT render a loader when 'loading' = false", () => {
    const view = render(
      <Dashboard loading={false}>
        <PodcastOverview podcasts={[]} />
      </Dashboard>
    );

    const span = view.container.querySelector("span");
    // console.log(prettyDOM(li as HTMLElement));
    expect(span).toBeNull();
  });

  // NOTE TO SELFIMPROVEMENT --> Another great test would be to know if Dashboard renders loading and at the same
  // time it's rendering it's children.
});
