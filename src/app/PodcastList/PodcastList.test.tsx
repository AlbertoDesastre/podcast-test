import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";

import PodcastList from "../PodcastList/PodcastList";
import { Podcast } from "@/hooks/usePodcasts";

describe("PODCAST LIST", () => {
  let mockPodcasts: Podcast[] = [
    {
      id: "1",
      title: "Podcast 1",
      artist: "Artist 1",
      images: [
        { attributes: { height: "100" }, label: "Imagen 1" },
        { attributes: { height: "200" }, label: "Imagen 2" },
      ],
    },
    {
      id: "2",
      title: "Podcast 2",
      artist: "Artist 2",
      images: [
        { attributes: { height: "100" }, label: "Imagen 1" },
        { attributes: { height: "200" }, label: "Imagen 2" },
      ],
    },
    {
      id: "3",
      title: "Podcast 3",
      artist: "Artist 3",
      images: [
        { attributes: { height: "100" }, label: "Imagen 1" },
        { attributes: { height: "200" }, label: "Imagen 2" },
      ],
    },
  ];

  test("should not render <PodcastCard>", () => {
    const view = render(<PodcastList podcasts={[]} />);
    // console.log(prettyDOM(view.container));
    const img = view.container.querySelector("img");

    expect(img).toBeNull();
  });

  test("should render the elements of a <PodcastCard> if props are not an empty array", () => {
    const view = render(<PodcastList podcasts={mockPodcasts} />);
    const img = view.container.querySelector("img");

    expect(img).toBeInTheDocument();
  });

  test("should render all the elements passed by props", () => {
    const view = render(<PodcastList podcasts={mockPodcasts} />);
    const imgs = view.container.querySelectorAll("img");

    //console.log(prettyDOM(img as HTMLImageElement));
    expect(imgs.length).toEqual(mockPodcasts.length);
  });
});