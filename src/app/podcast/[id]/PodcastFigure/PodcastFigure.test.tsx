import React from "react";
import { prettyDOM, render } from "@testing-library/react";

import { podcastEpisodes } from "@/assets";
import PodcastDetail from "../page";
import PodcastFigure from "./PodcastFigure";

describe("PODCAST FIGURE", () => {
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

  test("should render data passed by props and nothing else", () => {
    const podcastPassedByProps = podcastEpisodes[0];
    const view = render(
      <PodcastFigure
        title={podcastPassedByProps.title}
        artist={podcastPassedByProps.artist}
        description={podcastPassedByProps.description}
        episodeId={podcastPassedByProps.id}
      />
    );

    // the main attributes of PodcastFigure
    expect(view.getByText(podcastPassedByProps.title)).toBeInTheDocument();
    expect(
      view.getByText("by " + podcastPassedByProps.artist)
    ).toBeInTheDocument();
    expect(
      view.getByText(podcastPassedByProps.description)
    ).toBeInTheDocument();

    const podcastNotPassed = podcastEpisodes[5];

    // a podcast that wasn't passed by props
    expect(view.queryByText(podcastNotPassed.title)).toBeNull();
    expect(view.queryByText(podcastNotPassed.artist)).toBeNull();
  });

  test("should render link based on the podcastId", () => {
    const podcastPassedByProps = podcastEpisodes[0];
    const view = render(
      <PodcastFigure
        title={podcastPassedByProps.title}
        artist={podcastPassedByProps.artist}
        description={podcastPassedByProps.description}
        episodeId={podcastPassedByProps.id}
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
