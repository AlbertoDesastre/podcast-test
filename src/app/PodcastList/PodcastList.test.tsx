import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";

import { Podcast } from "@/hooks/usePodcasts";
import { podcastsTemplate } from "@/assets";
import PodcastList from "./PodcastList";

describe("PODCAST LIST", () => {
  let mockPodcasts: Podcast[] = podcastsTemplate;

  test("should render an input", () => {
    const view = render(<PodcastList podcasts={mockPodcasts} />);
    // console.log(prettyDOM(view.container));

    const input = view.container.querySelector("input");
    expect(input).toBeInTheDocument();
  });

  test("should render a list <PodcastCard/> component", () => {
    const view = render(<PodcastList podcasts={mockPodcasts} />);

    //   console.log(prettyDOM(view.container));
    const img = view.container.querySelectorAll("img");
    expect(img.length).toEqual(mockPodcasts.length);
  });
});
