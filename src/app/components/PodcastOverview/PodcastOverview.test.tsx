import "@testing-library/jest-dom";
import { prettyDOM, render, screen } from "@testing-library/react";

import PodcastOverview from "./PodcastOverview";

import PodcastList from "../PodcastList/PodcastList";
import { Podcast } from "@/services/getPodcasts";

describe("PODCAST OVERVIEW", () => {
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
    render(
      <PodcastOverview>
        <PodcastList podcasts={[]} />
      </PodcastOverview>
    );

    expect(() => screen.getByText(/Author/i)).toThrow();
  });

  test("should render all the elements passed by props", () => {
    render(
      <PodcastOverview>
        <PodcastList podcasts={mockPodcasts} />
      </PodcastOverview>
    );
    const authors = screen.getAllByText(/Author/i);

    //console.log(prettyDOM(img as HTMLImageElement));
    expect(authors.length).toEqual(mockPodcasts.length);
  });
});
