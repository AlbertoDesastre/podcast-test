import React from "react";
import { prettyDOM, render, screen } from "@testing-library/react";

import { podcastEpisodes } from "@/assets";
import PodcastEpisodeList from "./PodcastEpisodeList";

describe("PODCAST EPISODE LIST", () => {
  test("should render the amount of links equal to the amount of episodes", () => {
    const episodes = podcastEpisodes[0].episodes;

    render(
      <PodcastEpisodeList podcastEpisodes={episodes} params={{ id: "1" }} />
    ); // this would emulate the component receiven the ID of the Podcast itself, to then be able to navigate

    // if episodes are defined, each episode has an anchor that translater consumer to "podcast/{podcastId/episodes/{episodeId}"
    const anchors = screen.queryAllByRole("link");
    expect(anchors.length).toEqual(episodes.length);
  });

  test("should render the content provided by props", () => {
    const episode1 = podcastEpisodes[0].episodes[0].episodeTitle; // "Episode 1"
    const episode2 = podcastEpisodes[0].episodes[1].episodeTitle; // "Episode 2"
    const episode3 = podcastEpisodes[0].episodes[2].episodeTitle; // "Episode 3"

    render(
      <PodcastEpisodeList
        podcastEpisodes={podcastEpisodes[0].episodes}
        params={{ id: "1" }}
      /> // this would emulate the component received the ID of the Podcast itself, to then be able to navigate
    );

    expect(screen.queryByText(/Episode 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/Episode 2/i)).toBeInTheDocument();
    expect(screen.queryByText(/Episode 3/i)).toBeInTheDocument();
  });

  test("should render link based on the podcastId", () => {
    const podcastPassedByProps = podcastEpisodes[0];
    const view = render(
      <PodcastEpisodeList
        podcastEpisodes={podcastEpisodes[0].episodes}
        params={{ id: "1" }}
      />
    );

    const linkToPodcast = view.container.querySelector("a");

    // the main attributes of PodcastFigure
    expect(linkToPodcast).toBeInTheDocument();
    expect(linkToPodcast).toHaveAttribute(
      "href",
      `/podcast/1/episode/${podcastPassedByProps.id}`
    );
  });
});
