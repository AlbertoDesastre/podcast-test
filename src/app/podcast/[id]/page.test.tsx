import React from "react";
import { render } from "@testing-library/react";
import PodcastDetail from "./page";
import { podcastEpisodes } from "@/assets";

describe("PODCAST DETAIL - (page --> podcast[id)", () => {
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

  test("should handle a podcast episode not found", () => {
    const params = { id: "90790" };
    const view = render(<PodcastDetail params={params} />);

    expect(view.getByText(/Podcast Not Found/i)).toBeInTheDocument();
  });
});
