import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";

import { podcastsTemplate } from "@/assets";
import PodcastList from "./PodcastList";
import { Podcast } from "@/services/getPodcasts";

describe("PODCAST LIST", () => {
  let mockPodcasts: Podcast[] = podcastsTemplate;

  // NOTE FOR SELF IMPROVEMENT --> use "screen" methods instead of selecting the container. Recommendation from Kent C. Dodds.
  // Also! Try to get things by role and pass as options the "names". Check if this applies for images...
  /* 
  The benefit of using screen is you no longer need to keep the render call destructure up-to-date as you add/remove the queries you need. 
  You only need to type screen. and let your editor's magic autocomplete take care of the rest.
  */
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

  // should have tested the inputs of the users, and check if the podcasts shown change when they make any change to the input
  // also this would help to see synchronism issues
});
