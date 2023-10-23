import React from "react";
import { prettyDOM, render } from "@testing-library/react";

import { podcastEpisodes } from "@/assets";
import PodcastDetail from "../page";
import PodcastEpisodeList from "./PodcastEpisodeList";

describe("PODCAST EPISODE LIST", () => {
  test("should render the amount of links equal to the amount of episodes", () => {
    const episodes = podcastEpisodes[0].episodes;

    const view = render(
      <PodcastEpisodeList podcastEpisodes={episodes} params={{ id: "1" }} />
    ); // this would emulate the component receiven the ID of the Podcast itself, to then be able to navigate

    // if episodes are defined, each episode has an anchor that translater consumer to "podcast/{podcastId/episodes/{episodeId}"
    const anchors = view.container.querySelectorAll("a");
    expect(anchors.length).toEqual(episodes.length);
  });

  test("should render the content provided by props", () => {
    const episode1 = podcastEpisodes[0].episodes[0].episodeTitle; // "Episode 1"
    const episode2 = podcastEpisodes[0].episodes[1].episodeTitle; // "Episode 2"
    const episode3 = podcastEpisodes[0].episodes[2].episodeTitle; // "Episode 3"

    const view = render(
      <PodcastEpisodeList
        podcastEpisodes={podcastEpisodes[0].episodes}
        params={{ id: "1" }}
      /> // this would emulate the component receiven the ID of the Podcast itself, to then be able to navigate
    );

    expect(view.queryByText(/Episode 1/i)).toBeInTheDocument();
    expect(view.queryByText(/Episode 2/i)).toBeInTheDocument();
    expect(view.queryByText(/Episode 3/i)).toBeInTheDocument();
  });
});
