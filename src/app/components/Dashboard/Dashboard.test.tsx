import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { prettyDOM, render, screen } from "@testing-library/react";

import Dashboard from "./Dashboard";
import PodcastOverview from "../PodcastOverview/PodcastOverview";
import PodcastList from "../PodcastList/PodcastList";
import { Podcast } from "@/services/getPodcasts";
import { podcastsTemplate } from "@/assets";

describe("DASHBOARD", () => {
  let mockPodcasts: Podcast[] = podcastsTemplate;

  test("should render loading if the data still fetching", () => {
    render(
      <Dashboard loading={true}>
        <PodcastOverview>
          <PodcastList podcasts={[]}></PodcastList>
        </PodcastOverview>
      </Dashboard>
    );

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("should NOT render loading when data has been fetched", () => {
    render(
      <Dashboard loading={false}>
        <PodcastOverview>
          <PodcastList podcasts={[]}></PodcastList>
        </PodcastOverview>
      </Dashboard>
    );

    expect(() => screen.getByTestId("loader")).toThrow();
  });

  test("should stay on the same route if it clicks the 'Podcaster'that has route '/' in it ", async () => {
    const user = userEvent.setup();

    render(
      <Dashboard loading={false}>
        <PodcastOverview>
          <PodcastList podcasts={mockPodcasts}></PodcastList>
        </PodcastOverview>
      </Dashboard>
    );

    // notice that the H1 that has "Podcaster" text gets treated as a "link" because of being wrapped inside a link
    const home = screen.getByRole("link", { name: "Podcaster" });
    expect(home).toBeInTheDocument();

    //mockPodcasts[0].title === "Rock Music Podcast"
    const podcast = screen.getByText(/Rock Music Podcast/i);
    expect(podcast).toBeInTheDocument();

    // user click on the 'home' button that redirects to '/' route (it's actually the very same page they are on it right now)
    await user.click(home);

    // user should be on the same route that has the list of podcasts
    expect(podcast).toBeInTheDocument();
  });

  test("dashboard should render a section owned by <PodcastList>", () => {
    render(
      <Dashboard loading={false}>
        <PodcastOverview>
          <PodcastList podcasts={[]} />
        </PodcastOverview>
      </Dashboard>
    );
    //console.log(prettyDOM(view.container));

    // this is owned by <PodcastList>
    const podcastFilter = screen.getByPlaceholderText(/Filter podcasts.../i);
    expect(podcastFilter).toBeInTheDocument();
  });
});
