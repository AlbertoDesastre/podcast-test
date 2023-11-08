import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";

import PodcastOverview from "./PodcastOverview";

import PodcastList from "../PodcastList/PodcastList";
import { Podcast } from "@/services/getPodcasts";

describe("PODCAST LIST", () => {
  let mockPodcasts: Podcast[] = [
    {
      id: "1",
      title: "Podcast 1",
      artist: "Artist 1",
      images: [
        { attributes: { height: "100" }, label: "Imagen 1" },
        { attributes: { height: "200" }, label: "Imagen 2" },
        { attributes: { height: "300" }, label: "Imagen 3" },
      ],
    },
    {
      id: "2",
      title: "Podcast 2",
      artist: "Artist 2",
      images: [
        { attributes: { height: "100" }, label: "Imagen 1" },
        { attributes: { height: "200" }, label: "Imagen 2" },
        { attributes: { height: "300" }, label: "Imagen 3" },
      ],
    },
    {
      id: "3",
      title: "Podcast 3",
      artist: "Artist 3",
      images: [
        { attributes: { height: "100" }, label: "Imagen 1" },
        { attributes: { height: "200" }, label: "Imagen 2" },
        { attributes: { height: "300" }, label: "Imagen 3" },
      ],
    },
  ];

  // NOTE FOR SELF IMPROVEMENT --> use "screen" methods instead of selecting the container. Recommendation from Kent C. Dodds.
  // Also! Try to get things by role and pass as options the "names". Check if this applies for images...

  /* 
  The benefit of using screen is you no longer need to keep the render call destructure up-to-date as you add/remove the queries you need. 
  You only need to type screen. and let your editor's magic autocomplete take care of the rest.
  */

  test("should not render <PodcastCard>", () => {
    const view = render(
      <PodcastOverview>
        <PodcastList podcasts={[]} />
      </PodcastOverview>
    );
    // console.log(prettyDOM(view.container));
    const img = view.container.querySelector("img");

    expect(img).toBeNull();
  });

  test("should render the elements of a <PodcastCard> if props are not an empty array", () => {
    const view = render(
      <PodcastOverview>
        <PodcastList podcasts={mockPodcasts} />
      </PodcastOverview>
    );
    const img = view.container.querySelector("img");

    expect(img).toBeInTheDocument();
  });

  test("should render all the elements passed by props", () => {
    const view = render(
      <PodcastOverview>
        <PodcastList podcasts={mockPodcasts} />
      </PodcastOverview>
    );
    const imgs = view.container.querySelectorAll("img");

    //console.log(prettyDOM(img as HTMLImageElement));
    expect(imgs.length).toEqual(mockPodcasts.length);
  });
});
