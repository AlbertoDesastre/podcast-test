import React from "react";
import { prettyDOM, render } from "@testing-library/react";

import { podcastEpisodes } from "@/assets";
import PodcastDetail from "../page";

describe("PODCAST EPISODE LIST", () => {
  test("should render the selected podcast details and not render the rest", () => {
    const params = { id: podcastEpisodes[1].id };
    const view = render(<PodcastDetail params={params} />);

    // the episode given by params:
    expect(view.getByText(podcastEpisodes[1].title)).toBeInTheDocument();
    expect(
      view.getByText("by " + podcastEpisodes[1].artist)
    ).toBeInTheDocument();
    expect(view.getByText(podcastEpisodes[1].description)).toBeInTheDocument();

    // some random episode...
    expect(view.queryByText(podcastEpisodes[6].title)).toBeNull();
    expect(view.queryByText(podcastEpisodes[6].artist)).toBeNull();
  });
});
