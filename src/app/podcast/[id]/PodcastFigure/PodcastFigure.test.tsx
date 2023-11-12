import React from "react";
import { prettyDOM, render, screen } from "@testing-library/react";

import { podcastEpisodes } from "@/assets";
import PodcastDetail from "../page";
import PodcastFigure from "./PodcastFigure";

describe("PODCAST FIGURE", () => {
  test("should render the selected podcast details and not render the rest", () => {
    const params = { id: podcastEpisodes[1].id };
    render(<PodcastDetail params={params} />);

    // the episode given by params:
    expect(screen.getByText(podcastEpisodes[1].title)).toBeInTheDocument();
    expect(
      screen.getByText("by " + podcastEpisodes[1].artist)
    ).toBeInTheDocument();
    expect(
      screen.getByText(podcastEpisodes[1].description)
    ).toBeInTheDocument();

    // some random episode...
    expect(() => screen.getByText(podcastEpisodes[6].title)).toThrow();
    expect(() => screen.getByText(podcastEpisodes[6].artist)).toThrow();
  });

  test("should render data passed by props and nothing else", () => {
    const podcastPassedByProps = podcastEpisodes[0];
    render(
      <PodcastFigure
        title={podcastPassedByProps.title}
        artist={podcastPassedByProps.artist}
        description={podcastPassedByProps.description}
        params={{ id: "1", episodeId: podcastPassedByProps.id }}
      />
    );

    // the main attributes of PodcastFigure
    expect(screen.getByText(podcastPassedByProps.title)).toBeInTheDocument();
    expect(
      screen.getByText("by " + podcastPassedByProps.artist)
    ).toBeInTheDocument();
    expect(
      screen.getByText(podcastPassedByProps.description)
    ).toBeInTheDocument();

    const podcastNotPassed = podcastEpisodes[5];

    // a podcast that wasn't passed by props
    expect(() => screen.getByText(podcastNotPassed.title)).toThrow();
    expect(() => screen.getByText(podcastNotPassed.artist)).toThrow();
  });

  test("should render link based on the podcastId", () => {
    const podcastPassedByProps = podcastEpisodes[0];
    const view = render(
      <PodcastFigure
        title={podcastPassedByProps.title}
        artist={podcastPassedByProps.artist}
        description={podcastPassedByProps.description}
        params={{ id: "1", episodeId: podcastPassedByProps.id }}
      />
    );

    const linkToPodcast = view.container.querySelector("a");

    // the main attributes of PodcastFigure
    expect(linkToPodcast).toBeInTheDocument();
    expect(linkToPodcast).toHaveAttribute(
      "href",
      `/podcast/${podcastPassedByProps.id}`
    );
  });
});
