import React from "react";
import { prettyDOM, render } from "@testing-library/react";

import { podcastEpisodes } from "@/assets";
import PodcastDetail from "../page";

describe("PODCAST EPISODE LIST", () => {
  test("should render the selected podcast ", () => {
    const params = { id: podcastEpisodes[1].id };
    const view = render(<PodcastDetail params={params} />);

    // the episode given by params:
    expect(
      view.getByText(podcastEpisodes[1].episodes[0].episodeTitle)
    ).toBeInTheDocument();
  });
});
