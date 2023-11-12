import "@testing-library/jest-dom";
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";

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
    render(<PodcastList podcasts={mockPodcasts} />);

    const input = screen.getByPlaceholderText(/Filter podcasts.../i);
    expect(input).toBeInTheDocument();
  });

  test("should render a list <PodcastCard/> component", () => {
    render(<PodcastList podcasts={mockPodcasts} />);

    const authors = screen.getAllByText(/Author/i);

    //console.log(prettyDOM(img as HTMLImageElement));
    expect(authors.length).toEqual(mockPodcasts.length);
  });

  test("should render a list <PodcastCard/> component", () => {
    render(<PodcastList podcasts={mockPodcasts} />);

    const authors = screen.getAllByText(/Author/i);

    //console.log(prettyDOM(img as HTMLImageElement));
    expect(authors.length).toEqual(mockPodcasts.length);
  });

  test("should show what the user has typed on the input", () => {
    render(<PodcastList podcasts={mockPodcasts} />);

    const input: HTMLInputElement = screen.getByTestId("filter-input");
    fireEvent.change(input, { target: { value: "science" } });

    expect(input.value).toBe("science");
  });

  test("should show specific podcasts depending on the user's input", () => {
    render(<PodcastList podcasts={mockPodcasts} />);

    const input: HTMLInputElement = screen.getByTestId("filter-input");

    fireEvent.change(input, { target: { value: "science" } });

    // I should receive only the podcasts with title or description with 'science'
    expect(screen.getByText(/science/i)).toBeInTheDocument();

    expect(() => screen.getByText(/cooking talks/i)).toThrow();
  });

  test("should show the received podcast list if the input it's an empty string '' after searching for the first time ", () => {
    render(<PodcastList podcasts={mockPodcasts} />);

    const input: HTMLInputElement = screen.getByTestId("filter-input");

    fireEvent.change(input, { target: { value: "science" } });

    // I should receive only the podcasts with title or description with 'science'
    expect(screen.getByText(/science/i)).toBeInTheDocument();

    expect(() => screen.getByText(/cooking talks/i)).toThrow();

    // user deletes all the input to start the search again
    fireEvent.change(input, { target: { value: "" } });

    // every podcast has the subtitle "Author: " on their remplate

    expect(screen.getAllByText(/author/i).length).toEqual(mockPodcasts.length);
  });
});
