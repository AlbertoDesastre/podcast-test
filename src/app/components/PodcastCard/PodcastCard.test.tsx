import "@testing-library/jest-dom";
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";

import PodcastCard from "./PodcastCard";
import { Podcast } from "@/services/getPodcasts";
import userEvent from "@testing-library/user-event";

describe("PODCAST CARD", () => {
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

  test("should render the correct elements of the Podcast passed", () => {
    render(<PodcastCard podcast={mockPodcasts[0]} />);

    const h2Text = screen.getByText(mockPodcasts[0].title);
    const pText = screen.getByText(/Artist 1/i); // this equals to the artist of the first position of mockPodcast

    //console.log(prettyDOM(img as HTMLImageElement));
    expect(h2Text).toBeInTheDocument();
    expect(pText).toBeInTheDocument();
  });
});
