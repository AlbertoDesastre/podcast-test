import "@testing-library/jest-dom";
import { fireEvent, prettyDOM, render } from "@testing-library/react";

import PodcastList from "../PodcastList/PodcastList";
import { Podcast } from "@/hooks/usePodcasts";
import { podcastsTemplate } from "@/assets";
import Filter from "./Filter";
import PodcastCard from "../PodcastCard/PodcastCard";

describe("PODCAST LIST", () => {
  let mockPodcasts: Podcast[] = podcastsTemplate;

  test("should render an input", () => {
    const view = render(<Filter podcasts={mockPodcasts} />);
    // console.log(prettyDOM(view.container));

    const input = view.container.querySelector("input");
    expect(input).toBeInTheDocument();
  });

  test("should render a list <PodcastCard/> component", () => {
    const view = render(<Filter podcasts={mockPodcasts} />);

    //   console.log(prettyDOM(view.container));
    const img = view.container.querySelectorAll("img");
    expect(img.length).toEqual(mockPodcasts.length);
  });
});
